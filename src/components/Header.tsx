import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Logo } from './Logo.tsx';
import { TRANSLATIONS, type Language } from '@/src/i18n/translations.ts';
import { ASSETS } from '@/src/config/assets.ts';
import { useScrollDirection } from '@/src/hooks/useScrollDirection.ts';
import { useActiveSection } from '@/src/hooks/useActiveSection.ts';
import { CINEMATIC_EASE } from './motion/constants.ts';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, onLanguageChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  const { scrollDirection, scrollY } = useScrollDirection();
  const isScrolled = scrollY > 20;
  const isHidden = scrollDirection === 'down' && scrollY > 180 && !mobileMenuOpen;

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const sectionIds = [
    'about',
    'technology',
    'divisions',
    'products',
    'services',
    'quality',
    'partners',
    'contact',
  ];
  const activeSection = useActiveSection(sectionIds);

  const navLinks = [
    { href: '#about', id: 'about', label: t.nav.about },
    { href: '#technology', id: 'technology', label: t.nav.technology },
    { href: '#divisions', id: 'divisions', label: t.nav.divisions },
    { href: '#products', id: 'products', label: t.nav.products },
    { href: '#services', id: 'services', label: t.nav.services },
    { href: '#quality', id: 'quality', label: t.nav.quality },
    { href: '#partners', id: 'partners', label: t.nav.partners },
    { href: '#contact', id: 'contact', label: t.nav.contact },
  ];

  return (
    <>
      {/* Top Page Scroll Progress Line */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 start-0 end-0 h-[2.5px] bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500 origin-left rtl:origin-right z-[60] pointer-events-none"
      />

      <header
        className={`fixed top-0 start-0 end-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isHidden ? '-translate-y-full' : 'translate-y-0'
        } ${
          isScrolled
            ? 'bg-[#002238]/90 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/10 py-3'
            : 'bg-gradient-to-b from-[#002238]/90 via-[#003454]/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            {/* Zone 1: Brand Wordmark / Logo */}
            <a
              href="#"
              className="flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md"
              aria-label="Smart Fish Company Home"
            >
              <Logo className="h-10 sm:h-12 w-auto" />
            </a>

            {/* Zone 2: Navigation Links (Desktop with Active Section Highlight) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-white/85">
              {navLinks.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 ${
                      isActive ? 'text-white font-semibold' : 'hover:text-white text-white/75'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeNavLine"
                        transition={{ duration: 0.35, ease: CINEMATIC_EASE }}
                        className="absolute bottom-0 start-0 end-0 h-[2px] bg-sky-400 rounded-full"
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: Language Switcher & Primary Action */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Language Switcher Button with Cross-Fade Indication */}
              <button
                onClick={() => onLanguageChange(lang === 'ar' ? 'en' : 'ar')}
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 active:scale-95"
                aria-label={lang === 'ar' ? 'Switch to English' : 'التحويل إلى اللغة العربية'}
                title={lang === 'ar' ? 'Switch to English' : 'التحويل إلى اللغة العربية'}
              >
                <svg
                  className="w-3.5 h-3.5 opacity-80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
              </button>

              {/* Store Link / Primary CTA with Shine Effect */}
              <a
                href={ASSETS.links.onlineStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden group hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-all shadow-sm hover:shadow-sky-500/25 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 active:scale-95"
              >
                {/* Soft shine sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span>{t.nav.storeBtn}</span>
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                className="lg:hidden p-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 12h16M4 6h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#002238] border-b border-white/10 px-4 pt-3 pb-6 shadow-2xl transition-all">
            <div className="flex flex-col gap-1">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-base font-medium text-white/90 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
                <a
                  href={ASSETS.links.onlineStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg text-center"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                    <path d="M3 6h18" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                  <span>{t.nav.storeBtn}</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white/90 bg-white/10 hover:bg-white/15 rounded-lg text-center"
                >
                  {t.nav.contact}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
