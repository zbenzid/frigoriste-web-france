
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  id: number;
  name: string;
  business: string;
  position: string;
  testimonial: string;
  rating: number;
  image?: string;
}

const AboutTestimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Michel Dupont",
      business: "Boulangerie Les Délices",
      position: "Propriétaire",
      testimonial: "Suite à une panne de notre chambre froide un dimanche soir, LeFrigoriste.fr est intervenu en moins d'une heure. Grâce à leur réactivité, nous avons pu sauver notre stock. Un grand merci !",
      rating: 5,
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Sophie Martin",
      business: "Restaurant Le Gourmet",
      position: "Gérante",
      testimonial: "Nous travaillons avec LeFrigoriste.fr depuis deux ans pour la maintenance de nos équipements frigorifiques. Service professionnel et de qualité. Très satisfaits !",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Jean Moreau",
      business: "Supermarché Proxim",
      position: "Directeur",
      testimonial: "Installation d'une nouvelle chambre froide réalisée dans les délais et le budget prévus. Équipe compétente et à l'écoute de nos besoins spécifiques.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Martine Lefèvre",
      business: "Pâtisserie du Centre",
      position: "Co-propriétaire",
      testimonial: "Dépannage efficace de notre vitrine réfrigérée en plein été. Intervention rapide et techniciens très professionnels. Je recommande vivement !",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Pierre Laurent",
      business: "Traiteur Gourmet",
      position: "Chef",
      testimonial: "Service client exceptionnel. Nos chambres froides sont maintenant parfaitement entretenues grâce à leur contrat de maintenance Premium.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 6,
      name: "Amélie Rousseau",
      business: "Café La Terrasse",
      position: "Gérante",
      testimonial: "Installation de notre système de climatisation réalisée dans les règles de l'art. Équipe ponctuelle et travail soigné.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-blue-50/20">
      <div className="container-custom">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-primary font-medium text-sm mb-4">
            AVIS CLIENTS
          </span>
          <h2 className="text-3xl font-bold text-primary mb-4 font-montserrat">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Nos clients témoignent</span>
          </h2>
        </div>
        
        <div className="relative px-10">
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100/50">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={i < testimonial.rating ? "text-primary fill-primary" : "text-gray-200"} 
                          />
                        ))}
                      </div>
                      <p className="text-gray-600 italic mb-4 flex-grow font-opensans">"{testimonial.testimonial}"</p>
                      <div className="flex items-center">
                        <Avatar className="h-8 w-8 bg-gradient-to-r from-primary to-secondary text-white">
                          {testimonial.image ? (
                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          ) : (
                            <AvatarFallback className="text-xs font-semibold">
                              {testimonial.name.charAt(0)}
                            </AvatarFallback>
                          )}
                        </Avatar>
                        <div className="ml-3">
                          <p className="font-semibold text-gray-800 font-montserrat">{testimonial.name}</p>
                          <p className="text-gray-600 text-xs font-opensans">{testimonial.position}, {testimonial.business}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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

export default AboutTestimonials;
