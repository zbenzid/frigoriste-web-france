
import React from 'react';
import { Star, User } from 'lucide-react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

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
    },
    {
      id: 4,
      name: "Martine Lefèvre",
      business: "Pâtisserie du Centre",
      position: "Co-propriétaire",
      testimonial: "Dépannage efficace de notre vitrine réfrigérée en plein été. Intervention rapide et techniciens très professionnels. Je recommande vivement !",
      rating: 5
    },
    {
      id: 5,
      name: "Pierre Laurent",
      business: "Traiteur Gourmet",
      position: "Chef",
      testimonial: "Service client exceptionnel. Nos chambres froides sont maintenant parfaitement entretenues grâce à leur contrat de maintenance Premium.",
      rating: 5
    },
    {
      id: 6,
      name: "Amélie Rousseau",
      business: "Café La Terrasse",
      position: "Gérante",
      testimonial: "Installation de notre système de climatisation réalisée dans les règles de l'art. Équipe ponctuelle et travail soigné.",
      rating: 4
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50/50 to-blue-50/20 relative overflow-hidden">
      {/* Fond avec subtils dégradés - garder le style original */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-50/30 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-primary font-medium text-sm mb-4">
            AVIS CLIENTS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat leading-tight">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Nos clients témoignent</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-opensans">
            Découvrez pourquoi nos clients professionnels nous font confiance pour leurs équipements de réfrigération et climatisation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(testimonial => (
            <Card key={testimonial.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100/50 hover:-translate-y-1">
              <div className="p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-200"} 
                    />
                  ))}
                </div>
                
                <p className="text-gray-600 italic mb-6 font-opensans">"{testimonial.testimonial}"</p>
                
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 bg-gradient-to-r from-primary to-secondary text-white">
                    <AvatarFallback className="text-sm font-semibold">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="ml-3">
                    <p className="font-semibold text-gray-800 font-montserrat">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm font-opensans">{testimonial.position}, {testimonial.business}</p>
                  </div>
                </div>
              </div>
              <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-blue-100 opacity-80 transform origin-left transition-all duration-300 group-hover:opacity-100"></div>
            </Card>
          ))}
        </div>
        
        {/* Citation Google Reviews */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-sm">
            <div className="text-yellow-400 flex">
              {'★'.repeat(5)}
            </div>
            <span className="ml-2 text-gray-700 font-opensans">4.9/5 basé sur plus de 50 avis clients Google</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
