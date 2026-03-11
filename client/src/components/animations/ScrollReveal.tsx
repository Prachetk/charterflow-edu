/**
 * ScrollReveal Component
 * 
 * Reveals content as it enters the viewport.
 * This is one of the most common Apple-style animations.
 * 
 * Educational Note: This component uses Framer Motion's whileInView prop,
 * which triggers animations when an element becomes visible in the viewport.
 * This is much more efficient than scroll listeners because it uses the
 * Intersection Observer API under the hood.
 * 
 * Usage:
 * ```tsx
 * <ScrollReveal>
 *   <h2>This text will fade in as it enters the viewport</h2>
 * </ScrollReveal>
 * 
 * <ScrollReveal animation="slideUp" delay={0.2}>
 *   <p>Custom animation with delay</p>
 * </ScrollReveal>
 * ```
 */

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { easing, duration } from "@/lib/easing";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: "fadeIn" | "slideUp" | "slideDown" | "scale" | "rotate";
  delay?: number;
  duration?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  animation = "slideUp",
  delay = 0,
  duration: animationDuration = duration.standard,
  className,
}: ScrollRevealProps) {
  const animationVariants: Record<string, Variants> = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    slideDown: {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 },
    },
    rotate: {
      hidden: { opacity: 0, rotate: -10 },
      visible: { opacity: 1, rotate: 0 },
    },
  };

  const variants = animationVariants[animation];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={variants}
      transition={{
        duration: animationDuration,
        ease: easing.entrance,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * ScrollRevealGroup Component
 * 
 * Reveals multiple children with staggered timing.
 * Perfect for lists, grids, and feature sections.
 * 
 * Usage:
 * ```tsx
 * <ScrollRevealGroup staggerDelay={0.1}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </ScrollRevealGroup>
 * ```
 */

interface ScrollRevealGroupProps {
  children: ReactNode;
  animation?: "fadeIn" | "slideUp" | "slideDown" | "scale" | "rotate";
  staggerDelay?: number;
  className?: string;
}

export function ScrollRevealGroup({
  children,
  animation = "slideUp",
  staggerDelay = 0.1,
  className,
}: ScrollRevealGroupProps) {
  const animationVariants: Record<string, Variants> = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    slideDown: {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 },
    },
    rotate: {
      hidden: { opacity: 0, rotate: -10 },
      visible: { opacity: 1, rotate: 0 },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = animationVariants[animation];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
