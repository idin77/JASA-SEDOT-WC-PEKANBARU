import React from 'react';

const HowToOrder = () => {
  const steps = [
    { num: '1', title: 'Hubungi WhatsApp', desc: 'Klik tombol WhatsApp untuk memulai chat.' },
    { num: '2', title: 'Jelaskan Kebutuhan', desc: 'Beritahu lokasi dan jenis masalah Anda.' },
    { num: '3', title: 'Tim Datang', desc: 'Tim kami akan datang dan menyelesaikan pekerjaan.' },
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">CARA PESAN</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-green-600 mb-4">{step.num}</div>
              <h3 className="text-xl font-bold mb-2 text-blue-900">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
