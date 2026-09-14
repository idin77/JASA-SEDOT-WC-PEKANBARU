import React from 'react';

const posts = [
  {
    title: '5 Tanda Septic Tank Anda Sudah Penuh',
    excerpt: 'Jangan tunggu sampai mampet! Kenali tanda-tanda awal septic tank rumah Anda sudah penuh dan butuh segera dikuras.',
  },
  {
    title: 'Cara Mencegah WC Mampet secara Alami',
    excerpt: 'Tips mudah dan aman untuk menjaga saluran pembuangan tetap lancar tanpa bahan kimia yang merusak lingkungan.',
  },
  {
    title: 'Mengapa Sedot WC Rutin Itu Penting?',
    excerpt: 'Memahami pentingnya perawatan berkala untuk kesehatan lingkungan keluarga dan keawetan infrastruktur hunian Anda.',
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-300 mb-12 text-center">Tips Perawatan WC</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
              <button className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                Baca Selengkapnya
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
