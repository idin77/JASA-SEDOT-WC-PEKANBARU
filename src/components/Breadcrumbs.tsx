import { useEffect } from 'react';

const items = [
  { name: 'Home', link: '#home' },
  { name: 'Services', link: '#services' },
  { name: 'Portfolio', link: '#portfolio' },
  { name: 'Prices', link: '#price' },
  { name: 'Area', link: '#area' },
  { name: 'About', link: '#about' }
];

const Breadcrumbs = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `https://sedotwcpekanbaru.com/${item.link}`
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 dark:bg-gray-900 py-3 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
        {items.map((item, index) => (
          <div key={item.link} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            <a href={item.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {item.name}
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
