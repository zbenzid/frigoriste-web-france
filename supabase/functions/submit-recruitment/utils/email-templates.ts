
import { escapeHtml } from "../../submit-contact/utils/sanitization.ts";

export function generateRecruitmentEmailBody(
  submissionData: any,
  cvUrl: string,
  coverLetterUrl: string,
  clientIP: string
): string {
  return `
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
}
