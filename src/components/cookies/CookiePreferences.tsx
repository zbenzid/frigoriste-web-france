
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Shield, BarChart3, Target, Info } from 'lucide-react';
import { CookiePreferences as CookiePreferencesType } from '@/hooks/use-cookies';

interface CookiePreferencesProps {
  isOpen: boolean;
  onClose: () => void;
  currentPreferences: CookiePreferencesType;
  onSave: (preferences: CookiePreferencesType) => void;
}

const CookiePreferences: React.FC<CookiePreferencesProps> = ({
  isOpen,
  onClose,
  currentPreferences,
  onSave,
}) => {
  const [preferences, setPreferences] = useState<CookiePreferencesType>(currentPreferences);

  const handleSave = () => {
    onSave(preferences);
  };

  const handleToggle = (type: keyof CookiePreferencesType, value: boolean) => {
    if (type === 'necessary') return; // Cannot disable necessary cookies
    setPreferences(prev => ({ ...prev, [type]: value }));
  };

  const cookieCategories = [
    {
      id: 'necessary' as const,
      title: 'Cookies nécessaires',
      description: 'Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas être désactivés.',
      icon: Shield,
      required: true,
      details: [
        'Mémorisation de vos préférences de cookies',
        'Sécurité et prévention des fraudes',
        'Fonctionnement des formulaires de contact',
      ],
    },
    {
      id: 'analytics' as const,
      title: 'Cookies analytiques',
      description: 'Ces cookies nous aident à comprendre comment vous utilisez notre site pour l\'améliorer.',
      icon: BarChart3,
      required: false,
      details: [
        'Google Analytics pour mesurer l\'audience',
        'Analyse du comportement des visiteurs',
        'Statistiques de performance du site',
        'Aucune donnée personnelle identifiable collectée',
      ],
    },
    {
      id: 'marketing' as const,
      title: 'Cookies marketing',
      description: 'Ces cookies nous permettent de vous proposer du contenu et des publicités personnalisés.',
      icon: Target,
      required: false,
      details: [
        'Personnalisation du contenu affiché',
        'Mesure de l\'efficacité des campagnes',
        'Remarketing sur les réseaux sociaux',
      ],
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-primary">
            <Info size={24} />
            Préférences des cookies
          </DialogTitle>
          <DialogDescription>
            Choisissez quels types de cookies vous souhaitez autoriser sur notre site. 
            Vous pouvez modifier ces préférences à tout moment.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {cookieCategories.map((category) => {
            const IconComponent = category.icon;
            const isEnabled = preferences[category.id];

            return (
              <div key={category.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <IconComponent 
                      size={20} 
                      className={category.required ? 'text-maintenance' : 'text-primary'} 
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">{category.title}</h3>
                      {category.required && (
                        <span className="text-xs bg-maintenance/10 text-maintenance px-2 py-1 rounded-full">
                          Toujours actif
                        </span>
                      )}
                    </div>
                  </div>
                  <Switch
                    checked={isEnabled}
                    onCheckedChange={(value) => handleToggle(category.id, value)}
                    disabled={category.required}
                  />
                </div>

                <p className="text-sm text-gray-600 mb-3">{category.description}</p>

                <div className="bg-gray-50 rounded-md p-3">
                  <p className="text-xs font-medium text-gray-700 mb-2">Ces cookies permettent :</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {category.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t">
          <Button
            variant="outline"
            onClick={onClose}
            className="sm:ml-auto"
          >
            Annuler
          </Button>
          <Button onClick={handleSave} className="bg-primary hover:bg-primary/90">
            Enregistrer les préférences
          </Button>
        </div>

        <div className="mt-4 p-3 bg-blue-50 rounded-md">
          <p className="text-xs text-gray-600">
            <strong>Note :</strong> Certains cookies sont nécessaires au bon fonctionnement du site et ne peuvent être désactivés. 
            En désactivant les cookies analytiques ou marketing, certaines fonctionnalités pourraient être limitées.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CookiePreferences;
