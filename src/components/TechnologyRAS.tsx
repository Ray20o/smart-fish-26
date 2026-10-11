import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TRANSLATIONS, type Language } from '@/src/i18n/translations.ts';
import { ASSETS } from '@/src/config/assets.ts';
import { Reveal } from './motion/Reveal.tsx';
import { ParallaxImage } from './motion/ParallaxImage.tsx';
import { CINEMATIC_EASE, prefersReducedMotion } from './motion/constants.ts';

interface TechnologyRASProps {
  lang: Language;
}

export const TechnologyRAS: React.FC<TechnologyRASProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [activeStage, setActiveStage] = useState(0);
  const isReduced = prefersReducedMotion();

  return (
    <section id="technology" className="py-24 bg-[#002840] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
              {lang === 'ar' ? 'منظومة الاستزراع المغلق' : 'Recirculating Aquaculture System (RAS)'}
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {t.technology.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
              {t.technology.subtitle}
            </p>
          </div>
        </Reveal>

        {/* Overview & High-tech Image Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <Reveal className="lg:col-span-5 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              {lang === 'ar' ? 'كفاءة مائية ونقاء استثنائي 100%' : '100% Biosecure & Water Efficient'}
            </h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6">
              {t.technology.overview}
            </p>

            {/* 3 Core Highlights */}
            <div className="flex flex-col gap-3">
              {t.technology.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="p-1.5 rounded-lg bg-sky-500/20 text-sky-400 shrink-0 mt-0.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{h.title}</h4>
                    <p className="text-xs text-white/70">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <ParallaxImage
              src={ASSETS.images.ras.src}
              alt={lang === 'ar' ? ASSETS.images.ras.altAr : ASSETS.images.ras.altEn}
              aspectClassName="h-auto max-h-[460px] aspect-[16/10]"
              overlayGradient={
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002238]/90 via-[#003454]/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 start-4 end-4 p-4 rounded-xl bg-[#002238]/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-sky-400">
                        {lang === 'ar' ? 'محطة التدوير المركزية' : 'Central RAS Water Treatment Loop'}
                      </p>
                      <p className="text-sm font-medium text-white">
                        {lang === 'ar' ? '12 دورة تدوير يومياً · 9,000 م³ مياه مفلترة' : '12 Daily Recirculation Cycles · 9,000 m³ Treated Water'}
                      </p>
                    </div>
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-sky-500/20 text-sky-300 font-bold">
                      RAS 7-STAGE
                    </span>
                  </div>
                </>
              }
            />
          </div>
        </div>

        {/* ANIMATED SVG WATER-FLOW PIPELINE SYSTEM */}
        <Reveal className="mb-10 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#002238]/90 border border-white/15 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                {lang === 'ar' ? 'مسار التدفق الهيدروليكي الحيوي' : 'Hydraulic & Biosecure Water Circuit'}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                {lang === 'ar' ? 'دورة التدوير المغلقة: 12 مرة كل 24 ساعة' : '12 Daily Complete Cycles · Continuous Closed Loop'}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-sky-300 bg-sky-500/10 px-3 py-1.5 rounded-lg border border-sky-400/20">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>{lang === 'ar' ? 'المياه قيد التدفق والتعقيم' : 'Active Flow 24/7'}</span>
            </div>
          </div>

          {/* Interactive Flow Diagram SVG with Moving Water Droplets */}
          <div className="relative w-full overflow-x-auto pb-4">
            <svg
              viewBox="0 0 1000 130"
              className="w-full min-w-[750px] h-32 select-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background Pipeline Bed */}
              <path
                d="M 50 65 L 950 65"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="12"
                strokeLinecap="round"
              />

              {/* Animated Glowing Water Stream with moving dashed offset */}
              <motion.path
                d="M 50 65 L 950 65"
                stroke="#0284c7"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray="16 12"
                animate={isReduced ? {} : { strokeDashoffset: lang === 'ar' ? [0, 56] : [0, -56] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }}
              />

              {/* Returning Lower Return Loop */}
              <path
                d="M 950 65 C 990 65, 990 115, 950 115 L 50 115 C 10 115, 10 65, 50 65"
                stroke="rgba(56, 189, 248, 0.25)"
                strokeWidth="3"
                strokeDasharray="6 6"
              />

              {/* Moving Water Droplets */}
              {!isReduced && (
                <>
                  <motion.circle
                    r="5"
                    fill="#38bdf8"
                    animate={{ cx: [60, 940] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: 'linear' }}
                    cy="65"
                  />
                  <motion.circle
                    r="4"
                    fill="#a5f3fc"
                    animate={{ cx: [60, 940] }}
                    transition={{ repeat: Infinity, duration: 4.5, delay: 2.2, ease: 'linear' }}
                    cy="65"
                  />
                </>
              )}

              {/* 7 Stage Nodes along the Pipeline */}
              {t.technology.stages.map((st, i) => {
                const cx = 75 + i * 140;
                const isSelected = activeStage === i;
                return (
                  <g
                    key={st.step}
                    className="cursor-pointer group"
                    onClick={() => setActiveStage(i)}
                  >
                    {/* Node Outer Halo */}
                    <circle
                      cx={cx}
                      cy="65"
                      r={isSelected ? 20 : 16}
                      fill="#002238"
                      stroke={isSelected ? '#38bdf8' : 'rgba(255,255,255,0.3)'}
                      strokeWidth={isSelected ? 3 : 2}
                      className="transition-all duration-300"
                    />
                    {/* Node Number */}
                    <text
                      x={cx}
                      y="70"
                      textAnchor="middle"
                      fill={isSelected ? '#38bdf8' : '#ffffff'}
                      fontSize="12"
                      fontWeight="bold"
                      fontFamily="monospace"
                    >
                      {st.step}
                    </text>
                    {/* Node Stage Label */}
                    <text
                      x={cx}
                      y="26"
                      textAnchor="middle"
                      fill={isSelected ? '#38bdf8' : 'rgba(255,255,255,0.7)'}
                      fontSize="10"
                      fontWeight="600"
                    >
                      {st.name.split(' ')[0]}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </Reveal>

        {/* 7 Treatment Stages Flow Buttons */}
        <div className="mt-8">
          <Reveal>
            <div className="text-center mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {t.technology.stagesTitle}
              </h3>
              <p className="text-xs sm:text-sm text-white/70">
                {lang === 'ar' ? 'انقر على أي مرحلة للاطلاع على مواصفاتها الكيميائية والحيوية' : 'Click on any stage to inspect mechanical and microbiological specifications'}
              </p>
            </div>
          </Reveal>

          {/* Interactive Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
            {t.technology.stages.map((stage, idx) => {
              const isActive = activeStage === idx;
              return (
                <button
                  key={stage.step}
                  onClick={() => setActiveStage(idx)}
                  className={`text-start p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                    isActive
                      ? 'bg-sky-600/30 border-sky-400 shadow-md shadow-sky-900/30 ring-1 ring-sky-400/40 scale-[1.02]'
                      : 'bg-[#003454]/40 border-white/10 hover:border-white/25 hover:bg-[#003454]/70'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-bold text-sky-400">
                        {stage.step}
                      </span>
                      {idx < 6 && (
                        <span className="text-xs text-white/40 hidden lg:inline rtl:rotate-180">→</span>
                      )}
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-2 mb-1.5">
                      {stage.name}
                    </h4>
                  </div>
                  <p className="text-[11px] text-white/70 line-clamp-3">
                    {stage.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Selected Stage Detail Banner with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: CINEMATIC_EASE }}
              className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-sky-950/50 via-[#003454]/70 to-sky-950/50 border border-sky-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl"
            >
              <div>
                <span className="text-xs font-mono text-sky-400 font-bold uppercase">
                  {lang === 'ar' ? 'المرحلة النشطة' : 'Active Stage'} {t.technology.stages[activeStage].step} / 07
                </span>
                <h4 className="text-lg font-bold text-white mt-1">
                  {t.technology.stages[activeStage].name}
                </h4>
                <p className="text-xs sm:text-sm text-white/85 mt-1 max-w-2xl leading-relaxed">
                  {t.technology.stages[activeStage].desc}
                </p>
              </div>
              <div className="shrink-0 flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl border border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs text-white/80 font-medium">
                  {lang === 'ar' ? 'معالجة آلية مستمرة' : 'Automated 24/7 Flow'}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
