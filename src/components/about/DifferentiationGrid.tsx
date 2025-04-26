
import React from 'react';
import { Clock, Shield, Truck, Thermometer } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

type DifferentiationCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
};

const DifferentiationCard = ({ icon: Icon, title, description, color }: DifferentiationCardProps) => {
  return (
    <Card className={`border-t-4 ${color} transition-all duration-200 hover:shadow-md`}>
      <CardContent className="p-5">
        <div className="flex items-center text-center flex-col">
          <div className={`rounded-full ${color.replace('border-t-', 'bg-')}/10 p-3 mb-3 flex items-center justify-center`}>
            <Icon size={24} className={color.replace('border-t-', 'text-')} />
          </div>
          <h3 className="font-semibold text-lg mb-2 text-center">{title}</h3>
          <p className="text-gray-600 text-sm text-center">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const DifferentiationGrid = () => {
  const differentiations = [
    {
      icon: Clock,
      title: "Disponibilité 24/7",
      description: "Intervention d'urgence garantie à tout moment",
      color: "border-t-emergency"
    },
    {
      icon: Thermometer,
      title: "Experts froid commercial",
      description: "Spécialistes des solutions frigorifiques professionnelles",
      color: "border-t-primary"
    },
    {
      icon: Shield,
      title: "Certifications",
      description: "RGE, QualiPAC et habilitations fluides frigorigènes",
      color: "border-t-maintenance"
    },
    {
      icon: Truck,
      title: "Service sur-mesure",
      description: "Solutions adaptées aux professionnels de l'alimentaire",
      color: "border-t-secondary"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
          Pourquoi nous choisir
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiations.map((diff, index) => (
            <DifferentiationCard
              key={index}
              icon={diff.icon}
              title={diff.title}
              description={diff.description}
              color={diff.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiationGrid;

