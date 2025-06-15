
import React from 'react';
import { SEOHead, BreadcrumbSchema, ServiceSchema, FAQSection } from '@/components/seo';
import { Snowflake, Wind, Hammer, Wrench, Clock, Shield, MapPin, Phone, ChefHat } from 'lucide-react';

const Services = () => {
  const breadcrumbItems = [
    { name: "Nos Services" }
  ];

  const serviceData = [
    {
      name: "Dépannage frigorifique d'urgence",
      description: "Service de dépannage frigorifique disponible 24h/24 et 7j/7 en Île-de-France avec intervention garantie en moins d'1 heure à Paris.",
      url: "https://lefrigoriste.fr/services#depannage",
      serviceType: "Maintenance et réparation d'équipements frigorifiques",
      areaServed: ["Paris", "Yvelines", "Hauts-de-Seine", "Val-d'Oise", "Seine-et-Marne", "Essonne", "Val-de-Marne", "Seine-Saint-Denis"],
      provider: {
        name: "LeFrigoriste.fr",
        telephone: "+33123456789",
        address: "8-10 rue Levassor, 78130 Les Mureaux"
      },
      offers: [
        {
          name: "Intervention d'urgence",
          description: "Dépannage frigorifique en urgence 24h/24",
          availability: "https://schema.org/InStock"
        }
      ]
    },
    {
      name: "Installation climatisation professionnelle",
      description: "Installation de systèmes de climatisation sur-mesure pour locaux professionnels avec garantie RGE.",
      url: "https://lefrigoriste.fr/services#climatisation",
      serviceType: "Installation d'équipements de climatisation",
      areaServed: ["Île-de-France"],
      provider: {
        name: "LeFrigoriste.fr",
        telephone: "+33123456789",
        address: "8-10 rue Levassor, 78130 Les Mureaux"
      }
    },
    {
      name: "Maintenance préventive équipements frigorifiques",
      description: "Contrats de maintenance préventive pour garantir la longévité de vos installations frigorifiques.",
      url: "https://lefrigoriste.fr/services#maintenance",
      serviceType: "Maintenance préventive",
      areaServed: ["Île-de-France"],
      provider: {
        name: "LeFrigoriste.fr",
        telephone: "+33123456789",
        address: "8-10 rue Levassor, 78130 Les Mureaux"
      }
    },
    {
      name: "Vente, installation & maintenance de matériels de cuisines professionnelles",
      description: "Solutions complètes pour équipements de cuisines et laveries professionnelles : vente, installation et maintenance pour restaurants, traiteurs, boulangeries et hôtels.",
      url: "https://lefrigoriste.fr/services#cuisine",
      serviceType: "Équipements de cuisines professionnelles",
      areaServed: ["Île-de-France"],
      provider: {
        name: "LeFrigoriste.fr",
        telephone: "+33123456789",
        address: "8-10 rue Levassor, 78130 Les Mureaux"
      }
    }
  ];

  const faqData = [
    {
      question: "Quels sont vos délais d'intervention pour un dépannage frigorifique ?",
      answer: "Nous garantissons une intervention en moins de 45 minutes dans les Yvelines, 1 heure à Paris et 2 heures en grande couronne. Notre service d'urgence est disponible 24h/24 et 7j/7."
    },
    {
      question: "Intervenez-vous sur tous types d'équipements frigorifiques ?",
      answer: "Oui, nous intervenons sur tous types d'équipements : chambres froides, vitrines réfrigérées, congélateurs professionnels, climatisation, pompes à chaleur, etc. Nos techniciens sont certifiés pour tous les fluides frigorigènes."
    },
    {
      question: "Proposez-vous des contrats de maintenance ?",
      answer: "Nous proposons 3 formules de maintenance : Essentiel, Confort et Premium. Ces contrats incluent des visites préventives régulières, la priorité d'intervention et des tarifs préférentiels sur les réparations."
    },
    {
      question: "Êtes-vous certifiés RGE ?",
      answer: "Oui, LeFrigoriste.fr est certifié RGE (valide jusqu'en 2026) et QualiPAC (valide jusqu'en 2025). Nous possédons également l'attestation de capacité pour la manipulation des fluides frigorigènes."
    },
    {
      question: "Quelles zones géographiques couvrez-vous ?",
      answer: "Nous intervenons dans toute l'Île-de-France : Paris, Yvelines (78), Hauts-de-Seine (92), Val-d'Oise (95), Seine-et-Marne (77), Essonne (91), Val-de-Marne (94) et Seine-Saint-Denis (93)."
    },
    {
      question: "Comment obtenir un devis pour une installation ?",
      answer: "Pour une installation, nous nous engageons à vous fournir un devis détaillé sous 24h. Contactez-nous par téléphone ou via notre formulaire en ligne. Un technicien se déplacera gratuitement pour étudier votre projet."
    },
    {
      question: "Quels équipements de cuisine professionnelle proposez-vous ?",
      answer: "Nous proposons une gamme complète d'équipements : fours professionnels, planchas, friteuses, lave-vaisselle industriels, machines à café, équipements de laverie, et bien plus. Nous travaillons avec les meilleures marques du marché."
    }
  ];

  return (
    <>
      <SEOHead
        title="Services de réfrigération et climatisation - LeFrigoriste.fr"
        description="Découvrez nos services : dépannage frigorifique 24h/24, installation climatisation, maintenance préventive, équipements de cuisines professionnelles. Intervention rapide en Île-de-France. Devis gratuit."
        keywords="services frigoriste, dépannage frigorifique, installation climatisation, maintenance froid, réparation chambre froide, contrat entretien, équipements cuisine professionnelle"
        canonicalUrl="https://lefrigoriste.fr/services"
      />
      
      <ServiceSchema services={serviceData} />
      
      <div className="min-h-screen">
        <BreadcrumbSchema items={breadcrumbItems} />
        
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-primary font-medium text-sm mb-4">
                NOS SERVICES
              </span>
              <h1 className="font-bold font-montserrat text-4xl md:text-5xl mb-6 text-[#212121]">
                Services complets en
                <span className="text-primary"> réfrigération</span>
              </h1>
              <p className="text-xl text-gray-600 font-opensans max-w-3xl mx-auto">
                Solutions professionnelles de dépannage, installation et maintenance pour tous vos équipements frigorifiques et de climatisation.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Dépannage d'urgence */}
              <div id="depannage" className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                    <Snowflake className="w-8 h-8 text-red-600" />
                  </div>
                  <h2 className="font-bold font-montserrat text-2xl text-[#212121]">
                    Dépannage frigorifique
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Service d'urgence 24h/24 et 7j/7 pour tous vos équipements frigorifiques en panne.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 text-primary mr-3" />
                    45min Yvelines • 1h Paris • 2h Grande Couronne
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Shield className="w-5 h-5 text-primary mr-3" />
                    Intervention garantie 24h/24
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Phone className="w-5 h-5 text-primary mr-3" />
                    Hotline d'urgence dédiée
                  </li>
                </ul>
              </div>

              {/* Installation climatisation */}
              <div id="climatisation" className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <Wind className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="font-bold font-montserrat text-2xl text-[#212121]">
                    Installation climatisation
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Installation sur-mesure de systèmes de climatisation pour tous types de locaux professionnels.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-600">
                    <Shield className="w-5 h-5 text-primary mr-3" />
                    Certification RGE et QualiPAC
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 text-primary mr-3" />
                    Devis sous 24h
                  </li>
                  <li className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 text-primary mr-3" />
                    Déplacement gratuit en Île-de-France
                  </li>
                </ul>
              </div>

              {/* Chambres froides */}
              <div id="chambres-froides" className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                    <Hammer className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-bold font-montserrat text-2xl text-[#212121]">
                    Installation chambres froides
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Conception et installation de chambres froides adaptées à vos besoins spécifiques.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-600">
                    <Shield className="w-5 h-5 text-primary mr-3" />
                    Solutions sur-mesure
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 text-primary mr-3" />
                    Installation rapide
                  </li>
                  <li className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 text-primary mr-3" />
                    Respect des normes alimentaires
                  </li>
                </ul>
              </div>

              {/* Maintenance */}
              <div id="maintenance" className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                    <Wrench className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="font-bold font-montserrat text-2xl text-[#212121]">
                    Maintenance préventive
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Contrats de maintenance pour garantir la longévité et l'efficacité de vos installations.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-600">
                    <Shield className="w-5 h-5 text-primary mr-3" />
                    3 formules : Essentiel, Confort, Premium
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 text-primary mr-3" />
                    Visites préventives programmées
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Phone className="w-5 h-5 text-primary mr-3" />
                    Priorité d'intervention
                  </li>
                </ul>
              </div>

              {/* Nouveau service : Équipements de cuisine */}
              <div id="cuisine" className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 md:col-span-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                    <ChefHat className="w-8 h-8 text-orange-600" />
                  </div>
                  <h2 className="font-bold font-montserrat text-2xl text-[#212121]">
                    Matériels de cuisines / laveries professionnelles
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Vente, installation et maintenance d'équipements de cuisines et laveries professionnelles pour restaurants, traiteurs, boulangeries et hôtels.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-600">
                      <Shield className="w-5 h-5 text-primary mr-3" />
                      Fours professionnels et planchas
                    </li>
                    <li className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 text-primary mr-3" />
                      Lave-vaisselle industriels
                    </li>
                    <li className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 text-primary mr-3" />
                      Machines à café professionnelles
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-600">
                      <Shield className="w-5 h-5 text-primary mr-3" />
                      Équipements de laverie
                    </li>
                    <li className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 text-primary mr-3" />
                      Installation et mise en service
                    </li>
                    <li className="flex items-center text-gray-600">
                      <Phone className="w-5 h-5 text-primary mr-3" />
                      SAV et maintenance préventive
                    </li>
                  </ul>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <p className="text-orange-800 font-medium text-sm">
                    <strong>Cible :</strong> Restaurants, traiteurs, boulangeries, hôtels et tous professionnels de la restauration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqData} />
      </div>
    </>
  );
};

export default Services;
