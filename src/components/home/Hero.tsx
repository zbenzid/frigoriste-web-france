
import React, { useEffect, useRef } from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  
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
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden md:mx-8 lg:mx-12 xl:mx-20 md:my-6 md:rounded-2xl">
      {/* Video background - visible uniquement sur tablette et desktop */}
      <div 
        ref={videoContainerRef} 
        className="absolute inset-0 z-0 bg-black md:rounded-2xl overflow-hidden will-change-transform hidden md:block"
      >
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
      
      {/* Dark overlay pour tablette et desktop uniquement */}
      <div className="hidden md:block absolute inset-0 bg-black opacity-60 z-1 md:rounded-2xl will-change-opacity"></div>

      <div className="container-custom relative z-10 py-12 md:py-16 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-gray-900 md:text-white text-center lg:text-left">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 md:bg-emergency/20 text-primary md:text-white font-semibold text-sm mb-6 backdrop-blur-sm">
              Service d'urgence 24/7
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-primary md:text-white">
              Dépannage frigorifique et climatisation professionnel
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-gray-700 md:text-white/90 max-w-xl mx-auto lg:mx-0">
              Spécialiste en froid commercial pour les professionnels: restaurants, boulangeries, commerces alimentaires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start">
              <a 
                href="tel:0185500284" 
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-emergency to-emergency/80 hover:from-emergency/90 hover:to-emergency text-base sm:text-lg font-bold py-3 sm:py-4 px-6 sm:px-8 text-white shadow-lg transition-all duration-300 hover:shadow-emergency/30 hover:shadow-xl will-change-transform"
              >
                <span className="relative flex items-center justify-center">
                  <Phone size={20} className="mr-2" />
                  01 85 50 02 84
                </span>
              </a>
              <Link 
                to="/contact" 
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-base sm:text-lg font-bold py-3 sm:py-4 px-6 sm:px-8 text-white shadow-lg transition-all duration-300 hover:shadow-primary/30 hover:shadow-xl will-change-transform"
              >
                <span className="relative flex items-center justify-center">
                  Demander un devis
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
          
          {/* Info box - visible sur desktop uniquement */}
          <div className="backdrop-blur-sm bg-white/10 md:bg-white/10 p-6 md:p-8 rounded-xl shadow-lg hidden lg:block border border-white/20 will-change-transform">
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

        {/* Section info mobile - visible uniquement sur mobile */}
        <div className="block md:hidden mt-12">
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-center text-primary">Intervention express</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
                <span className="font-semibold text-gray-800">Yvelines (78)</span>
                <span className="bg-emergency text-white px-4 py-2 rounded-lg text-sm font-bold">
                  45min
                </span>
              </div>
              <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
                <span className="font-semibold text-gray-800">Paris & PC</span>
                <span className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold">
                  1h
                </span>
              </div>
              <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
                <span className="font-semibold text-gray-800">Grande couronne</span>
                <span className="bg-secondary text-white px-4 py-2 rounded-lg text-sm font-bold">
                  2h
                </span>
              </div>
            </div>
            <p className="text-center italic text-gray-600 text-sm mt-6">
              Délais moyens d'intervention en urgence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
