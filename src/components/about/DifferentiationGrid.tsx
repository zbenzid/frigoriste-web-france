
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Award, ShieldCheck, Users } from 'lucide-react';

type DifferentiationCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
};

const DifferentiationCard = ({ icon, title, description, color }: DifferentiationCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <Card 
      className={`h-full transition-all duration-300 ${isHovered ? 'shadow-lg scale-[1.02]' : 'shadow-sm'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-6">
        <div className={`rounded-full ${color} p-4 w-16 h-16 flex items-center justify-center mb-4`}>
          {icon}
        </div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const DifferentiationGrid = () => {
  const differentiators = [
    {
      icon: <Clock size={24} className="text-white" />,
      title: "Disponibilité 24h/7j",
      description: "Service d'intervention d'urgence disponible à toute heure pour assurer la continuité de votre activité.",
      color: "bg-emergency"
    },
    {
      icon: <Award size={24} className="text-white" />,
      title: "Spécialistes du froid commercial",
      description: "Expertise spécifique dans l'installation et le dépannage frigorifique pour les professionnels de l'alimentaire.",
      color: "bg-primary"
    },
    {
      icon: <ShieldCheck size={24} className="text-white" />,
      title: "Techniciens certifiés",
      description: "Équipe qualifiée et régulièrement formée, titulaire des certifications RGE, QualiPAC et manipulation des fluides.",
      color: "bg-secondary"
    },
    {
      icon: <Users size={24} className="text-white" />,
      title: "Service sur mesure",
      description: "Solutions adaptées aux besoins spécifiques des professionnels avec maintenance préventive personnalisée.",
      color: "bg-maintenance"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-8">
          Pourquoi nous sommes différents
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, index) => (
            <DifferentiationCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiationGrid;
