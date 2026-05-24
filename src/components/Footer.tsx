import React from 'react';
import { ShieldCheck, MapPin } from 'lucide-react';
import { portfolioContent } from '@/data/portfolio-content';

export default function Footer() {
  const { personalInfo } = portfolioContent;

  return (
    <footer className="bg-[#FAFAFA] py-12 border-t border-[#0F172A]/5">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo — Serif wordmark, no icon box */}
        <span className="heading-serif font-bold text-lg text-[#0F172A]">{personalInfo.brandName}</span>
        
        {/* Copyright */}
        <p className="text-sm text-[#0F172A]/30">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        
        {/* Regional Badges */}
        <div className="flex items-center gap-4 text-xs font-medium text-[#0F172A]/30 uppercase tracking-wider">
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
