import React from 'react';
import { ShieldCheck, MapPin } from 'lucide-react';
import { portfolioContent } from '@/data/portfolio-content';

export default function Footer() {
  const { personalInfo } = portfolioContent;

  return (
    <footer className="bg-primary-bg py-16 md:py-12 border-t border-light-border transition-colors duration-300">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
        
        {/* Logo — Serif wordmark, no icon box */}
        <span className="heading-serif font-bold text-xl text-primary-text">{personalInfo.brandName}</span>
        
        {/* Copyright */}
        <p className="text-sm text-muted-text text-center md:text-left leading-relaxed max-w-[280px] sm:max-w-none">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        
        {/* Regional Badges */}
        <div className="flex items-center justify-center gap-6 text-xs font-semibold text-muted-text uppercase tracking-widest">
          <span className="flex items-center gap-2 hover:text-accent transition-colors duration-300">
            <ShieldCheck className="w-4 h-4 text-accent" /> ACA Certified
          </span>
          <span className="flex items-center gap-2 hover:text-accent transition-colors duration-300">
            <MapPin className="w-4 h-4 text-accent" /> Sri Lanka
          </span>
        </div>

      </div>
    </footer>
  );
}
