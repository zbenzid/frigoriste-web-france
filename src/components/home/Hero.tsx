
import React, { useEffect, useRef, useState } from 'react';
import { Phone, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [api, setApi] = useState<any>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll logic for the carousel
  useEffect(() => {
    if (!api) return;

    // Start auto-scrolling
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        api.scrollNext();
      }, 4000); // Scroll every 4 seconds
    };

    startAutoScroll();

    // Pause on hover
    const carousel = document.querySelector('.client-logos-carousel');
    if (carousel) {
      carousel.addEventListener('mouseenter', () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      });
      
      carousel.addEventListener('mouseleave', () => {
        startAutoScroll();
      });
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [api]);

  // Scroll to services section on arrow click or Enter key press
  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleScrollToServices();
    }
  };

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

  return (
    <div className="relative bg-gray-900 overflow-hidden">
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
      
      {/* Gradient readability overlay (new) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent pointer-events-none z-1"></div>

      <div className="container-custom relative z-10 py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <span className="inline-block px-4 py-2 rounded-full bg-emergency/20 text-white font-semibold text-sm mb-6 backdrop-blur-sm">
              Service d'urgence 24/7
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight md:text-6xl">
              Dépannage frigorifique et climatisation professionnel
            </h1>
            <h2 className="text-lg sm:text-xl mt-4 opacity-90 max-w-xl font-medium">
              Spécialiste en froid commercial pour les professionnels: restaurants, boulangeries, commerces alimentaires.
            </h2>
            
            {/* Buttons with improved alignment */}
            <div className="flex flex-wrap gap-5 space-x-4 mt-8">
              <a href="tel:0185500284" className="group btn-emergency text-lg relative overflow-hidden">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 to-emergency opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative flex items-center">
                  <Phone size={24} className="mr-2" />
                  01 85 50 02 84
                </span>
              </a>
              <Link to="/contact" className="group btn-secondary text-lg relative overflow-hidden">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative flex items-center">
                  Demander un devis
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
            
            {/* Client logos carousel (new) */}
            <div className="mt-12 client-logos-carousel">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                setApi={setApi}
                className="w-full max-w-sm mx-auto"
              >
                <CarouselContent>
                  {/* Logo 1: Monoprix */}
                  <CarouselItem className="basis-1/3 md:basis-1/5">
                    <div className="flex items-center justify-center p-2 h-10">
                      <svg width="120" height="40" viewBox="0 0 120 40" className="w-auto h-10 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition">
                        <path d="M12.5,20 C12.5,15.8578644 15.8578644,12.5 20,12.5 L100,12.5 C104.142136,12.5 107.5,15.8578644 107.5,20 C107.5,24.1421356 104.142136,27.5 100,27.5 L20,27.5 C15.8578644,27.5 12.5,24.1421356 12.5,20 Z" fill="#E73931"/>
                        <path d="M35,20 C35,16.1340068 38.1340068,13 42,13 C45.8659932,13 49,16.1340068 49,20 C49,23.8659932 45.8659932,27 42,27 C38.1340068,27 35,23.8659932 35,20 Z" fill="white"/>
                        <text x="60" y="24" fontFamily="Arial" fontSize="12" fontWeight="bold" textAnchor="middle" fill="white">MONOPRIX</text>
                      </svg>
                    </div>
                  </CarouselItem>
                  
                  {/* Logo 2: La Mie Câline */}
                  <CarouselItem className="basis-1/3 md:basis-1/5">
                    <div className="flex items-center justify-center p-2 h-10">
                      <svg width="120" height="40" viewBox="0 0 120 40" className="w-auto h-10 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition">
                        <path d="M15,13 L105,13 C107.761424,13 110,15.2385763 110,18 L110,22 C110,24.7614237 107.761424,27 105,27 L15,27 C12.2385763,27 10,24.7614237 10,22 L10,18 C10,15.2385763 12.2385763,13 15,13 Z" fill="#E73931"/>
                        <text x="60" y="23" fontFamily="Arial" fontSize="11" fontWeight="bold" textAnchor="middle" fill="white">LA MIE CÂLINE</text>
                      </svg>
                    </div>
                  </CarouselItem>
                  
                  {/* Logo 3: Carrefour City */}
                  <CarouselItem className="basis-1/3 md:basis-1/5">
                    <div className="flex items-center justify-center p-2 h-10">
                      <svg width="120" height="40" viewBox="0 0 120 40" className="w-auto h-10 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition">
                        <path d="M15,13 L105,13 C107.761424,13 110,15.2385763 110,18 L110,22 C110,24.7614237 107.761424,27 105,27 L15,27 C12.2385763,27 10,24.7614237 10,22 L10,18 C10,15.2385763 12.2385763,13 15,13 Z" fill="#2C6BB0"/>
                        <text x="60" y="23" fontFamily="Arial" fontSize="11" fontWeight="bold" textAnchor="middle" fill="white">CARREFOUR CITY</text>
                      </svg>
                    </div>
                  </CarouselItem>
                  
                  {/* Logo 4: Brioche Dorée */}
                  <CarouselItem className="basis-1/3 md:basis-1/5">
                    <div className="flex items-center justify-center p-2 h-10">
                      <svg width="120" height="40" viewBox="0 0 120 40" className="w-auto h-10 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition">
                        <path d="M15,13 L105,13 C107.761424,13 110,15.2385763 110,18 L110,22 C110,24.7614237 107.761424,27 105,27 L15,27 C12.2385763,27 10,24.7614237 10,22 L10,18 C10,15.2385763 12.2385763,13 15,13 Z" fill="#F7B334"/>
                        <text x="60" y="23" fontFamily="Arial" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#5A2D0C">BRIOCHE DORÉE</text>
                      </svg>
                    </div>
                  </CarouselItem>
                  
                  {/* Logo 5: Casino */}
                  <CarouselItem className="basis-1/3 md:basis-1/5">
                    <div className="flex items-center justify-center p-2 h-10">
                      <svg width="120" height="40" viewBox="0 0 120 40" className="w-auto h-10 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition">
                        <path d="M15,13 L105,13 C107.761424,13 110,15.2385763 110,18 L110,22 C110,24.7614237 107.761424,27 105,27 L15,27 C12.2385763,27 10,24.7614237 10,22 L10,18 C10,15.2385763 12.2385763,13 15,13 Z" fill="#1A9E51"/>
                        <text x="60" y="23" fontFamily="Arial" fontSize="11" fontWeight="bold" textAnchor="middle" fill="white">CASINO</text>
                      </svg>
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
              
              {/* Client logos caption */}
              <p className="text-white/80 text-center text-sm mt-3">
                2 000+ interventions par an auprès de professionnels
              </p>
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
      
      {/* Guided scroll cue (new) */}
      <div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center cursor-pointer z-10 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full hidden md:flex md:max-h-[400px]"
        role="link"
        tabIndex={0}
        onClick={handleScrollToServices}
        onKeyDown={handleKeyDown}
      >
        <span className="text-sm mb-1">Découvrir nos services</span>
        <ChevronDown className="animate-bounce" size={24} />
      </div>

      {/* Custom CSS for height-based media query */}
      <style>
        {`
          @media (max-height: 400px) {
            [role="link"] {
              display: none !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
