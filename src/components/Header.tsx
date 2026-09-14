import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { trackConversion } from '../lib/tracking';
import { useLanguage } from '../context/LanguageContext';
import { useAvailability } from '../hooks/useAvailability';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const status = useAvailability();

  const navLinks = [
    { id: '#home', idLabel: 'Home', enLabel: 'Home' },
    { id: '#layanan', idLabel: 'Layanan', enLabel: 'Services' },
    { id: '#keunggulan', idLabel: 'Keunggulan', enLabel: 'Advantages' },
    { id: '#tentang', idLabel: 'Tentang', enLabel: 'About' },
    { id: '#area', idLabel: 'Area', enLabel: 'Area' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-bold text-xl text-blue-900 dark:text-blue-400">
          SEDOT WC<br/>PEKANBARU
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300 font-medium">
          {navLinks.map(link => (
            <a key={link.id} href={link.id} className="hover:text-blue-600 dark:hover:text-blue-400">
              {language === 'id' ? link.idLabel : link.enLabel}
            </a>
          ))}
        </nav>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleLanguage} 
            aria-label="Toggle language"
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-bold text-sm"
          >
            {language.toUpperCase()}
          </button>
          <ThemeToggle />
          <div className="flex items-center gap-2 text-blue-900 dark:text-blue-300 font-bold">
            <Phone size={20} aria-hidden="true" /> 085716551653
          </div>
          <a 
            href="https://wa.me/6285716551653?text=Halo,%20saya%20ingin%20pesan%20jasa%20sedot%20WC%20di%20Pekanbaru.%20Mohon%20informasi%20harga%20dan%20jadwalnya." 
            onClick={() => trackConversion('Header WhatsApp')}
            aria-label="Contact us via WhatsApp"
            className="flex flex-col items-end bg-green-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-700 transition"
          >
            <div className="flex items-center gap-2">
              <span>{language === 'id' ? 'HUBUNGI SEKARANG' : 'CONTACT NOW'}</span>
              <span className={`h-2 w-2 rounded-full ${status === 'Online' ? 'bg-green-400' : 'bg-red-400'} animate-pulse`} />
            </div>
            <span className="text-xs font-normal opacity-90">{status}</span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 p-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <a key={link.id} href={link.id} className="text-gray-700 dark:text-gray-300 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              {language === 'id' ? link.idLabel : link.enLabel}
            </a>
          ))}
          <div className="flex items-center gap-4 py-2">
            <button onClick={toggleLanguage} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-bold text-sm">
              {language.toUpperCase()}
            </button>
            <ThemeToggle />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
