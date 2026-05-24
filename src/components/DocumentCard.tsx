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
    <div 
      className="group bg-slate-800/30 backdrop-blur-sm border border-slate-800 hover:border-slate-700 rounded-3xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full"
    >
      {/* Thumbnail Cover */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-850">
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
          className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" 
          aria-hidden="true"
        />
      </div>

      {/* Info Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Document Type Badge */}
          <span 
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${
              isResume 
                ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' 
                : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
            }`}
          >
            {type}
          </span>

          {/* Document Title */}
          <h4 className="text-lg font-bold text-white mt-3 leading-snug line-clamp-2">
            {title}
          </h4>
        </div>

        {/* Action Buttons bar */}
        <div className="flex items-center gap-3 mt-6">
          <a 
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-4 bg-slate-800 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-600 text-slate-200 hover:text-white text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <span>View</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          
          <a 
            href={pdfPath}
            download
            className="py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg"
            aria-label={`Download ${title}`}
          >
            <Download className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
