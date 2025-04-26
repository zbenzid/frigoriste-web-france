
import React, { useRef, useEffect } from 'react';
import { Calendar, Award, Users, BadgeCheck } from 'lucide-react';

type TimelineEventProps = {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
  isLast?: boolean;
};

const TimelineEvent = ({ year, title, description, icon, image, isLast = false }: TimelineEventProps) => {
  const eventRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (eventRef.current) {
      observer.observe(eventRef.current);
    }

    return () => {
      if (eventRef.current) {
        observer.unobserve(eventRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={eventRef}
      className="flex gap-4 opacity-0 translate-y-4 transition-all duration-700"
    >
      <div className="flex-shrink-0 relative">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center z-10 relative">
          {icon}
        </div>
        {!isLast && (
          <div className="absolute top-12 bottom-0 left-1/2 w-0.5 bg-gray-200 transform -translate-x-1/2 z-0"></div>
        )}
      </div>
      <div className="pb-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="font-bold text-lg text-primary">{year}</div>
          {image && (
            <div className="w-12 h-12 overflow-hidden" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
              <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
          )}
        </div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const CompanyTimeline = () => {
  const timelineEvents: Omit<TimelineEventProps, 'isLast'>[] = [
    {
      year: '2018',
      title: 'Création par Hassan (MSK Réfrigération)',
      description: 'Fondation de l\'entreprise avec une vision claire : offrir des services de réfrigération professionnels de haute qualité en Île-de-France.',
      icon: <Calendar size={24} className="text-primary" />,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      year: '2020',
      title: 'Lancement officiel de LeFrigoriste.fr',
      description: 'Création de la SAS actuelle et développement de l\'identité de marque LeFrigoriste.fr pour renforcer notre présence sur le marché du dépannage frigorifique d\'urgence.',
      icon: <Award size={24} className="text-primary" />,
      image: 'https://images.unsplash.com/photo-1581094289810-adf5d25690e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      year: '2022',
      title: 'Mory rejoint l\'équipe comme associé technique',
      description: 'Renforcement de l\'expertise technique et expansion des capacités d\'intervention 24h/24 avec l\'arrivée d\'un associé expérimenté dans la maintenance équipement frigorifique.',
      icon: <Users size={24} className="text-primary" />,
      image: 'https://images.unsplash.com/photo-1581094283645-9f6fbcca6a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      year: '2023',
      title: 'Expansion et renforcement des certifications',
      description: 'Obtention de nouvelles certifications et expansion de notre zone d\'intervention pour couvrir toute l\'Île-de-France avec des délais garantis pour les interventions d\'urgence.',
      icon: <BadgeCheck size={24} className="text-primary" />,
      image: 'https://images.unsplash.com/photo-1581094283925-25b68ea2366c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-12">
          De garage à référence régionale
        </h2>
        <div className="max-w-3xl mx-auto">
          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={index}
              {...event}
              isLast={index === timelineEvents.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;
