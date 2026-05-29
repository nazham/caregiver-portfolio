'use client';

import React, { useRef, useEffect, useState, type ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger index for sequential child reveals (delay = index * 100ms) */
  index?: number;
}

/**
 * ScrollReveal — A performant, IntersectionObserver-based reveal wrapper.
 *
 * Renders its children invisible (via `.scroll-reveal`) until 15% of the
 * element enters the viewport, then applies `.scroll-reveal-visible` which
 * triggers the CSS transition (fade + slide-up).
 *
 * When `index` is provided, the transition-delay is set to `index * 100ms`
 * for editorial staggering of sibling items.
 *
 * Fully respects `prefers-reduced-motion`: if the user prefers reduced motion,
 * the element renders immediately visible with no animation.
 */
export default function ScrollReveal({
  children,
  className = '',
  index,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      setPrefersReducedMotion(true);
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delay = typeof index === 'number' ? `${index * 100}ms` : undefined;

  return (
    <div
      ref={ref}
      className={`${prefersReducedMotion ? '' : 'scroll-reveal'} ${isVisible && !prefersReducedMotion ? 'scroll-reveal-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: delay } : undefined}
    >
      {children}
    </div>
  );
}
