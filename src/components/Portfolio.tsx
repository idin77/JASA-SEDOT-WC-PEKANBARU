import React from 'react';
import LazyImage from './LazyImage';
import { motion } from 'motion/react';

const portfolioItems = [
  { src: '/assets/work1.jpg', alt: 'Teknisi sedang bekerja di lokasi industri' },
  { src: '/assets/work2.jpg', alt: 'Teknisi sedang menyiapkan selang untuk sedot WC' },
  { src: '/assets/work3.jpg', alt: 'Teknisi sedang mengoperasikan peralatan industri' },
  { src: '/assets/work4.jpg', alt: 'Teknisi sedang memperbaiki saluran WC mampet' },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 dark:text-blue-300 mb-12">GALERI PEKERJAAN KAMI</h2>
        
        <div className="flex overflow-x-auto gap-6 pb-6 snap-x">
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={index}
              className="snap-center flex-shrink-0 w-80"
              whileHover={{ scale: 1.05 }}
            >
              <LazyImage 
                src={item.src} 
                alt={item.alt} 
                className="rounded-2xl shadow-lg h-60" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
