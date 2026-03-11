/**
 * useScrollProgress Hook
 * 
 * Tracks the user's scroll position and returns a normalized value (0-1)
 * representing how far down the page they've scrolled.
 * 
 * Educational Note: This hook uses Framer Motion's useScroll() to track
 * scroll position efficiently without causing re-renders. The returned
 * scrollYProgress is a MotionValue, which updates the DOM directly.
 * 
 * Usage:
 * ```tsx
 * const scrollProgress = useScrollProgress();
 * 
 * return (
 *   <motion.div
 *     style={{ scaleX: scrollProgress }}
 *   >
 *     Progress Bar
 *   </motion.div>
 * );
 * ```
 */

import { useScroll } from "framer-motion";
import { MotionValue } from "framer-motion";

export function useScrollProgress(): MotionValue<number> {
  const { scrollYProgress } = useScroll();
  return scrollYProgress;
}

/**
 * useScrollY Hook
 * 
 * Returns the absolute scroll position in pixels.
 * Useful for triggering animations at specific scroll points.
 * 
 * Usage:
 * ```tsx
 * const scrollY = useScrollY();
 * 
 * useMotionValueEvent(scrollY, "change", (latest) => {
 *   console.log("Scrolled to:", latest, "pixels");
 * });
 * ```
 */
export function useScrollY(): MotionValue<number> {
  const { scrollY } = useScroll();
  return scrollY;
}

/**
 * useScrollDirection Hook
 * 
 * Determines whether the user is scrolling up or down.
 * Returns "up" or "down".
 * 
 * Useful for:
 * - Hiding/showing header on scroll direction
 * - Triggering different animations based on direction
 * - Analytics and user behavior tracking
 * 
 * Educational Note: This hook tracks the previous scroll value and
 * compares it to the current value to determine direction.
 * 
 * Usage:
 * ```tsx
 * const direction = useScrollDirection();
 * 
 * return (
 *   <motion.header
 *     animate={{ y: direction === "down" ? -100 : 0 }}
 *   >
 *     Header
 *   </motion.header>
 * );
 * ```
 */
import { useState } from "react";
import { useMotionValueEvent } from "framer-motion";

export function useScrollDirection(): "up" | "down" {
  const { scrollY } = useScroll();
  const [direction, setDirection] = useState<"up" | "down">("down");

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() || 0;
    const diff = current - previous;
    setDirection(diff > 0 ? "down" : "up");
  });

  return direction;
}
