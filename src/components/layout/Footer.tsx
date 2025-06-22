
import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">LeFrigoriste.fr</h3>
            <p className="mb-4">Votre spécialiste en réfrigération et climatisation dans toute l'Île-de-France</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="hover:text-secondary transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="hover:text-secondary transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="hover:text-secondary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-secondary transition-colors">Accueil</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/qui-sommes-nous" className="hover:text-secondary transition-colors">Qui sommes-nous</Link>
              </li>
              <li>
                <Link href="/zone-intervention" className="hover:text-secondary transition-colors">Zone d'intervention</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nos services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#depannage" className="hover:text-secondary transition-colors">Dépannage frigorifique</Link>
              </li>
              <li>
                <Link href="/services#climatisation" className="hover:text-secondary transition-colors">Installation climatisation</Link>
              </li>
              <li>
                <Link href="/services#chambres-froides" className="hover:text-secondary transition-colors">Installation chambres froides</Link>
              </li>
              <li>
                <Link href="/services#maintenance" className="hover:text-secondary transition-colors">Maintenance préventive</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contactez-nous</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>8-10 rue Levassor, 78130 Les Mureaux</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <a href="tel:0185500284" className="hover:text-secondary transition-colors">01 85 50 02 84</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <a href="mailto:contact@lefrigoriste.fr" className="hover:text-secondary transition-colors">contact@lefrigoriste.fr</a>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mr-2 mt-1 flex-shrink-0" />
                <div>
                  <span className="block">Lun-Ven: 8h30-18h</span>
                  <span className="block text-emergency font-semibold">Urgence 24h/24, 7j/7</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/20 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p>© {currentYear} LeFrigoriste.fr - Tous droits réservés</p>
            <div className="flex space-x-4 text-sm">
              <Link 
                href="/mentions-legales" 
                className="hover:text-secondary transition-colors"
              >
                Mentions légales
              </Link>
              <Link 
                href="/politique-confidentialite" 
                className="hover:text-secondary transition-colors"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
