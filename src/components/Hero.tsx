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
      className="relative pt-20 pb-12 lg:pt-36 lg:pb-28 bg-[#FAFAFA]"
    >
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          
          {/* Hero Content — Second on mobile, first on desktop */}
          <div className="max-w-xl order-2 lg:order-1 flex flex-col">
            {/* Understated availability badge — Desktop only */}
            <div 
              className="hidden lg:inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#0F172A]/10 text-[#0F172A]/60 text-xs font-medium uppercase tracking-wider mb-8 self-start"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4A882]"></span>
              {hero.badgeText}
            </div>
            
            <h1 className="heading-serif text-3xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#0F172A] leading-[1.1] mb-4 sm:mb-6 order-1">
              {hero.title.includes('Professional, Compassionate') ? (
                <>
                  Professional, <br className="sm:hidden" /> Compassionate
                </>
              ) : (
                hero.title
              )}{' '}
              <span className="text-[#C4A882] block">{hero.titleHighlight}</span>
            </h1>
            
            {/* CTA Buttons — Second on mobile, third on desktop */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 lg:pt-0 mb-6 lg:mb-8 order-2 lg:order-3">
              <a 
                href="#contact" 
                className="btn-primary px-8 py-3.5 rounded-lg text-center"
              >
                {hero.ctaPrimary}
              </a>
              <a 
                href="#credentials" 
                className="btn-secondary px-8 py-3.5 rounded-lg text-center"
              >
                {hero.ctaSecondary}
              </a>
            </div>

            {/* Subtitle — Third on mobile, second on desktop */}
            <p className="text-sm sm:text-lg text-[#0F172A]/55 mb-4 lg:mb-10 leading-relaxed max-w-md order-3 lg:order-2">
              {hero.subtitle}
            </p>

            {/* Micro Badges — Fourth on both mobile and desktop */}
            <div className="mt-4 lg:mt-0 flex items-center gap-8 text-xs text-[#0F172A]/40 font-medium uppercase tracking-wider border-t border-[#0F172A]/5 pt-4 lg:pt-8 order-4">
              {hero.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  {getIcon(bullet.iconName)}
                  <span>{bullet.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Portrait Image — First on mobile, second on desktop */}
          <div className="relative mx-auto lg:ml-auto w-full max-w-md order-1 lg:order-2 flex flex-col">
            {/* Understated availability badge — Mobile only */}
            <div 
              className="inline-flex lg:hidden items-center gap-2 px-3 py-1.5 rounded-full border border-[#0F172A]/10 text-[#0F172A]/60 text-xs font-medium uppercase tracking-wider mb-4 w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4A882]"></span>
              {hero.badgeText}
            </div>

            <div className="relative bg-white p-1.5 rounded-2xl border border-[#0F172A]/5 w-full">
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
