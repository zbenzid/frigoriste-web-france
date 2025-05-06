
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  color: 'primary' | 'secondary' | 'emergency' | 'maintenance';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, link, color }) => {
  const colorClasses = {
    primary: 'from-primary/90 to-primary',
    secondary: 'from-secondary/90 to-secondary',
    emergency: 'from-emergency/90 to-emergency',
    maintenance: 'from-maintenance/90 to-maintenance'
  };

  return (
    <Card className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1 rounded-xl">
      <div className={`bg-gradient-to-r ${colorClasses[color]} p-8 flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        {/* Enhanced icon area with frost effect */}
        <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm p-3 ring-2 ring-white/20">
          <Icon size={36} className="text-white group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
      <CardContent className="p-6 border border-transparent group-hover:border-gray-100 transition-colors duration-300 bg-white">
        {/* Typography using Montserrat for headings and Open Sans for body text - changed from font-bold to font-semibold */}
        <h3 className="font-montserrat font-semibold text-xl mb-3 text-gray-800 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="font-opensans text-gray-600 mb-5">{description}</p>
        <HoverCard>
          <HoverCardTrigger>
            <Link 
              to={link} 
              className="flex items-center text-primary font-semibold hover:text-secondary transition-colors group/link font-opensans"
              aria-label={`En savoir plus sur ${title}`}
            >
              En savoir plus <ChevronRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform duration-300" />
            </Link>
          </HoverCardTrigger>
          <HoverCardContent className="w-80 p-4 text-left">
            <h4 className="font-montserrat font-bold mb-2">{title}</h4>
            <p className="text-sm text-gray-600 font-opensans">Découvrez nos services de {title.toLowerCase()} et comment nous pouvons vous aider à maintenir vos équipements frigorifiques en parfait état.</p>
            <Link to={link} className="text-primary text-sm font-medium mt-2 inline-block font-opensans">
              Voir tous les détails
            </Link>
          </HoverCardContent>
        </HoverCard>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
