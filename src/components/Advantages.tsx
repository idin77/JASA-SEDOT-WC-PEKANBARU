import React from 'react';
import { Zap, UserCheck, DollarSign, Phone } from 'lucide-react';

const Advantages = () => {
  const items = [
    { icon: <Zap />, title: 'Respon Cepat', desc: 'Melayani kebutuhan sedot WC dengan respons cepat.' },
    { icon: <UserCheck />, title: 'Teknisi Profesional', desc: 'Dikerjakan oleh tenaga berpengalaman.' },
    { icon: <DollarSign />, title: 'Harga Transparan', desc: 'Harga disampaikan dengan jelas sebelum pekerjaan.' },
    { icon: <Phone />, title: 'Mudah Dihubungi', desc: 'Pemesanan mudah melalui WhatsApp.' },
  ];

  return (
    <section id="keunggulan" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">KEUNGGULAN KAMI</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="text-center">
              <div className="bg-white text-green-600 p-4 rounded-full inline-block mb-4 shadow-sm">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-blue-900">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
