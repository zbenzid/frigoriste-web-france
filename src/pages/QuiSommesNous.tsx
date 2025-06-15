
import React from 'react';
import HeroSection from '@/components/about/HeroSection';
import LeadershipDuo from '@/components/about/LeadershipDuo';
import TechTeamCarousel from '@/components/about/TechTeamCarousel';
import DifferentiationGrid from '@/components/about/DifferentiationGrid';
import CertificationsSection from '@/components/about/CertificationsSection';
import TestimonialsSlider from '@/components/about/TestimonialsSlider';
import CtaBanner from '@/components/about/CtaBanner';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';
import FAQSection from '@/components/seo/FAQSection';
import SEOHead from '@/components/seo/SEOHead';

const QuiSommesNous = () => {
  const breadcrumbItems = [
    { label: "Qui sommes-nous" }
  ];

  const faqs = [
    {
      question: "Depuis quand LeFrigoriste.fr existe-t-il ?",
      answer: "LeFrigoriste.fr a été fondé en 2018 par Hassan Maach sous la marque MSK Réfrigération, puis rebrandé en 2020. Nous avons donc plus de 6 ans d'expérience dans le dépannage frigorifique en Île-de-France."
    },
    {
      question: "Quelles sont vos certifications ?",
      answer: "Nous disposons du label RGE (Reconnu Garant de l'Environnement), de la qualification QualiPAC pour les pompes à chaleur, et de l'attestation de capacité pour la manipulation des fluides frigorigènes. Toutes nos certifications sont régulièrement renouvelées."
    },
    {
      question: "Qui dirige l'entreprise aujourd'hui ?",
      answer: "L'entreprise est dirigée par Hassan Maach (Fondateur & Président) et Mory Sangaré (Associé & Directeur Technique). Mory a rejoint l'équipe en 2022 avec 15 ans d'expérience en réfrigération."
    },
    {
      question: "Dans quelles zones intervenez-vous ?",
      answer: "Nous intervenons dans toute l'Île-de-France avec des délais garantis : 45 minutes dans les Yvelines, 1 heure à Paris, et 2 heures maximum dans la grande couronne francilienne."
    },
    {
      question: "Que signifie votre garantie d'intervention 24h/24 ?",
      answer: "Notre service d'urgence est disponible 7 jours sur 7, 24 heures sur 24, y compris les weekends et jours fériés. Nous garantissons une intervention rapide pour tous les dépannages frigorifiques urgents."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Qui sommes-nous - LeFrigoriste.fr | Experts en réfrigération depuis 2018"
        description="Découvrez l'équipe LeFrigoriste.fr, experts en réfrigération et climatisation en Île-de-France depuis 2018. Hassan Maach et Mory Sangaré, votre garantie de qualité 24h/24."
        keywords="équipe LeFrigoriste, Hassan Maach, Mory Sangaré, expert frigoriste, histoire entreprise réfrigération"
        canonicalUrl="https://lefrigoriste.fr/qui-sommes-nous"
      />
      
      <ServiceSchema
        serviceName="Expertise en réfrigération commerciale"
        description="Services complets de réfrigération et climatisation par une équipe d'experts certifiés depuis 2018"
        serviceType="ProfessionalService"
      />
      
      <BreadcrumbSchema items={breadcrumbItems} className="bg-gray-50" />
      
      <HeroSection />
      <LeadershipDuo />
      <TechTeamCarousel />
      <DifferentiationGrid />
      <CertificationsSection />
      <TestimonialsSlider />
      
      <FAQSection 
        faqs={faqs}
        title="Questions fréquentes sur notre équipe"
        className="bg-gray-50"
      />
      
      <CtaBanner />
    </div>
  );
};

export default QuiSommesNous;
