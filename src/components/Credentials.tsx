import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { portfolioContent } from '@/data/portfolio-content';
import DocumentCard from './DocumentCard';

export default function Credentials() {
  const { credentials, documents } = portfolioContent;

  return (
    <section 
      id="credentials" 
      className="section-padding bg-primary-bg text-primary-text relative overflow-hidden transition-colors duration-300"
    >
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div 
            className="inline-flex items-center gap-2.5 px-4 py-2 bg-accent/5 rounded-full text-accent text-xs font-semibold uppercase tracking-widest mb-6 border border-accent/20"
          >
            <ShieldCheck className="w-4 h-4" /> 
            {credentials.badgeText}
          </div>
          <h2 className="heading-serif text-4xl sm:text-5xl font-bold mb-6 text-primary-text leading-tight">{credentials.title}</h2>
          <p className="text-lead-text text-lg leading-relaxed">{credentials.description}</p>
        </div>

        {/* Credentials Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {credentials.certifications.map((cert, index) => (
            <article 
              key={index} 
              className="bg-secondary-bg border border-light-border p-8 rounded-2xl hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group motion-reduce:transition-none"
            >
              <div className="flex items-start justify-between mb-8">
                <div 
                  className="bg-primary-text/5 p-3 rounded-xl group-hover:bg-accent-muted transition-colors duration-300"
                >
                  <Award className="w-7 h-7 text-accent" />
                </div>
                <span 
                  className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                    cert.isActive 
                      ? 'bg-accent-muted text-accent border-accent/20' 
                      : 'bg-primary-text/5 text-muted-text border-primary-border'
                  }`}
                >
                  {cert.badge}
                </span>
              </div>
              
              <h3 className="heading-serif text-2xl font-bold mb-2 text-primary-text">{cert.title}</h3>
              <p className="font-medium mb-6 text-accent">
                {cert.subtitle}
              </p>
              
              {/* Certification metadata rows */}
              <div className="space-y-3">
                {cert.details.map((detail, dIdx) => (
                  <div 
                    key={dIdx} 
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4 border-b border-light-border pb-3 last:border-b-0 last:pb-0 last:pt-1"
                  >
                    <span className="text-muted-text text-sm shrink-0">{detail.label}</span>
                    <span className="text-sm font-medium text-left sm:text-right text-secondary-text">
                      {detail.value}
                      {detail.subValue && (
                        <>
                          <br className="hidden sm:inline" />
                          <span className="text-muted-text text-xs font-normal block sm:inline-block sm:mt-0.5">{detail.subValue}</span>
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
        <div className="mt-20 pt-20 border-t border-primary-border dark:border-light-border">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="heading-serif text-2xl font-bold mb-3 text-primary-text">Verified Documents</h3>
            <p className="text-lead-text text-sm">Verified document copies available for immediate review.</p>
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
