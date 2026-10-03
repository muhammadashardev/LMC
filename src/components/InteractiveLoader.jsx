import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroModelImg from '../assets/isabella_rose_hero.jpg';

/* ── Haute Couture Editorial Themes ──────────────────────────── */
const MOOD_THEMES = [
  {
    id: 'editorial',
    num: '01',
    label: 'EDITORIAL',
    accent: '#dc4178',
    glow: 'rgba(220, 65, 120, 0.4)',
    tagline: 'Vogue & Harper’s Bazaar Collections',
    quote: '“Fashion is the poetry of silhouette, grace, and authentic presence.”',
    stats: '50+ High Fashion Shoots',
  },
  {
    id: 'runway',
    num: '02',
    label: 'RUNWAY',
    accent: '#e5b85d',
    glow: 'rgba(229, 184, 93, 0.4)',
    tagline: 'Melbourne • Milan • Paris Fashion Week',
    quote: '“Every step on the runway is a statement of poise and pure confidence.”',
    stats: '15+ International Runways',
  },
  {
    id: 'couture',
    num: '03',
    label: 'COUTURE',
    accent: '#f29ec0',
    glow: 'rgba(242, 158, 192, 0.4)',
    tagline: 'Bespoke Atelier & Luxury Campaigns',
    quote: '“Where modern contemporary minimalism meets timeless classical beauty.”',
    stats: '30+ Luxury Brand Collaborations',
  },
];

/* ── Web Audio Ambient Chime Generator ────────────────────────── */
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playChime(pitch = 523.25) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(pitch, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.04, this.ctx.currentTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.65);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.7);
    } catch {
      // Audio policies
    }
  }

  playWhoosh() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(160, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(520, this.ctx.currentTime + 0.35);

      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.025, this.ctx.currentTime + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.38);
    } catch {
      // Audio policies
    }
  }
}

const soundEngine = new SoundEngine();

export default function InteractiveLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAccelerating, setIsAccelerating] = useState(false);
  const [activeMoodIndex, setActiveMoodIndex] = useState(0);
  const [soundOn, setSoundOn] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5, px: 0, py: 0 });
  const [cardTilt, setCardTilt] = useState({ rx: 0, ry: 0 });
  const [isExiting, setIsExiting] = useState(false);
  const [stardustCount, setStardustCount] = useState(0);

  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const sparklesRef = useRef([]);
  const animFrameRef = useRef(null);
  const accelerationRef = useRef(false);
  const progressRef = useRef(0);

  const currentMood = MOOD_THEMES[activeMoodIndex];

  /* ── Canvas Particle System & Stardust ───────────────────────── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particleCount = Math.min(60, Math.floor(window.innerWidth / 22));
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: -0.2 - Math.random() * 0.45,
      size: Math.random() * 2 + 0.7,
      baseAlpha: Math.random() * 0.55 + 0.2,
      hue: Math.random() > 0.45 ? 'rose' : 'gold',
      pulse: Math.random() * Math.PI * 2,
    }));

    sparklesRef.current = [];

    const addSparkle = (x, y, count = 1, isBurst = false) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = isBurst ? Math.random() * 5.5 + 1.8 : Math.random() * 1.6 + 0.4;
        sparklesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - (isBurst ? 0 : 0.6),
          size: Math.random() * (isBurst ? 3.5 : 2.2) + 1,
          alpha: 1,
          decay: isBurst ? 0.02 + Math.random() * 0.015 : 0.035,
          color: Math.random() > 0.3 ? currentMood.accent : '#fce8b2',
          spin: (Math.random() - 0.5) * 0.2,
          rotation: Math.random() * Math.PI,
        });
      }
      setStardustCount((c) => c + count);
    };

    canvas._addSparkle = addSparkle;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Floating ambient particles
      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.025;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const dynamicAlpha = Math.max(0.1, p.baseAlpha + Math.sin(p.pulse) * 0.22);
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        if (p.hue === 'rose') {
          ctx.fillStyle = `rgba(220, 65, 120, ${dynamicAlpha})`;
          ctx.shadowColor = 'rgba(220, 65, 120, 0.6)';
        } else {
          ctx.fillStyle = `rgba(244, 215, 153, ${dynamicAlpha})`;
          ctx.shadowColor = 'rgba(244, 215, 153, 0.6)';
        }
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      });

      // Interactive sparkles & stardust
      const sparkles = sparklesRef.current;
      for (let i = sparkles.length - 1; i >= 0; i--) {
        const s = sparkles[i];
        s.x += s.vx;
        s.y += s.vy;
        s.alpha -= s.decay;
        s.rotation += s.spin;

        if (s.alpha <= 0) {
          sparkles.splice(i, 1);
          continue;
        }

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
        ctx.globalAlpha = s.alpha;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.restore();
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [currentMood]);

  /* ── Interactive Pointer / Mouse Move ────────────────────────── */
  const handlePointerMove = useCallback((e) => {
    const { clientX, clientY } = e;
    const nx = clientX / window.innerWidth;
    const ny = clientY / window.innerHeight;
    setMousePos({ x: nx, y: ny, px: clientX, py: clientY });

    // 3D Tilt calculation
    const rx = (ny - 0.5) * -16;
    const ry = (nx - 0.5) * 16;
    setCardTilt({ rx, ry });

    // Spawn stardust sparkle trail
    if (canvasRef.current?._addSparkle) {
      canvasRef.current._addSparkle(clientX, clientY, 1, false);
    }
  }, []);

  /* ── Interactive Click / Burst Shockwave ─────────────────────── */
  const handleScreenClick = (e) => {
    if (e.target.closest('button') || e.target.closest('.interactive-clickable')) {
      return;
    }

    const px = e.clientX || window.innerWidth / 2;
    const py = e.clientY || window.innerHeight / 2;

    if (canvasRef.current?._addSparkle) {
      canvasRef.current._addSparkle(px, py, 24, true);
    }

    const pitches = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5];
    const pitch = pitches[Math.floor(Math.random() * pitches.length)];
    soundEngine.playChime(pitch);

    // Instant interactive progress boost when user clicks around
    if (progressRef.current < 98) {
      progressRef.current = Math.min(98, progressRef.current + 3);
      setProgress(Math.floor(progressRef.current));
    }
  };

  /* ── Press & Hold Acceleration ──────────────────────────────── */
  const startAcceleration = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    accelerationRef.current = true;
    setIsAccelerating(true);
    soundEngine.playWhoosh();
  };

  const stopAcceleration = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    accelerationRef.current = false;
    setIsAccelerating(false);
  };

  // Keyboard shortcut: Spacebar accelerates, Escape skips, Enter enters
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        startAcceleration();
      }
      if (e.code === 'Escape') {
        e.preventDefault();
        handleFinish();
      }
      if (e.code === 'Enter' && progressRef.current >= 100) {
        e.preventDefault();
        handleFinish();
      }
    };
    const handleKeyUp = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        stopAcceleration();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  /* ── Smooth Progress Counter Simulation ─────────────────────── */
  useEffect(() => {
    let timer;
    const interval = 28;

    const step = () => {
      if (progressRef.current >= 100) {
        setProgress(100);
        setIsLoaded(true);
        return;
      }

      const increment = accelerationRef.current
        ? 2.8 + Math.random() * 1.6
        : 0.65 + Math.random() * 0.85;

      progressRef.current = Math.min(100, progressRef.current + increment);
      setProgress(Math.floor(progressRef.current));

      timer = setTimeout(step, interval);
    };

    timer = setTimeout(step, interval);

    return () => clearTimeout(timer);
  }, []);

  /* ── Exit / Enter Portfolio Action ───────────────────────────── */
  const handleFinish = () => {
    if (isExiting) return;
    setIsExiting(true);
    soundEngine.playWhoosh();

    setTimeout(() => {
      if (onComplete) onComplete();
    }, 1050);
  };

  /* ── Switch Mood Theme ───────────────────────────────────────── */
  const selectMood = (index, e) => {
    if (e) e.stopPropagation();
    setActiveMoodIndex(index);
    const pitches = [523.25, 659.25, 783.99];
    soundEngine.playChime(pitches[index % pitches.length]);

    if (canvasRef.current?._addSparkle) {
      canvasRef.current._addSparkle(
        window.innerWidth / 2,
        window.innerHeight / 2,
        22,
        true
      );
    }
  };

  const toggleSound = (e) => {
    if (e) e.stopPropagation();
    const next = !soundOn;
    setSoundOn(next);
    soundEngine.enabled = next;
    if (next) soundEngine.playChime(659.25);
  };

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          key="loader-container"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
          }}
          onPointerMove={handlePointerMove}
          onMouseDown={handleScreenClick}
          onTouchStart={handleScreenClick}
          className="interactive-loader-root"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: '#0a0709',
            backgroundImage: `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, ${currentMood.glow} 0%, rgba(10, 7, 9, 0.88) 45%, #080608 100%)`,
            color: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 24px',
            userSelect: 'none',
            overflow: 'hidden',
            cursor: 'crosshair',
          }}
        >
          {/* ── Interactive Particle Canvas ────────────────────── */}
          <canvas
            ref={canvasRef}
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />

          {/* ── High-Fashion Editorial Shimmer Vignette ─────────── */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              zIndex: 2,
              backgroundImage:
                'radial-gradient(circle at 50% 50%, transparent 40%, rgba(5, 3, 5, 0.8) 95%)',
            }}
          />

          {/* ── Subtle Background Model Silhouette Layer ────────── */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              zIndex: 1,
              opacity: 0.07,
              backgroundImage: `url(${heroModelImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 20%',
              filter: 'grayscale(100%) contrast(140%)',
              transform: `scale(1.05) translate(${(mousePos.x - 0.5) * -18}px, ${(mousePos.y - 0.5) * -18}px)`,
              transition: 'transform 0.4s ease-out',
            }}
          />

          {/* ── Subtle Editorial Grid Lines & Corner Marks ──────── */}
          <div
            style={{
              position: 'absolute',
              inset: '16px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              pointerEvents: 'none',
              zIndex: 3,
            }}
          >
            <span style={{ position: 'absolute', top: -7, left: -7, color: 'rgba(255,255,255,0.25)', fontSize: '11px', fontFamily: 'monospace' }}>+</span>
            <span style={{ position: 'absolute', top: -7, right: -7, color: 'rgba(255,255,255,0.25)', fontSize: '11px', fontFamily: 'monospace' }}>+</span>
            <span style={{ position: 'absolute', bottom: -7, left: -7, color: 'rgba(255,255,255,0.25)', fontSize: '11px', fontFamily: 'monospace' }}>+</span>
            <span style={{ position: 'absolute', bottom: -7, right: -7, color: 'rgba(255,255,255,0.25)', fontSize: '11px', fontFamily: 'monospace' }}>+</span>
          </div>

          {/* ── TOP BAR: Editorial Header & Interactive Controls ─ */}
          <header
            style={{
              position: 'relative',
              zIndex: 10,
              width: '100%',
              maxWidth: '1240px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '4px',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            {/* Brand Monogram */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: `1px solid ${currentMood.accent}`,
                  fontSize: '11px',
                  letterSpacing: '1px',
                  fontFamily: "'Bodoni Moda', serif",
                  color: '#ffffff',
                  background: 'rgba(255, 255, 255, 0.04)',
                  boxShadow: `0 0 16px ${currentMood.glow}`,
                }}
              >
                IR
              </span>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    fontFamily: "'Inter', sans-serif",
                    color: '#ffffff',
                  }}
                >
                  LUMINA COUTURE
                </span>
                <span
                  style={{
                    fontSize: '9px',
                    letterSpacing: '2px',
                    color: 'rgba(255, 255, 255, 0.45)',
                    textTransform: 'uppercase',
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Isabella Rose • Melbourne
                </span>
              </div>
            </div>

            {/* Quick Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {/* Sound Toggle */}
              <button
                type="button"
                onClick={toggleSound}
                className="interactive-clickable"
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: soundOn ? '#ffffff' : 'rgba(255,255,255,0.4)',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '10px',
                  letterSpacing: '1.5px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.25s ease',
                }}
                title={soundOn ? 'Mute Chimes' : 'Unmute Chimes'}
              >
                <span>{soundOn ? '♫ AUDIO ON' : '✕ MUTED'}</span>
              </button>

              {/* Instant Skip Intro */}
              <button
                type="button"
                onClick={handleFinish}
                className="interactive-clickable"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#ffffff',
                  padding: '6px 16px',
                  borderRadius: '20px',
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '1.8px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  backdropFilter: 'blur(8px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = currentMood.accent;
                  e.currentTarget.style.boxShadow = `0 0 14px ${currentMood.glow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                SKIP INTRO →
              </button>
            </div>
          </header>

          {/* ── CENTER: 3D Holographic Interactive Monogram Card ── */}
          <div
            style={{
              position: 'relative',
              zIndex: 10,
              perspective: '1200px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 'auto 0',
              maxWidth: '680px',
              width: '100%',
              padding: '0 12px',
            }}
          >
            {/* The 3D Tilting Editorial Card */}
            <motion.div
              className="interactive-loader-card"
              style={{
                width: '100%',
                maxWidth: '520px',
                background: 'linear-gradient(145deg, rgba(28, 20, 26, 0.76) 0%, rgba(14, 10, 13, 0.9) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '24px',
                padding: '34px 28px 28px 28px',
                textAlign: 'center',
                boxShadow: `0 24px 70px rgba(0,0,0,0.65), 0 0 35px ${currentMood.glow}`,
                backdropFilter: 'blur(20px)',
                transformStyle: 'preserve-3d',
                transform: `rotateX(${cardTilt.rx}deg) rotateY(${cardTilt.ry}deg)`,
                transition: 'transform 0.12s ease-out, box-shadow 0.4s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Dynamic Specular Sheen across Card */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  pointerEvents: 'none',
                  background: `linear-gradient(${115 + cardTilt.ry * 2}deg, transparent 20%, rgba(255, 255, 255, 0.07) 48%, rgba(255, 255, 255, 0.14) 50%, transparent 54%)`,
                  mixBlendMode: 'overlay',
                }}
              />

              {/* Monogram Crest with Pulsing Circular Rings */}
              <div
                style={{
                  position: 'relative',
                  width: '88px',
                  height: '88px',
                  margin: '0 auto 18px auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Rotating Dashed Outer Ring */}
                <motion.div
                  animate={{ rotate: isAccelerating ? 720 : 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: isAccelerating ? 3.5 : 18,
                    ease: 'linear',
                  }}
                  style={{
                    position: 'absolute',
                    inset: '-8px',
                    borderRadius: '50%',
                    border: '1px dashed rgba(255, 255, 255, 0.22)',
                  }}
                />

                {/* Glowing Mood Ring */}
                <motion.div
                  animate={{
                    scale: isAccelerating ? [1, 1.15, 1] : [1, 1.05, 1],
                    boxShadow: [
                      `0 0 10px ${currentMood.glow}`,
                      `0 0 28px ${currentMood.glow}`,
                      `0 0 10px ${currentMood.glow}`,
                    ],
                  }}
                  transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    border: `1.5px solid ${currentMood.accent}`,
                  }}
                />

                {/* Center Monogram Initials */}
                <span
                  style={{
                    fontFamily: "'Bodoni Moda', 'Playfair Display', serif",
                    fontSize: '32px',
                    fontStyle: 'italic',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    color: '#ffffff',
                    textShadow: `0 0 18px ${currentMood.glow}`,
                  }}
                >
                  IR
                </span>
              </div>

              {/* Title & Haute Couture Tag */}
              <div style={{ marginBottom: '14px' }}>
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '10px',
                    letterSpacing: '3.5px',
                    textTransform: 'uppercase',
                    color: currentMood.accent,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    marginBottom: '6px',
                  }}
                >
                  ✦ {currentMood.label} EDITION ✦
                </span>
                <h1
                  style={{
                    fontSize: 'clamp(26px, 4.5vw, 40px)',
                    fontFamily: "'Cormorant Garamond', 'Bodoni Moda', serif",
                    fontWeight: 500,
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color: '#ffffff',
                    margin: 0,
                    lineHeight: 1.1,
                  }}
                >
                  ISABELLA ROSE
                </h1>
                <p
                  style={{
                    fontSize: '11px',
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: '2px',
                    color: 'rgba(255, 255, 255, 0.5)',
                    marginTop: '5px',
                    marginBottom: 0,
                    textTransform: 'uppercase',
                  }}
                >
                  Official Portfolio • Melbourne, AU
                </p>
              </div>

              {/* Dynamic Interactive Quote */}
              <motion.div
                key={activeMoodIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                style={{
                  minHeight: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: 'italic',
                    fontSize: '15px',
                    color: 'rgba(255, 255, 255, 0.75)',
                    margin: 0,
                    maxWidth: '420px',
                    lineHeight: 1.4,
                  }}
                >
                  {currentMood.quote}
                </p>
              </motion.div>

              {/* ── Progress Bar & Counter ───────────────────── */}
              <div style={{ width: '100%', marginBottom: '18px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    marginBottom: '8px',
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  <span
                    style={{
                      fontSize: '10px',
                      letterSpacing: '2px',
                      color: isAccelerating ? currentMood.accent : 'rgba(255, 255, 255, 0.5)',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: isAccelerating ? currentMood.accent : '#50e3c2',
                        boxShadow: `0 0 8px ${isAccelerating ? currentMood.accent : '#50e3c2'}`,
                      }}
                    />
                    {isLoaded
                      ? 'EXPERIENCE READY'
                      : isAccelerating
                      ? 'BOOSTING SPEED 4X...'
                      : 'LOADING ASSETS & EDITORIALS'}
                  </span>
                  <span
                    style={{
                      fontSize: '18px',
                      fontFamily: "'Bodoni Moda', serif",
                      fontVariantNumeric: 'tabular-nums',
                      fontWeight: 700,
                      color: '#ffffff',
                      letterSpacing: '1px',
                    }}
                  >
                    {String(progress).padStart(2, '0')}
                    <span style={{ fontSize: '11px', color: currentMood.accent }}>%</span>
                  </span>
                </div>

                {/* Progress Track */}
                <div
                  style={{
                    width: '100%',
                    height: '5px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <motion.div
                    style={{
                      height: '100%',
                      width: `${progress}%`,
                      background: `linear-gradient(90deg, #dc4178 0%, ${currentMood.accent} 70%, #ffffff 100%)`,
                      boxShadow: `0 0 14px ${currentMood.accent}`,
                      borderRadius: '4px',
                      transition: 'width 0.06s linear',
                    }}
                  />
                </div>
              </div>

              {/* ── Interactive CTA or Accelerate Trigger ─────── */}
              {isLoaded ? (
                <motion.button
                  key="enter-btn"
                  initial={{ opacity: 0, scale: 0.92, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleFinish}
                  className="interactive-clickable"
                  style={{
                    width: '100%',
                    padding: '15px 24px',
                    background: `linear-gradient(135deg, ${currentMood.accent} 0%, #b83363 100%)`,
                    border: 'none',
                    borderRadius: '14px',
                    color: '#ffffff',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '13px',
                    fontWeight: 700,
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    boxShadow: `0 8px 30px ${currentMood.glow}, 0 2px 6px rgba(0,0,0,0.4)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    transition: 'box-shadow 0.3s ease',
                  }}
                >
                  <span>ENTER PORTFOLIO</span>
                  <span style={{ fontSize: '15px' }}>✦</span>
                </motion.button>
              ) : (
                <div
                  onMouseDown={startAcceleration}
                  onMouseUp={stopAcceleration}
                  onTouchStart={startAcceleration}
                  onTouchEnd={stopAcceleration}
                  className="interactive-clickable"
                  style={{
                    width: '100%',
                    padding: '12px 18px',
                    background: isAccelerating
                      ? 'rgba(255, 255, 255, 0.12)'
                      : 'rgba(255, 255, 255, 0.04)',
                    border: `1px solid ${
                      isAccelerating ? currentMood.accent : 'rgba(255, 255, 255, 0.12)'
                    }`,
                    borderRadius: '14px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    transition: 'all 0.2s ease',
                    boxShadow: isAccelerating ? `0 0 20px ${currentMood.glow}` : 'none',
                  }}
                  title="Press & hold to charge / speed up loading"
                >
                  <span
                    style={{
                      display: 'inline-block',
                      animation: isAccelerating ? 'spin 0.6s linear infinite' : 'none',
                    }}
                  >
                    ⚡
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '11px',
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      color: isAccelerating ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
                      fontWeight: 600,
                    }}
                  >
                    {isAccelerating ? 'BOOSTING: CHARGING SPEED...' : 'HOLD OR PRESS SPACE TO SPEED UP'}
                  </span>
                </div>
              )}

              {/* Sub hints */}
              <div
                style={{
                  marginTop: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  gap: '8px',
                  fontSize: '9.5px',
                  letterSpacing: '1.5px',
                  color: 'rgba(255, 255, 255, 0.35)',
                  textTransform: 'uppercase',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                <span>✦ CLICK FOR SPARKLES</span>
                <span>•</span>
                <span>MOVE TO TILT 3D ✦</span>
              </div>
            </motion.div>
          </div>

          {/* ── BOTTOM: Interactive Look Mood Selector ─────────── */}
          <footer
            style={{
              position: 'relative',
              zIndex: 10,
              width: '100%',
              maxWidth: '920px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              paddingBottom: '4px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '10px',
                letterSpacing: '2.5px',
                color: 'rgba(255, 255, 255, 0.45)',
                textTransform: 'uppercase',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <span>INTERACTIVE MOOD SELECTOR:</span>
            </div>

            {/* Look Selector Pills */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '10px',
                width: '100%',
              }}
            >
              {MOOD_THEMES.map((mood, idx) => {
                const isActive = activeMoodIndex === idx;
                return (
                  <button
                    key={mood.id}
                    type="button"
                    onClick={(e) => selectMood(idx, e)}
                    className="interactive-clickable"
                    style={{
                      background: isActive
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'rgba(255, 255, 255, 0.03)',
                      border: `1px solid ${
                        isActive ? mood.accent : 'rgba(255, 255, 255, 0.1)'
                      }`,
                      boxShadow: isActive ? `0 0 16px ${mood.glow}` : 'none',
                      borderRadius: '30px',
                      padding: '8px 18px',
                      color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.6)',
                      cursor: 'pointer',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '11px',
                      letterSpacing: '2px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.25s ease',
                      backdropFilter: 'blur(8px)',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = mood.accent;
                        e.currentTarget.style.color = '#ffffff';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
                      }
                    }}
                  >
                    <span
                      style={{
                        fontSize: '9px',
                        fontWeight: 700,
                        color: mood.accent,
                      }}
                    >
                      {mood.num}
                    </span>
                    <span style={{ fontWeight: 600 }}>{mood.label}</span>
                  </button>
                );
              })}
            </div>
          </footer>
        </motion.div>
      ) : (
        /* ── Dramatic Haute Couture Curtain Reveal Panels ────── */
        <motion.div
          key="curtain-split"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            pointerEvents: 'none',
          }}
        >
          {/* Top Panel sliding up */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: '-100%' }}
            transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '50.5%',
              background: '#0a0709',
              borderBottom: `2px solid ${currentMood.accent}`,
              boxShadow: `0 10px 40px ${currentMood.glow}`,
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingBottom: '20px',
            }}
          >
            <span
              style={{
                fontFamily: "'Bodoni Moda', serif",
                fontSize: '18px',
                letterSpacing: '8px',
                color: 'rgba(255,255,255,0.4)',
                textTransform: 'uppercase',
              }}
            >
              LUMINA
            </span>
          </motion.div>

          {/* Bottom Panel sliding down */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: '100%' }}
            transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '50.5%',
              background: '#0a0709',
              borderTop: `2px solid ${currentMood.accent}`,
              boxShadow: `0 -10px 40px ${currentMood.glow}`,
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              paddingTop: '20px',
            }}
          >
            <span
              style={{
                fontFamily: "'Bodoni Moda', serif",
                fontSize: '18px',
                letterSpacing: '8px',
                color: 'rgba(255,255,255,0.4)',
                textTransform: 'uppercase',
              }}
            >
              ISABELLA ROSE
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
