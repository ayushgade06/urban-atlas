'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const MotionLink = motion(Link)

// Custom high-fidelity SVG Icons matching screenshot
function CornerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 5v14h14" />
      <circle cx="12" cy="12" r="2.5" fill="#FF2D3F" />
      <line x1="5" y1="19" x2="15" y2="9" strokeDasharray="3 3" />
    </svg>
  )
}

function ParkIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L3 9h9V2z" />
      <path d="M12 22V9H3l9 13z" />
      <path d="M12 2l9 7h-9V2z" />
      <path d="M12 22V9h9l-9 13z" />
    </svg>
  )
}

function MeasurementIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="9" y1="3" x2="9" y2="21" strokeDasharray="2 2" />
      <line x1="15" y1="3" x2="15" y2="21" strokeDasharray="2 2" />
      <line x1="3" y1="9" x2="21" y2="9" strokeDasharray="2 2" />
      <line x1="3" y1="15" x2="21" y2="15" strokeDasharray="2 2" />
    </svg>
  )
}

function RoadFrontageIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 22L8 2M20 22L16 2" />
      <line x1="12" y1="4" x2="12" y2="6" />
      <line x1="12" y1="10" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12" y2="18" />
    </svg>
  )
}

const demands = [
  { icon: CornerIcon, label: 'Corner Plots' },
  { icon: ParkIcon, label: 'Park Facing' },
  { icon: MeasurementIcon, label: '1200 - 2000 Sq. Ft. Plots' },
  { icon: RoadFrontageIcon, label: 'Wide Road Frontage' },
]

export default function DemandSection() {
  return (
    <section className="py-12 bg-white w-full" id="demand">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Title */}
        <h2 className="text-[32px] font-extrabold text-center text-[#111827] tracking-tight mb-8">
          High <span className="text-[#FF2D3F]">Demand</span> For
        </h2>

        {/* 4 Pink rounded cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-6">
          {demands.map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              className="bg-[#FFF1F3] rounded-[16px] px-5 py-4 flex items-center justify-start gap-4 cursor-default border border-[#FFE4E8] shadow-[0px_4px_20px_rgba(0,0,0,0.01)]"
              whileHover={{ y: -3, boxShadow: '0px 10px 40px rgba(255,45,63,0.06)' }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex-shrink-0">
                <Icon />
              </div>
              <span className="text-[13px] font-extrabold text-[#111827] text-left leading-tight">
                {label.includes(' - ') ? (
                  <>
                    {label.split(' - ')[0]} - {label.split(' - ')[1].split(' ')[0]}<br />
                    {label.split(' - ')[1].split(' ').slice(1).join(' ')}
                  </>
                ) : (
                  label
                )}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Center Outlined Submit button */}
        <div className="flex justify-center">
          <MotionLink
            href="/submit-plot"
            className="inline-flex items-center justify-center border-2 border-[#FF2D3F] text-[#FF2D3F] hover:bg-[#FF2D3F] hover:text-white rounded-[14px] px-[32px] py-[12px] font-extrabold text-[14px] transition-all duration-200"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            Submit Your Plot
          </MotionLink>
        </div>
      </div>
    </section>
  )
}
