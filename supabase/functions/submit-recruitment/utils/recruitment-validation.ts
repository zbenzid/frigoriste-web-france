
interface RecruitmentFormData {
  name: string;
  email: string;
  phone: string;
  desiredPosition: string;
  motivation?: string;
  cvFile?: File;
  coverLetterFile?: File;
}

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/plain'
];

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,20}$/;
  return phoneRegex.test(phone.trim());
}

export function validateFile(file: File): { isValid: boolean; error?: string } {
  if (file.size > MAX_FILE_SIZE) {
    return { isValid: false, error: "Le fichier est trop volumineux (max 5MB)" };
  }
  
  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    return { isValid: false, error: "Type de fichier non autorisé (PDF, DOC, DOCX, TXT uniquement)" };
  }
  
  return { isValid: true };
}

export function validateRecruitmentFormData(formData: FormData): { isValid: boolean; errors: string[] } {
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
