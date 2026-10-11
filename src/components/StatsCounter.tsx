import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { TRANSLATIONS, type Language } from '@/src/i18n/translations.ts';
import { Reveal } from './motion/Reveal.tsx';
import { CINEMATIC_EASE, prefersReducedMotion } from './motion/constants.ts';

interface StatsCounterProps {
  lang: Language;
}

interface StatItemProps {
  targetNumber: number;
  unit: string;
  label: string;
  formatWithCommas?: boolean;
  prefix?: string;
  delayIndex?: number;
}

const StatCounterCard: React.FC<StatItemProps> = ({
  targetNumber,
  unit,
  label,
  formatWithCommas = true,
  prefix = '',
  delayIndex = 0,
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setCount(targetNumber);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic curve matching Apple-like motion
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeOutProgress * targetNumber);

            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(targetNumber);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [targetNumber]);

  const displayString = formatWithCommas
    ? count.toLocaleString('en-US')
    : count.toString();

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8, delay: delayIndex * 0.08, ease: CINEMATIC_EASE }}
      whileHover={{
        y: -4,
        borderColor: 'rgba(56, 189, 248, 0.45)',
        boxShadow: '0 10px 30px -10px rgba(2, 132, 199, 0.2)',
      }}
      className="relative p-6 rounded-2xl bg-gradient-to-b from-[#003d63]/40 to-[#002840]/60 border border-white/10 transition-colors duration-300 flex flex-col justify-between overflow-hidden group"
    >
      {/* Subtle hover backlight glow */}
      <div className="absolute -top-12 -end-12 w-28 h-28 bg-sky-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        <div className="flex items-baseline gap-1.5 flex-wrap">
          <span className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white tabular-nums">
            {prefix}{displayString}
          </span>
          <span className="text-xs sm:text-sm font-semibold text-sky-400/90 whitespace-nowrap">
            {unit}
          </span>
        </div>
      </div>
      <p className="mt-3 text-xs sm:text-sm text-white/80 font-medium leading-relaxed">
        {label}
      </p>
    </motion.div>
  );
};

export const StatsCounter: React.FC<StatsCounterProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="stats" className="py-20 bg-[#002840] relative overflow-hidden border-y border-white/10">
      {/* Soft Glow Background Accents */}
      <div className="absolute top-0 start-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 end-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">
              {t.stats.title}
            </h2>
            <p className="text-sm sm:text-base text-white/70">
              {t.stats.subtitle}
            </p>
          </div>
        </Reveal>

        {/* 8 Official Metric Cards Grid with Staggered Entrance */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <StatCounterCard
            targetNumber={20000}
            unit={t.stats.area.unit}
            label={t.stats.area.label}
            delayIndex={0}
          />

          <StatCounterCard
            targetNumber={1000}
            unit={t.stats.growOut.unit}
            label={t.stats.growOut.label}
            delayIndex={1}
          />

          <StatCounterCard
            targetNumber={40000000}
            unit={t.stats.hatchery.unit}
            label={t.stats.hatchery.label}
            delayIndex={2}
          />

          <StatCounterCard
            targetNumber={24000000}
            unit={t.stats.quarantine.unit}
            label={t.stats.quarantine.label}
            delayIndex={3}
          />

          <StatCounterCard
            targetNumber={150}
            unit={t.stats.tanks.unit}
            label={t.stats.tanks.label}
            delayIndex={4}
          />

          <StatCounterCard
            targetNumber={9000000}
            unit={t.stats.waterVolume.unit}
            label={t.stats.waterVolume.label}
            delayIndex={5}
          />

          <StatCounterCard
            targetNumber={7}
            unit={t.stats.stages.unit}
            label={t.stats.stages.label}
            formatWithCommas={false}
            delayIndex={6}
          />

          <StatCounterCard
            targetNumber={12}
            unit={t.stats.cycles.unit}
            label={t.stats.cycles.label}
            formatWithCommas={false}
            delayIndex={7}
          />
        </div>
      </div>
    </section>
  );
};
