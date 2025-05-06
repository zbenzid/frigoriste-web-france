
import React from 'react';
import { Clock, Award, Wrench, Shield, MapPin } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
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
    <section className="py-20 bg-[#F1F1F1]">
      <div className="container-custom">
        {/* En-tête de section */}
        <div className="mb-12 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-50 text-primary font-medium text-sm mb-4">
            POURQUOI NOUS CHOISIR
          </div>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4 text-[#212121]">
            Pourquoi <span className="text-primary">LeFrigoriste.fr</span> est le choix idéal pour vous
          </h2>
        </div>
        
        {/* Disposition des cartes en grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Première rangée de cartes */}
          {reasons.slice(0, 2).map((reason, index) => (
            <Card key={index} className="border border-gray-100 bg-white hover:bg-white hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center">
                    {reason.icon}
                  </div>
                </div>
                <h3 className="font-montserrat font-semibold text-lg mb-3 text-center">{reason.title}</h3>
                <p className="text-gray-600 font-opensans text-center">{reason.description}</p>
              </CardContent>
            </Card>
          ))}

          {/* Carte centrale plus grande avec un accent bleu profond */}
          <Card className="border-0 bg-primary text-white col-span-1 md:col-span-2 rounded-xl overflow-hidden">
            <CardContent className="p-8">
              <div className="mb-6 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                  <Wrench size={36} className="text-white" />
                </div>
              </div>
              <h3 className="font-montserrat font-bold text-2xl mb-4 text-center">Solutions Sur-Mesure</h3>
              <p className="mb-6 text-center font-opensans">
                Chez LeFrigoriste.fr, nous comprenons l'importance vitale de vos équipements frigorifiques pour votre activité. C'est pourquoi notre équipe propose des solutions adaptées à vos besoins spécifiques.
              </p>
              <div className="flex justify-center">
                <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary rounded-full">
                  <Link to="/contact">Demander un devis</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Dernière rangée de cartes */}
          {reasons.slice(2, 4).map((reason, index) => (
            <Card key={index + 2} className="border border-gray-100 bg-white hover:bg-white hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center">
                    {reason.icon}
                  </div>
                </div>
                <h3 className="font-montserrat font-semibold text-lg mb-3 text-center">{reason.title}</h3>
                <p className="text-gray-600 font-opensans text-center">{reason.description}</p>
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
            <span className="ml-2 text-gray-700 font-opensans">4.9/5 basé sur plus de 50 avis clients Google</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
