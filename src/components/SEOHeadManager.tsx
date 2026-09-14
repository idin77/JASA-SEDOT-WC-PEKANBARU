import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOData {
  title: string;
  description: string;
  canonical: string;
  structuredData?: object;
}

interface SEOHeadManagerProps {
  section: 'home' | 'services' | 'portfolio' | 'price' | 'area' | 'about' | 'default';
}

export const seoConfig: Record<string, SEOData> = {
  home: {
    title: 'Sedot WC Pekanbaru - Jasa Pengurasan Septic Tank Profesional',
    description: 'Layanan sedot WC Pekanbaru terpercaya. Cepat, bersih, dan bergaransi.',
    canonical: 'https://sedotwcpekanbaru.com/#home'
  },
  services: {
    title: 'Layanan Sedot WC & Perbaikan Saluran - Sedot WC Pekanbaru',
    description: 'Kami melayani jasa sedot WC, perbaikan saluran mampet, dan perawatan septic tank di Pekanbaru.',
    canonical: 'https://sedotwcpekanbaru.com/#layanan'
  },
  // Add other sections as needed
  default: {
    title: 'Sedot WC Pekanbaru',
    description: 'Solusi masalah WC mampet dan septic tank penuh di Pekanbaru.',
    canonical: 'https://sedotwcpekanbaru.com/'
  }
};

const SEOHeadManager: React.FC<SEOHeadManagerProps> = ({ section }) => {
  const data = seoConfig[section] || seoConfig.default;

  return (
    <Helmet>
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <link rel="canonical" href={data.canonical} />
      {data.structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(data.structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHeadManager;
