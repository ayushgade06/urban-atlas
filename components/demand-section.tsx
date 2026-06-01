'use client'

import { motion } from 'framer-motion'
import { LayoutGrid, Trees, Maximize2, MapPin } from 'lucide-react'
import { FadeUp } from '@/components/fade-up'

const demands = [
  { icon: LayoutGrid, label: 'Corner Plots' },
  { icon: Trees,      label: 'Park Facing' },
  { icon: Maximize2,  label: '1200–2000 Sq. Ft. Plots' },
  { icon: MapPin,     label: 'Wide Road Frontage' },
]

export default function DemandSection() {
  return (
    <section className="py-16 bg-white" id="demand">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <h2 className="text-2xl font-bold text-center text-ink mb-8">
            High <span className="text-brand">Demand</span> For
          </h2>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {demands.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                className="border border-gray-200 rounded-inner px-6 py-5 flex items-center gap-3 bg-white"
                whileHover={{ y: -3, boxShadow: '0 12px 32px rgba(255,45,85,0.08)', borderColor: '#FFE8ED' }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 rounded-xl bg-brand-faint flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-brand" />
                </div>
                <span className="text-sm font-medium text-ink-mid">{label}</span>
              </motion.div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.18}>
          <div className="mt-8 flex justify-center">
            <motion.a
              href="#submit-plot"
              id="demand-submit-cta"
              className="inline-flex items-center border-2 border-brand text-brand rounded-full px-8 py-3 font-semibold text-sm hover:bg-brand hover:text-white transition-all duration-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Submit Your Plot
            </motion.a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
