
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Award, ShieldCheck, FileCheck } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type CertificationProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  details: string;
};

const CertificationBadge = ({ icon: Icon, title, description, color, details }: CertificationProps) => {
  return (
    <div>
      <Badge 
        className={`px-4 py-2 h-auto flex items-center gap-2 ${color}`}
      >
        <Icon size={16} />
        <span className="font-semibold">{title}</span>
      </Badge>
      <p className="text-sm mt-2 mb-1 text-gray-600">{description}</p>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="details" className="border-0">
          <AccordionTrigger className="py-1 text-xs text-primary">En savoir plus</AccordionTrigger>
          <AccordionContent className="text-xs text-gray-600">
            {details}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

const CertificationsSection = () => {
  const certifications: CertificationProps[] = [
    {
      icon: Award,
      title: "Label RGE",
      description: "Reconnu Garant de l'Environnement",
      color: "bg-primary text-white",
      details: "Cette certification atteste notre qualification pour réaliser des travaux d'économie d'énergie et permet à nos clients d'accéder à des aides financières pour leurs installations."
    },
    {
      icon: ShieldCheck,
      title: "QualiPAC",
      description: "Qualification pompes à chaleur",
      color: "bg-secondary text-white",
      details: "Cette qualification certifie notre expertise dans l'installation et la maintenance des pompes à chaleur, garantissant des installations conformes aux meilleures pratiques."
    },
    {
      icon: FileCheck,
      title: "Attestation de capacité",
      description: "Manipulation des fluides frigorigènes",
      color: "bg-maintenance text-white",
      details: "Nous sommes habilités à manipuler les fluides frigorigènes conformément à la réglementation F-Gas, assurant une gestion responsable et écologique des installations."
    }
  ];

  const partners = [
    { name: "Daikin", logo: "https://via.placeholder.com/150x50?text=Daikin" },
    { name: "Carrier", logo: "https://via.placeholder.com/150x50?text=Carrier" },
    { name: "Trane", logo: "https://via.placeholder.com/150x50?text=Trane" },
    { name: "Mitsubishi Electric", logo: "https://via.placeholder.com/150x50?text=Mitsubishi" }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-8">
          Nos certifications et partenaires
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {certifications.map((certification, index) => (
            <CertificationBadge
              key={index}
              icon={certification.icon}
              title={certification.title}
              description={certification.description}
              color={certification.color}
              details={certification.details}
            />
          ))}
        </div>
        
        <div className="pt-6 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-center mb-6">Nos partenaires fabricants</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partners.map((partner, index) => (
              <div key={index} className="flex justify-center">
                <img 
                  src={partner.logo} 
                  alt={`Logo ${partner.name}`} 
                  className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
