
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
      {/* Version mobile avec design adapté */}
      <div className="block md:hidden">
        <div className="bg-white">
          <div className="container-custom relative z-10 px-4 py-8 sm:px-6 sm:py-12">
            {/* Header mobile */}
            <div className="text-center mb-6 sm:mb-8">
              <span className="inline-block px-3 py-2 rounded-full bg-primary/10 text-primary font-semibold text-xs sm:text-sm mb-4 sm:mb-6">
                Service d'urgence 24/7
              </span>
              <h1 className="text-3xl sm:text-4xl font-black mb-4 sm:mb-6 leading-[1.1] text-gray-900 tracking-tight">
                <span className="block text-primary font-extrabold">Dépannage</span>
                <span className="block text-gray-800 font-light text-2xl sm:text-3xl mt-1">frigorifique &</span>
                <span className="block text-emergency font-extrabold">climatisation</span>
                <span className="block text-gray-600 font-normal text-lg sm:text-xl mt-2">professionnel</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-700 max-w-xl mx-auto px-2 font-medium">
                Spécialiste en froid commercial pour les professionnels: restaurants, boulangeries, commerces alimentaires.
              </p>
            </div>

            {/* Boutons d'action mobile */}
            <div className="flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-12 px-2">
              <a 
                href="tel:0185500284" 
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-emergency to-emergency/80 hover:from-emergency/90 hover:to-emergency text-base sm:text-lg font-bold py-3 sm:py-4 px-4 sm:px-6 text-white shadow-lg transition-all duration-300 hover:shadow-emergency/30 hover:shadow-xl will-change-transform"
              >
                <span className="relative flex items-center justify-center">
                  <Phone size={20} className="mr-2 sm:mr-3" />
                  01 85 50 02 84
                </span>
              </a>
              <Link 
                to="/contact" 
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-base sm:text-lg font-bold py-3 sm:py-4 px-4 sm:px-6 text-white shadow-lg transition-all duration-300 hover:shadow-primary/30 hover:shadow-xl will-change-transform"
              >
                <span className="relative flex items-center justify-center">
                  Demander un devis
                  <ArrowRight size={18} className="ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Section vidéo dédiée pour mobile */}
            <div className="mb-8 sm:mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-gray-200/30 shadow-lg">
                <div style={{
                  padding: '56.25% 0 0 0',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '0.5rem'
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
                      borderRadius: '0.5rem'
                    }} 
                    title="Le Frigoriste - Nos Services" 
                    frameBorder="0"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Info box mobile - responsive */}
            <div className="bg-white backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl shadow-lg border border-gray-200 text-center mx-2">
              <div className="text-gray-900">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-primary">Intervention express</h2>
                <div className="grid grid-cols-1 xs:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                  <div className="text-center">
                    <div className="bg-primary text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-xl font-bold text-sm sm:text-lg md:text-xl mb-2 sm:mb-3 shadow-md">
                      1h
                    </div>
                    <span className="font-semibold text-gray-700 text-xs sm:text-sm md:text-base leading-tight block">Paris & petite couronne</span>
                  </div>
                  <div className="text-center">
                    <div className="bg-emergency text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-xl font-bold text-sm sm:text-lg md:text-xl mb-2 sm:mb-3 shadow-md">
                      45min
                    </div>
                    <span className="font-semibold text-gray-700 text-xs sm:text-sm md:text-base leading-tight block">Yvelines (78)</span>
                  </div>
                  <div className="text-center">
                    <div className="bg-secondary text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-xl font-bold text-sm sm:text-lg md:text-xl mb-2 sm:mb-3 shadow-md">
                      2h
                    </div>
                    <span className="font-semibold text-gray-700 text-xs sm:text-sm md:text-base leading-tight block">Grande couronne</span>
                  </div>
                </div>
                <p className="text-center italic text-gray-600 pt-3 sm:pt-4 md:pt-6 text-xs sm:text-sm">
                  Délais moyens d'intervention en urgence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Version tablette et desktop - code existant inchangé */}
      <div className="hidden md:block">
        {/* Video background pour desktop - cachée sur tablette */}
        <div 
          ref={videoContainerRef} 
          className="absolute inset-0 z-0 bg-black md:rounded-2xl overflow-hidden will-change-transform md:hidden lg:block"
        >
          {/* Desktop landscape video optimisé */}
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
        </div>
        
        {/* Dark overlay - cachée sur tablette */}
        <div className="absolute inset-0 bg-black opacity-60 z-1 md:rounded-2xl will-change-opacity md:hidden lg:block"></div>

        {/* Gradient background pour tablette uniquement */}
        <div className="hidden md:block lg:hidden absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-50 md:rounded-2xl"></div>

        <div className="container-custom relative z-10 md:py-16 lg:py-32 sm:px-6 lg:px-8 px-[15px] py-[50px]">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white md:text-gray-900 lg:text-white text-center md:text-center lg:text-left">
              <span className="inline-block px-4 py-2 rounded-full bg-emergency/20 md:bg-primary/10 lg:bg-emergency/20 text-white md:text-primary lg:text-white font-semibold text-sm mb-6 backdrop-blur-sm">
                Service d'urgence 24/7
              </span>
              <h1 className="sm:text-4xl font-extrabold mb-6 leading-tight md:text-5xl lg:text-6xl text-4xl">
                Dépannage frigorifique et climatisation professionnel
              </h1>
              <p className="text-xl mb-8 opacity-90 md:opacity-100 max-w-xl mx-auto md:mx-auto lg:mx-0">
                Spécialiste en froid commercial pour les professionnels: restaurants, boulangeries, commerces alimentaires.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-center lg:justify-start">
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
            
            {/* Info box - visible sur desktop uniquement */}
            <div className="backdrop-blur-sm bg-white/10 p-6 md:p-8 rounded-xl shadow-lg hidden lg:block border border-white/20 will-change-transform">
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

          {/* Section vidéo dédiée pour tablette */}
          <div className="hidden md:block lg:hidden mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-gray-200/30 shadow-lg">
              <div style={{
                padding: '56.25% 0 0 0',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '0.5rem'
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
                    borderRadius: '0.5rem'
                  }} 
                  title="Le Frigoriste - Nos Services" 
                  frameBorder="0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Info box pour tablette */}
          <div className="hidden md:block lg:hidden mt-8">
            <div className="bg-white backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200 text-center">
              <div className="text-gray-900">
                <h2 className="text-3xl font-bold mb-8 text-primary">Intervention express</h2>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-primary text-white px-6 py-4 rounded-xl font-bold text-xl mb-3 shadow-md">
                      1h
                    </div>
                    <span className="font-semibold text-gray-700">Paris & petite couronne</span>
                  </div>
                  <div className="text-center">
                    <div className="bg-emergency text-white px-6 py-4 rounded-xl font-bold text-xl mb-3 shadow-md">
                      45min
                    </div>
                    <span className="font-semibold text-gray-700">Yvelines (78)</span>
                  </div>
                  <div className="text-center">
                    <div className="bg-secondary text-white px-6 py-4 rounded-xl font-bold text-xl mb-3 shadow-md">
                      2h
                    </div>
                    <span className="font-semibold text-gray-700">Grande couronne</span>
                  </div>
                </div>
                <p className="text-center italic text-gray-600 pt-6 text-sm">
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
