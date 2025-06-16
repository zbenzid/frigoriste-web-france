
import React from 'react';
import { SEOHead, BreadcrumbSchema, ServiceSchema, FAQSection } from '@/components/seo';
import { Snowflake, Ruler, Shield, Phone, CheckCircle, Thermometer } from 'lucide-react';
import { Link } from 'react-router-dom';

const InstallationChambreFroideParis = () => {
  const breadcrumbItems = [{
    name: "Installation Chambre Froide Paris",
    url: "/installation-chambre-froide-paris"
  }];

  const serviceData = [{
    name: "Installation chambre froide Paris",
    description: "Installation de chambres froides sur mesure à Paris. Positive, négative, modulaire. Respect des normes HACCP.",
    url: "https://lefrigoriste.fr/installation-chambre-froide-paris",
    serviceType: "Installation chambre froide",
    areaServed: ["Paris", "Île-de-France"],
    provider: {
      name: "LeFrigoriste.fr",
      telephone: "+33185500284",
      address: "8-10 rue Levassor, 78130 Les Mureaux"
    }
  }];

  const faqData = [{
    question: "Quelles sont les dimensions possibles pour une chambre froide ?",
    answer: "Nous réalisons des chambres froides de 2m² à 100m² selon vos besoins. Hauteur standard 2,20m, possibilité de sur-mesure. Étude personnalisée selon votre activité."
  }, {
    question: "Quelle est la différence entre chambre froide positive et négative ?",
    answer: "Chambre froide positive : température +0°C à +10°C pour légumes, fruits, produits laitiers. Chambre froide négative : -18°C à -25°C pour produits surgelés, glaces, viandes."
  }, {
    question: "Combien de temps faut-il pour installer une chambre froide ?",
    answer: "Installation standard : 1-2 jours pour une chambre modulaire, 3-5 jours pour du sur-mesure. Inclut montage, raccordement électrique/frigorifique, mise en service et formation."
  }];

  return (
    <>
      <SEOHead
        title="Installation Chambre Froide Paris - Sur Mesure HACCP | LeFrigoriste.fr"
        description="Installation chambre froide Paris et Île-de-France. Positive, négative, modulaire, sur-mesure. Normes HACCP. Devis gratuit."
        keywords="installation chambre froide Paris, chambre froide sur mesure, chambre froide positive négative, installation frigorifique HACCP"
        canonicalUrl="https://lefrigoriste.fr/installation-chambre-froide-paris"
      />
      
      <ServiceSchema services={serviceData} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-[40px]">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-primary font-medium text-sm mb-4">
                INSTALLATION CHAMBRE FROIDE
              </span>
              <h1 className="font-bold font-montserrat text-4xl md:text-5xl mb-6 text-[#212121]">
                Installation <span className="text-primary">Chambre Froide</span>
                <span className="block text-2xl md:text-3xl mt-2 text-gray-600">Paris & Île-de-France</span>
              </h1>
              <p className="text-xl text-gray-600 font-opensans max-w-3xl mx-auto mb-8">
                Solutions sur-mesure pour professionnels. Respect des normes HACCP et réglementation sanitaire.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary inline-flex items-center justify-center">
                  <CheckCircle size={20} className="mr-2" />
                  Devis gratuit
                </Link>
                <Link 
                  to="tel:0185500284" 
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  <Phone size={20} className="mr-2" />
                  Conseil expert
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Types de chambres froides */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-bold font-montserrat text-3xl md:text-4xl mb-4 text-[#212121]">
                Types de chambres froides
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <Thermometer className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="font-bold text-xl mb-3">Chambre froide positive</h3>
                <p className="text-gray-600 mb-4">Température +0°C à +10°C</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Fruits et légumes</li>
                  <li>• Produits laitiers</li>
                  <li>• Boissons</li>
                  <li>• Pâtisseries</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <Snowflake className="w-12 h-12 text-blue-700 mb-4" />
                <h3 className="font-bold text-xl mb-3">Chambre froide négative</h3>
                <p className="text-gray-600 mb-4">Température -18°C à -25°C</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Produits surgelés</li>
                  <li>• Viandes et poissons</li>
                  <li>• Glaces</li>
                  <li>• Plats préparés</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Secteurs d'activité */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-bold font-montserrat text-3xl md:text-4xl mb-4 text-[#212121]">
                Secteurs d'activité
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                'Restaurants', 'Boucheries', 'Boulangeries', 'Supermarchés',
                'Traiteurs', 'Hôtels', 'Collectivités', 'Poissonneries'
              ].map((sector) => (
                <div key={sector} className="bg-white p-4 rounded-lg text-center shadow-sm border border-gray-200">
                  <span className="font-medium text-gray-700">{sector}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-bold font-montserrat text-3xl md:text-4xl mb-4 text-[#212121]">
                Nos avantages
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Ruler className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Sur-mesure</h3>
                <p className="text-gray-600">Adaptation parfaite à vos locaux</p>
              </div>
              <div className="text-center">
                <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Normes HACCP</h3>
                <p className="text-gray-600">Respect de la réglementation</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Garantie totale</h3>
                <p className="text-gray-600">Installation et matériel</p>
              </div>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqData} />
      </div>
    </>
  );
};

export default InstallationChambreFroideParis;
