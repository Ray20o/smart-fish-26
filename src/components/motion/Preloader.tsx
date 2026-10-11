import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ASSETS } from '@/src/config/assets.ts';
import { CINEMATIC_EASE } from './constants.ts';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Dismiss automatically under 1.4 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 1300);

    // Allow user to skip with click or Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsVisible(false);
        onComplete?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          onClick={() => {
            setIsVisible(false);
            onComplete?.();
          }}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0.5, ease: CINEMATIC_EASE },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#002238] select-none cursor-pointer"
          title="Click to skip"
        >
          {/* Subtle Ambient Radial Backlight */}
          <div className="absolute w-[450px] h-[450px] bg-sky-500/15 rounded-full blur-[90px] pointer-events-none" />

          {/* Logo Mark Scale & Fade */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: CINEMATIC_EASE }}
            className="relative z-10 flex flex-col items-center"
          >
            <img
              src={ASSETS.logo.whiteSvg}
              alt={ASSETS.logo.alt}
              className="h-16 sm:h-20 w-auto object-contain drop-shadow-2xl"
            />

            {/* Subtle Line Shimmer Bar */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7, ease: CINEMATIC_EASE }}
              className="mt-6 w-32 h-[1.5px] bg-gradient-to-r from-transparent via-sky-400 to-transparent origin-center"
            />
          </motion.div>

          <span className="absolute bottom-6 text-[11px] text-white/40 tracking-wider font-mono">
            CLICK TO SKIP
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
