
import React from 'react';
import { Clock, Award, Wrench, ThumbsUp } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Clock size={36} className="text-emergency" />,
      title: "Disponibilité 24h/24",
      description: "Notre équipe est disponible jour et nuit pour intervenir en urgence sur vos équipements frigorifiques."
    },
    {
      icon: <Award size={36} className="text-primary" />,
      title: "Expertise et certification",
      description: "Techniciens certifiés et formés aux dernières technologies en froid commercial et climatisation."
    },
    {
      icon: <Wrench size={36} className="text-secondary" />,
      title: "Solutions sur-mesure",
      description: "Nos solutions sont adaptées à vos besoins spécifiques, à votre espace et à votre budget."
    },
    {
      icon: <ThumbsUp size={36} className="text-maintenance" />,
      title: "Satisfaction garantie",
      description: "Nous nous engageons à offrir un service de qualité et à assurer votre entière satisfaction."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 relative inline-block">
            Pourquoi nous 
            <span className="absolute bottom-[-8px] left-0 w-full h-1 bg-gradient-to-r from-[#0B5394] via-[#4A86E8] to-[#1EAEDB]"></span>
            <span className="ml-2">choisir</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            LeFrigoriste.fr se démarque par son expertise, sa réactivité et son service client exceptionnel.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className={`h-2 w-full ${
                index === 0 ? "bg-emergency" : 
                index === 1 ? "bg-primary" : 
                index === 2 ? "bg-secondary" : 
                "bg-maintenance"
              }`}></div>
              <CardContent className="p-8">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {reason.icon}
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-800">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
