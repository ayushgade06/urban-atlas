'use client'

import { motion } from 'framer-motion'

// Beautiful custom SVG icons for the 9 localities to ensure pixel-perfect fidelity
function LocalityIcon1() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function LocalityIcon2() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="2.5" />
      <path d="M6 6h4v4H6zM14 6h4v4h-4zM6 14h4v4H6zM14 14h4v4h-4z" />
    </svg>
  )
}

function LocalityIcon3() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  )
}

function LocalityIcon4() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 0 1 10 10c0 5.25-10 10-10 10S2 17.25 2 12A10 10 0 0 1 12 2z" />
      <path d="M12 6a6 6 0 0 0-6 6c0 3.15 6 6 6 6s6-2.85 6-6a6 6 0 0 0-6-6z" />
    </svg>
  )
}

function LocalityIcon5() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
    </svg>
  )
}

function LocalityIcon6() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  )
}

function LocalityIcon7() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="M12 6v6l4 2" />
    </svg>
  )
}

function LocalityIcon8() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function LocalityIcon9() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.912 5.886h6.189l-5.007 3.637 1.912 5.886-5.006-3.637-5.006 3.637 1.912-5.886-5.007-3.637h6.189L12 3z" />
    </svg>
  )
}

const localities = [
  { icon: LocalityIcon1, label: 'Gomti Nagar' },
  { icon: LocalityIcon2, label: 'Gomti Nagar Extension' },
  { icon: LocalityIcon3, label: 'Sushant Golf City' },
  { icon: LocalityIcon4, label: 'Vrindavan Yojana' },
  { icon: LocalityIcon5, label: 'Janakipuram' },
  { icon: LocalityIcon6, label: 'Janakipuram Extension' },
  { icon: LocalityIcon7, label: 'Aashiyana' },
  { icon: LocalityIcon8, label: 'LDA Colony' },
  { icon: LocalityIcon9, label: 'Awadh Vihar Yojana' },
]

export default function Localities() {
  return (
    <section className="py-[60px] bg-white w-full" id="localities">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Title */}
        <h2 className="text-[32px] font-extrabold text-center text-[#111827] tracking-tight mb-[38px]">
          Our <span className="text-[#FF2D3F]">Focus</span> Localities
        </h2>

        {/* Localities flex wrap, exactly centering elements */}
        <div className="flex flex-col gap-3.5 max-w-5xl mx-auto">
          {/* Top Row: 5 items */}
          <div className="flex flex-wrap justify-center gap-3.5">
            {localities.slice(0, 5).map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                className="border border-[#F3F4F6] rounded-[20px] px-6 py-4 flex items-center gap-3.5 text-[#4B5563] font-bold text-[14px] cursor-default bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.02)]"
                whileHover={{
                  borderColor: '#FF2D3F',
                  color: '#FF2D3F',
                  y: -2,
                  boxShadow: '0px 10px 40px rgba(255,45,63,0.08)',
                }}
                transition={{ duration: 0.18 }}
              >
                <div className="flex-shrink-0">
                  <Icon />
                </div>
                <span>{label}</span>
              </motion.div>
            ))}
          </div>
          
          {/* Bottom Row: 4 items */}
          <div className="flex flex-wrap justify-center gap-3.5">
            {localities.slice(5).map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                className="border border-[#F3F4F6] rounded-[20px] px-6 py-4 flex items-center gap-3.5 text-[#4B5563] font-bold text-[14px] cursor-default bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.02)]"
                whileHover={{
                  borderColor: '#FF2D3F',
                  color: '#FF2D3F',
                  y: -2,
                  boxShadow: '0px 10px 40px rgba(255,45,63,0.08)',
                }}
                transition={{ duration: 0.18 }}
              >
                <div className="flex-shrink-0">
                  <Icon />
                </div>
                <span>{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
