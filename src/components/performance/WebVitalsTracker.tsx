
import { useEffect } from 'react';

interface WebVitalsMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

const WebVitalsTracker = () => {
  useEffect(() => {
    const trackWebVitals = async () => {
      try {
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
        
        const sendToAnalytics = (metric: WebVitalsMetric) => {
          console.log('Web Vital:', metric);
          
          // Envoyer à votre service d'analytics si configuré
          if (window.gtag) {
            window.gtag('event', metric.name, {
              custom_map: { metric_value: 'custom_metric' },
              custom_metric: metric.value,
              metric_rating: metric.rating
            });
          }
        };

        // Mesurer les Core Web Vitals
        getCLS(sendToAnalytics);
        getFID(sendToAnalytics);
        getFCP(sendToAnalytics);
        getLCP(sendToAnalytics);
        getTTFB(sendToAnalytics);
        
      } catch (error) {
        console.warn('Web Vitals library not available:', error);
      }
    };

    // Mesurer seulement en production
    if (process.env.NODE_ENV === 'production') {
      trackWebVitals();
    }
  }, []);

  return null;
};

export default WebVitalsTracker;
