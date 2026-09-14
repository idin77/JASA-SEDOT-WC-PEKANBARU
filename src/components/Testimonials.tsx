import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Budi Santoso', text: 'Respon sangat cepat. Pagi pesan, siang tim langsung datang. Sedot WC sangat bersih dan profesional.', location: 'Pekanbaru Kota' },
  { name: 'Siti Aminah', text: 'Layanan memuaskan, harga transparan sesuai kesepakatan. WC di rumah langsung lancar kembali.', location: 'Marpoyan Damai' },
  { name: 'Toko Maju Jaya', text: 'Sangat membantu untuk kebutuhan toko kami. Pelayanan ramah dan pengerjaan efisien.', location: 'Tenayan Raya' },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">TESTIMONI PELANGGAN</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-blue-50 p-6 rounded-lg">
              <div className="flex gap-1 mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-700 mb-4 italic">"{t.text}"</p>
              <div className="font-bold text-blue-900">{t.name}</div>
              <div className="text-sm text-gray-500">{t.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
