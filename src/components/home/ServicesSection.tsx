
import React from 'react';
import ServiceCard from './ServiceCard';
import { Snowflake, Wind, Hammer, Wrench } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Fond moderne avec dégradé sophistiqué */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-blue-100/50 z-0">
        {/* Effet glacé avec motifs de cristaux de glace */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwQjUzOTQiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        {/* Éléments décoratifs glacés */}
        <div className="absolute -top-20 left-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-blue-100 to-transparent opacity-30 blur-2xl"></div>
        <div className="absolute top-1/3 right-1/5 w-72 h-72 rounded-full bg-gradient-to-bl from-blue-200 to-transparent opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-80 rounded-full bg-gradient-to-tr from-blue-100 to-transparent opacity-30 blur-3xl"></div>
      </div>
      
      {/* Bulles glacées qui flottent lentement (effet froid) */}
      <div className="absolute left-10 top-1/4 w-8 h-8 rounded-full bg-blue-100 opacity-40 blur-sm"></div>
      <div className="absolute right-1/4 top-1/3 w-6 h-6 rounded-full bg-blue-50 opacity-60 blur-sm"></div>
      <div className="absolute left-1/3 bottom-1/4 w-10 h-10 rounded-full bg-blue-100 opacity-30 blur-md"></div>
      
      {/* Grands flocons stylisés */}
      <Snowflake className="absolute top-20 right-20 w-20 h-20 text-blue-100/20" strokeWidth={0.5} />
      <Snowflake className="absolute bottom-32 left-20 w-16 h-16 text-blue-200/15" strokeWidth={0.5} />
      <Snowflake className="absolute top-1/3 left-1/4 w-10 h-10 text-blue-100/10" strokeWidth={0.5} />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Nos services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Solutions complètes en réfrigération</span>
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
