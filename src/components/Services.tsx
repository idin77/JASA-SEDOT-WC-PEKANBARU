import React from 'react';
import { Droplets, AlertCircle, Trash2, Zap, Briefcase, Coffee } from 'lucide-react';
import { trackConversion } from '../lib/tracking';

const Services = () => {
  const services = [
    { icon: <Droplets />, title: 'Sedot WC Penuh', desc: 'Layanan penyedotan septic tank penuh untuk rumah, kantor, toko dan tempat usaha.' },
    { icon: <AlertCircle />, title: 'WC Mampet', desc: 'Mengatasi WC mampet, saluran tersumbat dan masalah pembuangan air limbah.' },
    { icon: <Trash2 />, title: 'Sedot Septic Tank', desc: 'Penyedotan septic tank secara cepat dan profesional.' },
    { icon: <Zap />, title: 'Saluran Air Mampet', desc: 'Membantu mengatasi saluran air rumah dan tempat usaha yang tersumbat.' },
    { icon: <Briefcase />, title: 'Sedot Limbah Usaha', desc: 'Layanan penyedotan limbah untuk toko, restoran, kantor dan tempat usaha.' },
    { icon: <Coffee />, title: 'Sedot Lemak Restoran', desc: 'Pembersihan dan penyedotan grease trap atau penampungan lemak restoran.' },
  ];

  return (
    <section id="layanan" className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 dark:text-blue-300 mb-12">LAYANAN KAMI</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="border border-gray-200 dark:border-gray-800 p-6 rounded-lg hover:shadow-md transition bg-white dark:bg-gray-900">
              <div className="text-green-600 dark:text-green-400 mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-300">{s.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{s.desc}</p>
              <a 
                href="https://wa.me/6285716551653?text=Halo,%20saya%20ingin%20pesan%20layanan:%20" 
                onClick={() => trackConversion('Pesan Sekarang - ' + s.title)}
                className="text-green-600 dark:text-green-400 font-bold hover:text-green-700 transition"
              >
                PESAN SEKARANG
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
