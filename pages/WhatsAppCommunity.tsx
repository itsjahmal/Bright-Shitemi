import React, { useEffect } from 'react';
import { MessageCircle, Users, Bell, ExternalLink, ArrowLeft, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhatsAppCommunity: React.FC = () => {
  const channelUrl = "https://www.whatsapp.com/channel/0029VbBJTFa9hXFDtVkUEu33";

  useEffect(() => {
    // Refresh AOS on mount
    if ((window as any).AOS) {
      setTimeout(() => {
        (window as any).AOS.refresh();
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in relative">
          
          {/* Header Background */}
          <div className="h-32 bg-[#075E54] relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
             <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                <div className="w-24 h-24 bg-white rounded-full p-1.5 shadow-lg flex items-center justify-center">
                   <div className="w-full h-full bg-[#25D366] rounded-full flex items-center justify-center">
                      <MessageCircle size={40} className="text-white fill-current" />
                   </div>
                </div>
             </div>
          </div>

          <div className="pt-14 pb-8 px-8 text-center">
            <h1 className="text-2xl font-serif font-bold text-gray-900 mb-2">Bright Shitemi Community</h1>
            <p className="text-gray-500 font-medium mb-6">Official WhatsApp Channel</p>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-8 text-left space-y-4 shadow-inner">
               <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Why Join?</h3>
               
               <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-2 rounded-full text-green-600 shrink-0">
                    <Bell size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">Real-time Updates</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Be the first to know about campaign events, news, and policy announcements.</p>
                  </div>
               </div>

               <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-2 rounded-full text-green-600 shrink-0">
                    <Users size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">Community Insights</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Join thousands of Dagoretti North residents in shaping our future.</p>
                  </div>
               </div>
               
               <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-2 rounded-full text-green-600 shrink-0">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">Private & Secure</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Your phone number stays private. Admins cannot see your full profile.</p>
                  </div>
               </div>
            </div>

            <div className="space-y-4">
               <p className="text-sm text-gray-500">
                 You are about to open WhatsApp to view this channel.
               </p>
               
               <a 
                 href={channelUrl}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl shadow-md transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 group"
               >
                 <span>View Channel on WhatsApp</span>
                 <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
               </a>

               <Link 
                 to="/" 
                 className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-600 text-sm font-medium transition-colors mt-2"
               >
                 <ArrowLeft size={16} />
                 No thanks, return to website
               </Link>
            </div>
          </div>
          
          <div className="bg-gray-50 border-t border-gray-100 p-3 text-center">
             <p className="text-[10px] text-gray-400 uppercase tracking-wider">Trusted • Official • Secure</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatsAppCommunity;