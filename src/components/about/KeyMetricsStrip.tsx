import React, { useEffect, useState } from 'react';
import { Clock, Users, MapPin, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
type MetricProps = {
  icon: React.ReactNode;
  value: string;
  description: string;
};
const Metric = ({
  icon,
  value,
  description
}: MetricProps) => {
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
  return <div className="flex items-center gap-3 p-2">
      <div className="rounded-lg bg-primary/5 p-2">
        {icon}
      </div>
      <div className="flex flex-col">
        <div className="font-montserrat font-semibold text-primary">
          {isNaN(numericValue) ? value : count.toLocaleString() + (value.includes('+') ? '+' : '')}
        </div>
        <p className="text-xs text-gray-600">{description}</p>
      </div>
    </div>;
};
const KeyMetricsStrip = () => {
  const metrics: MetricProps[] = [{
    icon: <Clock size={20} className="text-primary" />,
    value: "45",
    description: "min délai max Yvelines"
  }, {
    icon: <MapPin size={20} className="text-primary" />,
    value: "2h",
    description: "délai max IDF"
  }, {
    icon: <Star size={20} className="text-primary" />,
    value: "4.9",
    description: "note Google Reviews"
  }, {
    icon: <Users size={20} className="text-primary" />,
    value: "500+",
    description: "clients satisfaits"
  }];
  return;
};
export default KeyMetricsStrip;