import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MyStory from './pages/MyStory';
import Media from './pages/Media';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';

// Simple ScrollToTop component to ensure pages start at top on navigation
const ScrollToTopWrapper: React.FC = () => {
    return <ScrollToTop />;
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-gray-800 animate-fade-in">
        <ScrollToTopWrapper />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<MyStory />} />
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
            {/* Redirects for placeholders */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;