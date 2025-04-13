
import React from 'react';
import ServiceCard from './ServiceCard';
import { Snowflake, Wind, Hammer, Wrench } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Nos services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous proposons une gamme complète de services en réfrigération et climatisation pour répondre à tous vos besoins professionnels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
