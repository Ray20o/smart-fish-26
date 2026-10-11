import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { type Language } from '@/src/i18n/translations.ts';
import { Header } from '@/src/components/Header.tsx';
import { Hero } from '@/src/components/Hero.tsx';
import { StatsCounter } from '@/src/components/StatsCounter.tsx';
import { About } from '@/src/components/About.tsx';
import { TechnologyRAS } from '@/src/components/TechnologyRAS.tsx';
import { Divisions } from '@/src/components/Divisions.tsx';
import { Products } from '@/src/components/Products.tsx';
import { Services } from '@/src/components/Services.tsx';
import { QualityCertifications } from '@/src/components/QualityCertifications.tsx';
import { RAndD } from '@/src/components/RAndD.tsx';
import { PartnersTraining } from '@/src/components/PartnersTraining.tsx';
import { SalesDistribution } from '@/src/components/SalesDistribution.tsx';
import { Achievements } from '@/src/components/Achievements.tsx';
import { Team } from '@/src/components/Team.tsx';
import { Contact } from '@/src/components/Contact.tsx';
import { Footer } from '@/src/components/Footer.tsx';
import { FloatingActions } from '@/src/components/FloatingActions.tsx';
import { Preloader } from '@/src/components/motion/Preloader.tsx';
import { useLenis } from '@/src/hooks/useLenis.ts';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');

  // Initialize Lenis smooth inertial scrolling
  useLenis();

  useEffect(() => {
    // Synchronize HTML dir and lang attributes
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.title =
      lang === 'ar'
        ? 'شركة الأسماك الذكية | Smart Fish Company - الريادة من قلب الصحراء'
        : 'Smart Fish Company | Leadership from the heart of the desert';
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#003454] text-white selection:bg-[#004e7c] selection:text-white flex flex-col font-sans overflow-x-hidden">
      {/* 1. Elegant Skippable Preloader (<1.4s) */}
      <Preloader />

      {/* 2. Sticky Transparent-to-Solid Header with Language Switcher */}
      <Header lang={lang} onLanguageChange={setLang} />

      {/* Main Content with Language Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={lang}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-1 flex flex-col"
        >
          <main className="flex-1">
            {/* 3. Full-Screen Hero with Word-by-Word Reveal */}
            <Hero lang={lang} />

            {/* 4. Animated Key Numbers / Stats Counter */}
            <StatsCounter lang={lang} />

            {/* 5. About Us with Self-Drawing Timeline and Facility Parallax */}
            <About lang={lang} />

            {/* 6. Capabilities & RAS Technology with Animated Water-Flow Pipeline */}
            <TechnologyRAS lang={lang} />

            {/* 7. Production Divisions (Desktop Pinned Horizontal Journey Track) */}
            <Divisions lang={lang} />

            {/* 8. Products with 3D Tilt Effect and Dedicated Image Slots */}
            <Products lang={lang} />

            {/* 9. Specialized Services */}
            <Services lang={lang} />

            {/* 10. Quality & Biosecurity (SAMAK, ISO 9001, Made in Saudi, MEWA Audits) */}
            <QualityCertifications lang={lang} />

            {/* 11. Research & Development (Strain Improvement Mini-Center) */}
            <RAndD lang={lang} />

            {/* 12. Strategic Partners & Training (Universities & Afran Al-Hatab) */}
            <PartnersTraining lang={lang} />

            {/* 13. Sales & Distribution Channels with Fleet Parallax */}
            <SalesDistribution lang={lang} />

            {/* 14. Achievements & Community Initiatives */}
            <Achievements lang={lang} />

            {/* 15. Our Team & Technical Consultants */}
            <Team lang={lang} />

            {/* 16. Contact Section with Validated Interactive Form */}
            <Contact lang={lang} />
          </main>

          {/* Footer with Ambient Motion Wave */}
          <Footer lang={lang} />
        </motion.div>
      </AnimatePresence>

      {/* Floating Actions: WhatsApp & Back to Top */}
      <FloatingActions />
    </div>
  );
}
