
import React from 'react';
import ServiceCard from './ServiceCard';
import { Snowflake, Wind, Hammer, Wrench } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Fond moderne avec dégradé sophistiqué */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-blue-100/30 z-0">
        {/* Effet glacé avec motifs subtils */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwQjUzOTQiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NEgwdjJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] z-10"></div>
      </div>
      
      {/* Éléments décoratifs glacés */}
      <div className="absolute -top-10 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-blue-100/20 to-transparent opacity-30 blur-3xl"></div>
      <div className="absolute top-1/3 right-20 w-80 h-80 rounded-full bg-gradient-to-bl from-blue-200/20 to-transparent opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-80 rounded-full bg-gradient-to-tr from-blue-100/20 to-transparent opacity-30 blur-3xl"></div>
      
      {/* Éléments de décoration discrets */}
      <Snowflake className="absolute top-20 right-20 w-16 h-16 text-blue-100/15" strokeWidth={0.5} />
      <Snowflake className="absolute bottom-32 left-20 w-12 h-12 text-blue-200/10" strokeWidth={0.5} />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-primary font-medium text-sm mb-4">
            POURQUOI NOUS CHOISIR
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-5 leading-tight">
            <span className="relative">
              Solutions complètes 
              <span className="text-primary"> en réfrigération</span>
            </span>
          </h2>
          <p className="text-gray-600 font-opensans max-w-2xl mx-auto">
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
