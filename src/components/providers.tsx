
"use client";

import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';

import CookieBanner from "@/components/cookies/CookieBanner";
import CookiePreferences from "@/components/cookies/CookiePreferences";
import { useCookies } from "@/hooks/use-cookies";

// On crée une seule instance du client pour éviter de la recréer à chaque render.
const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
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
        {children}
        
        {/* Logique des cookies qui doit être rendue côté client */}
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
