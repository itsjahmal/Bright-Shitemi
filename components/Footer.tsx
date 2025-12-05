import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const TikTokIcon = ({ size = 18, className = "" }: { size?: number, className?: string }) => (
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

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = {
    facebook: "https://www.facebook.com/share/1A6s29zxBE/?mibextid=wwXIfr",
    twitter: "https://x.com/shitemibright?s=21",
    instagram: "https://www.instagram.com/dagonorth01?igsh=dHQ0NjAyY3ppdW5m&utm_source=qr",
    tiktok: "https://www.tiktok.com/@bright.shitemi?_r=1&_t=ZS-91kbIzfXbdQ",
    linkedin: "https://www.linkedin.com/in/bright-shitemi?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
  };

  return (
    <footer className="bg-gray-100 py-8 border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-600 text-sm text-center md:text-left">
          <p>Copyright © 2025 Bright Shitemi. Built by <span className="underline decoration-gray-400 cursor-pointer">Rojam</span></p>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex gap-4 flex-wrap justify-center">
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-maroon transition-colors"><Facebook size={18} /></a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-maroon transition-colors"><Twitter size={18} /></a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-maroon transition-colors"><Instagram size={18} /></a>
            <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-maroon transition-colors"><TikTokIcon size={18} /></a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-maroon transition-colors"><Linkedin size={18} /></a>
          </div>
          <button 
            onClick={scrollToTop}
            className="bg-brand-maroon text-white p-2 rounded-full hover:bg-red-900 transition-colors shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;