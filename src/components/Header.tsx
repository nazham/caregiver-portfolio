'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { portfolioContent } from '@/data/portfolio-content';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { brandName } = portfolioContent.personalInfo;

  return (
    <>
      <div ref={sentinelRef} className="absolute top-0 left-0 w-full h-5 pointer-events-none" />
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#FAFAFA]/95 backdrop-blur-md border-b border-[#0F172A]/5 py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <nav className="container-custom flex justify-between items-center">
          {/* Logo/Brand — Serif wordmark, no icon box */}
          <div 
            onClick={() => scrollToSection('home')} 
            className="cursor-pointer group"
            role="button"
            tabIndex={0}
            aria-label={`${brandName} Home`}
            onKeyDown={(e) => e.key === 'Enter' && scrollToSection('home')}
          >
            <span className="heading-serif text-xl font-bold text-[#0F172A] group-hover:text-[#C4A882] transition-colors duration-300">{brandName}</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-sm font-medium text-[#0F172A]/60 hover:text-[#C4A882] transition-colors duration-300 cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-sm font-medium text-[#0F172A]/60 hover:text-[#C4A882] transition-colors duration-300 cursor-pointer"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('credentials')} 
              className="text-sm font-medium text-[#0F172A]/60 hover:text-[#C4A882] transition-colors duration-300 cursor-pointer"
            >
              Credentials
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-sm font-medium text-[#0F172A]/60 hover:text-[#C4A882] transition-colors duration-300 cursor-pointer"
            >
              Rates
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="btn-primary px-5 py-2.5 rounded-full text-sm"
            >
              Book a Visit
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-[#0F172A]/60 hover:text-[#0F172A] focus:outline-none cursor-pointer" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#FAFAFA] border-t border-[#0F172A]/5 py-4 flex flex-col px-4 gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-left py-2 font-medium text-[#0F172A]/70 hover:text-[#C4A882] transition-colors cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-left py-2 font-medium text-[#0F172A]/70 hover:text-[#C4A882] transition-colors cursor-pointer"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('credentials')} 
              className="text-left py-2 font-medium text-[#0F172A]/70 hover:text-[#C4A882] transition-colors cursor-pointer"
            >
              Credentials
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-left py-2 font-medium text-[#0F172A]/70 hover:text-[#C4A882] transition-colors cursor-pointer"
            >
              Rates
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="btn-primary px-4 py-3 rounded-lg mt-2 text-center"
            >
              Book a Visit
            </button>
          </div>
        )}
      </header>
    </>
  );
}
