import React from 'react';
import { Star, MessageSquare } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  business: string;
  position: string;
  testimonial: string;
  rating: number;
}

const Testimonials = () => {
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
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-blue-50/20">
      {/* Fond avec subtils dégradés */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-50/30 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent"></div>
      
      {/* Subtils éléments décoratifs */}
      <div className="absolute top-0 left-0 w-1/2 h-40 bg-gradient-to-r from-blue-50/30 to-transparent opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-40 bg-gradient-to-l from-blue-50/30 to-transparent opacity-60"></div>
      
      {/* Éléments de citation stylisés */}
      <MessageSquare className="absolute top-20 right-[15%] w-16 h-16 text-secondary/10" strokeWidth={0.5} />
      <MessageSquare className="absolute bottom-32 left-[10%] w-12 h-12 text-primary/10" strokeWidth={0.5} />
      <MessageSquare className="absolute top-1/2 left-1/4 w-8 h-8 text-secondary/5" strokeWidth={0.5} />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-primary font-medium text-sm mb-4">
            AVIS CLIENTS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Ce que disent nos clients</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits de nos services en réfrigération et climatisation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden group hover:-translate-y-1 border border-gray-100/50">
              <div className="p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.testimonial}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.position}, {testimonial.business}</p>
                  </div>
                </div>
              </div>
              <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-blue-100 opacity-80 transform origin-left transition-all duration-300 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
