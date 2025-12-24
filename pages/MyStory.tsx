import React, { useEffect } from 'react';
import { 
  Quote, 
  BookOpen, 
  Flag, 
  Award, 
  Heart, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight,
  CheckCircle,
  Star,
  Trophy,
  Baby,
  Gamepad2,
  Users,
  Briefcase,
  MessageCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MyStory: React.FC = () => {
  useEffect(() => {
    if ((window as any).AOS) {
      setTimeout(() => {
        (window as any).AOS.refresh();
      }, 100);
    }
  }, []);

  return (
    <div className="pt-16 bg-white overflow-x-hidden">
      {/* Redesigned Hero: Full-Width Cover with Responsive Adjustments and dvh sizing */}
      <section className="relative min-h-[80dvh] md:h-[85dvh] w-full bg-slate-100 overflow-hidden flex items-center">
        {/* Background Image: Optimized for responsive framing */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/qF2qZKBB/Meet-Bright-Shitemi.webp" 
            alt="Bright Shitemi - Member of Parliament Candidate for Dagoretti North (2027)" 
            className="w-full h-full object-cover object-[70%_center] md:object-right lg:object-[80%_center]"
          />
          {/* Enhanced Mobile Gradient: Darker on bottom and left for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent md:bg-gradient-to-r md:from-white md:via-white/60 md:to-transparent z-10"></div>
        </div>

        <div className="container mx-auto px-4 relative z-20 pt-20 pb-12 md:py-0">
          <div className="max-w-2xl" data-aos="fade-right" data-aos-duration="1200">
            <span className="inline-block px-4 py-1.5 bg-brand-maroon text-white rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4 md:mb-6 shadow-lg">
              The Journey of a Visionary
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-bold text-gray-900 mb-4 md:mb-6 leading-[0.9] tracking-tight">
              Bright <br/> <span className="text-brand-maroon">Shitemi</span>
            </h1>
            <div className="w-16 md:w-24 h-1 md:h-1.5 bg-brand-maroon mb-6 md:mb-8 rounded-full"></div>
            <p className="text-lg md:text-2xl font-light text-gray-700 max-w-lg leading-relaxed mb-8 md:mb-10">
              Husband, Father, and Serial Social Entrepreneur driving the emergence of a new generation of leadership in Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-brand-maroon hover:bg-red-900 text-white font-bold py-3.5 md:py-4 px-8 md:px-10 rounded-full transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                Get in Touch
                <ArrowRight size={18} />
              </Link>
              <Link to="/whatsapp-community" className="bg-gray-900/10 backdrop-blur hover:bg-gray-900/20 text-gray-900 font-bold py-3.5 md:py-4 px-8 md:px-10 rounded-full border border-gray-900/10 transition-all flex items-center justify-center gap-2">
                <MessageCircle size={18} />
                Join the Community
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Early Years Section */}
      <section id="early-years" className="py-16 md:py-24 bg-white overflow-hidden scroll-mt-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            <div className="w-full lg:w-3/5" data-aos="fade-right">
              <div className="mb-6 md:mb-8 text-center lg:text-left">
                <span className="text-brand-maroon font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] block mb-2">Roots & Resilience</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">The Early Years</h2>
              </div>
              <div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed text-base md:text-lg">
                <p>
                  Bright Shitemi was born in Kakamega, Matunda Moi’s Bridge, on 1st August 1990. He was raised in a single-parent family with a father and three sons.
                </p>
                <p>
                  His early years were shaped by the grueling realities faced by underserved communities, and he witnessed firsthand the hardships endured by over 70% of Kenyans. This piqued his interest in leadership and governance, realizing that where he came from meant he had fewer resources and opportunities than others.
                </p>
                <div className="bg-gray-50 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border-l-4 md:border-l-8 border-brand-maroon font-serif italic text-lg md:text-xl text-gray-800 shadow-sm my-6 md:my-8">
                  "I realized that my zip code shouldn't determine my destiny, but I saw how political leadership often ensured it did. I decided then to change that story."
                </div>
                <p>
                  His academic path reflected his drive for excellence: he went to school in Kitale, then <strong>Hill School Eldoret</strong>, before proceeding to the prestigious <strong>Alliance High School</strong> and later <strong>Maseno University</strong>, where he rose to become a prominent student leader.
                </p>
                <p>
                  He later pursued social entrepreneurship and founded and led, as CEO, social impact non-profit organizations that have delivered impact work to millions of youth across Kenya.
                </p>
              </div>
            </div>
            
            <div className="w-full lg:w-2/5 space-y-6" data-aos="fade-up">
              <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl group">
                <img 
                  src="https://i.ibb.co/NnYPdtXk/Bright-Shitemi-Young.jpg" 
                  alt="Young Bright Shitemi" 
                  className="w-full h-auto transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 md:p-8">
                  <h4 className="text-white font-serif text-xl md:text-2xl font-bold">Foundation of Excellence</h4>
                  <p className="text-white/70 text-xs md:text-sm">Alliance High & Maseno University Leadership</p>
                </div>
              </div>
              <div className="bg-brand-maroon p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
                <Trophy className="absolute -top-4 -right-4 w-24 md:w-32 h-24 md:h-32 opacity-10" />
                <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 md:mb-4 relative z-10">Millions Impacted</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed relative z-10">Transitioning from a student leader to a CEO of top-tier social impact organizations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Life Section - Updated with requested Arsenal Fan Image */}
      <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-center">
            <div className="w-full lg:w-1/2" data-aos="fade-left">
              <div className="mb-6 md:mb-8 text-center lg:text-left">
                <span className="text-brand-maroon font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] block mb-2">Beyond the Public Eye</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">Personal Life</h2>
              </div>
              <div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed text-base md:text-lg">
                <p>
                  Growing up a Quaker and attending the Friends Church in Matunda provided a solid foundation that would shape Bright’s worldview. Bright later participated at a Muslim school, where he studied the <strong>Holy Quran</strong> while maintaining his Christian upbringing.
                </p>
                <p>
                  As a child, these exposures expanded his scope and curiosity, leading him to take a deep dive into history, religion, and politics.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 md:mt-8">
                  <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                    <div className="p-3 bg-brand-maroon/5 rounded-xl text-brand-maroon">
                      <Gamepad2 size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">AFC Leopards & Arsenal</h4>
                      <p className="text-[10px] md:text-xs text-gray-500">Ardent Football Fan</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                    <div className="p-3 bg-brand-maroon/5 rounded-xl text-brand-maroon">
                      <Baby size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Husband & Father</h4>
                      <p className="text-[10px] md:text-xs text-gray-500">Blessed with three children</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2" data-aos="fade-right">
              <div className="relative group mt-8 lg:mt-0">
                <div className="absolute -inset-4 bg-brand-maroon/5 rounded-[2rem] md:rounded-[4rem] blur-2xl"></div>
                <div className="relative z-10 overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl border border-white/50">
                  <img 
                    src="https://i.ibb.co/4wbVJxvK/Bright-Shitemi-Arsenal-Fan.webp" 
                    alt="Bright Shitemi - Ardent Arsenal & AFC Leopards Fan" 
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105" 
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                    <p className="text-sm font-bold flex items-center gap-2">
                       <Star className="text-yellow-400 fill-yellow-400" size={16} />
                       Passion for Football & Community
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Political Journey Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white relative">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="w-full lg:w-1/2" data-aos="fade-right">
              <div className="mb-6 md:mb-8 text-center lg:text-left">
                <span className="text-brand-maroon font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] block mb-2">The 3rd Liberation</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Political Journey</h2>
              </div>
              <div className="space-y-6 md:space-y-8 text-gray-300 leading-relaxed text-base md:text-lg">
                <p>
                  Bright believes that <strong>2027</strong> is a pivotal moment in Kenya’s political and economic transformation journey, as it presents an opportunity to usher in Kenya’s 3rd Liberation.
                </p>
                <p>
                  This conviction led Mr. Shitemi to start <strong>Kikao</strong>. This organization supports new-generation aspirants to find a path into mainstream politics.
                </p>
                <div className="bg-white/5 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-white/10 mt-6 md:mt-8">
                  <p className="text-lg md:text-xl font-serif italic text-white mb-4 md:mb-6">
                    "Bright believes that if Kenya is ready for change, the men and women who will spearhead it are you and me."
                  </p>
                  <p className="text-brand-maroon font-bold text-xl md:text-2xl">Dare to believe with him.</p>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2" data-aos="fade-left">
              <div className="relative mt-8 lg:mt-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-maroon/20 blur-[60px] md:blur-[100px] rounded-full"></div>
                <img 
                  src="https://i.ibb.co/4R7JcvBP/Political-Journey-Bright-Shitemi.webp" 
                  alt="Kikao Political Movement" 
                  className="rounded-[2rem] md:rounded-[3rem] shadow-2xl relative z-10 border border-white/10 w-full object-cover"
                />
                <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-brand-maroon p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-xl z-20 hidden sm:block">
                   <Users className="text-white mb-2" size={32} />
                   <p className="text-white font-bold text-sm md:text-base">New-Generation<br/>Leadership</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Accomplishments */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="w-full lg:w-1/3">
              <div className="lg:sticky lg:top-28 text-center lg:text-left">
                <div className="inline-block p-4 md:p-6 bg-brand-maroon rounded-2xl md:rounded-3xl text-white mb-6 md:mb-8 shadow-xl">
                  <Award size={40} className="md:w-12 md:h-12" />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 md:mb-6 tracking-tight leading-tight">Career Awards & <br className="hidden lg:block"/> Accomplishments</h2>
                <p className="text-gray-500 font-medium text-base md:text-lg leading-relaxed mb-6 md:mb-8">Recognized globally for social impact and systemic change across Africa.</p>
                
                <div className="p-5 md:p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-4 text-left mx-auto lg:mx-0 max-w-xs lg:max-w-none">
                   <div className="bg-brand-maroon/10 p-3 rounded-xl text-brand-maroon">
                     <CheckCircle size={24} />
                   </div>
                   <div>
                     <p className="text-sm font-bold text-gray-900">Legislative Impact</p>
                     <p className="text-[10px] md:text-xs text-gray-500">Mental Health Amendment Bill 2018</p>
                   </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3 space-y-8 md:space-y-12">
              <div className="bg-[#FBFBFC] p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border border-gray-100 shadow-sm" data-aos="fade-up">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 md:mb-10">
                  Bright Shitemi is an award-winning social impact leader. At 25, he began his journey in social entrepreneurship focused on youth mental health.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                  {[
                    { title: "Best Social Impact Innovator", org: "Africa Yes Program", desc: "Recognized for driving change through innovation in mental health." },
                    { title: "Best Social Impact Leader", org: "Facebook 2020", desc: "Awarded as the top social impact leader across the African continent." },
                    { title: "African Visionary Fellow", org: "SFF", desc: "Recognized for excellence in social entrepreneurship and innovative leadership." },
                    { title: "500,000+ Kenyans Impacted", org: "Direct Reach", desc: "Building an organization set to serve 10 million people across Africa." }
                  ].map((award, i) => (
                    <div key={i} className="space-y-2 md:space-y-3">
                       <h4 className="text-brand-maroon font-bold text-lg">{award.title}</h4>
                       <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{award.org}</p>
                       <p className="text-sm text-gray-500 leading-relaxed">{award.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-8 md:p-16 bg-gray-900 text-white rounded-[2.5rem] md:rounded-[4rem] relative overflow-hidden" data-aos="fade-up">
                <div className="absolute top-0 right-0 p-6 md:p-8 opacity-10">
                  <Briefcase className="w-16 h-16 md:w-32 md:h-32" />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 md:mb-6 relative z-10">The Serial Entrepreneur</h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8 relative z-10">
                  Mr. Shitemi is passionate about women and youth and, above all, uplifting communities. Currently leading <strong>Kikao</strong>, a social movement driving leadership in Kenya.
                </p>
                <div className="flex items-center gap-4 relative z-10">
                   <div className="h-px bg-brand-maroon flex-grow"></div>
                   <p className="text-brand-maroon font-serif italic text-lg md:text-xl">"We can rewrite the story."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="py-16 md:py-24 bg-brand-maroon text-white text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
         <div className="container mx-auto px-4 max-w-4xl relative z-10" data-aos="zoom-in">
            <div className="inline-block mb-6 md:mb-10">
               <Quote className="mx-auto text-white/20 w-16 h-16 md:w-24 md:h-24" />
            </div>
            <h2 className="text-3xl md:text-6xl font-serif font-bold mb-8 md:mb-12 leading-[1.1] tracking-tight px-4">
              Ready to be part of the <span className="italic">3rd Liberation</span>?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 px-6 sm:px-0">
              <Link to="/contact" className="bg-white text-brand-maroon hover:bg-gray-100 font-bold py-4 md:py-5 px-10 md:px-14 rounded-full text-base md:text-lg transition-all shadow-2xl flex items-center justify-center gap-3 group">
                Volunteer Today 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/" className="bg-gray-900 hover:bg-black text-white font-bold py-4 md:py-5 px-10 md:px-14 rounded-full text-base md:text-lg transition-all shadow-xl flex items-center justify-center">
                View My Agenda
              </Link>
            </div>
         </div>
      </section>
    </div>
  );
};

export default MyStory;