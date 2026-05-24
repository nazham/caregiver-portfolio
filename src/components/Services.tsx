import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { portfolioContent } from '@/data/portfolio-content';
import AICarePlanner from './AICarePlanner';

export default function Services() {
  const { services } = portfolioContent;

  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="container-custom">
        
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title text-slate-900">{services.title}</h2>
          <p className="section-subtitle">{services.description}</p>
        </div>

        {/* Services List Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.list.map((service, idx) => (
            <article 
              key={idx} 
              className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-100 hover:shadow-sm transition-shadow duration-300"
            >
              <div className="mt-1 bg-blue-100 rounded-full p-1 shrink-0">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
              </div>
              <span className="font-semibold text-slate-800 text-lg">{service}</span>
            </article>
          ))}
        </div>

        {/* Interactive AI Care Routine Planner Component */}
        <AICarePlanner />

      </div>
    </section>
  );
}
