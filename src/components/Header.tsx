'use client';

import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, ArrowRight } from 'lucide-react';
import { portfolioContent } from '@/data/portfolio-content';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Find the element and scroll to it smoothly
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { brandName } = portfolioContent.personalInfo;

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo/Brand */}
        <div 
          onClick={() => scrollToSection('home')} 
          className="flex items-center gap-2 cursor-pointer group"
          role="button"
          tabIndex={0}
          aria-label={`${brandName} Home`}
          onKeyDown={(e) => e.key === 'Enter' && scrollToSection('home')}
        >
          <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">{brandName}</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('services')} 
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('credentials')} 
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
          >
            Credentials
          </button>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
          >
            Rates
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
          >
            Book a Visit
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none cursor-pointer" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-4 flex flex-col px-4 gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-left py-2 font-medium text-slate-700 hover:text-blue-600 transition-colors cursor-pointer"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('services')} 
            className="text-left py-2 font-medium text-slate-700 hover:text-blue-600 transition-colors cursor-pointer"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('credentials')} 
            className="text-left py-2 font-medium text-slate-700 hover:text-blue-600 transition-colors cursor-pointer"
          >
            Credentials
          </button>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className="text-left py-2 font-medium text-slate-700 hover:text-blue-600 transition-colors cursor-pointer"
          >
            Rates
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="bg-blue-600 text-white px-4 py-3 rounded-xl font-semibold mt-2 text-center hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Book a Visit
          </button>
        </div>
      )}
    </nav>
  );
}
