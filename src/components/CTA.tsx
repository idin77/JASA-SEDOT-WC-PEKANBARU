import React from 'react';
import { Phone } from 'lucide-react';
import { trackConversion } from '../lib/tracking';

const CTA = () => {
  return (
    <section className="py-16 bg-blue-900 dark:bg-gray-900 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">BUTUH JASA SEDOT WC DI PEKANBARU?</h2>
        <p className="text-lg mb-8">Hubungi kami sekarang untuk konsultasi dan pemesanan layanan.</p>
        <div className="text-2xl font-bold mb-8">085716551653</div>
        <a 
          href="https://wa.me/6285716551653?text=Halo,%20saya%20ingin%20pesan%20jasa%20sedot%20WC%20di%20Pekanbaru.%20Mohon%20informasi%20harga%20dan%20jadwalnya." 
          onClick={() => trackConversion('CTA WhatsApp')}
          className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition flex items-center justify-center gap-2 mx-auto w-max"
        >
          <Phone /> HUBUNGI VIA WHATSAPP
        </a>
      </div>
    </section>
  );
};

export default CTA;
