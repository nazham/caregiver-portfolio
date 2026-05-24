import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { portfolioContent } from '@/data/portfolio-content';
import DocumentCard from './DocumentCard';

export default function Credentials() {
  const { credentials, documents } = portfolioContent;

  const getCardIcon = (index: number) => {
    // Return blue Award icon for first cert, teal for second
    if (index === 0) {
      return <Award className="w-8 h-8 text-blue-400" />;
    }
    return <Award className="w-8 h-8 text-teal-400" />;
  };

  return (
    <section 
      id="credentials" 
      className="section-padding bg-slate-900 text-white relative overflow-hidden"
    >
      {/* Subtle background visual pattern */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', 
          backgroundSize: '32px 32px' 
        }} 
        aria-hidden="true"
      />
      
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div 
            className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 rounded-full text-slate-300 text-sm font-medium mb-4 border border-slate-700"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> 
            {credentials.badgeText}
          </div>
          <h2 className="text-3xl font-bold mb-4">{credentials.title}</h2>
          <p className="text-slate-400">{credentials.description}</p>
        </div>

        {/* Credentials Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {credentials.certifications.map((cert, index) => (
            <article 
              key={index} 
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-3xl hover:bg-slate-800 transition-colors duration-300 group"
            >
              <div className="flex items-start justify-between mb-8">
                <div 
                  className="bg-white/10 p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300"
                >
                  {getCardIcon(index)}
                </div>
                <span 
                  className={`text-xs font-bold px-3 py-1 rounded-full border ${
                    cert.isActive 
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' 
                      : 'bg-slate-700 text-slate-300 border-slate-600'
                  }`}
                >
                  {cert.badge}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
              <p 
                className={`font-medium mb-6 ${
                  index === 0 ? 'text-blue-400' : 'text-teal-400'
                }`}
              >
                {cert.subtitle}
              </p>
              
              {/* Certification metadata rows */}
              <div className="space-y-3">
                {cert.details.map((detail, dIdx) => (
                  <div 
                    key={dIdx} 
                    className="flex justify-between items-baseline border-b border-slate-700/50 pb-3 last:border-b-0 last:pb-0 last:pt-1"
                  >
                    <span className="text-slate-400 text-sm">{detail.label}</span>
                    <span className="text-sm font-medium text-right text-slate-200">
                      {detail.value}
                      {detail.subValue && (
                        <>
                          <br />
                          <span className="text-slate-500 text-xs font-normal">{detail.subValue}</span>
                        </>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Downloadable Documents Grid */}
        <div className="mt-20 pt-20 border-t border-slate-800/80">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-bold mb-3 text-white">Downloadable Documents</h3>
            <p className="text-slate-400 text-sm">Verified document copies available for immediate review.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {documents.map((doc, index) => (
              <DocumentCard
                key={index}
                title={doc.title}
                type={doc.type}
                pdfPath={doc.pdfPath}
                thumbPath={doc.thumbPath}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
