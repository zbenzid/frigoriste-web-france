
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieBanner from "@/components/cookies/CookieBanner";
import CookiePreferences from "@/components/cookies/CookiePreferences";
import { useCookies } from "@/hooks/use-cookies";

// Pages
import Index from '@/pages/Index';
import Services from '@/pages/Services';
import QuiSommesNous from '@/pages/QuiSommesNous';
import DepannageFroid from '@/pages/DepannageFroid';
import DepannageClimatisationParis from '@/pages/DepannageClimatisationParis';
import InstallationClimatisationParis from '@/pages/InstallationClimatisationParis';
import InstallationChambreFroideParis from '@/pages/InstallationChambreFroideParis';
import InstallationCuisineProfessionnelleParis from '@/pages/InstallationCuisineProfessionnelleParis';
import FrigoristeYvelines from '@/pages/FrigoristeYvelines';
import MentionsLegales from '@/pages/MentionsLegales';
import PolitiqueConfidentialite from '@/pages/PolitiqueConfidentialite';
import NotFound from '@/pages/NotFound';

const queryClient = new QueryClient();

function App() {
  const {
    showBanner,
    showPreferences,
    setShowPreferences,
    acceptAll,
    rejectAll,
    preferences,
    saveConsent,
  } = useCookies();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background font-sans antialiased">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
              <Route path="/depannage-froid" element={<DepannageFroid />} />
              <Route path="/depannage-climatisation-paris" element={<DepannageClimatisationParis />} />
              <Route path="/installation-climatisation-paris" element={<InstallationClimatisationParis />} />
              <Route path="/installation-chambre-froide-paris" element={<InstallationChambreFroideParis />} />
              <Route path="/installation-cuisine-professionnelle-paris" element={<InstallationCuisineProfessionnelleParis />} />
              <Route path="/frigoriste-en-yvelines-78" element={<FrigoristeYvelines />} />
              <Route path="/mentions-legales" element={<MentionsLegales />} />
              <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster />
        
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
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
