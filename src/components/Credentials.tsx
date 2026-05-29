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
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div 
            className="inline-flex items-center gap-2 px-3 py-1 bg-primary-text/5 rounded-none text-muted-text text-xs font-medium uppercase tracking-wider mb-5 border border-primary-border"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-accent" /> 
            {credentials.badgeText}
          </div>
          <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-4 text-primary-text">{credentials.title}</h2>
          <p className="text-lead-text leading-relaxed">{credentials.description}</p>
        </div>

        {/* Credentials Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {credentials.certifications.map((cert, index) => (
            <article 
              key={index} 
              className="bg-linear-to-b from-secondary-bg to-secondary-bg/95 border border-accent/20 border-l-4 border-l-accent/70 dark:border-l-accent dark:border-light-border shadow-[0_8px_30px_rgba(196,168,130,0.04)] dark:shadow-none p-8 rounded-none hover:border-accent/40 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(196,168,130,0.12)] dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group motion-reduce:transition-none motion-reduce:hover:transform-none"
            >
              <div className="flex items-start justify-between mb-8">
                <div 
                  className="bg-accent-muted p-3 rounded-none border border-accent/10 transition-all duration-300 group-hover:bg-accent group-hover:border-accent/50"
                >
                  <Award className="w-7 h-7 text-accent group-hover:text-secondary-bg transition-colors duration-300" />
                </div>
                <span 
                  className={`text-xs font-semibold px-3 py-1 rounded-none border ${
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
        <div className="mt-20 pt-20 border-t border-accent/20 dark:border-light-border">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">Credentials Folder</p>
            <h3 className="heading-serif text-2xl sm:text-3xl font-bold text-primary-text">Verified Documents</h3>
            <div className="w-8 h-px bg-accent mx-auto mt-4 mb-4" aria-hidden="true"></div>
            <p className="text-secondary-text text-sm">Verified document copies available for immediate review.</p>
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
