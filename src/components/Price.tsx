import React from 'react';
import { trackConversion } from '../lib/tracking';

const Price = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-300 mb-6">HARGA SEDOT WC PEKANBARU</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          "Harga dapat disesuaikan dengan kondisi septic tank, lokasi dan tingkat kesulitan pekerjaan. Hubungi kami untuk mendapatkan estimasi harga."
        </p>
        <a 
          href="https://wa.me/6285716551653?text=Halo,%20saya%20ingin%20tanya%20estimasi%20harga%20jasa%20sedot%20WC%20di%20Pekanbaru." 
          onClick={() => trackConversion('Price WhatsApp')}
          className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition"
        >
          CEK HARGA VIA WHATSAPP
        </a>
      </div>
    </section>
  );
};

export default Price;
