
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

const requestCounts = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 3; // 3 recruitment submissions per day
const RATE_WINDOW = 24 * 60 * 60 * 1000; // 24 hours
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/plain'
];

interface RecruitmentFormData {
  name: string;
  email: string;
  phone: string;
  desiredPosition: string;
  motivation?: string;
  cvFile?: File;
  coverLetterFile?: File;
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
    .substring(0, 1000);
}

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function validateFile(file: File): { isValid: boolean; error?: string } {
  if (file.size > MAX_FILE_SIZE) {
    return { isValid: false, error: "Le fichier est trop volumineux (max 5MB)" };
  }
  
  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    return { isValid: false, error: "Type de fichier non autorisé (PDF, DOC, DOCX, TXT uniquement)" };
  }
  
  return { isValid: true };
}

function validateFormData(formData: FormData): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const desiredPosition = formData.get("desiredPosition") as string;
  const cvFile = formData.get("cvFile") as File;
  const coverLetterFile = formData.get("coverLetterFile") as File;
  
  if (!name || name.trim().length < 2) {
    errors.push("Le nom doit contenir au moins 2 caractères");
  }
  
  if (!email || !validateEmail(email)) {
    errors.push("Adresse email invalide");
  }
  
  if (!phone || !validatePhone(phone)) {
    errors.push("Numéro de téléphone invalide");
  }
  
  if (!desiredPosition || desiredPosition.trim().length < 2) {
    errors.push("Le poste souhaité doit être spécifié");
  }
  
  if (cvFile && cvFile.size > 0) {
    const fileValidation = validateFile(cvFile);
    if (!fileValidation.isValid) {
      errors.push(`CV: ${fileValidation.error}`);
    }
  }
  
  if (coverLetterFile && coverLetterFile.size > 0) {
    const fileValidation = validateFile(coverLetterFile);
    if (!fileValidation.isValid) {
      errors.push(`Lettre de motivation: ${fileValidation.error}`);
    }
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
      console.log(`Rate limit exceeded for recruitment from IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Limite de candidatures atteinte. Veuillez réessayer demain." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const contentLength = req.headers.get("content-length");
    if (contentLength && parseInt(contentLength) > 10 * 1024 * 1024) { // 10MB total limit
      return new Response(
        JSON.stringify({ error: "Données trop volumineuses" }),
        { status: 413, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const formData = await req.formData();
    const validation = validateFormData(formData);
    
    if (!validation.isValid) {
      console.log("Validation errors:", validation.errors);
      return new Response(
        JSON.stringify({ error: "Données invalides", details: validation.errors }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const submissionData: RecruitmentFormData = {
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
      const sanitizedFileName = submissionData.cvFile.name.replace(/[^a-zA-Z0-9.-]/g, '_');
      const cvFileName = `${submissionId}/cv_${sanitizedFileName}`;
      const cvArrayBuffer = await submissionData.cvFile.arrayBuffer();
      
      const { error: cvUploadError } = await supabase.storage
        .from("recruitment-uploads")
        .upload(cvFileName, cvArrayBuffer, {
          contentType: submissionData.cvFile.type,
          cacheControl: '3600',
          upsert: false
        });

      if (cvUploadError) {
        console.error("CV upload error:", cvUploadError);
        return new Response(
          JSON.stringify({ error: "Erreur lors de l'upload du CV" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      cvFilePath = cvFileName;
    }

    // Upload cover letter file if provided
    if (submissionData.coverLetterFile && submissionData.coverLetterFile.size > 0) {
      const sanitizedFileName = submissionData.coverLetterFile.name.replace(/[^a-zA-Z0-9.-]/g, '_');
      const coverLetterFileName = `${submissionId}/lettre_motivation_${sanitizedFileName}`;
      const coverLetterArrayBuffer = await submissionData.coverLetterFile.arrayBuffer();
      
      const { error: coverLetterUploadError } = await supabase.storage
        .from("recruitment-uploads")
        .upload(coverLetterFileName, coverLetterArrayBuffer, {
          contentType: submissionData.coverLetterFile.type,
          cacheControl: '3600',
          upsert: false
        });

      if (coverLetterUploadError) {
        console.error("Cover letter upload error:", coverLetterUploadError);
        return new Response(
          JSON.stringify({ error: "Erreur lors de l'upload de la lettre de motivation" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      coverLetterFilePath = coverLetterFileName;
    }

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

    // Generate file download URLs for email
    let cvUrl = "";
    let coverLetterUrl = "";

    if (cvFilePath) {
      const { data: cvSignedUrl } = await supabase.storage
        .from("recruitment-uploads")
        .createSignedUrl(cvFilePath, 604800); // 7 days
      cvUrl = cvSignedUrl?.signedUrl || "";
    }

    if (coverLetterFilePath) {
      const { data: coverLetterSignedUrl } = await supabase.storage
        .from("recruitment-uploads")
        .createSignedUrl(coverLetterFilePath, 604800); // 7 days
      coverLetterUrl = coverLetterSignedUrl?.signedUrl || "";
    }

    const emailBody = `
      <h2>Nouvelle candidature reçue</h2>
      <p><strong>Candidat:</strong> ${escapeHtml(submissionData.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(submissionData.email)}</p>
      <p><strong>Téléphone:</strong> ${escapeHtml(submissionData.phone)}</p>
      <p><strong>Poste souhaité:</strong> ${escapeHtml(submissionData.desiredPosition)}</p>
      
      ${submissionData.motivation ? `
        <h3>Motivation:</h3>
        <p>${escapeHtml(submissionData.motivation).replace(/\n/g, '<br>')}</p>
      ` : ''}
      
      ${cvUrl ? `<p><strong>CV:</strong> <a href="${cvUrl}">Télécharger le CV</a></p>` : ''}
      ${coverLetterUrl ? `<p><strong>Lettre de motivation:</strong> <a href="${coverLetterUrl}">Télécharger la lettre</a></p>` : ''}
      
      <hr>
      <p><small>Candidature soumise le ${new Date().toLocaleString('fr-FR')} depuis l'IP: ${clientIP}</small></p>
    `;

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
