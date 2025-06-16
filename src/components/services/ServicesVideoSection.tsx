
import React from 'react';
import { Play } from 'lucide-react';
import { useVimeoPlayer } from '@/hooks/use-vimeo-player';

const ServicesVideoSection = () => {
  const { playerRef, isPlaying, togglePlay } = useVimeoPlayer();

  return (
    <section className="bg-white py-[40px]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-bold font-montserrat text-3xl md:text-4xl mb-4 text-[#212121]">
            Découvrez LeFrigoriste.fr en action
          </h2>
          <p className="text-lg text-gray-600 font-opensans max-w-2xl mx-auto">
            Plongez dans l'univers de nos interventions d'urgence et découvrez comment nous assurons la continuité de votre activité 24h/24.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-900">
            <div className="aspect-video relative">
              <div
                ref={playerRef}
                className="absolute inset-0 w-full h-full"
                style={{
                  background: 'transparent',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }}
              ></div>
              
              {/* Overlay clickable pour toggle play/pause */}
              <div className="absolute inset-0 cursor-pointer z-10" onClick={togglePlay}>
                {/* Bouton play visible seulement quand la vidéo n'est pas en lecture */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-300 hover:bg-opacity-40">
                    <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all duration-300 hover:scale-110">
                      <Play className="w-8 h-8 text-primary ml-1" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 font-opensans">
              Intervention d'urgence • Dépannage 24h/24 • Île-de-France
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesVideoSection;
