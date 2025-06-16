
import React from 'react';
import Hero from '@/components/home/Hero';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import VideoSection from '@/components/home/VideoSection';
import ContactCTASection from '@/components/home/ContactCTASection';
import SEOHead from '@/components/seo/SEOHead';

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="LeFrigoriste.fr - Dépannage frigorifique et climatisation 24h/24 en Île-de-France"
        description="Spécialiste en réfrigération commerciale et climatisation. Dépannage frigorifique d'urgence 24h/24, 7j/7 en Île-de-France. Intervention rapide garantie : 45min Yvelines, 1h Paris. Devis gratuit."
        keywords="frigoriste Île-de-France, dépannage frigorifique d'urgence, réparation chambre froide, installation climatisation professionnelle, maintenance équipement frigorifique, contrat entretien froid commercial, intervention 24h/24, frigoriste Yvelines, service froid alimentaire, frigoriste 78"
        canonicalUrl="https://lefrigoriste.fr/"
      />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Why Choose Us Section */}
      <WhyChooseUs />
      
      {/* Video Section */}
      <VideoSection />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Contact CTA Section */}
      <ContactCTASection />
    </div>
  );
};

export default Index;
