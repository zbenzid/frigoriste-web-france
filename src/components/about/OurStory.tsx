
import React from 'react';
import { Calendar, Award, Users, BadgeCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TimelineItem = ({ 
  year, 
  title, 
  description, 
  icon: Icon 
}: { 
  year: string; 
  title: string; 
  description: string; 
  icon: React.ComponentType<any>; 
}) => (
  <div className="flex gap-4 mb-6 last:mb-0">
    <div className="flex-shrink-0">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
        <Icon size={24} className="text-primary" />
      </div>
    </div>
    <div className="flex-grow pb-6 border-l-2 border-gray-200 pl-6 ml-6 relative -mt-12 pt-12">
      <div className="absolute -left-[9px] top-14 w-4 h-4 rounded-full bg-primary"></div>
      <div className="font-bold text-xl text-primary mb-1">{year}</div>
      <div className="font-semibold mb-2">{title}</div>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const OurStory = () => {
  const milestones = [
    {
      year: '2018',
      title: 'Création par Hassan (MSK Réfrigération)',
      description: 'Fondation de l\'entreprise avec une vision claire : offrir des services de réfrigération professionnels de haute qualité.',
      icon: Calendar
    },
    {
      year: '2020',
      title: 'Lancement officiel de LeFrigoriste.fr',
      description: 'Création de la SAS actuelle et développement de l\'identité de marque LeFrigoriste.fr pour renforcer notre présence sur le marché.',
      icon: Award
    },
    {
      year: '2022',
      title: 'Mory rejoint l\'équipe comme associé technique',
      description: 'Renforcement de l\'expertise technique et expansion des capacités d\'intervention avec l\'arrivée d\'un associé expérimenté.',
      icon: Users
    },
    {
      year: '2023',
      title: 'Expansion et renforcement des certifications',
      description: 'Obtention de nouvelles certifications et expansion de notre zone d\'intervention pour couvrir toute l\'Île-de-France.',
      icon: BadgeCheck
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">Notre histoire</h2>
        
        <Card className="border-none shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <TimelineItem
                  key={index}
                  year={milestone.year}
                  title={milestone.title}
                  description={milestone.description}
                  icon={milestone.icon}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OurStory;
