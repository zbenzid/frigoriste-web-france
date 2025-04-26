
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
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
}

const AboutTestimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Michel Dupont",
      business: "Boulangerie Les Délices",
      position: "Propriétaire",
      testimonial: "Suite à une panne de notre chambre froide un dimanche soir, LeFrigoriste.fr est intervenu en moins d'une heure. Grâce à leur réactivité, nous avons pu sauver notre stock. Un grand merci !",
      rating: 5
    },
    {
      id: 2,
      name: "Sophie Martin",
      business: "Restaurant Le Gourmet",
      position: "Gérante",
      testimonial: "Nous travaillons avec LeFrigoriste.fr depuis deux ans pour la maintenance de nos équipements frigorifiques. Service professionnel et de qualité. Très satisfaits !",
      rating: 5
    },
    {
      id: 3,
      name: "Jean Moreau",
      business: "Supermarché Proxim",
      position: "Directeur",
      testimonial: "Installation d'une nouvelle chambre froide réalisée dans les délais et le budget prévus. Équipe compétente et à l'écoute de nos besoins spécifiques.",
      rating: 4
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
          Ce que disent nos clients
        </h2>
        
        <div className="relative px-10">
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
                          />
                        ))}
                      </div>
                      <p className="text-gray-600 italic mb-4 flex-grow">"{testimonial.testimonial}"</p>
                      <div>
                        <p className="font-bold text-gray-800">{testimonial.name}</p>
                        <p className="text-gray-600 text-sm">{testimonial.position}, {testimonial.business}</p>
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
