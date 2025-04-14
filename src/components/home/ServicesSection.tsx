
import React from 'react';
import ServiceCard from './ServiceCard';
import { Snowflake, Wind, Hammer, Wrench } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements for branding */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full border border-primary/30"></div>
        <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full border border-secondary/20"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 rounded-full border border-primary/20 transform -translate-x-1/2"></div>
        <Snowflake className="absolute top-20 right-20 w-12 h-12 text-primary/10" />
        <Snowflake className="absolute bottom-20 left-20 w-8 h-8 text-secondary/10" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Nos services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">
            Solutions complètes en <span className="relative inline-block">
              réfrigération
              <span className="absolute bottom-1 left-0 w-full h-1 bg-secondary/30 -z-10 rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous proposons une gamme complète de services en réfrigération et climatisation pour répondre à tous vos besoins professionnels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            title="Dépannage frigorifique" 
            description="Intervention rapide 24h/24 et 7j/7 pour tous vos équipements frigorifiques en panne."
            icon={Snowflake}
            link="/services#depannage"
            color="emergency"
          />
          
          <ServiceCard 
            title="Installation climatisation" 
            description="Installation sur-mesure de systèmes de climatisation pour tous types de locaux professionnels."
            icon={Wind}
            link="/services#climatisation"
            color="secondary"
          />
          
          <ServiceCard 
            title="Installation chambres froides" 
            description="Conception et installation de chambres froides adaptées à vos besoins spécifiques."
            icon={Hammer}
            link="/services#chambres-froides"
            color="primary"
          />
          
          <ServiceCard 
            title="Maintenance préventive" 
            description="Contrats de maintenance pour garantir la longévité et l'efficacité de vos installations."
            icon={Wrench}
            link="/services#maintenance"
            color="maintenance"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
