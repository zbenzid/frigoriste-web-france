
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  color: 'primary' | 'secondary' | 'emergency' | 'maintenance';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, link, color }) => {
  const colorClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    emergency: 'bg-emergency',
    maintenance: 'bg-maintenance'
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className={`${colorClasses[color]} p-6 flex items-center justify-center`}>
        <Icon size={48} className="text-white" />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          to={link} 
          className="flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
        >
          En savoir plus <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
