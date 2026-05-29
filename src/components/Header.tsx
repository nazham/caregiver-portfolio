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
    const timer = setTimeout(() => {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'dark' : 'light');
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
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
          isScrolled || mobileMenuOpen
            ? 'bg-primary-bg/95 backdrop-blur-md border-b border-light-border py-3 shadow-[0_10px_30px_rgba(15,23,42,0.03)] dark:shadow-none' 
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
            <span className="heading-serif text-xl font-bold text-primary-text group-hover:text-accent transition-colors duration-300">{brandName}</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-sm font-medium text-lead-text hover:text-accent transition-colors duration-300 cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-sm font-medium text-lead-text hover:text-accent transition-colors duration-300 cursor-pointer"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('credentials')} 
              className="text-sm font-medium text-lead-text hover:text-accent transition-colors duration-300 cursor-pointer"
            >
              Credentials
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-sm font-medium text-lead-text hover:text-accent transition-colors duration-300 cursor-pointer"
            >
              Rates
            </button>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full hover:bg-primary-text/5 text-lead-text hover:text-accent transition-all duration-300 cursor-pointer focus:outline-none relative"
              aria-label="Toggle theme"
            >
              {mounted ? (
                <div className="relative w-5 h-5 overflow-hidden">
                  <Sun className={`w-5 h-5 absolute inset-0 transition-transform duration-500 ease-in-out ${theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`} />
                  <Moon className={`w-5 h-5 absolute inset-0 transition-transform duration-500 ease-in-out ${theme === 'light' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full border border-dashed border-primary-text/20 animate-pulse" />
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
              className="p-2.5 rounded-full hover:bg-primary-text/5 text-lead-text hover:text-accent transition-all duration-300 cursor-pointer focus:outline-none relative"
              aria-label="Toggle theme"
            >
              {mounted ? (
                <div className="relative w-5 h-5 overflow-hidden">
                  <Sun className={`w-5 h-5 absolute inset-0 transition-transform duration-500 ease-in-out ${theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`} />
                  <Moon className={`w-5 h-5 absolute inset-0 transition-transform duration-500 ease-in-out ${theme === 'light' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full border border-dashed border-primary-text/20 animate-pulse" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="p-2 text-lead-text hover:text-primary-text focus:outline-none cursor-pointer" 
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
          <div className="md:hidden absolute top-full left-0 w-full bg-linear-to-b from-secondary-bg/98 to-secondary-bg/90 backdrop-blur-xl border-b border-accent/20 py-6 flex flex-col px-6 gap-2 shadow-[0_20px_40px_rgba(196,168,130,0.08)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.45)] animate-in fade-in slide-in-from-top-2 duration-250">
            <button 
              onClick={() => scrollToSection('about')} 
              className="flex items-center justify-between py-3 px-4 rounded-r-lg font-medium text-secondary-text border-l-2 border-l-transparent hover:border-l-accent hover:bg-accent-muted/30 hover:text-accent transition-all duration-200 cursor-pointer group"
            >
              <span>About</span>
              <ArrowRight className="w-4 h-4 opacity-35 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300 text-accent" />
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="flex items-center justify-between py-3 px-4 rounded-r-lg font-medium text-secondary-text border-l-2 border-l-transparent hover:border-l-accent hover:bg-accent-muted/30 hover:text-accent transition-all duration-200 cursor-pointer group"
            >
              <span>Services</span>
              <ArrowRight className="w-4 h-4 opacity-35 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300 text-accent" />
            </button>
            <button 
              onClick={() => scrollToSection('credentials')} 
              className="flex items-center justify-between py-3 px-4 rounded-r-lg font-medium text-secondary-text border-l-2 border-l-transparent hover:border-l-accent hover:bg-accent-muted/30 hover:text-accent transition-all duration-200 cursor-pointer group"
            >
              <span>Credentials</span>
              <ArrowRight className="w-4 h-4 opacity-35 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300 text-accent" />
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="flex items-center justify-between py-3 px-4 rounded-r-lg font-medium text-secondary-text border-l-2 border-l-transparent hover:border-l-accent hover:bg-accent-muted/30 hover:text-accent transition-all duration-200 cursor-pointer group"
            >
              <span>Rates</span>
              <ArrowRight className="w-4 h-4 opacity-35 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300 text-accent" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="btn-accent w-full py-3.5 rounded-xl mt-4 text-center justify-center shadow-[0_8px_20px_rgba(196,168,130,0.15)] dark:shadow-none hover:shadow-[0_12px_25px_rgba(196,168,130,0.25)] transition-all duration-300"
            >
              <span>Book a Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </header>
    </>
  );
}
