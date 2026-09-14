import React from 'react';
import { seoConfig } from './SEOHeadManager';

const SEOPerformanceDashboard = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">SEO Performance Audit</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-gray-200 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-200 dark:border-gray-700 p-3">Section</th>
                <th className="border border-gray-200 dark:border-gray-700 p-3">Title</th>
                <th className="border border-gray-200 dark:border-gray-700 p-3">Description</th>
                <th className="border border-gray-200 dark:border-gray-700 p-3">Canonical</th>
                <th className="border border-gray-200 dark:border-gray-700 p-3">Schema Status</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(seoConfig).map(([key, data]) => (
                <tr key={key} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="border border-gray-200 dark:border-gray-700 p-3 capitalize">{key}</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-sm">{data.title}</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-sm">{data.description}</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-sm">{data.canonical}</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-3 text-sm text-center">
                    {data.structuredData ? '✅ Present' : '⚠️ Missing'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SEOPerformanceDashboard;
