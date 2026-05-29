import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { portfolioContent } from '@/data/portfolio-content';
import AICarePlanner from './AICarePlanner';

export default function Services() {
  const { services } = portfolioContent;

  return (
    <section id="services" className="section-padding bg-primary-bg transition-colors duration-300">
      <div className="container-custom">
        
        {/* Asymmetric Header — left-aligned with decorative rule */}
        <div className="max-w-2xl mb-12 sm:mb-16 lg:mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">What I Offer</p>
          <h2 className="heading-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-text mb-4 sm:mb-6 leading-tight">{services.title}</h2>
          <div className="w-16 h-1 bg-accent mb-5 sm:mb-8 rounded-full" aria-hidden="true"></div>
          <p className="text-lead-text text-base sm:text-lg leading-relaxed max-w-xl">{services.description}</p>
        </div>

        {/* Services List Grid — Elegant, compact, and responsive list layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-12 gap-y-3 sm:gap-y-4 mb-16 sm:mb-20 lg:mb-24">
          {services.list.map((service, idx) => (
            <div 
              key={idx} 
              className="flex items-start gap-2.5 sm:gap-3.5 py-3 sm:py-4 border-b border-light-border hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="mt-0.5 shrink-0">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent group-hover:scale-125 transition-transform duration-300" />
              </div>
              <span className="font-medium text-secondary-text text-sm sm:text-base leading-relaxed transition-colors duration-300 group-hover:text-primary-text">
                {service}
              </span>
            </div>
          ))}
        </div>

        {/* Interactive AI Care Routine Planner Component */}
        <AICarePlanner />

      </div>
    </section>
  );
}
