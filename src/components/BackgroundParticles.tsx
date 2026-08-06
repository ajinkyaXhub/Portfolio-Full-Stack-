"use client";

import { useEffect, useRef } from "react";

export default function BackgroundParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;

    const cx = cv.getContext("2d");
    if (!cx) return;

    const resizeCanvas = () => {
      cv.width = window.innerWidth;
      cv.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    interface Particle {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      a: number;
    }

    const pts: Particle[] = [];
    const count = 60;

    for (let i = 0; i < count; i++) {
      pts.push({
        x: Math.random() * cv.width,
        y: Math.random() * cv.height,
        r: Math.random() * 1.2 + 0.3,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        a: Math.random() * 0.3 + 0.08,
      });
    }

    let animationId: number;

    const loop = () => {
      cx.clearRect(0, 0, cv.width, cv.height);

      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = cv.width;
        if (p.x > cv.width) p.x = 0;
        if (p.y < 0) p.y = cv.height;
        if (p.y > cv.height) p.y = 0;

        cx.beginPath();
        cx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        cx.fillStyle = `rgba(0, 212, 232, ${p.a})`;
        cx.fill();

        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < 95) {
            cx.beginPath();
            cx.moveTo(p.x, p.y);
            cx.lineTo(q.x, q.y);
            cx.strokeStyle = `rgba(0, 212, 232, ${0.055 * (1 - d / 95)})`;
            cx.lineWidth = 0.5;
            cx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="bg-canvas"
      className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none"
    />
  );
}
