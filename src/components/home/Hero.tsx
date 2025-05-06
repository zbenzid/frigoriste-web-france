
import React, { useEffect, useRef } from 'react';
import { Phone, ArrowRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

  return <div className="relative bg-gray-900 overflow-hidden min-h-[80vh]">
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
        
        {/* Gradient overlay inside video container (requirement #1) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent z-10"></div>
      </div>
      
      {/* Dark overlay to improve text readability */}
      <div className="absolute inset-0 bg-black opacity-60 z-1"></div>

      <div className="container-custom relative z-20 py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <span className="inline-block px-4 py-2 rounded-full bg-emergency/20 text-white font-semibold text-sm mb-6 backdrop-blur-sm">
              Service d'urgence 24/7
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight md:text-6xl">
              Dépannage frigorifique d'urgence en Île-de-France
            </h1>
            <h2 className="text-lg lg:text-xl mb-8 opacity-90 max-w-xl font-opensans">
              Frigoriste professionnel pour restaurants, boulangeries, commerces alimentaires. Intervention express garantie.
            </h2>
            <div className="flex flex-col sm:flex-row gap-5 mb-8">
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

            {/* Social-proof strip with client logos (requirement #3) */}
            <div className="mt-8">
              <Carousel 
                opts={{ 
                  align: "start",
                  loop: true,
                  dragFree: true
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {[1, 2, 3, 4, 5, 6].map((logo) => (
                    <CarouselItem key={logo} className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-center justify-center h-16">
                        <svg className="w-full h-8 text-white/70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="24" height="24" fill="currentColor" fillOpacity="0.2" />
                          <path d="M12 6L14.25 10.5H9.75L12 6Z" fill="currentColor" />
                          <circle cx="12" cy="15" r="3" fill="currentColor" />
                        </svg>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <p className="text-center text-white/80 text-sm mt-3">2 000+ interventions par an</p>
            </div>
          </div>
          
          <div className="backdrop-blur-sm bg-white/10 p-8 rounded-xl shadow-lg hidden md:block border border-white/20">
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-6 text-center">Intervention express</h2>
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <span className="font-semibold">Paris & petite couronne</span>
                  <Badge variant="destructive" className="px-4 py-2 text-sm font-bold motion-safe:animate-slide-up [animation-delay:200ms]">
                    1h
                  </Badge>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <span className="font-semibold">Yvelines (78)</span>
                  <Badge variant="destructive" className="px-4 py-2 text-sm font-bold motion-safe:animate-slide-up [animation-delay:400ms]">
                    45min
                  </Badge>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <span className="font-semibold">Grande couronne</span>
                  <Badge variant="destructive" className="px-4 py-2 text-sm font-bold motion-safe:animate-slide-up [animation-delay:600ms]">
                    2h
                  </Badge>
                </div>
                <p className="text-center italic text-sm pt-3">
                  Délais moyens d'intervention en urgence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue (requirement #6) */}
      <Link to="#services" aria-label="Découvrir nos services" className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
        <Button variant="ghost" size="icon" className="rounded-full bg-white/10 backdrop-blur-sm animate-bounce">
          <ArrowDown className="text-white" size={20} />
        </Button>
      </Link>

      {/* Mobile floating tel button (requirement #4) */}
      <a href="tel:0185500284" aria-label="Appeler LeFrigoriste.fr">
        <Button size="icon" variant="destructive" className="fixed bottom-6 right-6 lg:hidden shadow-lg z-50 h-14 w-14">
          <Phone size={24} />
        </Button>
      </a>
    </div>;
};

export default Hero;
