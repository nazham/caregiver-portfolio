'use client';

import React, { useState } from 'react';
import { Clock, Heart, Calendar } from 'lucide-react';
import { portfolioContent } from '@/data/portfolio-content';

export default function Pricing() {
  const { pricing } = portfolioContent;
  const [pricingTab, setPricingTab] = useState<'day' | 'night'>('day');

  const activePlan = pricing.options[pricingTab];

  const getFeatureIcon = (idx: number) => {
    const iconClass = "w-4 h-4 text-[#0F172A]/30 dark:text-slate-500 shrink-0";
    switch (idx) {
      case 0:
        return <Clock className={iconClass} />;
      case 1:
        return <Heart className={iconClass} />;
      case 2:
        return <Calendar className={iconClass} />;
      default:
        return <Clock className={iconClass} />;
    }
  };

  return (
    <section id="pricing" className="section-padding bg-secondary-bg transition-colors duration-300">
      <div className="container-custom">
        
        {/* Pricing Matrix Card */}
        <div 
          className="bg-primary-bg border border-light-border rounded-2xl p-10 md:p-16 max-w-4xl mx-auto"
        >
          {/* Header & Toggle Switch Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-14 gap-8">
            <div>
              <h3 className="heading-serif text-3xl font-bold text-primary-text">{pricing.title}</h3>
              <p className="text-lead-text mt-2">{pricing.description}</p>
            </div>
            
            {/* Sliding Toggle Control */}
            <div 
              role="tablist"
              aria-label="Visit shift pricing selector"
              className="bg-primary-text/5 p-1.5 rounded-lg inline-flex relative border border-light-border"
            >
              <button 
                role="tab"
                aria-selected={pricingTab === 'day'}
                aria-controls="pricing-tabpanel"
                onClick={() => setPricingTab('day')}
                className={`relative z-10 px-6 py-2.5 text-sm font-semibold rounded-md transition-all duration-200 cursor-pointer ${
                  pricingTab === 'day' 
                    ? 'text-primary-text' 
                    : 'text-muted-text hover:text-lead-text'
                }`}
              >
                Day Visit
              </button>
              <button 
                role="tab"
                aria-selected={pricingTab === 'night'}
                aria-controls="pricing-tabpanel"
                onClick={() => setPricingTab('night')}
                className={`relative z-10 px-6 py-2.5 text-sm font-semibold rounded-md transition-all duration-200 cursor-pointer ${
                  pricingTab === 'night' 
                    ? 'text-primary-text' 
                    : 'text-muted-text hover:text-lead-text'
                }`}
              >
                Night Visit
              </button>
              
              {/* Sliding Background indicator */}
              <div 
                className="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-secondary-bg rounded-md border border-light-border transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none"
                style={{ 
                  transform: pricingTab === 'day' 
                    ? 'translateX(0)' 
                    : 'translateX(100%)' 
                }}
              />
            </div>
          </div>

          {/* Pricing Details Layout */}
          <div 
            id="pricing-tabpanel"
            role="tabpanel"
            aria-label={`${pricingTab === 'day' ? 'Day' : 'Night'} Shift Rates and Features`}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            
            {/* Features Info column */}
            <div className="order-2 md:order-1">
              <ul className="space-y-5">
                {activePlan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3.5 text-lead-text font-medium text-base">
                    {getFeatureIcon(idx)}
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-text mt-8 leading-relaxed">
                {pricing.disclaimer}
              </p>
            </div>
            
            {/* Rates Card Column */}
            <article 
              className="order-1 md:order-2 bg-gradient-to-b from-secondary-bg to-primary-bg/30 rounded-2xl p-10 text-center relative overflow-hidden text-primary-text border border-light-border"
            >
              <h4 className="text-lead-text font-semibold mb-4 text-sm uppercase tracking-widest">
                {pricingTab === 'day' ? 'Daytime Rate' : 'Overnight Rate'}
              </h4>
              
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-2xl font-semibold text-accent">{activePlan.currency}</span>
                <span className="text-6xl font-bold tracking-tight">
                  {activePlan.rate}
                </span>
              </div>
              <span className="text-muted-text text-base block mb-8">
                {activePlan.period}
              </span>
              
              <a 
                href="#contact" 
                className="btn-accent w-full py-4 px-6 rounded-full block text-center font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
              >
                Request this shift
              </a>
            </article>

          </div>
        </div>

      </div>
    </section>
  );
}
