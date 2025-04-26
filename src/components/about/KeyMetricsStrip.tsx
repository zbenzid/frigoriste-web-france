
import React, { useEffect, useState } from 'react';
import { Clock, Users, MapPin, Building } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

type MetricProps = {
  icon: React.ReactNode;
  value: string;
  description: string;
};

const Metric = ({ icon, value, description }: MetricProps) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, ''));
  
  useEffect(() => {
    const duration = 2000; // ms
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;
    
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      setCount(Math.floor(progress * numericValue));
      
      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
    
    return () => clearInterval(counter);
  }, [numericValue]);
  
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="rounded-full bg-primary/10 p-3 mb-2">
        {icon}
      </div>
      <div className="font-bold text-xl md:text-2xl text-primary">
        {isNaN(numericValue) ? value : count.toLocaleString() + (value.includes('+') ? '+' : '')}
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

const KeyMetricsStrip = () => {
  const isMobile = useIsMobile();
  const [isSticky, setIsSticky] = useState(false);
  
  useEffect(() => {
    if (typeof window !== 'undefined' && !isMobile) {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsSticky(scrollTop > 300);
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isMobile]);
  
  const stickyClass = isSticky && !isMobile ? "fixed top-0 left-0 right-0 shadow-md z-30" : "";
  
  const metrics: MetricProps[] = [
    {
      icon: <Clock size={24} className="text-primary" />,
      value: "15",
      description: "minutes temps moyen d'envoi"
    },
    {
      icon: <Users size={24} className="text-primary" />,
      value: "2000+",
      description: "interventions par an"
    },
    {
      icon: <MapPin size={24} className="text-primary" />,
      value: "45-120",
      description: "min délai selon zone"
    },
    {
      icon: <Building size={24} className="text-primary" />,
      value: "100%",
      description: "clients professionnels"
    }
  ];

  return (
    <section className={`bg-white py-4 md:py-6 ${stickyClass}`}>
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {metrics.map((metric, index) => (
            <Metric 
              key={index}
              icon={metric.icon}
              value={metric.value}
              description={metric.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMetricsStrip;
