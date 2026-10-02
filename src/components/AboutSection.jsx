import { motion } from 'framer-motion';
import aboutImg from '../assets/about-bg.jpg';

/* ── Design Tokens ─────────────────────────────────────────────── */
const PINK        = '#e05a8a';
const DARK        = '#1a1a1a';
const FONT_SERIF  = "'Cormorant Garamond', Georgia, serif";
const FONT_SANS   = "'Inter', system-ui, sans-serif";
const FONT_SCRIPT = "'Great Vibes', 'Dancing Script', cursive";

/* ── Feature Cards Data ────────────────────────────────────────── */
const FEATURES = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'MELBOURNE-BASED',
    desc: "Proudly based in Melbourne, Australia. Inspired by the city's creativity, diversity and culture.",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'MY PERSONALITY',
    desc: 'Driven, optimistic and down-to-earth. I believe in kindness, confidence and staying true to yourself.',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'MY BACKGROUND',
    desc: 'With a background in fashion and visual arts, creativity has always been at the heart of everything I do.',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: 'CAREER GOALS',
    desc: 'To work globally with brands that stand for authenticity and inclusivity while continuing to evolve as a model and creative.',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 0Z" />
      </svg>
    ),
    title: 'MODELLING JOURNEY',
    desc: 'My journey started with a dream to express myself and has grown into a purpose to inspire others.',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 0Z" />
      </svg>
    ),
    title: 'AUTHENTIC REPRESENTATION',
    desc: 'I use my platform to champion diversity and real beauty—because everyone deserves to be seen and celebrated.',
  },
];

/* ── Animation Variants ────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        fontFamily: FONT_SANS,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#e69496',
      }}
    >
      {/* ═══════════════ USER PROVIDED IMAGE BACKGROUND ═══════════════ */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <img
          src={aboutImg}
          alt="Isabella Rose – About Me"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'left center',
          }}
        />
        <div
          className="about-bg-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* ════════════════ MAIN CONTENT SECTION ════════════════════ */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          padding: '60px 48px',
        }}
      >
        {/* Left spacer for background model visibility (model is on left) */}
        <div
          className="about-model-spacer"
          style={{
            flex: '0 0 44%',
            minHeight: '400px',
            pointerEvents: 'none',
          }}
        />

        {/* Right content column */}
        <div
          className="about-content-card"
          style={{
            flex: '1 1 56%',
            maxWidth: '620px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '10px',
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
              ABOUT ME
            </span>
            <div style={{ height: '1px', width: '50px', background: PINK, opacity: 0.6 }} />
            <span style={{ color: PINK, fontSize: '11px' }}>✦</span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              style={{
                fontFamily: FONT_SERIF,
                margin: 0,
                lineHeight: 1.02,
                fontSize: 'clamp(40px, 4.8vw, 66px)',
                fontWeight: 700,
                color: DARK,
                letterSpacing: '-0.01em',
              }}
            >
              More Than
            </h2>
            <h2
              style={{
                fontFamily: FONT_SERIF,
                margin: '2px 0 0',
                lineHeight: 1.02,
                fontSize: 'clamp(40px, 4.8vw, 66px)',
                fontWeight: 700,
                fontStyle: 'italic',
                color: PINK,
                letterSpacing: '-0.01em',
              }}
            >
              a Model
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.3 }}
            style={{
              fontFamily: FONT_SANS,
              fontSize: '13.5px',
              lineHeight: 1.68,
              color: '#3d2531',
              margin: '14px 0 20px',
              maxWidth: '510px',
            }}
          >
            I'm Isabella Rose, a Melbourne-based model passionate about{' '}
            <em style={{ fontStyle: 'italic', color: PINK, fontWeight: 600 }}>
              authentic representation
            </em>
            , individuality and creating a more inclusive fashion industry.
          </motion.p>

          {/* Features 2x3 Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="about-features-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              columnGap: '26px',
              rowGap: '16px',
              marginBottom: '22px',
            }}
          >
            {FEATURES.map(({ icon, title, desc }) => (
              <motion.div
                key={title}
                variants={itemVariants}
                style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start',
                }}
              >
                {/* Circle Icon Badge */}
                <div
                  style={{
                    flexShrink: 0,
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    border: `1.5px solid ${PINK}`,
                    color: PINK,
                    background: 'rgba(255, 255, 255, 0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '2px',
                    boxShadow: '0 2px 6px rgba(224,90,138,0.12)',
                  }}
                >
                  {icon}
                </div>

                {/* Text Content */}
                <div>
                  <h4
                    style={{
                      fontFamily: FONT_SANS,
                      fontSize: '10px',
                      fontWeight: 800,
                      letterSpacing: '0.14em',
                      color: DARK,
                      margin: '0 0 3px',
                    }}
                  >
                    {title}
                  </h4>
                  <p
                    style={{
                      fontFamily: FONT_SANS,
                      fontSize: '11px',
                      lineHeight: 1.5,
                      color: '#4e3340',
                      margin: 0,
                    }}
                  >
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ══════════════ PINK QUOTE BANNER ══════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="about-quote-banner"
            style={{
              position: 'relative',
              background: 'linear-gradient(135deg, #e46092 0%, #d8497d 100%)',
              borderRadius: '16px',
              padding: '16px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              boxShadow: '0 8px 24px rgba(216, 73, 125, 0.35)',
              overflow: 'hidden',
            }}
          >
            {/* Left side: quote icon + text */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1 }}>
              <div
                style={{
                  flexShrink: 0,
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.22)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.57-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
              </div>

              <p
                style={{
                  fontFamily: FONT_SERIF,
                  fontStyle: 'italic',
                  fontSize: '14.5px',
                  lineHeight: 1.45,
                  color: '#ffffff',
                  margin: 0,
                  letterSpacing: '0.01em',
                }}
              >
                Fashion is more than what we wear,
                <br />
                it's how we express who we are.
              </p>
            </div>

            {/* Right side: Script Signature */}
            <div
              style={{
                flexShrink: 0,
                fontFamily: FONT_SCRIPT,
                fontSize: '25px',
                color: 'rgba(255, 255, 255, 0.95)',
                whiteSpace: 'nowrap',
                letterSpacing: '0.04em',
                paddingLeft: '8px',
              }}
            >
              Isabella Rose ♡
            </div>
          </motion.div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 960px) {
          .about-model-spacer {
            display: none !important;
          }
          .about-content-card {
            flex: 1 1 100% !important;
            max-width: 100% !important;
            background: rgba(255, 245, 248, 0.88);
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
            padding: 24px;
            border-radius: 20px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.06);
          }
          .about-bg-overlay {
            background: rgba(255, 230, 240, 0.35);
          }
        }
        @media (max-width: 640px) {
          .about-features-grid {
            grid-template-columns: 1fr !important;
            row-gap: 12px !important;
          }
          .about-quote-banner {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 10px !important;
          }
        }
      `}</style>
    </section>
  );
}
