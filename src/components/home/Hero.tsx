import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const Hero = () => {
  return <div className="relative bg-gray-900 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
      filter: "brightness(0.4)"
    }}></div>

      <div className="container-custom relative z-10 py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <span className="inline-block px-4 py-2 rounded-full bg-emergency/20 text-white font-semibold text-sm mb-6 backdrop-blur-sm">
              Service d'urgence 24/7
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight md:text-6xl">
              Dépannage frigorifique et climatisation professionnel
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-xl">
              Spécialiste en froid commercial pour les professionnels: restaurants, boulangeries, commerces alimentaires.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="tel:0185500284" className="group btn-emergency text-lg relative overflow-hidden">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 to-emergency opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative flex items-center">
                  <Phone size={24} className="mr-2" />
                  01 85 50 02 84
                </span>
              </a>
              <Link to="/contact" className="group btn-secondary text-lg relative overflow-hidden">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative flex items-center">
                  Demander un devis
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
          
          <div className="backdrop-blur-sm bg-white/10 p-8 rounded-xl shadow-lg hidden md:block border border-white/20">
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-6 text-center">Intervention express</h2>
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <span className="font-semibold">Paris & petite couronne</span>
                  <span className="bg-emergency/80 text-white px-4 py-2 rounded-lg text-sm font-bold">
                    1h
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <span className="font-semibold">Yvelines (78)</span>
                  <span className="bg-emergency/80 text-white px-4 py-2 rounded-lg text-sm font-bold">
                    45min
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <span className="font-semibold">Grande couronne</span>
                  <span className="bg-emergency/80 text-white px-4 py-2 rounded-lg text-sm font-bold">
                    2h
                  </span>
                </div>
                <p className="text-center italic text-sm pt-3">
                  Délais moyens d'intervention en urgence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;