/**
 * useScrollTransform Hook
 * 
 * Maps scroll progress to CSS property values, enabling scroll-linked animations.
 * This is the core hook for creating parallax effects, progress bars, and
 * scroll-triggered property changes.
 * 
 * Educational Note: This hook uses Framer Motion's useTransform() to map
 * one motion value (scroll progress) to another (CSS property). This mapping
 * happens on the GPU without triggering React re-renders, making it very performant.
 * 
 * Usage Examples:
 * ```tsx
 * // Parallax: background moves slower than foreground
 * const y = useScrollTransform([0, 1], [0, -100]);
 * 
 * // Scale: element grows as user scrolls
 * const scale = useScrollTransform([0, 1], [0.8, 1.2]);
 * 
 * // Opacity: element fades in as user scrolls
 * const opacity = useScrollTransform([0, 0.5, 1], [0, 0.5, 1]);
 * ```
 */

import { useScroll, useTransform, MotionValue } from "framer-motion";

/**
 * Maps scroll progress (0-1) to a numeric range
 * 
 * @param inputRange - [0, 1] or custom range for scroll progress
 * @param outputRange - Target values to map to (e.g., [0, 100] for pixels)
 * @returns MotionValue that updates based on scroll
 */
export function useScrollTransform(
  inputRange: number[],
  outputRange: number[]
): MotionValue<number> {
  const { scrollYProgress } = useScroll();
  return useTransform(scrollYProgress, inputRange, outputRange);
}

/**
 * Maps scroll progress to a string value (for CSS properties like colors)
 * 
 * @param inputRange - [0, 1] or custom range for scroll progress
 * @param outputRange - Target string values (e.g., ["#000", "#fff"])
 * @returns MotionValue that updates based on scroll
 * 
 * Usage:
 * ```tsx
 * const backgroundColor = useScrollTransformString(
 *   [0, 1],
 *   ["rgba(200, 135, 58, 0)", "rgba(200, 135, 58, 1)"]
 * );
 * ```
 */
export function useScrollTransformString(
  inputRange: number[],
  outputRange: string[]
): MotionValue<string> {
  const { scrollYProgress } = useScroll();
  return useTransform(scrollYProgress, inputRange, outputRange);
}

/**
 * Creates a parallax effect by mapping scroll to translateY
 * 
 * @param intensity - How much the element moves (0-1, where 0 = no movement)
 * @returns MotionValue for translateY
 * 
 * Educational Note: Parallax creates depth by moving background slower
 * than foreground. Typical intensity is 0.2-0.4 (20-40% of scroll distance).
 * 
 * Usage:
 * ```tsx
 * const y = useParallax(0.3);
 * 
 * return (
 *   <motion.div style={{ y }}>
 *     Background Image
 *   </motion.div>
 * );
 * ```
 */
export function useParallax(intensity: number = 0.3): MotionValue<number> {
  const { scrollYProgress } = useScroll();
  // Map scroll progress to a negative Y value (moves up as user scrolls down)
  return useTransform(scrollYProgress, [0, 1], [0, -100 * intensity]);
}

/**
 * Creates a reveal effect by mapping scroll to opacity
 * 
 * @param startProgress - When to start revealing (0-1)
 * @param endProgress - When to finish revealing (0-1)
 * @returns MotionValue for opacity
 * 
 * Usage:
 * ```tsx
 * const opacity = useScrollReveal(0.2, 0.6);
 * 
 * return (
 *   <motion.div style={{ opacity }}>
 *     Hidden Content
 *   </motion.div>
 * );
 * ```
 */
export function useScrollReveal(
  startProgress: number = 0,
  endProgress: number = 1
): MotionValue<number> {
  const { scrollYProgress } = useScroll();
  return useTransform(scrollYProgress, [startProgress, endProgress], [0, 1]);
}

/**
 * Creates a scale animation based on scroll position
 * 
 * @param minScale - Minimum scale value
 * @param maxScale - Maximum scale value
 * @returns MotionValue for scale
 * 
 * Usage:
 * ```tsx
 * const scale = useScrollScale(0.8, 1.2);
 * 
 * return (
 *   <motion.div style={{ scale }}>
 *     Scaling Content
 *   </motion.div>
 * );
 * ```
 */
export function useScrollScale(
  minScale: number = 0.8,
  maxScale: number = 1.2
): MotionValue<number> {
  const { scrollYProgress } = useScroll();
  return useTransform(scrollYProgress, [0, 1], [minScale, maxScale]);
}

/**
 * Creates a rotation animation based on scroll position
 * 
 * @param startRotation - Starting rotation in degrees
 * @param endRotation - Ending rotation in degrees
 * @returns MotionValue for rotate
 * 
 * Usage:
 * ```tsx
 * const rotate = useScrollRotate(0, 360);
 * 
 * return (
 *   <motion.div style={{ rotate }}>
 *     Rotating Content
 *   </motion.div>
 * );
 * ```
 */
export function useScrollRotate(
  startRotation: number = 0,
  endRotation: number = 360
): MotionValue<number> {
  const { scrollYProgress } = useScroll();
  return useTransform(scrollYProgress, [0, 1], [startRotation, endRotation]);
}

/**
 * Creates a blur effect based on scroll position
 * 
 * @param minBlur - Minimum blur value in pixels
 * @param maxBlur - Maximum blur value in pixels
 * @returns MotionValue for blur filter
 * 
 * Usage:
 * ```tsx
 * const blur = useScrollBlur(0, 10);
 * 
 * return (
 *   <motion.div style={{ filter: blur.get() ? `blur(${blur}px)` : "none" }}>
 *     Blurred Content
 *   </motion.div>
 * );
 * ```
 */
export function useScrollBlur(
  minBlur: number = 0,
  maxBlur: number = 10
): MotionValue<number> {
  const { scrollYProgress } = useScroll();
  return useTransform(scrollYProgress, [0, 1], [minBlur, maxBlur]);
}
