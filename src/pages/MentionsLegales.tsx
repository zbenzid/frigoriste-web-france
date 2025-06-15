
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building, User, MapPin, Phone, Mail, Globe, Clock, Cookie } from 'lucide-react';

const MentionsLegales = () => {
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
            <h1 className="text-4xl font-bold text-primary mb-4">Mentions légales</h1>
            <p className="text-gray-600">
              Informations légales relatives au site LeFrigoriste.fr
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
            {/* Informations sur l'entreprise */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <Building className="mr-3" size={24} />
                Informations sur l'entreprise
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Raison sociale</h3>
                    <p className="text-gray-600">Le Frigoriste</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Statut juridique et capital social</h3>
                    <p className="text-gray-600">SAS Société par actions simplifiée</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">SIRET</h3>
                    <p className="text-gray-600">88085026800058</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Code APE/NAF</h3>
                    <p className="text-gray-600">Travaux d'installation d'eau et de gaz en tous locaux (4322A)</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">TVA intra-communautaire</h3>
                    <p className="text-gray-600">FR 88085026800058</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Responsable */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <User className="mr-3" size={24} />
                Responsable
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Nom</h3>
                  <p className="text-gray-600">MAACH</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Prénom</h3>
                  <p className="text-gray-600">Hassan</p>
                </div>
              </div>
            </section>

            {/* Adresse et contact */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <MapPin className="mr-3" size={24} />
                Siège social et contact
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      10 rue Levassor<br />
                      78130 Les Mureaux<br />
                      FRANCE
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1 flex items-center">
                      <Phone size={16} className="mr-2" />
                      Téléphone
                    </h3>
                    <a href="tel:0185500284" className="text-primary hover:text-secondary transition-colors">
                      01 85 50 02 84
                    </a>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1 flex items-center">
                      <Mail size={16} className="mr-2" />
                      E-mail
                    </h3>
                    <a href="mailto:contact@lefrigoriste.fr" className="text-primary hover:text-secondary transition-colors">
                      contact@lefrigoriste.fr
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1 flex items-center">
                      <Globe size={16} className="mr-2" />
                      Site web
                    </h3>
                    <a href="https://lefrigoriste.fr" className="text-primary hover:text-secondary transition-colors">
                      https://lefrigoriste.fr
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1 flex items-center">
                      <Clock size={16} className="mr-2" />
                      Horaires d'ouverture
                    </h3>
                    <p className="text-gray-600">8h à 12h et 14h à 18h</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Hébergement */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">Hébergement</h2>
              <p className="text-gray-600">
                Ce site est hébergé par Lovable (anciennement GPT Engineer), une plateforme de développement d'applications web.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <Cookie className="mr-3" size={24} />
                Utilisation des cookies
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Notre site utilise des cookies pour améliorer votre expérience de navigation et analyser notre trafic. 
                  Nous utilisons les types de cookies suivants :
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800">Cookies nécessaires</h4>
                    <p className="text-sm text-gray-600">
                      Indispensables au fonctionnement du site, ils permettent notamment de mémoriser vos préférences 
                      et d'assurer la sécurité de votre navigation.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800">Cookies analytiques (Google Analytics)</h4>
                    <p className="text-sm text-gray-600">
                      Nous utilisons Google Analytics (ID: G-343731918) pour comprendre comment vous utilisez notre site 
                      et l'améliorer en conséquence. Ces cookies sont anonymes et ne permettent pas de vous identifier.
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600">
                  Vous pouvez à tout moment modifier vos préférences de cookies en utilisant le bouton de gestion 
                  des cookies présent sur notre site ou en nous contactant directement.
                </p>
              </div>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">Propriété intellectuelle</h2>
              <p className="text-gray-600 mb-4">
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p className="text-gray-600">
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite 
                sauf autorisation expresse du directeur de la publication.
              </p>
            </section>

            {/* Protection des données */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">Protection des données personnelles</h2>
              <p className="text-gray-600 mb-4">
                Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), 
                vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p className="text-gray-600">
                Pour exercer ces droits ou pour plus d'informations sur notre politique de confidentialité, vous pouvez nous contacter à l'adresse : 
                <a href="mailto:contact@lefrigoriste.fr" className="text-primary hover:text-secondary transition-colors ml-1">
                  contact@lefrigoriste.fr
                </a> ou consulter notre 
                <Link to="/politique-confidentialite" className="text-primary hover:text-secondary transition-colors ml-1">
                  politique de confidentialité
                </Link>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;
