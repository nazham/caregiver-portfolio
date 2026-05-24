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
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          
          {/* Bio Column (60% width on desktop) */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">{about.title}</h2>
              <div className="w-16 h-1 bg-blue-600 rounded-full mt-3" aria-hidden="true"></div>
            </div>
            
            <div className="space-y-6 text-slate-600 text-base leading-relaxed font-medium">
              {about.bioParagraphs.map((paragraph, idx) => (
                <p 
                  key={idx} 
                  className={idx === 0 ? "text-lg text-slate-800 font-semibold border-l-4 border-blue-500 pl-4 py-1" : ""}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>
          </div>
          
          {/* Values Cards Column (40% width on desktop) */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">My Care Principles</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {about.values.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow duration-300 flex gap-4 items-start"
                >
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 shrink-0">
                    {getIcon(item.iconName, `w-6 h-6 ${item.color}`)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-650 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
