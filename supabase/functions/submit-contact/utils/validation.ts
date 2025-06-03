
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  requestType?: string;
  address?: string;
  postalCode?: string;
  city?: string;
  message: string;
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,20}$/;
  return phoneRegex.test(phone.trim());
}

export function validateFormData(data: any): { isValid: boolean; errors: string[] } {
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
