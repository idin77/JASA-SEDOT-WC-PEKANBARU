/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyWhatsApp from './components/StickyWhatsApp';
import BackToTop from './components/BackToTop';
import Skeleton from './components/Skeleton';
import Breadcrumbs from './components/Breadcrumbs';
import SEOHeadManager from './components/SEOHeadManager';
import { LanguageProvider } from './context/LanguageContext';

const Hero = lazy(() => import('./components/Hero'));
const Services = lazy(() => import('./components/Services'));
const Advantages = lazy(() => import('./components/Advantages'));
const Price = lazy(() => import('./components/Price'));
const Area = lazy(() => import('./components/Area'));
const About = lazy(() => import('./components/About'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const BookingForm = lazy(() => import('./components/BookingForm'));
const CallbackForm = lazy(() => import('./components/CallbackForm'));
const BlogSection = lazy(() => import('./components/BlogSection'));
const SEOPerformanceDashboard = lazy(() => import('./components/SEOPerformanceDashboard'));
const HowToOrder = lazy(() => import('./components/HowToOrder'));
const CTA = lazy(() => import('./components/CTA'));
const FAQ = lazy(() => import('./components/FAQ'));
const SectionSEO = lazy(() => import('./components/SectionSEO'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const ResultsOverview = lazy(() => import('./components/ResultsOverview'));

const SectionLoader = () => <Skeleton className="h-64 w-full my-8" />;

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Breadcrumbs />
        <SEOHeadManager section="home" />
        <div className="font-sans text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
          <Header />
          <main>
            <Suspense fallback={<SectionLoader />}>
              <SectionSEO
                id="home"
                description="Jasa sedot WC Pekanbaru terpercaya, cepat, dan profesional. Solusi septic tank penuh, WC mampet, dan saluran air tersumbat di seluruh wilayah Pekanbaru. Hubungi 085716551653."
                canonical="https://sedotwcpekanbaru.com/#home"
              >
                <Hero />
              </SectionSEO>
              <Services />
              <Advantages />
              <Portfolio />
              <ResultsOverview />
              <Price />
              <Area />
              <About />
              <Testimonials />
              <BookingForm />
              <CallbackForm />
              <BlogSection />
              <SEOPerformanceDashboard />
              <HowToOrder />
              <CTA />
              <FAQ />
            </Suspense>
          </main>
          <Footer />
          <StickyWhatsApp />
          <BackToTop />
        </div>
      </LanguageProvider>
    </HelmetProvider>
  );
}
