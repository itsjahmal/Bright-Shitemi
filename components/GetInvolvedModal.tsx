
import React, { useState } from 'react';
import { 
  X, CreditCard, Smartphone, Loader2, Lock, User, 
  ChevronRight, ArrowLeft, Check, ShieldCheck, AlertCircle 
} from 'lucide-react';
import { initiatePesapalPayment } from '../services/api';

interface GetInvolvedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 'AMOUNT' | 'DETAILS' | 'METHOD' | 'PROCESSING';
type Currency = 'KES' | 'USD';

const GetInvolvedModal: React.FC<GetInvolvedModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<Step>('AMOUNT');
  const [currency, setCurrency] = useState<Currency>('KES');
  const [amount, setAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [method, setMethod] = useState<'mpesa' | 'card'>('mpesa');
  const [apiError, setApiError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handlePay = async () => {
    setStep('PROCESSING');
    setApiError(null);

    try {
        const result = await initiatePesapalPayment({
            name, email, phone, amount, currency, method
        });

        // Redirect to PesaPal Checkout
        if (result.redirect_url) {
            window.location.assign(result.redirect_url);
        } else {
            throw new Error('No redirect URL received');
        }
    } catch (error: any) {
        setStep('METHOD');
        setApiError(error.message || 'Payment initiation failed. Please try again.');
    }
  };

  const amountPresets = currency === 'KES' ? [500, 1000, 2500, 5000] : [10, 25, 50, 100];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" onClick={step !== 'PROCESSING' ? onClose : undefined}></div>

      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col max-h-[90vh] animate-fade-in font-sans">
        
        {step === 'PROCESSING' && (
          <div className="absolute inset-0 z-50 bg-white/95 flex flex-col items-center justify-center p-8">
             <div className="relative mb-8">
                <div className="absolute inset-0 bg-brand-maroon/20 rounded-full animate-ping opacity-75"></div>
                <div className="relative bg-brand-maroon/10 p-6 rounded-full"><Loader2 size={48} className="text-brand-maroon animate-spin" /></div>
             </div>
             <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Connecting to PesaPal</h3>
             <p className="text-gray-500 text-sm text-center">Please do not close this window. Redirecting to secure payment page...</p>
          </div>
        )}

        <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
          <div className="flex items-center gap-3">
             {step !== 'AMOUNT' && (
                 <button onClick={() => setStep(step === 'DETAILS' ? 'AMOUNT' : 'DETAILS')} className="p-1.5 rounded-full hover:bg-gray-100 transition-colors text-gray-500"><ArrowLeft size={20} /></button>
             )}
             <h2 className="text-xl font-serif font-bold text-gray-900">Support Campaign</h2>
          </div>
          <button onClick={onClose} className="p-2 bg-gray-50 rounded-full text-gray-400"><X size={20} /></button>
        </div>

        <div className="p-6 overflow-y-auto">
          {step === 'AMOUNT' && (
            <div className="space-y-6">
              <div className="bg-gray-100 p-1 rounded-xl flex">
                {(['KES', 'USD'] as Currency[]).map(curr => (
                  <button key={curr} onClick={() => { setCurrency(curr); setAmount(curr === 'KES' ? 1000 : 25); }} className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${currency === curr ? 'bg-white text-brand-maroon' : 'text-gray-500'}`}>{curr}</button>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3">
                {amountPresets.map(val => (
                  <button key={val} onClick={() => { setAmount(val); setCustomAmount(''); }} className={`p-4 rounded-2xl border-2 text-left ${amount === val && !customAmount ? 'border-brand-maroon bg-brand-maroon/5 ring-1' : 'border-gray-100 bg-white'}`}>
                    <span className="text-xs block text-gray-400">{currency}</span>
                    <span className="text-xl font-bold">{val.toLocaleString()}</span>
                  </button>
                ))}
              </div>
              <input type="number" placeholder="Enter Custom Amount" value={customAmount} onChange={(e) => { setCustomAmount(e.target.value); setAmount(Number(e.target.value)); }} className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-maroon rounded-2xl p-4 font-bold" />
              <button onClick={() => setStep('DETAILS')} disabled={!amount} className="w-full bg-brand-maroon text-white font-bold py-4 rounded-2xl shadow-lg flex items-center justify-center gap-2">Continue <ChevronRight size={20} /></button>
            </div>
          )}

          {step === 'DETAILS' && (
            <div className="space-y-4">
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" className="w-full bg-gray-50 rounded-2xl p-4" />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="w-full bg-gray-50 rounded-2xl p-4" />
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" className="w-full bg-gray-50 rounded-2xl p-4" />
              <button onClick={() => setStep('METHOD')} disabled={!name || !email || !phone} className="w-full bg-brand-maroon text-white font-bold py-4 rounded-2xl">Select Payment Method</button>
            </div>
          )}

          {step === 'METHOD' && (
            <div className="space-y-6">
              {apiError && <div className="bg-red-50 text-red-600 p-4 rounded-xl flex gap-3"><AlertCircle size={18} /> <span className="text-sm">{apiError}</span></div>}
              <button onClick={() => setMethod('mpesa')} className={`w-full p-4 rounded-2xl border-2 flex items-center justify-between ${method === 'mpesa' ? 'border-green-500 bg-green-50/50' : 'border-gray-100'}`}>
                <div className="flex items-center gap-4"><div className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center"><Smartphone /></div> <div><h4 className="font-bold">M-Pesa</h4><p className="text-xs">Fast Checkout</p></div></div>
                {method === 'mpesa' && <Check size={14} />}
              </button>
              <button onClick={() => setMethod('card')} className={`w-full p-4 rounded-2xl border-2 flex items-center justify-between ${method === 'card' ? 'border-brand-maroon bg-brand-maroon/5' : 'border-gray-100'}`}>
                <div className="flex items-center gap-4"><div className="w-12 h-12 bg-brand-maroon text-white rounded-xl flex items-center justify-center"><CreditCard /></div> <div><h4 className="font-bold">Card Payment</h4><p className="text-xs">Visa / Mastercard</p></div></div>
                {method === 'card' && <Check size={14} />}
              </button>
              <button onClick={handlePay} className="w-full bg-gray-900 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2"><Lock size={18} /> Pay {currency} {amount.toLocaleString()}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetInvolvedModal;
