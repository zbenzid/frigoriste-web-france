import React from 'react';
import { ArrowRight, Snowflake, Wind, Thermometer, Wrench, Clock, ShieldCheck, BarChart3, Check, Lightbulb, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Services Hero Banner */}
      <div className="relative bg-primary overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white font-semibold text-sm mb-4 backdrop-blur-sm">
            Expertise professionnelle
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Nos Services</h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
            Solutions complètes en réfrigération et climatisation pour tous vos besoins professionnels, avec une garantie d'intervention rapide 24h/7j.
          </p>
        </div>
      </div>

      {/* Section 1: Dépannage frigorifique */}
      <section id="depannage" className="py-20 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-1 rounded-full bg-emergency/10 text-emergency font-semibold text-sm mb-4">
                Service d'urgence 24/7
              </span>
              <h2 className="text-3xl font-bold text-primary mb-6">Dépannage frigorifique d'urgence</h2>
              <p className="text-gray-600 mb-8">
                Notre équipe de techniciens expérimentés intervient en urgence pour réparer tous types d'équipements frigorifiques professionnels. Nous comprenons que chaque minute compte pour votre activité, c'est pourquoi nous garantissons une intervention rapide dans toute l'Île-de-France, avec des délais réduits dans les Yvelines.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="shrink-0 bg-emergency/10 p-2 rounded-full mr-4">
                    <Clock className="h-5 w-5 text-emergency" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Disponibilité 24h/24 et 7j/7</h4>
                    <p className="text-gray-600">Nos techniciens sont disponibles à toute heure, même les week-ends et jours fériés.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="shrink-0 bg-emergency/10 p-2 rounded-full mr-4">
                    <Snowflake className="h-5 w-5 text-emergency" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Réparation tous équipements</h4>
                    <p className="text-gray-600">Chambres froides, vitrines réfrigérées, armoires, groupes frigorifiques, évaporateurs.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="shrink-0 bg-emergency/10 p-2 rounded-full mr-4">
                    <ShieldCheck className="h-5 w-5 text-emergency" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Garantie d'intervention rapide</h4>
                    <p className="text-gray-600">45 minutes dans les Yvelines, 1h à Paris et petite couronne, 2h pour la grande couronne.</p>
                  </div>
                </div>
              </div>
              
              <a href="tel:0185500284" className="btn-emergency inline-flex items-center">
                Dépannage urgent : 01 85 50 02 84 <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
            
            <div className="order-1 lg:order-2 overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1738&q=80" 
                alt="Technicien réparant un équipement frigorifique" 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Installation climatisation */}
      <section id="climatisation" className="py-20 bg-gray-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1631646100842-13a6506abdbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1664&q=80" 
                alt="Installation de système de climatisation" 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
            
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
                Confort thermique
              </span>
              <h2 className="text-3xl font-bold text-primary mb-6">Installation de climatisation professionnelle</h2>
              <p className="text-gray-600 mb-8">
                Nous concevons et installons des systèmes de climatisation adaptés à tous types de locaux professionnels. Notre expertise nous permet de vous proposer la solution la plus adaptée à vos besoins spécifiques et à votre budget, tout en respectant les normes environnementales en vigueur.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="shrink-0 bg-secondary/10 p-2 rounded-full mr-4">
                    <Wind className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Types de systèmes variés</h4>
                    <p className="text-gray-600">Monosplits, multisplits, gainables, systèmes VRV/VRF pour les grandes surfaces.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="shrink-0 bg-secondary/10 p-2 rounded-full mr-4">
                    <Lightbulb className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Entreprise certifiée</h4>
                    <p className="text-gray-600">Qualifications RGE, QualiPAC et manipulation des fluides frigorigènes (FR16-18).</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="shrink-0 bg-secondary/10 p-2 rounded-full mr-4">
                    <BarChart3 className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Économies d'énergie</h4>
                    <p className="text-gray-600">Solutions économes en énergie avec un excellent rapport performance/consommation.</p>
                  </div>
                </div>
              </div>
              
              <Link to="/contact" className="btn-secondary inline-flex items-center">
                Demander un devis gratuit <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Installation chambres froides */}
      <section id="chambres-froides" className="py-20 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                Conservation optimale
              </span>
              <h2 className="text-3xl font-bold text-primary mb-6">Installation de chambres froides sur mesure</h2>
              <p className="text-gray-600 mb-8">
                Nous concevons, fabriquons et installons des chambres froides adaptées à tous les secteurs d'activité. Qu'il s'agisse de température positive ou négative, nous vous proposons des solutions personnalisées qui répondent parfaitement à vos exigences en termes de stockage, de préservation et de logistique.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="shrink-0 bg-primary/10 p-2 rounded-full mr-4">
                    <Thermometer className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Types adaptés à vos besoins</h4>
                    <p className="text-gray-600">Chambres positives (0°C à +10°C) et négatives (jusqu'à -25°C) de toutes dimensions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="shrink-0 bg-primary/10 p-2 rounded-full mr-4">
                    <Wrench className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Installation clé en main</h4>
                    <p className="text-gray-600">Étude, conception, fabrication, installation et mise en service par nos équipes.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="shrink-0 bg-primary/10 p-2 rounded-full mr-4">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Respect des normes sanitaires</h4>
                    <p className="text-gray-600">Conformité HACCP, panneaux certifiés alimentaires, systèmes de sécurité aux normes.</p>
                  </div>
                </div>
              </div>
              
              <Link to="/contact" className="btn-primary inline-flex items-center">
                Étudier votre projet <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            
            <div className="order-1 lg:order-2 overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                alt="Chambre froide professionnelle" 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Maintenance préventive */}
      <section id="maintenance" className="py-20 bg-gray-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1616244013240-227c94d067e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                alt="Maintenance préventive d'équipement frigorifique" 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
            
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-maintenance/10 text-maintenance font-semibold text-sm mb-4">
                Prévention et longévité
              </span>
              <h2 className="text-3xl font-bold text-primary mb-6">Maintenance préventive</h2>
              <p className="text-gray-600 mb-8">
                Un entretien régulier de vos installations frigorifiques et de climatisation est essentiel pour garantir leur performance et leur longévité. Nos contrats de maintenance vous permettent d'éviter les pannes coûteuses et d'optimiser la consommation énergétique de vos équipements.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="shrink-0 bg-maintenance/10 p-2 rounded-full mr-4">
                    <Wrench className="h-5 w-5 text-maintenance" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Visites programmées</h4>
                    <p className="text-gray-600">Interventions trimestrielles, semestrielles ou annuelles selon vos besoins et vos équipements.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="shrink-0 bg-maintenance/10 p-2 rounded-full mr-4">
                    <Check className="h-5 w-5 text-maintenance" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Contrôles complets</h4>
                    <p className="text-gray-600">Vérification des pressions, nettoyage des filtres, contrôle d'étanchéité, mesures électriques.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="shrink-0 bg-maintenance/10 p-2 rounded-full mr-4">
                    <ShieldCheck className="h-5 w-5 text-maintenance" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Prolongation de la durée de vie</h4>
                    <p className="text-gray-600">Une maintenance régulière peut doubler la durée de vie de vos équipements frigorifiques.</p>
                  </div>
                </div>
              </div>
              
              <Link to="/contact" className="btn-maintenance inline-flex items-center">
                Souscrire à un contrat <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Un besoin spécifique ?</h2>
          <p className="text-white/90 max-w-3xl mx-auto mb-8">
            Nos experts sont à votre disposition pour étudier votre projet et vous proposer une solution adaptée à vos besoins et à votre budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0185500284" className="btn-emergency">
              <Phone size={20} className="mr-2" />
              Appel d'urgence : 01 85 50 02 84
            </a>
            <Link to="/contact" className="bg-white text-primary hover:bg-white/90 font-bold py-3 px-6 rounded-md shadow-md flex items-center justify-center gap-2 transition-all duration-300">
              Demander un devis
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
