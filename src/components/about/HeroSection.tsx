
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-[60vh] overflow-hidden">
      {/* Vidéo ou image de fond avec overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        {/* Fallback image qui sera toujours présente */}
        <img 
          src="https://images.unsplash.com/photo-1581093196277-9f608732de47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
          alt="Technicien frigoriste en intervention" 
          className="object-cover h-full w-full"
        />
        {/* Vidéo qui sera chargée par-dessus si possible */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 object-cover w-full h-full hidden md:block"
        >
          <source src="#" type="video/mp4" />
        </video>
      </div>
      
      {/* Contenu du hero */}
      <div className="container-custom relative z-20 h-full flex flex-col justify-center text-white">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Experts en froid 24h/24 pour les professionnels d'Île-de-France
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl">
            Intervention garantie en 45 minutes dans les Yvelines, 1h à Paris et 2h en grande couronne pour tous vos besoins en réfrigération.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-emergency hover:bg-emergency/90 text-white">
              <Link to="tel:0185500284" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Appeler l'urgence 01 85 50 02 84
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact" className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Demander un devis
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
