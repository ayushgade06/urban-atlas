'use client'

import { motion } from 'framer-motion'
import { FadeUp } from '@/components/fade-up'
import Link from 'next/link'

const MotionLink = motion(Link)

// Handshake illustration using lucide-style SVG
function HandshakeIllustration() {
  return (
    <div className="w-40 h-40 rounded-full bg-brand-faint flex items-center justify-center mx-auto lg:mx-0">
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        className="text-brand"
      >
        {/* Left hand */}
        <path
          d="M10 45 C10 45 15 35 25 32 L38 28 L42 35 L32 38"
          stroke="#FF2D55" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"
        />
        {/* Right hand */}
        <path
          d="M70 45 C70 45 65 35 55 32 L42 28 L38 35 L48 38"
          stroke="#FF2D55" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"
        />
        {/* Handshake grip */}
        <path
          d="M32 38 C32 38 36 42 40 42 C44 42 48 38 48 38"
          stroke="#FF2D55" strokeWidth="3" strokeLinecap="round" fill="none"
        />
        {/* Fingers left */}
        <path d="M32 38 L28 44 M34 40 L30 46 M36 41 L33 48" stroke="#FF2D55" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        {/* Fingers right */}
        <path d="M48 38 L52 44 M46 40 L50 46 M44 41 L47 48" stroke="#FF2D55" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        {/* Sparkle */}
        <circle cx="40" cy="24" r="3" fill="#FF2D55" opacity="0.4"/>
        <circle cx="56" cy="28" r="2" fill="#FF2D55" opacity="0.3"/>
        <circle cx="24" cy="28" r="2" fill="#FF2D55" opacity="0.3"/>
      </svg>
    </div>
  )
}

export default function BrokerSection() {
  return (
    <section className="py-16 bg-white" id="brokers">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — Text */}
          <FadeUp delay={0}>
            <div>
              <h2 className="text-2xl font-bold text-ink mb-4">For Brokers</h2>
              <p className="text-base text-ink-soft leading-relaxed mb-7">
                Partner with us and get quality buyer leads via WhatsApp &amp; other channels.
              </p>
              <MotionLink
                href="/channel-partners"
                id="broker-submit-cta"
                className="inline-flex items-center gap-2 border border-ink text-ink rounded-full px-5 py-2 text-sm font-medium hover:bg-gray-50 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Submit Details →
              </MotionLink>
            </div>
          </FadeUp>

          {/* RIGHT — Handshake illustration */}
          <FadeUp delay={0.15}>
            <motion.div
              className="flex justify-center lg:justify-end"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <HandshakeIllustration />
            </motion.div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
