
import { useRef, useEffect, useState } from 'react';

export const useVimeoPlayer = (videoId: number = 1093559944) => {
  const playerRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);

  useEffect(() => {
    // Charger l'API Vimeo Player
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.onload = () => {
      if (window.Vimeo && playerRef.current) {
        const player = new window.Vimeo.Player(playerRef.current, {
          id: videoId,
          responsive: true,
          controls: false,
          title: false,
          byline: false,
          portrait: false,
          autopause: false,
          background: false
        });

        player.ready().then(() => {
          setPlayerReady(true);
        });

        player.on('play', () => {
          setIsPlaying(true);
        });

        player.on('pause', () => {
          setIsPlaying(false);
        });

        player.on('ended', () => {
          setIsPlaying(false);
          // Remettre la vidéo au début pour revenir à l'état initial
          player.setCurrentTime(0);
        });

        playerRef.current.player = player;
      }
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [videoId]);

  const togglePlay = () => {
    if (playerRef.current?.player && playerReady) {
      if (isPlaying) {
        playerRef.current.player.pause();
      } else {
        playerRef.current.player.play();
      }
    }
  };

  return {
    playerRef,
    isPlaying,
    playerReady,
    togglePlay
  };
};
