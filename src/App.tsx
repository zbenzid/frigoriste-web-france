
import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Index from "./pages/Index";
import CookieBanner from "./components/cookies/CookieBanner";
import CookiePreferences from "./components/cookies/CookiePreferences";
import { useCookies } from "./hooks/use-cookies";
import { ResourcePreloader } from "./components/performance";
import { WebVitalsTracker } from "./components/performance";

// Lazy-loaded pages for code-splitting
const Services = lazy(() => import("./pages/Services"));
const QuiSommesNous = lazy(() => import("./pages/QuiSommesNous"));
const ZoneIntervention = lazy(() => import("./pages/ZoneIntervention"));
const Contact = lazy(() => import("./pages/Contact"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const PolitiqueConfidentialite = lazy(() => import("./pages/PolitiqueConfidentialite"));
const Merci = lazy(() => import("./pages/Merci"));
const NotFound = lazy(() => import("./pages/NotFound"));
const DepannageFroid = lazy(() => import("./pages/DepannageFroid"));
const DepannageClimatisationParis = lazy(() => import("./pages/DepannageClimatisationParis"));
const InstallationClimatisationParis = lazy(() => import("./pages/InstallationClimatisationParis"));
const InstallationChambreFroideParis = lazy(() => import("./pages/InstallationChambreFroideParis"));
const InstallationCuisineProfessionnelleParis = lazy(() => import("./pages/InstallationCuisineProfessionnelleParis"));
const FrigoristeYvelines = lazy(() => import("./pages/FrigoristeYvelines"));

// Lazy-loaded SEO components
const SitemapXML = lazy(() => import("./components/seo/SitemapXML"));
const RobotsTXT = lazy(() => import("./components/seo/RobotsTXT"));

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
          <BrowserRouter>
            <ResourcePreloader />
            <WebVitalsTracker />
            <div className="min-h-screen bg-background font-sans antialiased">
              <Header />
              <main>
                <Suspense fallback={null}>
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
                    <Route path="/merci" element={<Merci />} />
                    
                    {/* Nouvelles pages SEO */}
                    <Route path="/depannage-froid" element={<DepannageFroid />} />
                    <Route path="/depannage-climatisation-paris" element={<DepannageClimatisationParis />} />
                    <Route path="/installation-climatisation-paris" element={<InstallationClimatisationParis />} />
                    <Route path="/installation-chambre-froide-paris" element={<InstallationChambreFroideParis />} />
                    <Route path="/installation-cuisine-professionnelle-paris" element={<InstallationCuisineProfessionnelleParis />} />
                    <Route path="/frigoriste-en-yvelines-78" element={<FrigoristeYvelines />} />
                    
                    {/* Redirections SEO */}
                    <Route path="/entretien-materiel-frigorifique-et-climatisation-paris" element={<Services />} />
                    <Route path="/depannage-chambre-froide-paris" element={<DepannageFroid />} />
                    <Route path="/reparateur-frigoriste-paris" element={<DepannageFroid />} />
                    <Route path="/reparateur-frigo-professionnel-paris" element={<DepannageFroid />} />
                    <Route path="/contact.php" element={<Contact />} />
                    
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
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
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
