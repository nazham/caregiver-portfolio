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
    <section id="about" className="section-padding bg-panel-bg relative transition-colors duration-300">
      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          
          {/* Bio Column (60% width on desktop) */}
          <article className="lg:col-span-3 space-y-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">About Me</p>
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-primary-text">{about.title}</h2>
              <div className="w-12 h-px bg-accent mt-5" aria-hidden="true"></div>
            </div>
            
            <div className="space-y-6 text-lead-text text-base leading-[1.8]">
              {about.bioParagraphs.map((paragraph, idx) => (
                <p 
                  key={idx} 
                  className={idx === 0 ? "text-lg text-secondary-text font-medium border-l-2 border-accent pl-5 py-1 leading-[1.7]" : ""}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>
          </article>
          
          {/* Values Cards Column (40% width on desktop) */}
          <aside className="lg:col-span-2 space-y-6" aria-labelledby="principles-title">
            <h3 id="principles-title" className="text-xs font-medium uppercase tracking-[0.2em] text-muted-text">My Care Principles</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {about.values.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-primary-bg p-5 rounded-xl border border-light-border flex gap-4 items-start transition-colors duration-300 hover:border-accent/30"
                >
                  <div className="bg-secondary-bg p-2.5 rounded-lg border border-light-border shrink-0">
                    {getIcon(item.iconName, 'w-5 h-5 text-accent')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-text mb-1 text-sm">{item.title}</h4>
                    <p className="text-sm text-muted-text leading-relaxed">{item.description}</p>
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
