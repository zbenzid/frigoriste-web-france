
import React from 'react';
import { Clock, Award, Tool, ThumbsUp } from 'lucide-react';

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
      icon: <Tool size={36} className="text-secondary" />,
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
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Pourquoi nous choisir</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            LeFrigoriste.fr se démarque par son expertise, sa réactivité et son service client exceptionnel.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                {reason.icon}
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-800">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
