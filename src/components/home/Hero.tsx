
import React from 'react';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
          filter: "brightness(0.4)"
        }}
      ></div>

      <div className="container-custom relative z-10 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Dépannage frigorifique et climatisation 24h/24 en Île-de-France
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-xl">
              Spécialiste en froid commercial pour les professionnels : restaurants, boulangeries, commerces alimentaires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0185500284" className="btn-emergency text-lg">
                <Phone size={24} className="mr-2" />
                Appel d'urgence : 01 85 50 02 84
              </a>
              <Link to="/contact" className="btn-secondary text-lg">
                Demander un devis
              </Link>
            </div>
          </div>
          
          <div className="backdrop-blur-sm bg-white/10 p-6 rounded-lg shadow-lg hidden md:block">
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-4 text-center">Intervention express</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/20 pb-3">
                  <span className="font-semibold">Paris & petite couronne</span>
                  <span className="bg-emergency/80 text-white px-3 py-1 rounded-full text-sm">
                    1h
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-3">
                  <span className="font-semibold">Yvelines (78)</span>
                  <span className="bg-emergency/80 text-white px-3 py-1 rounded-full text-sm">
                    45min
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-3">
                  <span className="font-semibold">Grande couronne</span>
                  <span className="bg-emergency/80 text-white px-3 py-1 rounded-full text-sm">
                    2h
                  </span>
                </div>
                <p className="text-center italic text-sm pt-2">
                  Délais moyens d'intervention en urgence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
