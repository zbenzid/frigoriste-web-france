import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const HeroSection = () => {
  return <div className="relative overflow-hidden md:my-6 md:py-[24px]">
      {/* Conteneur de la section hero à deux colonnes */}
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Colonne de gauche - Contenu textuel */}
          <div className="relative z-10 py-12 md:py-0">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 backdrop-blur-sm border border-white/10">
              Notre expertise depuis 2018
            </span>
            <h1 className="text-4xl font-bold text-gray-800 mb-6 font-montserrat md:text-3xl">Qui Sommes-Nous</h1>
            <p className="text-lg text-gray-600 mb-8 font-opensans">
              LeFrigoriste.fr, votre partenaire de confiance en réfrigération et climatisation en Île-de-France. Une équipe d'experts dédiée à votre tranquillité d'esprit avec une garantie d'intervention rapide 24h/7j.
            </p>
            
            {/* Premium call-to-action */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a href="tel:0185500284" className="group relative overflow-hidden rounded-full bg-emergency hover:bg-emergency/90 text-lg font-bold py-3 px-6 text-white shadow-lg transition-all duration-300 hover:shadow-emergency/30 hover:shadow-xl hover:translate-y-[-2px]">
                <span className="relative flex items-center justify-center">
                  <Phone size={20} className="mr-2" />
                  01 85 50 02 84
                </span>
              </a>
              <Link to="/contact" className="group relative overflow-hidden rounded-full bg-primary hover:bg-primary/90 text-lg font-bold py-3 px-6 text-white shadow-lg transition-all duration-300 hover:shadow-primary/30 hover:shadow-xl hover:translate-y-[-2px]">
                <span className="relative flex items-center justify-center">
                  Nous contacter
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
          
          {/* Colonne de droite - Image mise en valeur */}
          <div className="relative">
            {/* Conteneur de l'image avec cadre esthétique */}
            <div className="overflow-hidden rounded-2xl shadow-xl relative aspect-[4/3] md:aspect-[16/9] h-full">
              {/* Image principale */}
              <img src="/lovable-uploads/84505439-0fa2-4c70-867b-9f949bcbdb1f.png" alt="L'équipe LeFrigoriste devant nos véhicules d'intervention" className="w-full h-full object-cover" />
              
              {/* Élément décoratif - Badge de service 24/7 */}
              <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white font-bold text-sm border border-white/20 shadow-lg z-30 flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Service 24/7
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default HeroSection;