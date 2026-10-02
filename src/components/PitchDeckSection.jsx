import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Design Tokens ─────────────────────────────────────────────── */
const PINK       = '#e05a8a';
const DARK       = '#1a1a1a';
const FONT_SERIF = "'Cormorant Garamond', Georgia, serif";
const FONT_SANS  = "'Inter', system-ui, sans-serif";

/* ── Pitch Deck Features Mapping to Slides ──────────────────────── */
const DECK_FEATURES = [
  { label: 'PROFESSIONAL INTRODUCTION', slideIndex: 1 },
  { label: 'MODEL PROFILE & KEY ATTRIBUTES', slideIndex: 2 },
  { label: 'PORTFOLIO HIGHLIGHTS', slideIndex: 3 },
  { label: 'PREVIOUS EXPERIENCE', slideIndex: 4 },
  { label: 'BRAND PROPOSITION', slideIndex: 5 },
  { label: 'COLLABORATION OPPORTUNITIES', slideIndex: 5 },
];

/* ── Slides Data ────────────────────────────────────────────────── */
const SLIDES = [
  /* Slide 0: Cover (Exact match to original screenshot) */
  {
    id: 0,
    tag: 'COVER · 01 / 06',
    type: 'cover',
    titleMain: 'Rhiannon',
    titleSub: 'Ward',
    subtitle: 'MODEL · CREATIVE · PROFESSIONAL',
    badge: 'TALENT DECK',
    image: '/muse_suit_model.png',
    imageAlt: 'Rhiannon Ward Portrait',
  },
  /* Slide 1: Professional Introduction (Booklet Spread) */
  {
    id: 1,
    tag: 'INTRO · 02 / 06',
    type: 'spread',
    leftImage: '/muse_booklet_page.png',
    leftAlt: 'Talent Deck Intro',
    experienceItems: ['Campaigns', 'Editorials', 'Runway', 'Commercial', 'Collaborations', 'Events'],
    heading: "Let's Create",
    headingAccent: 'Something Iconic',
    desc: 'Open to new opportunities and exciting collaborations with brands, agencies and creatives worldwide.',
  },
  /* Slide 2: Model Profile & Attributes */
  {
    id: 2,
    tag: 'PROFILE · 03 / 06',
    type: 'profile',
    image: '/04_portrait_closeup.png',
    imageAlt: 'Model Portrait Closeup',
    title: 'Model Attributes',
    specs: [
      { label: 'HEIGHT', value: "5'10\" / 178 cm" },
      { label: 'BUST', value: '34" / 86 cm' },
      { label: 'WAIST', value: '24" / 61 cm' },
      { label: 'HIPS', value: '35" / 89 cm' },
      { label: 'HAIR', value: 'Brunette' },
      { label: 'EYES', value: 'Hazel Green' },
      { label: 'DRESS', value: 'US 2-4 / UK 6-8' },
      { label: 'SHOE', value: '8.5 US / 39 EU' },
    ],
    note: 'International representation: Paris, Milan, New York & London.',
  },
  /* Slide 3: Portfolio Highlights */
  {
    id: 3,
    tag: 'PORTFOLIO · 04 / 06',
    type: 'portfolio',
    image: '/02_fashion_portrait.png',
    imageAlt: 'Portfolio Editorial',
    title: 'Signature Work',
    highlights: [
      { title: 'Vogue Scandinavia', subtitle: 'Main Editorial Feature (Fall 2025)' },
      { title: 'Milan Fashion Week SS26', subtitle: 'Runway Debut & Designer Opening' },
      { title: 'Chanel Beauty', subtitle: 'Global Digital Spring Campaign' },
      { title: "Harper's Bazaar", subtitle: 'High Fashion Story & Cover Feature' },
    ],
  },
  /* Slide 4: Previous Experience */
  {
    id: 4,
    tag: 'EXPERIENCE · 05 / 06',
    type: 'experience',
    image: '/08_runway.png',
    imageAlt: 'Runway Showcase',
    title: 'Runway & Campaigns',
    items: [
      { num: '120+', text: 'Global production days completed with top creative agencies' },
      { num: '4', text: 'Major fashion capitals: Paris, Milan, New York & London' },
      { num: '40+', text: 'Published editorial spreads in premier luxury magazines' },
      { num: '100%', text: 'Commitment to poise, punctuality, and creative vision' },
    ],
  },
  /* Slide 5: Collaboration Opportunities */
  {
    id: 5,
    tag: 'CONNECT · 06 / 06',
    type: 'collaborate',
    image: '/03_editorial_dress.png',
    imageAlt: 'Collaboration Opportunities',
    title: 'Brand Partnership',
    heading: "Let's Collaborate",
    points: [
      'Exclusive Brand Ambassadorships',
      'High-Fashion & Commercial Campaigns',
      'Editorial Spreads & Lookbooks',
      'Runway & Fashion Week Showcases',
    ],
    email: 'booking@luminamodels.com',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function PitchDeckSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // Keyboard navigation for modal & deck
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape' && isModalOpen) setIsModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, isModalOpen]);

  // Active slide & peek slide underneath
  const activeSlide = SLIDES[currentSlide];
  const nextSlide = SLIDES[(currentSlide + 1) % SLIDES.length];

  return (
    <section
      id="pitch-deck"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#F8D4D6',
        fontFamily: FONT_SANS,
        padding: '70px 48px 90px',
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* ═══════════ UPPER RIGHT BACKGROUND MODEL IMAGE ═══════════ */}
      <div
        className="pitch-bg-model"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '58%',
          maxWidth: '840px',
          height: '560px',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <img
          src="/muse_bg_model.png"
          alt="Isabella Rose – Muse"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'right top',
          }}
        />
        {/* Soft edge blend gradient on left */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, #F8D4D6 0%, rgba(248, 212, 214, 0.75) 20%, transparent 50%)',
          }}
        />
        {/* Soft edge blend gradient on bottom */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, #F8D4D6 0%, rgba(248, 212, 214, 0.8) 25%, transparent 60%)',
          }}
        />
      </div>

      {/* ════════════════ MAIN CONTENT CONTAINER ════════════════ */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1280px',
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '40px',
        }}
      >
        {/* ── LEFT COLUMN: Text & Interactive Deck Features ── */}
        <div
          className="pitch-left-col"
          style={{
            flex: '0 0 42%',
            maxWidth: '480px',
          }}
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
                letterSpacing: '0.24em',
                color: PINK,
              }}
            >
              PITCH DECK
            </span>
            <div style={{ height: '1px', width: '48px', background: PINK, opacity: 0.6 }} />
            <span style={{ color: PINK, fontSize: '11px' }}>✦</span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              style={{
                fontFamily: FONT_SERIF,
                margin: 0,
                lineHeight: 1.04,
                fontSize: 'clamp(46px, 5.2vw, 70px)',
                fontWeight: 700,
                color: DARK,
                letterSpacing: '-0.01em',
              }}
            >
              Meet
            </h2>
            <h2
              style={{
                fontFamily: FONT_SERIF,
                margin: '2px 0 0',
                lineHeight: 1.04,
                fontSize: 'clamp(46px, 5.2vw, 70px)',
                fontWeight: 700,
                fontStyle: 'italic',
                color: PINK,
                letterSpacing: '-0.01em',
              }}
            >
              Your Next Muse
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2 }}
            style={{
              fontFamily: FONT_SANS,
              fontSize: '14px',
              lineHeight: 1.68,
              color: '#4a303e',
              margin: '20px 0 24px',
              maxWidth: '420px',
            }}
          >
            A passionate model with a strong presence, versatility and a drive to create meaningful impact through fashion.
          </motion.p>

          {/* 6 Interactive Bullet Points */}
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 28px 0',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            {DECK_FEATURES.map((item) => {
              const isActive = currentSlide === item.slideIndex;
              return (
                <motion.li
                  key={item.label}
                  variants={itemVariants}
                  onClick={() => {
                    setDirection(item.slideIndex >= currentSlide ? 1 : -1);
                    setCurrentSlide(item.slideIndex);
                  }}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '8px 14px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    background: isActive ? 'rgba(224, 90, 138, 0.14)' : 'transparent',
                    borderLeft: isActive ? `3px solid ${PINK}` : '3px solid transparent',
                    boxShadow: isActive ? '0 2px 8px rgba(224, 90, 138, 0.12)' : 'none',
                    transition: 'all 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                >
                  <motion.span
                    animate={{ rotate: isActive ? 90 : 0, scale: isActive ? 1.2 : 1 }}
                    style={{
                      color: PINK,
                      fontSize: '11px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    ✦
                  </motion.span>
                  <span
                    style={{
                      fontFamily: FONT_SANS,
                      fontSize: '10.5px',
                      fontWeight: isActive ? 800 : 700,
                      letterSpacing: '0.14em',
                      color: isActive ? '#a31d4d' : '#38202c',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {item.label}
                  </span>
                  {isActive && (
                    <span
                      style={{
                        marginLeft: 'auto',
                        fontSize: '12px',
                        color: PINK,
                        fontWeight: 800,
                      }}
                    >
                      →
                    </span>
                  )}
                </motion.li>
              );
            })}
          </motion.ul>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.4 }}
          >
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.03, boxShadow: '0 8px 26px rgba(216, 73, 125, 0.45)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: 'linear-gradient(135deg, #e46092 0%, #d8497d 100%)',
                color: '#ffffff',
                fontFamily: FONT_SANS,
                fontSize: '10.5px',
                fontWeight: 800,
                letterSpacing: '0.18em',
                padding: '14px 30px',
                borderRadius: '12px',
                border: 'none',
                boxShadow: '0 6px 20px rgba(216, 73, 125, 0.35)',
                cursor: 'pointer',
                width: 'fit-content',
              }}
            >
              <span style={{ fontSize: '12px' }}>✦</span>
              <span>VIEW TALENT DECK</span>
              <span style={{ fontSize: '13px', transform: 'translateY(-1px)' }}>→</span>
            </motion.button>
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN: Interactive 3D Card Stack Presentation ── */}
        <div
          className="pitch-right-col"
          style={{
            flex: '0 0 56%',
            position: 'relative',
            minHeight: '520px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Card Stack Interactive Frame */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '640px',
              minHeight: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* ── Layer 2: Underneath Peeking Card (Next Slide Preview) ── */}
            <motion.div
              key={`underneath-${nextSlide.id}`}
              initial={{ opacity: 0.75, rotate: -4, scale: 0.95 }}
              animate={{ opacity: 0.9, rotate: -3, scale: 0.97, y: 14, x: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'absolute',
                width: '92%',
                maxWidth: '620px',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.12), 0 4px 14px rgba(0, 0, 0, 0.06)',
                background: '#ffffff',
                display: 'flex',
                zIndex: 2,
                cursor: 'pointer',
                userSelect: 'none',
              }}
              onClick={handleNext}
              title="Click to view next slide"
            >
              {renderSlideContent(nextSlide)}
            </motion.div>

            {/* ── Layer 1: Foreground Active Card (Interactive) ── */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`active-${activeSlide.id}`}
                custom={direction}
                variants={{
                  enter: (dir) => ({
                    opacity: 0,
                    x: dir > 0 ? 40 : -40,
                    scale: 0.94,
                    rotate: dir > 0 ? 3 : -3,
                  }),
                  center: {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    rotate: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  },
                  exit: (dir) => ({
                    opacity: 0,
                    x: dir > 0 ? -60 : 60,
                    scale: 0.92,
                    rotate: dir > 0 ? -4 : 4,
                    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                whileHover={{ y: -6, scale: 1.01, boxShadow: '0 30px 70px rgba(0, 0, 0, 0.22), 0 10px 28px rgba(216, 73, 125, 0.18)' }}
                whileTap={{ scale: 0.99 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, { offset }) => {
                  if (offset.x < -40) handleNext();
                  else if (offset.x > 40) handlePrev();
                }}
                onClick={handleNext}
                style={{
                  position: 'relative',
                  width: '90%',
                  maxWidth: '560px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.2), 0 8px 24px rgba(216, 73, 125, 0.15)',
                  display: 'flex',
                  zIndex: 5,
                  background: '#fcf2f5',
                  cursor: 'pointer',
                  userSelect: 'none',
                }}
              >
                {renderSlideContent(activeSlide)}

                {/* Micro-hint on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    background: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(8px)',
                    color: PINK,
                    fontFamily: FONT_SANS,
                    fontSize: '8.5px',
                    fontWeight: 800,
                    letterSpacing: '0.14em',
                    padding: '5px 10px',
                    borderRadius: '20px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    pointerEvents: 'none',
                  }}
                >
                  <span>CLICK TO FLIP</span>
                  <span style={{ fontSize: '10px' }}>↻</span>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Luxury Navigation Bar & Counter ── */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              marginTop: '28px',
              zIndex: 10,
              position: 'relative',
            }}
          >
            {/* Prev Arrow */}
            <motion.button
              whileHover={{ scale: 1.12, backgroundColor: '#ffffff', boxShadow: '0 4px 16px rgba(216, 73, 125, 0.25)' }}
              whileTap={{ scale: 0.92 }}
              onClick={handlePrev}
              aria-label="Previous Slide"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                border: '1px solid rgba(224, 90, 138, 0.35)',
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(8px)',
                color: PINK,
                fontSize: '15px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                transition: 'all 0.2s ease',
              }}
            >
              ←
            </motion.button>

            {/* Slide Capsule with Dots */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: 'rgba(255, 255, 255, 0.88)',
                backdropFilter: 'blur(10px)',
                padding: '8px 18px',
                borderRadius: '30px',
                border: '1px solid rgba(224, 90, 138, 0.25)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
              }}
            >
              <span
                style={{
                  fontFamily: FONT_SANS,
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  color: PINK,
                }}
              >
                {`0${currentSlide + 1} / 0${SLIDES.length}`}
              </span>

              {/* Dots */}
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > currentSlide ? 1 : -1);
                      setCurrentSlide(i);
                    }}
                    aria-label={`Jump to slide ${i + 1}`}
                    style={{
                      width: currentSlide === i ? '20px' : '7px',
                      height: '7px',
                      borderRadius: '4px',
                      background: currentSlide === i ? PINK : 'rgba(224, 90, 138, 0.25)',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Next Arrow */}
            <motion.button
              whileHover={{ scale: 1.12, backgroundColor: '#ffffff', boxShadow: '0 4px 16px rgba(216, 73, 125, 0.25)' }}
              whileTap={{ scale: 0.92 }}
              onClick={handleNext}
              aria-label="Next Slide"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                border: '1px solid rgba(224, 90, 138, 0.35)',
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(8px)',
                color: PINK,
                fontSize: '15px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                transition: 'all 0.2s ease',
              }}
            >
              →
            </motion.button>
          </div>
        </div>
      </div>

      {/* ══════════════ FULLSCREEN TALENT DECK MODAL ══════════════ */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background: 'rgba(20, 10, 16, 0.88)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              boxSizing: 'border-box',
            }}
            onClick={() => setIsModalOpen(false)}
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '900px',
                background: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 30px 80px rgba(0, 0, 0, 0.5), 0 10px 30px rgba(216, 73, 125, 0.25)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Modal Top Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 24px',
                  background: 'linear-gradient(135deg, #fcf2f5 0%, #fae6ed 100%)',
                  borderBottom: '1px solid rgba(224, 90, 138, 0.15)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: PINK, fontSize: '13px' }}>✦</span>
                  <span
                    style={{
                      fontFamily: FONT_SANS,
                      fontSize: '11px',
                      fontWeight: 800,
                      letterSpacing: '0.2em',
                      color: PINK,
                    }}
                  >
                    TALENT DECK INTERACTIVE VIEWER
                  </span>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '22px',
                    color: '#664455',
                    cursor: 'pointer',
                    padding: '4px 8px',
                    lineHeight: 1,
                  }}
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              {/* Modal Slide Body */}
              <div
                style={{
                  position: 'relative',
                  minHeight: '440px',
                  display: 'flex',
                  alignItems: 'stretch',
                  background: '#fcf2f5',
                }}
              >
                {renderSlideContent(activeSlide)}
              </div>

              {/* Modal Bottom Controls */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 24px',
                  background: '#ffffff',
                  borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                  flexWrap: 'wrap',
                  gap: '14px',
                }}
              >
                {/* Thumbnails */}
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  {SLIDES.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={() => setCurrentSlide(idx)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '6px',
                        border: currentSlide === idx ? `2px solid ${PINK}` : '1px solid rgba(0,0,0,0.1)',
                        background: currentSlide === idx ? 'rgba(224, 90, 138, 0.1)' : '#ffffff',
                        color: currentSlide === idx ? PINK : '#664455',
                        fontFamily: FONT_SANS,
                        fontSize: '9.5px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {`0${idx + 1}`}
                    </button>
                  ))}
                </div>

                {/* Direct Booking CTA */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <a
                    href="#contact"
                    onClick={() => setIsModalOpen(false)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'linear-gradient(135deg, #e46092 0%, #d8497d 100%)',
                      color: '#ffffff',
                      fontFamily: FONT_SANS,
                      fontSize: '10px',
                      fontWeight: 800,
                      letterSpacing: '0.14em',
                      padding: '10px 20px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(216, 73, 125, 0.3)',
                    }}
                  >
                    <span>ENQUIRE FOR BOOKING</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1080px) {
          #pitch-deck > div {
            flex-direction: column !important;
            gap: 48px !important;
          }
          .pitch-left-col {
            flex: 1 1 100% !important;
            max-width: 100% !important;
          }
          .pitch-right-col {
            flex: 1 1 100% !important;
            width: 100% !important;
            min-height: 440px !important;
          }
          .pitch-bg-model {
            width: 80% !important;
            opacity: 0.65;
          }
        }
        @media (max-width: 640px) {
          .pitch-right-col {
            min-height: 340px !important;
            transform: scale(0.92);
            transform-origin: center top;
          }
          .pitch-bg-model {
            width: 100% !important;
            opacity: 0.35;
          }
        }
      `}</style>
    </section>
  );
}

/* ── Render Individual Slide Content Helper ──────────────────────── */
function renderSlideContent(slide) {
  if (!slide) return null;

  switch (slide.type) {
    /* ── Slide 0: Cover / Title Deck (Identical to original) ── */
    case 'cover':
      return (
        <div style={{ display: 'flex', width: '100%', minHeight: '300px' }}>
          {/* Left Page: Title & Branding */}
          <div
            style={{
              flex: '1 1 50%',
              background: 'linear-gradient(135deg, #fcf2f5 0%, #fae6ed 100%)',
              padding: '36px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: 'inset -8px 0 16px -8px rgba(0,0,0,0.08)',
              position: 'relative',
            }}
          >
            <span style={{ color: PINK, fontSize: '13px', marginBottom: '8px' }}>✦</span>
            <span
              style={{
                fontFamily: FONT_SANS,
                fontSize: '9px',
                fontWeight: 800,
                letterSpacing: '0.22em',
                color: PINK,
                marginBottom: '10px',
              }}
            >
              {slide.badge}
            </span>
            <h3
              style={{
                fontFamily: FONT_SERIF,
                margin: 0,
                fontSize: '34px',
                fontWeight: 700,
                color: DARK,
                lineHeight: 1,
                letterSpacing: '-0.01em',
              }}
            >
              {slide.titleMain}
            </h3>
            <h3
              style={{
                fontFamily: FONT_SERIF,
                margin: '2px 0 16px',
                fontSize: '34px',
                fontWeight: 700,
                fontStyle: 'italic',
                color: PINK,
                lineHeight: 1,
                letterSpacing: '-0.01em',
              }}
            >
              {slide.titleSub}
            </h3>
            <span
              style={{
                fontFamily: FONT_SANS,
                fontSize: '7.5px',
                fontWeight: 700,
                letterSpacing: '0.22em',
                color: '#664455',
              }}
            >
              {slide.subtitle}
            </span>
          </div>

          {/* Right Page: Model in Pink Suit Photo */}
          <div
            style={{
              flex: '1 1 50%',
              position: 'relative',
              minHeight: '260px',
              background: '#ffffff',
            }}
          >
            <img
              src={slide.image}
              alt={slide.imageAlt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </div>
      );

    /* ── Slide 1: Open Booklet Spread ── */
    case 'spread':
      return (
        <div style={{ display: 'flex', width: '100%', minHeight: '300px' }}>
          {/* Left Page: User Booklet Spread Image */}
          <div style={{ flex: '1 1 52%', position: 'relative' }}>
            <img
              src={slide.leftImage}
              alt={slide.leftAlt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          {/* Right Page: Experience & Collaborate details */}
          <div
            style={{
              flex: '1 1 48%',
              background: '#ffffff',
              padding: '28px 24px',
              display: 'flex',
              gap: '16px',
              borderLeft: '1px solid rgba(0,0,0,0.06)',
              boxShadow: 'inset 8px 0 16px -8px rgba(0,0,0,0.08)',
            }}
          >
            {/* Experience Mini Column */}
            <div style={{ flex: 1 }}>
              <span
                style={{
                  fontFamily: FONT_SANS,
                  fontSize: '8px',
                  fontWeight: 800,
                  letterSpacing: '0.18em',
                  color: PINK,
                  display: 'block',
                  marginBottom: '10px',
                }}
              >
                EXPERIENCE
              </span>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                {slide.experienceItems.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: FONT_SANS,
                      fontSize: '9px',
                      color: '#664455',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <span style={{ color: PINK, fontSize: '8px' }}>✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Collaborate Mini Column */}
            <div style={{ flex: 1.2 }}>
              <span
                style={{
                  fontFamily: FONT_SANS,
                  fontSize: '8px',
                  fontWeight: 800,
                  letterSpacing: '0.18em',
                  color: PINK,
                  display: 'block',
                  marginBottom: '6px',
                }}
              >
                COLLABORATE
              </span>
              <h5
                style={{
                  fontFamily: FONT_SERIF,
                  margin: '0 0 6px 0',
                  lineHeight: 1.1,
                  fontSize: '15px',
                  fontWeight: 700,
                  color: DARK,
                }}
              >
                {slide.heading} <br />
                <span style={{ fontStyle: 'italic', color: PINK }}>{slide.headingAccent}</span>
              </h5>
              <p
                style={{
                  fontFamily: FONT_SANS,
                  fontSize: '8.5px',
                  lineHeight: 1.45,
                  color: '#664455',
                  margin: 0,
                }}
              >
                {slide.desc}
              </p>
            </div>
          </div>
        </div>
      );

    /* ── Slide 2: Model Profile & Measurements ── */
    case 'profile':
      return (
        <div style={{ display: 'flex', width: '100%', minHeight: '300px' }}>
          {/* Left Page: Model Portrait */}
          <div style={{ flex: '1 1 45%', position: 'relative' }}>
            <img
              src={slide.image}
              alt={slide.imageAlt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          {/* Right Page: Specs Grid */}
          <div
            style={{
              flex: '1 1 55%',
              background: '#ffffff',
              padding: '24px 22px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontFamily: FONT_SANS,
                fontSize: '8px',
                fontWeight: 800,
                letterSpacing: '0.2em',
                color: PINK,
                marginBottom: '6px',
                display: 'block',
              }}
            >
              MODEL SPECIFICATIONS
            </span>
            <h4
              style={{
                fontFamily: FONT_SERIF,
                fontSize: '20px',
                fontWeight: 700,
                margin: '0 0 12px 0',
                color: DARK,
              }}
            >
              {slide.title}
            </h4>

            {/* Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '8px 12px',
                marginBottom: '12px',
              }}
            >
              {slide.specs.map((spec) => (
                <div key={spec.label} style={{ borderBottom: '1px solid rgba(224, 90, 138, 0.15)', paddingBottom: '4px' }}>
                  <span
                    style={{
                      fontFamily: FONT_SANS,
                      fontSize: '7.5px',
                      fontWeight: 800,
                      color: PINK,
                      letterSpacing: '0.12em',
                      display: 'block',
                    }}
                  >
                    {spec.label}
                  </span>
                  <span
                    style={{
                      fontFamily: FONT_SANS,
                      fontSize: '10px',
                      fontWeight: 700,
                      color: '#2a1a24',
                    }}
                  >
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            <p style={{ margin: 0, fontFamily: FONT_SANS, fontSize: '8px', color: '#886677' }}>
              {slide.note}
            </p>
          </div>
        </div>
      );

    /* ── Slide 3: Portfolio Highlights ── */
    case 'portfolio':
      return (
        <div style={{ display: 'flex', width: '100%', minHeight: '300px' }}>
          {/* Left Page: Fashion Portrait */}
          <div style={{ flex: '1 1 45%', position: 'relative' }}>
            <img
              src={slide.image}
              alt={slide.imageAlt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          {/* Right Page: Portfolio Features */}
          <div
            style={{
              flex: '1 1 55%',
              background: '#ffffff',
              padding: '24px 22px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontFamily: FONT_SANS,
                fontSize: '8px',
                fontWeight: 800,
                letterSpacing: '0.2em',
                color: PINK,
                marginBottom: '6px',
                display: 'block',
              }}
            >
              GLOBAL EDITORIALS
            </span>
            <h4
              style={{
                fontFamily: FONT_SERIF,
                fontSize: '20px',
                fontWeight: 700,
                margin: '0 0 14px 0',
                color: DARK,
              }}
            >
              {slide.title}
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {slide.highlights.map((h) => (
                <div key={h.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span style={{ color: PINK, fontSize: '9px', marginTop: '2px' }}>✦</span>
                  <div>
                    <span style={{ fontFamily: FONT_SANS, fontSize: '10px', fontWeight: 800, color: '#38202c', display: 'block' }}>
                      {h.title}
                    </span>
                    <span style={{ fontFamily: FONT_SANS, fontSize: '8.5px', color: '#664455' }}>
                      {h.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    /* ── Slide 4: Previous Experience ── */
    case 'experience':
      return (
        <div style={{ display: 'flex', width: '100%', minHeight: '300px' }}>
          {/* Left Page: Runway photo */}
          <div style={{ flex: '1 1 45%', position: 'relative' }}>
            <img
              src={slide.image}
              alt={slide.imageAlt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          {/* Right Page: Milestones */}
          <div
            style={{
              flex: '1 1 55%',
              background: '#ffffff',
              padding: '24px 22px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontFamily: FONT_SANS,
                fontSize: '8px',
                fontWeight: 800,
                letterSpacing: '0.2em',
                color: PINK,
                marginBottom: '6px',
                display: 'block',
              }}
            >
              INDUSTRY TRACK RECORD
            </span>
            <h4
              style={{
                fontFamily: FONT_SERIF,
                fontSize: '20px',
                fontWeight: 700,
                margin: '0 0 12px 0',
                color: DARK,
              }}
            >
              {slide.title}
            </h4>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
              {slide.items.map((it) => (
                <div
                  key={it.num}
                  style={{
                    background: '#fdf4f7',
                    padding: '8px 10px',
                    borderRadius: '8px',
                    border: '1px solid rgba(224, 90, 138, 0.15)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: FONT_SERIF,
                      fontSize: '18px',
                      fontWeight: 700,
                      color: PINK,
                      display: 'block',
                      lineHeight: 1,
                      marginBottom: '4px',
                    }}
                  >
                    {it.num}
                  </span>
                  <span style={{ fontFamily: FONT_SANS, fontSize: '8px', color: '#553344', lineHeight: 1.3, display: 'block' }}>
                    {it.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    /* ── Slide 5: Collaboration Opportunities ── */
    case 'collaborate':
      return (
        <div style={{ display: 'flex', width: '100%', minHeight: '300px' }}>
          {/* Left Page: Editorial dress */}
          <div style={{ flex: '1 1 45%', position: 'relative' }}>
            <img
              src={slide.image}
              alt={slide.imageAlt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          {/* Right Page: Booking Callout */}
          <div
            style={{
              flex: '1 1 55%',
              background: 'linear-gradient(135deg, #ffffff 0%, #fdf4f7 100%)',
              padding: '24px 22px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontFamily: FONT_SANS,
                fontSize: '8px',
                fontWeight: 800,
                letterSpacing: '0.2em',
                color: PINK,
                marginBottom: '6px',
                display: 'block',
              }}
            >
              BOOKINGS & AGENCY
            </span>
            <h4
              style={{
                fontFamily: FONT_SERIF,
                fontSize: '20px',
                fontWeight: 700,
                margin: '0 0 10px 0',
                color: DARK,
              }}
            >
              {slide.heading}
            </h4>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 14px 0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {slide.points.map((p) => (
                <li key={p} style={{ fontFamily: FONT_SANS, fontSize: '9px', color: '#553344', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: PINK, fontSize: '8px' }}>✦</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div style={{ padding: '8px 10px', background: '#ffffff', borderRadius: '6px', border: '1px solid rgba(224, 90, 138, 0.2)' }}>
              <span style={{ fontFamily: FONT_SANS, fontSize: '7.5px', fontWeight: 800, color: PINK, letterSpacing: '0.12em', display: 'block' }}>
                DIRECT AGENCY BOOKING
              </span>
              <span style={{ fontFamily: FONT_SANS, fontSize: '9.5px', fontWeight: 700, color: '#33202a' }}>
                {slide.email}
              </span>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
