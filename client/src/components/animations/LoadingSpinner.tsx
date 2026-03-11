/**
 * LoadingSpinner Component
 * 
 * Elegant loading indicator with smooth rotation animation.
 * Uses GPU-accelerated transform for optimal performance.
 * 
 * Usage:
 * ```tsx
 * <LoadingSpinner />
 * 
 * <LoadingSpinner size="lg" color="amber" />
 * ```
 */

import { motion } from "framer-motion";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: "amber" | "blue" | "gray";
  className?: string;
}

const sizeMap = {
  sm: "w-4 h-4",
  md: "w-8 h-8",
  lg: "w-12 h-12",
};

const colorMap = {
  amber: "border-amber-600",
  blue: "border-blue-600",
  gray: "border-gray-600",
};

export function LoadingSpinner({
  size = "md",
  color = "amber",
  className = "",
}: LoadingSpinnerProps) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      }}
      className={`
        ${sizeMap[size]}
        ${className}
        border-2 border-transparent rounded-full
        ${colorMap[color]}
        border-t-current
      `}
    />
  );
}

/**
 * SkeletonLoader Component
 * 
 * Animated skeleton placeholder for loading states.
 * Great for content that's being fetched.
 * 
 * Usage:
 * ```tsx
 * <SkeletonLoader width="w-full" height="h-4" />
 * ```
 */

interface SkeletonLoaderProps {
  width?: string;
  height?: string;
  className?: string;
  count?: number;
}

export function SkeletonLoader({
  width = "w-full",
  height = "h-4",
  className = "",
  count = 1,
}: SkeletonLoaderProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`${width} ${height} bg-gray-200 rounded`}
        />
      ))}
    </div>
  );
}

/**
 * PulseLoader Component
 * 
 * Pulsing dot animation for loading states.
 * More subtle than spinner.
 * 
 * Usage:
 * ```tsx
 * <PulseLoader />
 * ```
 */

export function PulseLoader() {
  return (
    <div className="flex gap-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          className="w-2 h-2 bg-amber-600 rounded-full"
        />
      ))}
    </div>
  );
}

/**
 * ProgressBar Component
 * 
 * Animated progress bar for loading states.
 * 
 * Usage:
 * ```tsx
 * <ProgressBar progress={65} />
 * ```
 */

interface ProgressBarProps {
  progress: number;
  height?: string;
  color?: "amber" | "blue" | "green";
  animated?: boolean;
  className?: string;
}

const progressColorMap = {
  amber: "bg-amber-600",
  blue: "bg-blue-600",
  green: "bg-green-600",
};

export function ProgressBar({
  progress,
  height = "h-1",
  color = "amber",
  animated = true,
  className = "",
}: ProgressBarProps) {
  return (
    <div className={`w-full ${height} bg-gray-200 rounded-full overflow-hidden ${className}`}>
      <motion.div
        animate={{ width: `${progress}%` }}
        transition={{
          duration: animated ? 0.5 : 0,
          ease: "easeOut",
        }}
        className={`${height} ${progressColorMap[color]} rounded-full`}
      />
    </div>
  );
}

/**
 * LoadingOverlay Component
 * 
 * Full-screen or container loading overlay.
 * 
 * Usage:
 * ```tsx
 * <LoadingOverlay isLoading={isLoading} />
 * ```
 */

interface LoadingOverlayProps {
  isLoading: boolean;
  message?: string;
  fullScreen?: boolean;
  className?: string;
}

export function LoadingOverlay({
  isLoading,
  message = "Loading...",
  fullScreen = false,
  className = "",
}: LoadingOverlayProps) {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`
        flex items-center justify-center gap-4
        ${fullScreen ? "fixed inset-0 bg-black/50 z-50" : "absolute inset-0 bg-white/50"}
        ${className}
      `}
    >
      <LoadingSpinner size="lg" />
      {message && <span className="text-sm font-medium">{message}</span>}
    </motion.div>
  );
}
