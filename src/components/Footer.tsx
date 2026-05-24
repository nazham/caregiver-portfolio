import React from 'react';
import { ShieldCheck, MapPin } from 'lucide-react';
import { portfolioContent } from '@/data/portfolio-content';

export default function Footer() {
  const { personalInfo } = portfolioContent;

  return (
    <footer className="bg-[#FAF6F0] dark:bg-[#0F172A] py-10 md:py-4 border-t border-[#0F172A]/5 dark:border-white/5 transition-colors duration-300">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
        
        {/* Logo — Serif wordmark, no icon box */}
        <span className="heading-serif font-bold text-lg text-[#0F172A] dark:text-slate-100">{personalInfo.brandName}</span>
        
        {/* Copyright */}
        <p className="text-xs md:text-sm text-[#0F172A]/40 dark:text-slate-500 text-center md:text-left leading-relaxed max-w-[280px] sm:max-w-none">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        
        {/* Regional Badges */}
        <div className="flex items-center justify-center gap-4 text-xs font-medium text-[#0F172A]/40 dark:text-slate-500 uppercase tracking-wider">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C4A882]" /> ACA Certified
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#C4A882]" /> Sri Lanka
          </span>
        </div>

      </div>
    </footer>
  );
}
