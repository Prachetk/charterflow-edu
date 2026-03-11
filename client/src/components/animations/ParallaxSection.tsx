/**
 * ParallaxSection Component
 * 
 * Creates a parallax effect where background moves slower than foreground.
 * This creates a sense of depth and is a signature Apple animation.
 * 
 * Educational Note: Parallax works by mapping scroll position to different
 * translateY values for different layers. The background moves less than
 * the foreground, creating the illusion of depth.
 * 
 * Usage:
 * ```tsx
 * <ParallaxSection backgroundImage="/bg.jpg" intensity={0.3}>
 *   <h2>Foreground Content</h2>
 *   <p>This stays in place while background moves</p>
 * </ParallaxSection>
 * ```
 */

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useParallax } from "@/hooks/animations";

interface ParallaxSectionProps {
  children: ReactNode;
  backgroundImage?: string;
  backgroundColor?: string;
  intensity?: number;
  className?: string;
  minHeight?: string;
}

export function ParallaxSection({
  children,
  backgroundImage,
  backgroundColor = "#1A1612",
  intensity = 0.3,
  className = "",
  minHeight = "100vh",
}: ParallaxSectionProps) {
  const y = useParallax(intensity);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ minHeight }}
    >
      {/* Background Layer - Moves slower */}
      <motion.div
        style={{
          y,
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
          backgroundColor: !backgroundImage ? backgroundColor : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      />

      {/* Foreground Content - Stays in place */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/**
 * MultiLayerParallax Component
 * 
 * Creates a more complex parallax effect with multiple layers.
 * Each layer can have different intensity and content.
 * 
 * Usage:
 * ```tsx
 * <MultiLayerParallax>
 *   <ParallaxLayer intensity={0.1}>
 *     <img src="far-background.png" />
 *   </ParallaxLayer>
 *   <ParallaxLayer intensity={0.3}>
 *     <img src="mid-ground.png" />
 *   </ParallaxLayer>
 *   <ParallaxLayer intensity={0.5}>
 *     <h2>Foreground Content</h2>
 *   </ParallaxLayer>
 * </MultiLayerParallax>
 * ```
 */

interface ParallaxLayerProps {
  children: ReactNode;
  intensity?: number;
  className?: string;
}

export function ParallaxLayer({
  children,
  intensity = 0.3,
  className = "",
}: ParallaxLayerProps) {
  const y = useParallax(intensity);

  return (
    <motion.div
      style={{ y }}
      className={`absolute inset-0 ${className}`}
    >
      {children}
    </motion.div>
  );
}

interface MultiLayerParallaxProps {
  children: ReactNode;
  className?: string;
  minHeight?: string;
}

export function MultiLayerParallax({
  children,
  className = "",
  minHeight = "100vh",
}: MultiLayerParallaxProps) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ minHeight }}
    >
      {children}
    </div>
  );
}

/**
 * ImageParallax Component
 * 
 * Simple parallax effect specifically for images.
 * Great for hero sections and feature images.
 * 
 * Usage:
 * ```tsx
 * <ImageParallax
 *   src="/hero-image.jpg"
 *   alt="Hero"
 *   intensity={0.4}
 * />
 * ```
 */

interface ImageParallaxProps {
  src: string;
  alt: string;
  intensity?: number;
  className?: string;
  objectFit?: "cover" | "contain" | "fill";
}

export function ImageParallax({
  src,
  alt,
  intensity = 0.3,
  className = "",
  objectFit = "cover",
}: ImageParallaxProps) {
  const y = useParallax(intensity);

  return (
    <motion.div
      style={{ y }}
      className={`overflow-hidden ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full"
        style={{ objectFit }}
      />
    </motion.div>
  );
}
