import React from 'react';
import { Heart, ShieldCheck, Clock, Star } from 'lucide-react';
import { portfolioContent } from '@/data/portfolio-content';
import ScrollReveal from './ScrollReveal';

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
            <ScrollReveal>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">About Me</p>
                <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-primary-text">{about.title}</h2>
                <div className="w-12 h-px bg-accent mt-5" aria-hidden="true"></div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal>
              <div className="space-y-8">
                {about.bioParagraphs.map((paragraph, idx) => (
                  <p 
                    key={idx} 
                    className={idx === 0 
                      ? "text-xl sm:text-2xl heading-serif italic text-primary-text font-medium border-l-4 border-accent pl-6 py-2.5 leading-relaxed" 
                      : "text-secondary-text text-base leading-relaxed"}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal>
              {/* Premium Stats Grid */}
              <div className="grid grid-cols-3 gap-6 pt-10 border-t border-accent/20 mt-10">
                <div>
                  <p className="heading-serif text-3xl sm:text-4xl font-bold text-accent">ACA</p>
                  <p className="text-xs text-muted-text uppercase font-semibold tracking-wider mt-1">Certified</p>
                </div>
                <div>
                  <p className="heading-serif text-3xl sm:text-4xl font-bold text-accent">100%</p>
                  <p className="text-xs text-muted-text uppercase font-semibold tracking-wider mt-1">Dedicated</p>
                </div>
                <div>
                  <p className="heading-serif text-3xl sm:text-4xl font-bold text-accent">Flexible</p>
                  <p className="text-xs text-muted-text uppercase font-semibold tracking-wider mt-1">Shifts</p>
                </div>
              </div>
            </ScrollReveal>
          </article>
          
          {/* Values Cards Column (40% width on desktop) */}
          <aside className="lg:col-span-2 space-y-6 lg:pt-14" aria-labelledby="principles-title">
            <h3 id="principles-title" className="text-xs font-medium uppercase tracking-[0.2em] text-muted-text">My Care Principles</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {about.values.map((item, idx) => (
                <ScrollReveal key={idx} index={idx}>
                  <div 
                    className="group bg-linear-to-b from-secondary-bg to-secondary-bg/50 p-6 rounded-none border border-accent/20 border-l-4 border-l-accent/70 dark:border-l-accent dark:border-light-border shadow-[0_8px_30px_rgba(196,168,130,0.04)] dark:shadow-none flex gap-4 items-start transition-all duration-300 hover:border-accent/40 hover:border-l-accent hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(196,168,130,0.12)] dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
                  >
                    <div className="bg-accent-muted p-3 rounded-none border border-accent/10 shrink-0 transition-all duration-300 group-hover:bg-accent group-hover:border-accent/50 text-accent group-hover:text-secondary-bg">
                      {getIcon(item.iconName, 'w-5 h-5 transition-colors duration-300')}
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-text mb-1 text-sm">{item.title}</h4>
                      <p className="text-sm text-muted-text leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}
