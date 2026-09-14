import React, { useState } from 'react';
import MapPlaceholder from './MapPlaceholder';

const Area = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const areas = [
    'Bukit Raya', 'Lima Puluh', 'Marpoyan Damai', 'Payung Sekaki', 'Pekanbaru Kota',
    'Sail', 'Senapelan', 'Sukajadi', 'Tampan', 'Tenayan Raya', 'Tuah Madani',
    'Kulim', 'Rumbai', 'Rumbai Barat', 'Rumbai Timur'
  ];

  const filteredAreas = areas.filter(area => 
    area.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="area" className="py-16 bg-blue-900 dark:bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">AREA LAYANAN</h2>
        <p className="mb-10 text-blue-100 dark:text-gray-300">"Melayani jasa sedot WC di berbagai wilayah Kota Pekanbaru dan sekitarnya."</p>
        
        <input
          type="text"
          placeholder="Cari area layanan..."
          className="w-full max-w-sm mx-auto p-3 mb-10 rounded-lg border border-blue-800 dark:border-gray-700 bg-blue-800 dark:bg-gray-800 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="mb-10">
          <MapPlaceholder />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredAreas.length > 0 ? (
            filteredAreas.map((area, i) => (
              <div key={i} className="bg-blue-800 dark:bg-gray-800 p-3 rounded text-sm hover:bg-blue-700 dark:hover:bg-gray-700 transition">
                {area}
              </div>
            ))
          ) : (
            <div className="col-span-full text-blue-200">Area tidak ditemukan.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Area;
