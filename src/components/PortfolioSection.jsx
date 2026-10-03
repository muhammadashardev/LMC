import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Design Tokens ─────────────────────────────────────────────── */
const PINK       = '#e05a8a';
const DARK       = '#1a1a1a';
const FONT_SERIF = "'Cormorant Garamond', Georgia, serif";
const FONT_SANS  = "'Inter', system-ui, sans-serif";

/* ── Filter Categories ─────────────────────────────────────────── */
const CATEGORIES = [
  'ALL',
  'EDITORIAL',
  'FASHION',
  'COMMERCIAL',
  'LIFESTYLE',
  'CAMPAIGN',
  'PORTRAITS',
  'RUNWAY',
];

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState('ALL');

  return (
    <section
      id="portfolio"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#F4D4D7',
        fontFamily: FONT_SANS,
        padding: '60px 48px 80px',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '36px',
        }}
      >
        {/* ════════════════════ TOP ROW ════════════════════ */}
        <div
          className="portfolio-top-row"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 1.35fr 1fr',
            gap: '24px',
            alignItems: 'stretch',
          }}
        >
          {/* Top Left: Typography & CTA */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              paddingRight: '16px',
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
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.24em',
                  color: PINK,
                }}
              >
                PORTFOLIO
              </span>
              <div style={{ height: '1px', width: '46px', background: PINK, opacity: 0.6 }} />
              <span style={{ color: PINK, fontSize: '11px' }}>✦</span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2
                style={{
                  fontFamily: FONT_SERIF,
                  margin: 0,
                  lineHeight: 1.04,
                  fontSize: 'clamp(42px, 4.4vw, 64px)',
                  fontWeight: 700,
                  color: DARK,
                  letterSpacing: '-0.01em',
                }}
              >
                In Front of
              </h2>
              <h2
                style={{
                  fontFamily: FONT_SERIF,
                  margin: '2px 0 0',
                  lineHeight: 1.04,
                  fontSize: 'clamp(42px, 4.4vw, 64px)',
                  fontWeight: 700,
                  fontStyle: 'italic',
                  color: PINK,
                  letterSpacing: '-0.01em',
                }}
              >
                the Camera
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
                fontSize: '13.5px',
                lineHeight: 1.65,
                color: '#523744',
                margin: '18px 0 26px',
                maxWidth: '360px',
              }}
            >
              A collection of work that reflects versatility, confidence and the ability to bring every story to life.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.3 }}
            >
              <motion.a
                href="#full-portfolio"
                whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(224,90,138,0.45)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'linear-gradient(135deg, #e46092 0%, #d8497d 100%)',
                  color: '#ffffff',
                  fontFamily: FONT_SANS,
                  fontSize: '10px',
                  fontWeight: 800,
                  letterSpacing: '0.16em',
                  textDecoration: 'none',
                  padding: '13px 26px',
                  borderRadius: '9999px',
                  boxShadow: '0 4px 18px rgba(224, 90, 138, 0.32)',
                  transition: 'all 0.25s ease',
                  cursor: 'pointer',
                  width: 'fit-content',
                }}
              >
                <span>VIEW FULL PORTFOLIO</span>
                <span style={{ fontSize: '13px', transform: 'translateY(-1px)' }}>→</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Top Middle Card: 01_editorial_main.png */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.2 }}
            style={{
              position: 'relative',
              borderRadius: '18px',
              overflow: 'hidden',
              minHeight: '340px',
              boxShadow: '0 8px 28px rgba(0, 0, 0, 0.06)',
            }}
          >
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              src="/01_editorial_main.png"
              alt="Editorial Main – Isabella Rose"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </motion.div>

          {/* Top Right Card: 02_fashion_portrait.png */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.3 }}
            style={{
              position: 'relative',
              borderRadius: '18px',
              overflow: 'hidden',
              minHeight: '340px',
              boxShadow: '0 8px 28px rgba(0, 0, 0, 0.06)',
            }}
          >
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              src="/02_fashion_portrait.png"
              alt="Fashion Portrait – Isabella Rose"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </motion.div>
        </div>

        {/* ════════════════ FILTER TABS ════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="portfolio-filter-row"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
            borderBottom: '1px solid rgba(224, 90, 138, 0.18)',
            paddingBottom: '12px',
            overflowX: 'auto',
          }}
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                style={{
                  position: 'relative',
                  background: 'transparent',
                  border: 'none',
                  padding: '4px 0 8px',
                  fontFamily: FONT_SANS,
                  fontSize: '10px',
                  fontWeight: isActive ? 800 : 700,
                  letterSpacing: '0.18em',
                  color: isActive ? PINK : '#553c48',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                {cat}
                {isActive && (
                  <motion.div
                    layoutId="activeFilterUnderline"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '14px',
                      height: '2px',
                      borderRadius: '2px',
                      backgroundColor: PINK,
                    }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* ════════════════ GALLERY GRID ════════════════ */}
        <div
          className="portfolio-gallery-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr 0.9fr',
            gap: '16px',
            alignItems: 'stretch',
          }}
        >
          {/* Column 1: 03_editorial_dress.png (Tulle Dress) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="port-img-card"
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              height: '380px',
              boxShadow: '0 6px 22px rgba(0, 0, 0, 0.05)',
            }}
          >
            <div className="port-img-sweep" />
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              src="/03_editorial_dress.png"
              alt="Editorial Dress"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </motion.div>

          {/* Column 2: 04_portrait_closeup.png (Pink Blazer Portrait) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="port-img-card"
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              height: '380px',
              boxShadow: '0 6px 22px rgba(0, 0, 0, 0.05)',
            }}
          >
            <div className="port-img-sweep" />
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              src="/04_portrait_closeup.png"
              alt="Portrait Close-Up"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </motion.div>

          {/* Column 3: Stack of 2 items (05_campaign_seated & 06_portrait_horizontal) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              height: '380px',
            }}
          >
            {/* Top: 05_campaign_seated.png */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.24 }}
              className="port-img-card"
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                flex: 1,
                boxShadow: '0 6px 22px rgba(0, 0, 0, 0.05)',
              }}
            >
              <div className="port-img-sweep" />
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                src="/05_campaign_seated.png"
                alt="Campaign Seated"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </motion.div>

            {/* Bottom: 06_portrait_horizontal.png */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="port-img-card"
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                flex: 1,
                boxShadow: '0 6px 22px rgba(0, 0, 0, 0.05)',
              }}
            >
              <div className="port-img-sweep" />
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                src="/06_portrait_horizontal.png"
                alt="Portrait Horizontal"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </motion.div>
          </div>

          {/* Column 4: 07_commercial_pink_suit.png (Full Standing Suit) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.36 }}
            className="port-img-card"
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              height: '380px',
              boxShadow: '0 6px 22px rgba(0, 0, 0, 0.05)',
            }}
          >
            <div className="port-img-sweep" />
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              src="/07_commercial_pink_suit.png"
              alt="Commercial Pink Suit"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </motion.div>

          {/* Column 5: 08_runway.png (Runway Gown) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.42 }}
            className="port-img-card"
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              height: '380px',
              boxShadow: '0 6px 22px rgba(0, 0, 0, 0.05)',
            }}
          >
            <div className="port-img-sweep" />
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              src="/08_runway.png"
              alt="Runway Model"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @keyframes portImgSweep {
          0%   { transform: translateX(-130%) skewX(-18deg); }
          100% { transform: translateX(230%) skewX(-18deg); }
        }

        .port-img-card .port-img-sweep {
          position: absolute;
          top: 0;
          left: 0;
          width: 55%;
          height: 100%;
          background: linear-gradient(
            105deg,
            transparent 20%,
            rgba(255, 255, 255, 0.45) 50%,
            transparent 80%
          );
          transform: translateX(-130%) skewX(-18deg);
          pointer-events: none;
          z-index: 2;
        }

        .port-img-card:hover .port-img-sweep {
          animation: portImgSweep 0.6s ease forwards;
        }

        @media (max-width: 1080px) {
          .portfolio-top-row {
            grid-template-columns: 1fr 1fr !important;
          }
          .portfolio-top-row > div:first-child {
            grid-column: span 2 !important;
            margin-bottom: 12px;
          }
          .portfolio-gallery-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .portfolio-top-row {
            grid-template-columns: 1fr !important;
          }
          .portfolio-top-row > div:first-child {
            grid-column: span 1 !important;
          }
          .portfolio-gallery-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .portfolio-filter-row {
            gap: 16px !important;
          }
        }
        @media (max-width: 480px) {
          .portfolio-gallery-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
