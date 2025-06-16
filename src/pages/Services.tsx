
import React from 'react';
import { SEOHead, BreadcrumbSchema, ServiceSchema, FAQSection } from '@/components/seo';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesGrid from '@/components/services/ServicesGrid';
import ServicesVideoSection from '@/components/services/ServicesVideoSection';

const Services = () => {
  const breadcrumbItems = [{
    name: "Nos Services"
  }];

  const serviceData = [{
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
    offers: [{
      name: "Intervention d'urgence",
      description: "Dépannage frigorifique en urgence 24h/24",
      availability: "https://schema.org/InStock"
    }]
  }, {
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
  }, {
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
  }, {
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
  }];

  const faqData = [{
    question: "Quels sont vos délais d'intervention pour un dépannage frigorifique ?",
    answer: "Nous garantissons une intervention en moins de 45 minutes dans les Yvelines, 1 heure à Paris et 2 heures en grande couronne. Notre service d'urgence est disponible 24h/24 et 7j/7."
  }, {
    question: "Intervenez-vous sur tous types d'équipements frigorifiques ?",
    answer: "Oui, nous intervenons sur tous types d'équipements : chambres froides, vitrines réfrigérées, congélateurs professionnels, climatisation, pompes à chaleur, etc. Nos techniciens sont certifiés pour tous les fluides frigorigènes."
  }, {
    question: "Proposez-vous des contrats de maintenance ?",
    answer: "Nous proposons 3 formules de maintenance : Essentiel, Confort et Premium. Ces contrats incluent des visites préventives régulières, la priorité d'intervention et des tarifs préférentiels sur les réparations."
  }, {
    question: "Êtes-vous certifiés RGE ?",
    answer: "Oui, LeFrigoriste.fr est certifié RGE (valide jusqu'en 2026) et QualiPAC (valide jusqu'en 2025). Nous possédons également l'attestation de capacité pour la manipulation des fluides frigorigènes."
  }, {
    question: "Quelles zones géographiques couvrez-vous ?",
    answer: "Nous intervenons dans toute l'Île-de-France : Paris, Yvelines (78), Hauts-de-Seine (92), Val-d'Oise (95), Seine-et-Marne (77), Essonne (91), Val-de-Marne (94) et Seine-Saint-Denis (93)."
  }, {
    question: "Comment obtenir un devis pour une installation ?",
    answer: "Pour une installation, nous nous engageons à vous fournir un devis détaillé sous 24h. Contactez-nous par téléphone ou via notre formulaire en ligne. Un technicien se déplacera gratuitement pour étudier votre projet."
  }, {
    question: "Quels équipements de cuisine professionnelle proposez-vous ?",
    answer: "Nous proposons une gamme complète d'équipements : fours professionnels, planchas, friteuses, lave-vaisselle industriels, machines à café, équipements de laverie, et bien plus. Nous travaillons avec les meilleures marques du marché."
  }];

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
        <ServicesHero />

        {/* Services Grid */}
        <ServicesGrid />

        {/* Video Section */}
        <ServicesVideoSection />

        <FAQSection faqs={faqData} />
      </div>
    </>
  );
};

export default Services;
