import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, CONTENT, WHATSAPP_LINK } from '../constants';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo/Name */}
          <div className="flex flex-col z-50">
            <a href="#home" className="font-serif text-2xl font-semibold text-sage-900 tracking-tight hover:opacity-80 transition-opacity">
              {CONTENT.name}
            </a>
            <span className="text-xs uppercase tracking-widest text-sage-800 font-medium">
              {CONTENT.title}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-stone-700 hover:text-sage-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button as="a" href={WHATSAPP_LINK} target="_blank" variant="primary" className="px-6 py-2 text-sm font-semibold" trackWhatsApp>
              Agendar Consulta
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-sage-900 z-50 focus:outline-none"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-stone-50 z-40 flex flex-col justify-center items-center space-y-8 transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-serif text-3xl text-stone-900 hover:text-sage-700"
          >
            {link.label}
          </a>
        ))}
        <Button
          as="a"
          href={WHATSAPP_LINK}
          target="_blank"
          variant="primary"
          className="mt-4"
          trackWhatsApp
        >
          Agendar via WhatsApp
        </Button>
      </div>
    </header>
  );
};