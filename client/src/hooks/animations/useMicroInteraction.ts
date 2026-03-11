/**
 * useMicroInteraction Hook
 * 
 * Provides animation configurations for micro-interactions like hover, tap, and focus.
 * Micro-interactions provide immediate visual feedback for user actions.
 * 
 * Educational Note: Micro-interactions are subtle but powerful. They make the UI
 * feel responsive and polished. A button that scales on hover feels more interactive
 * than one that doesn't, even if the scale change is only 5%.
 * 
 * Usage:
 * ```tsx
 * const { hoverAnimation, tapAnimation } = useMicroInteraction();
 * 
 * return (
 *   <motion.button
 *     whileHover={hoverAnimation}
 *     whileTap={tapAnimation}
 *   >
 *     Click Me
 *   </motion.button>
 * );
 * ```
 */

import { Variants } from "framer-motion";
import { duration } from "@/lib/easing";

/**
 * Standard micro-interaction animations
 * Returns hover and tap animation configs
 */
export function useMicroInteraction() {
  const hoverAnimation = {
    scale: 1.05,
    transition: { duration: duration.micro },
  };

  const tapAnimation = {
    scale: 0.95,
    transition: { duration: duration.micro },
  };

  const focusAnimation = {
    outline: "2px solid rgba(200, 135, 58, 0.5)",
    transition: { duration: duration.micro },
  };

  return { hoverAnimation, tapAnimation, focusAnimation };
}

/**
 * Button micro-interactions
 * Includes hover, tap, and disabled states
 */
export function useButtonAnimation() {
  const variants: Variants = {
    default: {
      scale: 1,
      opacity: 1,
    },
    hover: {
      scale: 1.05,
      transition: { duration: duration.micro },
    },
    tap: {
      scale: 0.95,
      transition: { duration: duration.micro },
    },
    disabled: {
      opacity: 0.5,
      scale: 1,
    },
  };

  return variants;
}

/**
 * Card micro-interactions
 * Includes hover with shadow depth and scale
 */
export function useCardAnimation() {
  const hoverAnimation = {
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
    transition: { duration: duration.micro },
  };

  const tapAnimation = {
    scale: 0.98,
    transition: { duration: duration.micro },
  };

  return { hoverAnimation, tapAnimation };
}

/**
 * Icon micro-interactions
 * Includes rotation, scale, and color changes
 */
export function useIconAnimation(type: "rotate" | "bounce" | "pulse" = "rotate") {
  const animations = {
    rotate: {
      hover: {
        rotate: 180,
        transition: { duration: 0.3 },
      },
    },
    bounce: {
      hover: {
        y: -5,
        transition: { duration: duration.micro },
      },
      tap: {
        y: 2,
        transition: { duration: duration.micro },
      },
    },
    pulse: {
      hover: {
        scale: 1.1,
        transition: { duration: duration.micro },
      },
    },
  };

  return animations[type];
}

/**
 * Input field micro-interactions
 * Includes focus states and validation feedback
 */
export function useInputAnimation() {
  const focusAnimation = {
    borderColor: "rgba(200, 135, 58, 1)",
    boxShadow: "0 0 0 3px rgba(200, 135, 58, 0.1)",
    transition: { duration: duration.micro },
  };

  const errorAnimation = {
    borderColor: "rgba(239, 68, 68, 1)",
    boxShadow: "0 0 0 3px rgba(239, 68, 68, 0.1)",
    transition: { duration: duration.micro },
  };

  const successAnimation = {
    borderColor: "rgba(34, 197, 94, 1)",
    boxShadow: "0 0 0 3px rgba(34, 197, 94, 0.1)",
    transition: { duration: duration.micro },
  };

  return { focusAnimation, errorAnimation, successAnimation };
}

/**
 * Link micro-interactions
 * Includes underline animation and color change
 */
export function useLinkAnimation() {
  const hoverAnimation = {
    color: "rgba(200, 135, 58, 1)",
    textDecoration: "underline",
    transition: { duration: duration.micro },
  };

  const tapAnimation = {
    opacity: 0.8,
    transition: { duration: duration.micro },
  };

  return { hoverAnimation, tapAnimation };
}

/**
 * Toggle/Switch micro-interactions
 * Includes smooth state transitions
 */
export function useToggleAnimation() {
  const variants: Variants = {
    on: {
      backgroundColor: "rgba(200, 135, 58, 1)",
      transition: { duration: duration.micro },
    },
    off: {
      backgroundColor: "rgba(200, 200, 200, 0.5)",
      transition: { duration: duration.micro },
    },
  };

  return variants;
}

/**
 * Dropdown/Menu micro-interactions
 * Includes open/close animations
 */
export function useDropdownAnimation() {
  const variants: Variants = {
    closed: {
      opacity: 0,
      y: -10,
      pointerEvents: "none",
      transition: { duration: duration.quick },
    },
    open: {
      opacity: 1,
      y: 0,
      pointerEvents: "auto",
      transition: { duration: duration.quick },
    },
  };

  return variants;
}

/**
 * Modal/Dialog micro-interactions
 * Includes backdrop fade and content scale
 */
export function useModalAnimation() {
  const backdropVariants: Variants = {
    closed: { opacity: 0 },
    open: { opacity: 1, transition: { duration: duration.quick } },
  };

  const contentVariants: Variants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      y: 20,
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: duration.quick },
    },
  };

  return { backdropVariants, contentVariants };
}

/**
 * Tooltip micro-interactions
 * Includes fade and slight scale
 */
export function useTooltipAnimation() {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: -5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: duration.micro },
    },
  };

  return variants;
}

/**
 * Loading state micro-interactions
 * Includes spinner and skeleton animations
 */
export function useLoadingAnimation() {
  const spinnerVariants: Variants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const skeletonVariants: Variants = {
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return { spinnerVariants, skeletonVariants };
}

/**
 * Notification/Toast micro-interactions
 * Includes entrance and exit animations
 */
export function useNotificationAnimation() {
  const variants: Variants = {
    initial: {
      opacity: 0,
      y: 20,
      x: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: duration.quick },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: duration.quick },
    },
  };

  return variants;
}
