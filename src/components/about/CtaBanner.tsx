
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const CtaBanner = () => {
  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary z-0"></div>
      <div className="absolute inset-0 bg-pattern opacity-10 z-0"></div>
      
      <div className="container-custom relative z-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Gardez votre chaîne du froid en sécurité – à tout moment, partout.
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
          Notre équipe de techniciens certifiés est disponible 24h/24 et 7j/7 pour répondre à tous vos besoins en réfrigération.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-emergency hover:bg-emergency/90">
            <Link to="tel:0185500284" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Appel d'urgence
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-white/90 hover:text-primary/90">
            <Link to="/contact" className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Obtenez un audit gratuit
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
