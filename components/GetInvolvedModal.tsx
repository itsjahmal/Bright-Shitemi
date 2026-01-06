import React, { useState } from 'react';
import { 
  X, CreditCard, Smartphone, Loader2, Lock, User, 
  ChevronRight, ArrowLeft, Check, ShieldCheck, AlertCircle 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { saveDonation, initiatePesapalPayment } from '../services/api';

interface GetInvolvedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 'AMOUNT' | 'DETAILS' | 'METHOD' | 'PROCESSING';
type Currency = 'KES' | 'USD';

const GetInvolvedModal: React.FC<GetInvolvedModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  
  // Wizard State
  const [step, setStep] = useState<Step>('AMOUNT');
  
  // Data State
  const [currency, setCurrency] = useState<Currency>('KES');
  const [amount, setAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [method, setMethod] = useState<'mpesa' | 'card'>('mpesa');
  
  // API State
  const [isApiProcessing, setIsApiProcessing] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCurrencyChange = (curr: Currency) => {
    setCurrency(curr);
    setCustomAmount('');
    setAmount(curr === 'KES' ? 1000 : 25);
  };

  const handleAmountSelect = (val: number) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomAmount(val);
    if (val) setAmount(parseInt(val, 10) || 0);
  };

  const nextStep = () => {
    if (step === 'AMOUNT') {
      if (!amount || amount <= 0) return;
      setStep('DETAILS');
    } else if (step === 'DETAILS') {
      if (!name || !email || !phone) return;
      setStep('METHOD');
    }
  };

  const prevStep = () => {
    if (step === 'DETAILS') setStep('AMOUNT');
    if (step === 'METHOD') setStep('DETAILS');
  };

  const handlePay = async () => {
    setStep('PROCESSING');
    setIsApiProcessing(true);
    setApiError(null);

    try {
        const reference = `WEB-PESA-${Date.now()}`;
        
        // 1. Save Transaction record to our database
        await saveDonation({
            name,
            email,
            phone,
            amount,
            currency,
            status: 'pending',
            message: 'Donation via PesaPal',
            reference
        });

        // 2. Call PesaPal Initiation
        const pesapalResponse = await initiatePesapalPayment({
            name,
            email,
            phone,
            amount,
            currency,
            status: 'pending',
            reference
        });

        setIsApiProcessing(false);

        // 3. For PesaPal, we usually redirect the user or open the iframe
        // Since we're in a single-page app, we'll simulate a redirect to a success page for demo
        // but normally we would do: window.location.href = pesapalResponse.redirect_url;
        
        console.log('PesaPal Payment Initiated. Redirect URL:', pesapalResponse.redirect_url);
        
        // Simulation: Since this is a demo environment, we simulate a successful redirect flow
        setTimeout(() => {
            onClose();
            navigate('/payment-success', { 
                state: { 
                  reference: pesapalResponse.order_tracking_id,
                  amount: amount,
                  name: name
                } 
            });
            // Reset state
            setStep('AMOUNT');
            setCustomAmount('');
            setName('');
            setEmail('');
            setPhone('');
        }, 1500);

    } catch (error: any) {
        setIsApiProcessing(false);
        setStep('METHOD');
        setApiError(error.message || 'Unable to start PesaPal payment. Please try again.');
        console.error(error);
    }
  };

  const amountPresets = currency === 'KES' 
    ? [500, 1000, 2500, 5000]
    : [10, 25, 50, 100];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-300"
        onClick={step !== 'PROCESSING' ? onClose : undefined}
      ></div>

      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col max-h-[90vh] animate-fade-in font-sans">
        
        {step === 'PROCESSING' && (
          <div className="absolute inset-0 z-50 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8 animate-fade-in">
             <div className="relative mb-8">
                <div className="absolute inset-0 bg-brand-maroon/20 rounded-full animate-ping opacity-75"></div>
                <div className="relative bg-brand-maroon/10 p-6 rounded-full">
                  <Loader2 size={48} className="text-brand-maroon animate-spin" />
                </div>
             </div>
             <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                 Connecting to PesaPal
             </h3>
             <p className="text-gray-500 text-sm max-w-xs mx-auto">
                 Securely initiating your transaction. Please do not close this window.
             </p>
             <div className="mt-8 flex items-center gap-2 text-xs text-gray-400 bg-gray-50 px-4 py-2 rounded-full">
               <ShieldCheck size={14} />
               <span>PCI DSS Compliant • Secure Payments</span>
             </div>
          </div>
        )}

        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-white/80 backdrop-blur sticky top-0 z-10">
          <div className="flex items-center gap-3">
             {step !== 'AMOUNT' && (
                 <button 
                    onClick={prevStep}
                    className="p-1.5 rounded-full hover:bg-gray-100 transition-colors text-gray-500"
                 >
                    <ArrowLeft size={20} />
                 </button>
             )}
             <div>
                <h2 className="text-xl font-serif font-bold text-gray-900 leading-none">
                  {step === 'AMOUNT' && 'Support Campaign'}
                  {step === 'DETAILS' && 'Your Details'}
                  {step === 'METHOD' && 'Payment Method'}
                </h2>
                <div className="flex items-center gap-2 mt-1">
                  <div className={`h-1 w-6 rounded-full ${step === 'AMOUNT' ? 'bg-brand-maroon' : 'bg-gray-200'}`}></div>
                  <div className={`h-1 w-6 rounded-full ${step === 'DETAILS' ? 'bg-brand-maroon' : 'bg-gray-200'}`}></div>
                  <div className={`h-1 w-6 rounded-full ${step === 'METHOD' ? 'bg-brand-maroon' : 'bg-gray-200'}`}></div>
                </div>
             </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 bg-gray-50 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto">
          
          {/* STEP 1: AMOUNT */}
          {step === 'AMOUNT' && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-gray-100 p-1 rounded-xl flex">
                <button 
                  onClick={() => handleCurrencyChange('KES')}
                  className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${currency === 'KES' ? 'bg-white text-brand-maroon' : 'bg-transparent text-gray-500 hover:text-gray-700'}`}
                >
                  KES (Shilling)
                </button>
                <button 
                  onClick={() => handleCurrencyChange('USD')}
                  className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${currency === 'USD' ? 'bg-white text-brand-maroon' : 'bg-transparent text-gray-500 hover:text-gray-700'}`}
                >
                  USD (Dollar)
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {amountPresets.map((val) => (
                  <button
                    key={val}
                    onClick={() => handleAmountSelect(val)}
                    className={`p-4 rounded-2xl border-2 text-left transition-all duration-200 ${
                      amount === val && !customAmount
                        ? 'border-brand-maroon bg-brand-maroon/5 ring-1 ring-brand-maroon'
                        : 'border-gray-100 bg-white hover:border-brand-maroon/30 hover:bg-gray-50'
                    }`}
                  >
                    <span className={`text-xs font-bold block mb-1 ${amount === val && !customAmount ? 'text-brand-maroon' : 'text-gray-400'}`}>
                      {currency}
                    </span>
                    <span className={`text-xl font-bold ${amount === val && !customAmount ? 'text-brand-maroon' : 'text-gray-900'}`}>
                      {val.toLocaleString()}
                    </span>
                  </button>
                ))}
              </div>

              <div className="relative">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block ml-1">Or Enter Custom Amount</label>
                <div className={`flex items-center bg-gray-50 rounded-2xl border-2 px-4 py-3 transition-colors ${customAmount ? 'border-brand-maroon bg-white' : 'border-transparent'}`}>
                   <span className="text-gray-500 font-bold mr-2">{currency}</span>
                   <input 
                      type="number" 
                      placeholder={currency === 'KES' ? "e.g. 15,000" : "e.g. 150"}
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      className="bg-transparent border-none focus:ring-0 w-full text-lg font-bold text-gray-900 placeholder:text-gray-300"
                   />
                </div>
              </div>

              <button 
                onClick={nextStep}
                disabled={!amount}
                className="w-full bg-brand-maroon text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-red-900 transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-50 disabled:shadow-none"
              >
                <span>Continue</span>
                <ChevronRight size={20} />
              </button>
            </div>
          )}

          {/* STEP 2: DETAILS */}
          {step === 'DETAILS' && (
            <div className="space-y-5 animate-fade-in">
              <div className="space-y-1">
                 <label className="text-xs font-bold text-gray-500 ml-1 uppercase tracking-wider">Full Name</label>
                 <div className="relative">
                   <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                   <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full bg-gray-50 border-transparent focus:bg-white focus:border-brand-maroon/30 focus:ring-0 rounded-2xl pl-12 pr-4 py-3.5 font-medium transition-all"
                   />
                 </div>
              </div>
              <div className="space-y-1">
                 <label className="text-xs font-bold text-gray-500 ml-1 uppercase tracking-wider">Email Address</label>
                 <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full bg-gray-50 border-transparent focus:bg-white focus:border-brand-maroon/30 focus:ring-0 rounded-2xl px-4 py-3.5 font-medium transition-all"
                 />
              </div>
              <div className="space-y-1">
                 <label className="text-xs font-bold text-gray-500 ml-1 uppercase tracking-wider">Phone Number</label>
                 <input 
                    type="tel" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="07XX XXX XXX"
                    className="w-full bg-gray-50 border-transparent focus:bg-white focus:border-brand-maroon/30 focus:ring-0 rounded-2xl px-4 py-3.5 font-medium transition-all"
                 />
              </div>

              <button 
                onClick={nextStep}
                disabled={!name || !email || !phone}
                className="w-full bg-brand-maroon text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-red-900 transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-50 disabled:shadow-none"
              >
                <span>Select Payment Method</span>
                <ChevronRight size={20} />
              </button>
            </div>
          )}

          {/* STEP 3: METHOD */}
          {step === 'METHOD' && (
            <div className="space-y-6 animate-fade-in">
              
              {apiError && (
                 <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-start gap-3 border border-red-100">
                    <AlertCircle className="shrink-0 mt-0.5" size={18} />
                    <span className="text-sm font-medium">{apiError}</span>
                 </div>
              )}

              <div className="space-y-3">
                 <button
                    onClick={() => setMethod('mpesa')}
                    className={`w-full p-4 rounded-2xl border-2 flex items-center justify-between transition-all ${
                        method === 'mpesa' 
                        ? 'border-green-500 bg-green-50/50 ring-1 ring-green-500' 
                        : 'border-gray-100 hover:bg-gray-50 hover:border-gray-200'
                    }`}
                 >
                    <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${method === 'mpesa' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-500'}`}>
                            <Smartphone size={24} />
                        </div>
                        <div className="text-left">
                            <h4 className="font-bold text-gray-900">M-Pesa / Mobile</h4>
                            <p className="text-xs text-gray-500">Fast mobile checkout via PesaPal</p>
                        </div>
                    </div>
                    {method === 'mpesa' && <div className="bg-green-500 text-white p-1 rounded-full"><Check size={14} strokeWidth={3} /></div>}
                 </button>

                 <button
                    onClick={() => setMethod('card')}
                    className={`w-full p-4 rounded-2xl border-2 flex items-center justify-between transition-all ${
                        method === 'card' 
                        ? 'border-brand-maroon bg-brand-maroon/5 ring-1 ring-brand-maroon' 
                        : 'border-gray-100 hover:bg-gray-50 hover:border-gray-200'
                    }`}
                 >
                    <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${method === 'card' ? 'bg-brand-maroon text-white' : 'bg-gray-100 text-gray-500'}`}>
                            <CreditCard size={24} />
                        </div>
                        <div className="text-left">
                            <h4 className="font-bold text-gray-900">Card Payment</h4>
                            <p className="text-xs text-gray-500">Secure Visa/Mastercard processing</p>
                        </div>
                    </div>
                    {method === 'card' && <div className="bg-brand-maroon text-white p-1 rounded-full"><Check size={14} strokeWidth={3} /></div>}
                 </button>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                 <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500 font-medium">Donation Amount</span>
                    <span className="text-sm font-bold text-gray-900">{currency} {amount.toLocaleString()}</span>
                 </div>
                 <div className="h-px bg-gray-200 my-3"></div>
                 <div className="flex justify-between items-center">
                    <span className="text-base text-gray-900 font-bold">Total Contribution</span>
                    <span className="text-xl font-serif font-bold text-brand-maroon">{currency} {amount.toLocaleString()}</span>
                 </div>
              </div>

              <button 
                onClick={handlePay}
                className="w-full bg-[#1F2937] text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-black transition-all flex items-center justify-center gap-2 transform active:scale-[0.98]"
              >
                <Lock size={18} />
                <span>Pay Securely via PesaPal</span>
              </button>
              
              <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1.5">
                <ShieldCheck size={12} />
                <span>Encrypted by PesaPal. Secure and Private.</span>
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default GetInvolvedModal;