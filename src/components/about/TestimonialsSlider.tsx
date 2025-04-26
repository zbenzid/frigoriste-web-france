
import React, { useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type TestimonialProps = {
  name: string;
  business: string;
  position: string;
  text: string;
  rating: number;
};

const TestimonialCard = ({ name, business, position, text, rating }: TestimonialProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex mb-3">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i}
              size={16}
              className={i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
            />
          ))}
        </div>
        <blockquote className="text-gray-600 italic mb-4 flex-grow">"{text}"</blockquote>
        <div className="mt-auto">
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500">{position}, {business}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSlider = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const testimonials: TestimonialProps[] = [
    {
      name: "Michel Dupont",
      business: "Boulangerie Les Délices",
      position: "Propriétaire",
      text: "Suite à une panne de notre chambre froide un dimanche soir, LeFrigoriste.fr est intervenu en moins d'une heure. Grâce à leur réactivité, nous avons pu sauver notre stock. Un grand merci !",
      rating: 5
    },
    {
      name: "Sophie Martin",
      business: "Restaurant Le Gourmet",
      position: "Gérante",
      text: "Nous travaillons avec LeFrigoriste.fr depuis deux ans pour la maintenance de nos équipements frigorifiques. Service professionnel et de qualité. Très satisfaits !",
      rating: 5
    },
    {
      name: "Jean Moreau",
      business: "Supermarché Proxim",
      position: "Directeur",
      text: "Installation d'une nouvelle chambre froide réalisée dans les délais et le budget prévus. Équipe compétente et à l'écoute de nos besoins spécifiques.",
      rating: 4
    },
    {
      name: "Laura Petit",
      business: "Pâtisserie Maison",
      position: "Co-fondatrice",
      text: "Dépannage frigorifique d'urgence un jour férié ! Intervention rapide et efficace qui nous a évité de grosses pertes. Je recommande vivement.",
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-2">
          Ce que disent nos clients
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Découvrez les témoignages de nos clients satisfaits de nos services 24h/24
        </p>
        
        <div className="px-10 relative" ref={carouselRef}>
          <Carousel opts={{ loop: true, align: "start" }}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 h-full">
                  <div className="h-full">
                    <TestimonialCard {...testimonial} />
                  </div>
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

export default TestimonialsSlider;
