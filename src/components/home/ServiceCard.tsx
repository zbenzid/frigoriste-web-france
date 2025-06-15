
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import OptimizedImage from "@/components/ui/optimized-image";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  color: 'primary' | 'secondary' | 'emergency' | 'maintenance';
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  link,
  color,
  image
}) => {
  const colorClasses = {
    primary: 'from-primary/90 to-primary',
    secondary: 'from-secondary/90 to-secondary',
    emergency: 'from-emergency/90 to-emergency',
    maintenance: 'from-maintenance/90 to-maintenance'
  };

  return <Card className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1 rounded-xl">
      {/* Image section with overlay */}
      <div className="relative h-48 overflow-hidden">
        <OptimizedImage 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Gradient overlay for better text readability */}
        <div className={`absolute inset-0 bg-gradient-to-t ${colorClasses[color]} opacity-80`}></div>
        
        {/* Icon in top-right corner */}
        <div className="absolute top-4 right-4 flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm ring-2 ring-white/30">
          <Icon size={24} className="text-white" />
        </div>
        
        {/* Service title overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-montserrat font-bold text-white text-lg leading-tight">{title}</h3>
        </div>
      </div>

      {/* Content section */}
      <CardContent className="p-6 bg-white">
        <p className="font-opensans text-gray-600 mb-5 leading-relaxed">{description}</p>
        
        <HoverCard>
          <HoverCardTrigger>
            <Link to={link} className="flex items-center text-primary font-semibold hover:text-secondary transition-colors group/link font-opensans" aria-label={`En savoir plus sur ${title}`}>
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
    </Card>;
};

export default ServiceCard;
