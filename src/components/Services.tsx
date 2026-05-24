import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { portfolioContent } from '@/data/portfolio-content';
import AICarePlanner from './AICarePlanner';

export default function Services() {
  const { services } = portfolioContent;

  return (
    <section id="services" className="section-padding bg-[#FAFAFA]">
      <div className="container-custom">
        
        {/* Asymmetric Header — left-aligned with decorative rule */}
        <div className="max-w-xl mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#C4A882] mb-3">What I Offer</p>
          <h2 className="section-title">{services.title}</h2>
          <div className="w-12 h-px bg-[#C4A882] mt-2 mb-5" aria-hidden="true"></div>
          <p className="text-[#0F172A]/55 leading-relaxed">{services.description}</p>
        </div>

        {/* Services List Grid — Elegant, compact, and responsive list layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-2 mb-20">
          {services.list.map((service, idx) => (
            <div 
              key={idx} 
              className="flex items-start gap-3 py-3 border-b border-[#0F172A]/5 hover:border-[#C4A882]/30 transition-colors duration-350 group"
            >
              <div className="mt-1 shrink-0">
                <CheckCircle2 className="w-4 h-4 text-[#C4A882] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="font-medium text-[#0F172A]/75 text-sm sm:text-[0.95rem] leading-relaxed transition-colors duration-300 group-hover:text-[#0F172A]">
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
