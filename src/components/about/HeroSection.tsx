
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      {/* Image de fond avec overlay optimisé */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10"></div>
        <img 
          src="/lovable-uploads/84505439-0fa2-4c70-867b-9f949bcbdb1f.png"
          alt="Technicien LeFrigoriste devant nos véhicules d'intervention" 
          className="object-cover h-full w-full" // Removed animate-ken-burns
        />
      </div>
      
      {/* Contenu du hero avec nouvelle mise en page */}
      <div className="container-custom relative z-20 h-full flex flex-col justify-center text-white py-24">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-white font-semibold text-sm mb-6 backdrop-blur-sm border border-white/10">
            Service d'urgence 24/7
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Le spécialiste du froid<br />en Île-de-France
          </h1>
          <p className="text-xl mb-8 text-white/90 max-w-2xl leading-relaxed">
            Intervention garantie en 45 minutes dans les Yvelines, 1h à Paris et 2h en grande couronne pour tous vos besoins en réfrigération.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-emergency hover:bg-emergency/90 text-white">
              <Link to="tel:0185500284" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Appeler l'urgence 01 85 50 02 84
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm">
              <Link to="/contact" className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Demander un devis
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Ajout d'un effet de dégradé en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;
