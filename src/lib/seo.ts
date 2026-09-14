/**
 * Utility to update document head meta tags dynamically.
 */
export const updateMetaTags = (description: string, canonical: string) => {
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  }

  const canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) {
    canonicalLink.setAttribute('href', canonical);
  }
};
