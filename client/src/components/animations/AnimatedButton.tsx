/**
 * AnimatedButton Component
 * 
 * Button with built-in hover and tap animations.
 * Provides visual feedback for user interactions.
 * 
 * Educational Note: Micro-interactions like button animations make the UI
 * feel responsive and polished. A button that scales on hover feels more
 * interactive than a static button.
 * 
 * Usage:
 * ```tsx
 * <AnimatedButton onClick={handleClick}>
 *   Click Me
 * </AnimatedButton>
 * 
 * <AnimatedButton variant="secondary" size="lg">
 *   Large Secondary Button
 * </AnimatedButton>
 * ```
 */

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { duration } from "@/lib/easing";

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const variantStyles = {
  primary:
    "bg-amber-600 text-white hover:bg-amber-700 active:bg-amber-800 disabled:bg-gray-400",
  secondary:
    "bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400 disabled:bg-gray-100",
  outline:
    "border-2 border-amber-600 text-amber-600 hover:bg-amber-50 active:bg-amber-100 disabled:border-gray-400 disabled:text-gray-400",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export function AnimatedButton({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  type = "button",
}: AnimatedButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      transition={{ duration: duration.micro }}
      className={`
        rounded-lg font-medium transition-colors
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}

/**
 * AnimatedIconButton Component
 * 
 * Button with icon and optional label.
 * Great for action buttons, close buttons, etc.
 */

interface AnimatedIconButtonProps {
  icon: ReactNode;
  label?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
  iconAnimation?: "rotate" | "bounce" | "pulse";
}

export function AnimatedIconButton({
  icon,
  label,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  iconAnimation = "rotate",
}: AnimatedIconButtonProps) {
  const iconAnimations = {
    rotate: { hover: { rotate: 180 }, transition: { duration: 0.3 } },
    bounce: { hover: { y: -3 }, transition: { duration: duration.micro } },
    pulse: { hover: { scale: 1.1 }, transition: { duration: duration.micro } },
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      transition={{ duration: duration.micro }}
      className={`
        rounded-lg font-medium transition-colors flex items-center gap-2
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
        ${className}
      `}
    >
      <motion.span
        whileHover={!disabled ? iconAnimations[iconAnimation].hover : {}}
        transition={iconAnimations[iconAnimation].transition}
      >
        {icon}
      </motion.span>
      {label && <span>{label}</span>}
    </motion.button>
  );
}

/**
 * AnimatedButtonGroup Component
 * 
 * Group of buttons with coordinated animations.
 * Useful for button groups, toggle groups, etc.
 */

interface AnimatedButtonGroupProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedButtonGroup({
  children,
  className = "",
}: AnimatedButtonGroupProps) {
  return (
    <div className={`flex gap-2 ${className}`}>
      {children}
    </div>
  );
}
