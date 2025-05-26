
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Upload, FileText, Send, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

const recruitmentSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Numéro de téléphone invalide'),
  desiredPosition: z.string().min(1, 'Veuillez sélectionner un poste'),
  motivation: z.string().optional(),
  cvFile: z
    .instanceof(File)
    .optional()
    .refine((file) => !file || file.size <= MAX_FILE_SIZE, 'Le CV ne doit pas dépasser 5MB')
    .refine((file) => !file || ACCEPTED_FILE_TYPES.includes(file.type), 'Format de fichier non supporté'),
  coverLetterFile: z
    .instanceof(File)
    .optional()
    .refine((file) => !file || file.size <= MAX_FILE_SIZE, 'La lettre de motivation ne doit pas dépasser 5MB')
    .refine((file) => !file || ACCEPTED_FILE_TYPES.includes(file.type), 'Format de fichier non supporté'),
});

type RecruitmentFormData = z.infer<typeof recruitmentSchema>;

interface RecruitmentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RecruitmentDialog: React.FC<RecruitmentDialogProps> = ({ open, onOpenChange }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null);

  const form = useForm<RecruitmentFormData>({
    resolver: zodResolver(recruitmentSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      desiredPosition: '',
      motivation: '',
    },
  });

  const positions = [
    'Frigoriste / Technicien SAV',
    'Technicien en climatisation',
    'Monteur frigoriste',
    'Chef d\'équipe froid',
    'Apprenti frigoriste',
    'Commercial sédentaire',
    'Technico-commercial',
    'Autre poste',
  ];

  const handleFileChange = (file: File | null, type: 'cv' | 'coverLetter') => {
    if (type === 'cv') {
      setCvFile(file);
      form.setValue('cvFile', file || undefined);
    } else {
      setCoverLetterFile(file);
      form.setValue('coverLetterFile', file || undefined);
    }
  };

  const FileUploadField = ({ 
    label, 
    file, 
    onFileChange, 
    required = false 
  }: { 
    label: string; 
    file: File | null; 
    onFileChange: (file: File | null) => void;
    required?: boolean;
  }) => (
    <div className="space-y-2">
      <FormLabel className={required ? "after:content-['*'] after:ml-0.5 after:text-red-500" : ""}>
        {label}
      </FormLabel>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-primary/50 transition-colors">
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => {
            const selectedFile = e.target.files?.[0] || null;
            onFileChange(selectedFile);
          }}
          className="hidden"
          id={`file-${label.toLowerCase().replace(/\s+/g, '-')}`}
        />
        <label
          htmlFor={`file-${label.toLowerCase().replace(/\s+/g, '-')}`}
          className="cursor-pointer flex flex-col items-center space-y-2"
        >
          {file ? (
            <div className="flex items-center space-x-2 text-green-600">
              <FileText className="h-5 w-5" />
              <span className="text-sm">{file.name}</span>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.preventDefault();
                  onFileChange(null);
                }}
                className="h-6 w-6 p-0 text-gray-500 hover:text-red-500"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <>
              <Upload className="h-8 w-8 text-gray-400" />
              <div className="text-center">
                <p className="text-sm text-gray-600">Cliquez pour sélectionner un fichier</p>
                <p className="text-xs text-gray-500">PDF, DOC, DOCX • Max 5MB</p>
              </div>
            </>
          )}
        </label>
      </div>
    </div>
  );

  const onSubmit = async (data: RecruitmentFormData) => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('desiredPosition', data.desiredPosition);
      if (data.motivation) {
        formData.append('motivation', data.motivation);
      }
      if (cvFile) {
        formData.append('cvFile', cvFile);
      }
      if (coverLetterFile) {
        formData.append('coverLetterFile', coverLetterFile);
      }

      console.log('Envoi de la candidature...');

      const { data: response, error } = await supabase.functions.invoke('submit-recruitment', {
        body: formData,
      });

      console.log('Réponse:', response, error);

      if (error) {
        console.error('Erreur lors de la soumission:', error);
        toast({
          title: "Erreur",
          description: "Une erreur est survenue lors de l'envoi de votre candidature.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Candidature envoyée",
        description: "Votre candidature a été envoyée avec succès. Nous vous contacterons prochainement.",
      });

      // Reset form and close dialog
      form.reset();
      setCvFile(null);
      setCoverLetterFile(null);
      onOpenChange(false);

    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-primary">
            Postuler chez LeFrigoriste.fr
          </DialogTitle>
          <DialogDescription>
            Remplissez le formulaire ci-dessous pour nous faire parvenir votre candidature.
            Tous les champs marqués d'un astérisque (*) sont obligatoires.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom et prénom *</FormLabel>
                  <FormControl>
                    <Input placeholder="Votre nom complet" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="votre-email@exemple.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Téléphone *</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="01 XX XX XX XX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="desiredPosition"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Poste souhaité *</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez le poste qui vous intéresse" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {positions.map((position) => (
                        <SelectItem key={position} value={position}>
                          {position}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="motivation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pourquoi souhaitez-vous nous rejoindre ?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Décrivez votre motivation, vos compétences, votre expérience..."
                      className="min-h-[100px] resize-y"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FileUploadField
                label="CV"
                file={cvFile}
                onFileChange={(file) => handleFileChange(file, 'cv')}
              />

              <FileUploadField
                label="Lettre de motivation"
                file={coverLetterFile}
                onFileChange={(file) => handleFileChange(file, 'coverLetter')}
              />
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={isSubmitting}
              >
                Annuler
              </Button>
              <Button type="submit" disabled={isSubmitting} className="btn-primary">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Envoyer ma candidature
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default RecruitmentDialog;
