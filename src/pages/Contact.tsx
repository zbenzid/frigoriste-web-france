
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

// Types de demandes qui nécessitent une adresse
const requestTypesNeedingAddress = ['urgence', 'depannage', 'installation', 'maintenance'];

const Contact = () => {
  const { toast } = useToast();
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
    const { name, value } = e.target;
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
      const { data, error } = await supabase.functions.invoke('submit-contact', {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section - Modern Minimal */}
      <div className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Phone className="h-4 w-4 mr-2" />
              Service disponible 24/7
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Contactez notre équipe
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Intervention rapide garantie en Île-de-France pour tous vos besoins frigorifiques et climatiques
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods - Horizontal Layout */}
      <div className="py-16 px-4">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="group text-center p-6 rounded-2xl bg-white hover:bg-primary/5 transition-all duration-300 hover:shadow-lg">
              <div className="w-14 h-14 bg-emergency/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emergency/20 transition-colors">
                <Phone className="h-7 w-7 text-emergency" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Urgence 24/7</h3>
              <a href="tel:0185500284" className="text-primary hover:text-primary/80 font-medium">
                01 85 50 02 84
              </a>
            </div>

            <div className="group text-center p-6 rounded-2xl bg-white hover:bg-primary/5 transition-all duration-300 hover:shadow-lg">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <a href="mailto:contact@lefrigoriste.fr" className="text-primary hover:text-primary/80 font-medium">
                contact@lefrigoriste.fr
              </a>
            </div>

            <div className="group text-center p-6 rounded-2xl bg-white hover:bg-primary/5 transition-all duration-300 hover:shadow-lg">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                <MapPin className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Adresse</h3>
              <p className="text-gray-600 text-sm">8-10 rue Levassor<br />78130 Les Mureaux</p>
            </div>

            <div className="group text-center p-6 rounded-2xl bg-white hover:bg-primary/5 transition-all duration-300 hover:shadow-lg">
              <div className="w-14 h-14 bg-maintenance/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-maintenance/20 transition-colors">
                <Clock className="h-7 w-7 text-maintenance" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Horaires</h3>
              <p className="text-gray-600 text-sm">Lun-Ven: 8h30-18h<br />Urgences: 24/7</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Form Section */}
      <div className="py-16 px-4">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Envoyez-nous votre demande</h2>
              <p className="text-gray-600">Nous vous répondrons dans les meilleurs délais</p>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                      Nom et prénom *
                    </label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="Votre nom complet" 
                      required 
                      disabled={isSubmitting}
                      className="h-12 rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                        Email *
                      </label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="votre-email@exemple.com" 
                        required 
                        disabled={isSubmitting}
                        className="h-12 rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                        Téléphone *
                      </label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        placeholder="01 XX XX XX XX" 
                        required 
                        disabled={isSubmitting}
                        className="h-12 rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20"
                      />
                    </div>
                  </div>
                </div>

                {/* Request Type */}
                <div>
                  <label htmlFor="requestType" className="block text-sm font-medium text-gray-900 mb-2">
                    Type de demande *
                  </label>
                  <Select 
                    onValueChange={handleSelectChange} 
                    value={formData.requestType}
                    disabled={isSubmitting}
                  >
                    <SelectTrigger className="h-12 rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20">
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
                
                {/* Conditional Address Fields */}
                {needsAddress && (
                  <div className="space-y-6 p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-primary" />
                      Adresse d'intervention
                    </h3>
                    
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-900 mb-2">
                        Adresse *
                      </label>
                      <Input 
                        id="address" 
                        name="address" 
                        value={formData.address} 
                        onChange={handleChange} 
                        placeholder="Numéro et nom de rue" 
                        required={needsAddress}
                        disabled={isSubmitting}
                        className="h-12 rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20 bg-white"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="postalCode" className="block text-sm font-medium text-gray-900 mb-2">
                          Code postal *
                        </label>
                        <Input 
                          id="postalCode" 
                          name="postalCode" 
                          value={formData.postalCode} 
                          onChange={handleChange} 
                          placeholder="75000" 
                          required={needsAddress}
                          disabled={isSubmitting}
                          className="h-12 rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20 bg-white"
                        />
                      </div>
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-900 mb-2">
                          Ville *
                        </label>
                        <Input 
                          id="city" 
                          name="city" 
                          value={formData.city} 
                          onChange={handleChange} 
                          placeholder="Paris" 
                          required={needsAddress}
                          disabled={isSubmitting}
                          className="h-12 rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20 bg-white"
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                    Message détaillé *
                  </label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Décrivez votre besoin, équipement concerné, problème rencontré..." 
                    rows={5} 
                    required
                    disabled={isSubmitting}
                    className="rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20 resize-none"
                  />
                </div>
                
                {/* GDPR Consent */}
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                  <Checkbox 
                    id="gdprConsent" 
                    checked={formData.gdprConsent} 
                    onCheckedChange={handleCheckboxChange}
                    disabled={isSubmitting}
                    className="mt-1"
                  />
                  <label htmlFor="gdprConsent" className="text-sm text-gray-600 leading-relaxed">
                    J'accepte que mes informations soient utilisées pour me recontacter. Pour en savoir plus sur la gestion de vos données et vos droits, consultez notre politique de confidentialité. *
                  </label>
                </div>
                
                {/* Submit Button */}
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-lg shadow-sm hover:shadow-md transition-all duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Envoyer ma demande
                    </>
                  )}
                </Button>
                
                <p className="text-xs text-gray-500 text-center">* Champs obligatoires</p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Intervention Zones - Modern Cards */}
      <div className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos délais d'intervention</h2>
            <p className="text-gray-600">Service d'urgence garanti en Île-de-France</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emergency/5 to-emergency/10 border border-emergency/20 p-8 group hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <Clock className="h-8 w-8 text-emergency" />
                <span className="bg-emergency text-white px-4 py-2 rounded-full text-sm font-bold">45 min</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Yvelines (78)</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Les Mureaux, Mantes-la-Jolie, Poissy, Saint-Germain-en-Laye, Versailles et communes environnantes
              </p>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 p-8 group hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
                <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold">1h</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Paris & Petite Couronne</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Paris (75), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94)
              </p>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 p-8 group hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">2h</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Grande Couronne</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Val-d'Oise (95), Seine-et-Marne (77, ouest), Essonne (91, nord)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section - Modern Frame */}
      <div className="py-16 px-4">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre localisation</h2>
            <p className="text-gray-600">Situés au cœur des Yvelines pour vous servir rapidement</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-lg border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.8575789782576!2d1.9094878159255505!3d48.97764997929842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6908815aa7e3d%3A0xe4edf3bc9553c9a5!2s8%20Rue%20Levassor%2C%2078130%20Les%20Mureaux!5e0!3m2!1sfr!2sfr!4v1649782523555!5m2!1sfr!2sfr" 
                className="absolute inset-0 w-full h-full border-0" 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                title="Localisation du siège social de LeFrigoriste.fr"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section - Cleaner Design */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
            <p className="text-gray-600">Tout ce que vous devez savoir avant de nous contacter</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-gray-100">
                  <AccordionTrigger className="px-8 py-6 text-left hover:bg-gray-50 transition-colors">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 mr-3 text-primary" />
                      <span className="font-semibold">Comment obtenir un devis rapide ?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                    Pour obtenir un devis rapide, vous pouvez nous contacter par téléphone au 01 85 50 02 84 ou remplir le formulaire de contact en précisant votre besoin. Nous vous demandons de fournir un maximum d'informations sur votre équipement (marque, modèle, puissance) et vos besoins pour vous répondre avec précision sous 24h à 48h.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border-b border-gray-100">
                  <AccordionTrigger className="px-8 py-6 text-left hover:bg-gray-50 transition-colors">
                    <div className="flex items-center">
                      <AlertCircle className="h-5 w-5 mr-3 text-primary" />
                      <span className="font-semibold">Quels délais d'intervention en cas d'urgence ?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                    Nos délais d'intervention en cas d'urgence varient selon votre localisation : dans les Yvelines (78), nous intervenons en 45 minutes maximum. À Paris et en petite couronne, comptez 1h maximum. Pour la grande couronne, notre délai est de 2h maximum. Notre service d'urgence est disponible 24h/24 et 7j/7, même les jours fériés.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border-b border-gray-100">
                  <AccordionTrigger className="px-8 py-6 text-left hover:bg-gray-50 transition-colors">
                    <div className="flex items-center">
                      <Info className="h-5 w-5 mr-3 text-primary" />
                      <span className="font-semibold">Quelles informations préparer avant d'appeler ?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                    Avant de nous appeler, préparez les informations suivantes : type d'équipement (chambre froide, vitrine réfrigérée, climatisation...), marque et modèle si possible, nature du problème rencontré (fuite, bruit anormal, ne refroidit plus...), adresse précise d'intervention et vos coordonnées complètes. Ces informations nous permettront d'intervenir plus efficacement.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border-b border-gray-100">
                  <AccordionTrigger className="px-8 py-6 text-left hover:bg-gray-50 transition-colors">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-3 text-primary" />
                      <span className="font-semibold">Comment se déroule une première intervention ?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                    Lors d'une première intervention, notre technicien commence par un diagnostic complet de votre installation. Il identifie la panne ou le dysfonctionnement, vous explique le problème et vous propose une solution adaptée. Si la réparation peut être effectuée immédiatement, il vous soumet un devis verbal pour accord avant l'intervention. Pour les interventions plus complexes, un devis écrit vous sera envoyé.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger className="px-8 py-6 text-left hover:bg-gray-50 transition-colors">
                    <div className="flex items-center">
                      <CreditCard className="h-5 w-5 mr-3 text-primary" />
                      <span className="font-semibold">Quels moyens de paiement acceptés ?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                    Nous acceptons plusieurs moyens de paiement : carte bancaire, chèque, virement bancaire et espèces. Pour les professionnels, nous proposons des facilités de paiement avec possibilité de régler à 30 jours. Les interventions d'urgence nécessitent généralement un règlement immédiat, sauf pour nos clients sous contrat de maintenance.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Footer */}
      <div className="py-12 px-4">
        <div className="container-custom">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Suivez-nous</h3>
            <div className="flex justify-center space-x-6">
              <a 
                href="#" 
                className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 hover:scale-110 transform"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center hover:opacity-90 transition-all duration-200 hover:scale-110 transform"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors duration-200 hover:scale-110 transform"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
