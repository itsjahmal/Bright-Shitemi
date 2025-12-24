import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowLeft, Home, Search, Mail } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center" data-aos="fade-up">
        {/* Decorative Element */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-brand-maroon/5 rounded-full blur-3xl scale-150"></div>
          <div className="relative flex justify-center">
            <div className="p-8 bg-brand-maroon/10 rounded-[3rem] text-brand-maroon">
              <Compass size={80} strokeWidth={1.5} className="animate-[spin_10s_linear_infinite]" />
            </div>
          </div>
        </div>

        <h1 className="text-8xl md:text-9xl font-serif font-black text-brand-maroon mb-4 tracking-tighter">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
          The path seems to have shifted.
        </h2>
        <p className="text-gray-500 text-lg mb-12 max-w-md mx-auto leading-relaxed">
          The page you are looking for doesn't exist or has been moved. Let's get you back on track to the 3rd Liberation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <Link 
            to="/" 
            className="flex flex-col items-center p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:border-brand-maroon/30 hover:bg-white hover:shadow-xl transition-all group"
          >
            <Home className="text-brand-maroon mb-3 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-bold text-gray-900">Go Home</span>
          </Link>
          <Link 
            to="/story" 
            className="flex flex-col items-center p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:border-brand-maroon/30 hover:bg-white hover:shadow-xl transition-all group"
          >
            <Search className="text-brand-maroon mb-3 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-bold text-gray-900">Read Story</span>
          </Link>
          <Link 
            to="/contact" 
            className="flex flex-col items-center p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:border-brand-maroon/30 hover:bg-white hover:shadow-xl transition-all group"
          >
            <Mail className="text-brand-maroon mb-3 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-bold text-gray-900">Contact Us</span>
          </Link>
        </div>

        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-maroon font-bold uppercase tracking-widest text-xs transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Main Site
        </Link>
      </div>
    </div>
  );
};

export default NotFound;