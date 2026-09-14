import React, { useState } from 'react';
import { trackConversion } from '../lib/tracking';

const CallbackForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCallback = () => {
    if (!phoneNumber) return;
    setIsLoading(true);
    trackConversion('Callback Request');
    
    const message = `Halo, saya ingin meminta panggilan balik. Nomor telepon saya: ${phoneNumber}. Mohon hubungi saya segera.`;
    const whatsappLink = `https://wa.me/6285716551653?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.open(whatsappLink, '_blank');
      setIsLoading(false);
      setPhoneNumber('');
    }, 1500);
  };

  return (
    <section id="callback" className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 max-w-xl">
        <div className="p-8 bg-blue-50 dark:bg-gray-800 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-6 text-center">Minta Panggilan Balik</h2>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nomor WhatsApp Anda</label>
            <input
              type="tel"
              id="phone"
              placeholder="Contoh: 081234567890"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleCallback}
            disabled={isLoading || !phoneNumber}
            className={`block w-full text-center ${isLoading || !phoneNumber ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'} text-white p-4 rounded-lg font-bold text-lg transition shadow-lg`}
          >
            {isLoading ? 'Mengirim...' : 'MINTA PANGGILAN BALIK'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallbackForm;
