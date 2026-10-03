import { motion } from 'framer-motion';
import collabImg from '../assets/collab-bg.jpg';

/* ── Design Tokens ─────────────────────────────────────────────── */
const PINK       = '#e05a8a';
const DARK       = '#1a1a1a';
const FONT_SERIF = "'Cormorant Garamond', Georgia, serif";
const FONT_SANS  = "'Inter', system-ui, sans-serif";

/* ── Services / Available For Data ─────────────────────────────── */
const SERVICES = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3c0 1.3.8 2.4 2 2.8V9L3.5 15.5A2 2 0 0 0 4.9 19h14.2a2 2 0 0 0 1.4-3.5L13 9V7.8c1.2-.4 2-1.5 2-2.8a3 3 0 0 0-3-3z" />
      </svg>
    ),
    titleL1: 'FASHION',
    titleL2: 'CAMPAIGNS',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    titleL1: 'EDITORIAL',
    titleL2: 'SHOOTS',
  },
  {
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
    titleL1: 'BRAND',
    titleL2: 'CAMPAIGNS',
  },
  {
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
    titleL1: 'COMMERCIAL',
    titleL2: 'MODELLING',
  },
  {
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 8c0-2.8-2.2-5-5-5a5 5 0 0 0-4.6 3" />
        <path d="M13 8c0-2.8 2.2-5 5-5a5 5 0 0 1 4.6 3" />
        <path d="M13 8v13" />
        <path d="M10 21h6" />
        <path d="M6.5 11c1.5 1.5 4 1.5 5.5 0" />
        <path d="M17.5 11c-1.5 1.5-4 1.5-5.5 0" />
      </svg>
    ),
    titleL1: 'LIFESTYLE',
    titleL2: 'CAMPAIGNS',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="3" ry="3" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    titleL1: 'SOCIAL',
    titleL2: 'CONTENT',
  },
  {
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M12 13l.8 1.6 1.8.3-1.3 1.3.3 1.8-1.6-.9-1.6.9.3-1.8-1.3-1.3 1.8-.3z" />
      </svg>
    ),
    titleL1: 'EVENTS',
    titleL2: '',
  },
  {
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
      </svg>
    ),
    titleL1: 'CREATIVE',
    titleL2: 'COLLABORATIONS',
  },
];

/* ── Animation Variants ────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function CollaborationSection() {
  return (
    <section
      id="collab"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '130vh',
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
          src={collabImg}
          alt="Isabella Rose – Let's Create Something Together"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'right center',
          }}
        />
        {/* Soft responsive overlay for mobile readability */}
        <div
          className="collab-bg-overlay"
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
          className="collab-content-card"
          style={{
            flex: '1 1 54%',
            maxWidth: '640px',
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
              WORK WITH ME
            </span>
            <div style={{ height: '1px', width: '50px', background: PINK, opacity: 0.6 }} />
            <span style={{ color: PINK, fontSize: '11px' }}>✦</span>
          </motion.div>

          {/* Heading: Let's Create / Something / Together */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              style={{
                fontFamily: FONT_SERIF,
                margin: 0,
                lineHeight: 1.02,
                fontSize: 'clamp(44px, 5.2vw, 68px)',
                fontWeight: 700,
                color: DARK,
                letterSpacing: '-0.01em',
              }}
            >
              Let's Create
            </h2>
            <h2
              style={{
                fontFamily: FONT_SERIF,
                margin: '2px 0 0',
                lineHeight: 1.02,
                fontSize: 'clamp(44px, 5.2vw, 68px)',
                fontWeight: 700,
                fontStyle: 'italic',
                color: PINK,
                letterSpacing: '-0.01em',
              }}
            >
              Something
            </h2>
            <h2
              style={{
                fontFamily: FONT_SERIF,
                margin: '2px 0 0',
                lineHeight: 1.02,
                fontSize: 'clamp(44px, 5.2vw, 68px)',
                fontWeight: 700,
                fontStyle: 'italic',
                color: PINK,
                letterSpacing: '-0.01em',
              }}
            >
              Together
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.3 }}
            style={{
              fontFamily: FONT_SANS,
              fontSize: '13.5px',
              lineHeight: 1.68,
              color: '#3d2531',
              margin: '18px 0 26px',
              maxWidth: '470px',
            }}
          >
            I collaborate with brands, creatives and agencies to bring thoughtful ideas to life through powerful storytelling and authentic representation.
          </motion.p>

          {/* Available For Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            style={{
              fontFamily: FONT_SANS,
              fontSize: '10px',
              fontWeight: 800,
              letterSpacing: '0.22em',
              color: PINK,
              marginBottom: '16px',
            }}
          >
            AVAILABLE FOR:
          </motion.div>

          {/* 8 Services Grid (4 Columns x 2 Rows) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="collab-services-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              columnGap: '16px',
              rowGap: '20px',
              marginBottom: '32px',
              maxWidth: '520px',
            }}
          >
            {SERVICES.map(({ icon, titleL1, titleL2 }, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                {/* Circle Icon Badge */}
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    border: `1.5px solid ${PINK}`,
                    color: PINK,
                    background: 'rgba(255, 255, 255, 0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '8px',
                    boxShadow: '0 2px 6px rgba(224,90,138,0.12)',
                  }}
                >
                  {icon}
                </div>

                {/* 2-line uppercase title */}
                <div
                  style={{
                    fontFamily: FONT_SANS,
                    fontSize: '9.5px',
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    color: DARK,
                    lineHeight: 1.35,
                  }}
                >
                  <div>{titleL1}</div>
                  {titleL2 && <div>{titleL2}</div>}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.55 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, boxShadow: '0 8px 26px rgba(216, 73, 125, 0.45)' }}
              whileTap={{ scale: 0.97 }}
              className="collab-cta-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'linear-gradient(135deg, #e46092 0%, #d8497d 100%)',
                color: '#ffffff',
                fontFamily: FONT_SANS,
                fontSize: '10.5px',
                fontWeight: 800,
                letterSpacing: '0.16em',
                textDecoration: 'none',
                padding: '14px 28px',
                borderRadius: '12px',
                boxShadow: '0 6px 20px rgba(216, 73, 125, 0.35)',
                cursor: 'pointer',
                width: 'fit-content',
              }}
            >
              <span style={{ fontSize: '12px' }}>✦</span>
              <span>ENQUIRE ABOUT A COLLABORATION</span>
              <span style={{ fontSize: '13px', transform: 'translateY(-1px)' }}>→</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Right spacer for background model visibility (model is on right) */}
        <div
          className="collab-model-spacer"
          style={{
            flex: '0 0 46%',
            minHeight: '450px',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 960px) {
          .collab-model-spacer {
            display: none !important;
          }
          .collab-content-card {
            flex: 1 1 100% !important;
            max-width: 100% !important;
            background: rgba(255, 245, 248, 0.88);
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
            padding: 28px;
            border-radius: 20px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.06);
          }
          .collab-bg-overlay {
            background: rgba(255, 230, 240, 0.35);
          }
        }
        @media (max-width: 640px) {
          .collab-services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            row-gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
