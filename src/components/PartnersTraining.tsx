import React from 'react';
import { TRANSLATIONS, type Language } from '@/src/i18n/translations.ts';
import { Reveal, RevealGroup } from './motion/Reveal.tsx';

interface PartnersTrainingProps {
  lang: Language;
}

export const PartnersTraining: React.FC<PartnersTrainingProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="partners" className="py-24 bg-[#002840] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
              {lang === 'ar' ? 'التعاون والشراكات' : 'Strategic Alliances'}
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {t.partners.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
              {t.partners.subtitle}
            </p>
          </div>
        </Reveal>

        {/* Academic Collaboration Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {/* Universities */}
          <Reveal delay={0.1}>
            <div className="h-full p-8 rounded-2xl bg-[#003454]/60 border border-white/10 flex flex-col justify-between hover:border-sky-400/30 transition-all shadow-xl">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="p-2 rounded-lg bg-sky-500/20 text-sky-400">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {t.partners.academicTitle}
                  </h3>
                </div>
                <p className="text-sm text-white/80 leading-relaxed mb-6">
                  {t.partners.academicDesc}
                </p>

                <div className="space-y-3">
                  {t.partners.universities.map((uni, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-sky-400/30 transition-colors">
                      <h4 className="text-sm sm:text-base font-bold text-sky-300">
                        {uni.name}
                      </h4>
                      <p className="text-xs text-white/70 mt-1">
                        {uni.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Commercial Partnership: Afran Al-Hatab */}
          <Reveal delay={0.2}>
            <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-[#003a5e]/50 to-[#002238]/80 border border-sky-500/20 flex flex-col justify-between shadow-xl hover:border-sky-400/40 transition-all">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="p-2 rounded-lg bg-amber-500/20 text-amber-300">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="m10 15 5-3-5-3v6Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {t.partners.commercialTitle}
                  </h3>
                </div>

                <div className="my-5 p-5 rounded-xl bg-[#001f33] border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-amber-300 uppercase">
                      {lang === 'ar' ? 'شراكة تجارية معتمدة' : 'Official Retail Partner'}
                    </span>
                    <span className="text-xs text-white/60">
                      {lang === 'ar' ? 'شبكة فروع المملكة' : 'KSA Retail Branch Network'}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    أفران الحطب · Afran Al-Hatab
                  </h4>
                  <p className="text-xs sm:text-sm text-white/80 mt-2 leading-relaxed">
                    {t.partners.commercialDesc}
                  </p>
                </div>
              </div>

              <p className="text-xs text-white/60">
                {lang === 'ar' ? 'توفير الأسماك الطازجة يومياً لرواد أفران الحطب بضمان الجودة الفائقة' : 'Delivering fresh daily seafood products across branch outlets with guaranteed farm-freshness'}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Future Partner Logo Grid */}
        <Reveal delay={0.3}>
          <div className="p-8 rounded-2xl bg-[#001e30]/80 border border-white/10 text-center shadow-lg">
            <h4 className="text-sm font-semibold tracking-wide text-white/75 mb-6 uppercase">
              {t.partners.futureGridTitle}
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xs font-semibold text-white/80 hover:border-sky-400/30 transition-colors">
                جامعة الملك فيصل (KFU)
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xs font-semibold text-white/80 hover:border-sky-400/30 transition-colors">
                جامعة الملك سعود (KSU)
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xs font-semibold text-white/80 hover:border-sky-400/30 transition-colors">
                أفران الحطب (Afran Al-Hatab)
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-dashed border-white/20 flex items-center justify-center text-xs font-medium text-white/50">
                {lang === 'ar' ? '+ شريك مستقبلي' : '+ Future Partner Slot'}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
