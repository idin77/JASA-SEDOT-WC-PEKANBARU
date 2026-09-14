import React, { useState, useEffect } from 'react';
import { Phone, X } from 'lucide-react';
import { trackConversion } from '../lib/tracking';
import { useAvailability } from '../hooks/useAvailability';

const ADMINS = [
  { name: 'Admin 1', phone: '6285716551653' },
  { name: 'Admin 2', phone: '6285716551654' },
];

const StickyWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const status = useAvailability();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const message = "Halo, saya ingin pesan jasa sedot WC Pekanbaru. Mohon informasi harga dan jadwalnya.";

  const handleAdminClick = (admin: typeof ADMINS[0]) => {
    trackConversion(`WhatsApp ${admin.name}`);
    window.open(`https://wa.me/${admin.phone}?text=${encodeURIComponent(message)}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Menu */}
      {isOpen && (
        <div 
          className="absolute bottom-16 left-0 mb-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 p-2 animate-in fade-in zoom-in duration-200"
          role="menu"
        >
          <p className="text-xs font-bold text-gray-500 uppercase px-2 mb-2" id="admin-menu-label">Pilih Admin</p>
          {ADMINS.map((admin) => (
            <button
              key={admin.name}
              onClick={() => handleAdminClick(admin)}
              role="menuitem"
              className="w-full text-left px-3 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
            >
              Chat dengan {admin.name}
            </button>
          ))}
        </div>
      )}

      {/* Main Trigger */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={isOpen ? "admin-menu-label" : undefined}
        className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-transform hover:scale-110 relative group"
        aria-label="Chat via WhatsApp"
      >
        {isOpen ? <X size={28} /> : <Phone size={28} />}
        {!isOpen && <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-red-600 ring-2 ring-white dark:ring-gray-950" />}
        
        {/* Tooltip */}
        {!isOpen && (
          <span className={`absolute bottom-full left-0 mb-3 px-3 py-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm font-medium rounded-lg shadow-lg transition-opacity whitespace-nowrap pointer-events-none flex items-center gap-2 ${showTooltip ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
            Chat dengan Kami! 
            <span className={`h-2 w-2 rounded-full ${status === 'Online' ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
            <span className="text-xs opacity-75">({status})</span>
          </span>
        )}
      </button>
    </div>
  );
};

export default StickyWhatsApp;
