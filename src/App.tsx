
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Index from "./pages/Index";
import Services from "./pages/Services";
import QuiSommesNous from "./pages/QuiSommesNous";
import ZoneIntervention from "./pages/ZoneIntervention";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import NotFound from "./pages/NotFound";

// Nouvelles pages SEO
import DepannageFroid from "./pages/DepannageFroid";
import DepannageClimatisationParis from "./pages/DepannageClimatisationParis";
import InstallationClimatisationParis from "./pages/InstallationClimatisationParis";
import InstallationChambreFroideParis from "./pages/InstallationChambreFroideParis";
import InstallationCuisineProfessionnelleParis from "./pages/InstallationCuisineProfessionnelleParis";
import FrigoristeYvelines from "./pages/FrigoristeYvelines";

// Composants SEO pour sitemap et robots
import SitemapXML from "./components/seo/SitemapXML";
import RobotsTXT from "./components/seo/RobotsTXT";

import CookieBanner from "./components/cookies/CookieBanner";
import CookiePreferences from "./components/cookies/CookiePreferences";
import { useCookies } from "./hooks/use-cookies";
import { ResourcePreloader } from "./components/performance";
import { WebVitalsTracker } from "./components/performance";

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
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ResourcePreloader />
          <WebVitalsTracker />
          <div className="min-h-screen bg-background font-sans antialiased">
            <Header />
            <main>
              <Routes>
                {/* Routes SEO spéciales */}
                <Route path="/sitemap.xml" element={<SitemapXML />} />
                <Route path="/robots.txt" element={<RobotsTXT />} />
                
                {/* Routes principales */}
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<Services />} />
                <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
                <Route path="/zone-intervention" element={<ZoneIntervention />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/mentions-legales" element={<MentionsLegales />} />
                <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
                
                {/* Nouvelles pages SEO */}
                <Route path="/depannage-froid" element={<DepannageFroid />} />
                <Route path="/depannage-climatisation-paris" element={<DepannageClimatisationParis />} />
                <Route path="/installation-climatisation-paris" element={<InstallationClimatisationParis />} />
                <Route path="/installation-chambre-froide-paris" element={<InstallationChambreFroideParis />} />
                <Route path="/installation-cuisine-professionnelle-paris" element={<InstallationCuisineProfessionnelleParis />} />
                <Route path="/frigoriste-en-yvelines-78" element={<FrigoristeYvelines />} />
                
                {/* Redirections SEO - ces routes redirigeront vers les pages principales */}
                <Route path="/entretien-materiel-frigorifique-et-climatisation-paris" element={<Services />} />
                <Route path="/depannage-chambre-froide-paris" element={<DepannageFroid />} />
                <Route path="/reparateur-frigoriste-paris" element={<DepannageFroid />} />
                <Route path="/reparateur-frigo-professionnel-paris" element={<DepannageFroid />} />
                <Route path="/contact.php" element={<Contact />} />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            
            {/* Cookie Banner */}
            {showBanner && (
              <CookieBanner
                onAcceptAll={acceptAll}
                onRejectAll={rejectAll}
                onShowPreferences={() => setShowPreferences(true)}
              />
            )}

            {/* Cookie Preferences Modal */}
            <CookiePreferences
              isOpen={showPreferences}
              onClose={() => setShowPreferences(false)}
              currentPreferences={preferences}
              onSave={saveConsent}
            />
          </div>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
