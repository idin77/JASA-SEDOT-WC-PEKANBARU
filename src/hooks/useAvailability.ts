import { useState, useEffect } from 'react';

export const useAvailability = () => {
  const [status, setStatus] = useState<'Online' | 'Away'>('Away');

  useEffect(() => {
    const checkStatus = () => {
      const hours = new Date().getHours();
      // Working hours: 08:00 - 20:00
      setStatus(hours >= 8 && hours < 20 ? 'Online' : 'Away');
    };
    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return status;
};
