import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

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
    twitter: "https://x.com/shitemibright?s=21",
    instagram: "https://www.instagram.com/dagonorth01?igsh=dHQ0NjAyY3ppdW5m&utm_source=qr",
    tiktok: "https://www.tiktok.com/@bright.shitemi?_r=1&_t=ZS-91kbIzfXbdQ",
    linkedin: "https://www.linkedin.com/in/bright-shitemi?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'border-b-2 border-brand-maroon text-brand-maroon' : 'text-gray-600 hover:text-brand-maroon';
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Area */}
        <Link to="/" className="text-3xl font-bold font-serif text-brand-maroon italic tracking-tighter">
          Bright Shitemi
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              to={link.path} 
              className={`text-sm font-bold tracking-wide transition-colors pb-1 ${isActive(link.path)}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-3 pl-4 border-l border-gray-300 items-center">
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-600 cursor-pointer hover:text-brand-maroon">
              <Facebook size={18} />
            </a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 cursor-pointer hover:text-brand-maroon">
              <Twitter size={18} />
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 cursor-pointer hover:text-brand-maroon">
              <Instagram size={18} />
            </a>
            <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-600 cursor-pointer hover:text-brand-maroon">
              <TikTokIcon size={18} />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 cursor-pointer hover:text-brand-maroon">
              <Linkedin size={18} />
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg border-t">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                to={link.path}
                className="text-gray-800 font-bold py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-6 mt-2 justify-center flex-wrap">
               <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-maroon"><Facebook size={24} /></a>
               <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-maroon"><Twitter size={24} /></a>
               <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-maroon"><Instagram size={24} /></a>
               <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-maroon"><TikTokIcon size={24} /></a>
               <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-maroon"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;