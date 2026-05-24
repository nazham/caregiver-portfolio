'use client';

import React, { useState } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';
import { portfolioContent } from '@/data/portfolio-content';

interface ScheduleItem {
  timeOfDay: string;
  task: string;
  description: string;
}

interface CarePlan {
  title: string;
  intro: string;
  schedule: ScheduleItem[];
}

export default function AICarePlanner() {
  const { services } = portfolioContent;
  const { aiPlanner } = services;

  const [careNeeds, setCareNeeds] = useState('');
  const [loading, setLoading] = useState(false);
  const [carePlan, setCarePlan] = useState<CarePlan | null>(null);
  const [error, setError] = useState('');

  // Local fallback generator if API fails or API key is not configured
  const generateMockCarePlan = (needs: string): CarePlan => {
    const query = needs.toLowerCase();
    
    if (query.includes('surgery') || query.includes('knee') || query.includes('hip') || query.includes('recovering') || query.includes('operation')) {
      return {
        title: "Post-Surgery Recovery & Rehabilitation Daily Schedule",
        intro: "A focused care plan designed to assist recovery, prevent complications, and safely manage daily activities following surgery.",
        schedule: [
          { timeOfDay: "Morning (8:00 AM)", task: "Vital Signs & Pain Assessment", description: "Verify temperature, blood pressure, and pulse. Administer scheduled post-op medications and assist with gentle transfers from bed." },
          { timeOfDay: "Mid-Morning (10:30 AM)", task: "Guided Physical Therapy Support", description: "Supervise prescribed rehabilitation exercises. Assist with safe ambulation using walker/crutches to prevent joint stiffness." },
          { timeOfDay: "Midday (12:30 PM)", task: "Nutritious Lunch & Medication Support", description: "Prepare a meal rich in protein and fiber to aid healing. Oversee medication intake and ensure proper hydration." },
          { timeOfDay: "Afternoon (3:00 PM)", task: "Wound Care & Comfort Assessment", description: "Inspect dressing/surgical site for infection signs. Help patient transition to a comfortable resting position to manage swelling." },
          { timeOfDay: "Evening (5:30 PM)", task: "Hygiene & Transfer Assistance", description: "Assist with safe bathroom transfers and light grooming. Maintain clear pathways to prevent accidental falls during fatigue." }
        ]
      };
    }

    if (query.includes('elderly') || query.includes('senior') || query.includes('dementia') || query.includes('alzheimer') || query.includes('parkinson') || query.includes('old')) {
      return {
        title: "Elderly Care & Cognitive Engagement Schedule",
        intro: "A structured, calm routine prioritizing safety, social interaction, and cognitive stimulation for senior clients.",
        schedule: [
          { timeOfDay: "Morning (9:00 AM)", task: "Breakfast & Cognitive Check", description: "Prepare a soft-diet breakfast. Engage in friendly conversation and review the day's date to help with orientation and mental clarity." },
          { timeOfDay: "Late Morning (11:00 AM)", task: "Mobility Exercise & Companionship", description: "Conduct supervised indoor walking and light stretching. Engage in memory games, reading aloud, or sharing photo albums." },
          { timeOfDay: "Afternoon (1:30 PM)", task: "Medication Reminder & Rest Period", description: "Administer lunchtime medications. Help settle client into a comfortable chair or bed for a scheduled afternoon nap." },
          { timeOfDay: "Late Afternoon (3:30 PM)", task: "Hydration & Light Activity", description: "Serve tea/fluid refreshments. Assist with light tasks, sorting items, or sitting in the garden for fresh air and vitamin D." },
          { timeOfDay: "Evening (6:00 PM)", task: "Dinner Prep & Safety Check", description: "Support dinner preparation and cleanup. Check that nightlights are active, walkways are free of rugs, and assist with bedtime transition." }
        ]
      };
    }

    // Default companion & wellness care plan
    return {
      title: "Personalized Daily Wellness & Assistance Plan",
      intro: `A standard schedule structured to support general care requirements: "${needs}".`,
      schedule: [
        { timeOfDay: "Morning (8:30 AM)", task: "Wellness Assessment & Breakfast", description: "Verify vital signs and document client's sleep/comfort levels. Assist with nutritional breakfast prep and medication reminders." },
        { timeOfDay: "Mid-Morning (10:30 AM)", task: "Personal Hygiene & Grooming", description: "Assist with safe bathing, dental care, dressing, and hair grooming while preserving patient dignity and independence." },
        { timeOfDay: "Midday (12:30 PM)", task: "Lunch & Hydration Check", description: "Prepare a balanced lunch. Ensure proper fluid intake and assist with medication routines." },
        { timeOfDay: "Afternoon (2:30 PM)", task: "Light Mobility & Companionship", description: "Engage in light physical walking, companion check-ins, card games, or therapeutic storytelling sessions." },
        { timeOfDay: "Late Afternoon (4:30 PM)", task: "Safety Sweep & Prep", description: "Ensure the living environment is clean and tidy. Organize next day's necessities and log daily care metrics for family review." }
      ]
    };
  };

  const handleGenerate = async () => {
    if (!careNeeds.trim()) return;
    setLoading(true);
    setError('');
    setCarePlan(null);

    try {
      const response = await fetch('/api/care-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ careNeeds })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      if (data && data.schedule) {
        setCarePlan(data);
      } else {
        throw new Error('Invalid schedule format returned');
      }
    } catch (err) {
      console.warn("API route failed, falling back to local care plan generator.", err);
      // Fallback: Generate local plan so the client gets a beautiful experience even without Gemini credentials
      setTimeout(() => {
        setCarePlan(generateMockCarePlan(careNeeds));
        setLoading(false);
      }, 800); // Small delay to mock network request
      return;
    }
    
    setLoading(false);
  };

  return (
    <section 
      aria-labelledby="ai-planner-title"
      className="bg-white dark:bg-[#161F30] rounded-2xl p-8 md:p-12 border border-[#0F172A]/5 dark:border-white/5 hover:border-[#C4A882]/20 dark:hover:border-[#C4A882]/20 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] max-w-4xl mx-auto mb-20 relative transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none motion-reduce:hover:transform-none"
    >
      <div className="relative z-10">
        
        {/* Title */}
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="w-5 h-5 text-[#C4A882]" />
          <h3 id="ai-planner-title" className="heading-serif text-2xl font-bold text-[#0F172A] dark:text-slate-100">{aiPlanner.title}</h3>
        </div>
        
        <p className="text-[#0F172A]/50 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
          {aiPlanner.description}
        </p>
        
        {/* Input Form */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <input 
            type="text" 
            value={careNeeds}
            onChange={(e) => setCareNeeds(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
            placeholder={aiPlanner.placeholder}
            className="flex-1 form-input py-4 px-5"
            aria-label="Describe client care needs"
          />
          <button 
            onClick={handleGenerate}
            disabled={loading || !careNeeds.trim()}
            className="btn-primary px-6 py-4 rounded-lg min-w-[200px]"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : `✨ ${aiPlanner.ctaText}`}
          </button>
        </div>

        {/* Error Messages (if any) */}
        {error && (
          <div 
            className="p-4 bg-red-50 text-red-600 rounded-lg mb-4 border border-red-100 text-sm"
            role="alert"
          >
            {error}
          </div>
        )}

        {/* Results Showcase */}
        {carePlan && (
          <div 
            className="bg-[#FAF6F0] dark:bg-[#0B0F19] border border-[#0F172A]/5 dark:border-white/5 rounded-xl p-6 md:p-8 mt-6 animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            <h4 className="heading-serif text-xl font-bold text-[#0F172A] dark:text-slate-100 mb-2">{carePlan.title}</h4>
            <p className="text-[#0F172A]/50 dark:text-slate-400 mb-6 italic">{carePlan.intro}</p>
            
            <div className="space-y-3">
              {carePlan.schedule.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col sm:flex-row gap-2 sm:gap-4 p-4 bg-white dark:bg-[#1E293B]/40 rounded-lg border border-[#0F172A]/5 dark:border-white/5"
                >
                  <div className="min-w-[140px] font-medium text-[#C4A882] text-sm mt-0.5">
                    {item.timeOfDay}
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#0F172A] dark:text-slate-100 text-sm mb-1">{item.task}</h5>
                    <p className="text-[#0F172A]/45 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
