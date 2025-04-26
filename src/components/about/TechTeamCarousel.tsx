
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Users } from 'lucide-react';

type TechnicianProps = {
  name: string;
  role: string;
  experience: number;
  certifications: string[];
  image: string;
};

const TechnicianCard = ({ name, role, experience, certifications, image }: TechnicianProps) => {
  return (
    <Card className="overflow-hidden h-full">
      <CardContent className="p-0">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-lg font-bold text-white">{name}</h3>
            <p className="text-white/80 text-sm">{role}</p>
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-gray-600">{experience} ans d'expérience</span>
            <div className="flex gap-1">
              {certifications.map((cert, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TechTeamCarousel = () => {
  const technicians: TechnicianProps[] = [
    {
      name: "Thomas Legrand",
      role: "Expert en froid commercial",
      experience: 8,
      certifications: ["RGE", "Fluides"],
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80"
    },
    {
      name: "Julie Moreau",
      role: "Spécialiste climatisation",
      experience: 5,
      certifications: ["QualiPAC"],
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Karim Bensaïd",
      role: "Technicien frigoriste",
      experience: 7,
      certifications: ["RGE", "Fluides"],
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"
    },
    {
      name: "Sophie Martin",
      role: "Expert chambres froides",
      experience: 6,
      certifications: ["Fluides"],
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1087&q=80"
    },
    {
      name: "Étienne Dubois",
      role: "Technicien d'urgence",
      experience: 4,
      certifications: ["QualiPAC"],
      image: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Users size={24} className="text-primary" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Notre équipe technique
            </h2>
            <p className="text-gray-600">
              Des experts disponibles 24h/24 pour vos interventions d'urgence
            </p>
          </div>
        </div>

        <div className="px-10 relative">
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {technicians.map((tech, index) => (
                <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 h-full">
                  <TechnicianCard {...tech} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TechTeamCarousel;
