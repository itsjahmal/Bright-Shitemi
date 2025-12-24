
import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Loader2, CheckCircle, AlertCircle, Clock, Home, RefreshCw } from 'lucide-react';

const PaymentReturn: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<'VERIFYING' | 'COMPLETED' | 'FAILED' | 'PENDING' | 'ERROR'>('VERIFYING');
  const [details, setDetails] = useState<any>(null);

  const orderTrackingId = searchParams.get('OrderTrackingId');

  const verifyPayment = async () => {
    if (!orderTrackingId) {
      setStatus('ERROR');
      return;
    }

    setStatus('VERIFYING');
    try {
      const response = await fetch(`/api/donations/verify?orderTrackingId=${orderTrackingId}`);
      if (!response.ok) throw new Error('Verification failed');
      const data = await response.json();
      
      setDetails(data);
      setStatus(data.status); // COMPLETED, FAILED, or PENDING
    } catch (err) {
      console.error(err);
      setStatus('ERROR');
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [orderTrackingId]);

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-12 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-lg">
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 text-center border border-gray-100">
          
          {status === 'VERIFYING' && (
            <div className="animate-fade-in">
              <div className="w-20 h-20 bg-brand-maroon/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Loader2 className="text-brand-maroon animate-spin" size={40} />
              </div>
              <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">Verifying Payment</h1>
              <p className="text-gray-500">Please wait while we confirm your contribution with PesaPal...</p>
            </div>
          )}

          {status === 'COMPLETED' && (
            <div className="animate-fade-in">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="text-green-600" size={48} />
              </div>
              <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">Asante Sana!</h1>
              <p className="text-gray-500 mb-8">Your donation of {details?.currency} {details?.amount?.toLocaleString()} was successful.</p>
              
              <div className="bg-gray-50 rounded-2xl p-6 text-left mb-8 space-y-2 text-sm border border-gray-100">
                <div className="flex justify-between"><span className="text-gray-400">Reference:</span> <span className="font-mono font-bold">{orderTrackingId}</span></div>
                <div className="flex justify-between"><span className="text-gray-400">Method:</span> <span className="font-bold">{details?.payment_method || 'PesaPal'}</span></div>
              </div>

              <button onClick={() => navigate('/')} className="w-full bg-brand-maroon text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2">
                <Home size={18} /> Return Home
              </button>
            </div>
          )}

          {status === 'PENDING' && (
            <div className="animate-fade-in">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8">
                <Clock className="text-blue-600" size={48} />
              </div>
              <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">Payment Pending</h1>
              <p className="text-gray-500 mb-8">Your transaction is still being processed. It might take a few minutes to reflect.</p>
              
              <div className="flex flex-col gap-3">
                <button onClick={verifyPayment} className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2">
                  <RefreshCw size={18} /> Refresh Status
                </button>
                <button onClick={() => navigate('/')} className="w-full bg-gray-100 text-gray-600 font-bold py-4 rounded-2xl">
                  Return Home
                </button>
              </div>
            </div>
          )}

          {(status === 'FAILED' || status === 'ERROR') && (
            <div className="animate-fade-in">
              <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-8">
                <AlertCircle className="text-red-600" size={48} />
              </div>
              <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">Payment Failed</h1>
              <p className="text-gray-500 mb-8">We encountered an issue while verifying your payment. Please try again or contact support.</p>
              
              <button onClick={() => navigate('/contact')} className="w-full bg-brand-maroon text-white font-bold py-4 rounded-2xl">
                Contact Support
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentReturn;
