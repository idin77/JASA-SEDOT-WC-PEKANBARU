import React from 'react';

const FAQ = () => {
  const faqs = [
    { q: 'Berapa harga sedot WC di Pekanbaru?', a: 'Harga bervariasi tergantung kondisi septic tank dan lokasi. Hubungi kami untuk estimasi harga.' },
    { q: 'Apakah melayani sedot WC rumah?', a: 'Ya, kami melayani rumah, kantor, toko, dan tempat usaha.' },
    { q: 'Apakah melayani WC mampet?', a: 'Ya, kami juga melayani perbaikan WC dan saluran air mampet.' },
    { q: 'Apakah melayani septic tank penuh?', a: 'Ya, itu adalah layanan utama kami.' },
    { q: 'Apakah bisa datang ke lokasi?', a: 'Ya, tim kami akan datang langsung ke lokasi Anda.' },
    { q: 'Bagaimana cara memesan jasa sedot WC?', a: 'Anda bisa menghubungi kami via WhatsApp.' },
    { q: 'Apakah melayani toko dan restoran?', a: 'Ya, kami melayani berbagai sektor bisnis.' },
    { q: 'Apakah melayani area sekitar Pekanbaru?', a: 'Ya, kami melayani wilayah Kota Pekanbaru dan sekitarnya.' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">FAQ</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-bold text-blue-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
