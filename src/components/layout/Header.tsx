import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const TopInfoBar = () => (
  <div className="hidden lg:flex h-8 bg-[#F1F1F1] items-center justify-center text-xs text-primary gap-6">
    <span>45 min Yvelines</span>
    <span>•</span>
    <span>1 h Paris</span>
    <span>•</span>
    <span>2 h Grande Couronne</span>
  </div>
);

const MainNav = ({ className, isMobile = false }: { className?: string; isMobile?: boolean }) => {
  const location = useLocation();
  const navItems = [
    { href: '/', label: 'Accueil' },
    { href: '/services', label: 'Services' },
    { href: '/qui-sommes-nous', label: 'Qui sommes-nous' },
    { href: '/zone-intervention', label: 'Zone d\'intervention' },
    { href: '/contact', label: 'Contact' }
  ];

  const baseStyles = isMobile 
    ? "flex flex-col space-y-4"
    : "hidden lg:flex items-center gap-8";

  return (
    <nav 
      role="navigation" 
      aria-label="Main"
      className={cn(baseStyles, className)}
    >
      {navItems.map(({ href, label }) => {
        const isActive = location.pathname === href;
        return (
          <Link
            key={href}
            to={href}
            aria-current={isActive ? "page" : undefined}
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
  return (
    <header role="banner">
      <TopInfoBar />
      
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm">
        <div className="container-custom h-20 lg:h-24">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link 
              to="/" 
              className="text-2xl font-bold text-primary"
              aria-label="LeFrigoriste.fr - Retour à l'accueil"
            >
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
            >
              <Button 
                variant="destructive" 
                className="bg-[#CC0000] hover:bg-[#CC0000]/90 animate-pulse-emergency"
              >
                <Phone className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">01 85 50 02 84</span>
              </Button>
            </a>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="lg:hidden"
                  aria-label="Menu principal"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="mt-8">
                  <MainNav isMobile />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
