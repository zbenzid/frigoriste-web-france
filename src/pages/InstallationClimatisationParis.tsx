
import React from 'react';
import { SEOHead, BreadcrumbSchema, ServiceSchema, FAQSection } from '@/components/seo';
import { Wind, Award, Shield, Phone, CheckCircle, Euro } from 'lucide-react';
import { Link } from 'react-router-dom';

const InstallationClimatisationParis = () => {
  const breadcrumbItems = [{
    name: "Installation Climatisation Paris",
    url: "/installation-climatisation-paris"
  }];

  const serviceData = [{
    name: "Installation climatisation Paris",
    description: "Installation de climatisation à Paris par techniciens certifiés RGE. Devis gratuit, aide financière, toutes marques.",
    url: "https://lefrigoriste.fr/installation-climatisation-paris",
    serviceType: "Installation climatisation",
    areaServed: ["Paris", "Île-de-France"],
    provider: {
      name: "LeFrigoriste.fr",
      telephone: "+33185500284",
      address: "8-10 rue Levassor, 78130 Les Mureaux"
    }
  }];

  const faqData = [{
    question: "Quel est le prix d'une installation de climatisation à Paris ?",
    answer: "Le prix varie selon le type de climatisation : 800-1500€ pour un mono-split, 2000-4000€ pour un multi-split, 3000-8000€ pour une installation gainable. Devis gratuit personnalisé."
  }, {
    question: "Puis-je bénéficier d'aides financières pour l'installation ?",
    answer: "Oui, en tant que professionnels certifiés RGE, nous vous aidons à obtenir : MaPrimeRénov', Prime CEE, TVA réduite 5.5%, éco-prêt à taux zéro selon votre situation."
  }, {
    question: "Combien de temps prend une installation de climatisation ?",
    answer: "Installation mono-split : 4-6h, multi-split : 1-2 jours, gainable : 2-3 jours. Nous planifions l'intervention selon vos disponibilités et réalisons la mise en service complète."
  }];

  return (
    <>
      <SEOHead
        title="Installation Climatisation Paris - Techniciens RGE Certifiés | LeFrigoriste.fr"
        description="Installation climatisation Paris par techniciens certifiés RGE. Devis gratuit, aides financières, toutes marques. Mono-split, multi-split, gainable."
        keywords="installation climatisation Paris, pose clim Paris, technicien RGE climatisation, devis climatisation Paris, aide installation clim"
        canonicalUrl="https://lefrigoriste.fr/installation-climatisation-paris"
      />
      
      <ServiceSchema services={serviceData} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-[40px]">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-600 font-medium text-sm mb-4">
                INSTALLATION CLIMATISATION
              </span>
              <h1 className="font-bold font-montserrat text-4xl md:text-5xl mb-6 text-[#212121]">
                Installation <span className="text-primary">Climatisation</span>
                <span className="block text-2xl md:text-3xl mt-2 text-gray-600">Paris & Île-de-France</span>
              </h1>
              <p className="text-xl text-gray-600 font-opensans max-w-3xl mx-auto mb-8">
                Techniciens certifiés RGE pour l'installation de vos systèmes de climatisation. Aides financières disponibles.
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
                  Nous appeler
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Types de climatisation */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-bold font-montserrat text-3xl md:text-4xl mb-4 text-[#212121]">
                Types de climatisation
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Wind className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-3">Mono-split</h3>
                <p className="text-gray-600 mb-4">Solution simple et économique pour climatiser une pièce.</p>
                <div className="text-sm text-gray-500">À partir de 800€</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Wind className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-3">Multi-split</h3>
                <p className="text-gray-600 mb-4">Une unité extérieure pour plusieurs pièces à climatiser.</p>
                <div className="text-sm text-gray-500">À partir de 2000€</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Wind className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-3">Gainable</h3>
                <p className="text-gray-600 mb-4">Solution discrète intégrée dans les combles ou faux-plafonds.</p>
                <div className="text-sm text-gray-500">À partir de 3000€</div>
              </div>
            </div>
          </div>
        </section>

        {/* Avantages RGE */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-bold font-montserrat text-3xl md:text-4xl mb-4 text-[#212121]">
                Pourquoi choisir un installateur RGE ?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Award className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Certification RGE</h3>
                <p className="text-gray-600">Techniciens certifiés RGE QualiPAC</p>
              </div>
              <div className="text-center">
                <Euro className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Aides financières</h3>
                <p className="text-gray-600">Accès aux primes et subventions</p>
              </div>
              <div className="text-center">
                <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Garantie qualité</h3>
                <p className="text-gray-600">Installation selon les normes</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">SAV assuré</h3>
                <p className="text-gray-600">Maintenance et dépannage</p>
              </div>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqData} />
      </div>
    </>
  );
};

export default InstallationClimatisationParis;
