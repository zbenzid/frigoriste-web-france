
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Database, Users, Eye, Settings, Mail } from 'lucide-react';

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-primary hover:text-secondary transition-colors mb-6"
            >
              <ArrowLeft size={20} className="mr-2" />
              Retour à l'accueil
            </Link>
            <h1 className="text-4xl font-bold text-primary mb-4">Politique de confidentialité</h1>
            <p className="text-gray-600">
              Protection et traitement de vos données personnelles sur LeFrigoriste.fr
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
            {/* Éditeur du site */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <Shield className="mr-3" size={24} />
                Éditeur du site
              </h2>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  L'éditeur du site <a href="https://lefrigoriste.fr" className="text-primary hover:text-secondary transition-colors">https://lefrigoriste.fr</a> est la société française <strong>Le Frigoriste</strong>, basée en France.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Siège social</h3>
                  <p className="text-gray-600">
                    10 rue Levassor<br />
                    78130 Les Mureaux<br />
                    France
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Informations de contact</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li><strong>Téléphone :</strong> <a href="tel:0185500284" className="text-primary hover:text-secondary transition-colors">01 85 50 02 84</a></li>
                    <li><strong>Email :</strong> <a href="mailto:contact@lefrigoriste.fr" className="text-primary hover:text-secondary transition-colors">contact@lefrigoriste.fr</a></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Hébergement */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">Hébergement</h2>
              <p className="text-gray-600">
                Le site <a href="https://lefrigoriste.fr" className="text-primary hover:text-secondary transition-colors">https://lefrigoriste.fr</a> est hébergé par la société française <strong>OVH</strong>, basée à Paris.
                <br />
                <a href="https://www.ovh.com/ma/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">https://www.ovh.com/ma/</a>
              </p>
            </section>

            {/* Types de données */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <Database className="mr-3" size={24} />
                Quel type de données récoltons-nous ?
              </h2>
              
              <div className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-primary p-4">
                  <h3 className="font-semibold text-primary mb-2">Données personnelles</h3>
                  <p className="text-gray-700">Nom, Prénom, Adresse postale complète, Téléphone et E-mail.</p>
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-accent p-4">
                  <h3 className="font-semibold text-accent mb-2">Données techniques</h3>
                  <p className="text-gray-700">Géolocalisation, IP, Cookie.</p>
                </div>
              </div>
            </section>

            {/* Pourquoi collectons-nous */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <Eye className="mr-3" size={24} />
                Pourquoi collectons-nous ces informations ?
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Données personnelles</h3>
                  <p className="text-gray-600">
                    Les informations Nom, Prénom, Adresse postale complète, Téléphone et E-mail sont nécessaires à la livraison des produits de notre catalogue et au bon suivi de votre commande.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Adresse IP</h3>
                  <p className="text-gray-600">
                    L'adresse IP de tous nos visiteurs est enregistrée afin de permettre l'identification d'éventuels utilisateurs malveillants et de fraudeurs.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Cookies</h3>
                  <p className="text-gray-600">
                    Des cookies sont installés sur votre ordinateur par le site web <a href="https://lefrigoriste.fr" className="text-primary hover:text-secondary transition-colors">https://lefrigoriste.fr</a> afin d'améliorer votre expérience d'utilisation sur celui-ci.
                    Par exemple, grâce aux Cookies, vous pourrez vous connecter à votre espace client sans avoir à saisir de nouveau votre mot de passe.
                    Ces cookies nous permettent également d'effectuer du ciblage publicitaire.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Géolocalisation</h3>
                  <p className="text-gray-600">
                    La géolocalisation est activée à des fins statistiques et d'études de marché.
                  </p>
                </div>
              </div>
            </section>

            {/* Qui a accès */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <Users className="mr-3" size={24} />
                Qui a accès à ces informations ?
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Personnel autorisé</h3>
                  <p className="text-gray-600">
                    Le personnel de <a href="https://lefrigoriste.fr" className="text-primary hover:text-secondary transition-colors">https://lefrigoriste.fr</a> a accès à vos informations dans une administration privée et sécurisée par compte utilisateur et mot de passe afin de préparer et de suivre vos commandes.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Sous-traitants</h3>
                  <p className="text-gray-600">
                    Les sous-traitants suivants ont également accès à notre administration pour des raisons de maintenance :
                  </p>
                  <ul className="mt-2 ml-4 text-gray-600">
                    <li>• L'agence web Energiedin basée au Maroc, à Agadir.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Outils tiers</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded">
                      <h4 className="font-medium text-gray-800">Google Analytics</h4>
                      <p className="text-sm text-gray-600">
                        Un outil de statistique installé sur notre site afin de nous permettre de connaître le nombre de visiteurs sur notre site web et d'autres informations utiles à la compréhension de notre marché et à la compréhension de l'utilisation de notre site web par nos visiteurs.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded">
                      <h4 className="font-medium text-gray-800">Google Adwords</h4>
                      <p className="text-sm text-gray-600">
                        Un outil publicitaire installé sur notre site afin de nous permettre de connaître les retours sur nos investissements publicitaires et d'effectuer de la publicité ciblée.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Protection de vos données</h3>
                  <p className="text-green-700">
                    Les autres informations (Nom, Prénom, Adresse postale complète, Téléphone et E-mail) ne sont pas partagées à des tiers.
                  </p>
                </div>
              </div>
            </section>

            {/* Droits */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <Settings className="mr-3" size={24} />
                Comment consulter mes données, les rectifier ou les supprimer ?
              </h2>
              
              <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Pour toute modification ou suppression de vos données, n'hésitez pas à nous contacter :
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:info@lefrigoriste.fr" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Mail size={20} className="mr-2" />
                    info@lefrigoriste.fr
                  </a>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    Formulaire de contact
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialite;
