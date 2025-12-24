import React, { useEffect, useState } from 'react';
import { 
  ExternalLink, 
  FileText, 
  Download, 
  Newspaper, 
  Mic2, 
  Camera, 
  ArrowRight,
  Share2,
  Image as ImageIcon,
  PlayCircle,
  X,
  Maximize2,
  Loader2
} from 'lucide-react';

const Media: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    // Load Twitter/X Widgets Script
    const scriptId = 'twitter-wjs';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.charset = "utf-8";
      document.body.appendChild(script);
    } else {
      (window as any).twttr?.widgets?.load();
    }

    if ((window as any).AOS) {
      setTimeout(() => {
        (window as any).AOS.refresh();
      }, 100);
    }
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage]);

  const handleDownloadPhotos = async () => {
    if (isDownloading) return;
    setIsDownloading(true);

    const photos = [
      "https://i.ibb.co/sv35wkqp/3V7A4622.jpg",
      "https://i.ibb.co/xSpC7LRp/3V7A4604.jpg",
      "https://i.ibb.co/rKnNmRxP/3V7A4670.jpg",
      "https://i.ibb.co/ynWQ1R15/3V7A4582.jpg"
    ];

    try {
      for (const url of photos) {
        // We use fetch to get the blob to force the download behavior
        const response = await fetch(url);
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        // Extract filename or fallback
        const fileName = url.split('/').pop() || 'bright-shitemi-press.jpg';
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
        // Small delay to prevent browser from blocking multiple concurrent downloads
        await new Promise(resolve => setTimeout(resolve, 600));
      }
    } catch (error) {
      console.error("Error downloading images:", error);
      // Fallback: Open URLs in new tabs if fetch is blocked by CORS
      photos.forEach(url => window.open(url, '_blank'));
    } finally {
      setIsDownloading(false);
    }
  };

  const pressCoverage = [
    {
      source: "NTV Kenya",
      type: "Video Interview",
      title: "Corrupt Leaders Should Face the Death Penalty or Life in Prison - Bright Shitemi",
      date: "Featured Coverage",
      link: "https://www.youtube.com/watch?v=zxYKqkJmQ9E",
      isVideo: true
    },
    {
      source: "Political Headache",
      type: "Podcast / Interview",
      title: "He’s Mobilized All 47 Counties for a 2027 Takeover! Alliance Old Boy Bright Shitemi.",
      date: "Recent Feature",
      link: "https://www.youtube.com/watch?v=IRZoaNdVqQc",
      isVideo: true
    },
    {
      source: "Africa Watch News",
      type: "Press Release",
      title: "DNA and KIKAO Youth Movement Unite to Reshape Kenya’s Political Future",
      date: "Editorial",
      link: "https://africawatchnews.co.ke/dna-and-kikao-youth-movement-unite-to-reshape-kenyas-political-future/",
      isVideo: false
    }
  ];

  const galleryImages = [
    "https://i.ibb.co/9H3jRRph/Bright-Shitemi-Dagoretti-North-Girl-child-Event.webp",
    "https://i.ibb.co/Xr8cCbHX/Bright-Shitemi-Kikao-event-with-youths-of-Dagoretti-North.webp",
    "https://i.ibb.co/twCYhqL2/Bright-Shitemi-with-Dagoreti-Youths.webp",
    "https://i.ibb.co/m5wMg3pR/Bright-Shitemi-fumagation-Volunteers.webp",
    "https://i.ibb.co/67tvd2KJ/Bright-Shitemi-Nyalego-Stage-Shade.webp",
    "https://i.ibb.co/fz4DPLYK/Bright-Shitemi-with-Kawangware-Boda-Riders.webp"
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white overflow-x-hidden">
      {/* Editorial Hero Section */}
      <section className="container mx-auto px-4 mb-24">
        <div className="relative rounded-[3rem] overflow-hidden bg-gray-900 h-[60vh] min-h-[500px] flex items-end p-8 md:p-16 group" data-aos="fade-up">
          <img 
            src="https://i.ibb.co/3mX5ttG2/Leading-the-conversation-Bright-Shitemi.webp" 
            alt="Leading the Conversation - Bright Shitemi" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
          
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-maroon text-white rounded-full text-xs font-bold tracking-widest uppercase mb-6 shadow-lg">
              <Newspaper size={14} /> Featured Coverage
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Leading the Conversation on National Transformation
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-light mb-8 max-w-xl">
              From the floors of international forums to the heart of Dagoretti North, Bright Shitemi is setting the agenda for a new generation of leadership.
            </p>
            <button className="flex items-center gap-3 text-white font-bold group-hover:text-brand-maroon transition-colors">
              Read the Full Feature <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Content Column */}
          <div className="lg:w-8/12 space-y-24">
            
            {/* Press Coverage Section */}
            <section data-aos="fade-up">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-serif font-bold text-gray-900">In The News</h2>
                <div className="h-px bg-gray-100 flex-grow mx-8 hidden md:block"></div>
                <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Digital Press Room</span>
              </div>
              
              <div className="grid gap-6">
                {pressCoverage.map((item, i) => (
                  <a 
                    key={i} 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white border border-gray-100 p-6 md:p-8 rounded-[2rem] flex flex-col md:flex-row items-center gap-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-24 h-24 bg-gray-50 rounded-2xl flex items-center justify-center p-4 text-brand-maroon transition-all group-hover:scale-110">
                       {item.isVideo ? <PlayCircle size={48} strokeWidth={1.5} /> : <Newspaper size={48} strokeWidth={1.5} />}
                    </div>
                    <div className="flex-grow text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start gap-3 text-brand-maroon font-bold text-xs uppercase tracking-widest mb-2">
                         <span>{item.source}</span>
                         <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                         <span className="text-gray-400 font-medium">{item.type}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 group-hover:text-brand-maroon transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs text-gray-400 font-bold uppercase tracking-tighter">{item.date}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-full text-gray-400 group-hover:bg-brand-maroon group-hover:text-white transition-all">
                      <ExternalLink size={20} />
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* Impact Gallery Section - Interactive Click to View */}
            <section data-aos="fade-up">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-serif font-bold text-gray-900">On The Ground</h2>
                <div className="h-px bg-gray-100 flex-grow mx-8 hidden md:block"></div>
                <Camera className="text-brand-maroon" size={24} />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.map((img, i) => (
                  <div 
                    key={i} 
                    onClick={() => setSelectedImage(img)}
                    className={`relative cursor-zoom-in rounded-2xl md:rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all group ${i % 3 === 0 ? 'row-span-2' : ''}`}
                  >
                    <img 
                      src={img} 
                      alt={`Bright Shitemi Impact Event ${i}`} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                    />
                    <div className="absolute inset-0 bg-brand-maroon/0 group-hover:bg-brand-maroon/20 transition-all flex items-center justify-center">
                       <Maximize2 className="text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300" size={32} />
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar Area */}
          <div className="lg:w-4/12 space-y-12">
            
            <div className="sticky top-28 space-y-12">
              
              {/* Twitter/X Pulse */}
              <div data-aos="fade-left">
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center text-white">
                      <Share2 size={20} />
                   </div>
                   <h3 className="text-xl font-serif font-bold text-gray-900">Real-time Updates</h3>
                </div>
                <div className="bg-gray-50 rounded-[2.5rem] p-4 border border-gray-100 h-[600px] overflow-hidden flex flex-col shadow-inner">
                   <div className="flex-grow overflow-y-auto custom-scrollbar">
                     <a 
                       className="twitter-timeline" 
                       data-height="600"
                       data-chrome="noheader nofooter noborders transparent"
                       href="https://twitter.com/shitemibright?ref_src=twsrc%5Etfw"
                     >
                       <div className="p-8 text-center text-gray-400">
                         <p className="text-sm font-medium">Fetching latest updates from @shitemibright...</p>
                       </div>
                     </a>
                   </div>
                </div>
              </div>

              {/* Press Resources */}
              <div className="bg-brand-maroon p-8 md:p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden" data-aos="fade-left" data-aos-delay="200">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                   <FileText size={120} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-6 relative z-10">Press Resources</h3>
                <p className="text-white/70 mb-8 relative z-10 text-sm leading-relaxed">
                  Download official high-resolution assets and the 2027 policy framework.
                </p>
                <div className="space-y-4 relative z-10">
                  <button className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center justify-between group transition-all">
                    <span className="text-sm font-bold">2027 Manifesto (PDF)</span>
                    <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                  </button>
                  <button 
                    onClick={handleDownloadPhotos}
                    disabled={isDownloading}
                    className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center justify-between group transition-all disabled:opacity-50 disabled:cursor-wait"
                  >
                    <span className="text-sm font-bold">
                      {isDownloading ? 'Downloading...' : 'Official Photography'}
                    </span>
                    {isDownloading ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : (
                      <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                    )}
                  </button>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-3">
                   <div className="p-2 bg-white/10 rounded-lg">
                      <Mic2 size={16} />
                   </div>
                   <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50">Inquiries: press@brightshitemi.com</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Full Screen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all border border-white/10 z-[110]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={32} />
          </button>
          
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            <img 
              src={selectedImage} 
              alt="Bright Shitemi Impact Full View" 
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl animate-zoom-in"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-xs font-bold uppercase tracking-widest hidden md:block">
            Click anywhere to close
          </div>
        </div>
      )}

      <style>{`
        @keyframes zoom-in {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-zoom-in {
          animation: zoom-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default Media;