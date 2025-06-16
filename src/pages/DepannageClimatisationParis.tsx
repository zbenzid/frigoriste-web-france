
import React from 'react';
import { SEOHead, BreadcrumbSchema, ServiceSchema, FAQSection } from '@/components/seo';
import { Wind, Clock, Shield, Phone, MapPin, Thermometer } from 'lucide-react';
import { Link } from 'react-router-dom';

const DepannageClimatisationParis = () => {
  const breadcrumbItems = [{
    name: "Dépannage Climatisation Paris",
    url: "/depannage-climatisation-paris"
  }];

  const serviceData = [{
    name: "Dépannage climatisation Paris",
    description: "Service de dépannage climatisation 24h/24 à Paris et en Île-de-France. Intervention rapide par techniciens certifiés RGE.",
    url: "https://lefrigoriste.fr/depannage-climatisation-paris",
    serviceType: "Dépannage climatisation",
    areaServed: ["Paris", "Île-de-France"],
    provider: {
      name: "LeFrigoriste.fr",
      telephone: "+33185500284",
      address: "8-10 rue Levassor, 78130 Les Mureaux"
    }
  }];

  const faqData = [{
    question: "Quels sont les signes qu'une climatisation a besoin d'être dépannée ?",
    answer: "Les principaux signes sont : climatisation qui ne refroidit plus, bruits anormaux, fuite de liquide, odeurs désagréables, surconsommation électrique, ou arrêts fréquents du système."
  }, {
    question: "Combien de temps prend une réparation de climatisation ?",
    answer: "La durée dépend de la panne. Un diagnostic simple prend 30 minutes, une réparation courante 1-2 heures. Pour des pannes complexes nécessitant des pièces spécifiques, comptez 24-48h."
  }, {
    question: "Intervenez-vous sur toutes les marques de climatisation ?",
    answer: "Oui, nos techniciens sont formés sur toutes les marques : Daikin, Mitsubishi, Samsung, LG, Toshiba, Atlantic, etc. Nous disposons d'un stock de pièces détachées pour les marques principales."
  }];

  return (
    <>
      <SEOHead
        title="Dépannage Climatisation Paris 24h/24 - Techniciens Certifiés RGE | LeFrigoriste.fr"
        description="Dépannage climatisation Paris et Île-de-France 24h/24. Intervention rapide, techniciens certifiés RGE. Devis gratuit. Toutes marques."
        keywords="dépannage climatisation Paris, réparation clim Paris, panne climatisation, technicien climatisation Paris, SAV climatisation"
        canonicalUrl="https://lefrigoriste.fr/depannage-climatisation-paris"
      />
      
      <ServiceSchema services={serviceData} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-[40px]">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-primary font-medium text-sm mb-4">
                DÉPANNAGE CLIMATISATION
              </span>
              <h1 className="font-bold font-montserrat text-4xl md:text-5xl mb-6 text-[#212121]">
                Dépannage <span className="text-primary">Climatisation</span>
                <span className="block text-2xl md:text-3xl mt-2 text-gray-600">Paris & Île-de-France</span>
              </h1>
              <p className="text-xl text-gray-600 font-opensans max-w-3xl mx-auto mb-8">
                Techniciens certifiés RGE pour le dépannage de vos systèmes de climatisation. Intervention rapide 24h/24.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="tel:0185500284" 
                  className="btn-emergency inline-flex items-center justify-center"
                >
                  <Phone size={20} className="mr-2" />
                  Urgence Clim
                </Link>
                <Link to="/contact" className="btn-primary inline-flex items-center justify-center">
                  Devis gratuit
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Types de pannes */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-bold font-montserrat text-3xl md:text-4xl mb-4 text-[#212121]">
                Types de pannes climatisation
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Thermometer className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-3">Panne de refroidissement</h3>
                <p className="text-gray-600">Climatisation qui ne refroidit plus, problème de compresseur ou de fluide frigorigène.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Wind className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-3">Problème de ventilation</h3>
                <p className="text-gray-600">Ventilateur défaillant, filtre encrassé, problème de circulation d'air.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-3">Fuite de fluide</h3>
                <p className="text-gray-600">Détection et réparation de fuites, recharge en fluide frigorigène.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Zone d'intervention */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-bold font-montserrat text-3xl md:text-4xl mb-4 text-[#212121]">
                Zone d'intervention climatisation
              </h2>
              <p className="text-xl text-gray-600">Nous intervenons dans tout Paris et l'Île-de-France</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Paris 1er', 'Paris 2e', 'Paris 3e', 'Paris 4e', 'Paris 5e', 'Paris 6e', 'Paris 7e', 'Paris 8e', 'Paris 9e', 'Paris 10e', 'Paris 11e', 'Paris 12e', 'Paris 13e', 'Paris 14e', 'Paris 15e', 'Paris 16e', 'Paris 17e', 'Paris 18e', 'Paris 19e', 'Paris 20e'].map((district) => (
                <div key={district} className="bg-white p-3 rounded-lg text-center border border-gray-200">
                  <span className="text-sm font-medium text-gray-700">{district}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQSection faqs={faqData} />
      </div>
    </>
  );
};

export default DepannageClimatisationParis;
