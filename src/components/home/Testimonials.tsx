
import React from 'react';
import { Star, MessageSquare, Snowflake } from 'lucide-react';

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
    <section className="py-24 relative overflow-hidden">
      {/* Fond avec dégradé sophistiqué */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-white to-gray-50/50 z-0">
        {/* Motifs glacés subtils */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM0QTg2RTgiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NEgwdjJoNHY0aDJWNmg0VjQtNHpNNiAzNHYtNEg0djRIMHYyaDR2NGgydi00aDR2LTJINnptMC0zMFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      </div>
      
      {/* Éléments décoratifs glacés */}
      <div className="absolute -bottom-20 right-1/3 w-96 h-96 rounded-full bg-gradient-to-bl from-blue-100 to-transparent opacity-20 blur-3xl"></div>
      <div className="absolute top-1/3 left-10 w-40 h-40 rounded-full bg-gradient-to-tr from-blue-200 to-transparent opacity-10 blur-2xl"></div>
      
      {/* Flocons stylisés */}
      <Snowflake className="absolute bottom-20 right-20 w-14 h-14 text-blue-100/20" strokeWidth={0.5} />
      <Snowflake className="absolute top-32 left-1/4 w-12 h-12 text-blue-200/15" strokeWidth={0.5} />
      <MessageSquare className="absolute top-1/2 right-1/4 w-10 h-10 text-secondary/10" strokeWidth={0.5} />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
            Avis clients
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
            <div key={testimonial.id} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/50 group hover:-translate-y-1">
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
              <div className="absolute -bottom-1 -right-1 w-20 h-20 rounded-br-xl bg-gradient-to-tl from-blue-50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
