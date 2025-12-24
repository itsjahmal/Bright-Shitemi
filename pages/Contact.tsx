import React, { useEffect, useState } from 'react';
import { 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  CheckCircle, 
  Loader2, 
  AlertCircle,
  Users,
  MessageSquare,
  Globe,
  ArrowRight,
  ShieldCheck,
  Zap,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { sendInquiry } from '../services/api';

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

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form State
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if ((window as any).AOS) {
      setTimeout(() => {
        (window as any).AOS.refresh();
      }, 100);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
        const fullName = `${firstName} ${lastName}`.trim();
        
        await sendInquiry({
            name: fullName,
            email,
            phone,
            message,
            subject: `Contact Form Inquiry from ${fullName}`,
            source: 'contact_form'
        });

        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');

    } catch (err: any) {
        console.error(err);
        setError(err.message || 'Something went wrong. Please try again.');
    } finally {
        setIsLoading(false);
    }
  };

  const socialLinks = {
    facebook: "https://www.facebook.com/share/1A6s29zxBE/?mibextid=wwXIfr",
    twitter: "https://x.com/shitemibright?s=21",
    instagram: "https://www.instagram.com/dagonorth01?igsh=dHQ0NjAyY3ppdW5m&utm_source=qr",
    tiktok: "https://www.tiktok.com/@bright.shitemi?_r=1&_t=ZS-91kbIzfXbdQ",
    linkedin: "https://www.linkedin.com/in/bright-shitemi?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Refined Hero Section with updated image asset */}
      <section className="relative h-[60vh] min-h-[550px] bg-slate-900 w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/8L7gFLyy/11-Connect-Directly-With-Bright-Shitemi.webp" 
            alt="Connect Directly with Bright Shitemi" 
            className="w-full h-full object-cover object-right md:object-[85%_center] opacity-50 scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10"></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl pb-12 md:pb-24" data-aos="fade-right">
            <span className="inline-block px-4 py-1.5 bg-brand-maroon text-white rounded-full text-xs font-bold tracking-widest uppercase mb-6 shadow-lg shadow-brand-maroon/20">
              Direct Accessibility
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-6 leading-[0.9] tracking-tight">
              Connect <br/> <span className="text-brand-maroon">Directly</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-300 max-w-xl leading-relaxed">
              Whether you are in Lavington or Kawangware, your voice matters. Reach out to our constituency desks today.
            </p>
          </div>
        </div>
      </section>

      {/* Overlapping Content Container */}
      <section className="container mx-auto px-4 relative z-30 -mt-24">
        <div className="bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] rounded-[3rem] flex flex-col lg:flex-row overflow-hidden border border-gray-100" data-aos="fade-up">
          
          {/* Left Column: Interactive Form */}
          <div className="lg:w-7/12 p-8 md:p-16 bg-white">
            {!isSubmitted ? (
              <div className="animate-fade-in">
                <div className="mb-10">
                  <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">Send a Message</h2>
                  <p className="text-gray-500">I personally review community feedback with my policy team weekly.</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  {error && (
                      <div className="bg-red-50 text-red-600 p-4 rounded-2xl flex items-start gap-3 border border-red-100 animate-fade-in">
                          <AlertCircle className="shrink-0 mt-0.5" size={18} />
                          <span className="text-sm font-medium">{error}</span>
                      </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">First Name</label>
                      <input 
                        type="text" 
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="e.g. Bright"
                        className="w-full px-6 py-4 border border-gray-100 rounded-2xl focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon transition-all bg-gray-50/50 hover:bg-white focus:bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Last Name</label>
                      <input 
                        type="text" 
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="e.g. Shitemi"
                        className="w-full px-6 py-4 border border-gray-100 rounded-2xl focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon transition-all bg-gray-50/50 hover:bg-white focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-6 py-4 border border-gray-100 rounded-2xl focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon transition-all bg-gray-50/50 hover:bg-white focus:bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Your Message</label>
                    <textarea 
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share your ideas or concerns for Dagoretti North..."
                      className="w-full px-6 py-4 border border-gray-100 rounded-2xl focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon transition-all resize-none bg-gray-50/50 hover:bg-white focus:bg-white"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-brand-maroon text-white font-bold py-5 rounded-2xl hover:bg-red-900 transition-all shadow-xl shadow-brand-maroon/10 text-lg flex items-center justify-center gap-3 disabled:opacity-70 group"
                  >
                    {isLoading ? (
                        <Loader2 size={24} className="animate-spin" />
                    ) : (
                        <>
                          Send Message
                          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-gray-400 font-bold uppercase tracking-widest pt-4">
                    <ShieldCheck size={14} className="text-green-500" />
                    <span>Communication Promise: Response within 24 Hours</span>
                  </div>
                </form>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center space-y-8 animate-fade-in py-12">
                <div className="w-32 h-32 bg-green-50 rounded-[3rem] flex items-center justify-center text-green-600 mb-2 shadow-inner">
                  <CheckCircle size={64} />
                </div>
                <div className="space-y-3">
                  <h2 className="text-5xl font-serif font-bold text-gray-900">Message Received</h2>
                  <p className="text-gray-500 text-xl max-w-md mx-auto font-light leading-relaxed">
                    Thank you for sharing your voice. Together, we drive the 3rd Liberation.
                  </p>
                </div>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-4 px-10 rounded-2xl transition-all"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Connectivity Hub */}
          <div className="lg:w-5/12 bg-gray-900 p-8 md:p-16 text-white relative overflow-hidden flex flex-col">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/topography.png')]"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-maroon opacity-20 rounded-full blur-[100px]"></div>

            <div className="relative z-10 space-y-12">
              <div>
                <h3 className="text-brand-maroon font-black text-xs uppercase tracking-[0.3em] mb-4">The People's Portal</h3>
                <h2 className="text-4xl font-serif font-bold mb-6">Constituency <br/> Connectivity</h2>
                <p className="text-gray-400 text-lg leading-relaxed font-light">
                  We have established specialized desks to ensure every resident of Dagoretti North has a direct line to leadership.
                </p>
              </div>

              {/* Specialized Desks Grid */}
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: <Users size={20} />, title: "Volunteer Desk", desc: "For those ready to join the ground team." },
                  { icon: <MessageSquare size={20} />, title: "Policy Desk", desc: "Submit bills or policy ideas directly." },
                  { icon: <Zap size={20} />, title: "Rapid Response", desc: "Urgent community issues and alerts." }
                ].map((desk, i) => (
                  <div key={i} className="group p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all flex items-start gap-4">
                    <div className="p-3 bg-brand-maroon/20 text-brand-maroon rounded-xl group-hover:scale-110 transition-transform">
                      {desk.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{desk.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{desk.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Ward Focus Interactive-feel List */}
              <div className="pt-8 border-t border-white/10">
                <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-6">Dagoretti North Wards</h4>
                <div className="flex flex-wrap gap-2">
                  {["Kileleshwa", "Kilimani", "Kawangware", "Gatina", "Lavington"].map((ward) => (
                    <span key={ward} className="px-4 py-2 bg-white/5 border border-white/5 rounded-full text-xs font-bold hover:bg-brand-maroon hover:border-brand-maroon transition-all cursor-default">
                      {ward}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Reach Detail */}
              <div className="space-y-4 pt-4">
                <a href="mailto:Niaje@brightshitemi.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-maroon group-hover:border-brand-maroon transition-all">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 font-bold uppercase tracking-widest">Email Bright</span>
                    <span className="text-lg font-bold group-hover:text-brand-maroon transition-colors">Niaje@brightshitemi.com</span>
                  </div>
                </a>
                <a href="tel:+254781071716" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-maroon group-hover:border-brand-maroon transition-all">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 font-bold uppercase tracking-widest">Dial Direct</span>
                    <span className="text-lg font-bold group-hover:text-brand-maroon transition-colors">+254 781 071 716</span>
                  </div>
                </a>
              </div>

              {/* Social Stack */}
              <div className="pt-8 flex gap-4">
                 {[
                   { icon: <Facebook size={20} />, url: socialLinks.facebook, label: "Facebook" },
                   { icon: <Twitter size={20} />, url: socialLinks.twitter, label: "X (Twitter)" },
                   { icon: <Instagram size={20} />, url: socialLinks.instagram, label: "Instagram" },
                   { icon: <Linkedin size={20} />, url: socialLinks.linkedin, label: "LinkedIn" },
                   { icon: <TikTokIcon size={20} />, url: socialLinks.tiktok, label: "TikTok" }
                 ].map((social, i) => (
                   <a 
                    key={i} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={`Follow Bright Shitemi on ${social.label}`}
                    className="p-3 bg-white/5 hover:bg-brand-maroon rounded-xl transition-all hover:-translate-y-1"
                   >
                      {social.icon}
                   </a>
                 ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Trust Quote Section */}
      <section className="container mx-auto px-4 mt-24 text-center">
         <div className="max-w-2xl mx-auto" data-aos="fade-up">
            <Target className="mx-auto text-brand-maroon mb-6" size={48} />
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6">The Journey to 2027 Starts with a Conversation</h3>
            <p className="text-gray-500 text-lg leading-relaxed italic">
              "Leadership is not a solo act; it is a partnership between the visionary and the community. I am here to listen, to act, and to serve."
            </p>
            <div className="mt-8 font-black text-brand-maroon uppercase tracking-[0.3em] text-xs">— Bright Shitemi</div>
         </div>
      </section>
    </div>
  );
};

export default Contact;