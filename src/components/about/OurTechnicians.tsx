
import React from 'react';
import { Users, Clock, Award, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const OurTechnicians = () => {
  const strengths = [
    {
      icon: Clock,
      title: "Disponibilité 24h/7j",
      description: "Intervention garantie dans les 45 minutes à 2 heures selon votre localisation en Île-de-France"
    },
    {
      icon: Award,
      title: "Techniciens certifiés",
      description: "Équipe formée aux dernières technologies et certifiée pour la manipulation des fluides frigorigènes"
    },
    {
      icon: ShieldCheck,
      title: "Expertise chaîne du froid",
      description: "Spécialistes des équipements pour commerces alimentaires et de la réfrigération commerciale"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
          Nos techniciens
        </h2>
        
        <Card className="border-none shadow-lg mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users size={40} className="text-primary" />
                </div>
              </div>
              <div className="md:w-3/4">
                <p className="text-gray-700 mb-4">
                  Notre équipe est composée de techniciens frigoristes hautement qualifiés, 
                  formés régulièrement aux dernières technologies et disponibles 24h/24, 7j/7 
                  pour intervenir partout en Île-de-France.
                </p>
                <p className="text-gray-700">
                  Chaque membre de notre équipe partage notre engagement envers l'excellence technique 
                  et la satisfaction client. Nous nous spécialisons dans les interventions pour les 
                  professionnels de l'alimentaire, avec une expertise particulière dans la réfrigération 
                  commerciale et la climatisation professionnelle.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {strengths.map((strength, index) => (
            <Card key={index} className="border-t-4 border-t-primary">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-3 mb-3">
                  <strength.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{strength.title}</h3>
                <p className="text-gray-600 text-sm">{strength.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTechnicians;
