
import React from 'react';

const AboutHero = () => {
  return (
    <section className="relative py-16 bg-primary text-white">
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      <div className="container-custom relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">Notre expertise, votre tranquillité d'esprit</h1>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
          LeFrigoriste.fr, l'expert en réfrigération et climatisation de confiance en Île-de-France depuis 2018.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
