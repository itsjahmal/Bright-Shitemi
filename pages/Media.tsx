import React, { useEffect } from 'react';
import { ExternalLink, Instagram, FileText } from 'lucide-react';

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

const Media: React.FC = () => {
  useEffect(() => {
    // Load Twitter/X Widgets Script
    const scriptId = 'twitter-wjs';
    
    // If script exists, just reload widgets to render the new timeline
    if (document.getElementById(scriptId)) {
      (window as any).twttr?.widgets?.load();
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      // Optional cleanup
    };
  }, []);

  useEffect(() => {
     // Force refresh AOS on mount to ensure elements are visible
    if ((window as any).AOS) {
      setTimeout(() => {
        (window as any).AOS.refresh();
      }, 100);
    }
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Page Title */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-maroon mb-4 inline-block relative">
            News & Updates
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform translate-y-4"></span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content (Videos & Articles) */}
          <div className="lg:w-8/12 space-y-16">
            
            {/* Videos Section */}
            <section data-aos="fade-up">
              <h2 className="text-3xl font-serif font-bold text-brand-maroon mb-8">Videos</h2>
              
              {/* Coming Soon Placeholder for Social Feed */}
              <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-sm p-12 text-center flex flex-col items-center justify-center min-h-[300px]">
                 <div className="flex justify-center gap-6 mb-6">
                    <div className="p-4 bg-white rounded-full shadow-sm">
                        <Instagram size={40} className="text-pink-600" />
                    </div>
                    <div className="p-4 bg-white rounded-full shadow-sm">
                        <TikTokIcon size={40} className="text-black" />
                    </div>
                 </div>
                 
                 <h3 className="text-2xl font-serif font-bold text-gray-800 mb-3">Bright Shitemi Video Feed</h3>
                 <p className="text-gray-500 max-w-md mx-auto mb-8 text-lg">
                   We are currently integrating a live video feed from TikTok and Instagram to bring you the latest updates directly from the ground.
                 </p>
                 
                 <div className="inline-flex items-center gap-2 px-8 py-3 bg-brand-maroon text-white rounded-full font-bold tracking-widest text-sm shadow-lg">
                   <span>FEATURE COMING SOON</span>
                 </div>
              </div>
            </section>

            {/* Articles Section */}
            <section data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-3xl font-serif font-bold text-brand-maroon mb-8">Articles</h2>
              
              {/* Coming Soon Placeholder for Articles */}
              <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-sm p-12 text-center flex flex-col items-center justify-center min-h-[300px]">
                 <div className="mb-6">
                    <div className="p-4 bg-white rounded-full shadow-sm inline-block">
                        <FileText size={40} className="text-brand-maroon" />
                    </div>
                 </div>
                 
                 <h3 className="text-2xl font-serif font-bold text-gray-800 mb-3">Latest Articles</h3>
                 <p className="text-gray-500 max-w-md mx-auto mb-8 text-lg">
                   In-depth analysis, press releases, and opinion pieces from Bright Shitemi will be published here soon.
                 </p>
                 
                 <div className="inline-flex items-center gap-2 px-8 py-3 bg-brand-maroon text-white rounded-full font-bold tracking-widest text-sm shadow-lg">
                   <span>FEATURE COMING SOON</span>
                 </div>
              </div>
            </section>

          </div>

          {/* Sidebar (Twitter Feed) */}
          <div className="lg:w-4/12" data-aos="fade-left">
             <div className="sticky top-28">
               <h2 className="text-3xl font-serif font-bold text-brand-maroon mb-8">Twitter</h2>
               <div className="bg-white border border-gray-200 rounded-sm overflow-hidden h-[600px] shadow-sm flex flex-col">
                 <div className="p-4 border-b border-gray-100 flex-shrink-0">
                    <div className="flex items-center justify-between text-gray-500 text-sm">
                      <span>Tweets by shitemibright</span>
                      <ExternalLink size={14} />
                    </div>
                 </div>
                 
                 {/* Twitter Embed Container */}
                 <div className="flex-grow overflow-y-auto overflow-x-hidden p-2">
                    <a 
                      className="twitter-timeline" 
                      data-height="600"
                      data-theme="light"
                      href="https://twitter.com/shitemibright?ref_src=twsrc%5Etfw"
                    >
                      Loading Tweets by @shitemibright...
                    </a>
                 </div>

               </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Media;