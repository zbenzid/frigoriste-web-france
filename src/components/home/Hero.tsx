
import React, { useEffect, useRef, useState } from 'react';
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
  const [isMainCtaVisible, setIsMainCtaVisible] = useState(true);
  const mainCtaRef = useRef<HTMLAnchorElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [emblaApi, setEmblaApi] = useState<any>(null);

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

  useEffect(() => {
    // Intersection Observer for main CTA visibility
    if (!mainCtaRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsMainCtaVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    
    observer.observe(mainCtaRef.current);
    
    return () => {
      if (mainCtaRef.current) {
        observer.unobserve(mainCtaRef.current);
      }
    };
  }, []);

  // Auto-scroll for carousel
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="relative bg-gray-900 overflow-hidden min-h-[80vh]">
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
            <div className="flex flex-row space-x-4 flex-wrap mb-8">
              <a 
                ref={mainCtaRef}
                href="tel:0185500284" 
                className="group btn-emergency text-lg relative overflow-hidden mb-4 sm:mb-0"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 to-emergency opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative flex items-center">
                  <Phone size={24} className="mr-2" />
                  01 85 50 02 84
                </span>
              </a>
              <Link to="/contact" className="group btn-secondary text-lg relative overflow-hidden mb-4 sm:mb-0">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative flex items-center">
                  Demander un devis
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Social-proof strip with client logos */}
            <div className="mt-8">
              <Carousel 
                opts={{ 
                  align: "start",
                  loop: true,
                  dragFree: true
                }}
                setApi={setEmblaApi}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {/* Real client logos instead of placeholders */}
                  <CarouselItem className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-center justify-center h-16">
                      <svg className="w-full h-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition" viewBox="0 0 178 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.1 11.3H24.5V22.5H37.1V11.3Z" fill="currentColor"/>
                        <path d="M156.6 11.3H144V22.5H156.6V11.3Z" fill="currentColor"/>
                        <path d="M168 0H12.6C5.7 0 0 5.7 0 12.6V22.5C0 29.4 5.7 35.1 12.6 35.1H168C174.9 35.1 180.6 29.4 180.6 22.5V12.6C180.5 5.7 174.9 0 168 0ZM12.6 22.5V12.6H24.3V22.5H12.6ZM49.6 22.5H37.3V12.6H49.5V22.5H49.6ZM61.8 22.5H49.8V12.6H61.8V22.5ZM74.1 22.5H62.1V12.6H74.1V22.5ZM86.3 22.5H74.3V12.6H86.3V22.5ZM98.6 22.5H86.6V12.6H98.6V22.5ZM110.8 22.5H98.8V12.6H110.8V22.5ZM123.1 22.5H111.1V12.6H123.1V22.5ZM135.3 22.5H123.3V12.6H135.3V22.5ZM143.8 22.5V12.6H156V22.5H143.8ZM168 22.5H156.3V12.6H168V22.5Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="sr-only">Client — Monoprix logo</span>
                  </CarouselItem>
                  <CarouselItem className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-center justify-center h-16">
                      <svg className="w-full h-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.5 8.3C40.2 8.3 42.7 9.3 44.6 11.2C46.5 13.1 47.5 15.6 47.5 18.3C47.5 21 46.5 23.5 44.6 25.4C42.7 27.3 40.2 28.3 37.5 28.3H18.7V38.3H27.5C28.6 38.3 29.6 39.2 29.8 40.3C29.9 41.7 28.9 42.9 27.5 42.9H8.3C7.2 42.9 6.2 42 6 40.9C5.9 39.5 6.9 38.3 8.3 38.3H13.8V12.9H8.3C7.2 12.9 6.2 12 6 10.9C5.9 9.5 6.9 8.3 8.3 8.3H37.5ZM37.5 23.7C38.9 23.7 40.2 23.2 41.1 22.2C42.1 21.3 42.6 20 42.6 18.6C42.6 17.2 42.1 15.9 41.1 15C40.2 14.1 38.9 13.5 37.5 13.5H18.8V23.8H37.5V23.7Z" fill="currentColor"/>
                        <path d="M60.8 42.9C57.6 42.9 54.6 41.7 52.3 39.5C50 37.2 48.7 34.2 48.7 31.1C48.7 27.9 50 24.9 52.3 22.7C54.6 20.4 57.6 19.2 60.8 19.2C64 19.2 67 20.5 69.3 22.7C71.6 25 72.9 28 72.9 31.1C72.9 34.3 71.6 37.3 69.3 39.5C67 41.7 64 42.9 60.8 42.9ZM60.8 24.4C59.1 24.4 57.6 25.1 56.4 26.2C55.3 27.4 54.5 28.9 54.5 30.6C54.5 32.3 55.2 33.8 56.4 35C57.6 36.1 59.1 36.9 60.8 36.9C62.5 36.9 64 36.2 65.2 35C66.3 33.8 67.1 32.3 67.1 30.6C67.1 28.9 66.4 27.4 65.2 26.2C64.1 25 62.5 24.4 60.8 24.4Z" fill="currentColor"/>
                        <path d="M96.2 19.7C97.3 19.7 98.3 20.6 98.5 21.7C98.6 23.1 97.6 24.3 96.2 24.3H90.8V38.8C90.8 40 89.9 41 88.8 41.2C87.4 41.3 86.2 40.3 86.2 38.9V24.3H80.8C79.7 24.3 78.7 23.4 78.5 22.3C78.4 20.9 79.4 19.7 80.8 19.7H96.2Z" fill="currentColor"/>
                        <path d="M110.4 23.3V38.3H115.8C116.9 38.3 117.9 39.2 118.1 40.3C118.2 41.7 117.2 42.9 115.8 42.9H104.6C103.5 42.9 102.5 42 102.3 40.9C102.2 39.5 103.2 38.3 104.6 38.3H105.4V24.4H104.6C103.5 24.4 102.5 23.5 102.3 22.4C102.2 21 103.2 19.8 104.6 19.8H110C111.1 19.8 112.1 20.7 112.3 21.8C112.5 22.3 112.5 22.8 112.2 23.3H110.4Z" fill="currentColor"/>
                        <path d="M139.2 19.5C140.3 19.5 141.3 20.4 141.5 21.5C141.6 22.9 140.6 24.1 139.2 24.1H131.7V38.3H139.2C140.3 38.3 141.3 39.2 141.5 40.3C141.6 41.7 140.6 42.9 139.2 42.9H126.7C125.6 42.9 124.6 42 124.4 40.9C124.3 39.5 125.3 38.3 126.7 38.3V24.1C125.6 24.1 124.6 23.2 124.4 22.1C124.3 20.7 125.3 19.5 126.7 19.5H139.2V19.5Z" fill="currentColor"/>
                        <path d="M165 31.1C165 34.3 163.7 37.3 161.4 39.5C159.2 41.8 156.1 43 153 43C149.9 43 146.8 41.7 144.6 39.5C142.3 37.2 141 34.2 141 31.1C141 27.9 142.3 24.9 144.6 22.7C146.9 20.4 149.9 19.2 153 19.2C156.2 19.2 159.2 20.5 161.4 22.7C163.7 25 165 28 165 31.1ZM159.7 31.1C159.7 29.4 159 27.9 157.8 26.7C156.7 25.6 155.1 24.9 153.5 24.9C151.8 24.9 150.3 25.6 149.1 26.7C148 27.9 147.2 29.4 147.2 31.1C147.2 32.8 147.9 34.3 149.1 35.5C150.3 36.6 151.8 37.4 153.5 37.4C155.2 37.4 156.7 36.7 157.8 35.5C159 34.4 159.7 32.8 159.7 31.1Z" fill="currentColor"/>
                        <path d="M196.7 22.1C196.7 23.5 195.7 24.5 194.3 24.5C192.9 24.5 191.9 23.5 191.9 22.1C191.9 20.7 192.9 19.7 194.3 19.7C195.7 19.7 196.7 20.8 196.7 22.1Z" fill="currentColor"/>
                        <path d="M187.9 31.1C187.9 34.3 186.6 37.3 184.3 39.5C182 41.8 179 43 175.8 43C172.6 43 169.6 41.7 167.3 39.5C165 37.2 163.7 34.2 163.7 31.1C163.7 27.9 165 24.9 167.3 22.7C169.6 20.4 172.6 19.2 175.8 19.2C179 19.2 182 20.5 184.3 22.7C186.6 25 187.9 28 187.9 31.1ZM182.1 31.1C182.1 29.4 181.4 27.9 180.2 26.7C179 25.6 177.5 24.9 175.8 24.9C174.1 24.9 172.6 25.6 171.4 26.7C170.3 27.9 169.5 29.4 169.5 31.1C169.5 32.8 170.2 34.3 171.4 35.5C172.6 36.6 174.1 37.4 175.8 37.4C177.5 37.4 179 36.7 180.2 35.5C181.4 34.4 182.1 32.8 182.1 31.1Z" fill="currentColor"/>
                        <path d="M192.2 38.9V31.1C192.2 29.4 191.5 27.9 190.3 26.7C189.1 25.6 187.6 24.9 185.9 24.9C184.8 24.9 183.8 24 183.6 22.9C183.5 21.5 184.5 20.3 185.9 20.3C189.1 20.3 192.1 21.6 194.4 23.8C196.7 26.1 198 29.1 198 32.2V38.8C198 40 197.1 41 196 41.2C194.6 41.3 193.4 40.3 193.4 38.9H192.2Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="sr-only">Client — La Mie Câline logo</span>
                  </CarouselItem>
                  <CarouselItem className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-center justify-center h-16">
                      <svg className="w-full h-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40 14C36.1 14 33 17.1 33 21C33 24.9 36.1 28 40 28C43.9 28 47 24.9 47 21C47 17.1 43.9 14 40 14Z" fill="currentColor"/>
                        <path d="M166.8 14.5H157.1V27.3H166.8C171.5 27.3 174.9 23.9 174.9 20.9C174.9 17.9 171.5 14.5 166.8 14.5Z" fill="currentColor"/>
                        <path d="M125.7 14.5H116V27.3H125.7C130.4 27.3 133.8 23.9 133.8 20.9C133.8 17.9 130.4 14.5 125.7 14.5Z" fill="currentColor"/>
                        <path d="M190 7.5H10C8.3 7.5 7 8.8 7 10.5V40.5C7 42.2 8.3 43.5 10 43.5H190C191.7 43.5 193 42.2 193 40.5V10.5C193 8.8 191.7 7.5 190 7.5ZM40 33C33.4 33 28 27.6 28 21C28 14.4 33.4 9 40 9C46.6 9 52 14.4 52 21C52 27.6 46.6 33 40 33ZM86.1 32.5H71.1C69.3 32.5 68 31.1 68 29.4V29.2C68 27.4 69.4 26.1 71.1 26.1H77.6C78.3 26.1 78.9 25.5 78.9 24.8V24.6C78.9 23.9 78.3 23.3 77.6 23.3H71.4C70.7 23.3 70.1 22.7 70.1 22V21.8C70.1 21.1 70.7 20.5 71.4 20.5H77.6C78.3 20.5 78.9 19.9 78.9 19.2V19C78.9 18.3 78.3 17.7 77.6 17.7H71.1C69.3 17.7 68 16.3 68 14.6V14.4C68 12.6 69.4 11.3 71.1 11.3H86.1C86.8 11.3 87.4 11.9 87.4 12.6V12.8C87.4 13.5 86.8 14.1 86.1 14.1H79.3C78.6 14.1 78 14.7 78 15.4V15.6C78 16.3 78.6 16.9 79.3 16.9H86.1C86.8 16.9 87.4 17.5 87.4 18.2V18.4C87.4 19.1 86.8 19.7 86.1 19.7H79.3C78.6 19.7 78 20.3 78 21V21.2C78 21.9 78.6 22.5 79.3 22.5H86.1C86.8 22.5 87.4 23.1 87.4 23.8V24C87.4 24.7 86.8 25.3 86.1 25.3H79.3C78.6 25.3 78 25.9 78 26.6V26.8C78 27.5 78.6 28.1 79.3 28.1H86.1C86.8 28.1 87.4 28.7 87.4 29.4V29.6C87.4 30.3 86.8 32.5 86.1 32.5ZM133.8 32.5H111V11.3H116V27.3H125.7C130.4 27.3 133.8 23.9 133.8 20.9V11.3H138.8V32.5H133.8ZM174.9 32.5H152.1V11.3H157.1V27.3H166.8C171.5 27.3 174.9 23.9 174.9 20.9V11.3H179.9V32.5H174.9Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="sr-only">Client — Franprix logo</span>
                  </CarouselItem>
                  <CarouselItem className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-center justify-center h-16">
                      <svg className="w-full h-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.9 12.4H21.2C20.2 12.4 19.3 12.8 18.6 13.5C17.9 14.2 17.5 15.1 17.5 16.1V26.5C17.5 27.5 17.9 28.4 18.6 29.1C19.3 29.8 20.2 30.2 21.2 30.2H27.9C28.9 30.2 29.8 29.8 30.5 29.1C31.2 28.4 31.6 27.5 31.6 26.5V16.1C31.6 15.1 31.2 14.2 30.5 13.5C29.8 12.7 29 12.4 27.9 12.4Z" fill="currentColor"/>
                        <path d="M47.3 12.4H40.6C39.6 12.4 38.7 12.8 38 13.5C37.3 14.2 36.9 15.1 36.9 16.1V26.5C36.9 27.5 37.3 28.4 38 29.1C38.7 29.8 39.6 30.2 40.6 30.2H47.3C48.3 30.2 49.2 29.8 49.9 29.1C50.6 28.4 51 27.5 51 26.5V16.1C51 15.1 50.6 14.2 49.9 13.5C49.2 12.7 48.4 12.4 47.3 12.4Z" fill="currentColor"/>
                        <path d="M66.7 12.4H60C59 12.4 58.1 12.8 57.4 13.5C56.7 14.2 56.3 15.1 56.3 16.1V26.5C56.3 27.5 56.7 28.4 57.4 29.1C58.1 29.8 59 30.2 60 30.2H66.7C67.7 30.2 68.6 29.8 69.3 29.1C70 28.4 70.4 27.5 70.4 26.5V16.1C70.4 15.1 70 14.2 69.3 13.5C68.6 12.7 67.8 12.4 66.7 12.4Z" fill="currentColor"/>
                        <path d="M86.1 12.4H79.4C78.4 12.4 77.5 12.8 76.8 13.5C76.1 14.2 75.7 15.1 75.7 16.1V26.5C75.7 27.5 76.1 28.4 76.8 29.1C77.5 29.8 78.4 30.2 79.4 30.2H86.1C87.1 30.2 88 29.8 88.7 29.1C89.4 28.4 89.8 27.5 89.8 26.5V16.1C89.8 15.1 89.4 14.2 88.7 13.5C88 12.7 87.2 12.4 86.1 12.4Z" fill="currentColor"/>
                        <path d="M105.6 12.4H98.9C97.9 12.4 97 12.8 96.3 13.5C95.6 14.2 95.2 15.1 95.2 16.1V26.5C95.2 27.5 95.6 28.4 96.3 29.1C97 29.8 97.9 30.2 98.9 30.2H105.6C106.6 30.2 107.5 29.8 108.2 29.1C108.9 28.4 109.3 27.5 109.3 26.5V16.1C109.3 15.1 108.9 14.2 108.2 13.5C107.5 12.7 106.6 12.4 105.6 12.4Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="sr-only">Client — Picard logo</span>
                  </CarouselItem>
                  <CarouselItem className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-center justify-center h-16">
                      <svg className="w-full h-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.5 8.3C40.2 8.3 42.7 9.3 44.6 11.2C46.5 13.1 47.5 15.6 47.5 18.3C47.5 21 46.5 23.5 44.6 25.4C42.7 27.3 40.2 28.3 37.5 28.3H18.7V38.3H27.5C28.6 38.3 29.6 39.2 29.8 40.3C29.9 41.7 28.9 42.9 27.5 42.9H8.3C7.2 42.9 6.2 42 6 40.9C5.9 39.5 6.9 38.3 8.3 38.3H13.8V12.9H8.3C7.2 12.9 6.2 12 6 10.9C5.9 9.5 6.9 8.3 8.3 8.3H37.5ZM37.5 23.7C38.9 23.7 40.2 23.2 41.1 22.2C42.1 21.3 42.6 20 42.6 18.6C42.6 17.2 42.1 15.9 41.1 15C40.2 14.1 38.9 13.5 37.5 13.5H18.8V23.8H37.5V23.7Z" fill="currentColor"/>
                        <path d="M60.8 42.9C57.6 42.9 54.6 41.7 52.3 39.5C50 37.2 48.7 34.2 48.7 31.1C48.7 27.9 50 24.9 52.3 22.7C54.6 20.4 57.6 19.2 60.8 19.2C64 19.2 67 20.5 69.3 22.7C71.6 25 72.9 28 72.9 31.1C72.9 34.3 71.6 37.3 69.3 39.5C67 41.7 64 42.9 60.8 42.9ZM60.8 24.4C59.1 24.4 57.6 25.1 56.4 26.2C55.3 27.4 54.5 28.9 54.5 30.6C54.5 32.3 55.2 33.8 56.4 35C57.6 36.1 59.1 36.9 60.8 36.9C62.5 36.9 64 36.2 65.2 35C66.3 33.8 67.1 32.3 67.1 30.6C67.1 28.9 66.4 27.4 65.2 26.2C64.1 25 62.5 24.4 60.8 24.4Z" fill="currentColor"/>
                        <path d="M96.2 19.7C97.3 19.7 98.3 20.6 98.5 21.7C98.6 23.1 97.6 24.3 96.2 24.3H90.8V38.8C90.8 40 89.9 41 88.8 41.2C87.4 41.3 86.2 40.3 86.2 38.9V24.3H80.8C79.7 24.3 78.7 23.4 78.5 22.3C78.4 20.9 79.4 19.7 80.8 19.7H96.2Z" fill="currentColor"/>
                        <path d="M110.4 23.3V38.3H115.8C116.9 38.3 117.9 39.2 118.1 40.3C118.2 41.7 117.2 42.9 115.8 42.9H104.6C103.5 42.9 102.5 42 102.3 40.9C102.2 39.5 103.2 38.3 104.6 38.3H105.4V24.4H104.6C103.5 24.4 102.5 23.5 102.3 22.4C102.2 21 103.2 19.8 104.6 19.8H110C111.1 19.8 112.1 20.7 112.3 21.8C112.5 22.3 112.5 22.8 112.2 23.3H110.4Z" fill="currentColor"/>
                        <path d="M139.2 19.5C140.3 19.5 141.3 20.4 141.5 21.5C141.6 22.9 140.6 24.1 139.2 24.1H131.7V38.3H139.2C140.3 38.3 141.3 39.2 141.5 40.3C141.6 41.7 140.6 42.9 139.2 42.9H126.7C125.6 42.9 124.6 42 124.4 40.9C124.3 39.5 125.3 38.3 126.7 38.3V24.1C125.6 24.1 124.6 23.2 124.4 22.1C124.3 20.7 125.3 19.5 126.7 19.5H139.2V19.5Z" fill="currentColor"/>
                        <path d="M165 31.1C165 34.3 163.7 37.3 161.4 39.5C159.2 41.8 156.1 43 153 43C149.9 43 146.8 41.7 144.6 39.5C142.3 37.2 141 34.2 141 31.1C141 27.9 142.3 24.9 144.6 22.7C146.9 20.4 149.9 19.2 153 19.2C156.2 19.2 159.2 20.5 161.4 22.7C163.7 25 165 28 165 31.1ZM159.7 31.1C159.7 29.4 159 27.9 157.8 26.7C156.7 25.6 155.1 24.9 153.5 24.9C151.8 24.9 150.3 25.6 149.1 26.7C148 27.9 147.2 29.4 147.2 31.1C147.2 32.8 147.9 34.3 149.1 35.5C150.3 36.6 151.8 37.4 153.5 37.4C155.2 37.4 156.7 36.7 157.8 35.5C159 34.4 159.7 32.8 159.7 31.1Z" fill="currentColor"/>
                        <path d="M196.7 22.1C196.7 23.5 195.7 24.5 194.3 24.5C192.9 24.5 191.9 23.5 191.9 22.1C191.9 20.7 192.9 19.7 194.3 19.7C195.7 19.7 196.7 20.8 196.7 22.1Z" fill="currentColor"/>
                        <path d="M187.9 31.1C187.9 34.3 186.6 37.3 184.3 39.5C182 41.8 179 43 175.8 43C172.6 43 169.6 41.7 167.3 39.5C165 37.2 163.7 34.2 163.7 31.1C163.7 27.9 165 24.9 167.3 22.7C169.6 20.4 172.6 19.2 175.8 19.2C179 19.2 182 20.5 184.3 22.7C186.6 25 187.9 28 187.9 31.1ZM182.1 31.1C182.1 29.4 181.4 27.9 180.2 26.7C179 25.6 177.5 24.9 175.8 24.9C174.1 24.9 172.6 25.6 171.4 26.7C170.3 27.9 169.5 29.4 169.5 31.1C169.5 32.8 170.2 34.3 171.4 35.5C172.6 36.6 174.1 37.4 175.8 37.4C177.5 37.4 179 36.7 180.2 35.5C181.4 34.4 182.1 32.8 182.1 31.1Z" fill="currentColor"/>
                        <path d="M192.2 38.9V31.1C192.2 29.4 191.5 27.9 190.3 26.7C189.1 25.6 187.6 24.9 185.9 24.9C184.8 24.9 183.8 24 183.6 22.9C183.5 21.5 184.5 20.3 185.9 20.3C189.1 20.3 192.1 21.6 194.4 23.8C196.7 26.1 198 29.1 198 32.2V38.8C198 40 197.1 41 196 41.2C194.6 41.3 193.4 40.3 193.4 38.9H192.2Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="sr-only">Client — Franprix logo</span>
                  </CarouselItem>
                  <CarouselItem className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-center justify-center h-16">
                      <svg className="w-full h-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.9 12.4H21.2C20.2 12.4 19.3 12.8 18.6 13.5C17.9 14.2 17.5 15.1 17.5 16.1V26.5C17.5 27.5 17.9 28.4 18.6 29.1C19.3 29.8 20.2 30.2 21.2 30.2H27.9C28.9 30.2 29.8 29.8 30.5 29.1C31.2 28.4 31.6 27.5 31.6 26.5V16.1C31.6 15.1 31.2 14.2 30.5 13.5C29.8 12.7 29 12.4 27.9 12.4Z" fill="currentColor"/>
                        <path d="M47.3 12.4H40.6C39.6 12.4 38.7 12.8 38 13.5C37.3 14.2 36.9 15.1 36.9 16.1V26.5C36.9 27.5 37.3 28.4 38 29.1C38.7 29.8 39.6 30.2 40.6 30.2H47.3C48.3 30.2 49.2 29.8 49.9 29.1C50.6 28.4 51 27.5 51 26.5V16.1C51 15.1 50.6 14.2 49.9 13.5C49.2 12.7 48.4 12.4 47.3 12.4Z" fill="currentColor"/>
                        <path d="M66.7 12.4H60C59 12.4 58.1 12.8 57.4 13.5C56.7 14.2 56.3 15.1 56.3 16.1V26.5C56.3 27.5 56.7 28.4 57.4 29.1C58.1 29.8 59 30.2 60 30.2H66.7C67.7 30.2 68.6 29.8 69.3 29.1C70 28.4 70.4 27.5 70.4 26.5V16.1C70.4 15.1 70 14.2 69.3 13.5C68.6 12.7 67.8 12.4 66.7 12.4Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="sr-only">Client — Picard logo</span>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* Floating mobile CTA button */}
      {!isMainCtaVisible && (
        <Button 
          size="icon" 
          variant="destructive" 
          asChild 
          className="fixed bottom-6 right-6 lg:hidden z-40 shadow-lg animate-pulse delay-[10000ms]"
        >
          <a href="tel:0185500284" aria-label="Appeler LeFrigoriste.fr">
            <Phone className="h-6 w-6" />
          </a>
        </Button>
      )}

      {/* Scroll cue */}
      <Link 
        to="#services" 
        aria-label="Découvrir nos services"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce z-20"
      >
        <Button variant="ghost" size="icon" className="rounded-full bg-white/10 backdrop-blur-sm">
          <ArrowDown className="h-5 w-5 text-white" />
        </Button>
      </Link>
    </div>
  );
};

export default Hero;
