'use client'

import { motion } from 'framer-motion'

// Custom matching SVG Icons for the 3 steps
function StepIcon1() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <path d="M10 9H8" />
    </svg>
  )
}

function StepIcon2() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  )
}

function StepIcon3() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

const steps = [
  {
    num: '01',
    icon: StepIcon1,
    title: 'Submit Plot',
    desc: 'Share your property details with us.',
  },
  {
    num: '02',
    icon: StepIcon2,
    title: 'We Review',
    desc: 'We evaluate location, pricing, demand and buyer fit.',
  },
  {
    num: '03',
    icon: StepIcon3,
    title: 'Buyer Exposure',
    desc: 'Selected opportunities are shared with our active buyer network.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-[74px] bg-[#FFF8F8] w-full" id="how-it-works">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Title */}
        <h2 className="text-[32px] font-extrabold text-center text-[#111827] tracking-tight mb-[60px]">
          How Urban Atlas <span className="text-[#FF2D3F]">Works</span>
        </h2>

        {/* 3 cards with connectors */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[38px] relative max-w-[1100px] mx-auto">
          {steps.map(({ num, icon: Icon, title, desc }, i) => (
            <div key={num} className="relative flex items-stretch">
              <motion.div
                className="relative bg-white border border-[#FFF1F3] rounded-[20px] p-9 pt-12 shadow-[0px_10px_40px_rgba(0,0,0,0.02)] flex flex-col items-start w-full z-10"
                whileHover={{ y: -4, boxShadow: '0px 10px 40px rgba(255,45,63,0.06)' }}
                transition={{ duration: 0.22 }}
              >
                {/* Step badge in Red circle */}
                <div className="absolute -top-[15px] left-9 w-[34px] h-[34px] bg-[#FF2D3F] text-white text-[12px] font-black rounded-full flex items-center justify-center shadow-md">
                  {num}
                </div>

                {/* Styled Icon inside custom round circle background */}
                <div className="w-[64px] h-[64px] rounded-full bg-[#FFF1F3] flex items-center justify-center mb-6">
                  <Icon />
                </div>

                {/* Step Header */}
                <h3 className="text-[20px] font-extrabold text-[#111827] mb-2.5">{title}</h3>
                {/* Step Description */}
                <p className="text-[14px] font-medium text-[#6B7280] leading-[1.6]">{desc}</p>
              </motion.div>

              {/* Red dotted arrow connector (desktop only, between steps) */}
              {i < 2 && (
                <div className="hidden lg:flex absolute -right-[26px] top-1/2 -translate-y-1/2 z-20 items-center justify-center">
                  <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 6H20M20 6L15 1M20 6L15 11"
                      stroke="#FF2D3F"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="4 4"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
