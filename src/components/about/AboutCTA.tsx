
import React from 'react';
import Link from 'next/link';
import { Phone, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutCTA = () => {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-custom text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Besoin d'un expert en réfrigération de confiance ?
        </h2>
        <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
          Notre équipe de techniciens certifiés est prête à vous accompagner pour tous vos besoins en réfrigération et climatisation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" variant="default" className="bg-white text-primary hover:bg-white/90">
            <Link href="/contact">
              <Phone size={18} />
              Nous contacter
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">
              <FileText size={18} />
              Demander un devis
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
