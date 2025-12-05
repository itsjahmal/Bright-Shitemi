import React, { useState } from 'react';
import { AgendaItem } from '../types';

const agendaItems: AgendaItem[] = [
  {
    id: 'poverty',
    title: 'Poverty Eradication (Maliza Umaskini)',
    content: (
      <div className="space-y-6">
        <div>
          <h4 className="font-serif font-bold text-brand-maroon text-xl mb-2">Context</h4>
          <p>
            A significant portion of households in Dagoretti North and across Kenya face persistent economic hardship. High taxation, rising living costs, and widespread poverty leave most families struggling to meet basic needs. Essential services such as healthcare and education remain unaffordable for many, while recurrent expenses rent, utilities, transport, and food strain low and middle-income households.
          </p>
        </div>
        
        <div>
          <h4 className="font-serif font-bold text-brand-maroon text-xl mb-2">Challenges Identified</h4>
          <ul className="list-disc pl-5 space-y-2 marker:text-brand-maroon">
            <li>High cost of living and taxation burdens</li>
            <li>Limited access to essential services</li>
            <li>Economic vulnerability among middle- and low-income earners</li>
            <li>Corruption, wastage, and inefficiency in public finance</li>
            <li>Weak institutional accountability</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif font-bold text-brand-maroon text-xl mb-2">Policy Focus Areas</h4>
          <ul className="list-disc pl-5 space-y-2 marker:text-brand-maroon">
            <li>Introduce bills that cushion vulnerable and low-income households</li>
            <li>Review and eliminate illegal or unjustified taxes</li>
            <li>Advocate for fairer and more transparent taxation policies</li>
            <li>Strengthen public oversight mechanisms</li>
            <li>Promote institutional reforms aimed at improving accountability</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'education',
    title: 'Education and Employment',
    content: (
       <div className="space-y-6">
        <div>
          <h4 className="font-serif font-bold text-brand-maroon text-xl mb-2">Context</h4>
          <p className="mb-4">
            Kenyans face challenges accessing quality education, this has led to unemployment and underemployment. Sadly even those who are lucky to access quality education are faced with limited pathways to stable livelihoods.
          </p>
          <p className="mb-4">
            To address these expectations, the government has, over the last few years, invested billions of shillings in programmes, funds, and various training initiatives to support the youth. These include Kazi kwa Vijana, the Youth Enterprise Development Fund, the revamped National Youth Service and now the Nyota program.
          </p>
          <p className="mb-4">
            The initiatives have had short-term effects. This is mainly due to weak sustainability framework, corruption , their temporal nature and the lengthy bureaucratic procedures for applying for the funds.
          </p>
          <p>
            In Dagoretti North, education affordability and school infrastructure remain major concerns with unemployment levels already at high levels.
          </p>
        </div>

        <div>
          <h4 className="font-serif font-bold text-brand-maroon text-xl mb-2">Challenges Identified</h4>
          <ul className="list-disc pl-5 space-y-2 marker:text-brand-maroon">
            <li>Low youth employment absorption</li>
            <li>Temporary impact of government youth programs</li>
            <li>Bureaucratic barriers to accessing youth funds</li>
            <li>Inequities in bursary allocation</li>
            <li>Poor school infrastructure and inefficient spending</li>
            <li>Increasing youth involvement in crime and drugs due to unemployment</li>
            <li>Corruption in the offices of elected officials charged with disbursing resources</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-serif font-bold text-brand-maroon text-xl mb-2">Policy Focus: Education</h4>
            <ul className="list-disc pl-5 space-y-2 marker:text-brand-maroon">
              <li>Ensure transparency and fairness in bursary distribution</li>
              <li>Advocate for increased and timely school capitation</li>
              <li>Improve and expand school infrastructure</li>
              <li>Strengthen monitoring and evaluation of education expenditures</li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif font-bold text-brand-maroon text-xl mb-2">Policy Focus: Employment & Enterprise</h4>
            <ul className="list-disc pl-5 space-y-2 marker:text-brand-maroon">
              <li>Promote policies that encourage innovation and business growth</li>
              <li>Simplify and stabilize tax frameworks, especially for SMEs and digital workers</li>
              <li>Upskill out-of-school youth and link them to job opportunities</li>
              <li>Facilitate partnerships to introduce economic stimulus and employment programs</li>
              <li>Develop community initiatives aimed at reducing crime linked to unemployment</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'youth',
    title: 'Youth, Sports and Arts',
    content: (
       <div className="space-y-6">
        <div>
          <h4 className="font-serif font-bold text-brand-maroon text-xl mb-2">Context</h4>
          <p>
            Sports and the arts are essential income-generating avenues for young people, yet these sectors lack structured support and protection. The Ministry of Sports and other associated sports agencies have perennially been riddled with corruption, while the arts sector has been completely ignored.
          </p>
        </div>

        <div>
          <h4 className="font-serif font-bold text-brand-maroon text-xl mb-2">Challenges Identified</h4>
          <ul className="list-disc pl-5 space-y-2 marker:text-brand-maroon">
            <li>Limited investment in sports and creative industries</li>
            <li>Governance issues and corruption within sports agencies</li>
            <li>Absence of long-term policy frameworks for creatives</li>
            <li>Insufficient infrastructure and support systems</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif font-bold text-brand-maroon text-xl mb-2">Policy Focus Areas</h4>
          <ul className="list-disc pl-5 space-y-2 marker:text-brand-maroon">
            <li>Strengthen legislative and policy frameworks for sports and creative industries.</li>
            <li>Encourage targeted investment and sustainable funding.</li>
            <li>Implement oversight to ensure transparent use of public resources.</li>
            <li>Use human-centred design to engage stakeholders in developing sector-specific solutions.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure, Water and Sanitation',
    content: (
       <div className="space-y-6">
        <div>
          <h4 className="font-serif font-bold text-brand-maroon text-xl mb-2">Context</h4>
          <p>
             Despite being centrally located within Nairobi (Kawangware, Lavington, Kilimani, Kileleshwa) Dagoretti North struggles with inadequate infrastructure, poor sanitation, and unplanned development. Some roads in Kawangware, Kilimani, Lavington and Kileleshwa are impassable when it rains, drainage is blocked, and leaks with sewage, and several locations in the constituency have been turned into illegal dumping sites, posing a health hazard to thousands of residents and long-term exposing residents to dangerous diseases.
          </p>
        </div>

        <div>
          <h4 className="font-serif font-bold text-brand-maroon text-xl mb-2">Challenges Identified</h4>
          <ul className="list-disc pl-5 space-y-2 marker:text-brand-maroon">
            <li>Poor road conditions, especially during rainy seasons</li>
            <li>Blocked and damaged drainage systems</li>
            <li>Illegal dumping of waste poses health risks</li>
            <li>Congestion and drainage strain due to unregulated construction</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif font-bold text-brand-maroon text-xl mb-2">Policy Focus Areas</h4>
          <ul className="list-disc pl-5 space-y-2 marker:text-brand-maroon">
            <li>Demand accountability from relevant authorities for infrastructure delivery</li>
            <li>Improve road quality, drainage systems, and waste management by engaging associated agencies and highlighting these issues at the floor of parliament.</li>
            <li>Strengthen enforcement against illegal construction and environmental violations</li>
            <li>Support urban planning practices that promote sustainability and safety</li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-6 border-l-4 border-brand-maroon italic text-gray-600">
           <p>
             Proper roads, access to water, and a clean environment should not be matters for discussion for a functioning government and leadership in a functioning democracy. Yet, where I come from, Dagoretti North, residents face severely limited infrastructure despite the constituency falling right in the middle of the capital city and even housing the State House... My agenda will be to hold authorities accountable and lead efforts to impound and prevent these illegalities.
           </p>
        </div>
      </div>
    )
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    content: (
       <div className="space-y-6">
        <p>
          Healthcare remains out of reach for many people in my Kenya, specifically in the constituency I grew up in as an adult, Dagoretti North, and in Kawangware. The problem is dire, with limited infrastructure and affordability issues, even when services are available.
        </p>
        <p className="font-medium text-lg text-gray-800">
          My agenda is to push for increased healthcare funding and to ensure consequences for any misuse of these resources.
        </p>
        <div className="bg-brand-maroon/10 p-6 rounded-sm">
           <p className="mb-2">
             Outside government systems, I will leverage my local and international networks to provide <strong>FREE medical camps</strong> for residents.
           </p>
           <button className="text-brand-maroon font-bold hover:underline inline-flex items-center gap-1 mt-2">
             Read more about the medical camps we have supported &rarr;
           </button>
        </div>
      </div>
    )
  }
];

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('poverty');

  const activeContent = agendaItems.find(item => item.id === activeTab);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full bg-slate-900 overflow-hidden">
        
        {/* Background Image Container - Using separate images for instant breakpoint switching */}
        <div className="absolute inset-0 z-0">
          {/* Mobile Image (Visible < 768px) */}
          <img 
            src="https://i.imgur.com/mdkF0J7.png" 
            alt="Bright Shitemi Mobile" 
            className="w-full h-full object-cover object-center md:hidden block"
          />
          {/* Desktop Image (Visible >= 768px) */}
          <img 
            src="https://i.imgur.com/TL7cTlS.png" 
            alt="Bright Shitemi Desktop" 
            className="w-full h-full object-cover object-center hidden md:block"
          />
        </div>

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent z-10"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 h-full relative z-20 flex flex-col items-start justify-end md:justify-center pb-20 md:pb-0">
            {/* Text Area */}
            <div 
              className="max-w-xl text-white"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 leading-tight">Bright <br/> Shitemi</h1>
                <h2 className="text-2xl md:text-3xl font-light mb-2 text-gray-200">Social Impact Leader</h2>
                <div className="h-1 w-24 bg-brand-maroon mb-4"></div>
                <h3 className="text-xl md:text-2xl font-light text-gray-300">Aspirant, Dagoretti North</h3>
            </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-20 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-maroon mb-4">
              My Agenda
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {agendaItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-6 py-3 text-sm md:text-base font-bold transition-all duration-300 rounded-sm
                  ${activeTab === item.id 
                    ? 'bg-brand-maroon text-white shadow-lg transform -translate-y-1' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto animate-fade-in bg-white p-6 md:p-8 shadow-sm border border-gray-100 rounded-sm">
            <h3 className="text-3xl font-serif font-bold text-brand-maroon mb-8 pb-4 border-b border-gray-200">
              {activeContent?.title}
            </h3>
            <div className="text-gray-700 leading-relaxed">
              {activeContent?.content}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
