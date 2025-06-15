
import React from 'react';
import { SEOHead, BreadcrumbSchema } from '@/components/seo';
import HeroSection from '@/components/about/HeroSection';
import LeadershipDuo from '@/components/about/LeadershipDuo';
import TechTeamCarousel from '@/components/about/TechTeamCarousel';
import DifferentiationGrid from '@/components/about/DifferentiationGrid';
import CertificationsSection from '@/components/about/CertificationsSection';
import TestimonialsSlider from '@/components/about/TestimonialsSlider';
import CtaBanner from '@/components/about/CtaBanner';

const QuiSommesNous = () => {
  const breadcrumbItems = [
    { name: "Qui sommes-nous" }
  ];

  return (
    <>
      <SEOHead
        title="Qui sommes-nous - LeFrigoriste.fr | Spécialiste réfrigération Île-de-France"
        description="Découvrez LeFrigoriste.fr : entreprise spécialisée en réfrigération commerciale depuis 2018. Équipe d'experts certifiés RGE, intervention 24h/24 en Île-de-France."
        keywords="qui sommes nous frigoriste, équipe techniciens réfrigération, entreprise frigorifique île-de-france, hassan maach, mory sangaré"
        canonicalUrl="https://lefrigoriste.fr/qui-sommes-nous"
      />
      
      <div className="min-h-screen">
        <BreadcrumbSchema items={breadcrumbItems} />
        <HeroSection />
        <LeadershipDuo />
        <TechTeamCarousel />
        <DifferentiationGrid />
        <CertificationsSection />
        <TestimonialsSlider />
        <CtaBanner />
      </div>
    </>
  );
};

export default QuiSommesNous;
