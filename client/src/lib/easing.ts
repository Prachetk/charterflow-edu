/**
 * Animation Easing Presets for CharterFlow Edu
 * 
 * These easing functions are based on Apple's animation philosophy:
 * - smooth: For general transitions and state changes
 * - entrance: For elements entering the viewport (bouncy, engaging)
 * - exit: For elements leaving the viewport (quick, decisive)
 * - gentle: For subtle, non-distracting animations
 * 
 * Each easing is defined as a cubic-bezier curve: [x1, y1, x2, y2]
 * 
 * Educational Note: Easing functions control how fast an animation progresses.
 * A linear easing (0, 0, 1, 1) moves at constant speed.
 * Our custom easings create natural, physics-based motion.
 */

export const easing = {
  // General transitions - smooth and natural
  smooth: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
  
  // Entrance animations - slightly bouncy, engaging
  entrance: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
  
  // Exit animations - quick and decisive
  exit: [0.7, 0, 0.84, 0] as [number, number, number, number],
  
  // Subtle animations - very gentle, non-distracting
  gentle: [0.42, 0, 0.58, 1] as [number, number, number, number],
  
  // Elastic animations - playful, bouncy
  elastic: [0.175, 0.885, 0.32, 1.275] as [number, number, number, number],
  
  // Sharp animations - quick, snappy response
  sharp: [0.4, 0, 0.2, 1] as [number, number, number, number],
};

/**
 * Duration presets for different animation types
 * These are measured in seconds
 */
export const duration = {
  // Micro-interactions: button hover, focus states
  micro: 0.2,
  
  // Quick transitions: state changes, filters
  quick: 0.3,
  
  // Standard animations: entrance, exit, transitions
  standard: 0.5,
  
  // Slow animations: parallax, scroll-linked effects
  slow: 0.8,
  
  // Extended animations: complex sequences, storytelling
  extended: 1.2,
};

/**
 * Delay presets for staggered animations
 * These are measured in seconds
 */
export const delay = {
  // No delay
  none: 0,
  
  // Minimal stagger for rapid sequences
  minimal: 0.05,
  
  // Standard stagger for most sequences
  standard: 0.1,
  
  // Generous stagger for emphasis
  generous: 0.15,
};

/**
 * Transition presets combining easing, duration, and delay
 * Use these for consistent animation behavior across the app
 */
export const transitions = {
  // Smooth entrance animation
  smoothEntrance: {
    duration: duration.standard,
    ease: easing.entrance,
  },
  
  // Smooth exit animation
  smoothExit: {
    duration: duration.quick,
    ease: easing.exit,
  },
  
  // Micro-interaction (button hover, etc.)
  microInteraction: {
    duration: duration.micro,
    ease: easing.sharp,
  },
  
  // Scroll-linked animation (no duration, continuous)
  scrollLinked: {
    ease: easing.smooth,
  },
  
  // Staggered children animation
  staggerChildren: (delayAmount: number = delay.standard) => ({
    staggerChildren: delayAmount,
    delayChildren: 0.1,
  }),
};

/**
 * Variant presets for common animation patterns
 * These are Framer Motion variants that can be reused across components
 */
export const variants = {
  // Fade in/out
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  
  // Slide up entrance
  slideUpIn: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  
  // Slide down entrance
  slideDownIn: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
  
  // Scale entrance
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  
  // Rotate entrance
  rotateIn: {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 1, rotate: 0 },
  },
  
  // Container for staggered children
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: transitions.staggerChildren(delay.standard),
    },
  },
};

/**
 * Helper function to create custom easing
 * Useful for one-off animations that don't fit standard presets
 * 
 * @param x1 - First control point X
 * @param y1 - First control point Y
 * @param x2 - Second control point X
 * @param y2 - Second control point Y
 * @returns Cubic-bezier easing array
 */
export function customEasing(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): [number, number, number, number] {
  return [x1, y1, x2, y2];
}

/**
 * Helper function to create staggered delays
 * Useful for calculating delays in staggered sequences
 * 
 * @param index - Index of the element in the sequence
 * @param delayAmount - Base delay amount (use delay.standard, etc.)
 * @returns Calculated delay in seconds
 */
export function getStaggerDelay(index: number, delayAmount: number = delay.standard): number {
  return index * delayAmount;
}
