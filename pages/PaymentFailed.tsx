import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';

const PaymentFailed: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-xl overflow-hidden animate-fade-in border-t-8 border-red-600">
          
          {/* Header */}
          <div className="bg-white p-8 text-center border-b border-gray-100">
            <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle size={56} className="text-red-600" />
            </div>
            <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">Payment Failed</h1>
            <p className="text-red-500 font-medium text-lg">We couldn't process your donation</p>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            <div className="text-center text-gray-600 mb-6">
              <p className="mb-4 leading-relaxed text-lg">
                Unfortunately, the transaction was not completed. This could be due to an issue with your payment provider, insufficient funds, or a network error.
              </p>
              <p className="text-sm font-medium text-gray-500 bg-gray-50 p-4 rounded-xl border border-gray-200">
                Please try again or select a different payment method.
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <Link 
                to="/" 
                className="w-full bg-brand-maroon hover:bg-red-900 text-white font-bold py-4 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              >
                <RefreshCw size={18} />
                Try Again
              </Link>
              
              <Link 
                to="/" 
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <Home size={18} />
                Return to Home
              </Link>
            </div>
          </div>
          
          <div className="bg-gray-100 p-4 text-center text-xs text-gray-500 border-t border-gray-200">
             If this persists, please contact support at <a href="mailto:niaje@brightshitemi.com" className="underline hover:text-brand-maroon text-gray-700 font-bold">niaje@brightshitemi.com</a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;