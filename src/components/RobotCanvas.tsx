"use client";

import { useEffect, useRef } from "react";

export default function RobotCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;

    const g = cv.getContext("2d");
    if (!g) return;

    const W = 400;
    const H = 480;
    cv.width = W;
    cv.height = H;

    const PI = Math.PI;
    const CX = W / 2;
    let msx = W / 2;
    let msy = H / 2;
    let lx = 0;
    let ly = 0;
    let t = 0;

    const onMouseMove = (e: MouseEvent) => {
      const r = cv.getBoundingClientRect();
      msx = e.clientX - r.left;
      msy = e.clientY - r.top;
    };

    document.addEventListener("mousemove", onMouseMove);

    // chrome gradient left-to-right
    const cg = (x: number, y: number, w: number, h: number) => {
      const gr = g.createLinearGradient(x, y, x + w, y + h);
      gr.addColorStop(0, "#e0eaf5");
      gr.addColorStop(0.2, "#c0d0e4");
      gr.addColorStop(0.5, "#8fa8c0");
      gr.addColorStop(0.78, "#607888");
      gr.addColorStop(1, "#304050");
      return gr;
    };

    // chrome radial
    const cr = (x: number, y: number, r2: number) => {
      const gr = g.createRadialGradient(x - r2 * 0.35, y - r2 * 0.35, r2 * 0.05, x, y, r2);
      gr.addColorStop(0, "#eef4fc");
      gr.addColorStop(0.25, "#c8daea");
      gr.addColorStop(0.6, "#7898b0");
      gr.addColorStop(1, "#304858");
      return gr;
    };

    const drawRobot = () => {
      const bob = Math.sin(t * 0.75) * 5;
      g.clearRect(0, 0, W, H);

      // ambient glow
      const amb = g.createRadialGradient(CX, 220 + bob, 10, CX, 220 + bob, 200);
      amb.addColorStop(0, "rgba(20,80,140,0.10)");
      amb.addColorStop(1, "rgba(0,0,0,0)");
      g.fillStyle = amb;
      g.fillRect(0, 0, W, H);

      // floor shadow
      g.save();
      g.globalAlpha = 0.3;
      const fs = g.createRadialGradient(CX, 472, 4, CX, 472, 70);
      fs.addColorStop(0, "rgba(0,160,220,0.6)");
      fs.addColorStop(1, "transparent");
      g.fillStyle = fs;
      g.beginPath();
      g.ellipse(CX, 472, 65, 10, 0, 0, 2 * PI);
      g.fill();
      g.restore();

      // ---- positions ----
      const BY = 240 + bob; // torso centre Y
      const HY = BY - 170;  // head centre Y

      // ── UPPER ARMS (behind torso) ──
      [-1, 1].forEach((s) => {
        const ax = CX + s * 68;
        const sw = Math.sin(t * 0.65 + (s > 0 ? PI : 0)) * 7;
        
        // upper arm
        g.save();
        g.beginPath();
        g.moveTo(ax - 10, BY - 75);
        g.lineTo(ax + 10, BY - 75);
        g.lineTo(ax + 12 + sw, BY - 10);
        g.lineTo(ax - 12 + sw, BY - 10);
        g.closePath();
        g.fillStyle = cg(ax - 12, BY - 75, 24, 65);
        g.shadowColor = "rgba(0,0,0,0.5)";
        g.shadowBlur = 12;
        g.fill();
        g.restore();

        // elbow ball
        g.save();
        g.beginPath();
        g.arc(ax + sw * 0.8, BY - 8, 12, 0, 2 * PI);
        g.fillStyle = cr(ax + sw * 0.8 - 4, BY - 12, 12);
        g.shadowColor = "rgba(0,0,0,0.5)";
        g.shadowBlur = 10;
        g.fill();
        g.strokeStyle = "rgba(200,225,245,0.25)";
        g.lineWidth = 1;
        g.stroke();
        g.restore();

        // forearm
        const lsw = Math.sin(t * 0.8 + (s > 0 ? PI : 0) + 0.6) * 10;
        const ex = ax + sw * 0.8;
        const ey = BY - 8;
        g.save();
        g.beginPath();
        g.moveTo(ex - 10, ey + 10);
        g.lineTo(ex + 10, ey + 10);
        g.lineTo(ex + 8 + lsw, ey + 68);
        g.lineTo(ex - 8 + lsw, ey + 68);
        g.closePath();
        g.fillStyle = cg(ex - 10, ey + 10, 20, 58);
        g.shadowColor = "rgba(0,0,0,0.45)";
        g.shadowBlur = 10;
        g.fill();
        g.restore();

        // wrist
        const wx = ex + lsw;
        const wy = ey + 68;
        g.save();
        g.beginPath();
        g.ellipse(wx, wy, 9, 7, 0, 0, 2 * PI);
        g.fillStyle = cr(wx - 3, wy - 3, 9);
        g.shadowColor = "rgba(0,0,0,0.4)";
        g.shadowBlur = 8;
        g.fill();
        g.restore();

        // hand
        g.save();
        g.beginPath();
        g.moveTo(wx - 9, wy + 6);
        g.bezierCurveTo(wx - 11, wy + 18, wx - 8, wy + 28, wx - 3, wy + 32);
        g.lineTo(wx + 3, wy + 32);
        g.bezierCurveTo(wx + 8, wy + 28, wx + 11, wy + 18, wx + 9, wy + 6);
        g.closePath();
        g.fillStyle = cg(wx - 11, wy + 6, 22, 26);
        g.shadowColor = "rgba(0,0,0,0.4)";
        g.shadowBlur = 8;
        g.fill();
        g.strokeStyle = "rgba(160,200,225,0.2)";
        g.lineWidth = 1;
        g.stroke();
        g.restore();

        // 3 finger lines
        g.save();
        g.strokeStyle = "rgba(40,70,90,0.35)";
        g.lineWidth = 1;
        [-4, 0, 4].forEach((fo) => {
          g.beginPath();
          g.moveTo(wx + fo, wy + 12);
          g.lineTo(wx + fo * 1.1, wy + 30);
          g.stroke();
        });
        g.restore();
      });

      // ── TORSO ──
      const tx = CX + lx * 2;
      g.save();
      g.beginPath();
      g.moveTo(tx - 52, BY - 80);
      g.bezierCurveTo(tx - 56, BY - 60, tx - 58, BY - 20, tx - 50, BY + 30);
      g.bezierCurveTo(tx - 42, BY + 70, tx - 26, BY + 82, tx, BY + 84);
      g.bezierCurveTo(tx + 26, BY + 82, tx + 42, BY + 70, tx + 50, BY + 30);
      g.bezierCurveTo(tx + 58, BY - 20, tx + 56, BY - 60, tx + 52, BY - 80);
      g.closePath();
      const tgrad = g.createLinearGradient(tx - 58, BY - 80, tx + 58, BY + 84);
      tgrad.addColorStop(0, "#d8e6f0");
      tgrad.addColorStop(0.18, "#b8cce0");
      tgrad.addColorStop(0.45, "#8aa4bc");
      tgrad.addColorStop(0.72, "#607898");
      tgrad.addColorStop(1, "#2e4258");
      g.fillStyle = tgrad;
      g.shadowColor = "rgba(0,0,0,0.65)";
      g.shadowBlur = 28;
      g.fill();
      g.restore();

      // chest specular
      g.save();
      const cs = g.createRadialGradient(tx - 12, BY - 52, 4, tx - 4, BY - 40, 50);
      cs.addColorStop(0, "rgba(255,255,255,0.48)");
      cs.addColorStop(0.5, "rgba(200,222,240,0.14)");
      cs.addColorStop(1, "rgba(255,255,255,0)");
      g.beginPath();
      g.ellipse(tx - 4, BY - 36, 46, 38, 0, 0, 2 * PI);
      g.fillStyle = cs;
      g.fill();
      g.restore();

      // sternum line
      g.save();
      g.beginPath();
      g.moveTo(tx, BY - 78);
      g.bezierCurveTo(tx - 1, BY - 30, tx - 2, BY + 10, tx - 3, BY + 50);
      g.strokeStyle = "rgba(30,55,80,0.45)";
      g.lineWidth = 2;
      g.shadowColor = "rgba(0,0,0,0.3)";
      g.shadowBlur = 4;
      g.stroke();
      g.restore();

      // pec crease lines
      g.save();
      g.strokeStyle = "rgba(100,140,170,0.25)";
      g.lineWidth = 1.2;
      g.beginPath();
      g.moveTo(tx - 4, BY - 26);
      g.bezierCurveTo(tx - 22, BY - 20, tx - 44, BY - 32, tx - 50, BY - 52);
      g.stroke();
      g.beginPath();
      g.moveTo(tx + 4, BY - 26);
      g.bezierCurveTo(tx + 22, BY - 20, tx + 44, BY - 32, tx + 50, BY - 52);
      g.stroke();
      g.restore();

      // abs segments
      [-1, 1].forEach((s) => {
        [BY + 8, BY + 28, BY + 48].forEach((ay) => {
          g.save();
          g.beginPath();
          g.ellipse(tx + s * 18, ay, 13, 9, 0, 0, 2 * PI);
          const ag = g.createRadialGradient(tx + s * 18 - 4, ay - 3, 1, tx + s * 18, ay, 13);
          ag.addColorStop(0, "rgba(215,232,248,0.45)");
          ag.addColorStop(0.6, "rgba(110,148,178,0.18)");
          ag.addColorStop(1, "rgba(50,80,110,0.04)");
          g.fillStyle = ag;
          g.fill();
          g.strokeStyle = "rgba(90,130,160,0.25)";
          g.lineWidth = 0.8;
          g.stroke();
          g.restore();
        });
      });

      // torso edge stroke
      g.save();
      g.beginPath();
      g.moveTo(tx - 52, BY - 80);
      g.bezierCurveTo(tx - 56, BY - 60, tx - 58, BY - 20, tx - 50, BY + 30);
      g.bezierCurveTo(tx - 42, BY + 70, tx - 26, BY + 82, tx, BY + 84);
      g.bezierCurveTo(tx + 26, BY + 82, tx + 42, BY + 70, tx + 50, BY + 30);
      g.bezierCurveTo(tx + 58, BY - 20, tx + 56, BY - 60, tx + 52, BY - 80);
      g.closePath();
      g.strokeStyle = "rgba(200,228,248,0.28)";
      g.lineWidth = 1.5;
      g.stroke();
      g.restore();

      // ── SHOULDERS ──
      [-1, 1].forEach((s) => {
        const sx = tx + s * 56;
        const sy = BY - 64;
        g.save();
        g.beginPath();
        g.ellipse(sx, sy, 26, 30, s * 0.15, 0, 2 * PI);
        g.fillStyle = cr(sx + s * -9, sy - 10, 26);
        g.shadowColor = "rgba(0,0,0,0.55)";
        g.shadowBlur = 16;
        g.fill();
        g.strokeStyle = "rgba(200,228,248,0.22)";
        g.lineWidth = 1;
        g.stroke();
        const ss = g.createRadialGradient(sx + s * -8, sy - 11, 2, sx + s * -4, sy - 6, 16);
        ss.addColorStop(0, "rgba(255,255,255,0.52)");
        ss.addColorStop(1, "rgba(255,255,255,0)");
        g.beginPath();
        g.ellipse(sx + s * -3, sy - 5, 16, 13, s * 0.25, 0, 2 * PI);
        g.fillStyle = ss;
        g.fill();
        g.restore();
      });

      // ── NECK ──
      const nx = tx + lx * 3;
      g.save();
      g.beginPath();
      g.moveTo(nx - 15, BY - 80);
      g.bezierCurveTo(nx - 17, BY - 68, nx - 13, BY - 56, nx - 11, BY - 50);
      g.lineTo(nx + 11, BY - 50);
      g.bezierCurveTo(nx + 13, BY - 56, nx + 17, BY - 68, nx + 15, BY - 80);
      g.closePath();
      const ng = g.createLinearGradient(nx - 17, BY - 80, nx + 17, BY - 50);
      ng.addColorStop(0, "#c0d4e8");
      ng.addColorStop(0.5, "#88a0b8");
      ng.addColorStop(1, "#4a6070");
      g.fillStyle = ng;
      g.shadowColor = "rgba(0,0,0,0.45)";
      g.shadowBlur = 10;
      g.fill();
      g.restore();
      
      // neck ring
      g.save();
      g.beginPath();
      g.ellipse(nx, BY - 62, 13, 5, 0, 0, 2 * PI);
      g.strokeStyle = "rgba(160,195,220,0.35)";
      g.lineWidth = 1.5;
      g.stroke();
      g.restore();

      // ── LEGS ──
      [-1, 1].forEach((s) => {
        const lbx = CX + s * 28;
        const lby = BY + 84;
        const lsw = Math.sin(t * 0.7 + (s > 0 ? PI : 0)) * 5;

        // thigh
        g.save();
        g.beginPath();
        g.moveTo(lbx - 17, lby);
        g.bezierCurveTo(lbx - 20, lby + 30, lbx - 18 + lsw, lby + 68, lbx - 14 + lsw, lby + 90);
        g.lineTo(lbx + 14 + lsw, lby + 90);
        g.bezierCurveTo(lbx + 18 + lsw, lby + 68, lbx + 20, lby + 30, lbx + 17, lby);
        g.closePath();
        g.fillStyle = cg(lbx - 20, lby, 38, 90);
        g.shadowColor = "rgba(0,0,0,0.45)";
        g.shadowBlur = 14;
        g.fill();
        g.strokeStyle = "rgba(190,218,238,0.2)";
        g.lineWidth = 1;
        g.stroke();
        
        // thigh specular
        const ts = g.createRadialGradient(lbx - 6, lby + 14, 2, lbx - 2, lby + 24, 18);
        ts.addColorStop(0, "rgba(228,242,255,0.48)");
        ts.addColorStop(1, "rgba(228,242,255,0)");
        g.beginPath();
        g.ellipse(lbx - 1, lby + 28, 12, 26, 0, 0, 2 * PI);
        g.fillStyle = ts;
        g.fill();
        g.restore();

        // knee
        const kx = lbx + lsw;
        const ky = lby + 92;
        g.save();
        g.beginPath();
        g.ellipse(kx, ky, 16, 14, 0, 0, 2 * PI);
        g.fillStyle = cr(kx + s * -5, ky - 5, 16);
        g.shadowColor = "rgba(0,0,0,0.5)";
        g.shadowBlur = 12;
        g.fill();
        const ks = g.createRadialGradient(kx + s * -5, ky - 6, 1, kx, ky, 14);
        ks.addColorStop(0, "rgba(255,255,255,0.48)");
        ks.addColorStop(1, "rgba(255,255,255,0)");
        g.beginPath();
        g.arc(kx, ky, 13, 0, 2 * PI);
        g.fillStyle = ks;
        g.fill();
        g.strokeStyle = "rgba(190,218,238,0.25)";
        g.lineWidth = 1;
        g.stroke();
        g.restore();

        // shin
        const skx = kx;
        const sky = ky + 13;
        g.save();
        g.beginPath();
        g.moveTo(skx - 12, sky);
        g.bezierCurveTo(skx - 14, sky + 28, skx - 11 + lsw * 0.4, sky + 60, skx - 8 + lsw * 0.4, sky + 84);
        g.lineTo(skx + 8 + lsw * 0.4, sky + 84);
        g.bezierCurveTo(skx + 11 + lsw * 0.4, sky + 60, skx + 14, sky + 28, skx + 12, sky);
        g.closePath();
        g.fillStyle = cg(skx - 14, sky, 28, 84);
        g.shadowColor = "rgba(0,0,0,0.4)";
        g.shadowBlur = 12;
        g.fill();
        g.strokeStyle = "rgba(185,215,235,0.18)";
        g.lineWidth = 1;
        g.stroke();
        g.restore();

        // foot
        const fx = skx + lsw * 0.4;
        const fy = sky + 86;
        g.save();
        g.beginPath();
        g.moveTo(fx - 12, fy);
        g.bezierCurveTo(fx - 14, fy + 8, fx - 16, fy + 16, fx - 18, fy + 18);
        g.lineTo(fx + 14, fy + 18);
        g.bezierCurveTo(fx + 14, fy + 12, fx + 12, fy + 6, fx + 12, fy);
        g.closePath();
        g.fillStyle = cg(fx - 18, fy, 32, 18);
        g.shadowColor = "rgba(0,0,0,0.5)";
        g.shadowBlur = 10;
        g.fill();
        g.restore();
      });

      // ── HEAD ──
      const hx = CX + lx * 14;
      const hy = HY + bob + ly * 8;

      // skull dome
      g.save();
      g.beginPath();
      g.arc(hx, hy, 44, PI, 2 * PI); // top half circle
      g.bezierCurveTo(hx + 44, hy + 10, hx + 42, hy + 30, hx + 28, hy + 50);
      g.lineTo(hx - 28, hy + 50);
      g.bezierCurveTo(hx - 42, hy + 30, hx - 44, hy + 10, hx - 44, hy);
      g.closePath();
      const hgrad = g.createLinearGradient(hx - 44, hy - 44, hx + 44, hy + 50);
      hgrad.addColorStop(0, "#dceaf6");
      hgrad.addColorStop(0.15, "#c0d4e8");
      hgrad.addColorStop(0.42, "#90aaC2");
      hgrad.addColorStop(0.7, "#607888");
      hgrad.addColorStop(1, "#304050");
      g.fillStyle = hgrad;
      g.shadowColor = "rgba(0,0,0,0.6)";
      g.shadowBlur = 22;
      g.fill();
      g.restore();

      // skull highlight
      g.save();
      const sh = g.createRadialGradient(hx - 14, hy - 28, 3, hx - 8, hy - 20, 32);
      sh.addColorStop(0, "rgba(255,255,255,0.52)");
      sh.addColorStop(1, "rgba(255,255,255,0)");
      g.beginPath();
      g.ellipse(hx - 8, hy - 18, 30, 22, 0, 0, 2 * PI);
      g.fillStyle = sh;
      g.fill();
      g.restore();

      // skull stroke
      g.save();
      g.beginPath();
      g.arc(hx, hy, 44, PI, 2 * PI);
      g.bezierCurveTo(hx + 44, hy + 10, hx + 42, hy + 30, hx + 28, hy + 50);
      g.lineTo(hx - 28, hy + 50);
      g.bezierCurveTo(hx - 42, hy + 30, hx - 44, hy + 10, hx - 44, hy);
      g.closePath();
      g.strokeStyle = "rgba(210,235,252,0.32)";
      g.lineWidth = 1.5;
      g.stroke();
      g.restore();

      // face plate
      g.save();
      g.beginPath();
      g.moveTo(hx - 28, hy - 2);
      g.bezierCurveTo(hx - 30, hy + 14, hx - 26, hy + 34, hx - 14, hy + 44);
      g.quadraticCurveTo(hx, hy + 48, hx + 14, hy + 44);
      g.bezierCurveTo(hx + 26, hy + 34, hx + 30, hy + 14, hx + 28, hy - 2);
      g.quadraticCurveTo(hx, hy - 8, hx - 28, hy - 2);
      g.closePath();
      const fg = g.createLinearGradient(hx - 30, hy - 8, hx + 30, hy + 48);
      fg.addColorStop(0, "#aabccc");
      fg.addColorStop(0.5, "#8098b0");
      fg.addColorStop(1, "#526070");
      g.fillStyle = fg;
      g.fill();
      g.restore();

      // EYES
      const ey2 = hy + 12 + ly * 3;
      [-15, 15].forEach((ox) => {
        const ex = hx + ox + lx * 5;
        // socket
        g.save();
        g.beginPath();
        g.ellipse(ex, ey2, 9, 6, 0, 0, 2 * PI);
        g.fillStyle = "#141e28";
        g.fill();
        g.restore();
        
        // iris glow
        const ep = 0.72 + Math.sin(t * 2.4) * 0.28;
        const eg = g.createRadialGradient(ex, ey2, 0, ex, ey2, 8);
        eg.addColorStop(0, "rgba(50,210,255," + ep + ")");
        eg.addColorStop(0.35, "rgba(0,160,220," + ep * 0.7 + ")");
        eg.addColorStop(1, "rgba(0,50,90,0)");
        g.save();
        g.shadowColor = "#00b8f0";
        g.shadowBlur = 18;
        g.beginPath();
        g.ellipse(ex, ey2, 7, 5, 0, 0, 2 * PI);
        g.fillStyle = eg;
        g.fill();
        g.restore();
        
        // pupil
        g.save();
        g.beginPath();
        g.ellipse(ex + lx * 1.5, ey2 + ly * 1.2, 3, 2.4, 0, 0, 2 * PI);
        g.fillStyle = "#001422";
        g.fill();
        g.restore();
        
        // eye specular
        g.save();
        g.beginPath();
        g.arc(ex + 3, ey2 - 2, 1.5, 0, 2 * PI);
        g.fillStyle = "rgba(255,255,255,0.85)";
        g.fill();
        g.restore();
      });

      // nose bridge
      g.save();
      g.beginPath();
      g.moveTo(hx, hy + 22);
      g.lineTo(hx, hy + 34);
      g.strokeStyle = "rgba(50,75,95,0.35)";
      g.lineWidth = 2;
      g.stroke();
      g.restore();

      // MOUTH
      g.save();
      g.beginPath();
      g.moveTo(hx - 12, hy + 40);
      g.quadraticCurveTo(hx, hy + 44, hx + 12, hy + 40);
      g.strokeStyle = "rgba(40,65,85,0.5)";
      g.lineWidth = 1.5;
      g.stroke();
      g.restore();

      // jaw plate
      g.save();
      g.beginPath();
      g.moveTo(hx - 28, hy + 32);
      g.bezierCurveTo(hx - 30, hy + 44, hx - 22, hy + 52, hx - 14, hy + 54);
      g.lineTo(hx + 14, hy + 54);
      g.bezierCurveTo(hx + 22, hy + 52, hx + 30, hy + 44, hx + 28, hy + 32);
      g.closePath();
      const jg = g.createLinearGradient(hx - 30, hy + 32, hx + 30, hy + 54);
      jg.addColorStop(0, "#8098b0");
      jg.addColorStop(1, "#3a5060");
      g.fillStyle = jg;
      g.fill();
      g.restore();

      // TEMPLE PIECE
      const tpx = hx + 42 + lx * 1.5;
      const tpy = hy - 2;
      
      // outer chrome ring
      g.save();
      g.beginPath();
      g.arc(tpx, tpy, 13, 0, 2 * PI);
      const tpg = g.createRadialGradient(tpx - 4, tpy - 4, 1, tpx, tpy, 13);
      tpg.addColorStop(0, "#c8dce8");
      tpg.addColorStop(0.5, "#7090a8");
      tpg.addColorStop(1, "#304050");
      g.fillStyle = tpg;
      g.shadowColor = "rgba(0,0,0,0.5)";
      g.shadowBlur = 12;
      g.fill();
      g.strokeStyle = "rgba(190,220,240,0.4)";
      g.lineWidth = 1.5;
      g.stroke();
      g.restore();
      
      // inner glowing blue disc
      g.save();
      g.shadowColor = "#0090e0";
      g.shadowBlur = 20;
      g.beginPath();
      g.arc(tpx, tpy, 8, 0, 2 * PI);
      const tdc = g.createRadialGradient(tpx - 3, tpy - 3, 1, tpx, tpy, 8);
      tdc.addColorStop(0, "#60c8ff");
      tdc.addColorStop(0.4, "#0080c0");
      tdc.addColorStop(1, "#003060");
      g.fillStyle = tdc;
      g.fill();
      g.strokeStyle = "rgba(80,180,255,0.8)";
      g.lineWidth = 1.5;
      g.stroke();
      g.restore();
      
      // spinning ring inside disc
      g.save();
      g.shadowColor = "#40c0ff";
      g.shadowBlur = 8;
      g.translate(tpx, tpy);
      g.rotate(t * 1.2);
      for (let si = 0; si < 3; si++) {
        const sa = si * ((2 * PI) / 3);
        g.beginPath();
        g.moveTo(Math.cos(sa) * 3, Math.sin(sa) * 3);
        g.lineTo(Math.cos(sa) * 6.5, Math.sin(sa) * 6.5);
        g.strokeStyle = "rgba(150,220,255,0.9)";
        g.lineWidth = 1.5;
        g.stroke();
      }
      g.restore();
      
      // centre dot
      g.save();
      g.beginPath();
      g.arc(tpx, tpy, 2.5, 0, 2 * PI);
      const cd = g.createRadialGradient(tpx, tpy, 0, tpx, tpy, 2.5);
      cd.addColorStop(0, "#ffffff");
      cd.addColorStop(1, "#80d0ff");
      g.fillStyle = cd;
      g.shadowColor = "#80d0ff";
      g.shadowBlur = 10;
      g.fill();
      g.restore();

      // neck-to-collar blue accent
      g.save();
      g.beginPath();
      g.moveTo(tx - 38 + lx * 2, BY - 82);
      g.quadraticCurveTo(tx + lx * 3, BY - 92, tx + 38 + lx * 2, BY - 82);
      g.strokeStyle = "rgba(0,150,220,0.55)";
      g.lineWidth = 1.8;
      g.shadowColor = "#0090d0";
      g.shadowBlur = 10;
      g.stroke();
      g.restore();
    };

    let animationId: number;

    const frame = () => {
      t += 0.016;
      lx += ((msx / W) * 2 - 1 - lx) * 0.065;
      ly += ((msy / H) * 2 - 1 - ly) * 0.065;
      drawRobot();
      animationId = requestAnimationFrame(frame);
    };
    frame();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="robot-canvas"
      className="mx-auto block relative z-10 max-w-full"
      style={{ width: 400, height: 480 }}
    />
  );
}
