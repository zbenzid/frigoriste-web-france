
import React from 'react';
import { Award, ShieldCheck, FileCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

type CertificationProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const CertificationCard = ({ icon: Icon, title, description }: CertificationProps) => {
  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-5">
        <div className="flex items-start space-x-4">
          <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
            <Icon size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Certifications = () => {
  const certifications = [
    {
      icon: Award,
      title: "Label RGE",
      description: "Reconnu Garant de l'Environnement, ce label atteste notre qualification pour les travaux d'économie d'énergie."
    },
    {
      icon: ShieldCheck,
      title: "QualiPAC",
      description: "Cette qualification certifie notre expertise dans l'installation et la maintenance des pompes à chaleur."
    },
    {
      icon: FileCheck,
      title: "Attestation de capacité",
      description: "Nous sommes habilités à manipuler les fluides frigorigènes, conformément à la réglementation en vigueur."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
          Nos certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((certification, index) => (
            <CertificationCard
              key={index}
              icon={certification.icon}
              title={certification.title}
              description={certification.description}
            />
          ))}
        </div>
        <div className="mt-8 p-6 bg-primary/5 rounded-lg">
          <p className="text-center text-gray-700">
            Nos certifications sont régulièrement renouvelées pour garantir notre conformité 
            avec les normes en vigueur et vous assurer un service de la plus haute qualité.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
