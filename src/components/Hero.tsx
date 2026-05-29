import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Clock, Award } from 'lucide-react';
import { portfolioContent } from '@/data/portfolio-content';

export default function Hero() {
  const { hero, personalInfo } = portfolioContent;

  const getIcon = (iconName: string) => {
    const iconClass = "w-4.5 h-4.5 text-accent shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/badge:scale-115 motion-reduce:transition-none";
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
        <div className="grid lg:grid-cols-2 gap-y-4 lg:gap-20 items-center">
          
          {/* Hero Content */}
          <div className="max-w-xl order-2 lg:order-1 flex flex-col justify-center">
            {/* Crisp availability sub-label */}
            <span 
              className="hero-reveal block tracking-[0.2em] font-sans uppercase text-xs text-slate-500 dark:text-slate-400 mb-4 sm:mb-6 font-semibold"
              style={{ animationDelay: '0ms' }}
            >
              {hero.badgeText}
            </span>
            
            {/* Elegant Serif Heading with Typography Tension */}
            <h1 
              className="hero-reveal heading-serif text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-primary-text leading-[1.05] tracking-tight mb-4 sm:mb-6 order-1"
              style={{ animationDelay: '120ms' }}
            >
              <span>
                {hero.title.includes('Professional, Compassionate') ? (
                  <>
                    Professional, <br className="sm:hidden" /> Compassionate
                  </>
                ) : (
                  hero.title
                )}
              </span>{' '}
              <span className="font-serif italic font-normal text-accent block mt-2 sm:mt-3">
                {hero.titleHighlight}
              </span>
            </h1>
            
            {/* Subtitle */}
            <p 
              className="hero-reveal text-sm sm:text-lg text-secondary-text mb-6 lg:mb-8 leading-relaxed max-w-md order-3 lg:order-2"
              style={{ animationDelay: '240ms' }}
            >
              {hero.subtitle}
            </p>
            
            {/* CTA Actions */}
            <div 
              className="hero-reveal flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8 lg:mb-12 order-2 lg:order-3"
              style={{ animationDelay: '240ms' }}
            >
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 tracking-widest uppercase text-xs font-bold px-10 py-4 rounded-none shadow-none hover:bg-slate-900 dark:hover:bg-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-bg motion-reduce:transition-none cursor-pointer"
              >
                {hero.ctaPrimary}
              </a>
              <a 
                href="#credentials" 
                className="group/link inline-flex items-center text-primary-text text-sm font-semibold tracking-wide cursor-pointer"
              >
                <span className="border-b border-primary-text/30 group-hover/link:border-primary-text pb-0.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none">
                  {hero.ctaSecondary}
                </span>
              </a>
            </div>
 
            {/* Trust Metrics — Structural separator */}
            <div 
              className="hero-reveal flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px] sm:text-xs text-secondary-text font-semibold uppercase tracking-wider border-t border-slate-200 dark:border-slate-700/50 pt-6 lg:pt-8 order-4"
              style={{ animationDelay: '360ms' }}
            >
              {hero.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2 group/badge cursor-default">
                   {getIcon(bullet.iconName)}
                  <span className="transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/badge:text-primary-text motion-reduce:transition-none">{bullet.text}</span>
                </div>
              ))}
            </div>
          </div>
 
          {/* Hero Portrait Image with Asymmetric Framing */}
          <div 
            className="hero-reveal relative mx-auto lg:ml-auto w-full max-w-[360px] sm:max-w-md order-1 lg:order-2 pl-4 pb-4 mb-2 lg:mb-0"
            style={{ animationDelay: '200ms' }}
          >
            <div className="relative w-full aspect-4/5">
              {/* Solid offset background accent panel (architectural frame) */}
              <div 
                className="hero-frame-expand absolute -bottom-4 -left-4 w-full h-full bg-accent z-0" 
                style={{ animationDelay: '400ms' }}
              />
              
              {/* Foreground Image Container */}
              <div className="relative w-full h-full bg-secondary-bg p-1.5 border border-accent/20 dark:border-light-border shadow-[0_8px_30px_rgba(196,168,130,0.06)] dark:shadow-none z-10">
                <Image 
                  src={personalInfo.profileImage} 
                  alt={`${personalInfo.name} - Professional Caregiver Portrait`} 
                  width={500}
                  height={625}
                  className="w-full h-full rounded-none object-cover object-top bg-primary-bg"
                  priority={true}
                />
              </div>
  
              {/* Subtle credential tag */}
              <div 
                className="hero-reveal absolute -bottom-6 right-6 bg-linear-to-b from-secondary-bg to-secondary-bg/95 px-5 py-3 rounded-none border border-accent/20 dark:border-light-border shadow-[0_12px_40px_rgba(196,168,130,0.1)] dark:shadow-none flex items-center gap-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-accent/40 motion-reduce:transition-none z-20"
                style={{ animationDelay: '550ms' }}
              >
                <div className="bg-accent-muted p-2 rounded-none border border-accent/10 shrink-0 text-accent">
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
      </div>
    </section>
  );
}
