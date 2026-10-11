import React from 'react';
import { motion } from 'motion/react';
import { CINEMATIC_EASE, prefersReducedMotion } from './constants.ts';

interface WordRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
}

export const WordReveal: React.FC<WordRevealProps> = ({
  text,
  className = '',
  wordClassName = '',
  delay = 0.1,
  stagger = 0.06,
}) => {
  const isReduced = prefersReducedMotion();
  const words = text.split(/\s+/).filter(Boolean);

  if (isReduced) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={`inline-flex flex-wrap items-baseline gap-x-[0.28em] ${className}`}>
      {words.map((word, idx) => (
        <span key={`${word}-${idx}`} className="inline-block overflow-hidden py-[0.1em]">
          <motion.span
            initial={{
              y: '115%',
              opacity: 0,
              filter: 'blur(6px)',
            }}
            animate={{
              y: 0,
              opacity: 1,
              filter: 'blur(0px)',
            }}
            transition={{
              duration: 0.8,
              delay: delay + idx * stagger,
              ease: CINEMATIC_EASE,
            }}
            className={`inline-block ${wordClassName}`}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};
