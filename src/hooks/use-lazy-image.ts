
import { useState, useEffect, useRef, useCallback } from 'react';

interface UseLazyImageProps {
  src: string;
  placeholder?: string;
  threshold?: number;
}

interface UseLazyImageReturn {
  imgRef: React.RefObject<HTMLImageElement>;
  isLoaded: boolean;
  isInView: boolean;
  currentSrc: string;
}

export const useLazyImage = ({ 
  src, 
  placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E",
  threshold = 0.1 
}: UseLazyImageProps): UseLazyImageReturn => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(placeholder);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  useEffect(() => {
    if (isInView && !isLoaded) {
      const img = new Image();
      img.onload = () => {
        setCurrentSrc(src);
        setIsLoaded(true);
      };
      img.onerror = () => {
        console.warn(`Failed to load image: ${src}`);
      };
      img.src = src;
    }
  }, [isInView, src, isLoaded]);

  return { imgRef, isLoaded, isInView, currentSrc };
};
