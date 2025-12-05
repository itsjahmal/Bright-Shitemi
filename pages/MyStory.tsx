import React from 'react';
import { Quote } from 'lucide-react';

const MyStory: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Bio Hero */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <span className="text-brand-maroon font-bold tracking-widest uppercase mb-2 block text-sm">Biography</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 leading-tight mb-8">
              Meet <br /> Bright Shitemi
            </h1>
            <div className="w-24 h-1 bg-brand-maroon mb-8"></div>
          </div>
          <div className="md:w-1/2 flex justify-center">
             <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-brand-maroon rounded-lg opacity-10 transform translate-x-4 translate-y-4"></div>
                {/* Mobile Hero Image (Portrait) - Visible on small screens */}
                <img 
                    src="https://i.imgur.com/mdkF0J7.png" 
                    alt="Bright Shitemi" 
                    className="relative z-10 rounded-lg shadow-xl w-full md:hidden block object-cover"
                />
                {/* Desktop Hero Image (Landscape) - Visible on medium+ screens */}
                <img 
                    src="https://i.imgur.com/TL7cTlS.png" 
                    alt="Bright Shitemi" 
                    className="relative z-10 rounded-lg shadow-xl w-full hidden md:block object-cover"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/2 text-gray-600 leading-relaxed space-y-6">
                <h2 className="text-4xl font-serif font-bold text-brand-maroon mb-4 block md:hidden">Overview</h2>
                <p>
                    Bright Shitemi was born in Kakamega, Matunda Moi’s Bridge, on 1st August 1990. He was raised in a single-parent family with a father and three sons.
                </p>
                <p>
                    His early years were shaped by the gruelling realities faced by underserved communities, and he witnessed firsthand the hardships endured by over 70% of Kenyans. This piqued his interest in leadership and governance, realising that where he came from meant he had fewer resources and opportunities than others, and connecting this to the political leadership at the time.
                </p>
                <p>
                    He went to school in Kitale, then Hill School Eldoret, before proceeding to Alliance High School and later Maseno University, where he rose to become a student leader.
                </p>
                <p>
                    He later pursued social entrepreneurship and founded and led, as CEO, social impact non-profit organisations that have delivered impact work to millions of youth across Kenya.
                </p>
            </div>
            <div className="md:w-1/2">
                <div className="p-4 border-2 border-white shadow-2xl rotate-2 bg-white inline-block">
                    <img 
                        src="https://picsum.photos/seed/bright_overview/500/600" 
                        alt="Overview" 
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </div>
      </section>

      {/* Personal Life - Dark Grey BG for contrast */}
      <section className="py-20 bg-gray-600 text-white">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row-reverse gap-12 items-center">
             <div className="md:w-1/2 leading-relaxed space-y-6">
                <h2 className="text-4xl font-serif font-bold text-white mb-6">Personal Life</h2>
                <p className="text-gray-100">
                    Growing up a Quaker and attending the Friends Church in Matunda provided a solid foundation that would shape Bright’s worldview. Bright later participated at a Muslim school, where he studied the Holy Quran while maintaining his Christian upbringing. As a child, these exposures expanded his scope and curiosity, leading him to take a deep dive into history, religion, and politics, and how each is interlinked in shaping the world as we know it today.
                </p>
                <p className="text-gray-100">
                    At 25, Bright founded his first organisation, growing it into the most prominent non-profit focused on youth mental health and impacting millions of at-risk youth.
                </p>
                <p className="text-gray-100">
                    Bright believes in one race, the human race; he believes that at the end of the day, we all came from the same place and are headed for the same place. The quality of life we achieve will determine where we lead and how many lives we have impacted along the way.
                </p>
                <p className="text-gray-100 font-medium">
                    Bright is blessed to be a husband and a father of three children.
                </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
                 <img 
                    src="https://picsum.photos/seed/bright_personal/600/800" 
                    alt="Personal Life" 
                    className="shadow-2xl max-h-[600px] object-cover border-4 border-white/10"
                />
            </div>
        </div>
      </section>

       {/* Political Journey */}
       <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 text-gray-600 leading-relaxed space-y-6">
                <h2 className="text-4xl font-serif font-bold text-brand-maroon mb-6">Political Journey</h2>
                <p>
                    Bright believes that 2027 is a pivotal moment in Kenya’s political and economic transformation journey, as it presents an opportunity to usher in Kenya’s 3rd Liberation. It is this that led Mr Shitemi to start Kikao. This organisation supports new-generation aspirants to find a path into mainstream politics and leadership while inculcating strong values and leadership skills.
                </p>
                <p>
                    Bright Shitemi served as a student leader at Maseno University, orchestrating one of the most unique, people-centred, issue-driven campaigns.
                </p>
                <p className="font-bold text-gray-800">
                    Bright believes that if Kenya is ready for change, the men and women who will spearhead it are you and me. Dare to believe with him.
                </p>
            </div>
            <div className="md:w-1/2">
                <img 
                    src="https://picsum.photos/seed/bright_political/800/600" 
                    alt="Political Journey" 
                    className="w-full shadow-lg rounded-sm"
                />
            </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row gap-8 items-center">
             <div className="md:w-1/3 relative">
                 <div className="border-4 border-white shadow-xl max-w-xs mx-auto md:mx-0">
                     <img src="https://picsum.photos/seed/bright_community/400/400" alt="Community Service" className="w-full" />
                 </div>
             </div>
             <div className="md:w-2/3">
                <Quote className="text-brand-maroon w-16 h-16 mb-6" />
                <blockquote className="text-2xl md:text-3xl font-serif font-bold text-gray-900 leading-snug">
                    Mr Shitemi is passionate about women and youth and, above all, uplifting communities. A serial social entrepreneur, he is currently leading Kikao, a social movement that is driving the emergence of a new generation of leaders and leadership in Kenya. He believes we can rewrite the story, and the journey has to start now.
                </blockquote>
             </div>
        </div>
      </section>

      {/* Career Awards & Accomplishments */}
      <section className="py-20 relative bg-gray-400 overflow-hidden">
        {/* Simple background texture/gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-500"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10 flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2 text-white leading-relaxed space-y-6">
                <h2 className="text-4xl font-serif font-bold mb-6">Career Awards & Accomplishments</h2>
                <p>
                    Bright Shitemi is an award-winning social impact leader. At 25, he began his journey in social entrepreneurship focused on youth mental health, working with underserved and vulnerable communities in Kenya. He won the Best Social Impact Innovator Award in the Africa Yes Program supported by Africa Insight.
                </p>
                <p>
                    Through his work, he has impacted over 500,000 Kenyans directly and was involved in the push for the Mental Health Amendment Bill 2018.
                </p>
                <p>
                    He has been recognised as an African Visionary Fellow in social entrepreneurship and innovation, and in 2020 won the Best Social Impact Leader in Africa award from Facebook. He has grown an organisation that will serve 10 million people or more across the continent over the next decade.
                </p>
            </div>
            <div className="md:w-1/2">
                <img 
                    src="https://picsum.photos/seed/bright_awards/600/800" 
                    alt="Awards and Accomplishments" 
                    className="w-auto max-h-[600px] shadow-2xl"
                />
            </div>
        </div>
      </section>
    </div>
  );
};

export default MyStory;