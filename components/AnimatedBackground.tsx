"use client";
import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let W = 0, H = 0;
    let rafId: number;

    interface Particle {
      x: number; y: number; vx: number; vy: number;
      r: number; a: number; color: [number, number, number];
    }
    let particles: Particle[] = [];

    const isMobile = () => window.innerWidth < 768;

    function resize() {
      W = canvas!.width = window.innerWidth;
      H = canvas!.height = window.innerHeight;
    }

    function makeParticle(): Particle {
      const colors: [number,number,number][] = [[79,142,247],[124,111,247],[0,212,170]];
      return {
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.8 + 0.5,
        a: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    }

    function init() {
      resize();
      const count = isMobile() ? 40 : 100;
      particles = Array.from({ length: count }, makeParticle);
    }

    function drawGradientMesh() {
      const g1 = ctx!.createRadialGradient(W * 0.2, H * 0.2, 0, W * 0.2, H * 0.2, W * 0.6);
      g1.addColorStop(0, "rgba(79,142,247,0.06)");
      g1.addColorStop(1, "transparent");
      ctx!.fillStyle = g1; ctx!.fillRect(0, 0, W, H);

      const g2 = ctx!.createRadialGradient(W * 0.8, H * 0.7, 0, W * 0.8, H * 0.7, W * 0.5);
      g2.addColorStop(0, "rgba(124,111,247,0.05)");
      g2.addColorStop(1, "transparent");
      ctx!.fillStyle = g2; ctx!.fillRect(0, 0, W, H);

      const g3 = ctx!.createRadialGradient(W * 0.5, H, 0, W * 0.5, H, W * 0.4);
      g3.addColorStop(0, "rgba(0,212,170,0.04)");
      g3.addColorStop(1, "transparent");
      ctx!.fillStyle = g3; ctx!.fillRect(0, 0, W, H);
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H);
      drawGradientMesh();
      const maxDist = isMobile() ? 100 : 140;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.12;
            const c = particles[i].color;
            ctx!.beginPath();
            ctx!.strokeStyle = `rgba(${c[0]},${c[1]},${c[2]},${alpha})`;
            ctx!.lineWidth = 0.5;
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
      }
      for (const p of particles) {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${p.color[0]},${p.color[1]},${p.color[2]},${p.a})`;
        ctx!.fill();
      }
    }

    function update() {
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      }
    }

    function loop() {
      update(); draw();
      rafId = requestAnimationFrame(loop);
    }

    function staticFallback() { resize(); drawGradientMesh(); }

    window.addEventListener("resize", () => { resize(); if (mq.matches) staticFallback(); });

    if (mq.matches) { staticFallback(); }
    else { init(); loop(); }

    return () => { cancelAnimationFrame(rafId); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed", top: 0, left: 0,
        width: "100%", height: "100%",
        zIndex: 0, pointerEvents: "none", opacity: 0.85,
      }}
    />
  );
}
