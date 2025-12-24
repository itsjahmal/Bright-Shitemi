import React, { useState } from 'react';
import { 
  HandCoins, 
  GraduationCap, 
  Trophy, 
  Building2, 
  Stethoscope, 
  Info, 
  AlertTriangle, 
  Target, 
  ArrowRight, 
  Briefcase,
  Users,
  ShieldCheck,
  TrendingUp,
  MousePointer2,
  Heart,
  CheckCircle,
  Lightbulb,
  Globe,
  ShieldAlert,
  AlertCircle,
  Zap,
  ArrowUpRight,
  ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { AgendaItem } from '../types';
import GetInvolvedModal from '../components/GetInvolvedModal';

interface AgendaItemWithIcon extends AgendaItem {
  icon: React.ReactNode;
}

const agendaItems: AgendaItemWithIcon[] = [
  {
    id: 'poverty',
    title: 'Poverty Eradication',
    icon: <HandCoins size={18} />,
    content: (
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h4 className="font-serif font-bold text-brand-maroon text-2xl mb-4 flex items-center gap-2">
              <Info size={24} className="text-brand-maroon/80" />
              The Economic Context
            </h4>
            <p className="text-gray-600 leading-relaxed text-lg">
              A significant portion of households in Dagoretti North face persistent economic hardship. With over 70% of Kenyans living under the shadow of financial instability, high taxation and rising living costs leave families struggling to meet even the most basic needs.
            </p>
          </div>
          <div>
            <h4 className="font-serif font-bold text-brand-maroon text-2xl mb-4 flex items-center gap-2">
              <Target size={24} className="text-brand-maroon/80" />
              The 3rd Liberation Strategy
            </h4>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our goal is to introduce and champion bills that directly cushion vulnerable households. We will fight to eliminate unjustified taxes and strengthen public oversight of finance to ensure that the wealth of the nation serves the people, not the few.
            </p>
          </div>
        </div>
        <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 shadow-sm self-start">
          <h4 className="font-serif font-bold text-gray-900 text-xl mb-6 flex items-center gap-2">
            <AlertTriangle size={20} className="text-brand-maroon" />
            Key Strategic Actions
          </h4>
          <ul className="space-y-4">
            {[
              { t: 'Tax Reform', d: 'Aggressive legislative action against punitive taxes on basic commodities.' },
              { t: 'Financial Oversight', d: 'Establishing strict community-led audits for constituency funds.' },
              { t: 'Social Safety Nets', d: 'Linking vulnerable families to sustainable support systems and grants.' },
              { t: 'SME Protection', d: 'Reducing the cost of doing business for Dagoretti market traders.' }
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-brand-maroon mt-2 shrink-0"></div>
                <div>
                  <span className="block font-bold text-gray-900">{item.t}</span>
                  <span className="text-sm text-gray-500 leading-snug">{item.d}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'education',
    title: 'Education & Jobs',
    icon: <GraduationCap size={18} />,
    content: (
       <div className="space-y-10">
        <div className="bg-brand-maroon/5 p-8 rounded-[2rem] border border-brand-maroon/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <GraduationCap size={120} />
          </div>
          <p className="text-2xl text-gray-800 font-serif italic relative z-10 leading-relaxed">
            "Education is the most powerful weapon which you can use to change the world. We must ensure this weapon is accessible to every child in Dagoretti North, regardless of their background."
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-brand-maroon text-2xl">Educational Excellence</h4>
            <p className="text-gray-600 leading-relaxed text-lg">
              My administration will prioritize transparent bursary distribution via digital tracking, significantly improved school infrastructure, and increased capitation for our public schools. We will focus on teacher support and school feeding programs to ensure no child learns on an empty stomach.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-brand-maroon text-2xl">Digital Economy & Jobs</h4>
            <p className="text-gray-600 leading-relaxed text-lg">
              We will transform Dagoretti North into a digital hub. By upskilling youth in AI, coding, and remote work, we will link them to global opportunities. We will also stabilize tax frameworks for local SMEs to drive organic job creation within our borders.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'youth',
    title: 'Youth & Arts',
    icon: <Trophy size={18} />,
    content: (
       <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-3/5 space-y-6">
            <p className="text-gray-600 text-xl leading-relaxed font-light">
              Sports and the arts are not just hobbies; they are multi-billion dollar industries that can provide essential income-generating avenues for our youth.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              My agenda focuses on protecting these sectors from systemic corruption and providing the infrastructure our talented youth deserve. We will establish <strong>Talent Centers</strong> where young people can record music, produce films, and train in world-class sports facilities.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
               {[
                 { title: 'Funding', icon: <Briefcase size={16} /> },
                 { title: 'Academies', icon: <Trophy size={16} /> },
                 { title: 'Protection', icon: <ShieldCheck size={16} /> }
               ].map((p, i) => (
                 <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center gap-3 font-bold text-brand-maroon transition-transform hover:-translate-y-1">
                    {p.icon}
                    {p.title}
                 </div>
               ))}
            </div>
          </div>
          <div className="lg:w-2/5 bg-gray-900 rounded-[2.5rem] p-8 text-white flex flex-col justify-center">
            <h4 className="text-2xl font-serif font-bold mb-6 text-brand-maroon">Creative Economy Plan</h4>
            <ul className="space-y-4">
              {[
                "Legislative support for creative IP rights",
                "Annual 'Dagoretti Arts & Culture' Festival",
                "Modernizing community sports grounds",
                "Direct links to global talent scouts"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-brand-maroon" size={18} />
                  <span className="text-gray-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
      </div>
    )
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    icon: <Building2 size={18} />,
    content: (
       <div className="space-y-10">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <p className="text-gray-600 text-xl leading-relaxed mb-6">
                Dagoretti North is centrally located but continues to struggle with poor sanitation, illegal dumping, and impassable interior roads.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Proper road networks, reliable water access, and a clean environment are not luxuries—they are non-negotiable human rights. Our infrastructure plan focuses on sustainable urban planning that respects the dignity of every resident.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-brand-maroon/5 p-6 rounded-2xl border border-brand-maroon/10">
                <span className="block text-3xl font-bold text-brand-maroon mb-1">100%</span>
                <span className="text-sm font-bold text-gray-500 uppercase tracking-tighter">Clean Water Goal</span>
              </div>
              <div className="bg-brand-maroon/5 p-6 rounded-2xl border border-brand-maroon/10">
                <span className="block text-3xl font-bold text-brand-maroon mb-1">Zero</span>
                <span className="text-sm font-bold text-gray-500 uppercase tracking-tighter">Illegal Dumpsites</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 text-white p-10 rounded-[3rem] relative overflow-hidden">
             <div className="absolute -bottom-10 -right-10 opacity-5">
               <Building2 size={240} />
             </div>
             <h4 className="font-serif text-3xl font-bold mb-8 text-white relative z-10 flex items-center gap-4">
               Immediate Action Plan:
               <div className="h-px bg-brand-maroon flex-grow"></div>
             </h4>
             <ul className="grid md:grid-cols-2 gap-x-12 gap-y-6 relative z-10">
                {[
                   { t: "Radical Accountability", d: "Strict audits of infrastructure budget and delivery timelines." },
                   { t: "Modern Drainage", d: "Revamping the sewage and drainage systems for public health." },
                   { t: "Sustainable Energy", d: "Solar-powered street lighting in all major pathways." },
                   { t: "Market Revitalization", d: "Upgrading our markets with modern stalls and clean water." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                     <CheckCircle className="text-brand-maroon shrink-0 mt-1" size={20} />
                     <div>
                        <span className="block font-bold text-lg text-white mb-1">{item.t}</span>
                        <span className="text-gray-400 text-sm leading-relaxed">{item.d}</span>
                     </div>
                  </li>
                ))}
             </ul>
          </div>
      </div>
    )
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    icon: <Stethoscope size={18} />,
    content: (
       <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/2 space-y-8">
          <h4 className="text-4xl font-serif font-bold text-brand-maroon leading-tight">Access is a Basic Right, Not a Luxury Privilege</h4>
          <p className="text-gray-600 text-lg leading-relaxed">
            Healthcare in Dagoretti North must be transformed. We will push for increased national healthcare funding while ensuring zero tolerance for the misuse of medical resources.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our priority is to strengthen primary healthcare centers and empower community health workers who are the first line of defense in our neighborhoods.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-3 text-brand-maroon font-bold text-xl hover:translate-x-2 transition-transform">
            Partner with us for medical camps <ArrowRight size={24} />
          </Link>
        </div>
        <div className="lg:w-1/2 space-y-4">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 flex items-center gap-6">
             <div className="p-5 bg-brand-maroon/10 rounded-3xl text-brand-maroon">
                <Stethoscope size={40} />
             </div>
             <div>
               <h5 className="font-bold text-gray-900 text-xl mb-1">Free Medical Outreach</h5>
               <p className="text-gray-500">Regular specialized care clinics powered by our global medical network.</p>
             </div>
          </div>
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 flex items-center gap-6">
             <div className="p-5 bg-brand-maroon/10 rounded-3xl text-brand-maroon">
                <Globe size={40} />
             </div>
             <div>
               <h5 className="font-bold text-gray-900 text-xl mb-1">Universal Care Advocacy</h5>
               <p className="text-gray-500">Legislative focus on NHIF reforms to ensure full coverage for the elderly and vulnerable.</p>
             </div>
          </div>
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 flex items-center gap-6">
             <div className="p-5 bg-brand-maroon/10 rounded-3xl text-brand-maroon">
                <Lightbulb size={40} />
             </div>
             <div>
               <h5 className="font-bold text-gray-900 text-xl mb-1">Mental Health Reform</h5>
               <p className="text-gray-500">Integrating mental health services into all community health facilities.</p>
             </div>
          </div>
        </div>
      </div>
    )
  }
];

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('poverty');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const activeContent = agendaItems.find(item => item.id === activeTab);

  const toggleAccordion = (id: string) => {
    setActiveTab(prev => prev === id ? '' : id);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Optimized for mobile framing and iOS Safari Dynamic Viewport */}
      <section className="relative h-[90dvh] w-full bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/ym0WdZcM/Bright-Safe-Overlay-Mobile-1080x1920.webp" 
            alt="Bright Shitemi - Member of Parliament Candidate for Dagoretti North (2027)" 
            className="w-full h-full object-cover object-[82%_center] lg:hidden block"
          />
          <img 
            src="https://i.ibb.co/99kgrhbM/Bright-Safe-Overlay-Desktop-1920x1080.webp" 
            alt="Bright Shitemi - Member of Parliament Candidate for Dagoretti North (2027)" 
            className="w-full h-full object-cover object-center hidden lg:block"
          />
        </div>
        {/* Enhanced gradient for superior text contrast on mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 md:via-slate-900/30 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 md:from-transparent to-transparent z-10"></div>
        
        <div className="container mx-auto px-4 h-full relative z-20 flex flex-col items-start justify-center pt-20">
            <div className="max-w-2xl text-white" data-aos="fade-right" data-aos-duration="1200">
                <span className="inline-block px-4 py-1.5 bg-brand-maroon/90 backdrop-blur rounded-full text-xs font-bold tracking-widest uppercase mb-6 shadow-lg shadow-black/20">
                  The Leader Dagoretti North Needs
                </span>
                <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-[0.9] tracking-tight drop-shadow-md">
                  Bright <br/> Shitemi
                </h1>
                <div className="w-32 h-1.5 bg-brand-maroon mb-6 rounded-full shadow-sm"></div>
                <p className="text-xl md:text-2xl font-light text-gray-100 md:text-gray-300 max-w-lg leading-relaxed mb-10 drop-shadow-lg">
                  Transforming Dagoretti North through social impact, economic empowerment, and accountable leadership.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/story" className="bg-brand-maroon hover:bg-red-900 text-white font-bold py-4 px-8 rounded-full transition-all shadow-xl hover:-translate-y-1">
                    My Journey
                  </Link>
                  <Link to="/about-bright-shitemi" className="bg-white/10 backdrop-blur hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full border border-white/20 transition-all">
                    Profile
                  </Link>
                </div>
            </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
           <div className="p-2 bg-white/10 backdrop-blur rounded-full border border-white/20 shadow-lg">
              <MousePointer2 className="text-white opacity-80" size={24} />
           </div>
        </div>
      </section>

      {/* Value Pillars Section */}
      <section className="py-24 bg-white relative overflow-hidden border-b border-gray-50">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                icon: <TrendingUp className="text-brand-maroon" />, 
                title: "Visionary Growth", 
                desc: " Strategic planning to transform our constituency into an economic hub for Nairobi." 
              },
              { 
                icon: <ShieldCheck className="text-brand-maroon" />, 
                title: "Accountable Leadership", 
                desc: "Transparent management of resources to ensure every shilling benefits the community." 
              },
              { 
                icon: <Users className="text-brand-maroon" />, 
                title: "People-Centered", 
                desc: "Leadership that listens. Decisions made with the community, for the community." 
              }
            ].map((pillar, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gray-100" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-maroon group-hover:text-white transition-all">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-brand-maroon text-white relative">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: "Lives Impacted", value: "500,000+" },
                { label: "Social Enterprises", value: "3" },
                { label: "Community Events", value: "100+" },
                { label: "Years Experience", value: "10+" },
              ].map((stat, i) => (
                <div key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
                   <div className="text-4xl md:text-5xl font-serif font-bold mb-2">{stat.value}</div>
                   <div className="text-brand-gray/60 font-bold uppercase tracking-widest text-xs">{stat.label}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Bright's Why Section */}
      <section className="py-24 bg-white overflow-hidden scroll-mt-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-start mb-20">
            <div className="lg:w-1/2" data-aos="fade-right">
              <span className="text-brand-maroon font-black text-xs uppercase tracking-[0.3em] block mb-4">The Catalyst for Change</span>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-8 leading-[1.1]">
                Bright's <span className="text-brand-maroon italic">Why</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-xl leading-relaxed font-light">
                <p>
                  Residents of Dagoretti North—from the informal streets of <strong>Kawangware</strong> to the leafy neighborhoods of <strong>Kilimani, Kileleshwa, and Lavington</strong>—face a significant paradox of development.
                </p>
                <p>
                  While our diversity is our strength, our challenges remain systemic: inadequate housing, crumbling infrastructure, limited clean water, high unemployment, and pervasive poverty. These aren't just statistics; they are the lived experiences of families facing outbreaks of respiratory and waterborne diseases, tenure insecurity, and a lack of high-quality education.
                </p>
                <div className="p-8 bg-gray-50 border-l-8 border-brand-maroon rounded-3xl mt-8">
                  <p className="font-serif italic text-gray-900 text-2xl">
                    "We cannot ignore that many in our community face tenure insecurity and low trust in security authorities. My 'Why' is rooted in changing this reality."
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4" data-aos="fade-left">
              <div className="space-y-4 pt-12">
                 <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/5] relative group bg-gray-100 border border-gray-200 p-8 flex flex-col justify-end">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#800000_1px,transparent_1px)] [background-size:20px_20px]"></div>
                    <div className="relative z-10">
                      <Zap className="text-brand-maroon mb-4" size={32} />
                      <h4 className="text-gray-900 font-bold text-lg mb-2">Systemic Inequality</h4>
                      <p className="text-gray-500 text-sm">Bridging the socio-economic divide across our diverse communities.</p>
                    </div>
                 </div>
                 <div className="bg-brand-maroon p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/graph-paper.png')]"></div>
                    <AlertCircle size={32} className="mb-4 text-white/50 group-hover:scale-110 transition-transform" />
                    <p className="text-lg font-serif font-bold">Unlocking Potential</p>
                    <p className="text-sm text-white/70 mt-2">Empowering the youth to lead the 3rd Liberation.</p>
                 </div>
              </div>
              <div className="space-y-4">
                 <div className="bg-gray-900 p-8 rounded-3xl text-white h-48 flex flex-col justify-end relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/topography.png')]"></div>
                    <p className="text-4xl font-serif font-bold text-brand-maroon">WHY?</p>
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 mt-2">Dignity is a Right, not a Privilege.</p>
                 </div>
                 <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/6] relative group bg-gray-50 border border-gray-100 p-8 flex flex-col justify-end">
                    <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
                    <div className="relative z-10">
                      <Globe className="text-brand-maroon mb-4" size={32} />
                      <h4 className="text-gray-900 font-bold text-lg mb-2">Regional Stability</h4>
                      <p className="text-gray-500 text-sm">Ensuring tenure security and community peace for all residents.</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* New Creative Challenge Section: Problem-Vision Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Infrastructure",
                subtitle: "The Environment",
                icon: <Building2 size={32} />,
                problem: "Poor drainage, flooding, and overcrowding in Kawangware and Gatina.",
                vision: "Modern sanitation hubs, paved interior roads, and sustainable urban waste management.",
                bgColor: "bg-slate-50",
                accentColor: "text-blue-600",
                points: ["Inadequate housing", "Poor road planning", "Waste disposal lack", "Flooding hazards"]
              },
              {
                title: "Public Health",
                subtitle: "Well-being",
                icon: <Stethoscope size={32} />,
                problem: "Outbreaks of waterborne diseases and limited specialized healthcare centers.",
                vision: "Equipped primary clinics, community health volunteer networks, and clean water access.",
                bgColor: "bg-emerald-50",
                accentColor: "text-emerald-600",
                points: ["Waterborne diseases", "Respiratory infections", "Limited clean water", "Clinic shortages"]
              },
              {
                title: "Economy",
                subtitle: "Socio-Economics",
                icon: <Briefcase size={32} />,
                problem: "High unemployment rates and barriers to trade for local market vendors.",
                vision: "Digital talent hubs, micro-finance for SMEs, and localized industrial upskilling.",
                bgColor: "bg-orange-50",
                accentColor: "text-orange-600",
                points: ["Persistent poverty", "Unemployment gap", "Loan accessibility", "Language barriers"]
              },
              {
                title: "Governance",
                subtitle: "Security",
                icon: <ShieldAlert size={32} />,
                problem: "Tenure insecurity and low trust in public security authorities.",
                vision: "Community policing, title deed advocacy, and radical transparency in CDF usage.",
                bgColor: "bg-brand-maroon/5",
                accentColor: "text-brand-maroon",
                points: ["Low security trust", "Illegal evictions", "Tenure insecurity", "Lack of protection"]
              }
            ].map((challenge, i) => (
              <div 
                key={i} 
                className={`group relative rounded-[2.5rem] p-8 border border-gray-100 shadow-xl flex flex-col h-[520px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden ${challenge.bgColor}`} 
                data-aos="fade-up" 
                data-aos-delay={i * 100}
              >
                {/* Decorative Pattern Background */}
                <div className="absolute top-0 right-0 w-48 h-48 opacity-5 -mr-16 -mt-16 bg-current text-gray-900 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
                
                {/* Header Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-maroon group-hover:text-white bg-white ${challenge.accentColor}`}>
                    {challenge.icon}
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 block mb-1">{challenge.subtitle}</span>
                    <h3 className="text-3xl font-serif font-bold text-gray-900 leading-tight">{challenge.title}</h3>
                  </div>

                  {/* Problem vs Vision Duality Content */}
                  <div className="flex-grow space-y-6">
                    <div className="space-y-2">
                       <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                         <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                         The Challenge
                       </span>
                       <p className="text-gray-600 font-medium leading-relaxed">
                         {challenge.problem}
                       </p>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-gray-200/50">
                       <span className={`text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 ${challenge.accentColor}`}>
                         <ArrowUpRight size={12} />
                         The Bright Vision
                       </span>
                       <p className="text-gray-900 font-bold leading-relaxed text-lg">
                         {challenge.vision}
                       </p>
                    </div>
                  </div>

                  {/* Detailed Points (Visible on hover in a sophisticated way) */}
                  <div className="mt-auto flex items-center justify-between pt-6">
                    <div className="flex -space-x-2">
                      {challenge.points.slice(0, 3).map((_, idx) => (
                        <div key={idx} className={`w-2 h-2 rounded-full border border-white shadow-sm ${challenge.accentColor.replace('text', 'bg')}`}></div>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-gray-400 flex items-center gap-1 group-hover:text-brand-maroon transition-colors">
                      Learn policy <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section id="agenda" className="py-24 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-4">
              Our Vision for <span className="text-brand-maroon">Dagoretti North</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
              A comprehensive policy framework built on the 3rd Liberation.
            </p>
          </div>

          {/* Desktop Tabbed Interface (Hidden on mobile) */}
          <div className="hidden md:block">
            <div className="flex flex-wrap justify-center gap-3 mb-16" data-aos="fade-up">
              {agendaItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-8 py-4 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center gap-3 shadow-sm
                    ${activeTab === item.id 
                      ? 'bg-brand-maroon text-white shadow-brand-maroon/20 scale-105' 
                      : 'bg-white text-gray-500 hover:text-brand-maroon border border-gray-100'}`}
                >
                  <span className={activeTab === item.id ? 'text-white' : 'text-brand-maroon'}>
                    {item.icon}
                  </span>
                  {item.title}
                </button>
              ))}
            </div>

            <div 
              key={activeTab} 
              className="max-w-6xl mx-auto animate-fade-in bg-white p-10 md:p-16 shadow-2xl rounded-[3rem] border border-gray-100"
              data-aos="fade-up"
            >
              <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                 <h3 className="text-4xl font-serif font-bold text-gray-900 flex items-center gap-4">
                    <span className="p-3 bg-brand-maroon/10 rounded-2xl text-brand-maroon">
                      {activeContent?.icon}
                    </span>
                    {activeContent?.title}
                 </h3>
                 <div className="w-full md:w-32 h-1.5 bg-brand-maroon/20 rounded-full">
                    <div className="h-full bg-brand-maroon rounded-full w-2/3"></div>
                 </div>
              </div>
              <div className="text-gray-700">
                {activeContent?.content}
              </div>
            </div>
          </div>

          {/* Mobile Accordion Interface (Visible on mobile only) */}
          <div className="md:hidden flex flex-col gap-4" data-aos="fade-up">
            {agendaItems.map((item) => (
              <div key={item.id} className="overflow-hidden bg-white rounded-3xl border border-gray-100 shadow-md">
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className={`w-full flex items-center justify-between p-6 transition-colors ${activeTab === item.id ? 'bg-brand-maroon text-white' : 'bg-white text-gray-900'}`}
                >
                  <div className="flex items-center gap-4">
                    <span className={activeTab === item.id ? 'text-white' : 'text-brand-maroon'}>
                      {item.icon}
                    </span>
                    <span className="text-lg font-bold font-serif">{item.title}</span>
                  </div>
                  <ChevronDown className={`transition-transform duration-300 ${activeTab === item.id ? 'rotate-180' : ''}`} size={20} />
                </button>
                
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${activeTab === item.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 text-gray-700 bg-white border-t border-gray-50">
                    <div className="mb-6 h-1 w-12 bg-brand-maroon rounded-full"></div>
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="bg-gray-900 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-maroon opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-maroon opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10" data-aos="zoom-in">
                 <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">
                    Become Part of <br/> the <span className="text-brand-maroon italic">Movement</span>
                 </h2>
                 <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                    The journey to the 3rd Liberation starts with you. Join thousands of residents dedicated to transforming our constituency.
                 </p>
                 <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    <Link to="/contact" className="w-full sm:w-auto bg-brand-maroon hover:bg-red-900 text-white font-bold py-5 px-10 rounded-full text-lg transition-all shadow-xl flex items-center justify-center gap-2">
                      Volunteer Today <ArrowRight size={20} />
                    </Link>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="w-full sm:w-auto bg-white text-brand-maroon hover:bg-gray-100 font-bold py-5 px-10 rounded-full text-lg transition-all shadow-xl flex items-center justify-center gap-2"
                    >
                      Donate <Heart className="fill-brand-maroon" size={20} />
                    </button>
                    <Link to="/whatsapp-community" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white font-bold py-5 px-10 rounded-full text-lg border border-white/10 transition-all flex items-center justify-center gap-2">
                      Join the Channel <Heart className="text-brand-maroon fill-brand-maroon" size={20} />
                    </Link>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Donation Modal Integration */}
      <GetInvolvedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Home;