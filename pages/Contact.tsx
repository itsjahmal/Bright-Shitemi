import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const TikTokIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
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

const Contact: React.FC = () => {
  useEffect(() => {
    // Force refresh AOS on mount to ensure elements are visible
    if ((window as any).AOS) {
      setTimeout(() => {
        (window as any).AOS.refresh();
      }, 100);
    }
  }, []);

  const socialLinks = {
    facebook: "https://www.facebook.com/share/1A6s29zxBE/?mibextid=wwXIfr",
    twitter: "https://x.com/shitemibright?s=21",
    instagram: "https://www.instagram.com/dagonorth01?igsh=dHQ0NjAyY3ppdW5m&utm_source=qr",
    tiktok: "https://www.tiktok.com/@bright.shitemi?_r=1&_t=ZS-91kbIzfXbdQ",
    linkedin: "https://www.linkedin.com/in/bright-shitemi?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-slate-900 w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: 'url("https://picsum.photos/seed/nairobi_night/1920/1080")' }} 
        />
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="container mx-auto px-4 h-full relative z-10 flex flex-col justify-center">
          <div className="mt-10" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">Let's Talk</h1>
            <div className="w-24 h-1 bg-brand-maroon"></div>
          </div>
        </div>
      </section>

      {/* Content Section - Overlapping */}
      <section className="container mx-auto px-4 relative z-20 -mt-32 mb-12">
        <div className="bg-white shadow-2xl rounded-sm flex flex-col lg:flex-row overflow-hidden" data-aos="fade-up" data-aos-delay="200">
          
          {/* Left Column: Form */}
          <div className="lg:w-7/12 p-8 md:p-12 bg-white">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-brand-maroon font-bold">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-brand-maroon font-bold">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-brand-maroon font-bold">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-brand-maroon font-bold">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-brand-maroon font-bold">Your Message *</label>
                <textarea 
                  id="message" 
                  rows={6}
                  required
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-brand-maroon text-white font-bold py-4 rounded-md hover:bg-red-900 transition-colors shadow-md text-lg"
              >
                Send
              </button>
            </form>
          </div>

          {/* Right Column: Info & Map */}
          <div className="lg:w-5/12 bg-brand-maroon p-8 md:p-12 text-white flex flex-col gap-8">
            {/* Map Placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-inner relative group">
              <img 
                src="https://picsum.photos/seed/map_nairobi/800/600" 
                alt="Map Location" 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute bottom-2 left-2 bg-white text-gray-800 text-xs p-2 rounded shadow">
                <strong>Jambo estate, Langata</strong><br/>
                Nairobi, Kenya
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-6 mt-4">
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 flex-shrink-0" />
                <span className="text-lg font-medium">+254781 071716</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 flex-shrink-0" />
                <a href="mailto:Niaje@brightshitemi.com" className="text-lg font-medium hover:underline">Niaje@brightshitemi.com</a>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                <span className="text-lg font-medium leading-tight">Jambo Office Park, Nairobi, Kenya</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-4 mt-auto pt-8">
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-white rounded-full hover:bg-white hover:text-brand-maroon transition-colors">
                <Facebook size={24} />
              </a>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-white rounded-full hover:bg-white hover:text-brand-maroon transition-colors">
                <Twitter size={24} />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-white rounded-full hover:bg-white hover:text-brand-maroon transition-colors">
                <Instagram size={24} />
              </a>
              <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-white rounded-full hover:bg-white hover:text-brand-maroon transition-colors">
                <TikTokIcon size={24} />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-white rounded-full hover:bg-white hover:text-brand-maroon transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;