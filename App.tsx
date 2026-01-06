import React, { useState, useEffect, lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import FloatingScrollButton from './components/FloatingScrollButton';

// Lazy Load Pages for Performance Optimization
const Home = lazy(() => import('./pages/Home'));
const MyStory = lazy(() => import('./pages/MyStory'));
const Media = lazy(() => import('./pages/Media'));
const Contact = lazy(() => import('./pages/Contact'));
const AboutBrightShitemi = lazy(() => import('./pages/AboutBrightShitemi'));
const PaymentSuccess = lazy(() => import('./pages/PaymentSuccess'));
const PaymentFailed = lazy(() => import('./pages/PaymentFailed'));
const WhatsAppCommunity = lazy(() => import('./pages/WhatsAppCommunity'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Dynamic SEO and Title Manager Component
const SEOManager = () => {
  const location = useLocation();

  useEffect(() => {
    const baseRole = 'Member of Parliament Candidate for Dagoretti North (2027)';
    const titles: Record<string, string> = {
      '/': `Bright Shitemi | ${baseRole}`,
      '/story': `My Story | Bright Shitemi – ${baseRole}`,
      '/media': `Media & News | Bright Shitemi – ${baseRole}`,
      '/contact': `Contact | Bright Shitemi – ${baseRole}`,
      '/about-bright-shitemi': `Profile | Bright Shitemi – ${baseRole}`,
      '/whatsapp-community': `Join Community | Bright Shitemi – ${baseRole}`,
      '/sitemap': `Sitemap | Bright Shitemi – ${baseRole}`,
    };

    const currentPath = location.pathname;
    document.title = titles[currentPath] || `Bright Shitemi | ${baseRole}`;

    let link: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    const baseUrl = window.location.origin;
    const fullCanonical = `${baseUrl}/#${currentPath === '/' ? '' : currentPath}`;
    link.setAttribute('href', fullCanonical);
  }, [location]);

  return null;
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 20;

    const initAOS = () => {
      if ((window as any).AOS) {
        (window as any).AOS.init({
          duration: 800,
          easing: 'ease-out-cubic',
          once: true,
          offset: 50,
        });
        return true;
      }
      return false;
    };

    if (!initAOS()) {
      const interval = setInterval(() => {
        attempts++;
        if (initAOS() || attempts >= maxAttempts) {
          clearInterval(interval);
        }
      }, 200);
      return () => clearInterval(interval);
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <SEOManager />
      <div className="flex flex-col min-h-[100dvh] font-sans text-gray-800 animate-fade-in overflow-x-hidden">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/story" element={<MyStory />} />
              <Route path="/media" element={<Media />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about-bright-shitemi" element={<AboutBrightShitemi />} />
              <Route path="/payment-success" element={<PaymentSuccess />} />
              <Route path="/payment-failed" element={<PaymentFailed />} />
              <Route path="/whatsapp-community" element={<WhatsAppCommunity />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <FloatingScrollButton />
      </div>
    </Router>
  );
};

export default App;