
import { useRef, useEffect, useState } from 'react';

export const useVimeoPlayer = (videoId: number = 1093559944) => {
  const playerRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);

  useEffect(() => {
    if (!playerRef.current) return;

    // Defer Vimeo loading until the player container is visible
    const container = playerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
          loadVimeo();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(container);

    function loadVimeo() {
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
            player.setCurrentTime(0);
          });

          playerRef.current.player = player;
        }
      };
      document.head.appendChild(script);
    }

    return () => {
      observer.disconnect();
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
