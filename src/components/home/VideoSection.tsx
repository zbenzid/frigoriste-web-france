
import React from 'react';
import { Play } from 'lucide-react';
import { useVimeoPlayer } from '@/hooks/use-vimeo-player';

const VideoSection = () => {
  const { playerRef, isPlaying, togglePlay } = useVimeoPlayer();

  return (
    <section className="bg-white py-[40px]">
      <div className="container-custom">
        <div className="text-center mb-12 relative">
          {/* Decorative top accent line */}
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
          
          {/* Badge tag */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <span className="text-sm font-semibold text-primary tracking-wide uppercase">En action</span>
          </div>
          
          {/* Main heading with gradient */}
          <h2 className="font-bold font-montserrat text-3xl md:text-4xl lg:text-5xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0B5394] via-[#4A86E8] to-[#0B5394] leading-tight">
            Découvrez LeFrigoriste.fr
            <span className="block text-[#212121] mt-2">en action</span>
          </h2>
          
          {/* Subtitle with refined typography */}
          <p className="text-lg md:text-xl text-gray-600 font-opensans max-w-3xl mx-auto leading-relaxed">
            Plongez dans l'univers de nos interventions d'urgence et découvrez comment nous assurons la continuité de votre activité 
            <span className="font-semibold text-primary"> 24h/24</span>.
          </p>
          
          {/* Bottom decorative element */}
          <div className="flex items-center justify-center mt-8">
            <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-gray-300"></div>
            <div className="w-2 h-2 bg-primary rounded-full mx-3"></div>
            <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
        </div>
        
        {/* Video player container */}
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

export default VideoSection;
