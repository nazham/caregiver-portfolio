'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, Download } from 'lucide-react';

interface DocumentCardProps {
  title: string;
  type: string;
  pdfPath: string;
  thumbPath: string;
}

export default function DocumentCard({ title, type, pdfPath, thumbPath }: DocumentCardProps) {
  const isResume = type.toLowerCase() === 'resume';

  return (
    <article 
      className="group bg-white/[0.03] border border-white/10 hover:border-[#C4A882]/30 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5 flex flex-col h-full"
    >
      {/* Thumbnail Cover */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image 
          src={thumbPath}
          alt={`${title} Thumbnail`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Soft Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 via-transparent to-transparent pointer-events-none" 
          aria-hidden="true"
        />
      </div>

      {/* Info Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Document Type Badge */}
          <span 
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
              isResume 
                ? 'bg-[#C4A882]/10 text-[#C4A882] border-[#C4A882]/20' 
                : 'bg-white/5 text-white/50 border-white/10'
            }`}
          >
            {type}
          </span>

          {/* Document Title */}
          <h4 className="text-base font-semibold text-white mt-3 leading-snug line-clamp-2">
            {title}
          </h4>
        </div>

        {/* Action Buttons bar */}
        <div className="flex items-center gap-3 mt-5">
          <a 
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-outline-light"
          >
            <span>View</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          
          <a 
            href={pdfPath}
            download
            className="btn-accent py-2.5 px-4 rounded-lg text-sm"
            aria-label={`Download ${title}`}
          >
            <Download className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}
