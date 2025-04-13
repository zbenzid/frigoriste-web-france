
import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Calendar, Check, ChevronRight, Clock, FileCheck, Heart, Phone, ShieldCheck, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const QuiSommesNous = () => {
  return (
    <div className="min-h-screen">
      {/* Bannière */}
      <section className="bg-primary relative py-24">
        {/* Overlay foncé pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        
        <div className="container-custom relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Qui Sommes-Nous</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Une expertise frigorifique à votre service depuis 2018
          </p>
        </div>
      </section>
      
      {/* Section Notre Histoire */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Notre histoire</h2>
              <p className="text-gray-700 mb-4">
                LeFrigoriste.fr a été fondée en 2018 aux Mureaux (78130) par Mory Sangaré, 
                un expert passionné par la réfrigération avec plus de 15 ans d'expérience dans le domaine.
              </p>
              <p className="text-gray-700 mb-4">
                Ce qui a commencé comme une petite entreprise locale s'est rapidement développé pour couvrir 
                toute l'Île-de-France, grâce à notre réputation d'excellence et de fiabilité dans le secteur 
                du froid commercial.
              </p>
              <p className="text-gray-700 mb-4">
                Notre histoire est marquée par un engagement constant envers trois valeurs fondamentales :
              </p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-maintenance text-white flex items-center justify-center mr-3 mt-1">
                    <Check size={16} />
                  </div>
                  <div>
                    <span className="font-semibold">Réactivité</span> - Un service d'urgence disponible 24h/24, 
                    7j/7 avec des délais d'intervention garantis pour assurer la continuité de votre activité.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-maintenance text-white flex items-center justify-center mr-3 mt-1">
                    <Check size={16} />
                  </div>
                  <div>
                    <span className="font-semibold">Expertise technique</span> - Des techniciens hautement qualifiés, 
                    formés aux dernières technologies et spécialisés dans le froid commercial et alimentaire.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-maintenance text-white flex items-center justify-center mr-3 mt-1">
                    <Check size={16} />
                  </div>
                  <div>
                    <span className="font-semibold">Satisfaction client</span> - Des solutions personnalisées, 
                    une transparence totale dans nos interventions et un accompagnement sur le long terme.
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Technicien frigoriste au travail" 
                className="rounded-lg shadow-lg w-full object-cover"
                style={{ height: '500px' }}
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-5 rounded-lg shadow-md">
                <div className="text-3xl text-primary font-bold">2018</div>
                <div className="text-gray-600">Année de création</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Notre Équipe */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Notre équipe</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Des techniciens frigoristes certifiés, formés aux dernières technologies 
              et animés par la passion d'offrir un service d'excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-primary shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Users size={36} className="text-primary" />
                  </div>
                </div>
                <h3 className="font-bold text-xl text-center mb-3">Techniciens certifiés</h3>
                <p className="text-gray-600 text-center">
                  Notre équipe est composée de frigoristes expérimentés, tous certifiés 
                  et régulièrement formés aux évolutions technologiques du secteur.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-maintenance shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="rounded-full bg-maintenance/10 p-3">
                    <Calendar size={36} className="text-maintenance" />
                  </div>
                </div>
                <h3 className="font-bold text-xl text-center mb-3">Formation continue</h3>
                <p className="text-gray-600 text-center">
                  Nous investissons continuellement dans la formation de nos équipes pour 
                  rester à la pointe des innovations en réfrigération et climatisation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-secondary shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="rounded-full bg-secondary/10 p-3">
                    <FileCheck size={36} className="text-secondary" />
                  </div>
                </div>
                <h3 className="font-bold text-xl text-center mb-3">Expertise spécifique</h3>
                <p className="text-gray-600 text-center">
                  Nous sommes spécialisés dans le froid commercial pour les professionnels 
                  de l'alimentaire, avec une connaissance approfondie des équipements spécifiques.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-16">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Mory Sangaré</h3>
                  <p className="text-gray-700 font-semibold mb-2">Fondateur & Directeur Technique</p>
                  <p className="text-gray-600 mb-4">
                    Fort de plus de 15 ans d'expérience dans le domaine de la réfrigération et de la 
                    climatisation, Mory a fondé LeFrigoriste.fr avec une vision claire : offrir 
                    un service d'excellence aux professionnels, en combinant expertise technique, 
                    réactivité et solutions personnalisées.
                  </p>
                  <p className="text-gray-600">
                    Sa connaissance approfondie des équipements frigorifiques commerciaux et son 
                    engagement envers la satisfaction client ont permis à l'entreprise de se 
                    développer rapidement et de devenir une référence dans le secteur en Île-de-France.
                  </p>
                </div>
                <div className="bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Mory Sangaré - Fondateur de LeFrigoriste.fr" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Nos Certifications */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Nos certifications</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Notre expertise est reconnue par de nombreuses certifications officielles, 
              gages de notre professionnalisme et de notre engagement envers la qualité.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Award size={36} className="text-primary" />
                </div>
              </div>
              <h3 className="font-bold mb-2">Label RGE</h3>
              <p className="text-gray-600 text-sm">
                Reconnu Garant de l'Environnement, ce label atteste de notre qualification 
                pour les travaux d'économie d'énergie.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <ShieldCheck size={36} className="text-primary" />
                </div>
              </div>
              <h3 className="font-bold mb-2">QualiPAC</h3>
              <p className="text-gray-600 text-sm">
                Cette qualification certifie notre expertise dans l'installation 
                et la maintenance des pompes à chaleur.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <FileCheck size={36} className="text-primary" />
                </div>
              </div>
              <h3 className="font-bold mb-2">Attestation de capacité</h3>
              <p className="text-gray-600 text-sm">
                Nous sommes habilités à manipuler les fluides frigorigènes, conformément 
                à la réglementation en vigueur.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Heart size={36} className="text-primary" />
                </div>
              </div>
              <h3 className="font-bold mb-2">Normes environnementales</h3>
              <p className="text-gray-600 text-sm">
                Nous respectons les plus strictes normes environnementales pour limiter 
                l'impact de nos interventions sur l'écosystème.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-secondary/10 p-8 rounded-lg border border-secondary/20">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                  alt="Certification professionnelle" 
                  className="rounded-lg w-full md:w-40 h-40 object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Notre engagement qualité</h3>
                <p className="text-gray-700 mb-3">
                  Chaque membre de notre équipe partage un engagement fort envers l'excellence 
                  et la qualité du service. Nous investissons continuellement dans la formation 
                  et les certifications pour garantir à nos clients les meilleures pratiques du secteur.
                </p>
                <p className="text-gray-700">
                  Nos certifications sont régulièrement renouvelées pour rester en conformité 
                  avec les évolutions réglementaires et les avancées technologiques de notre domaine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Notre Engagement */}
      <section className="section-padding bg-primary bg-opacity-5">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Notre engagement</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Au-delà de nos services techniques, nous nous engageons à offrir une 
              expérience client exceptionnelle, basée sur la confiance et la transparence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-l-emergency">
              <div className="flex items-start">
                <div className="mr-4">
                  <Clock size={36} className="text-emergency" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Disponibilité 24h/24 et 7j/7</h3>
                  <p className="text-gray-600">
                    Nous comprenons l'impact critique d'une panne frigorifique pour votre activité. 
                    C'est pourquoi notre service d'urgence est disponible jour et nuit, week-ends 
                    et jours fériés inclus, avec des délais d'intervention garantis.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-l-secondary">
              <div className="flex items-start">
                <div className="mr-4">
                  <FileCheck size={36} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Solutions sur mesure</h3>
                  <p className="text-gray-600">
                    Chaque client a des besoins spécifiques. Nous prenons le temps de comprendre 
                    vos exigences particulières pour vous proposer des solutions parfaitement 
                    adaptées à votre activité, votre espace et votre budget.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-l-primary">
              <div className="flex items-start">
                <div className="mr-4">
                  <ShieldCheck size={36} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Transparence totale</h3>
                  <p className="text-gray-600">
                    Pas de surprises ni de coûts cachés. Nous vous fournissons des devis détaillés 
                    et transparents avant chaque intervention. Vous savez exactement pour quoi 
                    vous payez, avec une tarification claire et honnête.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-l-maintenance">
              <div className="flex items-start">
                <div className="mr-4">
                  <Users size={36} className="text-maintenance" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Suivi et accompagnement</h3>
                  <p className="text-gray-600">
                    Notre relation ne s'arrête pas à l'intervention. Nous assurons un suivi 
                    régulier et vous accompagnons sur le long terme pour optimiser la durée 
                    de vie et l'efficacité de vos équipements frigorifiques.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <blockquote className="italic text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              "Notre mission est simple : devenir votre partenaire de confiance en réfrigération 
              et climatisation, en alliant expertise technique et service client d'exception."
            </blockquote>
            <p className="font-bold text-primary">— Mory Sangaré, Fondateur</p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Besoin d'une intervention ou d'un conseil ?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Notre équipe de techniciens certifiés est prête à vous accompagner pour tous vos besoins en réfrigération et climatisation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:0185500284" className="btn-emergency text-lg">
              <Phone size={20} className="mr-2" />
              01 85 50 02 84
            </a>
            <Link to="/contact" className="btn-secondary text-lg">
              Nous contacter
              <ChevronRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuiSommesNous;
