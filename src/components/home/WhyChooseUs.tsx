
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
    <section className="py-24 relative overflow-hidden">
      {/* Fond moderne avec dégradé sophistiqué */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/40 to-blue-100/30 z-0">
        {/* Motif de cristaux glacés amélioré */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM0QTg2RTgiIGZpbGwtb3BhY2l0eT0iMC4xOCI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NEgwdjJoNHY0aDJWNmg0VjQtNHpNNiAzNHYtNEg0djRIMHYyaDR2NGgydi00aDR2LTJINnptMC0zMFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
      </div>

      {/* Effet de vague glacée */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-blue-100/40 to-transparent"></div>

      {/* Bulles glacées */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-gradient-to-bl from-blue-200/30 to-transparent blur-3xl"></div>
      <div className="absolute bottom-10 left-1/4 w-60 h-60 rounded-full bg-gradient-to-tr from-blue-100/40 to-transparent blur-2xl"></div>
      
      {/* Grands flocons stylisés */}
      <Snowflake className="absolute top-32 left-20 w-20 h-20 text-blue-200/20" strokeWidth={0.5} />
      <Snowflake className="absolute bottom-40 right-32 w-16 h-16 text-blue-300/25" strokeWidth={0.5} />
      <Snowflake className="absolute top-60 right-1/4 w-14 h-14 text-blue-100/20" strokeWidth={0.5} />
      
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
