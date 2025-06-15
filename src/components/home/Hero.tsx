
import React, { useEffect, useRef } from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Load Vimeo Player API script avec preload
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="relative bg-gray-900 overflow-hidden md:mx-8 lg:mx-12 xl:mx-20 md:my-6 md:rounded-2xl">
      {/* Video background avec optimisations */}
      <div 
        ref={videoContainerRef} 
        className="absolute inset-0 z-0 bg-black md:rounded-2xl overflow-hidden will-change-transform"
      >
        {isMobile ? (
          // Mobile vertical video optimisé
          <div style={{
            padding: '75% 0 0 0',
            position: 'relative',
            height: '100%',
            overflow: 'hidden'
          }}>
            <iframe 
              src="https://player.vimeo.com/video/1075119337?badge=0&autopause=0&player_id=0&app_id=58479&background=1&muted=1&loop=1&transparent=0&dnt=1" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '100vw',
                height: '100%',
                transform: 'translate(-50%, -50%) scale(1.2)',
                objectFit: 'cover'
              }} 
              title="Le Frigoriste Background Video Mobile" 
              frameBorder="0"
              loading="lazy"
            />
          </div>
        ) : (
          // Desktop landscape video optimisé
          <div style={{
            padding: '56.25% 0 0 0',
            position: 'relative',
            height: '100%',
            overflow: 'hidden'
          }}>
            <iframe 
              src="https://player.vimeo.com/video/1075112216?badge=0&autopause=0&player_id=0&app_id=58479&background=1&muted=1&loop=1&transparent=0&dnt=1" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: 'inherit'
              }} 
              title="Le Frigoriste Background Video" 
              frameBorder="0"
              loading="lazy"
            />
          </div>
        )}
      </div>
      
      {/* Dark overlay optimisé */}
      <div className="absolute inset-0 bg-black opacity-60 z-1 md:rounded-2xl will-change-opacity"></div>

      <div className="container-custom relative z-10 md:py-32 sm:px-6 lg:px-8 px-[15px] py-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-white">
            <span className="inline-block px-4 py-2 rounded-full bg-emergency/20 text-white font-semibold text-sm mb-6 backdrop-blur-sm">
              Service d'urgence 24/7
            </span>
            <h1 className="sm:text-4xl font-extrabold mb-6 leading-tight md:text-6xl text-4xl">
              Dépannage frigorifique et climatisation professionnel
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-xl">
              Spécialiste en froid commercial pour les professionnels: restaurants, boulangeries, commerces alimentaires.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href="tel:0185500284" 
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-emergency to-emergency/80 hover:from-emergency/90 hover:to-emergency text-lg font-bold py-3 px-6 text-white shadow-lg transition-all duration-300 hover:shadow-emergency/30 hover:shadow-xl will-change-transform"
              >
                <span className="relative flex items-center justify-center">
                  <Phone size={24} className="mr-2" />
                  01 85 50 02 84
                </span>
              </a>
              <Link 
                to="/contact" 
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-lg font-bold py-3 px-6 text-white shadow-lg transition-all duration-300 hover:shadow-primary/30 hover:shadow-xl will-change-transform"
              >
                <span className="relative flex items-center justify-center">
                  Demander un devis
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
          
          <div className="backdrop-blur-sm bg-white/10 p-6 md:p-8 rounded-xl shadow-lg hidden md:block lg:block border border-white/20 will-change-transform">
            <div className="text-white">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">Intervention express</h2>
              <div className="space-y-3 md:space-y-5">
                <div className="flex items-center justify-between border-b border-white/20 pb-3 md:pb-4">
                  <span className="font-semibold text-sm md:text-base">Paris & petite couronne</span>
                  <span className="bg-emergency/80 text-white px-3 md:px-4 py-1 md:py-2 rounded-lg text-xs md:text-sm font-bold">
                    1h
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-3 md:pb-4">
                  <span className="font-semibold text-sm md:text-base">Yvelines (78)</span>
                  <span className="bg-emergency/80 text-white px-3 md:px-4 py-1 md:py-2 rounded-lg text-xs md:text-sm font-bold">
                    45min
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-3 md:pb-4">
                  <span className="font-semibold text-sm md:text-base">Grande couronne</span>
                  <span className="bg-emergency/80 text-white px-3 md:px-4 py-1 md:py-2 rounded-lg text-xs md:text-sm font-bold">
                    2h
                  </span>
                </div>
                <p className="text-center italic text-xs md:text-sm pt-2 md:pt-3">
                  Délais moyens d'intervention en urgence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
