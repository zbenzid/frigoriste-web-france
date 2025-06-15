
import React from 'react';
import { useLazyImage } from '@/hooks/use-lazy-image';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholder?: string;
  threshold?: number;
  loadingClassName?: string;
  loadedClassName?: string;
}

const OptimizedImage = React.forwardRef<HTMLImageElement, OptimizedImageProps>(
  ({ 
    src, 
    alt, 
    className,
    placeholder,
    threshold = 0.1,
    loadingClassName = "blur-sm",
    loadedClassName = "blur-0",
    ...props 
  }, ref) => {
    const { imgRef, isLoaded, currentSrc } = useLazyImage({ 
      src, 
      placeholder, 
      threshold 
    });

    return (
      <img
        ref={ref || imgRef}
        src={currentSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={cn(
          "transition-all duration-300",
          isLoaded ? loadedClassName : loadingClassName,
          className
        )}
        {...props}
      />
    );
  }
);

OptimizedImage.displayName = "OptimizedImage";

export default OptimizedImage;
