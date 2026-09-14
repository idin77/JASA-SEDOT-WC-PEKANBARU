import React from 'react';
import LazyImage from './LazyImage';

const MapPlaceholder = () => {
  // Static map URL from Google Maps API
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=Pekanbaru,Indonesia&zoom=11&size=600x300&markers=color:red%7CPekanbaru,Indonesia&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`;

  return (
    <div className="w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <LazyImage 
        src={mapUrl}
        alt="Peta Area Layanan Sedot WC Pekanbaru"
        className="w-full h-64 md:h-80"
        loading="lazy"
      />
    </div>
  );
};

export default MapPlaceholder;
