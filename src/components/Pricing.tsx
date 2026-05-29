'use client';

import React, { useState } from 'react';
import { Clock, Heart, Calendar } from 'lucide-react';
import { portfolioContent } from '@/data/portfolio-content';

export default function Pricing() {
  const { pricing } = portfolioContent;
  const [pricingTab, setPricingTab] = useState<'day' | 'night'>('day');

  const activePlan = pricing.options[pricingTab];

  const getFeatureIcon = (idx: number) => {
    const iconClass = "w-4 h-4 text-primary-text/30 dark:text-muted-text shrink-0";
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
          className="bg-primary-bg border border-light-border rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
        >
          {/* Header & Toggle Switch Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-6">
            <div>
              <h3 className="heading-serif text-2xl font-bold text-primary-text">{pricing.title}</h3>
              <p className="text-muted-text mt-1">{pricing.description}</p>
            </div>
            
            {/* Sliding Toggle Control */}
            <div 
              role="tablist"
              aria-label="Visit shift pricing selector"
              className="bg-primary-text/5 p-1 rounded-lg inline-flex relative border border-light-border"
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
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            
            {/* Features Info column */}
            <div className="order-2 md:order-1">
              <ul className="space-y-4">
                {activePlan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-lead-text font-medium text-sm">
                    {getFeatureIcon(idx)}
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-text mt-6 leading-relaxed">
                {pricing.disclaimer}
              </p>
            </div>
            
            {/* Rates Card Column */}
            <article 
              className="order-1 md:order-2 bg-secondary-bg rounded-xl p-8 text-center relative overflow-hidden text-primary-text"
            >
              <h4 className="text-primary-text/50 font-medium mb-2 text-sm">
                {pricingTab === 'day' ? 'Daytime Rate' : 'Overnight Rate'}
              </h4>
              
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-xl font-semibold text-accent">{activePlan.currency}</span>
                <span className="text-5xl font-extrabold tracking-tight">
                  {activePlan.rate}
                </span>
              </div>
              <span className="text-muted-text text-sm mt-1 block">
                {activePlan.period}
              </span>
              
              <a 
                href="#contact" 
                className="btn-accent w-full mt-8 py-3 px-6 rounded-lg block text-center"
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
