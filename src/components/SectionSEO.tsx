import React, { useEffect, useRef } from 'react';
import { updateMetaTags } from '../lib/seo';

interface Props {
  description: string;
  canonical: string;
  children: React.ReactNode;
  id: string;
}

const SectionSEO: React.FC<Props> = ({ description, canonical, children, id }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateMetaTags(description, canonical);
          }
        });
      },
      { threshold: 0.5 } // Update when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [description, canonical]);

  return <div ref={sectionRef} id={id}>{children}</div>;
};

export default SectionSEO;
