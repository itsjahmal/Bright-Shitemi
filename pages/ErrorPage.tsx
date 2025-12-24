import React from 'react';
import { AlertCircle, RefreshCcw, Home } from 'lucide-react';

const ErrorPage: React.FC = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl text-center border border-gray-100" data-aos="zoom-in">
        <div className="w-20 h-20 bg-red-50 text-red-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
          <AlertCircle size={40} />
        </div>
        
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Something went wrong</h2>
        <p className="text-gray-500 mb-10 leading-relaxed">
          An unexpected error occurred while loading this section. Our team has been notified.
        </p>

        <div className="space-y-4">
          <button 
            onClick={handleRefresh}
            className="w-full bg-brand-maroon text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-red-900 transition-all flex items-center justify-center gap-2"
          >
            <RefreshCcw size={18} />
            Refresh Page
          </button>
          
          <a 
            href="/"
            className="w-full bg-gray-100 text-gray-700 font-bold py-4 rounded-2xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
          >
            <Home size={18} />
            Return to Safety
          </a>
        </div>

        <p className="mt-8 text-xs text-gray-400 font-medium">
          If the issue persists, please contact niaje@brightshitemi.com
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;