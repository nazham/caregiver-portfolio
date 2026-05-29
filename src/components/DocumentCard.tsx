'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

interface DocumentCardProps {
  title: string;
  type: string;
  pdfPath: string;
  thumbPath: string;
  priority?: boolean;
}

export default function DocumentCard({ title, type, pdfPath, thumbPath, priority = false }: DocumentCardProps) {
  const isResume = type.toLowerCase() === 'resume';

  return (
    <article 
      className="group p-2 bg-linear-to-b from-secondary-bg to-secondary-bg/50 border border-accent/20 border-l-3 border-l-accent/70 dark:border-l-accent dark:border-light-border shadow-[0_8px_30px_rgba(196,168,130,0.04)] dark:shadow-none hover:border-accent/40 hover:border-l-accent hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(196,168,130,0.12)] dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)] rounded-none transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col h-full motion-reduce:transition-none motion-reduce:hover:transform-none"
    >
      {/* Inset Thumbnail Cover with sharp corners and border frame */}
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-none border border-light-border dark:border-primary-border/20 bg-primary-bg">
        <Image 
          src={thumbPath}
          alt={`${title} Thumbnail`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-top filter brightness-[0.93] contrast-[0.97] saturate-[0.85] sepia-[0.12] transition-all duration-500 group-hover:scale-[1.03] group-hover:brightness-100 group-hover:contrast-100 group-hover:saturate-100 group-hover:sepia-0"
          priority={priority}
        />
      </div>

      {/* Info Content */}
      <div className="pt-5 px-1 pb-1 flex-1 flex flex-col justify-between">
        <div>
          {/* Document Type Badge */}
          <span 
            className={`inline-flex items-center px-2.5 py-0.5 rounded-none text-[10px] font-semibold uppercase tracking-wider border ${
              isResume 
                ? 'bg-accent-muted text-accent border-accent/20' 
                : 'bg-primary-text/5 text-muted-text border-primary-border'
            }`}
          >
            {type}
          </span>

          {/* Document Title */}
          <h4 className="heading-serif text-lg font-bold text-primary-text mt-3 leading-snug line-clamp-2">
            {title}
          </h4>
        </div>

        {/* Action Buttons bar */}
        <div className="flex items-center gap-3 mt-6">
          <a 
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} (opens in a new tab)`}
            className="btn-accent flex-1 py-2.5 px-4 text-sm font-bold rounded-none transition-all duration-300"
          >
            <span>View Document</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

