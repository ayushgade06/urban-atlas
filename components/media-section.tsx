'use client'

import { BarChart2, TrendingUp, Users, Repeat, Bell, Mail } from 'lucide-react'
import { FadeUp } from '@/components/fade-up'

const mediaItems = [
  { icon: BarChart2,   label: 'Locality Trends' },
  { icon: TrendingUp,  label: 'Plot Price Movement' },
  { icon: Users,       label: 'Buyer Sentiment' },
  { icon: Repeat,      label: 'Resale Market Observations' },
  { icon: Bell,        label: 'Authority Updates' },
]

export default function MediaSection() {
  return (
    <section className="py-16 bg-gray-50/60" id="media">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <FadeUp delay={0}>
            <div>
              <h2 className="text-2xl font-bold text-ink mb-4">Media &amp; Research</h2>
              <p className="text-sm text-ink-soft leading-relaxed mb-4">
                Urban Atlas regularly publishes observations on Lucknow&apos;s plotted residential market.
              </p>
              <p className="text-sm text-ink-soft leading-relaxed mb-6">
                Journalists, researchers, financial publications, YouTube creators, and real estate commentators may contact us for:
              </p>
              <a
                href="mailto:media@urbanatlas.in"
                id="media-email-link"
                className="inline-flex items-center gap-2 text-brand font-medium text-sm underline underline-offset-4 hover:text-[#e0001e] transition-colors"
              >
                <Mail className="h-4 w-4" />
                media@urbanatlas.in
              </a>
            </div>
          </FadeUp>

          {/* RIGHT — five icon+label items */}
          <FadeUp delay={0.1}>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              {mediaItems.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 bg-white border border-gray-100 rounded-inner px-5 py-4 shadow-sm w-[calc(50%-8px)] sm:w-auto"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-faint flex items-center justify-center">
                    <Icon className="h-5 w-5 text-brand" />
                  </div>
                  <span className="text-xs font-medium text-ink-mid text-center">{label}</span>
                </div>
              ))}
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
