import React, { useState, useEffect } from 'react';
import { ShoppingBag, MessageCircle, Menu, X, Clock, MapPin, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCart }) => {
  const { totalCount, subtotal } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Nos Pâtisseries', href: '#carte' },
    { label: 'Sur-Mesure & Événements', href: '#sur-mesure' },
    { label: 'L’Atelier', href: '#atelier' },
    { label: 'Avis Clients', href: '#avis' },
    { label: 'Boutique & Horaires', href: '#boutique' },
  ];

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-[#3D271D] text-[#FAF7F2] py-2 px-4 text-xs sm:text-sm font-medium border-b border-[#C5A059]/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center">
            <span className="inline-block w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></span>
            <span className="tracking-wide">
              Boutique ouverte à Rabat Souissi • Retrait & Livraison réfrigérée offerte dès 350 DH
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs text-[#FAF7F2]/80">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              Mardi – Dimanche : 08h30 – 20h00
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              Souissi, Rabat
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header
        id="navigation-principale"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E8B4B8]/30 py-3'
            : 'bg-[#FAF7F2] border-b border-[#E8B4B8]/20 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-3 group" id="logo-maison-lila">
            <div className="w-10 h-10 rounded-full bg-[#3D271D] flex items-center justify-center text-[#C5A059] shadow-sm border border-[#C5A059]/40 group-hover:rotate-6 transition-transform">
              <span className="font-serif text-xl font-bold tracking-tight">L</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wide text-[#3D271D] leading-none">
                Maison Lila
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium mt-1">
                Pâtisserie Fine • Rabat
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#3D271D]/80 hover:text-[#3D271D] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#C5A059] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* WhatsApp direct order button */}
            <a
              id="bouton-whatsapp-entete"
              href="https://wa.me/212661000000?text=Bonjour%20Maison%20Lila%2C%20je%20souhaite%20me%20renseigner%20sur%20vos%20p%C3%A2tisseries%20artisanales%20%C3%A0%20Rabat."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#3D271D] text-[#FAF7F2] text-xs font-semibold hover:bg-[#251610] hover:shadow-md transition-all border border-[#C5A059]/40"
              title="Échanger directement avec notre cheffe sur WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>

            {/* Cart trigger button */}
            <button
              id="bouton-panier-entete"
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#FFFDF9] border border-[#E8B4B8] hover:border-[#3D271D] text-[#3D271D] shadow-xs hover:shadow-sm transition-all"
              aria-label="Ouvrir le panier"
            >
              <ShoppingBag className="w-4 h-4 text-[#3D271D]" />
              <span className="text-xs font-semibold hidden md:inline">Panier</span>
              {totalCount > 0 && (
                <span className="inline-flex items-center justify-center px-2 py-0.5 text-[11px] font-bold bg-[#C5A059] text-[#3D271D] rounded-full">
                  {totalCount}
                </span>
              )}
              {subtotal > 0 && (
                <span className="text-xs font-bold text-[#3D271D] hidden xl:inline">
                  • {subtotal} DH
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              id="bouton-menu-mobile"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#3D271D] hover:bg-[#F3EFEA] transition-colors"
              aria-label="Menu mobile"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#FFFDF9] border-b border-[#E8B4B8]/40 px-4 py-6 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-[#3D271D] py-2 border-b border-[#F3EFEA] hover:text-[#C5A059] transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="https://wa.me/212661000000?text=Bonjour%20Maison%20Lila%2C%20je%20souhaite%20me%20renseigner%20sur%20vos%20p%C3%A2tisseries."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#3D271D] text-[#FAF7F2] text-sm font-semibold"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Discuter sur WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
