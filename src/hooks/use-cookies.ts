
import { useState, useEffect, useCallback } from 'react';

export type CookieType = 'necessary' | 'analytics' | 'marketing';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export interface CookieConsent {
  hasConsent: boolean;
  preferences: CookiePreferences;
  timestamp: number;
}

const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true, // Always required
  analytics: false,
  marketing: false,
};

const STORAGE_KEY = 'cookie-consent';

export const useCookies = () => {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  // Load consent from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsedConsent = JSON.parse(stored) as CookieConsent;
        setConsent(parsedConsent);
        setShowBanner(false);
      } catch (error) {
        console.error('Error parsing stored cookie consent:', error);
        setShowBanner(true);
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  // Save consent to localStorage and dispatch event
  const saveConsent = useCallback((preferences: CookiePreferences) => {
    const newConsent: CookieConsent = {
      hasConsent: true,
      preferences: { ...preferences, necessary: true }, // Always true
      timestamp: Date.now(),
    };

    setConsent(newConsent);
    setShowBanner(false);
    setShowPreferences(false);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newConsent));

    // Dispatch event for GA initialization
    window.dispatchEvent(new CustomEvent('cookie-consent-changed', {
      detail: newConsent.preferences
    }));
  }, []);

  // Accept all cookies
  const acceptAll = useCallback(() => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  }, [saveConsent]);

  // Reject all non-necessary cookies
  const rejectAll = useCallback(() => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  }, [saveConsent]);

  // Update specific preference
  const updatePreference = useCallback((type: CookieType, value: boolean) => {
    if (!consent) return;
    
    const newPreferences = {
      ...consent.preferences,
      [type]: type === 'necessary' ? true : value, // Necessary always true
    };
    
    saveConsent(newPreferences);
  }, [consent, saveConsent]);

  // Reset consent (for testing or user request)
  const resetConsent = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setConsent(null);
    setShowBanner(true);
    setShowPreferences(false);
  }, []);

  return {
    consent,
    showBanner,
    showPreferences,
    setShowPreferences,
    acceptAll,
    rejectAll,
    updatePreference,
    saveConsent,
    resetConsent,
    hasConsent: !!consent?.hasConsent,
    preferences: consent?.preferences || DEFAULT_PREFERENCES,
  };
};
