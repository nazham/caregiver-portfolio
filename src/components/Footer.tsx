import React from 'react';
import { Heart, ShieldCheck, MapPin } from 'lucide-react';
import { portfolioContent } from '@/data/portfolio-content';

export default function Footer() {
  const { personalInfo } = portfolioContent;

  return (
    <footer className="bg-slate-50 py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded-md">
            <Heart className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-lg text-slate-900">{personalInfo.brandName}</span>
        </div>
        
        {/* Copyright */}
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        
        {/* Regional Badges */}
        <div className="flex items-center gap-4 text-sm font-medium text-slate-400">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-emerald-500" /> ACA Certified
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-blue-500" /> Sri Lanka
          </span>
        </div>

      </div>
    </footer>
  );
}
