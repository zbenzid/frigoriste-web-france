
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@1.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin",
};

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

// Rate limiting storage (in production, use Redis or similar)
const requestCounts = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // 5 requests per hour
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  requestType?: string;
  address?: string;
  postalCode?: string;
  city?: string;
  message: string;
}

function getClientIP(request: Request): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0] || 
         request.headers.get("x-real-ip") || 
         "unknown";
}

function isRateLimited(clientIP: string): boolean {
  const now = Date.now();
  const clientData = requestCounts.get(clientIP);
  
  if (!clientData || now > clientData.resetTime) {
    requestCounts.set(clientIP, { count: 1, resetTime: now + RATE_WINDOW });
    return false;
  }
  
  if (clientData.count >= RATE_LIMIT) {
    return true;
  }
  
  clientData.count++;
  return false;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,20}$/;
  return phoneRegex.test(phone.trim());
}

function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '')
    .substring(0, 1000); // Limit length
}

function escapeHtml(text: string): string {
  const htmlEscapes: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;'
  };
  
  return text.replace(/[&<>"'/]/g, (match) => htmlEscapes[match] || match);
}

function validateFormData(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2) {
    errors.push("Le nom doit contenir au moins 2 caractères");
  }
  
  if (!data.email || typeof data.email !== 'string' || !validateEmail(data.email)) {
    errors.push("Adresse email invalide");
  }
  
  if (!data.phone || typeof data.phone !== 'string' || !validatePhone(data.phone)) {
    errors.push("Numéro de téléphone invalide");
  }
  
  if (!data.message || typeof data.message !== 'string' || data.message.trim().length < 10) {
    errors.push("Le message doit contenir au moins 10 caractères");
  }
  
  if (data.requestType && typeof data.requestType !== 'string') {
    errors.push("Type de demande invalide");
  }
  
  return { isValid: errors.length === 0, errors };
}

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
    if (contentLength && parseInt(contentLength) > 10000) { // 10KB limit
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

    const getRequestTypeLabel = (type: string | undefined) => {
      const types: Record<string, string> = {
        urgence: "Urgence",
        depannage: "Dépannage",
        installation: "Installation",
        maintenance: "Maintenance",
        devis: "Devis",
        autre: "Autre",
      };
      return type ? types[type] || type : "Non spécifié";
    };

    const requestType = getRequestTypeLabel(formData.requestType);
    const addressInfo = formData.address 
      ? `\n\nAdresse: ${formData.address}${formData.postalCode ? ', ' + formData.postalCode : ''}${formData.city ? ' ' + formData.city : ''}`
      : '';

    const emailBody = `
      <h2>Nouvelle demande de contact</h2>
      <p><strong>De:</strong> ${escapeHtml(formData.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(formData.email)}</p>
      <p><strong>Téléphone:</strong> ${escapeHtml(formData.phone)}</p>
      <p><strong>Type de demande:</strong> ${escapeHtml(requestType)}</p>
      ${addressInfo ? `<p><strong>Adresse:</strong> ${escapeHtml(formData.address!)}, ${escapeHtml(formData.postalCode || '')} ${escapeHtml(formData.city || '')}</p>` : ''}
      <h3>Message:</h3>
      <p>${escapeHtml(formData.message).replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>Soumis le ${new Date().toLocaleString('fr-FR')} depuis l'IP: ${clientIP}</small></p>
    `;

    try {
      const { data: emailData, error: emailError } = await resend.emails.send({
        from: "Formulaire de Contact <contact@lefrigoriste.fr>",
        to: ["contact@lefrigoriste.fr"],
        subject: `Nouvelle demande de contact - ${requestType} - ${formData.name}`,
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
