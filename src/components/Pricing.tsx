'use client';

import React, { useState } from 'react';
import { Clock, Heart, Calendar } from 'lucide-react';
import { portfolioContent } from '@/data/portfolio-content';

export default function Pricing() {
  const { pricing } = portfolioContent;
  const [pricingTab, setPricingTab] = useState<'day' | 'night'>('day');

  const activePlan = pricing.options[pricingTab];

  const getFeatureIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Clock className="w-5 h-5 text-slate-400 shrink-0" />;
      case 1:
        return <Heart className="w-5 h-5 text-slate-400 shrink-0" />;
      case 2:
        return <Calendar className="w-5 h-5 text-slate-400 shrink-0" />;
      default:
        return <Clock className="w-5 h-5 text-slate-400 shrink-0" />;
    }
  };

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pricing Matrix Card */}
        <div 
          className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto"
        >
          {/* Header & Toggle Switch Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">{pricing.title}</h3>
              <p className="text-slate-500 mt-1">{pricing.description}</p>
            </div>
            
            {/* Sliding Toggle Control */}
            <div className="bg-slate-200/70 p-1 rounded-xl inline-flex relative border border-slate-200">
              <button 
                onClick={() => setPricingTab('day')}
                className={`relative z-10 px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                  pricingTab === 'day' ? 'text-blue-900' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Day Visit
              </button>
              <button 
                onClick={() => setPricingTab('night')}
                className={`relative z-10 px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                  pricingTab === 'night' ? 'text-blue-900' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Night Visit
              </button>
              
              {/* Sliding Background indicator */}
              <div 
                className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-lg shadow-sm transition-transform duration-300 ease-out"
                style={{ 
                  transform: pricingTab === 'day' 
                    ? 'translateX(4px)' 
                    : 'translateX(calc(100% + 4px))' 
                }}
              />
            </div>
          </div>

          {/* Pricing Details Layout */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* Features Info column */}
            <div className="order-2 md:order-1">
              <ul className="space-y-4">
                {activePlan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-650 font-medium">
                    {getFeatureIcon(idx)}
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-400 mt-6 leading-relaxed">
                {pricing.disclaimer}
              </p>
            </div>
            
            {/* Rates Card Column */}
            <div 
              className="order-1 md:order-2 bg-slate-900 rounded-2xl p-8 text-center shadow-lg relative overflow-hidden text-white"
            >
              {/* Decorative Glow */}
              <div 
                className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 bg-blue-500 rounded-full blur-2xl opacity-20 pointer-events-none" 
                aria-hidden="true"
              />
              
              <h4 className="text-slate-300 font-medium mb-2">
                {pricingTab === 'day' ? 'Daytime Rate' : 'Overnight Rate'}
              </h4>
              
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-xl font-semibold text-blue-400">{activePlan.currency}</span>
                <span className="text-5xl font-extrabold tracking-tight">
                  {activePlan.rate}
                </span>
              </div>
              <span className="text-slate-400 text-sm mt-1 block">
                {activePlan.period}
              </span>
              
              <a 
                href="#contact" 
                className="w-full mt-8 bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-xl font-semibold transition-colors duration-200 block text-center shadow-md hover:shadow-lg"
              >
                Request this shift
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
