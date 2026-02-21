
import React, { lazy, Suspense } from 'react';
import Hero from '@/components/home/Hero';
import ServicesSection from '@/components/home/ServicesSection';
import SEOHead from '@/components/seo/SEOHead';

// Lazy-load below-fold sections to reduce initial JS evaluation
const WhyChooseUs = lazy(() => import('@/components/home/WhyChooseUs'));
const VideoSection = lazy(() => import('@/components/home/VideoSection'));
const Testimonials = lazy(() => import('@/components/home/Testimonials'));
const ContactCTASection = lazy(() => import('@/components/home/ContactCTASection'));

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="LeFrigoriste.fr - Dépannage frigorifique et climatisation 24h/24 en Île-de-France"
        description="Spécialiste en réfrigération commerciale et climatisation. Dépannage frigorifique d'urgence 24h/24, 7j/7 en Île-de-France. Intervention rapide garantie : 45min Yvelines, 1h Paris. Devis gratuit."
        keywords="frigoriste Île-de-France, dépannage frigorifique d'urgence, réparation chambre froide, installation climatisation professionnelle, maintenance équipement frigorifique, contrat entretien froid commercial, intervention 24h/24, frigoriste Yvelines, service froid alimentaire, frigoriste 78"
        canonicalUrl="https://lefrigoriste.fr/"
      />
      
      {/* Hero Section - above fold, loaded eagerly */}
      <Hero />
      
      {/* Services Section - near fold, loaded eagerly */}
      <ServicesSection />
      
      {/* Below-fold sections - lazy loaded */}
      <Suspense fallback={null}>
        <WhyChooseUs />
      </Suspense>
      
      <Suspense fallback={null}>
        <VideoSection />
      </Suspense>
      
      <Suspense fallback={null}>
        <Testimonials />
      </Suspense>
      
      <Suspense fallback={null}>
        <ContactCTASection />
      </Suspense>
    </div>
  );
};

export default Index;
