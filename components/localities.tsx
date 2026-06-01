'use client'

import { motion } from 'framer-motion'
import { MapPin, Building2, Leaf, Users, Map, Home, Landmark, Trees, Flag } from 'lucide-react'
import { FadeUp } from '@/components/fade-up'

const localities = [
  { icon: MapPin,     label: 'Gomti Nagar' },
  { icon: Building2,  label: 'Gomti Nagar Extension' },
  { icon: Flag,       label: 'Sushant Golf City' },
  { icon: Leaf,       label: 'Vrindavan Yojana' },
  { icon: Users,      label: 'Janakipuram' },
  { icon: Map,        label: 'Janakipuram Extension' },
  { icon: Home,       label: 'Aashiyana' },
  { icon: Landmark,   label: 'LDA Colony' },
  { icon: Trees,      label: 'Awadh Vihar Yojana' },
]

export default function Localities() {
  return (
    <section className="py-16 bg-white" id="localities">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <h2 className="text-2xl font-bold text-center text-ink mb-8">
            Our <span className="text-brand">Focus</span> Localities
          </h2>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="flex flex-wrap justify-center gap-3">
            {localities.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                className="border border-gray-200 rounded-inner px-5 py-3 flex items-center gap-2.5 text-ink-mid font-medium text-sm cursor-default bg-white"
                whileHover={{
                  borderColor: '#FF2D55',
                  color: '#FF2D55',
                  y: -2,
                  boxShadow: '0 8px 24px rgba(255,45,85,0.08)',
                }}
                transition={{ duration: 0.18 }}
              >
                <Icon className="h-4 w-4 text-brand flex-shrink-0" />
                {label}
              </motion.div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
