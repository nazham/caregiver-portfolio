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
          isScrolled 
            ? 'bg-primary-bg/95 backdrop-blur-md border-b border-light-border py-3' 
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
          <div className="hidden md:flex items-center gap-12">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-sm font-semibold text-lead-text hover:text-accent transition-colors duration-300 cursor-pointer relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-sm font-semibold text-lead-text hover:text-accent transition-colors duration-300 cursor-pointer relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('credentials')} 
              className="text-sm font-semibold text-lead-text hover:text-accent transition-colors duration-300 cursor-pointer relative group"
            >
              Credentials
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-sm font-semibold text-lead-text hover:text-accent transition-colors duration-300 cursor-pointer relative group"
            >
              Rates
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
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
              className="btn-primary px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-primary-text/10 transition-all"
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
          <div className="md:hidden absolute top-full left-0 w-full bg-primary-bg border-t border-light-border py-4 flex flex-col px-4 gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-left py-2 font-medium text-secondary-text hover:text-accent transition-colors cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-left py-2 font-medium text-secondary-text hover:text-accent transition-colors cursor-pointer"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('credentials')} 
              className="text-left py-2 font-medium text-secondary-text hover:text-accent transition-colors cursor-pointer"
            >
              Credentials
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-left py-2 font-medium text-secondary-text hover:text-accent transition-colors cursor-pointer"
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
