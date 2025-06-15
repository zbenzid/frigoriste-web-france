
import { useCallback } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const useAnalytics = () => {
  const trackEvent = useCallback((eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  }, []);

  const trackPhoneCall = useCallback(() => {
    trackEvent('phone_call', {
      event_category: 'engagement',
      event_label: 'emergency_call',
      value: 1
    });
  }, [trackEvent]);

  const trackFormSubmission = useCallback((formType: string) => {
    trackEvent('form_submission', {
      event_category: 'lead',
      event_label: formType,
      value: 1
    });
  }, [trackEvent]);

  const trackPageView = useCallback((pagePath: string, pageTitle: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-343731918', {
        page_path: pagePath,
        page_title: pageTitle,
      });
    }
  }, []);

  return {
    trackEvent,
    trackPhoneCall,
    trackFormSubmission,
    trackPageView
  };
};
