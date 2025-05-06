
import React from 'react';
import { Clock, Award, Wrench, ThumbsUp, Snowflake } from 'lucide-react';
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
      title: "Experts certifiés",
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
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-blue-50/30">
      {/* Fond avec subtiles vagues */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent"></div>
      
      {/* Subtils éléments décoratifs */}
      <div className="absolute top-0 right-0 w-1/2 h-48 bg-gradient-to-b from-blue-100/20 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-48 bg-gradient-to-t from-blue-100/20 to-transparent opacity-50"></div>
      
      {/* Flocons stylisés subtils */}
      <Snowflake className="absolute top-20 right-[10%] w-16 h-16 text-blue-200/15" strokeWidth={0.5} />
      <Snowflake className="absolute bottom-20 left-[10%] w-12 h-12 text-blue-200/10" strokeWidth={0.5} />
      <Snowflake className="absolute top-1/3 left-1/4 w-8 h-8 text-blue-100/10" strokeWidth={0.5} />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Pourquoi nous choisir
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">L'expertise frigorifique à votre service</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            LeFrigoriste.fr se démarque par son expertise, sa réactivité et son service client exceptionnel.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group bg-white/90 backdrop-blur-sm hover:translate-y-[-5px]">
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
