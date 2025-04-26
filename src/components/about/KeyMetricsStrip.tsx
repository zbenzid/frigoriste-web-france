
import React, { useEffect, useState } from 'react';
import { Clock, Users, MapPin, Star } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

type MetricProps = {
  icon: React.ReactNode;
  value: string;
  description: string;
};

const Metric = ({ icon, value, description }: MetricProps) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, ''));
  
  useEffect(() => {
    const duration = 2000;
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
    <div className="flex items-center gap-3 p-2">
      <div className="rounded-lg bg-primary/5 p-2">
        {icon}
      </div>
      <div className="flex flex-col">
        <div className="font-montserrat font-semibold text-primary">
          {isNaN(numericValue) ? value : count.toLocaleString() + (value.includes('+') ? '+' : '')}
        </div>
        <p className="text-xs text-gray-600">{description}</p>
      </div>
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
  
  const metrics: MetricProps[] = [
    {
      icon: <Clock size={20} className="text-primary" />,
      value: "45",
      description: "min délai max Yvelines"
    },
    {
      icon: <MapPin size={20} className="text-primary" />,
      value: "2h",
      description: "délai max IDF"
    },
    {
      icon: <Star size={20} className="text-primary" />,
      value: "4.9",
      description: "note Google Reviews"
    },
    {
      icon: <Users size={20} className="text-primary" />,
      value: "500+",
      description: "clients satisfaits"
    }
  ];

  return (
    <section 
      className={cn(
        "bg-white/95 backdrop-blur-sm py-2 transition-all duration-300 border-b z-30",
        isSticky && !isMobile ? "fixed top-0 left-0 right-0 shadow-sm" : ""
      )}
    >
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4">
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
