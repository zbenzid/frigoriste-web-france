
import React from 'react';
import { SEOHead, BreadcrumbSchema, ServiceSchema, FAQSection } from '@/components/seo';
import { Snowflake, Clock, Shield, Phone, MapPin, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const DepannageFroid = () => {
  const breadcrumbItems = [{
    name: "Dépannage Froid",
    url: "/depannage-froid"
  }];

  const serviceData = [{
    name: "Dépannage frigorifique d'urgence",
    description: "Service de dépannage frigorifique disponible 24h/24 et 7j/7 en Île-de-France avec intervention garantie en moins d'1 heure.",
    url: "https://lefrigoriste.fr/depannage-froid",
    serviceType: "Dépannage frigorifique",
    areaServed: ["Paris", "Yvelines", "Hauts-de-Seine", "Val-d'Oise", "Seine-et-Marne", "Essonne", "Val-de-Marne", "Seine-Saint-Denis"],
    provider: {
      name: "LeFrigoriste.fr",
      telephone: "+33185500284",
      address: "8-10 rue Levassor, 78130 Les Mureaux"
    }
  }];

  const faqData = [{
    question: "Quels sont vos délais d'intervention pour un dépannage frigorifique d'urgence ?",
    answer: "Nous garantissons une intervention en moins de 45 minutes dans les Yvelines, 1 heure à Paris et 2 heures en grande couronne. Notre service d'urgence est disponible 24h/24 et 7j/7."
  }, {
    question: "Sur quels types d'équipements frigorifiques intervenez-vous ?",
    answer: "Nous intervenons sur tous types d'équipements : chambres froides, vitrines réfrigérées, congélateurs professionnels, groupes frigorifiques, évaporateurs, condenseurs. Nos techniciens sont certifiés pour tous les fluides frigorigènes."
  }, {
    question: "Combien coûte une intervention de dépannage frigorifique ?",
    answer: "Le tarif dépend du type de panne et de l'heure d'intervention. Nous établissons un diagnostic gratuit et vous proposons un devis transparent avant toute réparation. Tarifs préférentiels pour nos clients sous contrat de maintenance."
  }];

  return (
    <>
      <SEOHead
        title="Dépannage Froid Paris & Île-de-France - Intervention 24h/24 | LeFrigoriste.fr"
        description="Dépannage frigorifique d'urgence 24h/24 en Île-de-France. Intervention garantie : 45min Yvelines, 1h Paris. Techniciens certifiés RGE. Devis gratuit."
        keywords="dépannage froid, dépannage frigorifique Paris, réparation chambre froide urgence, frigoriste dépannage 24h/24, intervention frigorifique"
        canonicalUrl="https://lefrigoriste.fr/depannage-froid"
      />
      
      <ServiceSchema services={serviceData} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-[40px]">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-600 font-medium text-sm mb-4">
                URGENCE 24H/24
              </span>
              <h1 className="font-bold font-montserrat text-4xl md:text-5xl mb-6 text-[#212121]">
                Dépannage <span className="text-primary">Frigorifique</span>
                <span className="block text-2xl md:text-3xl mt-2 text-gray-600">Paris & Île-de-France</span>
              </h1>
              <p className="text-xl text-gray-600 font-opensans max-w-3xl mx-auto mb-8">
                Service d'urgence 24h/24 pour tous vos équipements frigorifiques. Intervention garantie en moins d'1 heure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="tel:0185500284" 
                  className="btn-emergency inline-flex items-center justify-center"
                >
                  <Phone size={20} className="mr-2" />
                  Appel d'urgence
                </Link>
                <Link to="/contact" className="btn-primary inline-flex items-center justify-center">
                  Devis gratuit
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SLA Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-bold font-montserrat text-3xl md:text-4xl mb-4 text-[#212121]">
                Nos délais d'intervention garantis
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-b from-blue-50 to-white rounded-xl border border-blue-100">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">45 minutes</h3>
                <p className="text-gray-600">Yvelines (78)</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-b from-blue-50 to-white rounded-xl border border-blue-100">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">1 heure</h3>
                <p className="text-gray-600">Paris intramuros</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-b from-blue-50 to-white rounded-xl border border-blue-100">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">2 heures</h3>
                <p className="text-gray-600">Grande couronne</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-bold font-montserrat text-3xl md:text-4xl mb-4 text-[#212121]">
                Nos interventions de dépannage
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Snowflake className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-3">Chambres froides</h3>
                <p className="text-gray-600">Dépannage de chambres froides positives et négatives, réparation de groupes frigorifiques.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Wrench className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-3">Vitrines réfrigérées</h3>
                <p className="text-gray-600">Réparation de vitrines de boucherie, boulangerie, et libre-service.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-3">Groupes frigorifiques</h3>
                <p className="text-gray-600">Maintenance et réparation de tous types de groupes frigorifiques.</p>
              </div>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqData} />
      </div>
    </>
  );
};

export default DepannageFroid;
