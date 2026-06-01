'use client'

import { motion } from 'framer-motion'
import { Users, MapPin, BarChart2, Star, BookOpen, ArrowDown } from 'lucide-react'
import { FadeUp } from '@/components/fade-up'

// Handshake icon inline since HeartHandshake availability varies
function HandshakeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.5 10.3l-7.8-5.2a1 1 0 0 0-1.4.3L9 8.5 6 6l-3 3 3.5 3.5-3 4a1 1 0 0 0 .1 1.3l2 2a1 1 0 0 0 1.3.1l4-3 3.5 3.5 3-3-2.5-3 3.6-2.1a1 1 0 0 0 0-1.7z"/>
    </svg>
  )
}

const trustItems = [
  { icon: Users,         label: 'Active Buyer Network' },
  { icon: MapPin,        label: 'Authority Plot Focus' },
  { icon: BarChart2,     label: 'Local Market Intelligence' },
  { icon: HandshakeIcon, label: 'Free Valuation Support' },
  { icon: Star,          label: 'Selected Opportunities' },
  { icon: BookOpen,      label: 'Independent Research' },
]

// Simple inline bar chart
function BarChart() {
  const bars = [40, 55, 48, 70, 90]
  return (
    <div className="flex items-end gap-1.5 h-24">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 bg-brand rounded-t-sm"
          style={{ height: `${h}%` }}
          initial={{ scaleY: 0, originY: 1 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
        />
      ))}
    </div>
  )
}

export default function TrustSection() {
  return (
    <section className="py-16 bg-white" id="market-report">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* LEFT — Market Report card */}
          <FadeUp delay={0}>
            <motion.div
              className="bg-white border border-gray-100 rounded-card p-8 shadow-sm h-full flex flex-col"
              whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(255,45,85,0.08)' }}
              transition={{ duration: 0.22 }}
            >
              <p className="text-brand text-xs font-bold uppercase tracking-wider mb-3">Market Report</p>
              <h3 className="text-xl font-bold text-ink mb-3">Lucknow Plot Market Report</h3>
              <p className="text-sm text-ink-soft leading-relaxed flex-1">
                Monthly insights on rates, demand, resale activity & authority developments.
              </p>
              <motion.a
                href="#market-report-download"
                id="trust-report-download"
                className="mt-6 inline-flex items-center gap-2 border border-ink text-ink rounded-full px-5 py-2 text-sm font-medium hover:bg-gray-50 transition-colors self-start"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Download Latest Report
                <ArrowDown className="h-3.5 w-3.5" />
              </motion.a>
            </motion.div>
          </FadeUp>

          {/* CENTER — Chart illustration */}
          <FadeUp delay={0.1}>
            <div className="bg-gradient-to-br from-brand-faint to-brand-lighter rounded-card p-8 h-full flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold text-ink-mid mb-1">Lucknow Plot Market Report</p>
                <p className="text-sm font-bold text-ink">May 2025</p>
              </div>

              <div className="my-6">
                <BarChart />
                <div className="flex justify-between mt-1.5">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May'].map((m) => (
                    <span key={m} className="text-[10px] text-ink-soft font-medium">{m}</span>
                  ))}
                </div>
              </div>

              {/* Shield verify icon */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center shadow-md shadow-brand/30">
                  <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-ink">Verified Data</div>
                  <div className="text-xs text-ink-soft">Authority-backed insights</div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* RIGHT — Why People Trust Urban Atlas */}
          <FadeUp delay={0.2}>
            <div className="h-full flex flex-col">
              <h3 className="text-xl font-bold text-ink mb-1">Why People Trust Urban Atlas</h3>
              <p className="text-sm font-semibold text-brand mb-2">Quality over quantity.</p>
              <p className="text-sm text-ink-soft leading-relaxed mb-6">
                We focus on real opportunities, local intelligence and meaningful connections that create value.
              </p>
              <div className="grid grid-cols-2 gap-3 flex-1">
                {trustItems.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 bg-gray-50 rounded-inner px-3 py-2.5">
                    <Icon className="h-4 w-4 text-brand flex-shrink-0" />
                    <span className="text-xs font-medium text-ink-mid leading-tight">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
