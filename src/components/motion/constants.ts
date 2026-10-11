/**
 * SHARED MOTION & ANIMATION CONSTANTS
 * 
 * Consistent easing and durations matching Apple-like cinematic feel.
 */

export const CINEMATIC_EASE = [0.22, 1, 0.36, 1] as const;

export const DURATIONS = {
  fast: 0.35,
  standard: 0.7,
  slow: 0.95,
  cinematic: 1.2,
};

export const TRANSITION_CONFIG = {
  duration: DURATIONS.standard,
  ease: CINEMATIC_EASE,
};

// Check if device is touch or small screen
export const isTouchDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 1024;
};

// Check prefers-reduced-motion
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};
