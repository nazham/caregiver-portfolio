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
      // Fallback: Generate local plan instantly when the API fails
      setCarePlan(generateMockCarePlan(careNeeds));
      setLoading(false);
      return;
    }
    
    setLoading(false);
  };

  return (
    <section 
      aria-labelledby="ai-planner-title"
      className="bg-secondary-bg rounded-2xl p-10 md:p-14 border border-light-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 max-w-5xl mx-auto mb-24 relative transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none"
    >
      <div className="relative z-10">
        
        {/* Title */}
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="w-6 h-6 text-accent" />
          <h3 id="ai-planner-title" className="heading-serif text-3xl font-bold text-primary-text">{aiPlanner.title}</h3>
        </div>
        
        <p className="text-lead-text text-lg mb-10 max-w-3xl leading-relaxed">
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
            className="flex-1 form-input py-4 px-5 text-base"
            aria-label="Describe client care needs"
          />
          <button 
            onClick={handleGenerate}
            disabled={loading || !careNeeds.trim()}
            className="btn-primary px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-text/10 min-w-[220px] transition-all"
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
            className="bg-primary-bg border border-light-border rounded-2xl p-8 md:p-10 mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            <h4 className="heading-serif text-2xl font-bold text-primary-text mb-3">{carePlan.title}</h4>
            <p className="text-lead-text mb-8 italic text-lg">{carePlan.intro}</p>
            
            <div className="space-y-4">
              {carePlan.schedule.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-5 bg-secondary-bg border border-light-border rounded-lg hover:border-accent/30 hover:bg-secondary-bg/80 transition-all duration-300"
                >
                  <div className="min-w-[160px] font-semibold text-accent text-sm">
                    {item.timeOfDay}
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-primary-text text-base mb-2">{item.task}</h5>
                    <p className="text-muted-text leading-relaxed">{item.description}</p>
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
