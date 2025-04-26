
import React from 'react';
import { Clock, Award, Leaf, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

type ValueCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
};

const ValueCard = ({ icon: Icon, title, description, color }: ValueCardProps) => {
  return (
    <Card className={`border-t-4 ${color} transition-all duration-200 hover:shadow-md`}>
      <CardContent className="p-5">
        <div className="flex flex-col items-center text-center">
          <div className={`rounded-full ${color.replace('border-t-', 'bg-')}/10 p-3 mb-3`}>
            <Icon size={24} className={color.replace('border-t-', 'text-')} />
          </div>
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const OurValues = () => {
  const values = [
    {
      icon: Clock,
      title: "Réactivité et disponibilité",
      description: "Intervention d'urgence 24h/7j avec des délais garantis pour assurer la continuité de votre activité",
      color: "border-t-emergency"
    },
    {
      icon: Award,
      title: "Qualité et professionnalisme",
      description: "Des interventions soignées par des techniciens qualifiés et une exigence constante de qualité",
      color: "border-t-primary"
    },
    {
      icon: Leaf,
      title: "Responsabilité environnementale",
      description: "Respect strict des normes environnementales et gestion responsable des fluides frigorigènes",
      color: "border-t-maintenance"
    },
    {
      icon: Heart,
      title: "Proximité et confiance",
      description: "Une relation de confiance basée sur l'écoute, la transparence et des solutions personnalisées",
      color: "border-t-secondary"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
          Nos valeurs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              color={value.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
