import { useEffect, useRef } from 'react';

/* ── Haute Couture Color Palette for Stars & Stardust ────────── */
const STAR_COLORS = [
  '#dc4178', // Lumina Velvet Rose
  '#fce8b2', // Champagne Gold
  '#f472b6', // Blush Pink
  '#d4af37', // Runway Gold
  '#ffffff', // Diamond White Sparkle
];

export default function LandingStardustEffect() {
  const canvasRef = useRef(null);
  const sparklesRef = useRef([]);
  const animFrameRef = useRef(null);
  const lastMovePos = useRef({ x: 0, y: 0 });
  const lastMoveTime = useRef(0);

  /* ── 1. Star Trail & Click Burst Canvas ─────────────────────── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const sparkles = sparklesRef.current;

    const spawnStars = (x, y, count = 1, isBurst = false) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = isBurst
          ? Math.random() * 5.8 + 2.0
          : Math.random() * 1.6 + 0.4;
        const color = STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)];
        sparkles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - (isBurst ? 0.3 : 0.6),
          size: Math.random() * (isBurst ? 4.0 : 2.2) + 1.2,
          alpha: 1,
          decay: isBurst ? 0.02 + Math.random() * 0.015 : 0.032,
          color,
          spin: (Math.random() - 0.5) * 0.22,
          rotation: Math.random() * Math.PI,
        });
      }
    };

    const handlePointerMove = (e) => {
      const now = performance.now();
      const x = e.clientX;
      const y = e.clientY;
      const dx = x - lastMovePos.current.x;
      const dy = y - lastMovePos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > 8 || now - lastMoveTime.current > 40) {
        spawnStars(x, y, 1, false);
        lastMovePos.current = { x, y };
        lastMoveTime.current = now;
      }
    };

    const handlePointerDown = (e) => {
      spawnStars(e.clientX, e.clientY, 28, true);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = sparkles.length - 1; i >= 0; i--) {
        const s = sparkles[i];
        s.x += s.vx;
        s.y += s.vy;
        s.alpha -= s.decay;
        s.rotation += s.spin;
        if (s.alpha <= 0) { sparkles.splice(i, 1); continue; }
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rotation);
        ctx.beginPath();
        const r = s.size;
        ctx.moveTo(0, -r * 1.6);
        ctx.quadraticCurveTo(0, 0, r * 1.6, 0);
        ctx.quadraticCurveTo(0, 0, 0, r * 1.6);
        ctx.quadraticCurveTo(0, 0, -r * 1.6, 0);
        ctx.quadraticCurveTo(0, 0, 0, -r * 1.6);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = Math.max(0, s.alpha);
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();
      }
      animFrameRef.current = requestAnimationFrame(render);
    };
    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9998,
      }}
    />
  );
}
