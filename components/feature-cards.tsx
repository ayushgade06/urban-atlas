'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react'
import { FadeUp } from '@/components/fade-up'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.102-2.884-6.964-1.86-1.862-4.331-2.886-6.968-2.887-5.44 0-9.866 4.42-9.869 9.866-.001 1.77.461 3.5 1.338 5.031L1.993 21.848l6.196-1.625-1.542-.924zm11.536-7.14c-.302-.15-1.78-.88-2.057-.98-.277-.1-.48-.15-.68.15-.2.3-.77.98-.95 1.18-.18.2-.36.23-.66.08-.3-.15-1.27-.47-2.42-1.5-1-.89-1.67-1.99-1.87-2.33-.2-.3-.02-.47.13-.62.14-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.63-.93-2.24-.24-.59-.48-.51-.68-.52-.17-.01-.38-.01-.58-.01-.2 0-.53.07-.8.37-.28.3-1.07 1.05-1.07 2.56s1.09 2.97 1.24 3.17c.15.2 2.15 3.28 5.21 4.6 1.13.48 2.02.77 2.71.99.76.24 1.46.21 2.01.12.61-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35z" />
    </svg>
  )
}

// Mock WhatsApp chat messages
const chatMessages = [
  {
    text: 'New plot available in Gomti Nagar Extension. 1800sqft, Park Facing.',
    time: '9:41 AM',
    type: 'received',
  },
  {
    text: 'Sushant Golf City, 1500sqft. Wide Road Frontage.',
    time: '11:02 AM',
    type: 'received',
  },
  {
    text: 'Awadh Vihar Yojana, 1200 sqft. Wide Facing.',
    time: '2:14 PM',
    type: 'received',
  },
]

export default function FeatureCards() {
  return (
    <section className="py-16 bg-gray-50/60" id="features">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Card 1 — Sell Your Plot */}
          <FadeUp delay={0}>
            <motion.div
              className="relative bg-white border border-gray-100 rounded-card p-8 shadow-sm h-full flex flex-col overflow-hidden"
              whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(255,45,85,0.10)' }}
              transition={{ duration: 0.22 }}
            >
              {/* Decorative home icon bottom-right */}
              <div className="absolute bottom-4 right-4 opacity-5 pointer-events-none">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="#FF2D55">
                  <path d="M3 12l9-9 9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" />
                </svg>
              </div>

              <p className="text-brand text-xs font-bold uppercase tracking-wider mb-2">Sell Your Plot</p>
              <h3 className="text-2xl font-bold text-ink mb-5">Own a plot?</h3>

              <ul className="space-y-3 flex-1">
                {[
                  'Connect with serious buyers',
                  'No brokerage commitment',
                  'Free & easy submission',
                  'Market guidance included',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-ink-mid">
                    <CheckCircle2 className="h-4 w-4 text-brand flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <motion.a
                href="#submit-plot"
                id="feature-sell-cta"
                className="mt-7 inline-flex items-center gap-2 bg-brand text-white rounded-full px-6 py-2.5 text-sm font-semibold self-start"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Submit Plot Details
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </motion.div>
          </FadeUp>

          {/* Card 2 — Buyer Circle */}
          <FadeUp delay={0.1}>
            <motion.div
              className="relative bg-[#0d1f0d] rounded-card p-8 h-full flex flex-col overflow-hidden"
              whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.25)' }}
              transition={{ duration: 0.22 }}
            >
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">Buyer Circle</p>
              <h3 className="text-2xl font-bold text-white mb-5">Join our Buyer Network</h3>

              <ul className="space-y-3">
                {[
                  'Get early access to selected plots',
                  'WhatsApp updates',
                  'Focused & verified buyers',
                  'No spam, only relevant opportunities',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Mock WhatsApp Chat */}
              <div className="mt-5 rounded-inner bg-[#1a3a1a] border border-green-900/30 p-3 flex-1">
                {/* Chat header */}
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-green-900/30">
                  <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center">
                    <WhatsAppIcon className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold">Urban Atlas Buyer Circle</div>
                    <div className="text-green-400 text-[10px]">342 members</div>
                  </div>
                </div>
                <div className="space-y-2">
                  {chatMessages.map((msg, i) => (
                    <div key={i} className="bg-[#0d2a0d] rounded-lg p-2">
                      <p className="text-gray-200 text-[11px] leading-relaxed">{msg.text}</p>
                      <p className="text-green-500 text-[9px] mt-1 text-right">{msg.time}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-2 rounded-full bg-[#0d2a0d] border border-green-900/30 px-3 py-1.5 flex items-center gap-2">
                  <span className="text-gray-500 text-[11px] flex-1">Type a message...</span>
                  <WhatsAppIcon className="h-3.5 w-3.5 text-emerald-400" />
                </div>
              </div>

              <motion.a
                href="https://wa.me/910000000000"
                target="_blank"
                rel="noopener noreferrer"
                id="feature-buyer-circle-cta"
                className="mt-5 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-6 py-2.5 text-sm font-semibold self-start transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <WhatsAppIcon className="h-4 w-4" />
                Join WhatsApp Group
              </motion.a>
            </motion.div>
          </FadeUp>

          {/* Card 3 — Free Valuation */}
          <FadeUp delay={0.2}>
            <motion.div
              className="relative bg-[#0f0f1e] rounded-card p-8 h-full flex flex-col overflow-hidden"
              whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(124,58,237,0.2)' }}
              transition={{ duration: 0.22 }}
            >
              {/* Purple cube illustration */}
              <div className="absolute bottom-6 right-6 opacity-20 pointer-events-none">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <path d="M40 8L72 24V56L40 72L8 56V24L40 8Z" stroke="#7C3AED" strokeWidth="2" fill="none"/>
                  <path d="M40 8V72M8 24L40 40L72 24M40 40L8 56M40 40L72 56" stroke="#7C3AED" strokeWidth="1.5" strokeDasharray="4 2"/>
                </svg>
              </div>

              <p className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-2">Free Valuation</p>
              <h3 className="text-2xl font-bold text-white mb-5">Not sure what your plot is worth?</h3>

              <ul className="space-y-3 flex-1">
                {[
                  'Instant market assessment',
                  'Location & size analysis',
                  'Road width & surroundings',
                  'Current resale activity',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="h-4 w-4 text-purple-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <motion.a
                href="#valuation"
                id="feature-valuation-cta"
                className="mt-7 inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 py-2.5 text-sm font-semibold self-start transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get Free Valuation
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </motion.div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
