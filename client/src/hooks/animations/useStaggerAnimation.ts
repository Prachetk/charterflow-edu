/**
 * useStaggerAnimation Hook
 * 
 * Manages staggered animations for groups of elements.
 * Staggering creates visual rhythm by animating elements with offset timing.
 * 
 * Educational Note: Staggering is a powerful technique that guides the viewer's
 * eye through content in a deliberate sequence. It makes animations feel more
 * intentional and less robotic.
 * 
 * Usage:
 * ```tsx
 * const containerVariants = useStaggerAnimation(0.1, 0.05);
 * 
 * return (
 *   <motion.div variants={containerVariants} initial="hidden" animate="visible">
 *     <motion.div variants={itemVariants}>Item 1</motion.div>
 *     <motion.div variants={itemVariants}>Item 2</motion.div>
 *     <motion.div variants={itemVariants}>Item 3</motion.div>
 *   </motion.div>
 * );
 * ```
 */

import { Variants } from "framer-motion";
import { easing, duration, delay } from "@/lib/easing";

/**
 * Creates stagger animation variants for container and child elements
 * 
 * @param staggerDelay - Delay between each child animation (e.g., 0.1)
 * @param initialDelay - Delay before first child animates (e.g., 0.05)
 * @returns Object with containerVariants and itemVariants
 */
export function useStaggerAnimation(
  staggerDelay: number = delay.standard,
  initialDelay: number = 0.05
) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration.standard,
        ease: easing.entrance,
      },
    },
  };

  return { containerVariants, itemVariants };
}

/**
 * Creates stagger animation with custom entry animation
 * 
 * @param entryAnimation - Animation type: "slideUp", "slideDown", "scale", "fade"
 * @param staggerDelay - Delay between each child animation
 * @param initialDelay - Delay before first child animates
 * @returns Object with containerVariants and itemVariants
 * 
 * Usage:
 * ```tsx
 * const { containerVariants, itemVariants } = useStaggerAnimation(
 *   "scale",
 *   0.1,
 *   0.05
 * );
 * ```
 */
export function useStaggerAnimationCustom(
  entryAnimation: "slideUp" | "slideDown" | "scale" | "fade" | "rotate",
  staggerDelay: number = delay.standard,
  initialDelay: number = 0.05
) {
  const animationMap = {
    slideUp: { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } },
    slideDown: { hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } },
    scale: { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } },
    fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    rotate: { hidden: { opacity: 0, rotate: -10 }, visible: { opacity: 1, rotate: 0 } },
  };

  const animation = animationMap[entryAnimation];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: animation.hidden,
    visible: {
      ...animation.visible,
      transition: {
        duration: duration.standard,
        ease: easing.entrance,
      },
    },
  };

  return { containerVariants, itemVariants };
}

/**
 * Creates a stagger animation with different durations for each child
 * Useful for creating more complex, choreographed sequences
 * 
 * @param itemCount - Number of items to animate
 * @param staggerDelay - Delay between each child animation
 * @param initialDelay - Delay before first child animates
 * @returns Function to get variants for a specific item index
 * 
 * Usage:
 * ```tsx
 * const getItemVariants = useStaggerAnimationByIndex(5, 0.1, 0.05);
 * 
 * return (
 *   <motion.div>
 *     {items.map((item, index) => (
 *       <motion.div
 *         key={index}
 *         variants={getItemVariants(index)}
 *         initial="hidden"
 *         animate="visible"
 *       >
 *         {item}
 *       </motion.div>
 *     ))}
 *   </motion.div>
 * );
 * ```
 */
export function useStaggerAnimationByIndex(
  itemCount: number,
  staggerDelay: number = delay.standard,
  initialDelay: number = 0.05
) {
  return (index: number): Variants => {
    const calculatedDelay = initialDelay + index * staggerDelay;

    return {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: duration.standard,
          ease: easing.entrance,
          delay: calculatedDelay,
        },
      },
    };
  };
}

/**
 * Creates a wave-like stagger animation
 * Useful for creating flowing, organic animations
 * 
 * @param staggerDelay - Delay between each child animation
 * @param initialDelay - Delay before first child animates
 * @returns Object with containerVariants and itemVariants
 * 
 * Educational Note: Wave animations create a sense of flow and energy.
 * They're great for hero sections, feature lists, and product showcases.
 */
export function useWaveAnimation(
  staggerDelay: number = delay.standard,
  initialDelay: number = 0.05
) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, rotate: -5 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: duration.standard,
        ease: easing.entrance,
      },
    },
  };

  return { containerVariants, itemVariants };
}

/**
 * Creates a cascade animation (each item animates before the previous finishes)
 * Useful for creating energetic, dynamic sequences
 * 
 * @param staggerDelay - Delay between each child animation
 * @param initialDelay - Delay before first child animates
 * @returns Object with containerVariants and itemVariants
 */
export function useCascadeAnimation(
  staggerDelay: number = 0.05,
  initialDelay: number = 0
) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: duration.quick,
        ease: easing.elastic,
      },
    },
  };

  return { containerVariants, itemVariants };
}
