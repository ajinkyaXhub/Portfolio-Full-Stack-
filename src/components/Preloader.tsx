"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const consoleLogs = [
  "INITIALIZING SYSTEM CORE...",
  "ESTABLISHING SECURE PROTOCOLS...",
  "LOADING AI COGNITIVE AGENTS...",
  "ENGAGING VECTOR STORAGE MESH...",
  "OPTIMIZING RETRIEVAL PIPELINES...",
  "DEPLOYING INTELLIGENT ROUTERS...",
  "SYSTEM_STATUS: ONLINE",
];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    // Progress count-up
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Random increment speed
        const rand = Math.floor(Math.random() * 8) + 3;
        return Math.min(prev + rand, 100);
      });
    }, 80);

    // Staggered console logs
    const logInterval = setInterval(() => {
      setLogIndex((prev) => {
        if (prev < consoleLogs.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 250);

    return () => {
      clearInterval(progressInterval);
      clearInterval(logInterval);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const delay = setTimeout(() => {
        onComplete();
      }, 500); // Small pause at 100% for impact
      return () => clearTimeout(delay);
    }
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#050810] flex flex-col items-center justify-center p-6 select-none font-mono">
      {/* Scan Lines Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)",
          backgroundSize: "100% 4px",
        }}
      />

      <div className="max-w-md w-full flex flex-col space-y-8">
        {/* Diagnostic Header */}
        <div className="flex justify-between items-center text-[#00d4e8] border-b border-[#00d4e8]/20 pb-4">
          <span className="text-[10px] tracking-widest font-bold">CORE DIAGNOSTICS</span>
          <span className="text-[10px] animate-pulse">● ACTIVE SYSTEM</span>
        </div>

        {/* Pulse Logo Grid */}
        <div className="flex justify-center py-6">
          <div className="relative w-16 h-16 flex items-center justify-center border border-[#00d4e8]/30 rounded-lg bg-[#080d1a] overflow-hidden group">
            <div className="absolute inset-0 bg-[#00d4e8]/5 animate-pulse" />
            <span className="text-3xl animate-bounce duration-[3000ms]">🤖</span>
          </div>
        </div>

        {/* Console Logs list */}
        <div className="h-28 overflow-hidden text-[11px] text-zinc-400 space-y-1 bg-black/40 p-4 rounded border border-white/5 font-mono">
          {consoleLogs.slice(0, logIndex + 1).map((log, idx) => (
            <div key={idx} className="flex gap-2">
              <span className="text-[#00d4e8] font-bold">&gt;</span>
              <span className={idx === logIndex ? "text-white font-bold" : ""}>
                {log}
              </span>
            </div>
          ))}
        </div>

        {/* Progress & Bar */}
        <div className="space-y-3">
          <div className="flex justify-between text-xs font-bold text-white tracking-widest">
            <span>BOOTING PORTFOLIO</span>
            <span className="text-[#00d4e8]">{progress}%</span>
          </div>
          <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden border border-white/5 relative">
            <motion.div
              className="h-full bg-gradient-to-r from-[#00d4e8] to-[#8b5cf6]"
              style={{ width: `${progress}%` }}
              layout
            />
          </div>
        </div>
      </div>
    </div>
  );
}
