import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Clock, Award } from 'lucide-react';
import { portfolioContent } from '@/data/portfolio-content';

export default function Hero() {
  const { hero, personalInfo } = portfolioContent;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-500" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50"
    >
      {/* Background decorative gradient blur elements */}
      <div 
        className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none" 
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-0 left-0 -ml-20 w-[400px] h-[400px] bg-teal-50 rounded-full blur-3xl opacity-60 pointer-events-none" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero Content */}
          <div className="max-w-2xl">
            <div 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-sm font-medium mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
              </span>
              {hero.badgeText}
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
              {hero.title} <span className="text-blue-600 block sm:inline">{hero.titleHighlight}</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {hero.subtitle}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-center"
              >
                {hero.ctaPrimary}
              </a>
              <a 
                href="#credentials" 
                className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 text-center"
              >
                {hero.ctaSecondary}
              </a>
            </div>

            {/* Micro Badges */}
            <div className="mt-10 flex items-center gap-6 text-sm text-slate-500 font-medium border-t border-slate-200 pt-6">
              {hero.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  {getIcon(bullet.iconName)}
                  <span>{bullet.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Portrait Image */}
          <div className="relative mx-auto lg:ml-auto w-full max-w-md">
            <div 
              className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-teal-400 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-lg" 
              aria-hidden="true"
            />
            <div className="relative bg-white p-2 rounded-3xl shadow-2xl border border-white/50">
              <Image 
                src={personalInfo.profileImage} 
                alt={`${personalInfo.name} - Professional Caregiver Portrait`} 
                width={500}
                height={500}
                className="w-full h-auto rounded-2xl object-cover bg-slate-100"
                priority={true} // Informs Next.js to preload and assign high priority (LCP)
              />
              
              {/* Certification Floating Badge */}
              <div 
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce" 
                style={{ animationDuration: '3s' }}
              >
                <div className="bg-amber-100 p-3 rounded-full">
                  <Award className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Certified Professional</p>
                  <p className="text-sm font-bold text-slate-900">120+ Hrs Training</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
