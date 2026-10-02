import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faqModelImg from "../assets/faq_model_bg.jpg";

const FAQS = [
  {
    number: "01",
    question: "Where are you based?",
    answer:
      "Isabella Rose is Melbourne-based and available for opportunities throughout Melbourne and across Australia, depending on the project.",
  },
  {
    number: "02",
    question: "What type of modelling work do you do?",
    answer:
      "Isabella specialises in editorial, commercial, lifestyle, and fashion modelling. She works across print, digital, runway, and social media campaigns, bringing authentic representation to every project.",
  },
  {
    number: "03",
    question: "Are you available for brand campaigns?",
    answer:
      "Yes! Isabella actively collaborates with fashion, beauty, lifestyle, and wellness brands. Campaign rates and availability can be discussed directly — please use the contact form to get in touch.",
  },
  {
    number: "04",
    question: "Are you available for editorial and fashion shoots?",
    answer:
      "Absolutely. Editorial and fashion shoots are a core part of Isabella's work. She collaborates with photographers, stylists, and publications to produce compelling visual stories.",
  },
  {
    number: "05",
    question: "Can brands collaborate with you on social content?",
    answer:
      "Yes — Isabella partners with brands on authentic social media content, including Instagram reels, TikToks, and curated lifestyle posts that align with her personal aesthetic.",
  },
];

const COLOR_ROSE      = "#dc4178";
const COLOR_ROSE_DEEP = "#b83363";
const COLOR_CHARCOAL  = "#1a1417";
const COLOR_MUTED     = "#5a3f4b";
const COLOR_BG        = "#fce8f0";
const FONT_SERIF = "'Cormorant Garamond', Georgia, serif";
const FONT_SANS  = "'Inter', system-ui, -apple-system, sans-serif";

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{
        borderRadius: "16px",
        background: isOpen ? "rgba(255,255,255,0.78)" : "rgba(255,255,255,0.50)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: isOpen ? "1px solid rgba(220,65,120,0.18)" : "1px solid rgba(255,255,255,0.7)",
        boxShadow: isOpen ? "0 8px 32px rgba(220,65,120,0.10)" : "0 2px 12px rgba(220,65,120,0.05)",
        overflow: "hidden",
        transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
        cursor: "pointer",
      }}
      onClick={onToggle}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "18px", padding: "20px 26px" }}>
        <span
          style={{
            fontFamily: FONT_SANS,
            fontSize: "12px",
            fontWeight: 700,
            color: COLOR_ROSE,
            letterSpacing: "0.06em",
            minWidth: "22px",
            opacity: 0.8,
          }}
        >
          {item.number}
        </span>
        <span
          style={{
            fontFamily: FONT_SANS,
            fontSize: "14.5px",
            fontWeight: 500,
            color: COLOR_CHARCOAL,
            flex: 1,
            lineHeight: 1.4,
          }}
        >
          {item.question}
        </span>
        <span
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            border: `1px solid ${isOpen ? COLOR_ROSE : "rgba(220,65,120,0.28)"}`,
            background: isOpen ? "rgba(220,65,120,0.08)" : "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: COLOR_ROSE,
            fontSize: "18px",
            fontWeight: 300,
            flexShrink: 0,
            lineHeight: 1,
            transition: "all 0.25s ease",
            userSelect: "none",
          }}
        >
          {isOpen ? "−" : "+"}
        </span>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                padding: "14px 26px 22px 60px",
                fontFamily: FONT_SANS,
                fontSize: "13.5px",
                lineHeight: 1.7,
                color: COLOR_MUTED,
                borderTop: "1px solid rgba(220,65,120,0.08)",
              }}
            >
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      style={{
        position: "relative",
        width: "100%",
        background: COLOR_BG,
        fontFamily: FONT_SANS,
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: "-60px", right: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(247,185,208,0.45) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "100vh" }}
        className="faq-grid"
      >
        {/* LEFT — Model Photo */}
        <div style={{ position: "relative", overflow: "hidden", minHeight: "600px" }} className="faq-model-col">
          <img
            src={faqModelImg}
            alt="Isabella Rose – FAQ section portrait"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "60% top",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              width: "18%",
              background: `linear-gradient(to right, transparent, ${COLOR_BG})`,
              pointerEvents: "none",
            }}
          />
        </div>

        {/* RIGHT — FAQ Content */}
        <div
          style={{
            padding: "72px 56px 64px 48px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            boxSizing: "border-box",
          }}
          className="faq-content-col"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}
          >
            <span style={{ fontFamily: FONT_SANS, fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", color: COLOR_ROSE }}>FAQ</span>
            <div style={{ height: "1px", width: "38px", background: COLOR_ROSE, opacity: 0.5 }} />
            <span style={{ color: COLOR_ROSE, fontSize: "11px" }}>✦</span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            style={{ marginBottom: "8px" }}
          >
            <h2 style={{ fontFamily: FONT_SERIF, fontSize: "clamp(40px, 4.8vw, 64px)", fontWeight: 700, color: COLOR_CHARCOAL, lineHeight: 1.05, margin: 0, letterSpacing: "-0.01em" }}>
              Frequently Asked
            </h2>
            <span style={{ display: "block", fontFamily: FONT_SERIF, fontSize: "clamp(40px, 4.8vw, 64px)", fontWeight: 600, fontStyle: "italic", color: COLOR_ROSE, lineHeight: 1.05, letterSpacing: "-0.01em" }}>
              Questions
            </span>
          </motion.div>

          {/* Spark separator */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.18 }} style={{ marginBottom: "10px" }}>
            <span style={{ color: COLOR_ROSE, fontSize: "13px" }}>✦</span>
          </motion.div>

          {/* Sub-tagline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            style={{ fontFamily: FONT_SANS, fontSize: "13.5px", color: COLOR_MUTED, lineHeight: 1.6, margin: "0 0 28px" }}
          >
            Everything you need to know about working with Isabella Rose.
          </motion.p>

          {/* Accordion list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {FAQS.map((faq, i) => (
              <FaqItem key={faq.number} item={faq} isOpen={openIndex === i} onToggle={() => toggle(i)} />
            ))}
          </div>

          {/* CTA Bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.35 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "24px",
              padding: "16px 22px",
              borderRadius: "16px",
              background: "rgba(255,255,255,0.50)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(255,255,255,0.72)",
              boxShadow: "0 4px 18px rgba(220,65,120,0.07)",
              gap: "16px",
              flexWrap: "wrap",
            }}
            className="faq-cta-bar"
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(220,65,120,0.12)", border: "1px solid rgba(220,65,120,0.22)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLOR_ROSE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <circle cx="12" cy="17" r=".5" fill={COLOR_ROSE} stroke="none" />
                </svg>
              </div>
              <div>
                <p style={{ fontFamily: FONT_SANS, fontSize: "13px", fontWeight: 600, color: COLOR_CHARCOAL, margin: 0, lineHeight: 1.3 }}>Have another question?</p>
                <p style={{ fontFamily: FONT_SANS, fontSize: "12px", color: COLOR_MUTED, margin: "2px 0 0", lineHeight: 1.3 }}>Feel free to reach out — I'd love to hear from you.</p>
              </div>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, boxShadow: "0 8px 26px rgba(220,65,120,0.45)" }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => { e.preventDefault(); const el = document.querySelector("#contact"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "linear-gradient(135deg, #e44d80 0%, #cb3266 100%)",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "9999px",
                padding: "11px 22px",
                fontFamily: FONT_SANS,
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "0.16em",
                whiteSpace: "nowrap",
                boxShadow: "0 5px 18px rgba(220,65,120,0.35)",
                cursor: "pointer",
                transition: "all 0.25s ease",
                flexShrink: 0,
              }}
            >
              GET IN TOUCH
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .faq-grid { grid-template-columns: 1fr !important; }
          .faq-model-col { height: 420px !important; min-height: 0 !important; }
          .faq-content-col { padding: 48px 28px 52px !important; }
        }
        @media (max-width: 560px) {
          .faq-cta-bar { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </section>
  );
}
