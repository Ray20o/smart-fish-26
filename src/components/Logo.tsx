import React from 'react';
import { ASSETS } from '@/src/config/assets.ts';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  isCompact?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = 'h-10 w-auto',
  showTagline = false,
  isCompact = false,
}) => {
  return (
    <div className="flex items-center gap-3 select-none">
      <img
        src={ASSETS.logo.whiteSvg}
        alt={ASSETS.logo.alt}
        className={`${className} object-contain transition-transform duration-200 hover:scale-[1.02]`}
        onError={(e) => {
          // If SVG fails to load for any reason, use clean inline SVG fallback
          const target = e.currentTarget;
          target.style.display = 'none';
          const fallback = target.nextElementSibling as HTMLElement;
          if (fallback) fallback.style.display = 'flex';
        }}
      />
      {/* Inline Fallback Representation */}
      <div className="hidden items-center gap-2.5" aria-hidden="true">
        <svg viewBox="0 0 48 48" className="h-9 w-9 text-white shrink-0 fill-current">
          <circle cx="12" cy="14" r="3" />
          <circle cx="12" cy="34" r="3" />
          <path d="M 12 14 C 15 22 15 26 12 34" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <path d="M 13 32 C 22 20 32 16 42 16 C 44 16 45 18 45 20 C 45 22 44 24 42 24 C 30 24 20 31 15 34" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <path d="M 14 16 C 24 18 36 24 42 34 C 37 38 29 39 22 35" stroke="currentColor" strokeWidth="2.5" fill="none" />
        </svg>
        {!isCompact && (
          <div className="flex flex-col text-white">
            <span className="font-bold text-base leading-tight tracking-tight">شركة الأسماك الذكية</span>
            <span className="text-xs font-medium tracking-wide text-white/80">Smart Fish Company</span>
          </div>
        )}
      </div>

      {showTagline && (
        <span className="hidden lg:inline-block border-s border-white/20 ps-3 text-xs text-white/70">
          الريادة من قلب الصحراء
        </span>
      )}
    </div>
  );
};
