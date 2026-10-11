import React from 'react';
import { TRANSLATIONS, type Language } from '@/src/i18n/translations.ts';
import { Reveal, RevealGroup } from './motion/Reveal.tsx';

interface QualityCertificationsProps {
  lang: Language;
}

export const QualityCertifications: React.FC<QualityCertificationsProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="quality" className="py-24 bg-[#002840] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
              {lang === 'ar' ? 'الاعتمادات والمطابقة' : 'Certifications & Compliance'}
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {t.quality.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
              {t.quality.subtitle}
            </p>
          </div>
        </Reveal>

        {/* 3 Core Official Badges/Cards */}
        <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {t.quality.certifications.map((cert) => (
            <div
              key={cert.name}
              className="p-7 rounded-2xl bg-gradient-to-b from-[#003759]/60 to-[#002338]/80 border border-white/10 hover:border-sky-400/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-2.5 rounded-xl bg-sky-500/20 text-sky-400">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-sky-300">
                    {cert.org}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  {cert.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-emerald-400 font-medium">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{lang === 'ar' ? 'معتمد رسمياً' : 'Officially Certified'}</span>
              </div>
            </div>
          ))}
        </RevealGroup>

        {/* Biosecurity & MEWA Bi-weekly Testing Spotlight */}
        <Reveal delay={0.2}>
          <div className="p-8 sm:p-10 rounded-2xl bg-[#001e30] border border-sky-500/20 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-3 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{lang === 'ar' ? 'رقابة رسمية مستمرة' : 'Continuous Official Oversight'}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {t.quality.biosecurityTitle}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed mb-6">
                {t.quality.biosecurityDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.quality.bullets.map((b, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/85">
                    <svg className="w-4 h-4 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{b.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-xl bg-gradient-to-br from-[#003454] to-[#00243b] border border-white/10 text-center flex flex-col items-center justify-center shadow-lg">
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
                {lang === 'ar' ? 'وزارة البيئة والمياه والزراعة' : 'Ministry of Environment, Water & Agriculture'}
              </span>
              <div className="font-mono text-4xl font-bold text-white my-2">
                14 {lang === 'ar' ? 'يوماً' : 'Days'}
              </div>
              <p className="text-xs text-white/70 max-w-xs">
                {lang === 'ar' ? 'دورة فحص مخبري نصف شهرية منتظمة وموثقة' : 'Bi-weekly routine microbiological and water quality testing cycle'}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
