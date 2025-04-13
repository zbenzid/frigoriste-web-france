
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, CheckCircle, AlertCircle, Building, Store, ShoppingCart } from 'lucide-react';

// Carte stylisée d'Île-de-France
const IleDeFranceMap = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto h-96 bg-gray-100 rounded-lg overflow-hidden shadow-md">
      <div className="absolute inset-0 bg-white">
        <svg viewBox="0 0 400 300" className="w-full h-full">
          {/* Fond de carte simplifié */}
          <path d="M100,150 L120,100 L180,80 L250,90 L300,130 L280,200 L220,220 L150,210 L100,150" 
                fill="#f1f1f1" stroke="#e0e0e0" strokeWidth="2" />
                
          {/* Grande couronne (bleu) */}
          <path d="M100,150 L120,100 L180,80 L250,90 L300,130 L280,200 L220,220 L150,210 L100,150" 
                fill="rgba(11, 83, 148, 0.3)" stroke="#0B5394" strokeWidth="2" />
                
          {/* Petite couronne (orange) */}
          <path d="M140,150 L160,120 L200,110 L230,120 L250,150 L230,180 L200,190 L160,180 L140,150" 
                fill="rgba(255, 153, 0, 0.6)" stroke="#FF9900" strokeWidth="2" />
                
          {/* Yvelines/zone prioritaire (rouge) */}
          <path d="M120,140 L140,120 L165,130 L170,150 L150,170 L130,160 L120,140" 
                fill="rgba(204, 0, 0, 0.6)" stroke="#CC0000" strokeWidth="2" />
                
          {/* Point pour Les Mureaux */}
          <circle cx="140" cy="145" r="5" fill="#CC0000" />
          <text x="120" y="130" fontSize="10" fill="#000000" fontWeight="bold">Les Mureaux</text>
          
          {/* Points pour d'autres villes importantes */}
          <circle cx="155" cy="160" r="3" fill="#CC0000" />
          <text x="160" y="160" fontSize="8" fill="#000000">Poissy</text>
          
          <circle cx="130" cy="160" r="3" fill="#CC0000" />
          <text x="105" y="165" fontSize="8" fill="#000000">Mantes-la-Jolie</text>
          
          <circle cx="170" cy="145" r="3" fill="#CC0000" />
          <text x="175" y="145" fontSize="8" fill="#000000">St-Germain</text>
          
          <circle cx="200" cy="150" r="4" fill="#FF9900" />
          <text x="205" y="150" fontSize="9" fill="#000000" fontWeight="bold">Paris</text>
          
          {/* Légende */}
          <rect x="10" y="10" width="15" height="15" fill="rgba(204, 0, 0, 0.6)" stroke="#CC0000" />
          <text x="30" y="22" fontSize="9" fill="#000000">Zone prioritaire (45min)</text>
          
          <rect x="10" y="30" width="15" height="15" fill="rgba(255, 153, 0, 0.6)" stroke="#FF9900" />
          <text x="30" y="42" fontSize="9" fill="#000000">Paris et petite couronne (1h)</text>
          
          <rect x="10" y="50" width="15" height="15" fill="rgba(11, 83, 148, 0.3)" stroke="#0B5394" />
          <text x="30" y="62" fontSize="9" fill="#000000">Grande couronne (2h)</text>
        </svg>
      </div>
    </div>
  );
};

// Zone d'éligibilité
const CodePostalChecker = () => {
  const [codePostal, setCodePostal] = useState('');
  const [result, setResult] = useState<{eligible: boolean, zone?: string, delai?: string} | null>(null);
  
  const checkEligibility = () => {
    // Vérification simple basée sur les 2 premiers chiffres du code postal
    const prefix = codePostal.substring(0, 2);
    
    if (prefix === '78') {
      setResult({eligible: true, zone: 'Zone prioritaire (Yvelines)', delai: '45 minutes maximum'});
    } else if (['75', '92', '93', '94'].includes(prefix)) {
      setResult({eligible: true, zone: 'Paris et petite couronne', delai: '1 heure maximum'});
    } else if (['77', '91', '95'].includes(prefix)) {
      setResult({eligible: true, zone: 'Grande couronne', delai: '2 heures maximum'});
    } else {
      setResult({eligible: false});
    }
  };
  
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold mb-4 text-primary">Vérifier votre éligibilité</h3>
        <p className="mb-4 text-gray-600">Entrez votre code postal pour connaître notre délai d'intervention dans votre secteur.</p>
        <div className="flex gap-2">
          <Input 
            type="text" 
            placeholder="Code postal" 
            value={codePostal} 
            onChange={(e) => setCodePostal(e.target.value)}
            maxLength={5}
            className="flex-1"
          />
          <Button onClick={checkEligibility}>Vérifier</Button>
        </div>
        
        {result && (
          <div className="mt-4 p-4 rounded-md border-2 bg-gray-50">
            {result.eligible ? (
              <>
                <div className="flex items-center mb-2 text-maintenance">
                  <CheckCircle className="mr-2" size={20} />
                  <span className="font-semibold">Zone couverte</span>
                </div>
                <p className="text-gray-700"><span className="font-medium">{result.zone}</span></p>
                <p className="text-gray-700 mt-2">Délai d'intervention : <span className="font-medium">{result.delai}</span></p>
              </>
            ) : (
              <div className="flex items-center text-emergency">
                <AlertCircle className="mr-2" size={20} />
                <span>Zone hors secteur d'intervention. Contactez-nous pour plus d'informations.</span>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const ZoneIntervention = () => {
  return (
    <div className="min-h-screen">
      {/* Bannière */}
      <section className="bg-primary bg-opacity-5 py-20 px-4">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Notre zone d'intervention en Île-de-France</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Service rapide et efficace dans toute la région parisienne
          </p>
        </div>
      </section>
      
      {/* Carte et explication */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Interventions rapides dans toute l'Île-de-France</h2>
              <p className="text-lg text-gray-600 mb-6">
                Notre entreprise située aux Mureaux (78) intervient dans toute l'Île-de-France avec des délais garantis selon votre localisation.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-emergency text-white flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <Clock size={16} />
                  </div>
                  <div>
                    <p className="font-semibold">Zone prioritaire (Yvelines)</p>
                    <p className="text-gray-600">Intervention en 45 minutes maximum</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <Clock size={16} />
                  </div>
                  <div>
                    <p className="font-semibold">Paris et petite couronne</p>
                    <p className="text-gray-600">Intervention en 1 heure maximum</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <Clock size={16} />
                  </div>
                  <div>
                    <p className="font-semibold">Grande couronne</p>
                    <p className="text-gray-600">Intervention en 2 heures maximum</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <IleDeFranceMap />
            </div>
          </div>
        </div>
      </section>
      
      {/* Secteurs prioritaires */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">Nos secteurs d'intervention prioritaires</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="flex items-center mb-4">
                <MapPin className="text-emergency mr-3" size={24} />
                <h3 className="text-xl font-bold">Les Mureaux et environs</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Notre siège social étant basé aux Mureaux, nous intervenons très rapidement dans cette ville et ses environs immédiats.
              </p>
              <div className="bg-emergency bg-opacity-5 border border-emergency border-opacity-20 rounded-md p-4">
                <p className="font-semibold text-emergency">Zone avec intervention garantie en 45 minutes maximum</p>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-4">Autres villes principales des Yvelines (78)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-2">
                    <MapPin className="text-emergency mr-2" size={18} />
                    <h4 className="font-semibold">Mantes-la-Jolie</h4>
                  </div>
                  <p className="text-sm text-gray-500">Moins de 45 minutes</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-2">
                    <MapPin className="text-emergency mr-2" size={18} />
                    <h4 className="font-semibold">Poissy</h4>
                  </div>
                  <p className="text-sm text-gray-500">Moins de 45 minutes</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-2">
                    <MapPin className="text-emergency mr-2" size={18} />
                    <h4 className="font-semibold">Saint-Germain-en-Laye</h4>
                  </div>
                  <p className="text-sm text-gray-500">Moins de 45 minutes</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-2">
                    <MapPin className="text-emergency mr-2" size={18} />
                    <h4 className="font-semibold">Versailles</h4>
                  </div>
                  <p className="text-sm text-gray-500">Moins de 45 minutes</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Départements */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Paris et départements d'Île-de-France</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="overflow-hidden">
              <div className="bg-primary h-2"></div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <MapPin className="mr-2" size={20} />
                  Paris (75)
                </h3>
                <p className="text-gray-600 mb-3">Tous les arrondissements</p>
                <div className="bg-orange-500 bg-opacity-10 border border-orange-500 border-opacity-20 rounded p-2 text-sm">
                  <Clock className="inline-block mr-1" size={14} />
                  <span className="text-orange-600 font-medium">Intervention en 1h maximum</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="bg-primary h-2"></div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <MapPin className="mr-2" size={20} />
                  Hauts-de-Seine (92)
                </h3>
                <p className="text-gray-600 mb-3">Nanterre, Boulogne-Billancourt, Colombes, Courbevoie, etc.</p>
                <div className="bg-orange-500 bg-opacity-10 border border-orange-500 border-opacity-20 rounded p-2 text-sm">
                  <Clock className="inline-block mr-1" size={14} />
                  <span className="text-orange-600 font-medium">Intervention en 1h maximum</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="bg-primary h-2"></div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <MapPin className="mr-2" size={20} />
                  Seine-Saint-Denis (93)
                </h3>
                <p className="text-gray-600 mb-3">Saint-Denis, Montreuil, Aubervilliers, Aulnay-sous-Bois, etc.</p>
                <div className="bg-orange-500 bg-opacity-10 border border-orange-500 border-opacity-20 rounded p-2 text-sm">
                  <Clock className="inline-block mr-1" size={14} />
                  <span className="text-orange-600 font-medium">Intervention en 1h maximum</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="bg-primary h-2"></div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <MapPin className="mr-2" size={20} />
                  Val-de-Marne (94)
                </h3>
                <p className="text-gray-600 mb-3">Créteil, Vitry-sur-Seine, Champigny-sur-Marne, etc.</p>
                <div className="bg-orange-500 bg-opacity-10 border border-orange-500 border-opacity-20 rounded p-2 text-sm">
                  <Clock className="inline-block mr-1" size={14} />
                  <span className="text-orange-600 font-medium">Intervention en 1h maximum</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="bg-primary h-2"></div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <MapPin className="mr-2" size={20} />
                  Val-d'Oise (95)
                </h3>
                <p className="text-gray-600 mb-3">Cergy, Argenteuil, Sarcelles, Garges-lès-Gonesse, etc.</p>
                <div className="bg-primary bg-opacity-10 border border-primary border-opacity-20 rounded p-2 text-sm">
                  <Clock className="inline-block mr-1" size={14} />
                  <span className="text-primary font-medium">Intervention en 2h maximum</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="bg-primary h-2"></div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <MapPin className="mr-2" size={20} />
                  Seine-et-Marne (77)
                </h3>
                <p className="text-gray-600 mb-3">Ouest du département : Chelles, Torcy, Lagny-sur-Marne, etc.</p>
                <div className="bg-primary bg-opacity-10 border border-primary border-opacity-20 rounded p-2 text-sm">
                  <Clock className="inline-block mr-1" size={14} />
                  <span className="text-primary font-medium">Intervention en 2h maximum</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="bg-primary h-2"></div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <MapPin className="mr-2" size={20} />
                  Essonne (91)
                </h3>
                <p className="text-gray-600 mb-3">Nord du département : Massy, Évry, Savigny-sur-Orge, etc.</p>
                <div className="bg-primary bg-opacity-10 border border-primary border-opacity-20 rounded p-2 text-sm">
                  <Clock className="inline-block mr-1" size={14} />
                  <span className="text-primary font-medium">Intervention en 2h maximum</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Informations sur interventions */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Informations sur nos interventions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center text-primary">
                <Building className="mr-2" size={24} />
                Types d'établissements couverts
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Store size={20} className="mr-3 text-secondary" />
                  <span>Commerces alimentaires (boulangeries, boucheries, poissonneries)</span>
                </li>
                <li className="flex items-center">
                  <Store size={20} className="mr-3 text-secondary" />
                  <span>Restaurants et établissements de restauration</span>
                </li>
                <li className="flex items-center">
                  <Building size={20} className="mr-3 text-secondary" />
                  <span>Hôtels et établissements d'hébergement</span>
                </li>
                <li className="flex items-center">
                  <ShoppingCart size={20} className="mr-3 text-secondary" />
                  <span>Supermarchés et grandes surfaces</span>
                </li>
                <li className="flex items-center">
                  <Building size={20} className="mr-3 text-secondary" />
                  <span>Laboratoires et industries alimentaires</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center text-primary">
                <CheckCircle className="mr-2" size={24} />
                Types d'équipements pris en charge
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-maintenance text-white flex items-center justify-center mt-1 mr-3 flex-shrink-0">✓</div>
                  <span>Chambres froides positives et négatives</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-maintenance text-white flex items-center justify-center mt-1 mr-3 flex-shrink-0">✓</div>
                  <span>Vitrines réfrigérées et meubles frigorifiques</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-maintenance text-white flex items-center justify-center mt-1 mr-3 flex-shrink-0">✓</div>
                  <span>Climatisations commerciales et professionnelles</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-maintenance text-white flex items-center justify-center mt-1 mr-3 flex-shrink-0">✓</div>
                  <span>Groupes frigorifiques et condenseurs</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-maintenance text-white flex items-center justify-center mt-1 mr-3 flex-shrink-0">✓</div>
                  <span>Armoires et cellules de refroidissement</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-bold mb-4 text-primary">Processus d'intervention selon l'urgence</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-emergency text-white flex items-center justify-center mr-4 mt-1 flex-shrink-0">1</div>
                <div>
                  <h4 className="font-bold mb-1">Appel d'urgence</h4>
                  <p className="text-gray-600">Contactez notre numéro d'urgence 24h/24 et 7j/7. Notre équipe qualifie immédiatement votre demande.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-emergency text-white flex items-center justify-center mr-4 mt-1 flex-shrink-0">2</div>
                <div>
                  <h4 className="font-bold mb-1">Déploiement rapide</h4>
                  <p className="text-gray-600">Notre technicien le plus proche de votre établissement est immédiatement dépêché avec le matériel adapté.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-emergency text-white flex items-center justify-center mr-4 mt-1 flex-shrink-0">3</div>
                <div>
                  <h4 className="font-bold mb-1">Diagnostic et intervention</h4>
                  <p className="text-gray-600">Diagnostic rapide de la panne et mise en œuvre immédiate des solutions pour préserver vos denrées.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-emergency text-white flex items-center justify-center mr-4 mt-1 flex-shrink-0">4</div>
                <div>
                  <h4 className="font-bold mb-1">Suivi et rapport</h4>
                  <p className="text-gray-600">Compte-rendu détaillé de l'intervention et recommandations pour éviter de futures pannes.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-primary bg-opacity-5 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-primary">Clients de référence dans différentes zones</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-3 rounded shadow-sm">
                <p className="font-semibold">Boulangerie Maison Laurent</p>
                <p className="text-gray-600">Les Mureaux (78)</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <p className="font-semibold">Restaurant L'Étoile du Goût</p>
                <p className="text-gray-600">Versailles (78)</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <p className="font-semibold">Supermarché FreshMarket</p>
                <p className="text-gray-600">Paris 15ème (75)</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <p className="font-semibold">Hôtel Le Régent</p>
                <p className="text-gray-600">Neuilly-sur-Seine (92)</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <p className="font-semibold">Boucherie Traditionnelle Martin</p>
                <p className="text-gray-600">Saint-Denis (93)</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <p className="font-semibold">Poissonnerie de la Mer</p>
                <p className="text-gray-600">Créteil (94)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vérificateur de code postal */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Vérifiez si vous êtes dans notre zone d'intervention</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Entrez votre code postal pour savoir si votre établissement est couvert par nos services et connaître le délai d'intervention garanti.
          </p>
          <CodePostalChecker />
        </div>
      </section>
      
      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Besoin d'une intervention rapide ?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Nos techniciens frigoristes sont disponibles 24h/24 et 7j/7 pour répondre à vos urgences dans toute l'Île-de-France.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0185500284" className="btn-emergency text-lg">
              <Phone size={24} className="mr-2" />
              URGENCE : 01 85 50 02 84
            </a>
            <a href="/contact" className="btn-secondary text-lg">
              Demander un devis
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZoneIntervention;
