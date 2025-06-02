
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@1.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

interface RecruitmentFormData {
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

  try {
    const formData = await req.formData();
    
    const submissionData: RecruitmentFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      desiredPosition: formData.get("desiredPosition") as string,
      motivation: formData.get("motivation") as string || undefined,
      cvFile: formData.get("cvFile") as File || undefined,
      coverLetterFile: formData.get("coverLetterFile") as File || undefined,
    };

    // Validate required fields
    if (!submissionData.name || !submissionData.email || !submissionData.phone || !submissionData.desiredPosition) {
      return new Response(
        JSON.stringify({ error: "Tous les champs obligatoires doivent être remplis" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Données de candidature reçues:", submissionData);

    const submissionId = crypto.randomUUID();
    let cvFilePath = null;
    let coverLetterFilePath = null;

    // Upload CV file if provided
    if (submissionData.cvFile && submissionData.cvFile.size > 0) {
      const cvFileName = `${submissionId}/cv_${submissionData.cvFile.name}`;
      const cvArrayBuffer = await submissionData.cvFile.arrayBuffer();
      
      const { error: cvUploadError } = await supabase.storage
        .from("recruitment-uploads")
        .upload(cvFileName, cvArrayBuffer, {
          contentType: submissionData.cvFile.type,
        });

      if (cvUploadError) {
        console.error("Erreur upload CV:", cvUploadError);
        return new Response(
          JSON.stringify({ error: "Erreur lors de l'upload du CV" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      cvFilePath = cvFileName;
    }

    // Upload cover letter file if provided
    if (submissionData.coverLetterFile && submissionData.coverLetterFile.size > 0) {
      const coverLetterFileName = `${submissionId}/lettre_motivation_${submissionData.coverLetterFile.name}`;
      const coverLetterArrayBuffer = await submissionData.coverLetterFile.arrayBuffer();
      
      const { error: coverLetterUploadError } = await supabase.storage
        .from("recruitment-uploads")
        .upload(coverLetterFileName, coverLetterArrayBuffer, {
          contentType: submissionData.coverLetterFile.type,
        });

      if (coverLetterUploadError) {
        console.error("Erreur upload lettre de motivation:", coverLetterUploadError);
        return new Response(
          JSON.stringify({ error: "Erreur lors de l'upload de la lettre de motivation" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      coverLetterFilePath = coverLetterFileName;
    }

    // Insert recruitment submission into database
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
      console.error("Erreur base de données:", dbError);
      return new Response(
        JSON.stringify({ error: "Erreur lors de l'enregistrement de la candidature" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Candidature enregistrée:", dbSubmission);

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

    // Prepare email content
    const emailBody = `
      <h2>Nouvelle candidature reçue</h2>
      <p><strong>Candidat:</strong> ${submissionData.name}</p>
      <p><strong>Email:</strong> ${submissionData.email}</p>
      <p><strong>Téléphone:</strong> ${submissionData.phone}</p>
      <p><strong>Poste souhaité:</strong> ${submissionData.desiredPosition}</p>
      
      ${submissionData.motivation ? `
        <h3>Motivation:</h3>
        <p>${submissionData.motivation.replace(/\n/g, '<br>')}</p>
      ` : ''}
      
      ${cvUrl ? `<p><strong>CV:</strong> <a href="${cvUrl}">Télécharger le CV</a></p>` : ''}
      ${coverLetterUrl ? `<p><strong>Lettre de motivation:</strong> <a href="${coverLetterUrl}">Télécharger la lettre</a></p>` : ''}
      
      <hr>
      <p><em>Candidature soumise le ${new Date().toLocaleString('fr-FR')}</em></p>
    `;

    console.log("Tentative d'envoi d'email de candidature avec Resend...");
    console.log("Configuration email candidature:", {
      from: "Candidatures LeFrigoriste <contact@lefrigoriste.fr>",
      to: ["contact@lefrigoriste.fr"],
      subject: `Nouvelle candidature - ${submissionData.desiredPosition} - ${submissionData.name}`,
      reply_to: submissionData.email,
    });

    try {
      const { data: emailData, error: emailError } = await resend.emails.send({
        from: "Candidatures LeFrigoriste <contact@lefrigoriste.fr>",
        to: ["contact@lefrigoriste.fr"],
        subject: `Nouvelle candidature - ${submissionData.desiredPosition} - ${submissionData.name}`,
        html: emailBody,
        reply_to: submissionData.email,
      });

      if (emailError) {
        console.error("Erreur envoi email candidature:", emailError);
        
        await supabase
          .from("recruitment_submissions")
          .update({ status: "email_failed" })
          .eq("id", dbSubmission[0].id);
        
        return new Response(
          JSON.stringify({
            success: true,
            message: "Candidature enregistrée mais email non envoyé",
            emailError: emailError,
          }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      console.log("Email candidature envoyé avec succès:", emailData);

      await supabase
        .from("recruitment_submissions")
        .update({ status: "email_sent" })
        .eq("id", dbSubmission[0].id);

      return new Response(
        JSON.stringify({
          success: true,
          message: "Candidature envoyée avec succès",
          emailData: emailData,
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );

    } catch (emailException) {
      console.error("Exception email candidature:", emailException);
      
      await supabase
        .from("recruitment_submissions")
        .update({ status: "email_exception" })
        .eq("id", dbSubmission[0].id);
      
      return new Response(
        JSON.stringify({
          success: true,
          message: "Candidature enregistrée mais email non envoyé",
          error: emailException.message,
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

  } catch (error) {
    console.error("Erreur traitement candidature:", error);
    return new Response(
      JSON.stringify({
        error: "Une erreur est survenue lors du traitement de la candidature",
        details: error.message,
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
