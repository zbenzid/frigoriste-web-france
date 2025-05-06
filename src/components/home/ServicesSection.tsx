
import React, { useEffect, useState, useRef } from 'react';
import ServiceCard from './ServiceCard';
import { Snowflake, Wind, Hammer, Wrench } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";

const ServicesSection = () => {
  const isMobile = useIsMobile();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const carouselApiRef = useRef<any>(null);
  
  // Service card data
  const services = [
    {
      title: "Dépannage frigorifique",
      description: "Intervention rapide 24h/24 et 7j/7 pour tous vos équipements frigorifiques en panne.",
      icon: Snowflake,
      link: "/services#depannage",
      color: "emergency" as const
    },
    {
      title: "Installation climatisation",
      description: "Installation sur-mesure de systèmes de climatisation pour tous types de locaux professionnels.",
      icon: Wind,
      link: "/services#climatisation",
      color: "secondary" as const
    },
    {
      title: "Installation chambres froides",
      description: "Conception et installation de chambres froides adaptées à vos besoins spécifiques.",
      icon: Hammer,
      link: "/services#chambres-froides",
      color: "primary" as const
    },
    {
      title: "Maintenance préventive",
      description: "Contrats de maintenance pour garantir la longévité et l'efficacité de vos installations.",
      icon: Wrench,
      link: "/services#maintenance",
      color: "maintenance" as const
    }
  ];

  // Handle auto sliding with timer
  useEffect(() => {
    if (isMobile && carouselApiRef.current) {
      const slideInterval = 5000; // 5 seconds per slide
      const tickInterval = 50; // Update progress every 50ms for smooth animation

      // Reset any existing timer
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }

      // Start a new timer
      let elapsedTime = 0;
      timerRef.current = setInterval(() => {
        elapsedTime += tickInterval;
        const newProgress = (elapsedTime / slideInterval) * 100;
        
        // Update progress
        setProgress(newProgress);
        
        // Move to next slide when progress reaches 100%
        if (newProgress >= 100) {
          carouselApiRef.current.scrollNext();
          elapsedTime = 0;
          setProgress(0);
          // Update current slide
          const nextSlide = (currentSlide + 1) % services.length;
          setCurrentSlide(nextSlide);
        }
      }, tickInterval);

      return () => {
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
      };
    }
  }, [isMobile, currentSlide, services.length]);

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Fond moderne avec dégradé sophistiqué */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-blue-100/30 z-0">
        {/* Effet glacé avec motifs subtils */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwQjUzOTQiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NEgwdjJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] z-10 px-0"></div>
      </div>
      
      {/* Éléments décoratifs glacés */}
      <div className="absolute -top-10 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-blue-100/20 to-transparent opacity-30 blur-3xl"></div>
      <div className="absolute top-1/3 right-20 w-80 h-80 rounded-full bg-gradient-to-bl from-blue-200/20 to-transparent opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-80 rounded-full bg-gradient-to-tr from-blue-100/20 to-transparent opacity-30 blur-3xl"></div>
      
      {/* Éléments de décoration discrets */}
      <Snowflake className="absolute top-20 right-20 w-16 h-16 text-blue-100/15" strokeWidth={0.5} />
      <Snowflake className="absolute bottom-32 left-20 w-12 h-12 text-blue-200/10" strokeWidth={0.5} />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-primary font-medium text-sm mb-4">
            NOS SERVICES
          </span>
          <h2 className="font-bold font-montserrat mb-5 leading-tight text-[#212121] md:text-4xl text-2xl">
            Solutions complètes 
            <span className="text-primary"> en réfrigération</span>
          </h2>
          <p className="text-gray-600 font-opensans max-w-2xl mx-auto">
            Nous proposons une gamme complète de services en réfrigération et climatisation pour répondre à tous vos besoins professionnels.
          </p>
        </div>
        
        {/* Render carousel for mobile view and grid for desktop */}
        {isMobile ? (
          <div className="px-4">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
              setApi={(api) => {
                carouselApiRef.current = api;
                api.on('select', () => {
                  // Reset progress when slide changes manually
                  setProgress(0);
                  // Update current slide index
                  if (api.selectedScrollSnap) {
                    const index = api.selectedScrollSnap();
                    setCurrentSlide(index);
                  }
                });
              }}
            >
              <CarouselContent>
                {services.map((service, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <ServiceCard 
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                      link={service.link}
                      color={service.color}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex flex-col items-center mt-6 gap-2">
                <Progress 
                  value={progress} 
                  className="w-32 h-1 bg-gray-200 rounded-full" 
                />
                <div className="flex gap-1.5 mt-2">
                  {services.map((_, index) => (
                    <div 
                      key={index} 
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </Carousel>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-[16px]">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                color={service.color}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
