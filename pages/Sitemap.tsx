import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  Video, 
  Users, 
  Info, 
  Mail, 
  MessageCircle, 
  ShieldCheck, 
  CreditCard,
  MapPin,
  ArrowRight,
  FileText
} from 'lucide-react';

const Sitemap: React.FC = () => {
  useEffect(() => {
    if ((window as any).AOS) {
      setTimeout(() => {
        (window as any).AOS.refresh();
      }, 100);
    }
  }, []);

  const siteStructure = [
    {
      title: "Campaign Hub",
      icon: <Home className="text-brand-maroon" />,
      links: [
        { name: "Home / Welcome", path: "/", desc: "Introduction to Bright Shitemi's vision for Dagoretti North." },
        { name: "The Agenda", path: "/#agenda", desc: "Detailed policy framework for the 3rd Liberation." },
        { name: "What Drives Us", path: "/#why", desc: "Understanding the challenges and our proposed solutions." }
      ]
    },
    {
      title: "The Candidate",
      icon: <Info className="text-brand-maroon" />,
      links: [
        { name: "Official Biography", path: "/about-bright-shitemi", desc: "Comprehensive profile of Bright Shitemi's leadership and social impact." },
        { name: "My Journey", path: "/story", desc: "Personal story from Matunda to Alliance High and beyond." },
        { name: "Accomplishments", path: "/story#awards", desc: "Recognition and awards received for social entrepreneurship." }
      ]
    },
    {
      title: "Media & Updates",
      icon: <Video className="text-brand-maroon" />,
      links: [
        { name: "Digital Press Room", path: "/media", desc: "Recent news coverage, interviews, and press releases." },
        { name: "Impact Gallery", path: "/media#gallery", desc: "Photos of grassroots community initiatives in Dagoretti North." },
        { name: "Press Resources", path: "/media#resources", desc: "Official high-resolution photography and media assets." }
      ]
    },
    {
      title: "Engagement",
      icon: <Users className="text-brand-maroon" />,
      links: [
        { name: "Connect Directly", path: "/contact", desc: "Reach out to our policy or volunteer desks." },
        { name: "WhatsApp Channel", path: "/whatsapp-community", desc: "Join our official digital movement for real-time updates." },
        { name: "Get Involved", path: "/contact", desc: "Sign up to volunteer or support the ground team." }
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50">
      <section className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 bg-brand-maroon/10 text-brand-maroon rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            Navigation Center
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">Site Index</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A comprehensive overview of the Bright Shitemi digital platform and campaign resources.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {siteStructure.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-brand-maroon/5 rounded-2xl flex items-center justify-center">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-serif font-bold text-gray-900">{category.title}</h2>
              </div>

              <div className="space-y-8 flex-grow">
                {category.links.map((link, lIdx) => (
                  <Link 
                    key={lIdx} 
                    to={link.path}
                    className="group block"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-maroon transition-colors flex items-center gap-2">
                          {link.name}
                          <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                        </h3>
                        <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                          {link.desc}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="mt-16 p-8 md:p-12 bg-gray-900 rounded-[3rem] text-white relative overflow-hidden" data-aos="zoom-in">
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-maroon opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-serif font-bold mb-2">Can't find what you're looking for?</h3>
                <p className="text-gray-400">Our team is available to assist you with any inquiries regarding the 2027 campaign.</p>
              </div>
              <Link to="/contact" className="bg-brand-maroon hover:bg-red-900 text-white font-bold py-4 px-10 rounded-full transition-all whitespace-nowrap">
                Contact Desk
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;