import React from 'react';
import { TRANSLATIONS, type Language } from '@/src/i18n/translations.ts';
import { Reveal, RevealGroup } from './motion/Reveal.tsx';

interface ServicesProps {
  lang: Language;
}

export const Services: React.FC<ServicesProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const serviceIcons = [
    // Technical Guidance
    <svg key="1" className="w-6 h-6 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>,
    // After-sales Follow-up
    <svg key="2" className="w-6 h-6 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16 11 18 13 22 9" />
    </svg>,
    // Supply Coordination
    <svg key="3" className="w-6 h-6 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>,
    // Refrigerated Logistics & Delivery (KSA & GCC)
    <svg key="4" className="w-6 h-6 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>,
  ];

  return (
    <section id="services" className="py-24 bg-[#003454] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
              {lang === 'ar' ? 'حلول الدعم والشراكة' : 'Specialized Services'}
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {t.services.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
              {t.services.subtitle}
            </p>
          </div>
        </Reveal>

        {/* 4 Clean Services Cards */}
        <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.list.map((srv, idx) => (
            <div
              key={srv.title}
              className="p-7 rounded-2xl bg-[#002b46]/70 border border-white/10 hover:border-sky-400/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="p-3 w-fit rounded-xl bg-sky-500/15 mb-5 border border-sky-400/20">
                  {serviceIcons[idx]}
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  {srv.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-sky-300">
                <span>{lang === 'ar' ? 'خدمة معتمدة' : 'Verified Service'}</span>
                <span className="font-mono">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
};
