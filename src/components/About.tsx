import React from 'react';
import { Heart, ShieldCheck, Clock, Star } from 'lucide-react';
import { portfolioContent } from '@/data/portfolio-content';

export default function About() {
  const { about } = portfolioContent;

  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Heart':
        return <Heart className={className} />;
      case 'ShieldCheck':
        return <ShieldCheck className={className} />;
      case 'Clock':
        return <Clock className={className} />;
      case 'Star':
        return <Star className={className} />;
      default:
        return null;
    }
  };

  return (
    <section id="about" className="section-padding bg-white relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          
          {/* Bio Column (60% width on desktop) */}
          <article className="lg:col-span-3 space-y-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#C4A882] mb-3">About Me</p>
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-[#0F172A]">{about.title}</h2>
              <div className="w-12 h-px bg-[#C4A882] mt-5" aria-hidden="true"></div>
            </div>
            
            <div className="space-y-6 text-[#0F172A]/55 text-base leading-[1.8]">
              {about.bioParagraphs.map((paragraph, idx) => (
                <p 
                  key={idx} 
                  className={idx === 0 ? "text-lg text-[#0F172A]/75 font-medium border-l-2 border-[#C4A882] pl-5 py-1 leading-[1.7]" : ""}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>
          </article>
          
          {/* Values Cards Column (40% width on desktop) */}
          <aside className="lg:col-span-2 space-y-6" aria-labelledby="principles-title">
            <h3 id="principles-title" className="text-xs font-medium uppercase tracking-[0.2em] text-[#0F172A]/30">My Care Principles</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {about.values.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#FAFAFA] p-5 rounded-xl border border-[#0F172A]/5 flex gap-4 items-start transition-colors duration-300 hover:border-[#C4A882]/30"
                >
                  <div className="bg-white p-2.5 rounded-lg border border-[#0F172A]/5 shrink-0">
                    {getIcon(item.iconName, 'w-5 h-5 text-[#C4A882]')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0F172A] mb-1 text-sm">{item.title}</h4>
                    <p className="text-sm text-[#0F172A]/45 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}
