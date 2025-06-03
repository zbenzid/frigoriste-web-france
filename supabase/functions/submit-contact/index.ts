
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@1.0.0";

import { corsHeaders, MAX_CONTENT_LENGTH } from './utils/constants.ts';
import { getClientIP, isRateLimited } from './utils/rate-limiting.ts';
import { validateFormData, type ContactFormData } from './utils/validation.ts';
import { sanitizeInput } from './utils/sanitization.ts';
import { formatEmailBody, formatEmailSubject } from './utils/email-formatter.ts';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Méthode non autorisée" }),
      { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    const clientIP = getClientIP(req);
    
    if (isRateLimited(clientIP)) {
      console.log(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Trop de demandes. Veuillez réessayer plus tard." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const contentLength = req.headers.get("content-length");
    if (contentLength && parseInt(contentLength) > MAX_CONTENT_LENGTH) {
      return new Response(
        JSON.stringify({ error: "Données trop volumineuses" }),
        { status: 413, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const rawData = await req.json();
    const validation = validateFormData(rawData);
    
    if (!validation.isValid) {
      console.log("Validation errors:", validation.errors);
      return new Response(
        JSON.stringify({ error: "Données invalides", details: validation.errors }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const formData: ContactFormData = {
      name: sanitizeInput(rawData.name),
      email: sanitizeInput(rawData.email.toLowerCase()),
      phone: sanitizeInput(rawData.phone),
      requestType: rawData.requestType ? sanitizeInput(rawData.requestType) : undefined,
      address: rawData.address ? sanitizeInput(rawData.address) : undefined,
      postalCode: rawData.postalCode ? sanitizeInput(rawData.postalCode) : undefined,
      city: rawData.city ? sanitizeInput(rawData.city) : undefined,
      message: sanitizeInput(rawData.message),
    };

    console.log("Processing validated form data");

    const { data: submissionData, error: submissionError } = await supabase
      .from("contact_submissions")
      .insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          request_type: formData.requestType || null,
          address: formData.address || null,
          postal_code: formData.postalCode || null,
          city: formData.city || null,
          message: formData.message,
        },
      ])
      .select();

    if (submissionError) {
      console.error("Database error:", submissionError);
      return new Response(
        JSON.stringify({ error: "Erreur lors de l'enregistrement" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailBody = formatEmailBody(formData, clientIP);
    const emailSubject = formatEmailSubject(formData);

    try {
      const { data: emailData, error: emailError } = await resend.emails.send({
        from: "Formulaire de Contact <contact@lefrigoriste.fr>",
        to: ["contact@lefrigoriste.fr"],
        subject: emailSubject,
        html: emailBody,
        reply_to: formData.email,
      });

      if (emailError) {
        console.error("Email error:", emailError);
        await supabase
          .from("contact_submissions")
          .update({ status: "email_failed" })
          .eq("id", submissionData[0].id);
        
        return new Response(
          JSON.stringify({
            success: true,
            message: "Votre demande a été enregistrée mais l'email n'a pas pu être envoyé",
          }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      console.log("Email sent successfully");
      await supabase
        .from("contact_submissions")
        .update({ status: "email_sent" })
        .eq("id", submissionData[0].id);

      return new Response(
        JSON.stringify({
          success: true,
          message: "Votre demande a été envoyée avec succès",
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );

    } catch (emailException) {
      console.error("Email exception:", emailException);
      await supabase
        .from("contact_submissions")
        .update({ status: "email_exception" })
        .eq("id", submissionData[0].id);
      
      return new Response(
        JSON.stringify({
          success: true,
          message: "Votre demande a été enregistrée",
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(
      JSON.stringify({ error: "Une erreur inattendue s'est produite" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
