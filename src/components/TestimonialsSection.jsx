import { motion } from "framer-motion";
import testimonialModelImg from "../assets/testimonial_model.jpg";

/* ── Testimonials Data ───────────────────────────────────────── */
const TESTIMONIALS = [
  {
    quote:
      "Isabella brought authenticity, confidence and a unique presence to the campaign. Working together was an incredibly positive creative experience.",
    role: "CREATIVE DIRECTOR, FASHION BRAND",
  },
  {
    quote:
      "Professional, genuine and incredibly comfortable in front of the camera. Isabella has a natural ability to bring personality and emotion into every image.",
    role: "FASHION PHOTOGRAPHER",
  },
  {
    quote:
      "We loved working with Isabella. Her personality and authentic approach connected beautifully with our brand and audience.",
    role: "BRAND MARKETING MANAGER",
  },
  {
    quote:
      "From the first conversation through to the final shoot, Isabella was professional, collaborative and brought a fantastic energy to the entire team.",
    role: "CREATIVE PRODUCER",
  },
];

/* ── Design Tokens ───────────────────────────────────────────── */
const COLOR_ROSE      = "#dc4178";
const COLOR_ROSE_DEEP = "#b83363";
const COLOR_CHARCOAL  = "#1a1417";
const COLOR_MUTED     = "#5a3f4b";
const COLOR_BG        = "#fce8f0";
const FONT_SERIF = "'Cormorant Garamond', Georgia, serif";
const FONT_SANS  = "'Inter', system-ui, -apple-system, sans-serif";

/* ── Single Card ─────────────────────────────────────────────── */
function TestimonialCard({ item, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, boxShadow: "0 18px 48px rgba(220,65,120,0.14)" }}
      style={{
        background: "rgba(255,255,255,0.60)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        border: "1px solid rgba(255,255,255,0.75)",
        borderRadius: "18px",
        padding: "28px 28px 24px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 6px 28px rgba(220,65,120,0.08)",
        transition: "box-shadow 0.3s",
      }}
    >
      {/* Opening quote mark */}
      <span
        style={{
          fontFamily: FONT_SERIF,
          fontSize: "52px",
          lineHeight: 0.7,
          color: COLOR_ROSE,
          fontWeight: 700,
          marginBottom: "14px",
          display: "block",
          opacity: 0.85,
        }}
      >
        "
      </span>

      {/* Quote text */}
      <p
        style={{
          fontFamily: FONT_SANS,
          fontSize: "14px",
          lineHeight: 1.75,
          color: COLOR_CHARCOAL,
          margin: "0 0 20px",
          flex: 1,
        }}
      >
        {item.quote}
      </p>

      {/* Divider */}
      <div
        style={{
          width: "32px",
          height: "1.5px",
          background: COLOR_ROSE,
          opacity: 0.45,
          marginBottom: "12px",
          borderRadius: "2px",
        }}
      />

      {/* Attribution */}
      <span
        style={{
          fontFamily: FONT_SANS,
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: "0.18em",
          color: COLOR_ROSE_DEEP,
        }}
      >
        — {item.role}
      </span>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TESTIMONIALS SECTION — main export
═══════════════════════════════════════════════════════════════ */
export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      style={{
        position: "relative",
        width: "100%",
        background: COLOR_BG,
        fontFamily: FONT_SANS,
        overflow: "hidden",
      }}
    >
      {/* Ambient glow blobs */}
      <div style={{ position: "absolute", top: "-80px", right: "10%", width: "380px", height: "380px", borderRadius: "50%", background: "radial-gradient(circle, rgba(247,185,208,0.40) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-60px", left: "5%", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,210,225,0.45) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.35fr",
          minHeight: "100vh",
          alignItems: "stretch",
        }}
        className="testi-grid"
      >
        {/* ══ LEFT — Full-Bleed Model Photo ══════════════════════ */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            minHeight: "600px",
          }}
          className="testi-model-col"
        >
          <img
            src={testimonialModelImg}
            alt="Isabella Rose – Testimonials portrait"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "55% top",
              display: "block",
            }}
          />
          {/* Right-edge fade blending into pink bg */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              width: "22%",
              background: `linear-gradient(to right, transparent, ${COLOR_BG})`,
              pointerEvents: "none",
            }}
          />
        </div>

        {/* ══ RIGHT — Content ═════════════════════════════════════ */}
        <div
          style={{
            padding: "72px 56px 72px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            boxSizing: "border-box",
          }}
          className="testi-content-col"
        >
          {/* ── Heading ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            style={{ marginBottom: "6px" }}
          >
            <h2
              style={{
                fontFamily: FONT_SERIF,
                fontSize: "clamp(38px, 4.5vw, 62px)",
                fontWeight: 700,
                color: COLOR_CHARCOAL,
                lineHeight: 1.1,
                margin: 0,
                letterSpacing: "-0.01em",
              }}
            >
              What{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: COLOR_ROSE,
                  fontWeight: 600,
                }}
              >
                People
              </em>{" "}
              Say
            </h2>
          </motion.div>

          {/* Spark divider */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            style={{ display: "flex", alignItems: "center", gap: "10px", margin: "14px 0 16px" }}
          >
            <div style={{ width: "36px", height: "1px", background: COLOR_ROSE, opacity: 0.4 }} />
            <span style={{ color: COLOR_ROSE, fontSize: "12px" }}>✦</span>
            <div style={{ width: "36px", height: "1px", background: COLOR_ROSE, opacity: 0.4 }} />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.18 }}
            style={{
              fontFamily: FONT_SANS,
              fontSize: "14px",
              color: COLOR_MUTED,
              lineHeight: 1.65,
              margin: "0 0 36px",
              maxWidth: "420px",
            }}
          >
            A few words from the people, brands and creative teams I've had the opportunity to work with.
          </motion.p>

          {/* 2×2 Testimonial Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
            className="testi-cards-grid"
          >
            {TESTIMONIALS.map((item, i) => (
              <TestimonialCard
                key={i}
                item={item}
                delay={0.22 + i * 0.1}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Responsive CSS ──────────────────────────────────────── */}
      <style>{`
        @media (max-width: 960px) {
          .testi-grid {
            grid-template-columns: 1fr !important;
          }
          .testi-model-col {
            height: 440px !important;
            min-height: 0 !important;
          }
          .testi-content-col {
            padding: 52px 28px 60px !important;
          }
        }
        @media (max-width: 560px) {
          .testi-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
