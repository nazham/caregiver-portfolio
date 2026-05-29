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
        <div className="max-w-xl mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">What I Offer</p>
          <h2 className="section-title">{services.title}</h2>
          <div className="w-12 h-px bg-accent mt-2 mb-5" aria-hidden="true"></div>
          <p className="text-secondary-text leading-relaxed text-sm sm:text-base">{services.description}</p>
        </div>

        {/* Services List Grid — Elegant, compact, and responsive list layout with hover details */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 mb-20">
          {services.list.map((service, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-3 py-3 px-4 border-l-2 border-l-transparent hover:border-l-accent hover:bg-accent-muted/30 transition-all duration-250 group rounded-r-lg cursor-default"
            >
              <div className="shrink-0">
                <CheckCircle2 className="w-4 h-4 text-accent group-hover:scale-115 transition-transform duration-300" />
              </div>
              <span className="font-semibold text-secondary-text text-sm sm:text-[0.95rem] leading-relaxed transition-colors duration-300 group-hover:text-primary-text">
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
