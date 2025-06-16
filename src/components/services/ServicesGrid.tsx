
import React from 'react';
import { Snowflake, Wind, Hammer, Wrench, Clock, Shield, MapPin, Phone, ChefHat } from 'lucide-react';

const ServicesGrid = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dépannage d'urgence */}
          <div id="depannage" className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                <Snowflake className="w-8 h-8 text-red-600" />
              </div>
              <h2 className="font-bold font-montserrat text-2xl text-[#212121]">
                Dépannage frigorifique
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Service d'urgence 24h/24 et 7j/7 pour tous vos équipements frigorifiques en panne.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-600">
                <Clock className="w-5 h-5 text-primary mr-3" />
                45min Yvelines • 1h Paris • 2h Grande Couronne
              </li>
              <li className="flex items-center text-gray-600">
                <Shield className="w-5 h-5 text-primary mr-3" />
                Intervention garantie 24h/24
              </li>
              <li className="flex items-center text-gray-600">
                <Phone className="w-5 h-5 text-primary mr-3" />
                Hotline d'urgence dédiée
              </li>
            </ul>
          </div>

          {/* Installation climatisation */}
          <div id="climatisation" className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <Wind className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="font-bold font-montserrat text-2xl text-[#212121]">
                Installation climatisation
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Installation sur-mesure de systèmes de climatisation pour tous types de locaux professionnels.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-600">
                <Shield className="w-5 h-5 text-primary mr-3" />
                Certification RGE et QualiPAC
              </li>
              <li className="flex items-center text-gray-600">
                <Clock className="w-5 h-5 text-primary mr-3" />
                Devis sous 24h
              </li>
              <li className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 text-primary mr-3" />
                Déplacement gratuit en Île-de-France
              </li>
            </ul>
          </div>

          {/* Chambres froides */}
          <div id="chambres-froides" className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                <Hammer className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-bold font-montserrat text-2xl text-[#212121]">
                Installation chambres froides
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Conception et installation de chambres froides adaptées à vos besoins spécifiques.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-600">
                <Shield className="w-5 h-5 text-primary mr-3" />
                Solutions sur-mesure
              </li>
              <li className="flex items-center text-gray-600">
                <Clock className="w-5 h-5 text-primary mr-3" />
                Installation rapide
              </li>
              <li className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 text-primary mr-3" />
                Respect des normes alimentaires
              </li>
            </ul>
          </div>

          {/* Maintenance */}
          <div id="maintenance" className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <Wrench className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="font-bold font-montserrat text-2xl text-[#212121]">
                Maintenance préventive
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Contrats de maintenance pour garantir la longévité et l'efficacité de vos installations.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-600">
                <Shield className="w-5 h-5 text-primary mr-3" />
                3 formules : Essentiel, Confort, Premium
              </li>
              <li className="flex items-center text-gray-600">
                <Clock className="w-5 h-5 text-primary mr-3" />
                Visites préventives programmées
              </li>
              <li className="flex items-center text-gray-600">
                <Phone className="w-5 h-5 text-primary mr-3" />
                Priorité d'intervention
              </li>
            </ul>
          </div>

          {/* Nouveau service : Équipements de cuisine */}
          <div id="cuisine" className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                <ChefHat className="w-8 h-8 text-orange-600" />
              </div>
              <h2 className="font-bold font-montserrat text-2xl text-[#212121]">
                Matériels de cuisines / laveries professionnelles
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Vente, installation et maintenance d'équipements de cuisines et laveries professionnelles pour restaurants, traiteurs, boulangeries et hôtels.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <Shield className="w-5 h-5 text-primary mr-3" />
                  Fours professionnels et planchas
                </li>
                <li className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 text-primary mr-3" />
                  Lave-vaisselle industriels
                </li>
                <li className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 text-primary mr-3" />
                  Machines à café professionnelles
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <Shield className="w-5 h-5 text-primary mr-3" />
                  Équipements de laverie
                </li>
                <li className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 text-primary mr-3" />
                  Installation et mise en service
                </li>
                <li className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 text-primary mr-3" />
                  SAV et maintenance préventive
                </li>
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <p className="text-orange-800 font-medium text-sm">
                <strong>Cible :</strong> Restaurants, traiteurs, boulangeries, hôtels et tous professionnels de la restauration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
