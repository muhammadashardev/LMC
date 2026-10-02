import { useState } from "react";
import { motion } from "framer-motion";
import footerModelImg from "../assets/faq_model_bg.jpg";

/* ── Nav Links ───────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Experience & Services", href: "#experience" },
  { label: "Pitch Deck", href: "#pitch-deck" },
  { label: "Editorial Journal", href: "#journal" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact & Booking", href: "#contact" },
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

/* ── Design Tokens ───────────────────────────────────────────── */
const COLOR_ROSE      = "#dc4178";
const COLOR_ROSE_DEEP = "#b83363";
const COLOR_CHARCOAL  = "#1a1417";
const COLOR_MUTED     = "#5a3f4b";
const COLOR_BG        = "#fce8f0";
const FONT_SERIF = "'Cormorant Garamond', Georgia, serif";
const FONT_SANS  = "'Inter', system-ui, -apple-system, sans-serif";

/* ── Column Heading ─────────────────────────────────────────── */
function ColHeading({ children }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <span style={{ fontFamily: FONT_SANS, fontSize: "10px", fontWeight: 700, letterSpacing: "0.24em", color: COLOR_ROSE }}>
        {children}
      </span>
      <div style={{ height: "1px", width: "32px", background: COLOR_ROSE, opacity: 0.45, marginTop: "8px" }} />
    </div>
  );
}

export default function FooterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer id="footer" style={{ fontFamily: FONT_SANS, width: "100%" }}>

      {/* ══════════ TOP — Full-width Model Banner ══════════════════ */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "clamp(300px, 42vw, 560px)",
          overflow: "hidden",
        }}
      >
        <img
          src={footerModelImg}
          alt="Isabella Rose"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "50% 20%",
            display: "block",
          }}
        />
        {/* Bottom gradient blending into footer body */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "55%",
            background: `linear-gradient(to bottom, transparent 0%, ${COLOR_BG} 100%)`,
            pointerEvents: "none",
          }}
        />
      </div>

      {/* ══════════ MAIN FOOTER BODY ════════════════════════════════ */}
      <div
        style={{
          background: COLOR_BG,
          padding: "52px 60px 0",
          boxSizing: "border-box",
        }}
        className="footer-body"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1.2fr 1.5fr",
            gap: "40px",
            maxWidth: "1200px",
            margin: "0 auto",
            alignItems: "start",
          }}
          className="footer-grid"
        >

          {/* ── COL 1: Brand Identity ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* LMC Logo & Identity */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
              <img
                src="/lmc_logo.png"
                alt="LMC Logo"
                style={{
                  height: "56px",
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <div>
                <span
                  style={{
                    fontFamily: FONT_SERIF,
                    fontSize: "26px",
                    fontWeight: 700,
                    color: COLOR_CHARCOAL,
                    letterSpacing: "0.06em",
                    lineHeight: 1,
                    display: "block",
                  }}
                >
                  LMC
                </span>
                <span
                  style={{
                    fontFamily: FONT_SERIF,
                    fontSize: "15px",
                    fontStyle: "italic",
                    fontWeight: 600,
                    color: COLOR_ROSE,
                    display: "block",
                    letterSpacing: "0.04em",
                    marginTop: "3px",
                  }}
                >
                  Lumina Model Agency
                </span>
              </div>
            </div>

            <p
              style={{
                fontFamily: FONT_SANS,
                fontSize: "13px",
                lineHeight: 1.7,
                color: COLOR_MUTED,
                margin: "16px 0 22px",
                maxWidth: "220px",
              }}
            >
              Model. Storyteller. Creative.<br />
              Melbourne-based and driven by passion, purpose and collaboration.
            </p>

            {/* Social Icons Row */}
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              {[
                { icon: <IgSVG />, label: "Instagram", href: "https://instagram.com" },
                { icon: <TkSVG />, label: "TikTok", href: "https://tiktok.com" },
                { icon: <PinSVG />, label: "Pinterest", href: "https://pinterest.com" },
                { icon: <MailSVG />, label: "Email", href: "#contact" },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.15 }}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "1px solid rgba(220,65,120,0.28)",
                    background: "rgba(255,255,255,0.52)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: COLOR_ROSE_DEEP,
                    cursor: "pointer",
                    transition: "background 0.2s, border-color 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(220,65,120,0.14)"; e.currentTarget.style.borderColor = COLOR_ROSE; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.52)"; e.currentTarget.style.borderColor = "rgba(220,65,120,0.28)"; }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── COL 2: Navigation ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <ColHeading>NAVIGATION</ColHeading>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    style={{
                      fontFamily: FONT_SANS,
                      fontSize: "14px",
                      color: COLOR_CHARCOAL,
                      textDecoration: "none",
                      transition: "color 0.2s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = COLOR_ROSE; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = COLOR_CHARCOAL; }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── COL 3: Contact Details ────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            <ColHeading>CONTACT</ColHeading>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                {
                  icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={COLOR_ROSE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  ),
                  text: "hello@isabellarose.com",
                },
                {
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={COLOR_ROSE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  ),
                  text: "Melbourne, Australia",
                },
                {
                  icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={COLOR_ROSE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  ),
                  text: "Available for travel",
                },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.56)",
                      border: "1px solid rgba(220,65,120,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <span style={{ fontFamily: FONT_SANS, fontSize: "13.5px", color: COLOR_CHARCOAL, lineHeight: 1.4 }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── COL 4: Newsletter Subscribe ───────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            <ColHeading>LET'S STAY CONNECTED</ColHeading>
            <p style={{ fontFamily: FONT_SANS, fontSize: "13.5px", color: COLOR_MUTED, lineHeight: 1.65, margin: "0 0 18px" }}>
              Subscribe for updates on new work, projects and collaborations.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  padding: "12px 18px",
                  borderRadius: "12px",
                  background: "rgba(220,65,120,0.12)",
                  border: "1px solid rgba(220,65,120,0.28)",
                  fontFamily: FONT_SANS,
                  fontSize: "13px",
                  color: COLOR_ROSE_DEEP,
                  fontWeight: 600,
                }}
              >
                ✦ Thank you for subscribing!
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: "flex", alignItems: "center", gap: "0" }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  style={{
                    flex: 1,
                    padding: "12px 16px",
                    borderRadius: "12px 0 0 12px",
                    border: "1px solid rgba(220,65,120,0.22)",
                    borderRight: "none",
                    background: "rgba(255,255,255,0.55)",
                    fontFamily: FONT_SANS,
                    fontSize: "13px",
                    color: COLOR_CHARCOAL,
                    outline: "none",
                    backdropFilter: "blur(8px)",
                  }}
                  onFocus={(e) => { e.target.style.borderColor = "rgba(220,65,120,0.55)"; e.target.style.background = "rgba(255,255,255,0.8)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "rgba(220,65,120,0.22)"; e.target.style.background = "rgba(255,255,255,0.55)"; }}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "0 12px 12px 0",
                    background: "linear-gradient(135deg, #e44d80 0%, #cb3266 100%)",
                    border: "none",
                    color: "#fff",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 4px 14px rgba(220,65,120,0.35)",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </motion.button>
              </form>
            )}

            <p style={{ fontFamily: FONT_SANS, fontSize: "11.5px", color: "#9a6878", margin: "10px 0 0", lineHeight: 1.5 }}>
              We respect your privacy. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>

        {/* ══════════ BOTTOM BAR ══════════════════════════════════════ */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "48px auto 0",
            padding: "18px 0",
            borderTop: "1px solid rgba(220,65,120,0.14)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
          className="footer-bottom-bar"
        >
          <span style={{ fontFamily: FONT_SANS, fontSize: "12px", color: COLOR_MUTED }}>
            © 2025 Isabella Rose. All Rights Reserved.
          </span>

          <motion.span
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            style={{ color: COLOR_ROSE, fontSize: "16px" }}
          >
            
          </motion.span>

          <span style={{ fontFamily: FONT_SANS, fontSize: "12px", color: COLOR_MUTED }}>
            Website by{" "}
            <a
              href="#"
              style={{ color: COLOR_ROSE, textDecoration: "none", fontWeight: 600 }}
              onMouseEnter={(e) => { e.currentTarget.style.textDecoration = "underline"; }}
              onMouseLeave={(e) => { e.currentTarget.style.textDecoration = "none"; }}
            >
              Lumina Agency
            </a>
          </span>
        </div>
      </div>

      {/* ── Responsive CSS ──────────────────────────────────────────── */}
      <style>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 640px) {
          .footer-body {
            padding: 40px 24px 0 !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .footer-bottom-bar {
            justify-content: center !important;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
