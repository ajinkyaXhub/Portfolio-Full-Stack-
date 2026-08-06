"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // If device is touch-based, do not use custom cursor
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let mx = typeof window !== "undefined" ? window.innerWidth / 2 : 0;
    let my = typeof window !== "undefined" ? window.innerHeight / 2 : 0;
    let targetMx = mx;
    let targetMy = my;

    const trail: { x: number; y: number }[] = [];
    const trailLength = 16;
    for (let i = 0; i < trailLength; i++) {
      trail.push({ x: mx, y: my });
    }

    let curColor = "#00f2fe";
    let isHovering = false;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const onMouseMove = (e: MouseEvent) => {
      targetMx = e.clientX;
      targetMy = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    let animationId: number;

    const tick = () => {
      // Direct position follow for the tiny dot
      mx += (targetMx - mx) * 0.15;
      my += (targetMy - my) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetMx - 4}px, ${targetMy - 4}px, 0) scale(${isHovering ? 2 : 1})`;
        dotRef.current.style.borderColor = isHovering ? "#ffffff" : "#00f2fe";
        dotRef.current.style.backgroundColor = isHovering ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 242, 254, 0.4)";
      }

      // Physics trailing for the tail
      trail[0].x += (targetMx - trail[0].x) * 0.35;
      trail[0].y += (targetMy - trail[0].y) * 0.35;

      for (let i = 1; i < trailLength; i++) {
        trail[i].x += (trail[i - 1].x - trail[i].x) * 0.35;
        trail[i].y += (trail[i - 1].y - trail[i].y) * 0.35;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw fluid line
      if (trailLength > 1) {
        ctx.beginPath();
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.moveTo(trail[0].x, trail[0].y);
        for (let i = 1; i < trailLength - 1; i++) {
          const xc = (trail[i].x + trail[i + 1].x) / 2;
          const yc = (trail[i].y + trail[i + 1].y) / 2;
          ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
        }
        ctx.lineTo(trail[trailLength - 1].x, trail[trailLength - 1].y);
        
        ctx.strokeStyle = isHovering ? "#ffffff" : curColor;
        ctx.lineWidth = isHovering ? 3 : 2;
        ctx.shadowBlur = isHovering ? 8 : 12;
        ctx.shadowColor = isHovering ? "#ffffff" : curColor;
        ctx.stroke();
      }

      // Draw tiny fading dots along the trail
      for (let i = 0; i < trailLength; i++) {
        const radius = (isHovering ? 2.5 : 2.0) * (1 - i / trailLength);
        ctx.beginPath();
        ctx.arc(trail[i].x, trail[i].y, Math.max(0.1, radius), 0, Math.PI * 2);
        ctx.fillStyle = isHovering ? "#ffffff" : curColor;
        ctx.fill();
      }

      ctx.shadowBlur = 0;
      animationId = requestAnimationFrame(tick);
    };

    tick();

    // Event listener setup for premium hover scaling
    const setupHoverListeners = () => {
      const hoverables = document.querySelectorAll(
        "a, button, select, input, textarea, [role='button'], .project-card, .interactive-chip"
      );

      const onEnter = () => {
        isHovering = true;
      };

      const onLeave = () => {
        isHovering = false;
      };

      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });

      return () => {
        hoverables.forEach((el) => {
          el.removeEventListener("mouseenter", onEnter);
          el.removeEventListener("mouseleave", onLeave);
        });
      };
    };

    // Run setup and re-run on DOM mutations (e.g. page transitions/conditional renders)
    let cleanHovers = setupHoverListeners();

    const observer = new MutationObserver(() => {
      cleanHovers();
      cleanHovers = setupHoverListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationId);
      cleanHovers();
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Follow Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full border border-primary pointer-events-none z-[9999] transition-transform duration-75 ease-out"
        style={{ willChange: "transform" }}
      />
      {/* Follow Canvas Trail */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9998]"
        style={{ mixBlendMode: "screen" }}
      />
    </>
  );
}
