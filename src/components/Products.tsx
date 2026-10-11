import React from 'react';
import { TRANSLATIONS, type Language } from '@/src/i18n/translations.ts';
import { ASSETS } from '@/src/config/assets.ts';
import { Reveal, RevealGroup } from './motion/Reveal.tsx';
import { TiltCard } from './motion/TiltCard.tsx';
import { ParallaxImage } from './motion/ParallaxImage.tsx';

interface ProductsProps {
  lang: Language;
}

export const Products: React.FC<ProductsProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  // Map each product category to its requested asset
  const productImages = [
    ASSETS.images.productFresh,
    ASSETS.images.productMarinated,
    ASSETS.images.productFingerlings,
  ];

  return (
    <section id="products" className="py-24 bg-[#002840] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
              {lang === 'ar' ? 'سلة منتجاتنا البحرية' : 'Commercial Offerings'}
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {t.products.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
              {t.products.subtitle}
            </p>
          </div>
        </Reveal>

        {/* 3 Main Product Showcase Cards with 3D Tilt Effect */}
        <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {t.products.categories.map((cat, idx) => {
            const imgAsset = productImages[idx];
            return (
              <TiltCard key={cat.id} className="h-full">
                <div className="h-full rounded-2xl sm:rounded-3xl bg-[#003454]/60 border border-white/10 hover:border-sky-400/40 transition-all duration-300 flex flex-col overflow-hidden group shadow-xl">
                  {/* Product Photo with Parallax & Subtle Navy Gradient Overlay */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#002238]">
                    <ParallaxImage
                      src={imgAsset.src}
                      alt={lang === 'ar' ? imgAsset.altAr : imgAsset.altEn}
                      aspectClassName="w-full h-full"
                      overlayGradient={
                        <>
                          <div className="absolute inset-0 bg-gradient-to-t from-[#003454] via-[#003454]/20 to-transparent pointer-events-none" />
                          <span className="absolute top-3 end-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#002238]/80 text-sky-300 border border-white/10 backdrop-blur-sm z-10">
                            0{idx + 1}
                          </span>
                        </>
                      }
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2.5">
                        {cat.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-6">
                        {cat.desc}
                      </p>
                    </div>

                    {/* Items Badges */}
                    <div className="pt-4 border-t border-white/10 space-y-2">
                      {cat.items.map((item, iIdx) => (
                        <div key={iIdx} className="flex items-center justify-between text-xs text-white/90">
                          <span className="font-medium">{item.name}</span>
                          <span className="text-[11px] px-2 py-0.5 rounded bg-white/10 text-sky-300">
                            {item.tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </RevealGroup>

        {/* Featured Online Store Direct Order Bar */}
        <Reveal delay={0.2}>
          <div className="rounded-2xl border border-sky-500/25 bg-gradient-to-r from-[#003454] via-[#002840] to-[#003454] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-sky-500/20 text-sky-400 shrink-0">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  {lang === 'ar' ? 'اطلب طازجاً من المتجر الإلكتروني' : 'Order Farm-Fresh From Our Online Store'}
                </h4>
                <p className="text-xs sm:text-sm text-white/75">
                  {t.products.storeNotice}
                </p>
              </div>
            </div>

            <a
              href={ASSETS.links.onlineStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-xl shadow-md shadow-sky-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap"
            >
              {/* Soft shine sweep */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
              <span>{t.products.storeBtn}</span>
              <span className="rtl:rotate-180">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
