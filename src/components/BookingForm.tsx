import React, { useState } from 'react';
import { trackConversion } from '../lib/tracking';

const ADMINS = [
  { name: 'Admin 1', phone: '6285716551653' },
  { name: 'Admin 2', phone: '6285716551654' },
];

const BookingForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [adminName, setAdminName] = useState(ADMINS[0].name);
  const [isLoading, setIsLoading] = useState(false);

  const selectedAdmin = ADMINS.find(a => a.name === adminName) || ADMINS[0];

  const message = `Halo, saya ingin memesan jasa sedot WC Pekanbaru.
Tanggal: ${date || 'Belum dipilih'}
Jam: ${time || 'Belum dipilih'}
Mohon konfirmasi ketersediaan.`;

  const whatsappLink = `https://wa.me/${selectedAdmin.phone}?text=${encodeURIComponent(message)}`;

  const handleBooking = () => {
    setIsLoading(true);
    trackConversion(`Booking Form WhatsApp - ${adminName}`);
    
    // Simulate sending email notification delay
    setTimeout(() => {
      window.location.href = whatsappLink;
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section id="booking" className="py-16 bg-blue-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-xl">
        <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-6 text-center">Formulir Pemesanan</h2>
          
          <div className="grid grid-cols-1 gap-6 mb-6">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tanggal Layanan</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Jam Layanan</label>
              <input
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="admin" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Pilih Admin</label>
              <select
                id="admin"
                value={adminName}
                onChange={(e) => setAdminName(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              >
                {ADMINS.map(a => <option key={a.name} value={a.name}>{a.name}</option>)}
              </select>
            </div>
          </div>
          
          <button
            onClick={handleBooking}
            disabled={isLoading}
            className={`block w-full text-center ${isLoading ? 'bg-gray-500' : 'bg-green-600 hover:bg-green-700'} text-white p-4 rounded-lg font-bold text-lg transition shadow-lg`}
          >
            {isLoading ? 'Mengirim Permintaan...' : 'PESAN JADWAL VIA WHATSAPP'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
