
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@1.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Initialiser le client Resend avec votre clé API
const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Initialiser le client Supabase
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "";
const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

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

serve(async (req) => {
  // Gérer les requêtes OPTIONS pour CORS
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Récupérer les données du formulaire
    const formData: ContactFormData = await req.json();

    // Valider les données requises
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      return new Response(
        JSON.stringify({
          error: "Tous les champs obligatoires doivent être remplis",
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    console.log("Données du formulaire reçues:", formData);

    // Insérer les données dans la base de données
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
      console.error("Erreur lors de l'enregistrement du formulaire:", submissionError);
      return new Response(
        JSON.stringify({
          error: "Erreur lors de l'enregistrement du formulaire",
          details: submissionError,
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    console.log("Données enregistrées avec succès:", submissionData);

    // Formater le corps de l'email
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
      <p><strong>De:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Téléphone:</strong> ${formData.phone}</p>
      <p><strong>Type de demande:</strong> ${requestType}</p>
      ${addressInfo ? `<p><strong>Adresse:</strong> ${formData.address}, ${formData.postalCode || ''} ${formData.city || ''}</p>` : ''}
      <h3>Message:</h3>
      <p>${formData.message.replace(/\n/g, '<br>')}</p>
    `;

    try {
      // Envoyer l'email via Resend
      const { data: emailData, error: emailError } = await resend.emails.send({
        from: "Formulaire de Contact <onboarding@resend.dev>",
        to: ["contact@lefrigoriste.fr"],
        subject: `Nouvelle demande de contact - ${requestType} - ${formData.name}`,
        html: emailBody,
        reply_to: formData.email,
      });

      if (emailError) {
        console.error("Erreur lors de l'envoi de l'email:", emailError);
        
        // Mise à jour du statut en cas d'échec d'envoi de mail
        await supabase
          .from("contact_submissions")
          .update({ status: "email_failed" })
          .eq("id", submissionData[0].id);
        
        // On retourne quand même un succès à l'utilisateur car les données sont enregistrées
        return new Response(
          JSON.stringify({
            success: true,
            message: "Votre demande a été enregistrée mais l'email n'a pas pu être envoyé",
          }),
          {
            status: 200,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }

      console.log("Email envoyé avec succès:", emailData);

      // Mettre à jour le statut de la soumission
      await supabase
        .from("contact_submissions")
        .update({ status: "email_sent" })
        .eq("id", submissionData[0].id);

      // Répondre avec succès
      return new Response(
        JSON.stringify({
          success: true,
          message: "Votre demande a été envoyée avec succès",
        }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    } catch (emailSendingError) {
      console.error("Exception lors de l'envoi de l'email:", emailSendingError);
      
      // Mise à jour du statut en cas d'exception d'envoi de mail
      await supabase
        .from("contact_submissions")
        .update({ status: "email_exception" })
        .eq("id", submissionData[0].id);
      
      // On retourne quand même un succès à l'utilisateur
      return new Response(
        JSON.stringify({
          success: true,
          message: "Votre demande a été enregistrée mais l'email n'a pas pu être envoyé",
        }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    console.error("Erreur lors du traitement de la demande:", error);
    return new Response(
      JSON.stringify({
        error: "Une erreur est survenue lors du traitement de la demande",
        details: error.message,
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
