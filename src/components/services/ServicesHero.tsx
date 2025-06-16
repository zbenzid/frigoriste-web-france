
import React from 'react';

const ServicesHero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-[40px]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-primary font-medium text-sm mb-4">
            NOS SERVICES
          </span>
          <h1 className="font-bold font-montserrat text-4xl md:text-5xl mb-6 text-[#212121]">
            Services complets en
            <span className="text-primary"> réfrigération</span>
          </h1>
          <p className="text-xl text-gray-600 font-opensans max-w-3xl mx-auto">
            Solutions professionnelles de dépannage, installation et maintenance pour tous vos équipements frigorifiques et de climatisation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
