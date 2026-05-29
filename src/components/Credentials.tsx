import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { portfolioContent } from '@/data/portfolio-content';
import DocumentCard from './DocumentCard';

export default function Credentials() {
  const { credentials, documents } = portfolioContent;

  return (
    <section 
      id="credentials" 
      className="section-padding bg-[#0F172A] text-white relative overflow-hidden"
    >
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div 
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-white/50 text-xs font-medium uppercase tracking-wider mb-5 border border-white/10"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#C4A882]" /> 
            {credentials.badgeText}
          </div>
          <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-4">{credentials.title}</h2>
          <p className="text-white/40 leading-relaxed">{credentials.description}</p>
        </div>

        {/* Credentials Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {credentials.certifications.map((cert, index) => (
            <article 
              key={index} 
              className="bg-white/[0.03] border border-white/10 p-8 rounded-2xl hover:border-[#C4A882]/30 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group motion-reduce:transition-none motion-reduce:hover:transform-none"
            >
              <div className="flex items-start justify-between mb-8">
                <div 
                  className="bg-white/5 p-3 rounded-xl group-hover:bg-[#C4A882]/10 transition-colors duration-300"
                >
                  <Award className="w-7 h-7 text-[#C4A882]" />
                </div>
                <span 
                  className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                    cert.isActive 
                      ? 'bg-[#C4A882]/10 text-[#C4A882] border-[#C4A882]/20' 
                      : 'bg-white/5 text-white/40 border-white/10'
                  }`}
                >
                  {cert.badge}
                </span>
              </div>
              
              <h3 className="heading-serif text-2xl font-bold mb-2">{cert.title}</h3>
              <p className="font-medium mb-6 text-[#C4A882]/80">
                {cert.subtitle}
              </p>
              
              {/* Certification metadata rows */}
              <div className="space-y-3">
                {cert.details.map((detail, dIdx) => (
                  <div 
                    key={dIdx} 
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4 border-b border-white/5 pb-3 last:border-b-0 last:pb-0 last:pt-1"
                  >
                    <span className="text-white/30 text-sm shrink-0">{detail.label}</span>
                    <span className="text-sm font-medium text-left sm:text-right text-white/70">
                      {detail.value}
                      {detail.subValue && (
                        <>
                          <br className="hidden sm:inline" />
                          <span className="text-white/25 text-xs font-normal block sm:inline-block sm:mt-0.5">{detail.subValue}</span>
                        </>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Verified Documents Grid */}
        <div className="mt-20 pt-20 border-t border-white/5">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="heading-serif text-2xl font-bold mb-3 text-white">Verified Documents</h3>
            <p className="text-white/35 text-sm">Verified document copies available for immediate review.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <DocumentCard
                key={index}
                title={doc.title}
                type={doc.type}
                pdfPath={doc.pdfPath}
                thumbPath={doc.thumbPath}
                priority={index < 2}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
