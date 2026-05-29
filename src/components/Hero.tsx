import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Clock, Award } from 'lucide-react';
import { portfolioContent } from '@/data/portfolio-content';

export default function Hero() {
  const { hero, personalInfo } = portfolioContent;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-[#C4A882]" />;
      case 'Clock':
        return <Clock className="w-4 h-4 text-[#C4A882]" />;
      default:
        return null;
    }
  };

  return (
    <section 
      id="home" 
      className="relative pt-16 pb-12 lg:pt-36 lg:pb-28 bg-primary-bg transition-colors duration-300"
    >
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          
          {/* Hero Content — Second on mobile, first on desktop */}
          <div className="max-w-xl order-2 lg:order-1 flex flex-col">
            {/* Understated availability badge — Desktop only */}
            <div 
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 text-accent text-xs font-semibold uppercase tracking-widest mb-8 self-start bg-accent/5"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              {hero.badgeText}
            </div>
            
            <h1 className="heading-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-primary-text leading-[1.05] mb-6 sm:mb-8 order-1">
              {hero.title.includes('Professional, Compassionate') ? (
                <>
                  Professional, <br className="sm:hidden" /> Compassionate
                </>
              ) : (
                hero.title
              )}{' '}
              <span className="text-accent">{hero.titleHighlight}</span>
            </h1>
            
            {/* CTA Buttons — Second on mobile, third on desktop */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 lg:pt-6 mb-8 lg:mb-10 order-2 lg:order-3">
              <a 
                href="#contact" 
                className="btn-primary px-8 py-4 rounded-full text-center text-sm font-semibold hover:shadow-lg hover:shadow-primary-text/10 transition-all duration-300"
              >
                {hero.ctaPrimary}
              </a>
              <a 
                href="#credentials" 
                className="btn-secondary px-8 py-4 rounded-full text-center text-sm font-semibold hover:bg-primary-text/10 transition-all duration-300"
              >
                {hero.ctaSecondary}
              </a>
            </div>
 
            {/* Subtitle — Third on mobile, second on desktop */}
            <p className="text-base sm:text-lg text-lead-text mb-8 lg:mb-12 leading-relaxed max-w-xl order-3 lg:order-2">
              {hero.subtitle}
            </p>
 
            {/* Micro Badges — Fourth on both mobile and desktop */}
            <div className="mt-8 lg:mt-auto flex flex-wrap items-center gap-8 text-xs text-muted-text font-semibold uppercase tracking-wider border-t border-light-border pt-8 order-4">
              {hero.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                   {getIcon(bullet.iconName)}
                  <span className="text-secondary-text">{bullet.text}</span>
                </div>
              ))}
            </div>
          </div>
 
          {/* Hero Portrait Image — First on mobile, second on desktop */}
          <div className="relative mx-auto lg:ml-auto w-full max-w-md order-1 lg:order-2 flex flex-col">
            {/* Understated availability badge — Mobile only */}
            <div 
              className="inline-flex lg:hidden items-center gap-2 px-4 py-2 rounded-full border border-accent/20 text-accent text-xs font-semibold uppercase tracking-widest mb-4 w-fit bg-accent/5"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              {hero.badgeText}
            </div>
 
            <div className="relative bg-secondary-bg p-1.5 rounded-2xl border border-light-border w-full">
              <Image 
                src={personalInfo.profileImage} 
                alt={`${personalInfo.name} - Professional Caregiver Portrait`} 
                width={500}
                height={500}
                className="w-full aspect-[4/5] rounded-xl object-cover object-top bg-primary-bg"
                priority={true} // Informs Next.js to preload and assign high priority (LCP)
              />
            </div>
 
            {/* Subtle credential tag — no bounce, positioned bottom-left */}
            <div 
              className="absolute -bottom-4 -left-4 bg-secondary-bg px-6 py-4 rounded-xl border border-light-border dark:border-primary-border flex items-center gap-3 shadow-lg shadow-primary-text/5 hover:shadow-primary-text/10 transition-shadow duration-300"
            >
              <Award className="w-5 h-5 text-accent shrink-0" />
              <div>
                <p className="text-[11px] text-muted-text font-semibold uppercase tracking-widest">Certified Professional</p>
                <p className="text-sm font-bold text-primary-text">Diploma in Caregiving</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
