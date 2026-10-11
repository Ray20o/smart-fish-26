import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { TRANSLATIONS, type Language } from '@/src/i18n/translations.ts';
import { ASSETS } from '@/src/config/assets.ts';
import { Reveal, RevealGroup } from './motion/Reveal.tsx';
import { ParallaxImage } from './motion/ParallaxImage.tsx';
import { CINEMATIC_EASE } from './motion/constants.ts';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const timelineRef = useRef<HTMLDivElement>(null);

  // Scroll-linked timeline line progress
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 50%'],
  });

  const timelineScale = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <section id="about" className="py-24 bg-[#003454] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
              {lang === 'ar' ? 'نبذة عن الشركة' : 'Company Overview'}
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {t.about.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
              {t.about.subtitle}
            </p>
          </div>
        </Reveal>

        {/* 1. About Us: One Wide High-Quality Facility Image with Parallax & Mask Wipe */}
        <div className="mb-16">
          <ParallaxImage
            src={ASSETS.images.aboutFarm.src}
            alt={lang === 'ar' ? ASSETS.images.aboutFarm.altAr : ASSETS.images.aboutFarm.altEn}
            aspectClassName="aspect-[16/9] sm:aspect-[21/9] max-h-[480px]"
            overlayGradient={
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-[#003454]/90 via-[#003454]/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 sm:bottom-6 start-4 sm:start-8 end-4 sm:end-8 flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-sky-300">
                      {lang === 'ar' ? 'مزارع الخرج الحديثة' : 'Al-Kharj Modern Aquaculture Facility'}
                    </p>
                    <p className="text-xs text-white/80">
                      {lang === 'ar' ? '20,000 متر مربع بنية تحتية هندسية متقدمة للاستزراع المائي' : '20,000 m² advanced engineering infrastructure'}
                    </p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/90 backdrop-blur-md border border-white/15 hidden sm:inline-block">
                    RAS 2025
                  </span>
                </div>
              </>
            }
          />
        </div>

        {/* Narrative Split: Company Story & Purpose */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-20">
          <Reveal delay={0.1}>
            <div className="h-full p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#00426b]/40 to-[#002840]/60 border border-white/10 flex flex-col justify-center hover:border-sky-400/30 transition-colors">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {lang === 'ar' ? 'ريادة الاستزراع في قلب صحراء الخرج' : 'Pioneering Aquaculture in the Heart of Al-Kharj'}
              </h3>
              <p className="text-white/80 leading-relaxed mb-4 text-sm sm:text-base">
                {t.about.description1}
              </p>
              <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                {t.about.description2}
              </p>
            </div>
          </Reveal>

          {/* Vision & Mission Cards */}
          <div className="flex flex-col gap-6 justify-between">
            <Reveal delay={0.2}>
              <div className="p-7 rounded-2xl bg-[#002e4d]/70 border border-white/10 hover:border-sky-400/30 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-sky-500/20 text-sky-400">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white">{t.about.visionTitle}</h4>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
                  {t.about.visionText}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="p-7 rounded-2xl bg-[#002e4d]/70 border border-white/10 hover:border-sky-400/30 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-sky-500/20 text-sky-400">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white">{t.about.missionTitle}</h4>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
                  {t.about.missionText}
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Story Timeline (2022 -> 2024 -> 2025) with Scroll-Driven Connecting Line */}
        <div ref={timelineRef} className="mb-20 relative">
          <Reveal>
            <div className="text-center mb-14">
              <h3 className="text-2xl font-bold text-white mb-2">
                {t.about.timelineTitle}
              </h3>
              <p className="text-sm text-white/70">
                {lang === 'ar' ? 'من التخطيط الاستراتيجي إلى ذروة الإنتاج' : 'From strategic blueprint to operational excellence'}
              </p>
            </div>
          </Reveal>

          {/* Desktop Connecting Line that draws itself */}
          <div className="hidden md:block absolute top-[128px] start-16 end-16 h-[2px] bg-white/10 pointer-events-none">
            <motion.div
              style={{ scaleX: timelineScale }}
              className="h-full bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500 origin-left rtl:origin-right"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {t.about.timeline.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: idx * 0.18, ease: CINEMATIC_EASE }}
                whileHover={{ y: -4, borderColor: 'rgba(56, 189, 248, 0.4)' }}
                className="relative p-6 rounded-2xl bg-gradient-to-b from-[#003c62]/50 to-[#00263d]/80 border border-white/10 transition-colors duration-300"
              >
                {/* Year Marker with Pulse Glow */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-sky-500/20 text-sky-300 font-mono text-sm font-bold tracking-wider mb-4 border border-sky-400/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
                  <span>{item.year}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-white/75 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4 Core Values */}
        <div>
          <Reveal>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white mb-2">
                {t.about.valuesTitle}
              </h3>
              <p className="text-sm text-white/70">
                {lang === 'ar' ? 'المبادئ الراسخة التي تحكم كافة ممارساتنا اليومية' : 'The guiding principles behind our daily operations'}
              </p>
            </div>
          </Reveal>

          <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.about.values.map((val) => (
              <motion.div
                key={val.title}
                whileHover={{ y: -4, borderColor: 'rgba(56, 189, 248, 0.4)' }}
                className="p-6 rounded-2xl bg-[#002e4d]/50 border border-white/10 transition-colors duration-300"
              >
                <h4 className="text-base font-bold text-sky-300 mb-2">
                  {val.title}
                </h4>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
};
