import React from 'react';
import { TRANSLATIONS, type Language } from '@/src/i18n/translations.ts';
import { Reveal, RevealGroup } from './motion/Reveal.tsx';

interface AchievementsProps {
  lang: Language;
}

export const Achievements: React.FC<AchievementsProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="achievements" className="py-24 bg-[#002840] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
              {lang === 'ar' ? 'سجل النجاح والمبادرات' : 'Milestones & Community'}
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {t.achievements.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
              {t.achievements.subtitle}
            </p>
          </div>
        </Reveal>

        {/* 6 Achievements Bento Grid */}
        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.achievements.list.map((ach, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#003454]/60 border border-white/10 hover:border-sky-400/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-sky-400">
                    {ach.year}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {ach.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  {ach.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-white/50 flex items-center justify-between">
                <span>{lang === 'ar' ? 'إنجاز رسمي موثق' : 'Official Milestone'}</span>
                <span className="font-mono">#{idx + 1}</span>
              </div>
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
};
