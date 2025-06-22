
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
    <div className="bg-primary text-white py-2 px-4 hidden md:block">
      <div className="container-custom flex justify-between items-center text-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Clock size={16} className="mr-2" />
            <span>Lun-Ven: 8h30-18h</span>
          </div>
          <div className="flex items-center">
            <span className="text-emergency font-semibold">Urgence 24h/24, 7j/7</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <MapPin size={16} className="mr-2" />
            <span>Les Mureaux, Île-de-France</span>
          </div>
          <div className="flex items-center">
            <Mail size={16} className="mr-2" />
            <a href="mailto:contact@lefrigoriste.fr" className="hover:text-secondary transition-colors">
              contact@lefrigoriste.fr
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const { trackPhoneCall } = useAnalytics();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEmergencyCall = () => {
    trackPhoneCall();
  };

  const navigationItems = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
    { href: "/zone-intervention", label: "Zone d'intervention" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white">
      <TopInfoBar />
      <div className={cn(
        "border-b transition-all duration-300",
        isScrolled ? "shadow-md" : "shadow-sm"
      )}>
        <div className="container-custom px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img 
                src="/lovable-uploads/75510e1c-4e18-4dde-8913-2caa6d23f37f.png" 
                alt="LeFrigoriste.fr - Logo" 
                className="h-8 md:h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    isActive(item.href) ? "text-primary" : "text-gray-700"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-3">
              <a 
                href="tel:0185500284" 
                className="btn-emergency"
                onClick={handleEmergencyCall}
              >
                <Phone size={18} className="mr-2" />
                Urgence
              </a>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col space-y-4 mt-6">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={cn(
                          "text-lg font-medium transition-colors hover:text-primary py-2",
                          isActive(item.href) ? "text-primary" : "text-gray-700"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <div className="pt-4">
                      <a 
                        href="tel:0185500284" 
                        className="btn-emergency w-full justify-center"
                        onClick={handleEmergencyCall}
                      >
                        <Phone size={18} className="mr-2" />
                        Appel d'urgence
                      </a>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
