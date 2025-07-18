
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, Clock, Shield, Award } from 'lucide-react';
import { useAnalytics } from '@/hooks/use-analytics';

const ContactCTASection = () => {
  const { trackPhoneCall } = useAnalytics();

  const handleEmergencyCall = () => {
    trackPhoneCall();
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-100/30 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-50/40 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 mx-[16px]">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-50 text-primary font-medium text-sm mb-2">
              À VOTRE SERVICE 24/7
            </div>
            <h2 className="md:text-4xl font-bold text-primary text-2xl">Besoin d'une intervention ou d'un devis ?</h2>
            <p className="text-gray-600 text-lg">Notre équipe de techniciens certifiés répond à toutes vos urgences frigorifiques et besoins en climatisation dans toute l'Île-de-France.</p>
            
            <ul className="space-y-4 mx-0">
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                  <Clock size={20} strokeWidth={1.5} />
                </div>
                <span className="text-lg px-0">Intervention rapide garantie : 45min Yvelines • 1h Paris</span>
              </li>
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                  <Award size={20} strokeWidth={1.5} />
                </div>
                <span className="text-lg">Techniciens certifiés RGE et QualiPAC</span>
              </li>
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                  <Shield size={20} strokeWidth={1.5} />
                </div>
                <span className="text-lg">Service client noté ★ 4.9/5 sur Google</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100 relative">
            <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-secondary/10 blur-xl"></div>
            <div className="absolute -bottom-5 -left-5 w-24 h-24 rounded-full bg-primary/10 blur-xl"></div>
            
            <div className="relative">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Comment pouvons-nous vous aider ?</h3>
              
              <div className="space-y-6">
                <div className="p-6 border border-gray-100 rounded-lg hover:border-primary transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-emergency/10 text-emergency group-hover:bg-emergency group-hover:text-white transition-all duration-300">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-1">Besoin d'une intervention urgente ?</h4>
                      <p className="text-gray-600 mb-4">Notre équipe est disponible 24/7 pour toutes vos urgences</p>
                      <Link 
                        to="tel:0185500284" 
                        className="btn-emergency inline-flex"
                        onClick={handleEmergencyCall}
                      >
                        <Phone size={20} className="mr-2" />
                        Appel d'urgence
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 border border-gray-100 rounded-lg hover:border-primary transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-1">Besoin d'un devis ou d'informations ?</h4>
                      <p className="text-gray-600 mb-4">Contactez-nous pour une réponse sous 24h</p>
                      <Link to="/contact" className="btn-primary inline-flex">
                        <Mail size={20} className="mr-2" />
                        Nous contacter
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTASection;
