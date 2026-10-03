import { motion } from 'framer-motion';
import purposeImg from '../assets/purpose-bg.jpg';

/* ── Design Tokens ─────────────────────────────────────────────── */
const PINK        = '#e05a8a';
const DARK        = '#1a1a1a';
const FONT_SERIF  = "'Cormorant Garamond', Georgia, serif";
const FONT_SANS   = "'Inter', system-ui, sans-serif";
const FONT_SCRIPT = "'Great Vibes', 'Dancing Script', cursive";

/* ── Purpose Feature Cards Data (3 Columns x 2 Rows) ──────────── */
const PURPOSE_FEATURES = [
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'AUTHENTIC REPRESENTATION',
    desc: 'Championing real people and real stories in fashion.',
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'DIVERSITY',
    desc: 'Celebrating all backgrounds, identities and experiences.',
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'INCLUSION',
    desc: 'Creating space for everyone to be seen and heard.',
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'INDIVIDUALITY',
    desc: 'Embracing what makes you uniquely, beautifully you.',
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
      </svg>
    ),
    title: 'CONFIDENCE',
    desc: 'Empowering self-expression and self-love.',
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18h18M4 15l2-9 6 5 6-5 2 9H4z" />
      </svg>
    ),
    title: 'BREAKING BARRIERS',
    desc: 'Redefining beauty and breaking conventional expectations.',
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

export default function PurposeSection() {
  return (
    <section
      id="purpose"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '124vh',
        fontFamily: FONT_SANS,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#e2888c',
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
          src={purposeImg}
          alt="Isabella Rose – Representation Matters"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'right center',
          }}
        />

        {/* Decorative thin glowing circle arc around model's hair/head */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            right: '-60px',
            transform: 'translateY(-56%)',
            width: '460px',
            height: '460px',
            borderRadius: '50%',
            border: '1px solid rgba(255, 255, 255, 0.42)',
            pointerEvents: 'none',
          }}
        >
          {/* Sparkle on the perimeter of the arc */}
          <span
            style={{
              position: 'absolute',
              right: '2px',
              top: '50%',
              transform: 'translate(50%, -50%)',
              color: '#ffffff',
              fontSize: '15px',
              textShadow: '0 0 10px rgba(255,255,255,0.9), 0 0 20px rgba(224,90,138,0.6)',
            }}
          >
            ✦
          </span>
        </div>

        {/* Soft responsive overlay for mobile readability */}
        <div
          className="purpose-bg-overlay"
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
        {/* Left content column */}
        <div
          className="purpose-content-card"
          style={{
            flex: '1 1 58%',
            maxWidth: '680px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
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
              MY PURPOSE
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
              Representation
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
              Matters
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
              margin: '14px 0 22px',
              maxWidth: '520px',
            }}
          >
            Fashion should represent real people, different stories and individuality. I'm passionate about{' '}
            <em style={{ fontStyle: 'italic', color: PINK, fontWeight: 600 }}>
              creating space for authentic representation
            </em>{' '}
            both in front of the camera and within the wider fashion industry.
          </motion.p>

          {/* Features 3x2 Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="purpose-features-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              columnGap: '18px',
              rowGap: '16px',
              marginBottom: '24px',
            }}
          >
            {PURPOSE_FEATURES.map(({ icon, title, desc }) => (
              <motion.div
                key={title}
                variants={itemVariants}
                style={{
                  display: 'flex',
                  gap: '10px',
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
                    marginTop: '1px',
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
                      fontSize: '9.5px',
                      fontWeight: 800,
                      letterSpacing: '0.12em',
                      color: DARK,
                      margin: '0 0 3px',
                      lineHeight: 1.3,
                    }}
                  >
                    {title}
                  </h4>
                  <p
                    style={{
                      fontFamily: FONT_SANS,
                      fontSize: '10.5px',
                      lineHeight: 1.45,
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
            className="purpose-quote-banner"
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
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.22)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.57-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
              </div>

              <p
                style={{
                  fontFamily: FONT_SERIF,
                  fontStyle: 'italic',
                  fontSize: '13.5px',
                  lineHeight: 1.45,
                  color: '#ffffff',
                  margin: 0,
                  letterSpacing: '0.01em',
                }}
              >
                My purpose is simple — to inspire confidence,
                <br />
                celebrate individuality and help shape a fashion
                <br />
                industry that truly reflects the world we live in.
              </p>
            </div>

            {/* Middle: Subtle outline heart */}
            <div
              style={{
                flexShrink: 0,
                opacity: 0.45,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>

            {/* Right side: Script Signature */}
            <div
              style={{
                flexShrink: 0,
                fontFamily: FONT_SCRIPT,
                fontSize: '24px',
                color: 'rgba(255, 255, 255, 0.95)',
                whiteSpace: 'nowrap',
                letterSpacing: '0.04em',
                paddingLeft: '6px',
              }}
            >
              Isabella Rose ♡
            </div>
          </motion.div>
        </div>

        {/* Right spacer for background model visibility (model is on right) */}
        <div
          className="purpose-model-spacer"
          style={{
            flex: '0 0 42%',
            minHeight: '400px',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1040px) {
          .purpose-features-grid {
            grid-template-columns: 1fr 1fr !important;
            row-gap: 14px !important;
          }
        }
        @media (max-width: 880px) {
          .purpose-model-spacer {
            display: none !important;
          }
          .purpose-content-card {
            flex: 1 1 100% !important;
            max-width: 100% !important;
            background: rgba(255, 245, 248, 0.88);
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
            padding: 24px;
            border-radius: 20px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.06);
          }
          .purpose-bg-overlay {
            background: rgba(255, 230, 240, 0.35);
          }
        }
        @media (max-width: 640px) {
          .purpose-features-grid {
            grid-template-columns: 1fr !important;
            row-gap: 12px !important;
          }
          .purpose-quote-banner {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
