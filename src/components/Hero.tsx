import React from 'react';
import { Phone, FileText } from 'lucide-react';
import LazyImage from './LazyImage';
import { trackConversion } from '../lib/tracking';

const Hero = () => {
  return (
    <section id="home" className="bg-blue-50 dark:bg-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-blue-300 mb-6">
            JASA SEDOT WC PEKANBARU
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Solusi Sedot WC Cepat, Bersih & Terpercaya untuk Rumah, Toko, Kantor dan Usaha di Pekanbaru.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/6285716551653?text=Halo,%20saya%20ingin%20pesan%20jasa%20sedot%20WC%20di%20Pekanbaru.%20Mohon%20informasi%20harga%20dan%20jadwalnya." 
              onClick={() => trackConversion('Hero WhatsApp')}
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-green-700 transition"
            >
              <Phone size={24} /> PESAN LAYANAN SEKARANG
            </a>
            <a href="#layanan" className="bg-white dark:bg-gray-800 text-blue-900 dark:text-blue-300 border border-blue-900 dark:border-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-100 dark:hover:bg-gray-700 flex items-center justify-center gap-2 transition">
              <FileText size={24} /> LIHAT LAYANAN
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <LazyImage src="/assetshero-armada.jpg.jpeg" alt="Jasa sedot WC profesional" className="rounded-lg shadow-lg h-64 md:h-96" loading="eager" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
