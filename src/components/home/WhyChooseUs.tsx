
import React from 'react';
import { Clock, Award, Wrench, ThumbsUp, Shield, MapPin } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Clock size={36} className="text-primary" />,
      title: "Intervention Express 24/7",
      description: "Notre équipe est disponible jour et nuit pour intervenir en urgence sur vos équipements frigorifiques avec des délais garantis par zone."
    },
    {
      icon: <Award size={36} className="text-primary" />,
      title: "Techniciens Certifiés",
      description: "Nos experts sont certifiés RGE et QualiPAC avec plus de 15 ans d'expérience dans le domaine du froid commercial et de la climatisation."
    },
    {
      icon: <Shield size={36} className="text-primary" />,
      title: "Garantie Satisfaction",
      description: "Service client exceptionnel avec une note Google de 4.9/5, nous nous engageons à résoudre vos problèmes dès la première intervention."
    },
    {
      icon: <MapPin size={36} className="text-primary" />,
      title: "Couverture Île-de-France",
      description: "Notre service couvre toute l'Île-de-France avec des délais d'intervention optimisés : 45 min Yvelines, 1h Paris, 2h grande couronne."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        {/* En-tête de section inspiré de la référence */}
        <div className="mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-50 text-primary font-medium text-sm mb-4">
            POURQUOI NOUS CHOISIR
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pourquoi <span className="text-primary">LeFrigoriste.fr</span> est le choix idéal pour vous
          </h2>
        </div>
        
        {/* Disposition des cartes en grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Première rangée de 2 cartes */}
          {reasons.slice(0, 2).map((reason, index) => (
            <Card key={index} className="border bg-slate-50/50 hover:bg-white hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center">
                      {reason.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Carte centrale plus grande avec un accent bleu profond */}
          <Card className="border-0 bg-primary text-white md:col-span-2 lg:col-span-1 row-span-2">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center">
                  <Wrench size={36} className="text-white" />
                </div>
              </div>
              <h3 className="font-bold text-2xl mb-3">Solutions Sur-Mesure</h3>
              <p className="mb-6">
                Chez LeFrigoriste.fr, nous comprenons l'importance vitale de vos équipements frigorifiques pour votre activité. C'est pourquoi notre équipe propose des solutions adaptées à vos besoins spécifiques, à votre espace et à votre budget.
              </p>
              <p className="mb-6">
                Que vous soyez un restaurant, une boulangerie, un supermarché ou un boucher, nos techniciens expérimentés vous garantissent un service rapide et efficace pour minimiser l'impact sur votre activité.
              </p>
              <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary mt-2">
                <Link to="/contact">Demander un devis</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Dernière rangée de cartes */}
          {reasons.slice(2, 4).map((reason, index) => (
            <Card key={index + 2} className="border bg-slate-50/50 hover:bg-white hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center">
                      {reason.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Citation Google Reviews */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center">
            <div className="text-yellow-400 flex">
              {'★'.repeat(5)}
            </div>
            <span className="ml-2 text-gray-700">4.9/5 basé sur plus de 50 avis clients Google</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
