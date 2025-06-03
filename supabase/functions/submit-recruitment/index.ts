import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@1.0.0";

import { corsHeaders, MAX_CONTENT_LENGTH } from "./utils/constants.ts";
import { validateRecruitmentFormData } from "./utils/recruitment-validation.ts";
import { uploadFileToStorage, createSignedUrl } from "./utils/file-handling.ts";
import { generateRecruitmentEmailBody } from "./utils/email-templates.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

// Rate limiting specifically for recruitment (3 per day)
const recruitmentRequestCounts = new Map<string, { count: number; resetTime: number }>();
const RECRUITMENT_RATE_LIMIT = 3;
const RECRUITMENT_RATE_WINDOW = 24 * 60 * 60 * 1000; // 24 hours

function getClientIP(req: Request): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
         req.headers.get("x-real-ip") || 
         "unknown";
}

function isRecruitmentRateLimited(clientIP: string): boolean {
  const now = Date.now();
  const clientData = recruitmentRequestCounts.get(clientIP);
  
  if (!clientData || now > clientData.resetTime) {
    recruitmentRequestCounts.set(clientIP, { count: 1, resetTime: now + RECRUITMENT_RATE_WINDOW });
    return false;
  }
  
  if (clientData.count >= RECRUITMENT_RATE_LIMIT) {
    return true;
  }
  
  clientData.count++;
  return false;
}

function sanitizeInput(input: string): string {
  return input.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
}

interface RecruitmentSubmissionData {
  name: string;
  email: string;
  phone: string;
  desiredPosition: string;
  motivation?: string;
  cvFile?: File;
  coverLetterFile?: File;
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
    
    if (isRecruitmentRateLimited(clientIP)) {
      console.log(`Rate limit exceeded for recruitment from IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Limite de candidatures atteinte. Veuillez réessayer demain." }),
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

    const formData = await req.formData();
    const validation = validateRecruitmentFormData(formData);
    
    if (!validation.isValid) {
      console.log("Validation errors:", validation.errors);
      return new Response(
        JSON.stringify({ error: "Données invalides", details: validation.errors }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const submissionData: RecruitmentSubmissionData = {
      name: sanitizeInput(formData.get("name") as string),
      email: sanitizeInput((formData.get("email") as string).toLowerCase()),
      phone: sanitizeInput(formData.get("phone") as string),
      desiredPosition: sanitizeInput(formData.get("desiredPosition") as string),
      motivation: formData.get("motivation") ? sanitizeInput(formData.get("motivation") as string) : undefined,
      cvFile: formData.get("cvFile") as File || undefined,
      coverLetterFile: formData.get("coverLetterFile") as File || undefined,
    };

    console.log("Processing validated recruitment data");

    const submissionId = crypto.randomUUID();
    let cvFilePath = null;
    let coverLetterFilePath = null;

    // Upload CV file if provided
    if (submissionData.cvFile && submissionData.cvFile.size > 0) {
      const cvUploadResult = await uploadFileToStorage(supabase, submissionData.cvFile, submissionId, 'cv');
      if (!cvUploadResult.success) {
        return new Response(
          JSON.stringify({ error: cvUploadResult.error }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      cvFilePath = cvUploadResult.filePath;
    }

    // Upload cover letter file if provided
    if (submissionData.coverLetterFile && submissionData.coverLetterFile.size > 0) {
      const coverLetterUploadResult = await uploadFileToStorage(supabase, submissionData.coverLetterFile, submissionId, 'cover_letter');
      if (!coverLetterUploadResult.success) {
        return new Response(
          JSON.stringify({ error: coverLetterUploadResult.error }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      coverLetterFilePath = coverLetterUploadResult.filePath;
    }

    // Save to database
    const { data: dbSubmission, error: dbError } = await supabase
      .from("recruitment_submissions")
      .insert([{
        name: submissionData.name,
        email: submissionData.email,
        phone: submissionData.phone,
        desired_position: submissionData.desiredPosition,
        motivation: submissionData.motivation,
        cv_file_path: cvFilePath,
        cover_letter_file_path: coverLetterFilePath,
      }])
      .select();

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Erreur lors de l'enregistrement de la candidature" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Generate signed URLs for email
    const cvUrl = cvFilePath ? await createSignedUrl(supabase, cvFilePath) : "";
    const coverLetterUrl = coverLetterFilePath ? await createSignedUrl(supabase, coverLetterFilePath) : "";

    const emailBody = generateRecruitmentEmailBody(submissionData, cvUrl, coverLetterUrl, clientIP);

    try {
      const { data: emailData, error: emailError } = await resend.emails.send({
        from: "Candidatures LeFrigoriste <contact@lefrigoriste.fr>",
        to: ["contact@lefrigoriste.fr"],
        subject: `Nouvelle candidature - ${submissionData.desiredPosition} - ${submissionData.name}`,
        html: emailBody,
        reply_to: submissionData.email,
      });

      if (emailError) {
        console.error("Email error:", emailError);
        await supabase
          .from("recruitment_submissions")
          .update({ status: "email_failed" })
          .eq("id", dbSubmission[0].id);
        
        return new Response(
          JSON.stringify({
            success: true,
            message: "Candidature enregistrée mais email non envoyé",
          }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      console.log("Recruitment email sent successfully");
      await supabase
        .from("recruitment_submissions")
        .update({ status: "email_sent" })
        .eq("id", dbSubmission[0].id);

      return new Response(
        JSON.stringify({
          success: true,
          message: "Candidature envoyée avec succès",
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );

    } catch (emailException) {
      console.error("Email exception:", emailException);
      await supabase
        .from("recruitment_submissions")
        .update({ status: "email_exception" })
        .eq("id", dbSubmission[0].id);
      
      return new Response(
        JSON.stringify({
          success: true,
          message: "Candidature enregistrée",
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
