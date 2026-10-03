import { motion } from 'framer-motion';

/* ── Design Tokens ─────────────────────────────────────────────── */
const BG_COLOR   = '#f7e7e5';
const ACCENT     = '#d2677e';
const ACCENT_HOV = '#bf546c';
const DARK_TEXT  = '#1f1d1e';
const MUTED_TEXT = '#6f5d62';
const FONT_SERIF = "'Cormorant Garamond', Georgia, serif";
const FONT_SANS  = "'Inter', system-ui, sans-serif";

/* ── Card Data ─────────────────────────────────────────────────── */
const JOURNAL_CARDS = [
  {
    id: 'bts',
    title: 'Behind the Scenes',
    description: 'Go behind the lens and see the real moments from set.',
    image: '/journal_card1_bts.png',
    icon: (
      /* Camera Icon */
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-white"
      >
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    id: 'fashion',
    title: 'Fashion',
    description: 'Editorials, campaigns and style stories from the world of fashion.',
    image: '/journal_card2_fashion.png',
    icon: (
      /* Fashion / Mannequin Dress Form Icon */
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-white"
      >
        <path d="M12 2v3m-3 0h6m-5.5 0c-.5 2.5-1.5 4-1.5 7 0 2 2 3.5 4 3.5s4-1.5 4-3.5c0-3-1-4.5-1.5-7h-5z" />
        <path d="M12 15.5V22m-3 0h6" />
      </svg>
    ),
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle',
    description: 'A glimpse into my everyday — wellness, routine and inspiration.',
    image: '/journal_card3_lifestyle.png',
    icon: (
      /* Palm Tree / Lifestyle Icon */
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-white"
      >
        <path d="M12 22V9" />
        <path d="M12 9c-2-3-6-3.5-9-2 1.5 3 4.5 4.5 9 2z" />
        <path d="M12 9c2-3 6-3.5 9-2-1.5 3-4.5 4.5-9 2z" />
        <path d="M12 11c-3-1-7 1-7 5 3 0 6-2 7-5z" />
        <path d="M12 11c3-1 7 1 7 5-3 0-6-2-7-5z" />
        <path d="M12 9V5" />
      </svg>
    ),
  },
  {
    id: 'stories',
    title: 'Stories',
    description: 'Personal stories, experiences and lessons from the journey.',
    image: '/journal_card4_stories.png',
    icon: (
      /* 4-Point Star / Sparkle Icon */
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
        <path d="M12 2C12 7.523 7.523 12 2 12c5.523 0 10 4.477 10 10 0-5.523 4.477-10 10-10-5.523 0-10-4.477-10-10z" />
      </svg>
    ),
  },
];

/* ── Animation Variants ────────────────────────────────────────── */
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const cardsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function JournalSection() {
  return (
    <section
      id="journal"
      style={{
        backgroundColor: BG_COLOR,
        fontFamily: FONT_SANS,
      }}
      className="relative w-full overflow-hidden pt-16 md:pt-24 lg:pt-28 pb-20 md:pb-28"
    >
      {/* ═══════════ TOP RIGHT HERO MODEL BACKGROUND ═══════════ */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 right-0 w-[85%] sm:w-[70%] md:w-[58%] lg:w-[50%] h-[380px] sm:h-[460px] md:h-[540px] pointer-events-none select-none z-0"
        style={{
          maskImage:
            'radial-gradient(ellipse 95% 85% at 75% 30%, black 50%, transparent 100%), linear-gradient(to bottom, black 70%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 95% 85% at 75% 30%, black 50%, transparent 100%), linear-gradient(to bottom, black 70%, transparent 100%)',
        }}
      >
        <img
          src="/journal_hero_bg.png"
          alt="Editorial Muse"
          className="w-full h-full object-cover object-right-top opacity-95"
        />
        {/* Soft edge blend overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, #f7e7e5 0%, rgba(247, 231, 229, 0.4) 35%, transparent 65%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, transparent 60%, #f7e7e5 100%)',
          }}
        />
      </motion.div>

      {/* ═══════════ MAIN CONTENT CONTAINER ═══════════ */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        {/* ── Header Intro ────────────────────────────────────────── */}
        <div className="max-w-xl mb-14 md:mb-18 lg:mb-20">
          {/* Label with horizontal rule & sparkle */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUpVariants}
            className="flex items-center gap-3.5 mb-4"
          >
            <span
              className="text-[12px] sm:text-[13px] font-semibold tracking-[0.28em] uppercase"
              style={{ color: ACCENT }}
            >
              JOURNAL
            </span>
            <span
              className="h-[1px] w-12 sm:w-16"
              style={{ backgroundColor: `${ACCENT}66` }}
            />
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3.5 h-3.5"
              style={{ color: ACCENT }}
            >
              <path d="M12 2C12 7.523 7.523 12 2 12c5.523 0 10 4.477 10 10 0-5.523 4.477-10 10-10-5.523 0-10-4.477-10-10z" />
            </svg>
          </motion.div>

          {/* Large Serif Title */}
          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUpVariants}
            style={{
              fontFamily: FONT_SERIF,
              color: DARK_TEXT,
              letterSpacing: '-0.02em',
            }}
            className="text-[52px] sm:text-[68px] md:text-[80px] lg:text-[88px] font-normal leading-[1.02] mb-6"
          >
            Journal
          </motion.h2>

          {/* Subtitle Description */}
          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUpVariants}
            style={{ color: MUTED_TEXT }}
            className="text-[15px] sm:text-[16px] leading-[1.65] font-normal max-w-[420px] mb-8"
          >
            Stories from behind the camera and beyond. Moments, experiences and
            inspiration that shape my journey.
          </motion.p>

          {/* Explore All Stories Button */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUpVariants}
          >
            <motion.a
              href="#stories-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              style={{
                backgroundColor: ACCENT,
                boxShadow: '0 8px 24px -4px rgba(210, 103, 126, 0.4)',
              }}
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-white text-[12px] sm:text-[13px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300 hover:bg-[#bf546c] group"
            >
              <span>EXPLORE ALL STORIES</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* ── 4 Cards Grid ────────────────────────────────────────── */}
        <motion.div
          variants={cardsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7"
        >
          {JOURNAL_CARDS.map((card) => (
            <motion.article
              key={card.id}
              variants={cardItemVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 45px -10px rgba(180, 130, 140, 0.22)' }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="group cursor-pointer rounded-2xl md:rounded-[22px] overflow-hidden flex flex-col justify-between transition-all duration-300 journal-card"
              style={{
                position: 'relative',
                backgroundColor: 'rgba(252, 243, 241, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.85)',
                boxShadow: '0 12px 36px -10px rgba(180, 130, 140, 0.12)',
              }}
            >
              {/* White Sweep Overlay */}
              <div className="journal-card-sweep" />

              {/* Card Image Container */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[4/3.2] md:aspect-[4/3.4] overflow-hidden bg-[#ecd3d3]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Floating Center Icon Badge */}
              <div className="relative -mt-6 z-10 flex justify-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: ACCENT,
                    border: '3.5px solid #fcf3f1',
                    boxShadow: '0 4px 14px rgba(210, 103, 126, 0.35)',
                  }}
                >
                  {card.icon}
                </div>
              </div>

              {/* Card Body Text */}
              <div className="pt-3 pb-6 px-6 text-center flex-1 flex flex-col justify-between items-center" style={{ position: 'relative', zIndex: 1 }}>
                <div>
                  <h3
                    style={{
                      fontFamily: FONT_SERIF,
                      color: DARK_TEXT,
                    }}
                    className="text-[23px] sm:text-[24px] lg:text-[25px] font-semibold tracking-tight transition-colors duration-200 group-hover:text-[#bf546c]"
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{ color: MUTED_TEXT }}
                    className="mt-2 text-[13px] sm:text-[13.5px] leading-relaxed max-w-[240px] mx-auto font-normal"
                  >
                    {card.description}
                  </p>
                </div>

                {/* Bottom subtle arrow */}
                <div className="mt-5 flex items-center justify-center">
                  <span
                    style={{ color: ACCENT }}
                    className="transition-transform duration-300 group-hover:translate-x-1.5 inline-block"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
      {/* Journal Card Sweep CSS */}
      <style>{`
        @keyframes journalCardSweep {
          0%   { transform: translateX(-130%) skewX(-18deg); }
          100% { transform: translateX(230%) skewX(-18deg); }
        }

        .journal-card .journal-card-sweep {
          position: absolute;
          top: 0;
          left: 0;
          width: 55%;
          height: 100%;
          background: linear-gradient(
            105deg,
            transparent 20%,
            rgba(255, 255, 255, 0.5) 50%,
            transparent 80%
          );
          transform: translateX(-130%) skewX(-18deg);
          pointer-events: none;
          z-index: 5;
        }

        .journal-card:hover .journal-card-sweep {
          animation: journalCardSweep 0.6s ease forwards;
        }
      `}</style>
    </section>
  );
}
