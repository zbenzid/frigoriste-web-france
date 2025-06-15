
import React from 'react';
import { Button } from '@/components/ui/button';
import { Cookie, Settings } from 'lucide-react';

interface CookieBannerProps {
  onAcceptAll: () => void;
  onRejectAll: () => void;
  onShowPreferences: () => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({
  onAcceptAll,
  onRejectAll,
  onShowPreferences,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg animate-slideUp">
      <div className="container-custom py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          {/* Icon and text */}
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="text-primary mt-1 flex-shrink-0" size={24} />
            <div className="text-sm text-gray-700">
              <p className="mb-2">
                <strong>Nous utilisons des cookies</strong> pour améliorer votre expérience sur notre site, 
                analyser le trafic et personnaliser le contenu. En continuant à naviguer, vous acceptez notre utilisation des cookies.
              </p>
              <p className="text-xs text-gray-600">
                Vous pouvez modifier vos préférences à tout moment. 
                <button 
                  onClick={onShowPreferences}
                  className="text-primary hover:text-secondary underline ml-1"
                >
                  En savoir plus
                </button>
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={onShowPreferences}
              className="w-full sm:w-auto"
            >
              <Settings size={16} className="mr-2" />
              Personnaliser
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onRejectAll}
              className="w-full sm:w-auto"
            >
              Refuser tout
            </Button>
            <Button
              onClick={onAcceptAll}
              size="sm"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90"
            >
              Accepter tout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
