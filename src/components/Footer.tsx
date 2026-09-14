import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-xl mb-4 text-blue-400">SEDOT WC PEKANBARU</h3>
          <p className="text-gray-400">Jasa Sedot WC dan layanan saluran limbah di Pekanbaru.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-white">Menu</h4>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#home">Home</a></li>
            <li><a href="#layanan">Layanan Kami</a></li>
            <li><a href="#area">Area Layanan</a></li>
            <li><a href="#tentang">Tentang Kami</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-white">Kontak</h4>
          <p className="text-gray-400">WhatsApp: 085716551653</p>
        </div>
      </div>
      <div className="text-center text-gray-600 mt-12 pt-8 border-t border-gray-800">
        &copy; 2026 Sedot WC Pekanbaru. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
