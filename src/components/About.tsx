import React from 'react';
import { Heart, ShieldCheck, Clock, Star } from 'lucide-react';
import { portfolioContent } from '@/data/portfolio-content';

export default function About() {
  const { about } = portfolioContent;

  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Heart':
        return <Heart className={className} />;
      case 'ShieldCheck':
        return <ShieldCheck className={className} />;
      case 'Clock':
        return <Clock className={className} />;
      case 'Star':
        return <Star className={className} />;
      default:
        return null;
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Bio Columns */}
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{about.title}</h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-6" aria-hidden="true"></div>
            {about.bioParagraphs.map((paragraph, idx) => (
              <p 
                key={idx} 
                className={`text-slate-600 leading-relaxed ${
                  idx < about.bioParagraphs.length - 1 ? 'mb-6' : ''
                }`}
                dangerouslySetInnerHTML={{ __html: paragraph }} // Supports any bold text in data
              />
            ))}
          </div>
          
          {/* Values Cards Grid */}
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
            {about.values.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm mb-4 border border-slate-100">
                  {getIcon(item.iconName, `w-6 h-6 ${item.color}`)}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
