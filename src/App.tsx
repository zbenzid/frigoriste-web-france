
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/cookies/CookieBanner";
import CookiePreferences from "@/components/cookies/CookiePreferences";
import { ResourcePreloader, WebVitalsTracker } from "@/components/performance";
import { useAnalytics } from "@/hooks/use-analytics";
import { useCookies } from "@/hooks/use-cookies";
import { useServiceWorker } from "@/hooks/use-service-worker";

import Index from "./pages/Index";
import Services from "./pages/Services";
import QuiSommesNous from "./pages/QuiSommesNous";
import ZoneIntervention from "./pages/ZoneIntervention";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

const AnalyticsWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { trackPageView } = useAnalytics();
  
  useEffect(() => {
    // Track page views on route changes
    trackPageView(location.pathname, document.title);
  }, [location, trackPageView]);
  
  return <>{children}</>;
};

const CookieManager = () => {
  const {
    showBanner,
    showPreferences,
    setShowPreferences,
    acceptAll,
    rejectAll,
    saveConsent,
    preferences,
  } = useCookies();

  return (
    <>
      {showBanner && (
        <CookieBanner
          onAcceptAll={acceptAll}
          onRejectAll={rejectAll}
          onShowPreferences={() => setShowPreferences(true)}
        />
      )}
      
      <CookiePreferences
        isOpen={showPreferences}
        onClose={() => setShowPreferences(false)}
        currentPreferences={preferences}
        onSave={saveConsent}
      />
    </>
  );
};

const App = () => {
  // Enregistrer le service worker
  useServiceWorker();

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ResourcePreloader />
        <WebVitalsTracker />
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AnalyticsWrapper>
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
                    <Route path="/zone-intervention" element={<ZoneIntervention />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/mentions-legales" element={<MentionsLegales />} />
                    <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
                <CookieManager />
              </div>
            </AnalyticsWrapper>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
