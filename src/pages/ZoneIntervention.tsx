
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, CheckCircle, AlertCircle, Building, Store, ShoppingCart, Phone, Home } from 'lucide-react';

// Carte stylisée d'Île-de-France améliorée
const IleDeFranceMap = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto h-[500px] bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="absolute inset-0">
        <svg viewBox="0 0 400 400" className="w-full h-full" style={{ filter: 'drop-shadow(0px 3px 3px rgba(0,0,0,0.2))' }}>
          {/* Fond de carte avec contours des départements */}
          
          {/* Grande couronne (bleu) */}
          <g className="grande-couronne">
            {/* Val d'Oise (95) */}
            <path d="M110,90 L140,70 L180,80 L195,105 L180,120 L160,115 L140,125 L120,120 L110,90" 
                  fill="rgba(11, 83, 148, 0.2)" stroke="#0B5394" strokeWidth="1.5" />
            <text x="150" y="100" fontSize="12" fontFamily="Arial" fontWeight="bold" fill="#0B5394">95</text>
            
            {/* Seine-et-Marne (77) */}
            <path d="M210,105 L250,90 L280,110 L290,150 L270,190 L240,200 L220,180 L200,170 L190,140 L210,105" 
                  fill="rgba(11, 83, 148, 0.2)" stroke="#0B5394" strokeWidth="1.5" />
            <text x="245" y="150" fontSize="12" fontFamily="Arial" fontWeight="bold" fill="#0B5394">77</text>
            
            {/* Essonne (91) */}
            <path d="M130,190 L170,205 L200,170 L190,140 L170,150 L150,180 L130,190" 
                  fill="rgba(11, 83, 148, 0.2)" stroke="#0B5394" strokeWidth="1.5" />
            <text x="170" y="180" fontSize="12" fontFamily="Arial" fontWeight="bold" fill="#0B5394">91</text>
            
            {/* Yvelines ouest (78) - hors zone prioritaire */}
            <path d="M70,120 L100,160 L120,170 L125,145 L120,120 L110,90" 
                  fill="rgba(11, 83, 148, 0.2)" stroke="#0B5394" strokeWidth="1.5" />
          </g>
          
          {/* Petite couronne (orange) */}
          <g className="petite-couronne">
            {/* Paris (75) */}
            <path d="M170,125 L190,125 L190,145 L170,145 L170,125" 
                  fill="rgba(255, 153, 0, 0.4)" stroke="#FF9900" strokeWidth="1.5" />
            <text x="180" y="138" fontSize="11" fontFamily="Arial" fontWeight="bold" fill="#FF9900">75</text>
            
            {/* Hauts-de-Seine (92) */}
            <path d="M155,115 L170,125 L170,145 L155,155 L150,135 L155,115" 
                  fill="rgba(255, 153, 0, 0.4)" stroke="#FF9900" strokeWidth="1.5" />
            <text x="158" y="138" fontSize="10" fontFamily="Arial" fontWeight="bold" fill="#FF9900">92</text>
            
            {/* Seine-Saint-Denis (93) */}
            <path d="M190,125 L210,115 L210,135 L195,150 L190,145 L190,125" 
                  fill="rgba(255, 153, 0, 0.4)" stroke="#FF9900" strokeWidth="1.5" />
            <text x="198" y="135" fontSize="10" fontFamily="Arial" fontWeight="bold" fill="#FF9900">93</text>
            
            {/* Val-de-Marne (94) */}
            <path d="M190,145 L195,150 L210,155 L205,170 L185,165 L170,145 L190,145" 
                  fill="rgba(255, 153, 0, 0.4)" stroke="#FF9900" strokeWidth="1.5" />
            <text x="190" y="158" fontSize="10" fontFamily="Arial" fontWeight="bold" fill="#FF9900">94</text>
          </g>
          
          {/* Yvelines/zone prioritaire (rouge) */}
          <path d="M125,115 L155,115 L150,135 L155,155 L150,180 L130,190 L100,160 L120,170 L125,145 L125,115" 
                fill="rgba(204, 0, 0, 0.3)" stroke="#CC0000" strokeWidth="1.5" />
          <text x="135" y="150" fontSize="12" fontFamily="Arial" fontWeight="bold" fill="#CC0000">78</text>
          
          {/* Villes principales */}
          {/* Les Mureaux (siège) */}
          <g>
            <circle cx="130" cy="135" r="4" fill="#CC0000" />
            <Home cx="130" cy="135" width="8" height="8" fill="#FFFFFF" stroke="#FFFFFF" />
            <text x="136" y="139" fontSize="10" fontFamily="Arial" fontWeight="bold" fill="#000000">Les Mureaux</text>
          </g>
          
          {/* Autres villes des Yvelines */}
          <g>
            <circle cx="120" cy="155" r="3" fill="#CC0000" />
            <text x="124" y="155" fontSize="9" fontFamily="Arial" fill="#000000">Mantes-la-Jolie</text>
          </g>
          
          <g>
            <circle cx="140" cy="145" r="3" fill="#CC0000" />
            <text x="144" y="145" fontSize="9" fontFamily="Arial" fill="#000000">Poissy</text>
          </g>
          
          <g>
            <circle cx="145" cy="135" r="3" fill="#CC0000" />
            <text x="149" y="135" fontSize="9" fontFamily="Arial" fill="#000000">St-Germain</text>
          </g>
          
          <g>
            <circle cx="145" cy="160" r="3" fill="#CC0000" />
            <text x="149" y="160" fontSize="9" fontFamily="Arial" fill="#000000">Versailles</text>
          </g>
          
          {/* Paris */}
          <g>
            <circle cx="180" cy="138" r="3" fill="#FF9900" />
            <text x="165" y="130" fontSize="9" fontFamily="Arial" fontWeight="bold" fill="#000000">Paris</text>
          </g>
          
          {/* Autres villes importantes */}
          <g>
            <circle cx="155" cy="125" r="2" fill="#FF9900" />
            <text x="140" y="125" fontSize="8" fontFamily="Arial" fill="#333333">Nanterre</text>
          </g>
          
          <g>
            <circle cx="200" cy="130" r="2" fill="#FF9900" />
            <text x="203" y="130" fontSize="8" fontFamily="Arial" fill="#333333">St-Denis</text>
          </g>
          
          <g>
            <circle cx="195" cy="160" r="2" fill="#FF9900" />
            <text x="198" y="160" fontSize="8" fontFamily="Arial" fill="#333333">Créteil</text>
          </g>
          
          <g>
            <circle cx="160" cy="90" r="2" fill="#0B5394" />
            <text x="163" y="90" fontSize="8" fontFamily="Arial" fill="#333333">Cergy</text>
          </g>
          
          <g>
            <circle cx="230" cy="140" r="2" fill="#0B5394" />
            <text x="233" y="140" fontSize="8" fontFamily="Arial" fill="#333333">Meaux</text>
          </g>
          
          <g>
            <circle cx="155" cy="190" r="2" fill="#0B5394" />
            <text x="158" y="190" fontSize="8" fontFamily="Arial" fill="#333333">Évry</text>
          </g>
          
          {/* Légende */}
          <g transform="translate(20, 240)">
            <rect x="0" y="0" width="15" height="15" fill="rgba(204, 0, 0, 0.3)" stroke="#CC0000" strokeWidth="1.5" rx="2" />
            <text x="25" y="12" fontSize="10" fontFamily="Arial" fill="#000000">Zone prioritaire (45min)</text>
            
            <rect x="0" y="25" width="15" height="15" fill="rgba(255, 153, 0, 0.4)" stroke="#FF9900" strokeWidth="1.5" rx="2" />
            <text x="25" y="37" fontSize="10" fontFamily="Arial" fill="#000000">Paris et petite couronne (1h)</text>
            
            <rect x="0" y="50" width="15" height="15" fill="rgba(11, 83, 148, 0.2)" stroke="#0B5394" strokeWidth="1.5" rx="2" />
            <text x="25" y="62" fontSize="10" fontFamily="Arial" fill="#000000">Grande couronne (2h)</text>
            
            <g transform="translate(0, 80)">
              <circle cx="7.5" cy="7.5" r="4" fill="#CC0000" />
              <Home cx="7.5" cy="7.5" width="8" height="8" fill="#FFFFFF" stroke="#FFFFFF" />
              <text x="25" y="12" fontSize="10" fontFamily="Arial" fill="#000000">Siège social (Les Mureaux)</text>
            </g>
          </g>
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
              <div className="bg-emergency bg-opacity-5 border border-emergency border-opacity-20 rounded-md p-2 text-sm">
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
