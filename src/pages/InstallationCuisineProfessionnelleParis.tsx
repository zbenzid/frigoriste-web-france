
import React from 'react';
import { SEOHead, BreadcrumbSchema, ServiceSchema, FAQSection } from '@/components/seo';
import { ChefHat, Utensils, Shield, Phone, CheckCircle, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const InstallationCuisineProfessionnelleParis = () => {
  const breadcrumbItems = [{
    name: "Installation Cuisine Professionnelle Paris",
    url: "/installation-cuisine-professionnelle-paris"
  }];

  const serviceData = [{
    name: "Installation cuisine professionnelle Paris",
    description: "Installation complète d'équipements de cuisine professionnelle à Paris. Fours, planchas, lave-vaisselle, machines à café.",
    url: "https://lefrigoriste.fr/installation-cuisine-professionnelle-paris",
    serviceType: "Installation cuisine professionnelle",
    areaServed: ["Paris", "Île-de-France"],
    provider: {
      name: "LeFrigoriste.fr",
      telephone: "+33185500284",
      address: "8-10 rue Levassor, 78130 Les Mureaux"
    }
  }];

  const faqData = [{
    question: "Quels équipements de cuisine professionnelle installez-vous ?",
    answer: "Nous installons tous types d'équipements : fours professionnels, planchas, friteuses, lave-vaisselle industriels, machines à café, équipements de laverie, hottes aspirantes, chambres froides."
  }, {
    question: "Proposez-vous la maintenance des équipements installés ?",
    answer: "Oui, nous proposons des contrats de maintenance préventive et curative pour tous les équipements que nous installons. SAV réactif et pièces détachées en stock."
  }, {
    question: "Combien de temps prend l'installation d'une cuisine complète ?",
    answer: "Selon la taille : cuisine de restaurant 3-5 jours, boulangerie 2-3 jours, snack 1-2 jours. Inclut livraison, installation, raccordements et formation du personnel."
  }];

  return (
    <>
      <SEOHead
        title="Installation Cuisine Professionnelle Paris - Équipements Resto | LeFrigoriste.fr"
        description="Installation équipements cuisine professionnelle Paris. Fours, planchas, lave-vaisselle industriels, machines à café. Devis gratuit."
        keywords="installation cuisine professionnelle Paris, équipement restaurant Paris, four professionnel, plancha, lave-vaisselle industriel"
        canonicalUrl="https://lefrigoriste.fr/installation-cuisine-professionnelle-paris"
      />
      
      <ServiceSchema services={serviceData} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-orange-50 to-white py-[40px]">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-600 font-medium text-sm mb-4">
                CUISINE PROFESSIONNELLE
              </span>
              <h1 className="font-bold font-montserrat text-4xl md:text-5xl mb-6 text-[#212121]">
                Installation <span className="text-primary">Cuisine</span>
                <span className="block text-2xl md:text-3xl mt-2 text-gray-600">Professionnelle Paris</span>
              </h1>
              <p className="text-xl text-gray-600 font-opensans max-w-3xl mx-auto mb-8">
                Équipements complets pour restaurants, boulangeries, traiteurs et hôtels. Installation et maintenance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary inline-flex items-center justify-center">
                  <CheckCircle size={20} className="mr-2" />
                  Devis équipement
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

        {/* Équipements */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-bold font-montserrat text-3xl md:text-4xl mb-4 text-[#212121]">
                Nos équipements de cuisine
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <ChefHat className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="font-bold text-xl mb-3">Fours professionnels</h3>
                <p className="text-gray-600">Fours à convection, mixtes, à pizza, à vapeur. Toutes marques et capacités.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Utensils className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="font-bold text-xl mb-3">Matériel de cuisson</h3>
                <p className="text-gray-600">Planchas, friteuses, grills, sauteuses, marmites professionnelles.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Shield className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="font-bold text-xl mb-3">Lave-vaisselle industriels</h3>
                <p className="text-gray-600">Lave-vaisselle à capot, tunnel, lave-batteries. Toutes capacités.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Secteurs */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-bold font-montserrat text-3xl md:text-4xl mb-4 text-[#212121]">
                Secteurs d'activité
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl text-center shadow-sm">
                <ChefHat className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Restaurants</h3>
                <p className="text-gray-600 text-sm">Cuisine complète, bar, brasserie</p>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-sm">
                <Utensils className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Boulangeries</h3>
                <p className="text-gray-600 text-sm">Fours, pétrins, équipements</p>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-sm">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Traiteurs</h3>
                <p className="text-gray-600 text-sm">Laboratoires, conditionnement</p>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-sm">
                <Wrench className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Hôtels</h3>
                <p className="text-gray-600 text-sm">Cuisine centrale, banquets</p>
              </div>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqData} />
      </div>
    </>
  );
};

export default InstallationCuisineProfessionnelleParis;
