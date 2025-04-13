
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom py-4 px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <span className="text-2xl font-bold text-primary mr-2">
                <span className="text-secondary">Le</span>Frigoriste<span className="text-secondary">.fr</span>
              </span>
            </Link>
          </div>
          
          {/* Emergency Phone - Always visible */}
          <a href="tel:0185500284" className="hidden md:flex btn-emergency animate-pulse-emergency">
            <Phone size={20} className="mr-2" />
            <span>URGENCE : 01 85 50 02 84</span>
          </a>

          {/* Hamburger Menu for Mobile */}
          <button 
            className="md:hidden flex items-center text-primary" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link 
              to="/" 
              className={`font-montserrat font-semibold hover:text-secondary transition-colors ${isActive('/') ? 'text-secondary' : 'text-primary'}`}
            >
              Accueil
            </Link>
            <Link 
              to="/services" 
              className={`font-montserrat font-semibold hover:text-secondary transition-colors ${isActive('/services') ? 'text-secondary' : 'text-primary'}`}
            >
              Services
            </Link>
            <Link 
              to="/qui-sommes-nous" 
              className={`font-montserrat font-semibold hover:text-secondary transition-colors ${isActive('/qui-sommes-nous') ? 'text-secondary' : 'text-primary'}`}
            >
              Qui sommes-nous
            </Link>
            <Link 
              to="/zone-intervention" 
              className={`font-montserrat font-semibold hover:text-secondary transition-colors ${isActive('/zone-intervention') ? 'text-secondary' : 'text-primary'}`}
            >
              Zone d'intervention
            </Link>
            <Link 
              to="/contact" 
              className={`font-montserrat font-semibold hover:text-secondary transition-colors ${isActive('/contact') ? 'text-secondary' : 'text-primary'}`}
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50">
            <div className="flex flex-col p-4 space-y-4">
              <a href="tel:0185500284" className="flex btn-emergency animate-pulse-emergency justify-center">
                <Phone size={20} className="mr-2" />
                <span>URGENCE : 01 85 50 02 84</span>
              </a>
              <Link 
                to="/" 
                className={`font-montserrat font-semibold hover:text-secondary transition-colors text-center py-2 ${isActive('/') ? 'text-secondary' : 'text-primary'}`}
                onClick={closeMenu}
              >
                Accueil
              </Link>
              <Link 
                to="/services" 
                className={`font-montserrat font-semibold hover:text-secondary transition-colors text-center py-2 ${isActive('/services') ? 'text-secondary' : 'text-primary'}`}
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link 
                to="/qui-sommes-nous" 
                className={`font-montserrat font-semibold hover:text-secondary transition-colors text-center py-2 ${isActive('/qui-sommes-nous') ? 'text-secondary' : 'text-primary'}`}
                onClick={closeMenu}
              >
                Qui sommes-nous
              </Link>
              <Link 
                to="/zone-intervention" 
                className={`font-montserrat font-semibold hover:text-secondary transition-colors text-center py-2 ${isActive('/zone-intervention') ? 'text-secondary' : 'text-primary'}`}
                onClick={closeMenu}
              >
                Zone d'intervention
              </Link>
              <Link 
                to="/contact" 
                className={`font-montserrat font-semibold hover:text-secondary transition-colors text-center py-2 ${isActive('/contact') ? 'text-secondary' : 'text-primary'}`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
