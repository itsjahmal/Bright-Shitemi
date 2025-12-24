import React, { useEffect } from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Users, 
  ShieldCheck, 
  Video, 
  Award, 
  Briefcase,
  Heart,
  Target,
  Trophy,
  ExternalLink
} from 'lucide-react';

const AboutBrightShitemi: React.FC = () => {
  useEffect(() => {
    if ((window as any).AOS) {
      setTimeout(() => {
        (window as any).AOS.refresh();
      }, 100);
    }
  }, []);

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      {/* SEO Hero Section - Optimized for Face Visibility */}
      <section className="container mx-auto px-4 mb-20" data-aos="fade-up">
        <div className="bg-gray-900 rounded-[3rem] overflow-hidden relative p-8 md:p-20 text-white min-h-[450px] md:min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://i.ibb.co/0j8cbYSg/Bright2-0-Safe-Overlay-Desktop-1920x1080.webp" 
              alt="Bright Shitemi - Member of Parliament Candidate for Dagoretti North (2027)" 
              className="w-full h-full object-cover opacity-50 object-[85%_25%] md:object-center transition-transform duration-700"
            />
            {/* Multi-directional gradient for maximum readability and image protection */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent md:bg-gradient-to-r md:from-gray-900 md:via-gray-900/60 md:to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-4xl">
            <div className="inline-block px-4 py-1 bg-brand-maroon text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6">
              Official Candidate Profile
            </div>
            <h1 className="text-4xl md:text-7xl font-serif font-bold leading-tight mb-6 drop-shadow-sm">
              Bright Shitemi | Member of Parliament Candidate for Dagoretti North (2027)
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl leading-relaxed">
              Kenyan politician and Member of Parliament Candidate for Dagoretti North (2027), driving social impact and accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-12 gap-12">
          
          {/* Left: Biography Details */}
          <div className="md:col-span-8 space-y-16">
            
            {/* Biography & Role */}
            <section data-aos="fade-up">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                <ShieldCheck className="text-brand-maroon" /> Profile Overview
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  <strong>Full Name:</strong> Bright Shitemi
                </p>
                <p>
                  <strong>Role:</strong> Member of Parliament Candidate for Dagoretti North (2027).
                </p>
                <p>
                  Bright Shitemi is a Kenyan politician and Member of Parliament Candidate for Dagoretti North (2027) in Nairobi County. He is a social impact leader with over a decade of experience in youth empowerment, mental health advocacy, and community development across Kenya. He is contesting in the 2027 General Elections on a platform of accountability, anti-corruption, and economic empowerment.
                </p>
                <p className="font-medium text-gray-800">
                  He has been actively involved in community initiatives across Dagoretti North, including Kawangware, Gatina, and surrounding neighborhoods.
                </p>
                <p>
                   He is featured on <strong>Kenyans.co.ke</strong> as a prominent public personality and leader dedicated to driving social impact and political advocacy in the region.
                </p>
              </div>
            </section>

            {/* Birthplace & Education */}
            <section className="grid sm:grid-cols-2 gap-8" data-aos="fade-up">
              <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
                <MapPin className="text-brand-maroon mb-4" size={32} />
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Birthplace</h3>
                <p className="text-gray-600">Matunda Moi’s Bridge, Kakamega, Kenya.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
                <GraduationCap className="text-brand-maroon mb-4" size={32} />
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Education</h3>
                <p className="text-gray-600">Maseno University (Student Leadership Alumni).</p>
              </div>
            </section>

            {/* Leadership Background */}
            <section data-aos="fade-up">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Briefcase className="text-brand-maroon" /> Leadership & Impact
              </h2>
              <div className="grid gap-6">
                <div className="p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-gray-900">Mental 360 (Now Mental Health Organizations)</h4>
                    <span className="bg-brand-maroon/10 text-brand-maroon px-3 py-1 rounded-full text-[10px] font-black uppercase">2018–2025</span>
                  </div>
                  <p className="text-gray-600">As Founder and CEO of Mental 360, Bright Shitemi led one of Kenya’s most impactful youth-focused mental health organizations, delivering care and psychosocial support to over 500,000 young people and contributing to legislative advocacy for the Mental Health Amendment Bill.</p>
                </div>
                
                <div className="p-8 bg-brand-maroon/5 border border-brand-maroon/10 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <Trophy className="text-brand-maroon" />
                    <h4 className="text-xl font-bold text-gray-900">Recent Awards & Recognition</h4>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="w-1.5 h-1.5 bg-brand-maroon rounded-full mt-2 shrink-0"></div>
                      <p className="text-gray-700 font-medium"><strong>Top 100 Kenyans (2025):</strong> Ranked #9 in the Top 100 Kenyans (2025) for contributions to social impact and leadership.</p>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-1.5 h-1.5 bg-brand-maroon rounded-full mt-2 shrink-0"></div>
                      <p className="text-gray-700 font-medium"><strong>CEO of the Year (2025):</strong> Honored for exceptional leadership and social enterprise excellence.</p>
                    </li>
                  </ul>
                </div>

                <div className="p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Kikao Youth Movement</h4>
                  <p className="text-gray-600">Founder of Kikao, a political organization dedicated to mentoring and supporting a new generation of aspirants to enter mainstream politics through the 47 counties of Kenya.</p>
                </div>
              </div>
            </section>

            {/* Community Involvement */}
            <section data-aos="fade-up">
               <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Heart className="text-brand-maroon" /> Community Involvement
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { title: "Cleanups", desc: "Leading environmental sanitation drives in Kawangware and Gatina." },
                  { title: "Sports", desc: "Modernizing local football grounds and sponsoring youth tournaments." },
                  { title: "Emergencies", desc: "Rapid response volunteer coordination for fire and flood victims." }
                ].map((item, i) => (
                  <div key={i} className="text-center p-6">
                    <div className="w-12 h-12 bg-brand-maroon/10 text-brand-maroon rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users size={20} />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Interviews & Media */}
            <section data-aos="fade-up">
               <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Video className="text-brand-maroon" /> Public Interviews & Media
              </h2>
              <div className="grid sm:grid-cols-2 gap-12">
                {/* Interview 1: NTV */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-brand-maroon text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest">NTV Kenya</span>
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-lg aspect-video bg-gray-100 border border-gray-100 mb-4">
                    <iframe 
                      className="w-full h-full" 
                      src="https://www.youtube.com/embed/zxYKqkJmQ9E" 
                      title="NTV Kenya Interview - Bright Shitemi" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h4 className="font-bold text-gray-900 leading-tight text-xl">
                    Corrupt Leaders Should Face the Death Penalty or Life in Prison
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    In an interview with <strong>NTV Kenya</strong>, Bright Shitemi discusses accountability in leadership and the need for stricter anti-corruption measures in public office.
                  </p>
                </div>

                {/* Interview 2: Political Headache */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-gray-800 text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest">Political Headache</span>
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-lg aspect-video bg-gray-100 border border-gray-100 mb-4">
                    <iframe 
                      className="w-full h-full" 
                      src="https://www.youtube.com/embed/IRZoaNdVqQc" 
                      title="Political Headache Interview - Bright Shitemi" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h4 className="font-bold text-gray-900 leading-tight text-xl">
                    Mobilizing All 47 Counties for a 2027 Takeover
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    In a feature with <strong>Political Headache</strong>, Bright Shitemi discusses his extensive grassroots mobilization across all 47 counties in preparation for the 2027 General Elections.
                  </p>
                </div>

                {/* Media Item: Kenyans.co.ke */}
                <div className="sm:col-span-2">
                  <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 flex flex-col md:flex-row items-center gap-6">
                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                      <Award className="text-brand-maroon" size={32} />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Featured Personality on Kenyans.co.ke</h4>
                      <p className="text-gray-600 text-sm leading-relaxed italic">
                        "Recognized as a leading public personality and social impact advocate, driving the conversation on national transformation and youth empowerment."
                      </p>
                    </div>
                    <a 
                      href="https://www.kenyans.co.ke/personality/bright-shitemi" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-white border border-gray-200 px-6 py-3 rounded-full text-xs font-bold uppercase flex items-center gap-2 hover:bg-gray-100 transition-colors"
                    >
                      View Profile <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right: Vision & Sidebar */}
          <div className="md:col-span-4">
            <div className="sticky top-28 space-y-8">
              
              {/* Campaign Vision Card */}
              <div className="bg-brand-maroon p-8 md:p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                <Target className="absolute -top-6 -right-6 w-32 h-32 opacity-10" />
                <h3 className="text-2xl font-serif font-bold mb-6">Campaign Vision</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="shrink-0 mt-1" size={18} />
                    <span className="text-sm"><strong>Anti-Corruption:</strong> Enacting strict laws for public resource management.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="shrink-0 mt-1" size={18} />
                    <span className="text-sm"><strong>Accountability:</strong> Weekly transparency reports on constituency funds.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="shrink-0 mt-1" size={18} />
                    <span className="text-sm"><strong>Economic Empowerment:</strong> Eliminating punitive taxes on micro-enterprises.</span>
                  </li>
                </ul>
              </div>

              {/* Quick Facts */}
              <div className="bg-gray-50 p-8 rounded-[3rem] border border-gray-100">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">Quick Facts</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px] shrink-0">Candidate</span>
                    <span className="text-gray-900 font-bold text-right ml-4">Dagoretti North 2027</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-gray-200 pb-2">
                    <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px] shrink-0 mt-1">Party Affiliation</span>
                    <span className="text-gray-900 font-bold text-right ml-4 leading-tight">Democratic National Alliance</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px] shrink-0">Impact Award</span>
                    <span className="text-gray-900 font-bold text-right ml-4">CEO of the Year (2025)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px] shrink-0">Ranking</span>
                    <span className="text-gray-900 font-bold text-right ml-4">#9 Top 100 Kenyans</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px] shrink-0">Experience</span>
                    <span className="text-gray-900 font-bold text-right ml-4">10+ Years Social Impact</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBrightShitemi;