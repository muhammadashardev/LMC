import { useState } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Home",           href: "#hero" },
  { label: "About",          href: "#about" },
  { label: "Portfolio",      href: "#portfolio" },
  { label: "Representation", href: "#experience" },
  { label: "Experience",     href: "#experience" },
  { label: "Collaboration",  href: "#collaboration" },
  { label: "Journal",        href: "#journal" },
  { label: "Testimonials",   href: "#testimonials" },
  { label: "FAQ",            href: "#faq" },
  { label: "Contact",        href: "#contact" },
];

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);
const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const InstagramIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const XIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.726-8.835L1.254 2.25H8.08l4.261 5.635L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
  </svg>
);
const FacebookIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const YouTubeIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 1.96C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="white"/>
  </svg>
);
const PinterestIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.1.118.114.222.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);

const ROSE      = "#dc4178";
const ROSE_DEEP = "#b83363";
const DARK      = "#1a0c13";
const CHARCOAL  = "#1e1020";
const MUTED     = "#6b4a58";
const BG        = "#fce8f0";
const SANS      = "'Inter', system-ui, -apple-system, sans-serif";

const SOCIALS = [
  { icon: <InstagramIcon />, label: "Instagram", href: "https://instagram.com" },
  { icon: <LinkedInIcon />,  label: "LinkedIn",  href: "https://linkedin.com" },
  { icon: <XIcon />,         label: "X",         href: "https://x.com" },
  { icon: <FacebookIcon />,  label: "Facebook",  href: "https://facebook.com" },
  { icon: <YouTubeIcon />,   label: "YouTube",   href: "https://youtube.com" },
  { icon: <PinterestIcon />, label: "Pinterest", href: "https://pinterest.com" },
];

export default function FooterSection() {
  const [email, setEmail]           = useState("");
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
    <footer id="footer" style={{ fontFamily: SANS, width: "100%", overflowX: "hidden" }}>

      {/* CSS — all layout via classes so media queries work properly */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap');

        /* ── BASE (desktop first) ───────────────────────────────── */
        .ft-body {
          background: #fce8f0;
          position: relative;
          overflow: hidden;
          padding: 70px 48px 60px;
          box-sizing: border-box;
        }
        .ft-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.85fr 1.1fr;
          gap: 40px 40px;
          margin-right: clamp(190px, 22vw, 330px);
          align-items: start;
          position: relative;
          z-index: 2;
        }
        .ft-ribbon {
          position: absolute;
          right: 0; top: 0; bottom: 0;
          width: clamp(200px, 22vw, 320px);
          pointer-events: none;
          z-index: 0;
        }
        .ft-ribbon img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: left center;
          display: block;
        }
        .ft-bottom {
          background: #1a0c13;
          padding: 18px 48px 22px;
          box-sizing: border-box;
        }
        .ft-bottom-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
        }

        /* ── 1024px ─────────────────────────────────────────────── */
        @media (max-width: 1024px) {
          .ft-body   { padding: 56px 36px 52px; }
          .ft-ribbon { width: clamp(130px, 15vw, 190px); }
          .ft-grid   { margin-right: clamp(130px, 15vw, 190px); gap: 32px 28px; }
          .ft-bottom { padding: 16px 36px 20px; }
        }

        /* ── 768px — ribbon off, 2 columns ──────────────────────── */
        @media (max-width: 768px) {
          .ft-body    { padding: 48px 24px 44px; }
          .ft-ribbon  { display: none; }
          .ft-grid    {
            grid-template-columns: 1fr 1fr;
            margin-right: 0;
            gap: 32px 20px;
          }
          .ft-bottom { padding: 14px 24px 18px; }
          .ft-bottom-inner {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 8px;
          }
        }

        /* ── 540px — single column ───────────────────────────────── */
        @media (max-width: 540px) {
          .ft-body { padding: 40px 18px 40px; }
          .ft-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .ft-bottom { padding: 12px 16px 16px; }
          .ft-tagline { display: none; }
          .ft-bottom-inner {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            gap: 6px 12px;
            text-align: center;
          }
        }

        /* ── 380px ───────────────────────────────────────────────── */
        @media (max-width: 380px) {
          .ft-body { padding: 32px 14px 36px; }
          .ft-grid { gap: 22px; }
        }
      `}</style>

      {/* ════ MAIN BODY ═══════════════════════════════════════════ */}
      <div className="ft-body">

        {/* Pink ribbon — hidden on mobile via CSS */}
        <div className="ft-ribbon">
          <img src="/02_right_ribbon_shape.png" alt=""/>
        </div>

        {/* Sparkle accent */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#dc4178"
          style={{ position:"absolute", top:"42px", left:"42%", opacity:0.7, zIndex:1, pointerEvents:"none" }}>
          <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5Z"/>
        </svg>

        {/* 3-column grid */}
        <div className="ft-grid">

          {/* COL 1 — Brand */}
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.65 }}>
            <img
              src="/01_lmc_logo.png"
              alt="AI LMC — Fashion · Talent · Opportunity"
              style={{ height:"clamp(120px,15vw,195px)", width:"auto", objectFit:"contain", display:"block", marginBottom:"16px" }}
            />
            <p style={{ fontSize:"13.5px", lineHeight:1.75, color:MUTED, margin:"0 0 26px", maxWidth:"220px" }}>
              Connecting exceptional talent with brands, creating opportunities and shaping the future of fashion.
            </p>
            <motion.button
              whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}
              onClick={() => scrollTo("#contact")}
              style={{ display:"inline-flex", alignItems:"center", gap:"10px", padding:"11px 20px", border:`1.5px solid ${ROSE_DEEP}`, borderRadius:"50px", background:"transparent", fontSize:"13.5px", fontWeight:500, color:CHARCOAL, cursor:"pointer", fontFamily:SANS }}
            >
              Let&apos;s Collaborate
              <span style={{ width:"30px", height:"30px", borderRadius:"50%", background:`linear-gradient(135deg,${ROSE},${ROSE_DEEP})`, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", flexShrink:0, boxShadow:"0 3px 10px rgba(220,65,120,0.4)" }}>
                <ArrowIcon />
              </span>
            </motion.button>
          </motion.div>

          {/* COL 2 — Quick Links */}
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.65, delay:0.1 }}>
            <h3 style={{ fontSize:"17px", fontWeight:700, color:CHARCOAL, margin:"0 0 16px", fontFamily:SANS }}>Quick Links</h3>
            <ul style={{ listStyle:"none", padding:0, margin:0 }}>
              {NAV_LINKS.map((link) => (
                <li key={link.label} style={{ borderBottom:"1px solid rgba(180,100,130,0.12)" }}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"8px 0", fontSize:"14px", color:CHARCOAL, textDecoration:"none", transition:"color 0.2s", cursor:"pointer", fontFamily:SANS }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = ROSE; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = CHARCOAL; }}
                  >
                    <span>{link.label}</span>
                    <span style={{ color:MUTED, opacity:0.65 }}><ArrowIcon /></span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COL 3 — Newsletter + Social */}
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.65, delay:0.2 }}>
            <h3 style={{ fontSize:"17px", fontWeight:700, color:CHARCOAL, margin:"0 0 7px", fontFamily:SANS }}>Stay in the Loop</h3>
            <p style={{ fontSize:"13px", color:MUTED, lineHeight:1.65, margin:"0 0 16px", fontFamily:SANS }}>
              Get the latest updates on opportunities, projects and fashion news.
            </p>

            {subscribed ? (
              <motion.div initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }}
                style={{ padding:"12px 18px", borderRadius:"50px", background:"rgba(220,65,120,0.1)", border:"1px solid rgba(220,65,120,0.3)", fontSize:"13px", color:ROSE_DEEP, fontWeight:600, marginBottom:"24px", fontFamily:SANS }}>
                ✦ Thank you for subscribing!
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display:"flex", alignItems:"center", background:"rgba(255,255,255,0.68)", border:"1px solid rgba(180,100,130,0.2)", borderRadius:"50px", padding:"5px 5px 5px 14px", marginBottom:"24px", backdropFilter:"blur(8px)" }}>
                <span style={{ color:MUTED, display:"flex", alignItems:"center", marginRight:"8px", flexShrink:0 }}><MailIcon /></span>
                <input
                  type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address" required
                  style={{ flex:1, minWidth:0, border:"none", background:"transparent", fontSize:"13px", color:CHARCOAL, outline:"none", padding:"4px 0", fontFamily:SANS }}
                />
                <motion.button type="submit" whileHover={{ scale:1.1 }} whileTap={{ scale:0.93 }}
                  style={{ width:"36px", height:"36px", borderRadius:"50%", background:`linear-gradient(135deg,${ROSE},${ROSE_DEEP})`, border:"none", color:"#fff", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, boxShadow:"0 3px 12px rgba(220,65,120,0.4)" }}>
                  <ArrowIcon />
                </motion.button>
              </form>
            )}

            <h3 style={{ fontSize:"17px", fontWeight:700, color:CHARCOAL, margin:"0 0 12px", fontFamily:SANS }}>Follow Us</h3>
            <div style={{ display:"flex", gap:"9px", flexWrap:"wrap", marginBottom:"24px" }}>
              {SOCIALS.map((s) => (
                <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  whileHover={{ scale:1.18, y:-2 }}
                  style={{ width:"38px", height:"38px", borderRadius:"50%", border:"1px solid rgba(180,100,130,0.24)", background:"rgba(255,255,255,0.58)", display:"flex", alignItems:"center", justifyContent:"center", color:ROSE_DEEP, cursor:"pointer", transition:"all 0.22s", textDecoration:"none" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background="rgba(220,65,120,0.15)"; e.currentTarget.style.borderColor=ROSE; e.currentTarget.style.boxShadow="0 4px 14px rgba(220,65,120,0.25)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background="rgba(255,255,255,0.58)"; e.currentTarget.style.borderColor="rgba(180,100,130,0.24)"; e.currentTarget.style.boxShadow="none"; }}>
                  {s.icon}
                </motion.a>
              ))}
            </div>

            <div style={{ fontFamily:"'Dancing Script', cursive", fontSize:"clamp(22px,2.6vw,30px)", color:ROSE, lineHeight:1.4, fontWeight:600 }}>
              More than fashion,<br />
              It&apos;s opportunity <span style={{ fontSize:"0.85em" }}>&#x2665;</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Wave */}
      <div style={{ position:"relative", lineHeight:0, background:BG }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
          style={{ display:"block", width:"100%", height:"clamp(28px,5vw,68px)", marginBottom:"-2px" }}>
          <path d="M0,10 C180,75 360,5 540,52 C720,100 900,12 1100,52 C1260,82 1380,35 1440,48 L1440,80 L0,80 Z" fill="#1a0c13"/>
        </svg>
      </div>

      {/* Dark bottom bar */}
      <div className="ft-bottom">
        <div className="ft-bottom-inner">
          <span style={{ fontSize:"12px", color:"rgba(255,200,220,0.52)", letterSpacing:"0.03em", fontFamily:SANS, whiteSpace:"nowrap" }}>
            &copy; 2025 AI LMC. All rights reserved.
          </span>

          <div className="ft-tagline" style={{ display:"flex", alignItems:"center", gap:"10px" }}>
            <div style={{ width:"clamp(20px,5vw,80px)", height:"1px", background:"rgba(220,65,120,0.38)" }}/>
            <span style={{ fontSize:"9px", fontWeight:500, letterSpacing:"0.22em", color:"rgba(255,200,220,0.45)", textTransform:"uppercase", whiteSpace:"nowrap", fontFamily:SANS }}>
              FASHION&nbsp;&bull;&nbsp;TALENT&nbsp;&bull;&nbsp;OPPORTUNITY
            </span>
            <div style={{ width:"clamp(20px,5vw,80px)", height:"1px", background:"rgba(220,65,120,0.38)" }}/>
          </div>

          <div style={{ display:"flex", alignItems:"center", gap:"4px" }}>
            <a href="#" style={{ fontSize:"12px", color:"rgba(255,200,220,0.52)", textDecoration:"none", transition:"color 0.2s", whiteSpace:"nowrap", fontFamily:SANS }}
              onMouseEnter={(e) => { e.currentTarget.style.color = ROSE; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,200,220,0.52)"; }}>
              Privacy Policy
            </a>
            <span style={{ color:"rgba(220,65,120,0.4)", margin:"0 6px" }}>|</span>
            <a href="#" style={{ fontSize:"12px", color:"rgba(255,200,220,0.52)", textDecoration:"none", transition:"color 0.2s", whiteSpace:"nowrap", fontFamily:SANS }}
              onMouseEnter={(e) => { e.currentTarget.style.color = ROSE; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,200,220,0.52)"; }}>
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}