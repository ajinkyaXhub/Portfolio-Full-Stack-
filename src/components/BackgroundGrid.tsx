"use client";

import { motion } from "framer-motion";

export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 -z-50 w-full h-full overflow-hidden bg-[#030303]">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Floating Blurred Blobs (Auroras) */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] min-w-[300px] min-h-[300px] rounded-full bg-indigo-900/10 blur-[120px] pointer-events-none"
      />

      <motion.div
        animate={{
          x: [0, -60, 80, 0],
          y: [0, 80, -90, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] min-w-[300px] min-h-[300px] rounded-full bg-teal-900/10 blur-[120px] pointer-events-none"
      />

      <motion.div
        animate={{
          x: [0, 40, -50, 0],
          y: [0, 60, -40, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] min-w-[250px] min-h-[250px] rounded-full bg-purple-900/5 blur-[150px] pointer-events-none"
      />
    </div>
  );
}
