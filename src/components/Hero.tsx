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
      className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 bg-[#FAFAFA]"
    >
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Hero Content */}
          <div className="max-w-xl">
            {/* Understated availability badge */}
            <div 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#0F172A]/10 text-[#0F172A]/60 text-xs font-medium uppercase tracking-wider mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4A882]"></span>
              {hero.badgeText}
            </div>
            
            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#0F172A] leading-[1.1] mb-6">
              {hero.title}{' '}
              <span className="text-[#C4A882]">{hero.titleHighlight}</span>
            </h1>
            
            <p className="text-base sm:text-lg text-[#0F172A]/55 mb-10 leading-relaxed max-w-md">
              {hero.subtitle}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="btn-primary px-8 py-4 rounded-lg"
              >
                {hero.ctaPrimary}
              </a>
              <a 
                href="#credentials" 
                className="btn-secondary px-8 py-4 rounded-lg"
              >
                {hero.ctaSecondary}
              </a>
            </div>

            {/* Micro Badges */}
            <div className="mt-12 flex items-center gap-8 text-xs text-[#0F172A]/40 font-medium uppercase tracking-wider border-t border-[#0F172A]/5 pt-8">
              {hero.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  {getIcon(bullet.iconName)}
                  <span>{bullet.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Portrait Image — Clean, minimal frame */}
          <div className="relative mx-auto lg:ml-auto w-full max-w-md">
            <div className="relative bg-white p-1.5 rounded-2xl border border-[#0F172A]/5">
              <Image 
                src={personalInfo.profileImage} 
                alt={`${personalInfo.name} - Professional Caregiver Portrait`} 
                width={500}
                height={500}
                className="w-full aspect-[4/5] rounded-xl object-cover object-top bg-[#F5F0EB]"
                priority={true} // Informs Next.js to preload and assign high priority (LCP)
              />
            </div>

            {/* Subtle credential tag — no bounce, positioned bottom-left */}
            <div 
              className="absolute -bottom-4 -left-4 bg-white px-5 py-3 rounded-xl border border-[#0F172A]/5 flex items-center gap-3"
            >
              <Award className="w-5 h-5 text-[#C4A882]" />
              <div>
                <p className="text-[10px] text-[#0F172A]/40 font-medium uppercase tracking-wider">Certified Professional</p>
                <p className="text-sm font-semibold text-[#0F172A]">120+ Hrs Training</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
