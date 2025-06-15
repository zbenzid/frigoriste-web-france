
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ResourcePreloader = () => {
  return (
    <Helmet>
      {/* Preload des fonts critiques */}
      <link 
        rel="preload" 
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" 
        as="style" 
      />
      <link 
        rel="preload" 
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" 
        as="style" 
      />
      
      {/* Load the actual stylesheets */}
      <link 
        rel="stylesheet" 
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" 
      />
      <link 
        rel="stylesheet" 
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" 
      />
      
      {/* DNS prefetch pour les domaines externes */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//player.vimeo.com" />
      
      {/* Preconnect pour les ressources critiques */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Critical CSS hint */}
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      
      {/* Resource hints pour l'optimisation */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      
      {/* Performance meta tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="msapplication-tap-highlight" content="no" />
    </Helmet>
  );
};

export default ResourcePreloader;
