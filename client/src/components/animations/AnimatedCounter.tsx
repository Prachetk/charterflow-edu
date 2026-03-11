/**
 * AnimatedCounter Component
 * 
 * Smoothly animates numeric values from one number to another.
 * Great for stat counters, progress indicators, and metrics.
 * 
 * Educational Note: This component uses Framer Motion's useMotionValue
 * and useTransform to create smooth number animations. The animation
 * happens on the GPU, making it very performant.
 * 
 * Usage:
 * ```tsx
 * <AnimatedCounter from={0} to={1000} duration={2} />
 * 
 * <AnimatedCounter
 *   from={0}
 *   to={95}
 *   duration={1.5}
 *   suffix="%"
 *   prefix="$"
 * />
 * ```
 */

import { motion, useMotionValue, useTransform, useAnimate } from "framer-motion";
import { useEffect, ReactNode } from "react";
import { duration as defaultDuration } from "@/lib/easing";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
  className?: string;
  format?: (value: number) => string;
  onComplete?: () => void;
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = defaultDuration.standard,
  decimals = 0,
  prefix = "",
  suffix = "",
  separator = ",",
  className = "",
  format,
  onComplete,
}: AnimatedCounterProps) {
  const motionValue = useMotionValue(from);

  const displayValue = useTransform(motionValue, (latest) => {
    if (format) {
      return format(latest);
    }

    const rounded = decimals > 0 ? latest.toFixed(decimals) : Math.round(latest);
    const parts = rounded.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);

    return `${prefix}${parts.join(".")}${suffix}`;
  });

  const [, animate] = useAnimate();

  useEffect(() => {
    animate(motionValue, to, {
      duration,
      ease: "easeOut",
    });
  }, [to, duration, motionValue, animate]);

  return (
    <motion.span className={className}>
      {displayValue}
    </motion.span>
  );
}

/**
 * AnimatedCounterOnScroll Component
 * 
 * Animates counter when it enters the viewport.
 * Useful for stat sections on landing pages.
 * 
 * Usage:
 * ```tsx
 * <AnimatedCounterOnScroll
 *   to={10000}
 *   suffix="+"
 *   duration={2}
 * />
 * ```
 */

interface AnimatedCounterOnScrollProps extends AnimatedCounterProps {
  triggerOnce?: boolean;
}

export function AnimatedCounterOnScroll({
  from = 0,
  to,
  duration = defaultDuration.standard,
  decimals = 0,
  prefix = "",
  suffix = "",
  separator = ",",
  className = "",
  format,
  triggerOnce = true,
  onComplete,
}: AnimatedCounterOnScrollProps) {
  const motionValue = useMotionValue(from);
  const [, animate] = useAnimate();

  const displayValue = useTransform(motionValue, (latest) => {
    if (format) {
      return format(latest);
    }

    const rounded = decimals > 0 ? latest.toFixed(decimals) : Math.round(latest);
    const parts = rounded.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);

    return `${prefix}${parts.join(".")}${suffix}`;
  });

  const handleViewportEnter = () => {
    animate(motionValue, to, {
      duration,
      ease: "easeOut",
    });
  };

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 0.3 },
      }}
      onViewportEnter={handleViewportEnter}
      viewport={{ once: triggerOnce, amount: 0.5 }}
    >
      {displayValue}
    </motion.span>
  );
}

/**
 * StatCard Component
 * 
 * Card displaying a stat with animated counter.
 * Perfect for landing page statistics.
 * 
 * Usage:
 * ```tsx
 * <StatCard
 *   label="Students"
 *   value={5000}
 *   suffix="+"
 * />
 * ```
 */

interface StatCardProps {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  icon?: ReactNode;
  description?: string;
  className?: string;
}

export function StatCard({
  label,
  value,
  prefix = "",
  suffix = "",
  icon,
  description,
  className = "",
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
      className={`p-6 rounded-lg bg-white border border-gray-200 ${className}`}
    >
      {icon && <div className="mb-4 text-2xl">{icon}</div>}
      <div className="text-3xl font-bold text-amber-600 mb-2">
        <AnimatedCounterOnScroll
          to={value}
          prefix={prefix}
          suffix={suffix}
          duration={2}
          triggerOnce={true}
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{label}</h3>
      {description && <p className="text-sm text-gray-600">{description}</p>}
    </motion.div>
  );
}
