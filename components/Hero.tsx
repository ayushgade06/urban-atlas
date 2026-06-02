'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

// Custom SVG Icons matching screenshot precisely
function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.102-2.884-6.964-1.86-1.862-4.331-2.886-6.968-2.887-5.44 0-9.866 4.42-9.869 9.866-.001 1.77.461 3.5 1.338 5.031L1.993 21.848l6.196-1.625-1.542-.924zm11.536-7.14c-.302-.15-1.78-.88-2.057-.98-.277-.1-.48-.15-.68.15-.2.3-.77.98-.95 1.18-.18.2-.36.23-.66.08-.3-.15-1.27-.47-2.42-1.5-1-.89-1.67-1.99-1.87-2.33-.2-.3-.02-.47.13-.62.14-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.63-.93-2.24-.24-.59-.48-.51-.68-.52-.17-.01-.38-.01-.58-.01-.2 0-.53.07-.8.37-.28.3-1.07 1.05-1.07 2.56s1.09 2.97 1.24 3.17c.15.2 2.15 3.28 5.21 4.6 1.13.48 2.02.77 2.71.99.76.24 1.46.21 2.01.12.61-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35z" />
    </svg>
  )
}

function RedCheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

// Statistics Card Icons
function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  )
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-[54px] pb-[70px]">
      {/* Visual backdrop gradient to replicate the exact layout proportions */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-b from-[#FFFDFD] to-[#FFF8F8] opacity-60 pointer-events-none z-0" />

      {/* Left side artwork: soft watercolor architectural illustration at the far left edge */}
      <div className="absolute left-0 bottom-0 top-0 w-[240px] sm:w-[280px] md:w-[320px] pointer-events-none select-none z-0 overflow-visible flex items-end opacity-[0.85]">
        <svg width="100%" height="90%" viewBox="0 0 240 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
          {/* Watercolor washes using radial gradients / blurred shapes */}
          <circle cx="20" cy="240" r="90" fill="#FF2D3F" opacity="0.12" filter="blur(26px)" />
          <circle cx="80" cy="260" r="60" fill="#FF2D3F" opacity="0.08" filter="blur(18px)" />
          <circle cx="0" cy="180" r="100" fill="#FF2D3F" opacity="0.05" filter="blur(30px)" />
          
          {/* Hand-drawn organic house sketches */}
          {/* Main house sketch (curvy, hand-drawn lines) */}
          <path d="M-20 320 C-18 290 -22 250 -20 220 C-5 215 15 205 30 200 C45 205 60 215 65 220 L68 320" stroke="#FF2D3F" strokeWidth="1.2" strokeOpacity="0.25" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M-20 220 H68" stroke="#FF2D3F" strokeWidth="0.8" strokeOpacity="0.2" />
          <path d="M15 320 V270 C15 268 25 268 25 270 V320" stroke="#FF2D3F" strokeWidth="1" strokeOpacity="0.25" />
          {/* Windows */}
          <rect x="5" y="235" width="14" height="18" rx="2" stroke="#FF2D3F" strokeWidth="1" strokeOpacity="0.2" />
          <rect x="42" y="235" width="14" height="18" rx="2" stroke="#FF2D3F" strokeWidth="1" strokeOpacity="0.2" />
          
          {/* House 2 (Offset background) */}
          <path d="M50 320 V230 C58 220 75 210 90 205 C105 210 120 225 125 230 L128 320" stroke="#FF2D3F" strokeWidth="1.2" strokeOpacity="0.22" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* Tall faded background obelisk tower sketch on the far left */}
          <path d="M-15 320 V90 C-10 80 -12 75 -5 70 C0 75 -5 80 -10 90 V320" stroke="#FF2D3F" strokeWidth="1.2" strokeOpacity="0.15" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* Loose organic tree strokes and foliage */}
          <path d="M110 320 C110 270 125 240 120 210 C115 190 100 180 98 160" stroke="#FF2D3F" strokeWidth="0.9" strokeOpacity="0.22" />
          <circle cx="108" cy="180" r="28" fill="#FF2D3F" opacity="0.06" filter="blur(8px)" />
          <circle cx="125" cy="205" r="22" fill="#FF2D3F" opacity="0.05" filter="blur(6px)" />
        </svg>
      </div>

      {/* Right side artwork: soft watercolor architectural illustration at the far right edge */}
      <div className="absolute right-0 bottom-0 top-0 w-[240px] sm:w-[280px] md:w-[320px] pointer-events-none select-none z-0 overflow-visible flex items-end justify-end opacity-[0.85]">
        <svg width="100%" height="90%" viewBox="0 0 240 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
          {/* Watercolor washes */}
          <circle cx="220" cy="220" r="95" fill="#FF2D3F" opacity="0.12" filter="blur(26px)" />
          <circle cx="160" cy="260" r="70" fill="#FF2D3F" opacity="0.08" filter="blur(18px)" />
          <circle cx="240" cy="150" r="100" fill="#FF2D3F" opacity="0.05" filter="blur(30px)" />
          
          {/* Right tall cupola tower outline */}
          <path d="M160 320 V90 H210 V320" stroke="#FF2D3F" strokeWidth="1.3" strokeOpacity="0.25" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M160 110 H210 M160 135 H210" stroke="#FF2D3F" strokeWidth="0.8" strokeOpacity="0.2" />
          {/* Peaked roof spire */}
          <path d="M160 90 L185 50 L210 90" stroke="#FF2D3F" strokeWidth="1.3" strokeOpacity="0.25" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="185" y1="50" x2="185" y2="25" stroke="#FF2D3F" strokeWidth="1.3" strokeOpacity="0.2" />

          {/* Building facade (sketch details) */}
          <path d="M20 320 V180 H150 V320 Z" stroke="#FF2D3F" strokeWidth="1.5" strokeOpacity="0.25" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 180 L85 135 L150 180" stroke="#FF2D3F" strokeWidth="1.5" strokeOpacity="0.25" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* Windows rows */}
          <rect x="35" y="195" width="22" height="25" rx="1.5" stroke="#FF2D3F" strokeWidth="1" strokeOpacity="0.2" />
          <rect x="100" y="195" width="22" height="25" rx="1.5" stroke="#FF2D3F" strokeWidth="1" strokeOpacity="0.2" />
          <rect x="35" y="245" width="22" height="25" rx="1.5" stroke="#FF2D3F" strokeWidth="1" strokeOpacity="0.2" />
          <rect x="100" y="245" width="22" height="25" rx="1.5" stroke="#FF2D3F" strokeWidth="1" strokeOpacity="0.2" />

          {/* Street perspective loose lines */}
          <line x1="0" y1="320" x2="240" y2="320" stroke="#FF2D3F" strokeWidth="1.6" strokeOpacity="0.25" />
          <line x1="0" y1="328" x2="240" y2="330" stroke="#FF2D3F" strokeWidth="0.8" strokeOpacity="0.15" />

          {/* Faint human silhouettes in loose sketches */}
          <circle cx="55" cy="272" r="4.5" fill="#FF2D3F" fillOpacity="0.2" />
          <path d="M55 276.5 L51 305 M55 276.5 L59 305 M55 276.5 C50 279 48 285 55 293" stroke="#FF2D3F" strokeWidth="1.8" strokeOpacity="0.22" strokeLinecap="round" />

          <circle cx="75" cy="275" r="4.2" fill="#FF2D3F" fillOpacity="0.2" />
          <path d="M75 279 L72 305 M75 279 L78 305 M75 279 C71 282 70 287 75 294" stroke="#FF2D3F" strokeWidth="1.5" strokeOpacity="0.22" strokeLinecap="round" />
        </svg>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE CONTENT */}
          <div className="flex flex-col items-start">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF1F3] text-[#FF2D3F] text-[13px] font-bold px-[15px] py-[7px] mb-7 select-none">
              <MapPinIcon className="h-4 w-4" />
              Lucknow Real Estate Intelligence
            </div>

            {/* Typography Matched Heading */}
            <h1 className="text-[52px] md:text-[60px] font-extrabold leading-[1.08] text-[#111827] tracking-tight mb-5">
              Connecting<br />
              Plot Owners<br />
              With <span className="text-[#FF2D3F]">Serious Buyers.</span>
            </h1>

            {/* Subheading */}
            <p className="text-[17px] text-[#4B5563] leading-[1.5] max-w-lg mb-[38px] font-medium">
              We help you reach genuine buyers and sell your plot with confidence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-[15px] w-full sm:w-auto mb-[32px]">
              <motion.a
                href="#submit-plot"
                className="inline-flex items-center justify-center gap-2.5 bg-[#FF2D3F] hover:bg-[#E81F34] text-white rounded-[14px] px-8 py-4 font-extrabold text-[15px] transition-all duration-200 premium-shadow"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                Submit Your Plot
                <ArrowRight className="h-4 w-4 stroke-[3]" />
              </motion.a>
              <motion.a
                href="#buyer-circle"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-[#111827] bg-white rounded-[14px] px-8 py-4 font-bold text-[15px] hover:border-gray-300 transition-all duration-200"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <WhatsAppIcon className="h-5 w-5 text-[#25D366] mr-1" />
                Join Buyer Circle
              </motion.a>
            </div>

            {/* Trust points with Red Checks */}
            <div className="flex flex-wrap items-center gap-[22px]">
              {[
                { text: 'Free Submission' },
                { text: 'No Brokerage' },
                { text: 'Authority Plots Only' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-[14px] font-bold text-[#4B5563]">
                  <RedCheckIcon className="h-4.5 w-4.5 text-[#FF2D3F] flex-shrink-0" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Stats Card */}
          <div className="relative flex items-center justify-center w-full">
            <motion.div
              className="bg-white border border-[#FFF1F3] rounded-[20px] premium-shadow p-12 relative w-full max-w-[540px] mx-auto z-10"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >

              {/* 2x2 Grid of Metrics */}
              <div className="grid grid-cols-2 gap-x-10 gap-y-12 relative z-10">
                {/* Metric 1 */}
                <div className="flex flex-col gap-4">
                  <div className="w-[50px] h-[50px] rounded-2xl bg-[#FFF1F3] flex items-center justify-center">
                    <DocumentIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-[34px] font-extrabold text-[#111827] leading-none mb-1.5">1,500+</div>
                    <div className="text-[14px] font-bold text-[#6B7280]">Plots Listed</div>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="flex flex-col gap-4">
                  <div className="w-[50px] h-[50px] rounded-2xl bg-[#FFF1F3] flex items-center justify-center">
                    <UsersIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-[34px] font-extrabold text-[#111827] leading-none mb-1.5">3,000+</div>
                    <div className="text-[14px] font-bold text-[#6B7280]">Active Buyers</div>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="flex flex-col gap-4">
                  <div className="w-[50px] h-[50px] rounded-2xl bg-[#FFF1F3] flex items-center justify-center">
                    <PinIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-[34px] font-extrabold text-[#111827] leading-none mb-1.5">9</div>
                    <div className="text-[14px] font-bold text-[#6B7280]">Focus Localities</div>
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="flex flex-col gap-4">
                  <div className="w-[50px] h-[50px] rounded-2xl bg-[#FFF1F3] flex items-center justify-center">
                    <ChartIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-[34px] font-extrabold text-[#111827] leading-none mb-1.5">Real-time</div>
                    <div className="text-[14px] font-bold text-[#6B7280]">Market Intelligence</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
