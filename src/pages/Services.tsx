import React from 'react';
import { ArrowRight, Snowflake, Wind, Thermometer, Wrench, Clock, ShieldCheck, BarChart3, Check, Lightbulb, Phone, Info, Award, Shield, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
const Services = () => {
  return <div className="min-h-screen">
      {/* Services Hero Banner - Modernized with glassmorphism and rounded corners */}
      <div className="relative bg-primary overflow-hidden py-20 md:py-32 md:mx-8 lg:mx-12 xl:mx-20 md:my-6 md:rounded-2xl">
        {/* Background image with proper overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-80 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center mix-blend-multiply"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-primary/20 blur-3xl"></div>
        
        <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white font-semibold text-sm mb-6 backdrop-blur-sm border border-white/10">
            Expertise professionnelle
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">Nos Services</h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8 font-opensans">
            Solutions complètes en réfrigération et climatisation pour tous vos besoins professionnels, avec une garantie d'intervention rapide 24h/7j.
          </p>
          
          {/* Premium call-to-action */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a href="tel:0185500284" className="group relative overflow-hidden rounded-full bg-emergency hover:bg-emergency/90 text-lg font-bold py-3 px-6 text-white shadow-lg transition-all duration-300 hover:shadow-emergency/30 hover:shadow-xl">
              <span className="relative flex items-center justify-center">
                <Phone size={20} className="mr-2" />
                01 85 50 02 84
              </span>
            </a>
            <Link to="/contact" className="group relative overflow-hidden rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-lg font-bold py-3 px-6 text-white shadow-lg transition-all duration-300 hover:shadow-white/20 hover:shadow-xl border border-white/20">
              <span className="relative flex items-center justify-center">
                Demander un devis
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
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
              
              <div className="flex flex-wrap gap-4">
                <a href="tel:0185500284" className="btn-emergency inline-flex items-center">
                  Dépannage urgent : 01 85 50 02 84 <ArrowRight size={18} className="ml-2" />
                </a>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="info" className="flex items-center">
                      <Info size={18} className="mr-1" />
                      En savoir plus
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-primary">Dépannage frigorifique d'urgence</DialogTitle>
                      <DialogDescription className="text-gray-600 mt-2 text-base">
                        Notre service de dépannage d'urgence est disponible 24h/24 et 7j/7.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4 space-y-4">
                      <div className="border-l-4 border-emergency pl-4 py-2">
                        <h4 className="font-bold text-gray-800 mb-1">Équipements pris en charge</h4>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          <li>Chambres froides positives et négatives</li>
                          <li>Vitrines réfrigérées et comptoirs frigorifiques</li>
                          <li>Armoires et meubles frigorifiques</li>
                          <li>Groupes frigorifiques et centrales de production de froid</li>
                          <li>Évaporateurs et condenseurs</li>
                          <li>Systèmes de climatisation commerciale</li>
                        </ul>
                      </div>
                      <div className="border-l-4 border-emergency pl-4 py-2">
                        <h4 className="font-bold text-gray-800 mb-1">Notre processus d'intervention</h4>
                        <ol className="list-decimal pl-5 text-gray-600 space-y-1">
                          <li>Réception de votre appel et qualification de l'urgence</li>
                          <li>Déplacement d'un technicien qualifié dans les délais garantis</li>
                          <li>Diagnostic précis du problème sur site</li>
                          <li>Proposition de solution avec devis si nécessaire</li>
                          <li>Réparation immédiate quand c'est possible</li>
                          <li>Suivi après intervention</li>
                        </ol>
                      </div>
                      <div className="border-l-4 border-emergency pl-4 py-2">
                        <h4 className="font-bold text-gray-800 mb-1">Tarification transparente</h4>
                        <p className="text-gray-600">
                          Notre tarification est claire et sans surprises. Le coût de l'intervention comprend un forfait de déplacement selon la zone, la main d'œuvre calculée par heure entamée, et le coût des pièces remplacées le cas échéant. Un devis vous est systématiquement proposé avant tout remplacement onéreux.
                        </p>
                      </div>
                      <div className="bg-emergency/10 p-4 rounded-md">
                        <h4 className="font-bold text-emergency mb-1">Numéro d'urgence</h4>
                        <p className="text-gray-800 font-semibold text-lg">01 85 50 02 84</p>
                        <p className="text-gray-600 text-sm">Disponible 24h/24 et 7j/7, y compris jours fériés</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 overflow-hidden rounded-2xl shadow-xl">
              <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1738&q=80" alt="Technicien réparant un équipement frigorifique" className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Installation climatisation */}
      <section id="climatisation" className="py-20 bg-gray-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img src="https://images.unsplash.com/photo-1631646100842-13a6506abdbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1664&q=80" alt="Installation de système de climatisation" className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
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
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-secondary inline-flex items-center">
                  Demander un devis gratuit <ArrowRight size={18} className="ml-2" />
                </Link>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="info" className="flex items-center">
                      <Info size={18} className="mr-1" />
                      En savoir plus
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-primary">Installation de climatisation professionnelle</DialogTitle>
                      <DialogDescription className="text-gray-600 mt-2 text-base">
                        Des solutions complètes pour le confort thermique de vos locaux professionnels.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4 space-y-4">
                      <div className="border-l-4 border-secondary pl-4 py-2">
                        <h4 className="font-bold text-gray-800 mb-1">Nos solutions de climatisation</h4>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          <li><strong>Monosplit :</strong> Solution idéale pour les petites surfaces, un seul diffuseur intérieur relié à une unité extérieure</li>
                          <li><strong>Multisplit :</strong> Système avec plusieurs unités intérieures reliées à une seule unité extérieure, parfait pour climatiser plusieurs pièces</li>
                          <li><strong>Gainable :</strong> Climatisation discrète intégrée dans un faux plafond, diffusion par des bouches d'aération</li>
                          <li><strong>VRV/VRF :</strong> Systèmes à débit de réfrigérant variable pour les grandes surfaces commerciales avec gestion de zones indépendantes</li>
                          <li><strong>Plafonniers/Cassettes :</strong> Unités installées au plafond pour une diffusion optimale dans les grands espaces</li>
                        </ul>
                      </div>
                      <div className="border-l-4 border-secondary pl-4 py-2">
                        <h4 className="font-bold text-gray-800 mb-1">Nos marques partenaires</h4>
                        <p className="text-gray-600 mb-2">
                          Nous travaillons exclusivement avec des fabricants reconnus pour leur fiabilité et leur efficacité énergétique :
                        </p>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-700">
                          <li className="bg-gray-100 p-2 rounded">Daikin</li>
                          <li className="bg-gray-100 p-2 rounded">Mitsubishi Electric</li>
                          <li className="bg-gray-100 p-2 rounded">Toshiba</li>
                          <li className="bg-gray-100 p-2 rounded">LG</li>
                          <li className="bg-gray-100 p-2 rounded">Panasonic</li>
                          <li className="bg-gray-100 p-2 rounded">Atlantic</li>
                        </ul>
                      </div>
                      <div className="border-l-4 border-secondary pl-4 py-2">
                        <h4 className="font-bold text-gray-800 mb-1">Processus d'installation</h4>
                        <ol className="list-decimal pl-5 text-gray-600 space-y-1">
                          <li>Étude thermique et bilan frigorifique de vos locaux</li>
                          <li>Proposition de solutions adaptées avec devis détaillé</li>
                          <li>Planification de l'installation à votre convenance</li>
                          <li>Installation par nos techniciens certifiés</li>
                          <li>Mise en service et réglages optimaux</li>
                          <li>Formation à l'utilisation du système</li>
                          <li>SAV et maintenance programmée</li>
                        </ol>
                      </div>
                      <div className="bg-secondary/10 p-4 rounded-md">
                        <h4 className="font-bold text-secondary mb-1">Aides financières disponibles</h4>
                        <p className="text-gray-600">
                          En tant qu'entreprise certifiée RGE (Reconnu Garant de l'Environnement), nos installations peuvent être éligibles à diverses aides financières et crédits d'impôt pour les professionnels. Nous vous accompagnons dans vos démarches pour en bénéficier.
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
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
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary inline-flex items-center">
                  Étudier votre projet <ArrowRight size={18} className="ml-2" />
                </Link>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="info" className="flex items-center">
                      <Info size={18} className="mr-1" />
                      En savoir plus
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-primary">Chambres froides sur mesure</DialogTitle>
                      <DialogDescription className="text-gray-600 mt-2 text-base">
                        Des solutions professionnelles pour la conservation optimale de vos produits.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4 space-y-4">
                      <div className="border-l-4 border-primary pl-4 py-2">
                        <h4 className="font-bold text-gray-800 mb-1">Types de chambres froides</h4>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          <li><strong>Chambres froides positives :</strong> Température de 0°C à +10°C, idéales pour les fruits, légumes, produits laitiers, et préparations cuisinées</li>
                          <li><strong>Chambres froides négatives :</strong> Température jusqu'à -25°C, parfaites pour la surgélation et le stockage longue durée</li>
                          <li><strong>Chambres bi-température :</strong> Combinaison de zones positives et négatives pour optimiser votre espace</li>
                          <li><strong>Tunnels de refroidissement rapide :</strong> Pour abaisser rapidement la température des produits chauds</li>
                          <li><strong>Chambres de maturation :</strong> Pour le contrôle précis de l'humidité et de la température (viande, fromage)</li>
                        </ul>
                      </div>
                      <div className="border-l-4 border-primary pl-4 py-2">
                        <h4 className="font-bold text-gray-800 mb-1">Caractéristiques et options</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                          <div>
                            <h5 className="font-semibold text-gray-700 mb-1">Structure et isolation</h5>
                            <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                              <li>Panneaux isothermes d'épaisseur 60 à 120 mm</li>
                              <li>Isolation en polyuréthane haute densité</li>
                              <li>Revêtements en tôle laquée ou inox alimentaire</li>
                              <li>Sol antidérapant renforcé pour trafic intense</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-700 mb-1">Équipements et accessoires</h5>
                            <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                              <li>Portes pivotantes ou coulissantes isolées</li>
                              <li>Rideaux à lanières pour limiter les pertes de froid</li>
                              <li>Étagères en aluminium ou inox modulables</li>
                              <li>Groupes frigorifiques adaptés à votre usage</li>
                              <li>Systèmes d'alarme et de surveillance</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="border-l-4 border-primary pl-4 py-2">
                        <h4 className="font-bold text-gray-800 mb-1">Secteurs d'application</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                          <div className="bg-gray-100 p-2 rounded text-center">
                            <p className="font-medium text-gray-700">Restauration</p>
                          </div>
                          <div className="bg-gray-100 p-2 rounded text-center">
                            <p className="font-medium text-gray-700">Boulangerie</p>
                          </div>
                          <div className="bg-gray-100 p-2 rounded text-center">
                            <p className="font-medium text-gray-700">Pâtisserie</p>
                          </div>
                          <div className="bg-gray-100 p-2 rounded text-center">
                            <p className="font-medium text-gray-700">Boucherie</p>
                          </div>
                          <div className="bg-gray-100 p-2 rounded text-center">
                            <p className="font-medium text-gray-700">Traiteur</p>
                          </div>
                          <div className="bg-gray-100 p-2 rounded text-center">
                            <p className="font-medium text-gray-700">GMS</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-primary/10 p-4 rounded-md">
                        <h4 className="font-bold text-primary mb-1">Notre engagement qualité</h4>
                        <p className="text-gray-600">
                          Nous vous garantissons une installation conforme aux normes sanitaires en vigueur (HACCP, NF, CE) et aux exigences spécifiques de votre secteur d'activité. Notre équipe vous accompagne de l'étude à la mise en service, avec un suivi et une maintenance assurés par nos techniciens formés et certifiés.
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 overflow-hidden rounded-2xl shadow-xl">
              <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" alt="Chambre froide professionnelle" className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Maintenance préventive */}
      <section id="maintenance" className="py-20 bg-gray-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img src="https://images.unsplash.com/photo-1616244013240-227c94d067e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" alt="Maintenance préventive d'équipement frigorifique" className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
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
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-maintenance inline-flex items-center">
                  Souscrire à un contrat <ArrowRight size={18} className="ml-2" />
                </Link>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="info" className="flex items-center">
                      <Info size={18} className="mr-1" />
                      En savoir plus
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-primary">Maintenance préventive</DialogTitle>
                      <DialogDescription className="text-gray-600 mt-2 text-base">
                        Préservez la performance et prolongez la durée de vie de vos installations frigorifiques.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4 space-y-4">
                      <div className="border-l-4 border-maintenance pl-4 py-2">
                        <h4 className="font-bold text-gray-800 mb-1">Pourquoi la maintenance préventive est essentielle</h4>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          <li>Réduction des risques de pannes et d'arrêts d'exploitation coûteux</li>
                          <li>Optimisation de la consommation énergétique (économies jusqu'à 30%)</li>
                          <li>Prolongation de la durée de vie des équipements (jusqu'à +100%)</li>
                          <li>Garantie de la chaîne du froid et respect des normes sanitaires</li>
                          <li>Amélioration de la performance et du rendement des installations</li>
                          <li>Prévention des interventions d'urgence plus onéreuses</li>
                        </ul>
                      </div>
                      <div className="border-l-4 border-maintenance pl-4 py-2">
                        <h4 className="font-bold text-gray-800 mb-1">Notre offre de contrats de maintenance</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h5 className="font-bold text-maintenance text-center mb-2">Essentiel</h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>1 visite annuelle</li>
                              <li>Vérification générale</li>
                              <li>Contrôle d'étanchéité</li>
                              <li>Rapport d'intervention</li>
                              <li>-10% sur pièces détachées</li>
                            </ul>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h5 className="font-bold text-maintenance text-center mb-2">Confort</h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>2 visites annuelles</li>
                              <li>Vérification complète</li>
                              <li>Nettoyage approfondi</li>
                              <li>Contrôle d'étanchéité</li>
                              <li>Rapport détaillé</li>
                              <li>-15% sur pièces détachées</li>
                              <li>Délai d'intervention prioritaire</li>
                            </ul>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h5 className="font-bold text-maintenance text-center mb-2">Premium</h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>4 visites annuelles</li>
                              <li>Maintenance complète</li>
                              <li>Remplacement filtres inclus</li>
                              <li>Contrôles approfondis</li>
                              <li>Télésurveillance possible</li>
                              <li>-20% sur pièces détachées</li>
                              <li>Intervention sous 4h garantie</li>
                              <li>Assistance téléphonique 24/7</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="border-l-4 border-maintenance pl-4 py-2">
                        <h4 className="font-bold text-gray-800 mb-1">Opérations réalisées lors d'une maintenance</h4>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          <li>Contrôle des pressions du circuit frigorifique</li>
                          <li>Vérification de l'étanchéité et recherche de fuites</li>
                          <li>Nettoyage des condenseurs et évaporateurs</li>
                          <li>Vérification des écoulements de condensats</li>
                          <li>Contrôle des organes de sécurité et de régulation</li>
                          <li>Mesures électriques et contrôle des connections</li>
                          <li>Relevé des températures et vérification des performances</li>
                          <li>Remplacement ou nettoyage des filtres</li>
                        </ul>
                      </div>
                      <div className="bg-maintenance/10 p-4 rounded-md">
                        <h4 className="font-bold text-maintenance mb-1">Obligations légales</h4>
                        <p className="text-gray-600">
                          La réglementation impose aux détenteurs d'équipements contenant des fluides frigorigènes un contrôle d'étanchéité périodique. La fréquence dépend de la charge en fluide de l'installation. Nos contrats de maintenance vous garantissent le respect de ces obligations légales et la fourniture des attestations nécessaires.
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Replaced with the exact same section from the homepage */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-100/30 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-50/40 blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 rounded-full bg-blue-50 text-primary font-medium text-sm mb-2">
                À VOTRE SERVICE 24/7
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Besoin d'une intervention ou d'un devis ?</h2>
              <p className="text-gray-600 text-lg">
                Notre équipe de techniciens certifiés est disponible pour répondre à toutes vos urgences frigorifiques et besoins en climatisation dans toute l'Île-de-France.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                    <Clock size={20} strokeWidth={1.5} />
                  </div>
                  <span className="text-lg">Intervention rapide garantie : 45 min Yvelines • 1h Paris</span>
                </li>
                <li className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                    <Award size={20} strokeWidth={1.5} />
                  </div>
                  <span className="text-lg">Techniciens certifiés RGE et QualiPAC</span>
                </li>
                <li className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                    <Shield size={20} strokeWidth={1.5} />
                  </div>
                  <span className="text-lg">Service client noté ★ 4.9/5 sur Google</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100 relative px-[20px] py-[20px]">
              <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-secondary/10 blur-xl"></div>
              <div className="absolute -bottom-5 -left-5 w-24 h-24 rounded-full bg-primary/10 blur-xl"></div>
              
              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-800 mb-8">Comment pouvons-nous vous aider ?</h3>
                
                <div className="space-y-6">
                  <div className="p-6 border border-gray-100 rounded-lg hover:border-primary transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-emergency/10 text-emergency group-hover:bg-emergency group-hover:text-white transition-all duration-300">
                        <Phone size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1 text-lg">Besoin d'une intervention urgente ?</h4>
                        <p className="text-gray-600 mb-4">Notre équipe est disponible 24/7 pour toutes vos urgences</p>
                        <Link to="tel:0185500284" className="btn-emergency inline-flex">
                          <Phone size={20} className="mr-2" />
                          Appel d'urgence
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 border border-gray-100 rounded-lg hover:border-primary transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Mail size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-800 mb-1">Besoin d'un devis ou d'informations ?</h4>
                        <p className="text-gray-600 mb-4">Contactez-nous pour une réponse sous 24h</p>
                        <Link to="/contact" className="btn-primary inline-flex">
                          <Mail size={20} className="mr-2" />
                          Nous contacter
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Services;