import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Calendar, CheckCircle, AlertCircle, Facebook, Instagram, Linkedin, Send, FileText, Info, CreditCard } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { RecruitmentBanner } from '@/components/recruitment';

// Types de demandes qui nécessitent une adresse
const requestTypesNeedingAddress = ['urgence', 'depannage', 'installation', 'maintenance'];
const Contact = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requestType: '',
    address: '',
    postalCode: '',
    city: '',
    message: '',
    gdprConsent: false
  });

  // Vérifier si le type de demande nécessite une adresse
  const needsAddress = requestTypesNeedingAddress.includes(formData.requestType);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      requestType: value
    }));
  };
  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      gdprConsent: checked
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.gdprConsent) {
      toast({
        title: "Consentement requis",
        description: "Veuillez accepter notre politique de confidentialité",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const {
        data,
        error
      } = await supabase.functions.invoke('submit-contact', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          requestType: formData.requestType,
          address: needsAddress ? formData.address : '',
          postalCode: needsAddress ? formData.postalCode : '',
          city: needsAddress ? formData.city : '',
          message: formData.message
        }
      });
      if (error) {
        console.error('Error submitting form:', error);
        toast({
          title: "Erreur",
          description: "Une erreur est survenue. Veuillez réessayer.",
          variant: "destructive"
        });
        return;
      }
      toast({
        title: "Message envoyé",
        description: "Nous vous contacterons dans les plus brefs délais."
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        requestType: '',
        address: '',
        postalCode: '',
        city: '',
        message: '',
        gdprConsent: false
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="min-h-screen">
      {/* Hero moderne et stylé comme Services */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        {/* Fond moderne avec dégradé sophistiqué */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-blue-100/30 z-0">
          {/* Effet glacé avec motifs subtils */}
          <div className=""></div>
        </div>
        
        {/* Éléments décoratifs glacés */}
        <div className="absolute -top-10 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-blue-100/20 to-transparent opacity-30 blur-3xl"></div>
        <div className="absolute top-1/3 right-20 w-80 h-80 rounded-full bg-gradient-to-bl from-blue-200/20 to-transparent opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-80 rounded-full bg-gradient-to-tr from-blue-100/20 to-transparent opacity-30 blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-primary font-medium text-sm mb-4">
              CONTACTEZ-NOUS
            </span>
            <h1 className="font-bold font-montserrat mb-5 leading-tight text-[#212121] md:text-4xl text-2xl px-[8px]">
              Besoin d'un frigoriste
              <span className="text-primary"> professionnel ?</span>
            </h1>
            <p className="text-gray-600 font-opensans max-w-2xl mx-auto mb-8">
              Notre équipe d'experts est disponible 24h/24 et 7j/7 pour répondre à toutes vos urgences et besoins en réfrigération.
            </p>
            
            {/* CTA rapide urgence */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:0185500284" className="group inline-flex items-center px-8 py-4 bg-emergency hover:bg-emergency/90 text-white font-bold rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                <Phone className="h-5 w-5 mr-3" />
                01 85 50 02 84
                <span className="ml-3 text-sm bg-white/20 px-2 py-1 rounded">Urgence 24/7</span>
              </a>
              
              <div className="flex items-center text-gray-500 text-sm">
                <span className="hidden sm:block">ou utilisez le formulaire ci-dessous</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Recrutement */}
      <RecruitmentBanner />

      {/* Section principale (coordonnées + formulaire) */}
      <div className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Colonne gauche - Coordonnées */}
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Nos coordonnées</CardTitle>
                  <CardDescription>Comment nous joindre</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Adresse */}
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Adresse</h3>
                      <p className="text-gray-600">8-10 rue Levassor, 78130 Les Mureaux</p>
                    </div>
                  </div>
                  
                  {/* Téléphone standard */}
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Téléphone</h3>
                      <p className="text-gray-600">01 85 50 02 84</p>
                      <a href="tel:0185500284" className="btn-primary mt-2 text-sm py-2">
                        Appeler maintenant
                      </a>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a href="mailto:contact@lefrigoriste.fr" className="text-gray-600 hover:text-primary">
                        contact@lefrigoriste.fr
                      </a>
                    </div>
                  </div>
                  
                  {/* Horaires */}
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Horaires bureau</h3>
                      <p className="text-gray-600">Lundi au Vendredi : 8h30-18h</p>
                      <p className="mt-1 text-sm font-medium text-emergency">
                        Service dépannage disponible 24h/24, 7j/7, y compris jours fériés
                      </p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  {/* Réseaux sociaux */}
                  <div>
                    <h3 className="font-semibold mb-3">Suivez-nous</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition">
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a href="#" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full hover:opacity-90 transition">
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a href="#" className="bg-blue-800 text-white p-2 rounded-full hover:bg-blue-900 transition">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Colonne droite - Formulaire */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Formulaire de contact</CardTitle>
                  <CardDescription>Nous vous répondrons dans les meilleurs délais</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Nom et prénom */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Nom et prénom *
                      </label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Votre nom complet" required disabled={isSubmitting} />
                    </div>
                    
                    {/* Email et téléphone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Email *
                        </label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="votre-email@exemple.com" required disabled={isSubmitting} />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1">
                          Téléphone *
                        </label>
                        <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="01 XX XX XX XX" required disabled={isSubmitting} />
                      </div>
                    </div>
                    
                    {/* Type de demande */}
                    <div>
                      <label htmlFor="requestType" className="block text-sm font-medium mb-1">
                        Type de demande *
                      </label>
                      <Select onValueChange={handleSelectChange} value={formData.requestType} disabled={isSubmitting}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez le type de demande" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="urgence">Urgence</SelectItem>
                          <SelectItem value="depannage">Dépannage</SelectItem>
                          <SelectItem value="installation">Installation</SelectItem>
                          <SelectItem value="maintenance">Maintenance</SelectItem>
                          <SelectItem value="devis">Devis</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {/* Champs d'adresse conditionnels */}
                    {needsAddress && <>
                        {/* Adresse */}
                        <div>
                          <label htmlFor="address" className="block text-sm font-medium mb-1">
                            Adresse d'intervention *
                          </label>
                          <Input id="address" name="address" value={formData.address} onChange={handleChange} placeholder="Numéro et nom de rue" required={needsAddress} disabled={isSubmitting} />
                        </div>
                        
                        {/* Code postal et ville */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="postalCode" className="block text-sm font-medium mb-1">
                              Code postal *
                            </label>
                            <Input id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} placeholder="Code postal" required={needsAddress} disabled={isSubmitting} />
                          </div>
                          <div>
                            <label htmlFor="city" className="block text-sm font-medium mb-1">
                              Ville *
                            </label>
                            <Input id="city" name="city" value={formData.city} onChange={handleChange} placeholder="Votre ville" required={needsAddress} disabled={isSubmitting} />
                          </div>
                        </div>
                      </>}
                    
                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message détaillé *
                      </label>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Décrivez votre besoin, équipement concerné, problème rencontré..." rows={5} required disabled={isSubmitting} />
                    </div>
                    
                    {/* RGPD */}
                    <div className="flex items-start space-x-2">
                      <Checkbox id="gdprConsent" checked={formData.gdprConsent} onCheckedChange={handleCheckboxChange} disabled={isSubmitting} />
                      <label htmlFor="gdprConsent" className="text-sm text-gray-600">
                        J'accepte que mes informations soient utilisées pour me recontacter. Pour en savoir plus sur la gestion de vos données et vos droits, consultez notre politique de confidentialité. *
                      </label>
                    </div>
                    
                    {/* Bouton envoi */}
                    <Button type="submit" className="w-full btn-primary" disabled={isSubmitting}>
                      {isSubmitting ? <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Envoi en cours...
                        </> : <>
                          <Send className="h-4 w-4 mr-2" />
                          Envoyer ma demande
                        </>}
                    </Button>
                    
                    <p className="text-xs text-gray-500 mt-2">* Champs obligatoires</p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Carte Google Maps */}
      <div className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Notre localisation</h2>
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-md">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.8575789782576!2d1.9094878159255505!3d48.97764997929842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6908815aa7e3d%3A0xe4edf3bc9553c9a5!2s8%20Rue%20Levassor%2C%2078130%20Les%20Mureaux!5e0!3m2!1sfr!2sfr!4v1649782523555!5m2!1sfr!2sfr" className="absolute inset-0 w-full h-full border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localisation du siège social de LeFrigoriste.fr"></iframe>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-primary mb-2 text-center">Questions fréquentes</h2>
          <p className="text-gray-600 mb-8 text-center">Tout ce que vous devez savoir avant de nous contacter</p>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-primary" />
                    Comment obtenir un devis rapide ?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Pour obtenir un devis rapide, vous pouvez nous contacter par téléphone au 01 85 50 02 84 ou remplir le formulaire de contact en précisant votre besoin. Nous vous demandons de fournir un maximum d'informations sur votre équipement (marque, modèle, puissance) et vos besoins pour vous répondre avec précision sous 24h à 48h.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2 text-primary" />
                    Quels délais d'intervention en cas d'urgence ?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Nos délais d'intervention en cas d'urgence varient selon votre localisation : dans les Yvelines (78), nous intervenons en 45 minutes maximum. À Paris et en petite couronne, comptez 1h maximum. Pour la grande couronne, notre délai est de 2h maximum. Notre service d'urgence est disponible 24h/24 et 7j/7, même les jours fériés.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <Info className="h-5 w-5 mr-2 text-primary" />
                    Quelles informations préparer avant d'appeler ?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Avant de nous appeler, préparez les informations suivantes : type d'équipement (chambre froide, vitrine réfrigérée, climatisation...), marque et modèle si possible, nature du problème rencontré (fuite, bruit anormal, ne refroidit plus...), adresse précise d'intervention et vos coordonnées complètes. Ces informations nous permettront d'intervenir plus efficacement.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-primary" />
                    Comment se déroule une première intervention ?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Lors d'une première intervention, notre technicien commence par un diagnostic complet de votre installation. Il identifie la panne ou le dysfonctionnement, vous explique le problème et vous propose une solution adaptée. Si la réparation peut être effectuée immédiatement, il vous soumet un devis verbal pour accord avant l'intervention. Pour les interventions plus complexes, un devis écrit vous sera envoyé.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <CreditCard className="h-5 w-5 mr-2 text-primary" />
                    Quels moyens de paiement acceptés ?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Nous acceptons plusieurs moyens de paiement : carte bancaire, chèque, virement bancaire et espèces. Pour les professionnels, nous proposons des facilités de paiement avec possibilité de régler à 30 jours. Les interventions d'urgence nécessitent généralement un règlement immédiat, sauf pour nos clients sous contrat de maintenance.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Zones d'intervention */}
      <div className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-primary mb-2 text-center">Nos secteurs d'intervention</h2>
          <p className="text-gray-600 mb-8 text-center">Intervention rapide garantie en Île-de-France</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-emergency bg-opacity-5 border-emergency border-opacity-20">
              <CardHeader className="pb-2">
                <CardTitle className="text-emergency flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  Intervention en 45 min
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">Yvelines (78) - Zone prioritaire</p>
                <p className="text-sm text-gray-600 mt-2">
                  Les Mureaux, Mantes-la-Jolie, Poissy, Saint-Germain-en-Laye, Versailles et les communes environnantes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-orange-50 border-orange-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-orange-600 flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  Intervention en 1h
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">Paris et Petite Couronne</p>
                <p className="text-sm text-gray-600 mt-2">
                  Paris (75), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94).
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-blue-600 flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  Intervention en 2h
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">Grande Couronne</p>
                <p className="text-sm text-gray-600 mt-2">
                  Val-d'Oise (95), Seine-et-Marne (77, ouest), Essonne (91, nord).
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="secondary" className="mx-auto">
              <a href="/zone-intervention">
                Voir toutes nos zones d'intervention
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>;
};
export default Contact;
