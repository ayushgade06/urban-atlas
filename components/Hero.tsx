'use client'

import { motion } from 'framer-motion'
import {
  MapPin, ArrowRight, MessageCircle, CheckCircle2,
  FileText, Users, BarChart2,
} from 'lucide-react'
import { FadeUp } from '@/components/fade-up'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.102-2.884-6.964-1.86-1.862-4.331-2.886-6.968-2.887-5.44 0-9.866 4.42-9.869 9.866-.001 1.77.461 3.5 1.338 5.031L1.993 21.848l6.196-1.625-1.542-.924zm11.536-7.14c-.302-.15-1.78-.88-2.057-.98-.277-.1-.48-.15-.68.15-.2.3-.77.98-.95 1.18-.18.2-.36.23-.66.08-.3-.15-1.27-.47-2.42-1.5-1-.89-1.67-1.99-1.87-2.33-.2-.3-.02-.47.13-.62.14-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.63-.93-2.24-.24-.59-.48-.51-.68-.52-.17-.01-.38-.01-.58-.01-.2 0-.53.07-.8.37-.28.3-1.07 1.05-1.07 2.56s1.09 2.97 1.24 3.17c.15.2 2.15 3.28 5.21 4.6 1.13.48 2.02.77 2.71.99.76.24 1.46.21 2.01.12.61-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35z" />
    </svg>
  )
}

const stats = [
  { icon: FileText, number: '1,500+', label: 'Plots Listed' },
  { icon: Users, number: '3,000+', label: 'Active Buyers' },
  { icon: MapPin, number: '9', label: 'Focus Localities' },
  { icon: BarChart2, number: 'Real-time', label: 'Market Intelligence' },
]

export default function Hero() {
  return (
    <section className="pt-14 pb-10 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN */}
          <div>
            <FadeUp delay={0}>
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-faint text-brand text-xs font-semibold px-3 py-1.5 mb-6">
                <MapPin className="h-3.5 w-3.5" />
                Lucknow Real Estate Intelligence
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              {/* Heading */}
              <h1 className="text-5xl font-extrabold leading-tight text-ink mb-4">
                Connecting<br />
                Plot Owners<br />
                With{' '}
                <span className="text-brand">Serious Buyers.</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.15}>
              {/* Subtext */}
              <p className="text-ink-soft text-base leading-relaxed max-w-md">
                We help you reach genuine buyers and sell your plot with confidence.
              </p>
            </FadeUp>

            <FadeUp delay={0.22}>
              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <motion.a
                  href="#submit-plot"
                  id="hero-submit-cta"
                  className="inline-flex items-center gap-2 bg-brand text-white rounded-full px-7 py-3 font-semibold text-sm hover:bg-[#e0001e] transition-all duration-200 shadow-sm"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Submit Your Plot
                  <ArrowRight className="h-4 w-4" />
                </motion.a>
                <motion.a
                  href="#buyer-circle"
                  id="hero-buyer-circle-cta"
                  className="inline-flex items-center gap-2 border-2 border-ink/20 text-ink rounded-full px-7 py-3 font-semibold text-sm hover:border-ink/40 transition-all duration-200"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                  Join Buyer Circle
                </motion.a>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              {/* Trust row */}
              <div className="mt-6 flex flex-wrap gap-5 text-sm text-ink-soft">
                {['Free Submission', 'No Brokerage', 'Authority Plots Only'].map((item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-brand flex-shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* RIGHT COLUMN — Stats Card */}
          <FadeUp delay={0.18}>
            <motion.div
              className="bg-gradient-to-br from-brand-lighter to-white border border-brand-light rounded-card shadow-lg p-8 relative overflow-hidden"
              whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(255,45,85,0.10)' }}
              transition={{ duration: 0.22 }}
            >
              {/* Decorative city silhouette */}
              <div className="absolute bottom-0 right-0 opacity-[0.07] pointer-events-none select-none">
                <svg width="220" height="120" viewBox="0 0 220 120" fill="#FF2D55">
                  <rect x="10" y="60" width="20" height="60" />
                  <rect x="35" y="40" width="25" height="80" />
                  <rect x="65" y="20" width="30" height="100" />
                  <rect x="100" y="50" width="18" height="70" />
                  <rect x="125" y="30" width="28" height="90" />
                  <rect x="158" y="55" width="22" height="65" />
                  <rect x="185" y="35" width="25" height="85" />
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-6 relative z-10">
                {stats.map(({ icon: Icon, number, label }) => (
                  <div key={label} className="flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-faint flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-brand" />
                    </div>
                    <div>
                      <div className="text-3xl font-extrabold text-ink leading-none">{number}</div>
                      <div className="text-sm text-ink-soft mt-1">{label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
