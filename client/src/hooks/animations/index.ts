/**
 * Animation Hooks Export
 * 
 * Central export point for all animation-related hooks.
 * This makes it easy to import animation hooks from a single location.
 * 
 * Usage:
 * ```tsx
 * import {
 *   useScrollProgress,
 *   useParallax,
 *   useStaggerAnimation,
 *   useMicroInteraction,
 * } from "@/hooks/animations";
 * ```
 */

export {
  useScrollProgress,
  useScrollY,
  useScrollDirection,
} from "./useScrollProgress";

export {
  useScrollTransform,
  useScrollTransformString,
  useParallax,
  useScrollReveal,
  useScrollScale,
  useScrollRotate,
  useScrollBlur,
} from "./useScrollTransform";

export {
  useStaggerAnimation,
  useStaggerAnimationCustom,
  useStaggerAnimationByIndex,
  useWaveAnimation,
  useCascadeAnimation,
} from "./useStaggerAnimation";

export {
  useMicroInteraction,
  useButtonAnimation,
  useCardAnimation,
  useIconAnimation,
  useInputAnimation,
  useLinkAnimation,
  useToggleAnimation,
  useDropdownAnimation,
  useModalAnimation,
  useTooltipAnimation,
  useLoadingAnimation,
  useNotificationAnimation,
} from "./useMicroInteraction";
