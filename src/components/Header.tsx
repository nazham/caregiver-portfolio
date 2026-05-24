'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { portfolioContent } from '@/data/portfolio-content';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  
  // Theme State
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

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
            ? 'bg-[#FAFAFA]/95 dark:bg-[#0B0F19]/95 backdrop-blur-md border-b border-[#0F172A]/5 dark:border-white/5 py-3' 
            : 'bg-transparent py-3 md:py-6'
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
            <span className="heading-serif text-xl font-bold text-[#0F172A] dark:text-slate-100 group-hover:text-[#C4A882] dark:group-hover:text-[#C4A882] transition-colors duration-300">{brandName}</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-sm font-medium text-[#0F172A]/60 dark:text-slate-400 hover:text-[#C4A882] dark:hover:text-[#C4A882] transition-colors duration-300 cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-sm font-medium text-[#0F172A]/60 dark:text-slate-400 hover:text-[#C4A882] dark:hover:text-[#C4A882] transition-colors duration-300 cursor-pointer"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('credentials')} 
              className="text-sm font-medium text-[#0F172A]/60 dark:text-slate-400 hover:text-[#C4A882] dark:hover:text-[#C4A882] transition-colors duration-300 cursor-pointer"
            >
              Credentials
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-sm font-medium text-[#0F172A]/60 dark:text-slate-400 hover:text-[#C4A882] dark:hover:text-[#C4A882] transition-colors duration-300 cursor-pointer"
            >
              Rates
            </button>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full hover:bg-[#0F172A]/5 dark:hover:bg-white/5 text-[#0F172A]/60 dark:text-slate-400 hover:text-[#C4A882] dark:hover:text-[#C4A882] transition-all duration-300 cursor-pointer focus:outline-none relative"
              aria-label="Toggle theme"
            >
              {mounted ? (
                <div className="relative w-5 h-5 overflow-hidden">
                  <Sun className={`w-5 h-5 absolute inset-0 transition-transform duration-500 ease-in-out ${theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`} />
                  <Moon className={`w-5 h-5 absolute inset-0 transition-transform duration-500 ease-in-out ${theme === 'light' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full border border-dashed border-[#0F172A]/20 dark:border-white/20 animate-pulse" />
              )}
            </button>

            <button 
              onClick={() => scrollToSection('contact')} 
              className="btn-primary px-5 py-2.5 rounded-full text-sm"
            >
              Book a Visit
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Right Container (Theme toggle + Menu button) */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full hover:bg-[#0F172A]/5 dark:hover:bg-white/5 text-[#0F172A]/60 dark:text-slate-400 hover:text-[#C4A882] dark:hover:text-[#C4A882] transition-all duration-300 cursor-pointer focus:outline-none relative"
              aria-label="Toggle theme"
            >
              {mounted ? (
                <div className="relative w-5 h-5 overflow-hidden">
                  <Sun className={`w-5 h-5 absolute inset-0 transition-transform duration-500 ease-in-out ${theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`} />
                  <Moon className={`w-5 h-5 absolute inset-0 transition-transform duration-500 ease-in-out ${theme === 'light' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full border border-dashed border-[#0F172A]/20 dark:border-white/20 animate-pulse" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="p-2 text-[#0F172A]/60 dark:text-slate-400 hover:text-[#0F172A] dark:hover:text-slate-100 focus:outline-none cursor-pointer" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#FAFAFA] dark:bg-[#0B0F19] border-t border-[#0F172A]/5 dark:border-white/5 py-4 flex flex-col px-4 gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-left py-2 font-medium text-[#0F172A]/70 dark:text-slate-300 hover:text-[#C4A882] dark:hover:text-[#C4A882] transition-colors cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-left py-2 font-medium text-[#0F172A]/70 dark:text-slate-300 hover:text-[#C4A882] dark:hover:text-[#C4A882] transition-colors cursor-pointer"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('credentials')} 
              className="text-left py-2 font-medium text-[#0F172A]/70 dark:text-slate-300 hover:text-[#C4A882] dark:hover:text-[#C4A882] transition-colors cursor-pointer"
            >
              Credentials
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-left py-2 font-medium text-[#0F172A]/70 dark:text-slate-300 hover:text-[#C4A882] dark:hover:text-[#C4A882] transition-colors cursor-pointer"
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
