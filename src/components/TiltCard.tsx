"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Motion values for tracking coordinates
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Smooth springs for dampening movement
  const springConfig = { damping: 30, stiffness: 300, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [0, 1], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-12, 12]), springConfig);

  // Subtle gloss reflection position
  const glowX = useSpring(useTransform(x, [0, 1], ["0%", "100%"]), springConfig);
  const glowY = useSpring(useTransform(y, [0, 1], ["0%", "100%"]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate relative mouse position (0 to 1)
    const mouseX = (e.clientX - rect.left) / width;
    const mouseY = (e.clientY - rect.top) / height;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    // Reset to center
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      {/* 3D Render Depth container */}
      <div style={{ transform: "translateZ(30px)" }} className="h-full w-full">
        {children}
      </div>

      {/* Subtle glossy glass glow reflection */}
      <motion.div
        style={{
          background: `radial-gradient(circle 200px at ${glowX} ${glowY}, rgba(0, 212, 232, 0.15), transparent)`,
          transform: "translateZ(10px)",
        }}
        className="absolute inset-0 pointer-events-none rounded-inherit z-10"
      />
    </motion.div>
  );
}
