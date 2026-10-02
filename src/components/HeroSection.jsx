import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroModelImg from '../assets/isabella_rose_hero.jpg';

/* ── Navigation Links ────────────────────────────────────────── */
const NAV_ITEMS = [
  { label: 'HOME', href: '#hero' },
  { label: 'ABOUT', href: '#about' },
  { label: 'PORTFOLIO', href: '#portfolio' },
  { label: 'SERVICES', href: '#experience' },
  { label: 'PITCH DECK', href: '#pitch-deck' },
  { label: 'JOURNAL', href: '#journal' },
  { label: 'CONTACT', href: '#contact' },
];

/* ── Statistics Data ─────────────────────────────────────────── */
const STATS = [
  {
    icon: '✦',
    value: '5+',
    l1: 'YEARS',
    l2: 'EXPERIENCE',
  },
  {
    icon: '♡',
    value: '50+',
    l1: 'CAMPAIGNS',
    l2: 'COMPLETED',
  },
  {
    icon: '☆',
    value: '30+',
    l1: 'BRANDS',
    l2: 'COLLABORATED',
  },
  {
    icon: '♛',
    value: '100%',
    l1: 'AUTHENTIC',
    l2: 'REPRESENTATION',
  },
];

/* ── Social SVGs ─────────────────────────────────────────────── */
const IgSVG = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

const TkSVG = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.77 0 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-6.33 6.34 6.34 6.34 0 0 0 12.67 0V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
  </svg>
);

const PinSVG = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);

const MailSVG = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const SOCIAL_ITEMS = [
  { icon: <IgSVG />, label: 'Instagram', href: 'https://instagram.com' },
  { icon: <TkSVG />, label: 'TikTok', href: 'https://tiktok.com' },
  { icon: <PinSVG />, label: 'Pinterest', href: 'https://pinterest.com' },
  { icon: <MailSVG />, label: 'Email', href: '#contact' },
];

/* ── Design Tokens ───────────────────────────────────────────── */
const COLOR_ROSE = '#dc4178';
const COLOR_ROSE_DEEP = '#b83363';
const COLOR_CHARCOAL = '#1a1417';
const COLOR_MUTED = '#4c3741';
const FONT_SERIF = "'Cormorant Garamond', Georgia, serif";
const FONT_SANS = "'Inter', system-ui, -apple-system, sans-serif";

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('HOME');

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        height: '100vh',
        background: 'linear-gradient(135deg, #fbe5ee 0%, #fbd5e3 40%, #f7c0d5 100%)',
        fontFamily: FONT_SANS,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
      }}
      className="hero-viewport-section"
    >
      {/* ── Soft Ambient Glow Orbs ──────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          top: '-120px',
          left: '-80px',
          width: '560px',
          height: '560px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(253,212,225,0.4) 45%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '80px',
          left: '30%',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(247,185,208,0.35) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* ── Model Portrait Layer (Full-Bleed Right Half) ──── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '56%',
          pointerEvents: 'none',
          zIndex: 2,
          overflow: 'hidden',
        }}
        className="hero-model-layer"
      >
        {/* Model Photo with Smooth Masking Edge */}
        <img
          src={heroModelImg}
          alt="Isabella Rose – High Fashion Portrait"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '78% 22%',
            display: 'block',
            maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 15%, black 35%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 15%, black 35%, black 100%)',
          }}
        />

        {/* Luminous Halo Ring behind Model */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            right: '-60px',
            width: '460px',
            height: '460px',
            borderRadius: '50%',
            border: '1.5px solid rgba(255, 255, 255, 0.45)',
            boxShadow: '0 0 35px rgba(255, 255, 255, 0.25)',
            zIndex: 3,
            pointerEvents: 'none',
          }}
          className="hero-halo-ring"
        >
          {/* Sparkle on Ring's Outer Edge */}
          <motion.span
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.75, 1, 0.75],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.8,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              top: '48%',
              right: '-8px',
              color: '#ffffff',
              fontSize: '18px',
              filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.95)) drop-shadow(0 0 14px rgba(220, 65, 120, 0.8))',
            }}
          >
            
          </motion.span>
        </div>

        {/* Floating Sparkles */}
        <motion.span
          animate={{ opacity: [0.35, 0.95, 0.35], scale: [0.8, 1.2, 0.8] }}
          transition={{ repeat: Infinity, duration: 3.2, delay: 0.5, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '16%',
            right: '26%',
            color: '#ffffff',
            fontSize: '13px',
            zIndex: 4,
            filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.8))',
          }}
        >
          
        </motion.span>
      </div>

      {/* ══════════════════════════════════════════════════════════
          1. HEADER / NAVBAR (Frosted Glass Pill)
      ══════════════════════════════════════════════════════════ */}
      <header
        style={{
          position: 'relative',
          zIndex: 50,
          width: '100%',
          maxWidth: '1360px',
          margin: '20px auto 12px',
          padding: '0 28px',
          boxSizing: 'border-box',
          flex: '0 0 auto',
          flexShrink: 0,
          overflow: 'visible',
        }}
      >
        <motion.nav
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: '62px',
            padding: '10px 24px',
            borderRadius: '30px',
            background: 'rgba(255, 255, 255, 0.65)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255, 255, 255, 0.85)',
            boxShadow: '0 8px 32px rgba(220, 65, 120, 0.08)',
            overflow: 'visible',
            boxSizing: 'border-box',
          }}
        >
          {/* Brand Logo with Project Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <img
              src="/lmc_logo.png"
              alt="LMC Logo"
              style={{
                height: '42px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span
                style={{
                  fontFamily: FONT_SERIF,
                  fontWeight: 700,
                  fontSize: '16px',
                  letterSpacing: '0.18em',
                  color: COLOR_ROSE_DEEP,
                }}
              >
                LMC
              </span>
              <span
                style={{
                  fontFamily: FONT_SANS,
                  fontWeight: 600,
                  fontSize: '7.5px',
                  letterSpacing: '0.26em',
                  color: COLOR_ROSE,
                  marginTop: '3px',
                }}
              >
                MODEL AGENCY
              </span>
            </div>
          </a>

          {/* Navigation Links (Desktop) */}
          <ul
            className="hero-nav-desktop"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '30px',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeNav === item.label;
              return (
                <li key={item.label} style={{ position: 'relative' }}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveNav(item.label);
                      scrollTo(item.href);
                    }}
                    style={{
                      fontFamily: FONT_SANS,
                      fontWeight: 600,
                      fontSize: '11px',
                      letterSpacing: '0.18em',
                      textDecoration: 'none',
                      color: isActive ? COLOR_ROSE : '#43313a',
                      transition: 'color 0.2s ease',
                      padding: '4px 0',
                      display: 'inline-block',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = COLOR_ROSE;
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = '#43313a';
                    }}
                  >
                    {item.label}
                  </a>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavDot"
                      style={{
                        position: 'absolute',
                        bottom: '-5px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: COLOR_ROSE,
                        boxShadow: '0 0 6px rgba(220,65,120,0.6)',
                        display: 'block',
                      }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Action Buttons (Right) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
            {/* Desktop Quick CTA Link */}
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Book Isabella / Contact"
              className="hero-nav-cta-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, #e44d80 0%, #cb3266 100%)',
                color: '#ffffff',
                fontFamily: FONT_SANS,
                fontSize: '10.5px',
                fontWeight: 700,
                letterSpacing: '0.14em',
                padding: '9px 18px',
                borderRadius: '20px',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(220, 65, 120, 0.3)',
                cursor: 'pointer',
              }}
            >
              <span>BOOK NOW</span>
              <span style={{ fontSize: '11px' }}>→</span>
            </motion.a>

            {/* Solid Hot-Pink Hamburger Button - ONLY ON SM SCREEN */}
            <motion.button
              className="hero-mobile-menu-btn"
              whileHover={{ scale: 1.08, boxShadow: '0 6px 20px rgba(220, 65, 120, 0.5)' }}
              whileTap={{ scale: 0.94 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: 'none',
                background: 'linear-gradient(135deg, #e44d80 0%, #cb3266 100%)',
                color: '#ffffff',
                cursor: 'pointer',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '3.5px',
                boxShadow: '0 4px 18px rgba(220, 65, 120, 0.42)',
              }}
            >
              <span style={{ width: '16px', height: '2px', background: '#fff', borderRadius: '2px', display: 'block' }} />
              <span style={{ width: '16px', height: '2px', background: '#fff', borderRadius: '2px', display: 'block' }} />
              <span style={{ width: '16px', height: '2px', background: '#fff', borderRadius: '2px', display: 'block' }} />
            </motion.button>
          </div>
        </motion.nav>
      </header>

      {/* ══════════════════════════════════════════════════════════
          2. HERO MAIN CONTENT (Follow Me + Name + Bio + CTAs)
      ══════════════════════════════════════════════════════════ */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '10px 0 20px',
          flex: '1 1 auto',
        }}
        className="hero-main-container"
      >
        {/* Vertical Follow Me Sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '14px',
            padding: '0 24px 0 36px',
            justifyContent: 'center',
            alignSelf: 'center',
          }}
          className="hero-social-sidebar"
        >
          <div style={{ width: '1px', height: '36px', background: COLOR_ROSE, opacity: 0.35 }} />
          <span
            style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              fontSize: '8.5px',
              letterSpacing: '0.28em',
              fontWeight: 700,
              color: COLOR_ROSE,
              whiteSpace: 'nowrap',
            }}
          >
            FOLLOW ME
          </span>
          <div style={{ width: '1px', height: '24px', background: COLOR_ROSE, opacity: 0.35 }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
            {SOCIAL_ITEMS.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                aria-label={item.label}
                whileHover={{ scale: 1.25, color: COLOR_ROSE }}
                style={{
                  color: '#b6597a',
                  display: 'flex',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease',
                }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>

          <div style={{ width: '1px', height: '36px', background: COLOR_ROSE, opacity: 0.35 }} />
        </motion.aside>

        {/* Left Text Content */}
        <div
          style={{
            maxWidth: '540px',
            paddingRight: '20px',
            paddingLeft: '10px',
          }}
          className="hero-text-content"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '14px',
            }}
          >
            <span
              style={{
                fontFamily: FONT_SANS,
                fontSize: '10.5px',
                fontWeight: 700,
                letterSpacing: '0.26em',
                color: COLOR_ROSE,
              }}
            >
              PROFESSIONAL MODEL
            </span>
            <div
              style={{
                height: '1px',
                width: '44px',
                background: COLOR_ROSE,
                opacity: 0.5,
              }}
            />
            <span style={{ color: COLOR_ROSE, fontSize: '11px' }}>✦</span>
          </motion.div>

          {/* Editorial Name Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              margin: 0,
              lineHeight: 0.90,
              fontFamily: FONT_SERIF,
            }}
          >
            <span
              style={{
                display: 'block',
                fontWeight: 700,
                fontSize: 'clamp(62px, 8.2vw, 102px)',
                color: COLOR_CHARCOAL,
                letterSpacing: '-0.02em',
              }}
            >
              ISABELLA
            </span>
            <span
              style={{
                display: 'block',
                fontWeight: 700,
                fontSize: 'clamp(62px, 8.2vw, 102px)',
                color: COLOR_ROSE,
                letterSpacing: '-0.02em',
                marginTop: '6px',
              }}
            >
              ROSE
            </span>
          </motion.h1>

          {/* Bio Statement */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: FONT_SANS,
              fontSize: '15px',
              lineHeight: 1.65,
              color: COLOR_MUTED,
              maxWidth: '380px',
              margin: '20px 0 0',
            }}
          >
            Melbourne-based model championing{' '}
            <em
              style={{
                fontFamily: FONT_SERIF,
                fontStyle: 'italic',
                fontWeight: 600,
                fontSize: '18px',
                color: COLOR_ROSE,
              }}
            >
              authentic representation
            </em>{' '}
            in fashion.
          </motion.p>

          {/* Location Tag */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              marginTop: '16px',
            }}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke={COLOR_ROSE}
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span
              style={{
                fontFamily: FONT_SANS,
                fontSize: '9.5px',
                letterSpacing: '0.22em',
                fontWeight: 700,
                color: COLOR_ROSE,
              }}
            >
              MELBOURNE, AUSTRALIA
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="hero-cta-group"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              marginTop: '26px',
            }}
          >
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 10px 30px rgba(220, 65, 120, 0.5)' }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollTo('#portfolio')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, #e44d80 0%, #cb3266 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '9999px',
                padding: '13px 28px',
                fontFamily: FONT_SANS,
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.17em',
                cursor: 'pointer',
                boxShadow: '0 6px 22px rgba(220, 65, 120, 0.38)',
                transition: 'all 0.25s ease',
              }}
            >
              VIEW PORTFOLIO
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.04,
                background: 'rgba(255, 255, 255, 0.65)',
                borderColor: COLOR_ROSE,
                color: COLOR_ROSE,
              }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollTo('#contact')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.35)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                color: COLOR_ROSE_DEEP,
                border: '1.5px solid rgba(220, 65, 120, 0.36)',
                borderRadius: '9999px',
                padding: '12px 26px',
                fontFamily: FONT_SANS,
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.17em',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              WORK WITH ME
              <span style={{ fontSize: '13px', color: COLOR_ROSE }}>✦</span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          3. BOTTOM SECTION: STATS CAPSULE + SCROLL TO EXPLORE
      ══════════════════════════════════════════════════════════ */}
      <div
        style={{
          position: 'relative',
          zIndex: 30,
          width: '100%',
          padding: '0 24px 14px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        {/* Unified Frosted Glass Stats Capsule */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: '100%',
            maxWidth: '1180px',
            borderRadius: '24px',
            background: 'rgba(255, 255, 255, 0.46)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255, 255, 255, 0.7)',
            boxShadow: '0 10px 35px rgba(220, 65, 120, 0.08), 0 1px 2px rgba(255, 255, 255, 0.8) inset',
            padding: '14px 20px',
          }}
          className="hero-stats-capsule"
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              alignItems: 'center',
            }}
            className="hero-stats-grid"
          >
            {STATS.map(({ icon, value, l1, l2 }, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.95 + index * 0.08 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '6px 20px',
                  borderRight: index < STATS.length - 1 ? '1px solid rgba(220, 65, 120, 0.14)' : 'none',
                }}
              >
                {/* Circular Icon Badge */}
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(247, 175, 203, 0.45) 0%, rgba(220, 65, 120, 0.22) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.65)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    color: COLOR_ROSE,
                    flexShrink: 0,
                    boxShadow: '0 2px 10px rgba(220, 65, 120, 0.1)',
                  }}
                >
                  {icon}
                </div>

                {/* Number & Labels */}
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.25 }}>
                  <span
                    style={{
                      fontFamily: FONT_SANS,
                      fontSize: '23px',
                      fontWeight: 800,
                      color: COLOR_CHARCOAL,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {value}
                  </span>
                  <span
                    style={{
                      fontFamily: FONT_SANS,
                      fontSize: '8px',
                      letterSpacing: '0.17em',
                      fontWeight: 700,
                      color: '#6e4f5d',
                      lineHeight: 1.45,
                      marginTop: '1px',
                    }}
                  >
                    {l1}<br />{l2}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll to Explore Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            cursor: 'pointer',
            paddingTop: '2px',
          }}
          onClick={() => scrollTo('#portfolio')}
        >
          <span
            style={{
              fontFamily: FONT_SANS,
              fontSize: '8px',
              letterSpacing: '0.26em',
              fontWeight: 700,
              color: COLOR_ROSE,
              textTransform: 'uppercase',
            }}
          >
            SCROLL TO EXPLORE
          </span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              border: `1.2px solid rgba(220, 65, 120, 0.5)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: COLOR_ROSE,
              fontSize: '11px',
              background: 'rgba(255, 255, 255, 0.3)',
            }}
          >
            ↓
          </motion.div>
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          4. SLIDE-OUT MOBILE / TABLET OVERLAY MENU
      ══════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(30, 10, 20, 0.45)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                zIndex: 90,
              }}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '100%',
                maxWidth: '380px',
                background: 'linear-gradient(175deg, #fceaf0 0%, #fbd8e4 50%, #f7c5d7 100%)',
                boxShadow: '-10px 0 40px rgba(220, 65, 120, 0.2)',
                zIndex: 100,
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxSizing: 'border-box',
              }}
            >
              {/* Drawer Top */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '36px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img
                      src="/lmc_logo.png"
                      alt="LMC Logo"
                      style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
                    />
                    <div>
                      <div style={{ fontFamily: FONT_SERIF, fontWeight: 700, fontSize: '16px', letterSpacing: '0.18em', color: COLOR_ROSE_DEEP }}>
                        LMC
                      </div>
                      <div style={{ fontFamily: FONT_SANS, fontWeight: 600, fontSize: '7.5px', letterSpacing: '0.28em', color: COLOR_ROSE }}>
                        MODEL AGENCY
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      border: '1px solid rgba(220, 65, 120, 0.3)',
                      background: 'rgba(255, 255, 255, 0.5)',
                      color: COLOR_ROSE,
                      fontSize: '18px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    ✕
                  </button>
                </div>

                {/* Nav Links */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {NAV_ITEMS.map((item, idx) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveNav(item.label);
                          scrollTo(item.href);
                        }}
                        style={{
                          fontFamily: FONT_SERIF,
                          fontSize: '24px',
                          fontWeight: 700,
                          textDecoration: 'none',
                          color: activeNav === item.label ? COLOR_ROSE : COLOR_CHARCOAL,
                          letterSpacing: '0.04em',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '6px 0',
                          borderBottom: '1px solid rgba(220, 65, 120, 0.12)',
                        }}
                      >
                        <span>{item.label}</span>
                        <span style={{ fontSize: '13px', color: COLOR_ROSE }}>↗</span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Drawer Bottom */}
              <div>
                <button
                  onClick={() => scrollTo('#contact')}
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #e44d80 0%, #cb3266 100%)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '14px 0',
                    fontFamily: FONT_SANS,
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.18em',
                    cursor: 'pointer',
                    boxShadow: '0 6px 20px rgba(220, 65, 120, 0.35)',
                    marginBottom: '20px',
                  }}
                >
                  WORK WITH ISABELLA ✦
                </button>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '22px' }}>
                  {SOCIAL_ITEMS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      style={{ color: COLOR_ROSE_DEEP, fontSize: '18px' }}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Responsive CSS Rules ──────────────────────────────── */}
      <style>{`
        .hero-mobile-menu-btn {
          display: none !important;
        }
        @media (max-width: 992px) {
          .hero-mobile-menu-btn {
            display: flex !important;
          }
          .hero-nav-cta-btn {
            display: none !important;
          }
          .hero-viewport-section {
            height: auto !important;
            min-height: 100vh !important;
          }
          .hero-nav-desktop {
            display: none !important;
          }
          .hero-model-layer {
            position: relative !important;
            width: 100% !important;
            height: 480px !important;
            order: 2;
          }
          .hero-main-container {
            flex-direction: column !important;
          }
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
          .hero-stats-grid > div {
            border-right: none !important;
          }
          .hero-halo-ring {
            width: 320px !important;
            height: 320px !important;
            right: -20px !important;
          }
        }

        @media (max-width: 640px) {
          .hero-social-sidebar {
            display: none !important;
          }
          .hero-text-content {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .hero-stats-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-stats-capsule {
            padding: 12px 14px !important;
          }
        }
      `}</style>
    </section>
  );
}
