import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import GetInvolvedModal from './GetInvolvedModal';

const TikTokIcon = ({ size = 16, className = "" }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', path: '/' },
    { label: 'MY STORY', path: '/story' },
    { label: 'MEDIA', path: '/media' }, 
    { label: "LET'S TALK", path: '/contact' }, 
  ];

  const socialLinks = {
    facebook: "https://www.facebook.com/share/1A6s29zxBE/?mibextid=wwXIfr",
    twitter: "https://x.com/Bright_Shitemi",
    instagram: "https://www.instagram.com/brightshitemi/",
    tiktok: "https://www.tiktok.com/@bright.shitemi?_r=1&_t=ZS-91kbIzfXbdQ",
    linkedin: "https://www.linkedin.com/in/bright-shitemi"
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'border-b-2 border-brand-maroon text-brand-maroon' : 'text-gray-600 hover:text-brand-maroon';
  };

  return (
    <>
      <header 
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'}`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <span className="text-2xl md:text-3xl font-serif font-black tracking-tighter text-brand-maroon transition-colors duration-300 group-hover:text-red-900">
              Bright Shitemi
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                to={link.path} 
                className={`text-sm font-bold tracking-wide transition-colors pb-1 ${isActive(link.path)}`}
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-brand-maroon hover:bg-red-900 text-white text-xs font-bold py-2 px-6 rounded-full tracking-widest uppercase transition-colors flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Heart size={14} className="fill-white" />
              Donate
            </button>

            <div className="flex gap-3 pl-4 border-l border-gray-300 items-center">
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Follow on Facebook" className="text-gray-600 hover:text-brand-maroon transition-transform hover:scale-110">
                <Facebook size={18} />
              </a>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Follow on X" className="text-gray-600 hover:text-brand-maroon transition-transform hover:scale-110">
                <Twitter size={18} />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Follow on Instagram" className="text-gray-600 hover:text-brand-maroon transition-transform hover:scale-110">
                <Instagram size={18} />
              </a>
              <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" aria-label="Follow on TikTok" className="text-gray-600 hover:text-brand-maroon transition-transform hover:scale-110">
                <TikTokIcon size={18} />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Follow on LinkedIn" className="text-gray-600 hover:text-brand-maroon transition-transform hover:scale-110">
                <Linkedin size={18} />
              </a>
            </div>
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-brand-maroon text-white text-xs font-bold py-2 px-4 rounded-full tracking-wider uppercase shadow-sm"
            >
              Donate
            </button>
            <button 
              className="text-gray-800 p-1 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg border-t h-screen overflow-y-auto pb-20">
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.label} 
                  to={link.path}
                  className="text-gray-800 font-bold py-4 border-b border-gray-100 text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="bg-brand-maroon text-white font-bold py-5 rounded-full tracking-widest uppercase flex items-center justify-center gap-2 mt-2 shadow-lg"
              >
                <Heart size={18} className="fill-white" />
                Donate
              </button>

              <div className="flex gap-6 mt-8 justify-center flex-wrap">
                 <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-600"><Facebook size={24} /></a>
                 <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600"><Twitter size={24} /></a>
                 <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600"><Instagram size={24} /></a>
                 <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-600"><TikTokIcon size={24} /></a>
                 <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600"><Linkedin size={24} /></a>
              </div>
            </div>
          </div>
        )}
      </header>
      
      <GetInvolvedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;