import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Clock, Award } from 'lucide-react';
import { portfolioContent } from '@/data/portfolio-content';

export default function Hero() {
  const { hero, personalInfo } = portfolioContent;

  const getIcon = (iconName: string) => {
    const iconClass = "w-4.5 h-4.5 text-accent shrink-0 transition-transform duration-300 group-hover/badge:scale-115";
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className={iconClass} />;
      case 'Clock':
        return <Clock className={iconClass} />;
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
              className="hidden lg:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-muted/30 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-8 self-start"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
              {hero.badgeText}
            </div>
            
            <h1 className="heading-serif text-3xl sm:text-5xl lg:text-[3.5rem] font-bold text-primary-text leading-[1.1] mb-4 sm:mb-6 order-1">
              {hero.title.includes('Professional, Compassionate') ? (
                <>
                  Professional, <br className="sm:hidden" /> Compassionate
                </>
              ) : (
                hero.title
              )}{' '}
              <span className="text-accent block">{hero.titleHighlight}</span>
            </h1>
            
            {/* CTA Buttons — Second on mobile, third on desktop */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 lg:pt-0 mb-6 lg:mb-8 order-2 lg:order-3">
              <a 
                href="#contact" 
                className="btn-primary px-8 py-3.5 rounded-xl text-center shadow-[0_8px_20px_rgba(15,23,42,0.08)] dark:shadow-none hover:shadow-[0_12px_25px_rgba(15,23,42,0.15)]"
              >
                {hero.ctaPrimary}
              </a>
              <a 
                href="#credentials" 
                className="btn-secondary px-8 py-3.5 rounded-xl text-center"
              >
                {hero.ctaSecondary}
              </a>
            </div>
 
            {/* Subtitle — Third on mobile, second on desktop */}
            <p className="text-sm sm:text-lg text-secondary-text mb-4 lg:mb-10 leading-relaxed max-w-md order-3 lg:order-2">
              {hero.subtitle}
            </p>
 
            {/* Micro Badges — Fourth on both mobile and desktop */}
            <div className="mt-4 lg:mt-0 flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px] sm:text-xs text-secondary-text font-semibold uppercase tracking-wider border-t border-accent/20 pt-4 lg:pt-8 order-4">
              {hero.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2 group/badge cursor-default">
                   {getIcon(bullet.iconName)}
                  <span className="transition-colors duration-300 group-hover/badge:text-primary-text">{bullet.text}</span>
                </div>
              ))}
            </div>
          </div>
 
          {/* Hero Portrait Image — First on mobile, second on desktop */}
          <div className="relative mx-auto lg:ml-auto w-full max-w-md order-1 lg:order-2 flex flex-col">
            {/* Understated availability badge — Mobile only */}
            <div 
              className="inline-flex lg:hidden items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-muted/30 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-4 w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
              {hero.badgeText}
            </div>
 
            <div className="relative bg-linear-to-b from-secondary-bg to-secondary-bg/50 p-1.5 rounded-2xl border border-accent/20 dark:border-light-border shadow-[0_8px_30px_rgba(196,168,130,0.06)] dark:shadow-none w-full">
              <Image 
                src={personalInfo.profileImage} 
                alt={`${personalInfo.name} - Professional Caregiver Portrait`} 
                width={500}
                height={500}
                className="w-full aspect-4/5 rounded-xl object-cover object-top bg-primary-bg"
                priority={true} // Informs Next.js to preload and assign high priority (LCP)
              />
            </div>
 
            {/* Subtle credential tag — no bounce, positioned bottom-left */}
            <div 
              className="absolute -bottom-4 -left-4 bg-linear-to-b from-secondary-bg to-secondary-bg/95 px-5 py-3 rounded-2xl border border-accent/20 dark:border-light-border shadow-[0_12px_40px_rgba(196,168,130,0.1)] dark:shadow-none flex items-center gap-4 transition-all duration-300 hover:border-accent/40"
            >
              <div className="bg-accent-muted rounded-lg border border-accent/10 shrink-0 text-accent">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[9px] text-muted-text font-semibold uppercase tracking-wider leading-none">Certified Professional</p>
                <p className="text-sm font-bold text-primary-text mt-1 leading-none">Diploma in Caregiving</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
