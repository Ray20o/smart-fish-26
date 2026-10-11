import React from 'react';
import { TRANSLATIONS, type Language } from '@/src/i18n/translations.ts';
import { ASSETS } from '@/src/config/assets.ts';
import { Reveal, RevealGroup } from './motion/Reveal.tsx';
import { ParallaxImage } from './motion/ParallaxImage.tsx';

interface SalesDistributionProps {
  lang: Language;
}

export const SalesDistribution: React.FC<SalesDistributionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="sales" className="py-24 bg-[#003454] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
              {lang === 'ar' ? 'سلاسل الإمداد والتوريد' : 'Supply & Fulfillment'}
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {t.sales.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
              {t.sales.subtitle}
            </p>
          </div>
        </Reveal>

        {/* 4 Channels Cards */}
        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {t.sales.channels.map((ch, idx) => (
            <div
              key={ch.title}
              className="p-7 rounded-2xl bg-[#00273e]/70 border border-white/10 hover:border-sky-400/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-sky-400 block mb-3">
                  0{idx + 1}.
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  {ch.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  {ch.desc}
                </p>
              </div>

              {idx === 1 && (
                <div className="mt-6 pt-4 border-t border-white/10">
                  <a
                    href={ASSETS.links.onlineStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1.5"
                  >
                    <span>{lang === 'ar' ? 'زيارة المتجر الإلكتروني' : 'Visit Online Store'}</span>
                    <span className="rtl:rotate-180">→</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </RevealGroup>

        {/* 5. Sales & Distribution: Refrigerated Fleet Image Showcase with Parallax */}
        <Reveal delay={0.2}>
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-r from-[#00385c] via-[#002e4c] to-[#002238] grid grid-cols-1 lg:grid-cols-12 items-center shadow-2xl">
            <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold mb-3 w-fit border border-sky-400/25">
                <span>{lang === 'ar' ? 'سلسلة تبريد معتمدة' : 'Certified Cold Chain'}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {lang === 'ar' ? 'أسطول نقل وتوزيع مبرد ومجهز بأنظمة الأكسجين' : 'Temperature-Controlled Refrigerated Logistics Fleet'}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed mb-6">
                {lang === 'ar'
                  ? 'أسطول مركبات حديث مجهز بحاويات تبريد دقيقة ووحدات أكسجين نشط لنقل الأسماك الطازجة والحية يومياً إلى كافة أحياء الرياض ومحافظة الخرج ومدن المملكة ودول الخليج بأعلى معايير السلامة الغذائية.'
                  : 'Modern fleet equipped with precise chilling units and active liquid oxygen life-support systems, serving Riyadh, Al-Kharj, and broader KSA and GCC routes while maintaining peak farm-fresh quality.'}
              </p>

              <div>
                <a
                  href="#contact"
                  className="relative overflow-hidden group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs sm:text-sm font-semibold text-white border border-white/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                  <span>{lang === 'ar' ? 'طلب جدولة توريد مبرد' : 'Schedule Cold-Chain Delivery'}</span>
                  <span className="rtl:rotate-180">→</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 h-64 sm:h-80 lg:h-96 relative overflow-hidden">
              <ParallaxImage
                src={ASSETS.images.fleet.src}
                alt={lang === 'ar' ? ASSETS.images.fleet.altAr : ASSETS.images.fleet.altEn}
                aspectClassName="w-full h-full"
                overlayGradient={
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#003454]/80 via-transparent to-transparent pointer-events-none" />
                }
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
