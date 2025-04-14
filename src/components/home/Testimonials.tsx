
import React from 'react';
import { Star } from 'lucide-react';

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
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Ce que disent nos clients</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits de nos services en réfrigération et climatisation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
                  />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.testimonial}"</p>
              <div>
                <p className="font-bold text-gray-800">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.position}, {testimonial.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
