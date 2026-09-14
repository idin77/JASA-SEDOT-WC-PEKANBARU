import React from 'react';

const ResultsOverview = () => {
  const metrics = [
    { label: 'Septic Tanks Cleared', value: '1,500+' },
    { label: 'Avg Response Time', value: '< 60 Mins' },
    { label: 'Happy Customers', value: '1,200+' },
    { label: 'Years Experience', value: '10+' },
  ];

  return (
    <section id="results" className="py-16 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="text-3xl md:text-5xl font-extrabold text-blue-900 dark:text-blue-100">
                {metric.value}
              </span>
              <span className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-widest">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsOverview;
