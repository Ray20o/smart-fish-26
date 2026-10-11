import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { CINEMATIC_EASE, prefersReducedMotion, isTouchDevice } from './constants.ts';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectClassName?: string;
  overlayGradient?: React.ReactNode;
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className = '',
  aspectClassName = 'aspect-[16/9]',
  overlayGradient,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isReduced = prefersReducedMotion();
  const isTouch = isTouchDevice();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax translation inside frame (-5% to +5%)
  const yParallax = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  if (isReduced) {
    return (
      <div className={`relative overflow-hidden rounded-2xl ${aspectClassName} ${className}`}>
        <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
        {overlayGradient}
      </div>
    );
  }

  return (
    <motion.div
      ref={containerRef}
      initial={{
        clipPath: 'inset(10% 0% 10% 0% round 1.5rem)',
        opacity: 0,
        filter: 'blur(10px)',
      }}
      whileInView={{
        clipPath: 'inset(0% 0% 0% 0% round 1.5rem)',
        opacity: 1,
        filter: 'blur(0px)',
      }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1.1, ease: CINEMATIC_EASE }}
      className={`relative overflow-hidden group select-none ${aspectClassName} ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        referrerPolicy="no-referrer"
        style={{ y: isTouch ? '0%' : yParallax }}
        className="w-full h-[115%] -mt-[7%] object-cover object-center group-hover:scale-[1.04] transition-transform duration-1000 ease-out"
      />
      {overlayGradient}
    </motion.div>
  );
};
