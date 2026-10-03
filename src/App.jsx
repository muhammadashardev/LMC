import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './index.css'
import InteractiveLoader from './components/InteractiveLoader'
import LandingStardustEffect from './components/LandingStardustEffect'
import HeroSection from './components/HeroSection'
import PortfolioSection from './components/PortfolioSection'
import AboutSection from './components/AboutSection'
import PurposeSection from './components/PurposeSection'
import ExperienceSection from './components/ExperienceSection'
import CollaborationSection from './components/CollaborationSection'
import PitchDeckSection from './components/PitchDeckSection'
import JournalSection from './components/JournalSection'
import FaqSection from './components/FaqSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'
import FooterSection from './components/FooterSection'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  // Prevent background scrolling while preloader is active
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isLoading])

  return (
    <>
      {/* ── Interactive Stardust Stars Trail & Click Burst across Landing Page ── */}
      <LandingStardustEffect />

      {/* ── Preloader ── */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <InteractiveLoader
            key="haute-loader"
            onComplete={() => setIsLoading(false)}
          />
        )}
      </AnimatePresence>

      <main style={{ position: 'relative' }}>
        <HeroSection />
        <PortfolioSection />
        <AboutSection />
        <PurposeSection />
        <ExperienceSection />
        <CollaborationSection />
        <PitchDeckSection />
        <JournalSection />
        <FaqSection />
        <TestimonialsSection />
        <ContactSection />
        <FooterSection />

        {/* Floating Replay Intro Button */}
        {!isLoading && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsLoading(true)}
            style={{
              position: 'fixed',
              bottom: '24px',
              right: '24px',
              zIndex: 999,
              background: 'rgba(16, 12, 15, 0.85)',
              border: '1px solid rgba(220, 65, 120, 0.4)',
              color: '#ffffff',
              padding: '10px 18px',
              borderRadius: '30px',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontFamily: "'Inter', sans-serif",
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0,0,0,0.35), 0 0 15px rgba(220,65,120,0.25)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
            title="Replay Interactive Intro Experience"
          >
            <span style={{ color: '#dc4178', fontSize: '12px' }}>✦</span>
            <span>REPLAY INTRO</span>
          </motion.button>
        )}
      </main>
    </>
  )
}

export default App