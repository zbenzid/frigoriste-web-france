
import { escapeHtml } from './sanitization.ts';
import type { ContactFormData } from './validation.ts';

export function getRequestTypeLabel(type: string | undefined): string {
  const types: Record<string, string> = {
    urgence: "Urgence",
    depannage: "Dépannage",
    installation: "Installation",
    maintenance: "Maintenance",
    devis: "Devis",
    autre: "Autre",
  };
  return type ? types[type] || type : "Non spécifié";
}

export function formatEmailBody(formData: ContactFormData, clientIP: string): string {
  const requestType = getRequestTypeLabel(formData.requestType);
  const addressInfo = formData.address 
    ? `\n\nAdresse: ${formData.address}${formData.postalCode ? ', ' + formData.postalCode : ''}${formData.city ? ' ' + formData.city : ''}`
    : '';

  return `
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
}

export function formatEmailSubject(formData: ContactFormData): string {
  const requestType = getRequestTypeLabel(formData.requestType);
  return `Nouvelle demande de contact - ${requestType} - ${formData.name}`;
}
