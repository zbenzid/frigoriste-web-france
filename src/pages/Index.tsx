import React from 'react';
import Hero from '@/components/home/Hero';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import ContactForm from '@/components/home/ContactForm';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Why Choose Us Section */}
      <WhyChooseUs />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Contact Form Section */}
      <section className="section-padding bg-primary bg-opacity-5">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Demandez un devis ou une <span className="relative inline-block">
                  intervention
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full"></span>
                </span>
              </h2>
              <p className="text-gray-600 mb-6">
                Besoin d'une intervention urgente ou d'un devis pour l'installation d'un équipement frigorifique ou de climatisation ? Notre équipe est à votre disposition pour répondre à toutes vos questions.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-maintenance text-white flex items-center justify-center mr-3">✓</div>
                  <span>Intervention rapide en cas d'urgence</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-maintenance text-white flex items-center justify-center mr-3">✓</div>
                  <span>Devis détaillé et transparent</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-maintenance text-white flex items-center justify-center mr-3">✓</div>
                  <span>Conseils personnalisés par des experts</span>
                </li>
              </ul>
              <Link to="/contact" className="btn-primary inline-flex mt-2">
                Nous contacter <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
