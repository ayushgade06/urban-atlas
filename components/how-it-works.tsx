'use client'

import { motion } from 'framer-motion'
import { FileEdit, Search, Users } from 'lucide-react'
import { FadeUp } from '@/components/fade-up'

const steps = [
  {
    num: '01',
    icon: FileEdit,
    title: 'Submit Plot',
    desc: 'Share your property details with us.',
  },
  {
    num: '02',
    icon: Search,
    title: 'We Review',
    desc: 'We evaluate location, pricing, demand and buyer fit.',
  },
  {
    num: '03',
    icon: Users,
    title: 'Buyer Exposure',
    desc: 'Selected opportunities are shared with our active buyer network.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50/60" id="how-it-works">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <h2 className="text-2xl font-bold text-center text-ink mb-12">
            How Urban Atlas <span className="text-brand">Works</span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Connector lines (desktop only) */}
          <div className="hidden lg:flex absolute top-12 left-[33%] right-[33%] items-center justify-center pointer-events-none z-10">
          </div>

          {steps.map(({ num, icon: Icon, title, desc }, i) => (
            <FadeUp key={num} delay={i * 0.12}>
              <motion.div
                className="relative bg-white border border-gray-100 rounded-card p-8 shadow-sm"
                whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(255,45,85,0.10)' }}
                transition={{ duration: 0.22 }}
              >
                {/* Step badge */}
                <div className="absolute -top-3.5 -left-3.5 w-8 h-8 bg-brand text-white text-xs font-bold rounded-full flex items-center justify-center shadow-sm">
                  {num}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-brand-faint flex items-center justify-center mb-5">
                  <Icon className="h-7 w-7 text-brand" />
                </div>

                <h3 className="text-lg font-bold text-ink mb-2">{title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{desc}</p>

                {/* Arrow connector (between cards, desktop) */}
                {i < 2 && (
                  <div className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 items-center">
                    <span className="text-brand-light text-lg font-bold tracking-tighter">····→</span>
                  </div>
                )}
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
