import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { TRANSLATIONS, type Language } from '@/src/i18n/translations.ts';
import { ASSETS } from '@/src/config/assets.ts';
import { Reveal } from './motion/Reveal.tsx';
import { ParallaxImage } from './motion/ParallaxImage.tsx';
import { CINEMATIC_EASE, prefersReducedMotion } from './motion/constants.ts';

interface DivisionsProps {
  lang: Language;
}

export const Divisions: React.FC<DivisionsProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const pinnedSectionRef = useRef<HTMLDivElement>(null);
  const isReduced = prefersReducedMotion();

  // Desktop horizontal scroll linked to vertical scroll
  const { scrollYProgress } = useScroll({
    target: pinnedSectionRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  // Calculate translation: for 4 cards in RTL vs LTR
  const xTransformLtr = useTransform(smoothProgress, [0, 1], ['0%', '-56%']);
  const xTransformRtl = useTransform(smoothProgress, [0, 1], ['0%', '56%']);
  const currentX = lang === 'ar' ? xTransformRtl : xTransformLtr;

  return (
    <section id="divisions" className="py-24 bg-[#003454] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
              {lang === 'ar' ? 'الوحدات الإنتاجية المتكاملة' : 'Facility Infrastructure'}
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {t.divisions.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
              {t.divisions.subtitle}
            </p>
          </div>
        </Reveal>

        {/* 2. Facility / Divisions: Fish Tanks (RAS Hall) Image Spotlight */}
        <div className="mb-20 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-r from-[#00385c] via-[#002e4c] to-[#002238] grid grid-cols-1 lg:grid-cols-12 items-center shadow-2xl">
          <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-center">
            <span className="text-xs font-semibold text-sky-400 uppercase mb-2">
              {lang === 'ar' ? 'صالة الأحواض الرئيسية (150 حوضاً)' : 'Main Production Hall (150 Tanks)'}
            </span>
            <h3 className="text-2xl font-bold text-white mb-3">
              {lang === 'ar' ? 'بيئة استزراع فائقة النقاء والتحكم' : 'Precision Controlled Rearing Tanks'}
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              {lang === 'ar'
                ? 'أحواض دائرية مصممة هندسياً لتدوير المياه بتيارات محددة تحفز نشاط الأسماك الطبيعي، مع مراقبة أكسجين وحرارة مستمرة لضمان أعلى معدلات البقاء والنمو.'
                : 'Circular engineered tanks calibrated with continuous oxygenation and hydrodynamic flow, ensuring optimal fish vitality and clean, premium meat quality.'}
            </p>
          </div>

          <div className="lg:col-span-7 h-64 sm:h-80 lg:h-96 relative overflow-hidden">
            <ParallaxImage
              src={ASSETS.images.facilityTanks.src}
              alt={lang === 'ar' ? ASSETS.images.facilityTanks.altAr : ASSETS.images.facilityTanks.altEn}
              aspectClassName="w-full h-full"
              overlayGradient={
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#003454]/80 via-transparent to-transparent pointer-events-none" />
              }
            />
          </div>
        </div>
      </div>

      {/* DESKTOP PINNED HORIZONTAL SCENE (Hidden on small screens / touch) */}
      <div
        ref={pinnedSectionRef}
        className="hidden lg:block relative h-[250vh]"
      >
        <div className="sticky top-28 h-[580px] overflow-hidden flex flex-col justify-between">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  {lang === 'ar' ? 'مسار دورة الإنتاج من المفرخة إلى الحصاد' : 'The Fish Journey Lifecycle Track'}
                </h3>
              </div>
              {/* Progress Indicator */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-sky-400 font-bold">
                  {lang === 'ar' ? 'تقدم الدورة' : 'Cycle Progress'}
                </span>
                <div className="w-36 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    style={{ scaleX: smoothProgress }}
                    className="h-full bg-sky-400 origin-left rtl:origin-right"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Track of 4 Division Cards */}
          <div className="relative w-full overflow-hidden py-4">
            <motion.div
              style={{ x: isReduced ? '0%' : currentX }}
              className="flex gap-8 px-8 sm:px-12 w-max will-change-transform"
            >
              {t.divisions.list.map((div, idx) => (
                <div
                  key={div.id}
                  className="w-[440px] p-8 rounded-2xl bg-gradient-to-b from-[#003c62]/70 to-[#002238]/90 border border-white/15 shadow-2xl flex flex-col justify-between hover:border-sky-400/50 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="font-mono text-xs font-bold text-sky-400">
                        {lang === 'ar' ? `المرحلة 0${idx + 1}` : `Phase 0${idx + 1}`}
                      </span>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-mono bg-sky-500/20 text-sky-300 border border-sky-400/20">
                        {div.capacity}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">
                      {div.name}
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed mb-6">
                      {div.desc}
                    </p>
                  </div>

                  {/* Bullet Features */}
                  <div className="pt-4 border-t border-white/10">
                    <ul className="space-y-2.5">
                      {div.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* MOBILE / TABLET STACKED CARDS VIEW (Clean responsive fallback) */}
      <div className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.divisions.list.map((div, idx) => (
            <Reveal key={div.id} delay={idx * 0.1}>
              <div className="p-7 rounded-2xl bg-gradient-to-b from-[#004068]/35 to-[#00273e]/65 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="font-mono text-xs font-bold text-sky-400">
                      0{idx + 1}.
                    </span>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-mono bg-sky-500/20 text-sky-300 border border-sky-400/20">
                      {div.capacity}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {div.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6">
                    {div.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <ul className="space-y-2">
                    {div.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-white/75">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
