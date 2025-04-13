
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

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
    <Card className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
      <div className={`bg-gradient-to-r ${colorClasses[color]} p-8 flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <Icon size={56} className="text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
      </div>
      <CardContent className="p-6">
        <h3 className="font-bold text-xl mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-5">{description}</p>
        <Link 
          to={link} 
          className="flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group"
        >
          En savoir plus <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
