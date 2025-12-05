import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center transition-opacity duration-500">
      <div className="flex flex-col items-center">
        {/* Brand Name */}
        <h2 className="text-brand-maroon font-serif font-bold tracking-[0.2em] text-2xl animate-fade-in uppercase mb-8">
          Bright Shitemi
        </h2>

        {/* Animated Dots */}
        <div className="flex space-x-3">
          <div className="w-4 h-4 bg-brand-maroon rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-4 h-4 bg-brand-maroon rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-4 h-4 bg-brand-maroon rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;