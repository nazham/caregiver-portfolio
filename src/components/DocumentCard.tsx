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
      className="group bg-white/[0.02] border border-white/5 hover:border-[#C4A882]/20 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-2xl overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col h-full motion-reduce:transition-none motion-reduce:hover:transform-none"
    >
      {/* Thumbnail Cover — Full-bleed preview to eliminate empty space */}
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-white/5">
        <Image 
          src={thumbPath}
          alt={`${title} Thumbnail`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-top filter brightness-[0.93] contrast-[0.97] saturate-[0.8] sepia-[0.12] transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />
      </div>

      {/* Info Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Document Type Badge */}
          <span 
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border ${
              isResume 
                ? 'bg-[#C4A882]/10 text-[#C4A882] border-[#C4A882]/20' 
                : 'bg-white/5 text-white/40 border-white/10'
            }`}
          >
            {type}
          </span>

          {/* Document Title */}
          <h4 className="heading-serif text-lg font-bold text-white mt-3 leading-snug line-clamp-2">
            {title}
          </h4>
        </div>

        {/* Action Buttons bar */}
        <div className="flex items-center gap-3 mt-6">
          <a 
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-4 bg-[#C4A882] hover:bg-[#B89B75] text-[#0F172A] text-sm font-bold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>View Document</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}

