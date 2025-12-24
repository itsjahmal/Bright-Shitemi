
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import FloatingScrollButton from './components/FloatingScrollButton';

// Lazy Load Pages
const Home = lazy(() => import('./pages/Home'));
const MyStory = lazy(() => import('./pages/MyStory'));
const Media = lazy(() => import('./pages/Media'));
const Contact = lazy(() => import('./pages/Contact'));
const AboutBrightShitemi = lazy(() => import('./pages/AboutBrightShitemi'));
const WhatsAppCommunity = lazy(() => import('./pages/WhatsAppCommunity'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const PaymentReturn = lazy(() => import('./pages/PaymentReturn'));
const NotFound = lazy(() => import('./pages/NotFound'));

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
      '/donate/return': `Payment Status | Bright Shitemi – ${baseRole}`,
    };
    document.title = titles[location.pathname] || `Bright Shitemi | ${baseRole}`;
  }, [location]);
  return null;
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if ((window as any).AOS) (window as any).AOS.init({ duration: 800, once: true });
    setTimeout(() => setLoading(false), 1200);
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      <SEOManager />
      <div className="flex flex-col min-h-[100dvh] font-sans text-gray-800 overflow-x-hidden">
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
              <Route path="/whatsapp-community" element={<WhatsAppCommunity />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/donate/return" element={<PaymentReturn />} />
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
