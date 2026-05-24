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

        {/* Services List Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {services.list.map((service, idx) => (
            <article 
              key={idx} 
              className="flex items-start gap-4 p-5 bg-white rounded-xl border border-[#0F172A]/5 hover:border-[#C4A882]/30 transition-colors duration-300"
            >
              <div className="mt-0.5 shrink-0">
                <CheckCircle2 className="w-5 h-5 text-[#C4A882]" />
              </div>
              <span className="font-medium text-[#0F172A] text-base">{service}</span>
            </article>
          ))}
        </div>

        {/* Interactive AI Care Routine Planner Component */}
        <AICarePlanner />

      </div>
    </section>
  );
}
