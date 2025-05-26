import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

type LeaderProps = {
  name: string;
  role: string;
  bio: string;
  image: string;
  initials: string;
  linkedin?: string;
};

const LeaderCard = ({
  name,
  role,
  bio,
  image,
  initials,
  linkedin
}: LeaderProps) => {
  return <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20 z-0"></div>
      <CardContent className="p-0 relative z-10">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 flex items-center justify-center p-6 relative">
            <Avatar className="h-32 w-32 border-4 border-white shadow-md">
              <AvatarImage src={image} alt={name} className="object-cover" />
              <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
                {initials}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="md:w-2/3 p-6">
            <h3 className="text-xl font-bold text-primary mb-1">{name}</h3>
            <p className="text-secondary font-semibold mb-3">{role}</p>
            <p className="text-gray-600 mb-4">{bio}</p>
            {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline text-sm">
                Rencontrer sur LinkedIn <ArrowRight size={14} />
              </a>}
          </div>
        </div>
      </CardContent>
    </Card>;
};

const LeadershipDuo = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-4 px-0">
          Notre Leadership
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          Une équipe dirigeante qui combine vision stratégique et excellence technique
          pour garantir un dépannage frigorifique d'urgence de qualité.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <LeaderCard 
            name="Hassan Maach" 
            role="Fondateur & Président" 
            bio="Entrepreneur visionnaire qui a fondé LeFrigoriste.fr avec une passion pour les services de réfrigération de qualité. Son approche orientée client et sa vision stratégique ont permis à l'entreprise de devenir une référence en Île-de-France." 
            image="/lovable-uploads/8983f9a1-94c0-4e8c-b7d5-ea47fcc6bb04.png" 
            initials="HM" 
            linkedin="https://www.linkedin.com/" 
          />
          <LeaderCard 
            name="Mory Sangaré" 
            role="Associé & Directeur Technique" 
            bio="Technicien expérimenté qui a rejoint LeFrigoriste.fr pour renforcer l'excellence technique et les capacités d'intervention 24h/24. Sa connaissance approfondie des systèmes frigorifiques garantit des solutions efficaces pour chaque client." 
            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
            initials="MS" 
            linkedin="https://www.linkedin.com/" 
          />
        </div>
      </div>
    </section>
  );
};

export default LeadershipDuo;
