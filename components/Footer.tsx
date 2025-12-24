import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  const socialLinks = {
    facebook: "https://www.facebook.com/share/1A6s29zxBE/?mibextid=wwXIfr",
    twitter: "https://x.com/Bright_Shitemi",
    instagram: "https://www.instagram.com/brightshitemi/",
    tiktok: "https://www.tiktok.com/@bright.shitemi?_r=1&_t=ZS-91kbIzfXbdQ",
    linkedin: "https://www.linkedin.com/in/bright-shitemi"
  };

  return (
    <footer 
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      className="mt-auto bg-gray-100 border-t border-gray-200"
    >
      <div className="bg-white py-10 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-[10px] md:text-xs max-w-2xl mx-auto leading-relaxed font-medium uppercase tracking-wider">
            This website serves as the official campaign platform for Bright Shitemi, Member of Parliament Candidate for Dagoretti North (2027).
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <Link to="/sitemap" className="text-gray-400 hover:text-brand-maroon text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-4">
          <div className="text-gray-600 text-sm text-center md:text-left">
            <p>
              Copyright © 2025 Bright Shitemi. Built by{' '}
              <a href="tel:0745620206" className="underline hover:text-brand-maroon transition-colors">Rojam</a>
            </p>
          </div>
          
          <div className="flex gap-4 flex-wrap justify-center">
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-600 hover:text-brand-maroon transition-colors"><Facebook size={18} /></a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="X" className="text-gray-600 hover:text-brand-maroon transition-colors"><Twitter size={18} /></a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-600 hover:text-brand-maroon transition-colors"><Instagram size={18} /></a>
            <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-600 hover:text-brand-maroon transition-colors"><TikTokIcon size={18} /></a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-600 hover:text-brand-maroon transition-colors"><Linkedin size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;