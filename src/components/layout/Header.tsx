
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, Clock, MapPin, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { useAnalytics } from "@/hooks/use-analytics";

const TopInfoBar = () => {
  return (
    <div className="bg-primary text-white py-2 hidden md:block">
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center space-x-6 text-xs">
          <div className="flex items-center">
            <Clock className="h-3.5 w-3.5 mr-1.5" />
            <span>Service 24h/24 et 7j/7</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-3.5 w-3.5 mr-1.5" />
            <span>Paris et Île-de-France</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a href="mailto:contact@lefrigoriste.fr" className="flex items-center text-xs hover:text-secondary transition-colors">
            <Mail className="h-3.5 w-3.5 mr-1.5" />
            <span>contact@lefrigoriste.fr</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const MainNav = ({
  className,
  isMobile = false,
  onLinkClick
}: {
  className?: string;
  isMobile?: boolean;
  onLinkClick?: () => void;
}) => {
  const location = useLocation();
  const navItems = [
    { href: '/', label: 'Accueil' },
    { href: '/services', label: 'Services' },
    { href: '/qui-sommes-nous', label: 'Qui sommes-nous' },
    { href: '/zone-intervention', label: 'Zone d\'intervention' },
    { href: '/contact', label: 'Contact' }
  ];
  
  const baseStyles = isMobile ? "flex flex-col space-y-4" : "hidden lg:flex items-center gap-8";
  
  return (
    <nav role="navigation" aria-label="Main" className={cn(baseStyles, className)}>
      {navItems.map(({ href, label }) => {
        const isActive = location.pathname === href;
        return (
          <Link
            key={href}
            to={href}
            aria-current={isActive ? "page" : undefined}
            onClick={onLinkClick}
            className={cn(
              "text-primary hover:text-secondary relative transition-all",
              "after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-secondary hover:after:w-full after:transition-all",
              isActive && "font-semibold text-secondary after:w-full",
              isMobile && "text-lg py-2"
            )}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

const Header = () => {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { trackPhoneCall } = useAnalytics();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEmergencyCall = () => {
    trackPhoneCall();
  };

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <header role="banner" className="w-full">
      <TopInfoBar />
      
      <div className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-md transition-all duration-300",
        isScrolled 
          ? isMobile 
            ? "bg-white/75 shadow-sm" 
            : "bg-white/90 shadow-sm"
          : isMobile 
            ? "bg-white/65" 
            : "bg-white/80"
      )}>
        <div className="container-custom h-20 lg:h-24">
          <div className="flex items-center justify-between h-full px-[16px]">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-primary" aria-label="LeFrigoriste.fr - Retour à l'accueil">
              <span className="text-secondary">Le</span>
              Frigoriste
              <span className="text-secondary">.fr</span>
            </Link>

            {/* Desktop Navigation */}
            <MainNav />

            {/* Emergency Call Button - Always Visible */}
            <a 
              href="tel:0185500284" 
              className="flex-shrink-0 mx-4" 
              aria-label="Appeler en urgence : 01 85 50 02 84"
              onClick={handleEmergencyCall}
            >
              <Button 
                variant="destructive" 
                className="bg-emergency hover:bg-emergency/90 text-white font-bold border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-3 sm:px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base"
                size={isMobile ? "sm" : "default"}
              >
                <Phone className="mr-1 sm:mr-2 h-4 w-4 lg:h-5 lg:w-5 flex-shrink-0" />
                <span className="hidden xs:inline text-white font-bold">
                  {isMobile ? "Urgence" : "01 85 50 02 84"}
                </span>
                <span className="inline xs:hidden text-white font-bold">SOS</span>
              </Button>
            </a>

            {/* Mobile Menu */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Menu principal">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="mt-8">
                  <MainNav isMobile onLinkClick={handleLinkClick} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      
      {/* Spacer to prevent content from being hidden under the fixed header */}
      <div className={`h-20 lg:h-24 ${!isMobile && "mt-2"}`}></div>
    </header>
  );
};

export default Header;
