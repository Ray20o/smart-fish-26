import React from 'react';
import { TRANSLATIONS, type Language } from '@/src/i18n/translations.ts';
import { Reveal, RevealGroup } from './motion/Reveal.tsx';

interface TeamProps {
  lang: Language;
}

export const Team: React.FC<TeamProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="team" className="py-24 bg-[#003454] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
              {lang === 'ar' ? 'الخبرات الاستشارية' : 'Consultants & Specialists'}
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {t.team.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
              {t.team.subtitle}
            </p>
          </div>
        </Reveal>

        {/* 4 Team / Advisor Cards */}
        <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.team.members.map((member, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#00273e]/60 border border-white/10 hover:border-sky-400/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00456c] to-[#002840] border border-white/15 flex items-center justify-center text-sky-300 font-mono text-sm font-bold mb-5 shadow-inner">
                  0{idx + 1}
                </div>
                <span className="text-xs font-semibold text-sky-400 block mb-1">
                  {member.role}
                </span>
                <h3 className="text-base font-bold text-white mb-2">
                  {member.title}
                </h3>
                <p className="text-xs text-white/75 leading-relaxed">
                  {member.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/10 text-[11px] text-white/50">
                {lang === 'ar' ? 'فريق شركة الأسماك الذكية' : 'Smart Fish Specialist Core'}
              </div>
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
};
