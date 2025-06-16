
import React from 'react';
import { SEOHead, BreadcrumbSchema, ServiceSchema, FAQSection } from '@/components/seo';
import { MapPin, Clock, Phone, Snowflake, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';

const FrigoristeYvelines = () => {
  const breadcrumbItems = [{
    name: "Frigoriste Yvelines 78",
    url: "/frigoriste-en-yvelines-78"
  }];

  const serviceData = [{
    name: "Services frigorifiques Yvelines",
    description: "Frigoriste en Yvelines 78 pour dépannage, installation et maintenance frigorifique. Intervention 24h/24.",
    url: "https://lefrigoriste.fr/frigoriste-en-yvelines-78",
    serviceType: "Services frigorifiques",
    areaServed: ["Yvelines", "Les Mureaux", "Mantes-la-Jolie", "Versailles", "Saint-Germain-en-Laye"],
    provider: {
      name: "LeFrigoriste.fr",
      telephone: "+33185500284",
      address: "8-10 rue Levassor, 78130 Les Mureaux"
    }
  }];

  const faqData = [{
    question: "Dans quelles villes des Yvelines intervenez-vous ?",
    answer: "Nous intervenons dans tout le département des Yvelines : Les Mureaux, Mantes-la-Jolie, Versailles, Saint-Germain-en-Laye, Poissy, Conflans-Sainte-Honorine, Sartrouville, Houilles, et toutes les communes du 78."
  }, {
    question: "Quel est votre délai d'intervention dans les Yvelines ?",
    answer: "Étant basés aux Mureaux (78), nous garantissons une intervention en moins de 45 minutes dans les Yvelines. C'est notre zone de prédilection avec le délai le plus rapide."
  }];

  return (
    <>
      <SEOHead
        title="Frigoriste Yvelines 78 - Dépannage 24h/24 | LeFrigoriste.fr"
        description="Frigoriste dans les Yvelines 78. Dépannage frigorifique et climatisation 24h/24. Intervention en 45min. Les Mureaux, Mantes, Versailles."
        keywords="frigoriste Yvelines 78, dépannage froid Yvelines, frigoriste Les Mureaux, frigoriste Mantes-la-Jolie, frigoriste Versailles"
        canonicalUrl="https://lefrigoriste.fr/frigoriste-en-yvelines-78"
      />
      
      <ServiceSchema services={serviceData} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-[40px]">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-primary font-medium text-sm mb-4">
                YVELINES 78
              </span>
              <h1 className="font-bold font-montserrat text-4xl md:text-5xl mb-6 text-[#212121]">
                Frigoriste dans les <span className="text-primary">Yvelines</span>
                <span className="block text-2xl md:text-3xl mt-2 text-gray-600">Intervention en 45 minutes</span>
              </h1>
              <p className="text-xl text-gray-600 font-opensans max-w-3xl mx-auto mb-8">
                Basés aux Mureaux, nous sommes votre frigoriste de proximité dans les Yvelines. Service 24h/24.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="tel:0185500284" 
                  className="btn-emergency inline-flex items-center justify-center"
                >
                  <Phone size={20} className="mr-2" />
                  Urgence Yvelines
                </Link>
                <Link to="/contact" className="btn-primary inline-flex items-center justify-center">
                  Devis gratuit
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Zone géographique */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-bold font-montserrat text-3xl md:text-4xl mb-4 text-[#212121]">
                Nos interventions dans les Yvelines
              </h2>
              <p className="text-xl text-gray-600">Intervention en 45 minutes dans tout le département</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Les Mureaux', 'Mantes-la-Jolie', 'Versailles', 'Saint-Germain-en-Laye',
                'Poissy', 'Conflans-Sainte-Honorine', 'Sartrouville', 'Houilles',
                'Meaux', 'Rambouillet', 'Plaisir', 'Trappes'
              ].map((city) => (
                <div key={city} className="bg-blue-50 p-3 rounded-lg text-center border border-blue-100">
                  <span className="text-sm font-medium text-primary">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services locaux */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-bold font-montserrat text-3xl md:text-4xl mb-4 text-[#212121]">
                Services frigorifiques Yvelines
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <Snowflake className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-3">Dépannage frigorifique</h3>
                <p className="text-gray-600 mb-4">Intervention d'urgence 24h/24 sur tous vos équipements frigorifiques</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Chambres froides</li>
                  <li>• Vitrines réfrigérées</li>
                  <li>• Congélateurs professionnels</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <Wind className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-3">Climatisation</h3>
                <p className="text-gray-600 mb-4">Installation et dépannage de systèmes de climatisation</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Installation RGE</li>
                  <li>• Dépannage 24h/24</li>
                  <li>• Maintenance préventive</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqData} />
      </div>
    </>
  );
};

export default FrigoristeYvelines;
