
import React, { useRef, useEffect, useState } from 'react';
import Hero from '@/components/home/Hero';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import SEOHead from '@/components/seo/SEOHead';
import { ArrowRight, Phone, Mail, Clock, Shield, Award, Play, Pause } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAnalytics } from '@/hooks/use-analytics';

const Index = () => {
  const { trackPhoneCall } = useAnalytics();
  const playerRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);

  useEffect(() => {
    // Charger l'API Vimeo Player
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.onload = () => {
      if (window.Vimeo && playerRef.current) {
        const player = new window.Vimeo.Player(playerRef.current, {
          id: 1093559944,
          responsive: true,
          controls: false,
          title: false,
          byline: false,
          portrait: false,
          autopause: false,
          background: false
        });

        player.ready().then(() => {
          setPlayerReady(true);
        });

        player.on('play', () => {
          setIsPlaying(true);
        });

        player.on('pause', () => {
          setIsPlaying(false);
        });

        player.on('ended', () => {
          setIsPlaying(false);
          // Remettre la vidéo au début pour revenir à l'état initial
          player.setCurrentTime(0);
        });

        playerRef.current.player = player;
      }
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const togglePlay = () => {
    if (playerRef.current?.player && playerReady) {
      if (isPlaying) {
        playerRef.current.player.pause();
      } else {
        playerRef.current.player.play();
      }
    }
  };

  const handleEmergencyCall = () => {
    trackPhoneCall();
  };

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
      <section className="bg-white py-[40px]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-bold font-montserrat text-3xl md:text-4xl mb-4 text-[#212121]">
              Découvrez LeFrigoriste.fr en action
            </h2>
            <p className="text-lg text-gray-600 font-opensans max-w-2xl mx-auto">
              Plongez dans l'univers de nos interventions d'urgence et découvrez comment nous assurons la continuité de votre activité 24h/24.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-900">
              <div className="aspect-video relative">
                <div
                  ref={playerRef}
                  className="absolute inset-0 w-full h-full"
                  style={{
                    background: 'transparent',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                  }}
                ></div>
                
                {/* Overlay clickable pour toggle play/pause */}
                <div className="absolute inset-0 cursor-pointer z-10" onClick={togglePlay}>
                  {/* Bouton play visible seulement quand la vidéo n'est pas en lecture */}
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-300 hover:bg-opacity-40">
                      <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all duration-300 hover:scale-110">
                        <Play className="w-8 h-8 text-primary ml-1" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-sm text-gray-500 font-opensans">
                Intervention d'urgence • Dépannage 24h/24 • Île-de-France
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Contact CTA Section */}
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
    </div>
  );
};

export default Index;
