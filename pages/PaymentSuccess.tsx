import React, { useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { CheckCircle, Home, Heart } from 'lucide-react';

const PaymentSuccess: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as { reference?: string; amount?: number; name?: string } | null;

  useEffect(() => {
    // If accessed directly without state, redirect to home
    if (!state) {
      const timer = setTimeout(() => navigate('/'), 3000);
      return () => clearTimeout(timer);
    }
  }, [state, navigate]);

  if (!state) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4 animate-pulse">
          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
          <p className="text-gray-500 font-serif">Redirecting...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-xl overflow-hidden animate-fade-in border-t-8 border-[#3BB75E]">
          
          {/* Header */}
          <div className="bg-white p-8 text-center border-b border-gray-100">
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={56} className="text-[#3BB75E]" />
            </div>
            <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">Thank You!</h1>
            <p className="text-gray-500 font-medium text-lg">Your donation was successful</p>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            <div className="text-center text-gray-600 mb-6">
              <p className="mb-2 text-lg">Asante sana, <span className="font-bold text-brand-maroon">{state.name}</span>!</p>
              <p className="leading-relaxed">Your contribution helps drive the Bright Shitemi campaign forward. Together, we are building a better future for Dagoretti North.</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 space-y-3 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#3BB75E]"></div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Amount Donated</span>
                <span className="text-2xl font-serif font-bold text-brand-maroon">KES {state.amount?.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-gray-500 text-xs uppercase tracking-wide">Reference Code</span>
                <span className="text-gray-700 font-mono text-sm bg-white px-3 py-1 rounded-lg border border-gray-200">{state.reference}</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <Link 
                to="/whatsapp-community" 
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 group transform hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" className="group-hover:scale-110 transition-transform">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.248-.57-.349zM12.097 22c-5.521 0-9.997-4.477-9.997-10 0-1.765.459-3.468 1.332-4.979L2.25 2.25l4.877 1.272a9.967 9.967 0 0 1 4.97-1.328c5.521 0 9.997 4.476 9.997 10S17.618 22 12.097 22z"/>
                </svg>
                Join WhatsApp Community
              </Link>
              
              <Link 
                to="/" 
                className="w-full bg-brand-maroon hover:bg-red-900 text-white font-bold py-4 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              >
                <Home size={18} />
                Return to Home
              </Link>
            </div>
          </div>
          
          <div className="bg-gray-100 p-4 text-center text-xs text-gray-500 flex items-center justify-center gap-1 border-t border-gray-200">
            <Heart size={12} className="fill-brand-maroon text-brand-maroon" />
            Powered by the People of Dagoretti North
          </div>

        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;