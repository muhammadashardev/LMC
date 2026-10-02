import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Design Tokens ─────────────────────────────────────────────── */
const ACCENT     = '#d2677e';
const ACCENT_HOV = '#bf546c';
const DARK_TEXT  = '#1c191b';
const MUTED_TEXT = '#564549';
const FONT_SERIF = "'Cormorant Garamond', Georgia, serif";
const FONT_SANS  = "'Inter', system-ui, sans-serif";

/* ── Animation Variants ────────────────────────────────────────── */
const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4500);
  };

  return (
    <section
      id="contact"
      style={{
        fontFamily: FONT_SANS,
        backgroundColor: '#f5d5d8',
      }}
      className="relative w-full min-h-screen overflow-hidden py-16 md:py-24 lg:py-28 flex items-center"
    >
      {/* ═══════════ FULL-WIDTH BACKGROUND HERO IMAGE ═══════════ */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src="/contact_hero_bg.jpg"
          alt="Let's Work Together Background"
          className="w-full h-full object-cover object-[20%_center] sm:object-[28%_center] md:object-[left_center]"
        />

        {/* Responsive light gradient overlay on smaller screens to ensure crystal-clear text readability */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{
            background:
              'linear-gradient(to bottom, rgba(245, 213, 216, 0.25) 0%, rgba(245, 213, 216, 0.88) 35%, rgba(245, 213, 216, 0.96) 100%)',
          }}
        />

        {/* Soft edge blend for ultra-wide displays */}
        <div
          className="hidden lg:block absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, transparent 0%, transparent 40%, rgba(245, 213, 216, 0.15) 55%, rgba(245, 213, 216, 0.28) 100%)',
          }}
        />
      </div>

      {/* ═══════════ MAIN CONTENT GRID ═══════════ */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left Column Spacer (Leaves room for the model on desktop) */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-5" />

          {/* Middle & Right Columns Container */}
          <div className="lg:col-span-8 xl:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* ── MIDDLE COLUMN: CONTACT INFO & SOCIALS ── */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="md:col-span-5 flex flex-col justify-start md:pr-6 md:border-r border-[#d2677e]/25 pt-2"
            >
              {/* EMAIL */}
              <motion.div variants={itemVariants} className="mb-6">
                <span
                  className="block text-[11px] font-semibold tracking-[0.25em] uppercase mb-3"
                  style={{ color: ACCENT }}
                >
                  EMAIL
                </span>
                <motion.a
                  href="mailto:hello@rhiannonward.com.au"
                  whileHover={{ x: 4 }}
                  className="group inline-flex items-center gap-3 text-[14px] text-[#3e3135] hover:text-[#d2677e] transition-colors"
                >
                  <motion.span
                    whileHover={{ scale: 1.12 }}
                    className="w-8 h-8 rounded-full flex items-center justify-center border border-[#d2677e]/35 bg-white/40 transition-transform"
                    style={{ color: ACCENT }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </motion.span>
                  <span className="font-normal truncate">hello@rhiannonward.com.au</span>
                </motion.a>
              </motion.div>

              {/* Thin Separator */}
              <motion.div variants={itemVariants} className="w-full h-[1px] bg-[#d2677e]/20 mb-6" />

              {/* LOCATION */}
              <motion.div variants={itemVariants} className="mb-6">
                <span
                  className="block text-[11px] font-semibold tracking-[0.25em] uppercase mb-3"
                  style={{ color: ACCENT }}
                >
                  LOCATION
                </span>
                <div className="inline-flex items-center gap-3 text-[14px] text-[#3e3135]">
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center border border-[#d2677e]/35 bg-white/40"
                    style={{ color: ACCENT }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span className="font-normal">Melbourne, Australia</span>
                </div>
              </motion.div>

              {/* Thin Separator */}
              <motion.div variants={itemVariants} className="w-full h-[1px] bg-[#d2677e]/20 mb-6" />

              {/* CONNECT */}
              <motion.div variants={itemVariants}>
                <span
                  className="block text-[11px] font-semibold tracking-[0.25em] uppercase mb-4"
                  style={{ color: ACCENT }}
                >
                  CONNECT
                </span>
                <div className="flex flex-col gap-3.5">
                  {/* Instagram */}
                  <motion.a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ x: 4 }}
                    className="group inline-flex items-center gap-3 text-[14px] text-[#3e3135] hover:text-[#d2677e] transition-colors"
                  >
                    <motion.span
                      whileHover={{ scale: 1.12 }}
                      className="w-8 h-8 rounded-full flex items-center justify-center border border-[#d2677e]/35 bg-white/40 transition-transform"
                      style={{ color: ACCENT }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </motion.span>
                    <span>@rhiannonward</span>
                  </motion.a>

                  {/* Facebook */}
                  <motion.a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ x: 4 }}
                    className="group inline-flex items-center gap-3 text-[14px] text-[#3e3135] hover:text-[#d2677e] transition-colors"
                  >
                    <motion.span
                      whileHover={{ scale: 1.12 }}
                      className="w-8 h-8 rounded-full flex items-center justify-center border border-[#d2677e]/35 bg-white/40 transition-transform"
                      style={{ color: ACCENT }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </motion.span>
                    <span>/rhiannonward</span>
                  </motion.a>

                  {/* Pinterest */}
                  <motion.a
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ x: 4 }}
                    className="group inline-flex items-center gap-3 text-[14px] text-[#3e3135] hover:text-[#d2677e] transition-colors"
                  >
                    <motion.span
                      whileHover={{ scale: 1.12 }}
                      className="w-8 h-8 rounded-full flex items-center justify-center border border-[#d2677e]/35 bg-white/40 transition-transform"
                      style={{ color: ACCENT }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M12 0a12 12 0 0 0-4.37 23.18c-.06-.98-.12-2.48.02-3.55l1-4.24s-.26-.52-.26-1.28c0-1.2.7-2.1 1.57-2.1.74 0 1.1.56 1.1 1.22 0 .74-.47 1.86-.72 2.89-.2.87.43 1.57 1.29 1.57 1.55 0 2.74-1.63 2.74-3.99 0-2.09-1.5-3.55-3.64-3.55-2.48 0-3.94 1.86-3.94 3.78 0 .75.29 1.55.65 1.99.07.09.08.17.06.26l-.24 1.01c-.04.16-.13.2-.3.12-1.12-.52-1.82-2.15-1.82-3.46 0-2.82 2.05-5.41 5.91-5.41 3.1 0 5.51 2.21 5.51 5.17 0 3.08-1.94 5.57-4.64 5.57-.91 0-1.76-.47-2.05-1.02l-.56 2.14c-.2.78-.75 1.76-1.12 2.36A12 12 0 1 0 12 0z" />
                      </svg>
                    </motion.span>
                    <span>/rhiannonward</span>
                  </motion.a>

                  {/* Globe Website */}
                  <motion.a
                    href="https://rhiannonward.com.au"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ x: 4 }}
                    className="group inline-flex items-center gap-3 text-[14px] text-[#3e3135] hover:text-[#d2677e] transition-colors"
                  >
                    <motion.span
                      whileHover={{ scale: 1.12 }}
                      className="w-8 h-8 rounded-full flex items-center justify-center border border-[#d2677e]/35 bg-white/40 transition-transform"
                      style={{ color: ACCENT }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" x2="22" y1="12" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    </motion.span>
                    <span>rhiannonward.com.au</span>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            {/* ── RIGHT COLUMN: HEADING & FORM ── */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUpVariants}
              className="md:col-span-7 flex flex-col justify-start"
            >
              {/* Header Title */}
              <div className="mb-6">
                <h2
                  style={{
                    fontFamily: FONT_SERIF,
                    color: DARK_TEXT,
                  }}
                  className="text-[46px] sm:text-[54px] md:text-[60px] lg:text-[66px] leading-[1.04] font-normal"
                >
                  <span>Let’s Work</span>
                  <br />
                  <span
                    style={{ color: ACCENT }}
                    className="italic font-normal"
                  >
                    Together
                  </span>
                </h2>

                {/* Star Divider Line */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center gap-3 my-4"
                >
                  <span className="h-[1px] w-12 sm:w-16 bg-[#d2677e]/30" />
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-3.5 h-3.5"
                    style={{ color: ACCENT }}
                  >
                    <path d="M12 2C12 7.523 7.523 12 2 12c5.523 0 10 4.477 10 10 0-5.523 4.477-10 10-10-5.523 0-10-4.477-10-10z" />
                  </svg>
                  <span className="h-[1px] w-12 sm:w-16 bg-[#d2677e]/30" />
                </motion.div>

                {/* Subtitle Description */}
                <p
                  style={{ color: MUTED_TEXT }}
                  className="text-[14px] sm:text-[15px] leading-relaxed max-w-[400px]"
                >
                  I’m always open to exciting opportunities.
                  <br />
                  Let’s create something beautiful.
                </p>
              </div>

              {/* Form Component */}
              <motion.form
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-3.5 max-w-[440px]"
              >
                {/* Name */}
                <motion.div variants={itemVariants}>
                  <input
                    type="text"
                    required
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl text-[14px] text-[#241c1e] placeholder-[#8c7479] outline-none transition-all border border-white/60 focus:border-[#d2677e] focus:bg-white/70"
                    style={{
                      backgroundColor: 'rgba(255, 235, 237, 0.72)',
                      backdropFilter: 'blur(8px)',
                    }}
                  />
                </motion.div>

                {/* Email */}
                <motion.div variants={itemVariants}>
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl text-[14px] text-[#241c1e] placeholder-[#8c7479] outline-none transition-all border border-white/60 focus:border-[#d2677e] focus:bg-white/70"
                    style={{
                      backgroundColor: 'rgba(255, 235, 237, 0.72)',
                      backdropFilter: 'blur(8px)',
                    }}
                  />
                </motion.div>

                {/* Company / Brand */}
                <motion.div variants={itemVariants}>
                  <input
                    type="text"
                    placeholder="Company / Brand"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl text-[14px] text-[#241c1e] placeholder-[#8c7479] outline-none transition-all border border-white/60 focus:border-[#d2677e] focus:bg-white/70"
                    style={{
                      backgroundColor: 'rgba(255, 235, 237, 0.72)',
                      backdropFilter: 'blur(8px)',
                    }}
                  />
                </motion.div>

                {/* Project Type Select */}
                <motion.div variants={itemVariants} className="relative">
                  <select
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl text-[14px] text-[#241c1e] placeholder-[#8c7479] outline-none transition-all border border-white/60 focus:border-[#d2677e] focus:bg-white/70 appearance-none cursor-pointer"
                    style={{
                      backgroundColor: 'rgba(255, 235, 237, 0.72)',
                      backdropFilter: 'blur(8px)',
                      color: formData.projectType ? '#241c1e' : '#8c7479',
                    }}
                  >
                    <option value="" disabled>
                      Project Type
                    </option>
                    <option value="editorial" className="text-[#241c1e]">
                      Editorial & Campaign
                    </option>
                    <option value="runway" className="text-[#241c1e]">
                      Runway & Fashion Week
                    </option>
                    <option value="commercial" className="text-[#241c1e]">
                      Commercial & Ambassador
                    </option>
                    <option value="collaboration" className="text-[#241c1e]">
                      Creative Collaboration
                    </option>
                    <option value="other" className="text-[#241c1e]">
                      Other Enquiry
                    </option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#8c7479]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </motion.div>

                {/* Message Textarea */}
                <motion.div variants={itemVariants}>
                  <textarea
                    rows={4}
                    required
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl text-[14px] text-[#241c1e] placeholder-[#8c7479] outline-none transition-all border border-white/60 focus:border-[#d2677e] focus:bg-white/70 resize-none"
                    style={{
                      backgroundColor: 'rgba(255, 235, 237, 0.72)',
                      backdropFilter: 'blur(8px)',
                    }}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    style={{
                      backgroundColor: ACCENT,
                      boxShadow: '0 8px 24px -4px rgba(210, 103, 126, 0.45)',
                    }}
                    className="w-full py-3.5 px-6 rounded-xl text-white text-[13px] font-semibold tracking-[0.22em] uppercase transition-colors duration-300 hover:bg-[#bf546c] flex items-center justify-center gap-2.5 mt-1 cursor-pointer"
                  >
                    <span>SEND ENQUIRY</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3.5 h-3.5"
                    >
                      <path d="M12 2C12 7.523 7.523 12 2 12c5.523 0 10 4.477 10 10 0-5.523 4.477-10 10-10-5.523 0-10-4.477-10-10z" />
                    </svg>
                  </motion.button>
                </motion.div>

                {/* Success feedback toast */}
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-2 p-3.5 rounded-xl bg-white/80 border border-[#d2677e]/30 text-center"
                    >
                      <p className="text-[13.5px] font-medium text-[#241c1e]">
                        ✨ Thank you! Your enquiry has been sent successfully.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
