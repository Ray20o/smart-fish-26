import React from 'react';
import { TRANSLATIONS, type Language } from '@/src/i18n/translations.ts';
import { Reveal } from './motion/Reveal.tsx';

interface RAndDProps {
  lang: Language;
}

export const RAndD: React.FC<RAndDProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="rd" className="py-24 bg-[#003454] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
              {lang === 'ar' ? 'الابتكار والتطوير المستمر' : 'Research & Innovation'}
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {t.rd.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
              {t.rd.subtitle}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#003d63]/40 via-[#002b46]/70 to-[#001f33] border border-white/10 shadow-2xl hover:border-sky-400/30 transition-colors">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {lang === 'ar' ? 'تحسين السلالات السمكية للأمن المائي والغذائي' : 'Breeding Strain Enhancement for National Resilience'}
                </h3>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-4">
                  {t.rd.desc1}
                </p>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8">
                  {t.rd.desc2}
                </p>

                {/* Research Scope Tags */}
                <div className="flex flex-wrap gap-2.5">
                  {t.rd.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-white/10 text-sky-300 border border-white/10 hover:border-sky-400/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-2xl bg-[#002238]/80 border border-white/10 flex flex-col justify-center text-center shadow-lg">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 2v7.31M14 9.3V1.99M8.5 2h7M14 9.3a6.5 6.5 0 1 1-4 0" />
                    <path d="M5.52 16h12.96" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-1">
                  {lang === 'ar' ? 'مركز الأبحاث بالمنشأة' : 'In-House Research Lab'}
                </h4>
                <p className="text-xs text-white/70">
                  {lang === 'ar' ? 'مختبر مجهري وبيولوجي مدمج داخل مجمع الاستزراع في الخرج' : 'Microbiological and genetics testing suite integrated inside the Al-Kharj facility'}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
