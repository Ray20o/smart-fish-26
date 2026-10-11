import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { TRANSLATIONS, type Language } from '@/src/i18n/translations.ts';
import { ASSETS } from '@/src/config/assets.ts';
import { Logo } from './Logo.tsx';
import { WordReveal } from './motion/WordReveal.tsx';
import { Magnetic } from './motion/Magnetic.tsx';
import { Reveal } from './motion/Reveal.tsx';
import { CINEMATIC_EASE, prefersReducedMotion } from './motion/constants.ts';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const sectionRef = useRef<HTMLElement>(null);
  const isReduced = prefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[96vh] flex items-center justify-center overflow-hidden pt-28 pb-20"
    >
      {/* Background Photography with Soft Scroll Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src={ASSETS.heroBackdrop.src}
          alt={lang === 'ar' ? ASSETS.heroBackdrop.altAr : ASSETS.heroBackdrop.altEn}
          style={{
            y: isReduced ? '0%' : backgroundY,
            scale: isReduced ? 1 : backgroundScale,
          }}
          className="w-full h-[120%] -mt-[10%] object-cover object-center will-change-transform"
          referrerPolicy="no-referrer"
        />
        {/* Deep Navy Gradient Scrims ensuring WCAG AAA legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#002238]/90 via-[#003454]/85 to-[#002238]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,52,84,0.4),#001c2e_90%)]" />
      </div>

      {/* Ambient Animated Water-Wave & Light Ray Motif */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-25">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
          fill="none"
        >
          <motion.path
            d="M-100 400 C 300 300, 600 500, 1500 350"
            stroke="#38bdf8"
            strokeWidth="1.5"
            strokeDasharray="8 8"
            animate={{ strokeDashoffset: [0, -100] }}
            transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          />
          <motion.path
            d="M-100 500 C 400 430, 800 620, 1600 460"
            stroke="#0284c7"
            strokeWidth="1.2"
            animate={{ strokeDashoffset: [0, 80] }}
            transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
          />
        </svg>
      </div>

      {/* Floating Soft Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        className="absolute top-1/4 start-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-sky-500/20 rounded-full blur-[120px] pointer-events-none"
      />

      <motion.div
        style={{ opacity: isReduced ? 1 : heroOpacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
      >
        {/* Regional Location Badge */}
        <Reveal delay={0.1} yOffset={16}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm text-xs font-medium text-white/90 mb-6">
            <motion.span
              animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
              className="w-2 h-2 rounded-full bg-sky-400"
            />
            <span>{t.hero.badge}</span>
          </div>
        </Reveal>

        {/* Hero White Logo Mark & Wordmark */}
        <Reveal delay={0.2} yOffset={20}>
          <div className="mb-6 flex justify-center">
            <Logo className="h-16 sm:h-20 lg:h-24 w-auto drop-shadow-md" />
          </div>
        </Reveal>

        {/* Staggered Word-by-Word Reveal Headline */}
        <h1 className="text-[clamp(1.75rem,4vw,3.25rem)] font-bold text-white max-w-4xl leading-[1.3] mb-4 text-balance">
          <span className="block text-sky-300 font-semibold text-[clamp(1.1rem,2.2vw,1.75rem)] mb-2">
            <WordReveal text={t.hero.headlineStart} delay={0.3} stagger={0.06} />
          </span>
          <span className="block text-white">
            <WordReveal text={t.hero.headlineEnd} delay={0.55} stagger={0.06} />
          </span>
        </h1>

        {/* Punchy Subtitle Description */}
        <Reveal delay={0.8} yOffset={20}>
          <p className="text-base sm:text-lg lg:text-xl text-white/85 max-w-3xl leading-relaxed mb-8">
            {t.hero.subhead}
          </p>
        </Reveal>

        {/* Primary Call to Action Buttons */}
        <Reveal delay={0.95} yOffset={20}>
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mb-12">
            <Magnetic>
              <a
                href="#products"
                className="relative overflow-hidden group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#002238] bg-white hover:bg-white/95 rounded-xl shadow-lg shadow-black/20 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
              >
                {/* Soft shine sweep */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
                <span>{t.hero.ctaProducts}</span>
                <svg
                  className="w-4 h-4 rtl:rotate-180 transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </Magnetic>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/25 backdrop-blur-sm rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>{t.hero.ctaContact}</span>
            </a>

            <a
              href={ASSETS.links.onlineStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl shadow-lg shadow-sky-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span>{t.hero.ctaStore}</span>
            </a>
          </div>
        </Reveal>

        {/* Certificates & Trust Bar Strip */}
        <Reveal delay={1.1} yOffset={20}>
          <div className="w-full pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-sky-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
              <span className="font-medium">شهادة سمك الوطنية (SAMAK)</span>
            </div>

            <div className="hidden sm:inline-block w-1 h-1 rounded-full bg-white/30" />

            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-sky-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span className="font-medium">ISO 9001:2015</span>
            </div>

            <div className="hidden sm:inline-block w-1 h-1 rounded-full bg-white/30" />

            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <span className="font-medium">صناعة سعودية · Made in Saudi</span>
            </div>

            <div className="hidden sm:inline-block w-1 h-1 rounded-full bg-white/30" />

            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-sky-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              <span className="font-medium">{lang === 'ar' ? 'فحوصات نصف شهرية معتمدة' : 'Bi-weekly MEWA Tested'}</span>
            </div>
          </div>
        </Reveal>
      </motion.div>

      {/* Animated Scroll Cue Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: [0.4, 0.9, 0.4], y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        className="absolute bottom-4 start-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none text-white/50"
      >
        <span className="text-[10px] uppercase font-mono tracking-widest">
          {lang === 'ar' ? 'مرر للأسفل' : 'Scroll Down'}
        </span>
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.div>
    </section>
  );
};
