import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const FloatingScrollButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    // Calculate how far down the user has scrolled
    // window.innerHeight + window.scrollY gives the position of the bottom of the viewport
    // document.documentElement.scrollHeight is the total height of the document
    // We show the button if the user is within 150px of the bottom
    const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 150;
    
    setIsVisible(isBottom);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div 
      className={`fixed bottom-8 right-8 z-40 transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        className="bg-brand-maroon hover:bg-red-900 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 focus:outline-none flex items-center justify-center border-2 border-white/20 backdrop-blur-sm"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default FloatingScrollButton;