import React from 'react';
import { motion } from 'motion/react';
import { Logo } from './Logo.tsx';
import { TRANSLATIONS, type Language } from '@/src/i18n/translations.ts';
import { ASSETS } from '@/src/config/assets.ts';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <footer className="bg-[#001e30] border-t border-white/10 text-white/80 pt-16 pb-12 relative overflow-hidden">
      {/* Ambient Animated Water-Wave Motif in Footer Background */}
      <div className="absolute inset-0 pointer-events-none opacity-15 overflow-hidden">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 400"
          fill="none"
        >
          <motion.path
            d="M-50 200 C 350 120, 750 280, 1500 180"
            stroke="#38bdf8"
            strokeWidth="1.2"
            strokeDasharray="6 6"
            animate={{ strokeDashoffset: [0, -80] }}
            transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Overview (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="inline-block">
              <Logo className="h-12 w-auto" />
            </a>
            <p className="text-xs sm:text-sm text-sky-400 font-semibold tracking-wide">
              {t.footer.tagline}
            </p>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-sm">
              {t.footer.aboutSummary}
            </p>
            <div className="pt-2 text-xs text-white/60">
              <p>{t.contact.locationDesc}</p>
              <p className="font-mono mt-0.5">{ASSETS.contact.email}</p>
            </div>
          </div>

          {/* Quick Nav Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-sky-300 transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#technology" className="hover:text-sky-300 transition-colors">
                  {t.nav.technology}
                </a>
              </li>
              <li>
                <a href="#divisions" className="hover:text-sky-300 transition-colors">
                  {t.nav.divisions}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-sky-300 transition-colors">
                  {t.nav.products}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-300 transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#quality" className="hover:text-sky-300 transition-colors">
                  {t.nav.quality}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-300 transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Store & Direct Actions (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {lang === 'ar' ? 'المتجر والتوريد السريع' : 'Store & Quick Supply'}
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              {lang === 'ar'
                ? 'اطلب أسماك طازجة كاملة ومتبلة ومجهزة تصلك مباشرة من مزارعنا بالخرج لباب بيتك.'
                : 'Order fresh, marinated, or prepared seafood delivered directly from our Al-Kharj facility.'}
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href={ASSETS.links.onlineStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden group inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-all shadow-md active:scale-95"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                <span>{t.nav.storeBtn}</span>
                <span className="rtl:rotate-180">→</span>
              </a>
              <a
                href={ASSETS.links.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-emerald-600/80 hover:bg-emerald-600 text-white text-xs font-medium transition-colors"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
                <span>{lang === 'ar' ? 'محادثة واتساب سريعة' : 'Chat on WhatsApp'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Made in Saudi */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>{t.footer.legalNotice}</p>
          <div className="flex items-center gap-4">
            <span className="text-white/80 font-medium">{t.footer.madeInSaudi}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
