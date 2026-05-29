'use client';

import React, { useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to console or error reporting service
    console.error('Unhandled Application Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-primary-bg flex flex-col justify-center items-center px-4 py-8 text-center transition-colors duration-300">
      <div className="max-w-md w-full bg-secondary-bg border border-primary-border p-8 rounded-none shadow-sm">
        <h2 className="heading-serif text-3xl font-bold text-primary-text mb-4">Something went wrong</h2>
        <p className="text-lead-text mb-8 leading-relaxed">
          An unexpected error occurred while loading this page. I apologize for the inconvenience.
        </p>
        <button
          onClick={() => reset()}
          className="btn-primary w-full py-3.5 px-6 rounded-none font-semibold flex items-center justify-center gap-2 cursor-pointer"
        >
          <RefreshCw className="w-4 h-4" /> Try again
        </button>
      </div>
    </div>
  );
}
