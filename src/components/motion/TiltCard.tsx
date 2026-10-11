import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { isTouchDevice, prefersReducedMotion } from './constants.ts';

interface TiltCardProps {
  children: React.ReactNode;
  maxTilt?: number;
  className?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  maxTilt = 7,
  className = '',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotations, setRotations] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice() || prefersReducedMotion()) return;
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setRotations({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotations({ rotateX: 0, rotateY: 0 });
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice() && !prefersReducedMotion()) {
      setIsHovered(true);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotations.rotateX,
        rotateY: rotations.rotateY,
        transformPerspective: 1000,
      }}
      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
      style={{ transformStyle: 'preserve-3d' }}
      className={`relative ${className}`}
    >
      {children}
      {/* Subtle shine sweep layer */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-20 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at 50% 0%, rgba(255,255,255,0.3) 0%, transparent 70%)`,
          }}
        />
      )}
    </motion.div>
  );
};
