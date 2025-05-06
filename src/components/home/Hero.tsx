
import React, { useEffect, useRef } from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Load Vimeo Player API script
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="relative bg-gray-900 overflow-hidden">
      {/* Video background with overlay */}
      <div ref={videoContainerRef} className="absolute inset-0 z-0 bg-black">
        {isMobile ? (
          // Mobile vertical video (9:16 aspect ratio)
          <div style={{padding:'75% 0 0 0', position:'relative', height: '100%', overflow: 'hidden'}}>
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
            />
          </div>
        ) : (
          // Desktop landscape video
          <div style={{padding:'56.25% 0 0 0', position:'relative', height: '100%'}}>
            <iframe 
              src="https://player.vimeo.com/video/1075112216?badge=0&autopause=0&player_id=0&app_id=58479&background=1&muted=1&loop=1&transparent=0&dnt=1" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
              style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}} 
              title="Le Frigoriste Background Video"
              frameBorder="0"
            />
          </div>
        )}
      </div>
      
      {/* Dark overlay to improve text readability */}
      <div className="absolute inset-0 bg-black opacity-60 z-1"></div>

      <div className="container-custom relative z-10 py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <span className="inline-block px-4 py-2 rounded-full bg-emergency/20 text-white font-semibold text-sm mb-6 backdrop-blur-sm">
              Service d'urgence 24/7
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight md:text-6xl">
              Dépannage frigorifique et climatisation professionnel
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-xl">
              Spécialiste en froid commercial pour les professionnels: restaurants, boulangeries, commerces alimentaires.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="tel:0185500284" className="group relative overflow-hidden rounded-full bg-gradient-to-r from-emergency to-emergency/80 hover:from-emergency/90 hover:to-emergency text-lg font-bold py-3 px-6 text-white shadow-lg transition-all duration-300 hover:shadow-emergency/30 hover:shadow-xl">
                <span className="relative flex items-center justify-center">
                  <Phone size={24} className="mr-2" />
                  01 85 50 02 84
                </span>
              </a>
              <Link to="/contact" className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-lg font-bold py-3 px-6 text-white shadow-lg transition-all duration-300 hover:shadow-primary/30 hover:shadow-xl">
                <span className="relative flex items-center justify-center">
                  Demander un devis
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
          
          <div className="backdrop-blur-sm bg-white/10 p-8 rounded-xl shadow-lg hidden md:block border border-white/20">
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-6 text-center">Intervention express</h2>
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <span className="font-semibold">Paris & petite couronne</span>
                  <span className="bg-emergency/80 text-white px-4 py-2 rounded-lg text-sm font-bold">
                    1h
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <span className="font-semibold">Yvelines (78)</span>
                  <span className="bg-emergency/80 text-white px-4 py-2 rounded-lg text-sm font-bold">
                    45min
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <span className="font-semibold">Grande couronne</span>
                  <span className="bg-emergency/80 text-white px-4 py-2 rounded-lg text-sm font-bold">
                    2h
                  </span>
                </div>
                <p className="text-center italic text-sm pt-3">
                  Délais moyens d'intervention en urgence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;
