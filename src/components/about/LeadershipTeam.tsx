
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

type LeaderProps = {
  name: string;
  role: string;
  bio: string;
  image: string;
  initials: string;
};

const LeaderCard = ({ name, role, bio, image, initials }: LeaderProps) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-gray-100 flex items-center justify-center p-6">
            <Avatar className="h-32 w-32 border-4 border-white shadow-md">
              <AvatarImage src={image} alt={name} />
              <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
                {initials}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="md:w-2/3 p-6">
            <h3 className="text-xl font-bold text-primary mb-1">{name}</h3>
            <p className="text-secondary font-semibold mb-3">{role}</p>
            <p className="text-gray-600">{bio}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const LeadershipTeam = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
          Équipe dirigeante
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <LeaderCard 
            name="Hassan Maach"
            role="Fondateur & Président"
            bio="Entrepreneur visionnaire qui a fondé LeFrigoriste.fr avec une passion pour les services de réfrigération de qualité. Son approche orientée client et sa vision stratégique ont permis à l'entreprise de devenir une référence en Île-de-France."
            image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            initials="HM"
          />
          <LeaderCard 
            name="Mory Sangaré"
            role="Associé & Directeur Technique"
            bio="Technicien expérimenté qui a rejoint LeFrigoriste.fr pour renforcer l'excellence technique et les capacités d'intervention 24h/24. Sa connaissance approfondie des systèmes frigorifiques garantit des solutions efficaces pour chaque client."
            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            initials="MS"
          />
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
