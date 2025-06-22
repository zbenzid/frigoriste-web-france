
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieBanner from "@/components/cookies/CookieBanner";
import CookiePreferences from "@/components/cookies/CookiePreferences";
import { useCookies } from "@/hooks/use-cookies";

// Pages
import Index from '@/pages/Index';

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
          <div className="min-h-screen bg-background font-sans antialiased">
            <Header />
            <main>
              <Index />
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
    </HelmetProvider>
  );
}

export default App;
