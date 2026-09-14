import React, { useState } from 'react';

interface Props {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

const LazyImage: React.FC<Props> = ({ src, alt, className = '', loading = 'lazy' }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder - could be improved with a low-res image if available */}
      <div className={`absolute inset-0 bg-gray-200 dark:bg-gray-800 transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'}`} />

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        className={`transition-all duration-700 ease-in-out ${isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-lg'} w-full h-full object-cover`}
      />
    </div>
  );
};

export default LazyImage;
