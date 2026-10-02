import { motion } from 'framer-motion';

/* ── Design Tokens ─────────────────────────────────────────────── */
const PINK       = '#e05a8a';
const DARK       = '#1a1a1a';
const FONT_SERIF = "'Cormorant Garamond', Georgia, serif";
const FONT_SANS  = "'Inter', system-ui, sans-serif";

/* ── Experience Highlight Cards Data ───────────────────────────── */
const HIGHLIGHT_CARDS = [
  {
    image: '/01_campaigns.png',
    title: 'CAMPAIGNS',
    desc: 'Selected fashion & commercial campaigns with leading global and Australian brands.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
      </svg>
    ),
  },
  {
    image: '/02_editorial.png',
    title: 'EDITORIAL',
    desc: 'Featured in editorial stories that celebrate style, diversity and individuality.',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    image: '/03_collaborations.png',
    title: 'COLLABORATIONS',
    desc: 'Collaborations with inspiring brands, designers and creative teams.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    image: '/04_events.png',
    title: 'EVENTS',
    desc: 'Fashion events, appearances and runway shows across Australia and internationally.',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
];

/* ── Animation Variants ────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#F8D4D6',
        fontFamily: FONT_SANS,
        padding: '70px 48px 90px',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {/* ═══════════ UPPER RIGHT BACKGROUND MODEL IMAGE ═══════════ */}
      <div
        className="experience-bg-model"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '56%',
          maxWidth: '820px',
          height: '520px',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <img
          src="/00_background_model.png"
          alt="Isabella Rose Highlights"
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
            background: 'linear-gradient(to right, #F8D4D6 0%, rgba(248, 212, 214, 0.8) 15%, transparent 45%)',
          }}
        />
        {/* Soft edge blend gradient on bottom */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, #F8D4D6 0%, rgba(248, 212, 214, 0.7) 20%, transparent 50%)',
          }}
        />
      </div>

      {/* ════════════════ MAIN CONTENT CONTAINER ════════════════ */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        {/* ── TOP HEADER CONTENT ── */}
        <div
          style={{
            maxWidth: '560px',
            marginBottom: '48px',
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
              CAREER
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
                fontSize: 'clamp(44px, 5.2vw, 68px)',
                fontWeight: 700,
                color: DARK,
                letterSpacing: '-0.01em',
              }}
            >
              Experience &
            </h2>
            <h2
              style={{
                fontFamily: FONT_SERIF,
                margin: '2px 0 0',
                lineHeight: 1.04,
                fontSize: 'clamp(44px, 5.2vw, 68px)',
                fontWeight: 700,
                fontStyle: 'italic',
                color: PINK,
                letterSpacing: '-0.01em',
              }}
            >
              Highlights
            </h2>
          </motion.div>

          {/* Decorative Divider */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              margin: '18px 0 16px',
              maxWidth: '360px',
            }}
          >
            <div style={{ height: '1px', flex: 1, background: 'rgba(224,90,138,0.3)' }} />
            <span style={{ color: PINK, fontSize: '9px' }}>✦</span>
            <div style={{ height: '1px', flex: 2, background: 'rgba(224,90,138,0.3)' }} />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.25 }}
            style={{
              fontFamily: FONT_SANS,
              fontSize: '14px',
              lineHeight: 1.68,
              color: '#4a303e',
              margin: 0,
              maxWidth: '440px',
            }}
          >
            A journey built on passion, professionalism and purpose — creating impact in fashion and beyond.
          </motion.p>
        </div>

        {/* ── 4 CARDS ROW ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="experience-cards-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            alignItems: 'stretch',
          }}
        >
          {HIGHLIGHT_CARDS.map(({ image, title, desc, icon }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              style={{
                borderRadius: '18px',
                overflow: 'hidden',
                background: '#ffffff',
                boxShadow: '0 8px 24px rgba(224, 90, 138, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 0.3s ease',
              }}
            >
              {/* Card Image */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '220px',
                  overflow: 'hidden',
                }}
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  src={image}
                  alt={title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>

              {/* Card Body with Overlapping Badge */}
              <div
                style={{
                  position: 'relative',
                  padding: '32px 20px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  flex: 1,
                  background: 'linear-gradient(180deg, #ffffff 0%, #fff7fa 100%)',
                }}
              >
                {/* Floating Circle Badge Icon */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-22px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: '#ffffff',
                    border: '2px solid #f6b5cc',
                    color: PINK,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(224, 90, 138, 0.15)',
                    zIndex: 2,
                  }}
                >
                  {icon}
                </div>

                {/* Title */}
                <h4
                  style={{
                    fontFamily: FONT_SANS,
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.18em',
                    color: PINK,
                    margin: '0 0 6px',
                  }}
                >
                  {title}
                </h4>

                {/* Subtle Divider Line */}
                <div
                  style={{
                    width: '20px',
                    height: '1.5px',
                    backgroundColor: PINK,
                    opacity: 0.5,
                    margin: '0 auto 12px',
                    borderRadius: '1px',
                  }}
                />

                {/* Description */}
                <p
                  style={{
                    fontFamily: FONT_SANS,
                    fontSize: '11.5px',
                    lineHeight: 1.55,
                    color: '#553a47',
                    margin: 0,
                  }}
                >
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1080px) {
          .experience-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
          .experience-bg-model {
            width: 70% !important;
            opacity: 0.85;
          }
        }
        @media (max-width: 640px) {
          .experience-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .experience-bg-model {
            width: 100% !important;
            opacity: 0.45;
          }
        }
      `}</style>
    </section>
  );
}
