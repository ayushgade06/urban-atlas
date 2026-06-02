'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

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

      {/* here */}
      {/* Right Background Artwork */}
{/* Right Background Artwork */}
<div className="absolute right-10 top-[20px] w-[800px] h-[700px] z-0">
  <Image
    src="/hero-left.png"
    alt=""
    fill
    priority
    className="object-contain"
  />
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
          <div className="relative w-full flex justify-center lg:justify-end">
            <div className="relative bg-white rounded-[32px] p-2 shadow-[0px_20px_60px_rgba(255,45,63,0.08)] border border-[#FFF1F3] w-full max-w-[480px]">
              <div className="grid grid-cols-2 grid-rows-2 relative p-6">
                {/* Horizontal Divider */}
                <div className="absolute top-1/2 left-8 right-8 h-px bg-gray-100 -translate-y-1/2" />
                {/* Vertical Divider */}
                <div className="absolute left-1/2 top-8 bottom-8 w-px bg-gray-100 -translate-x-1/2" />

                {/* Stat 1 */}
                <div className="flex flex-col items-center justify-center text-center p-8">
                  <div className="w-[52px] h-[52px] rounded-full bg-[#FFF1F3] flex items-center justify-center mb-5">
                    <DocumentIcon className="w-6 h-6" />
                  </div>
                  <div className="text-[32px] font-extrabold text-[#111827] leading-none mb-1.5 tracking-tight">1,500+</div>
                  <div className="text-[13px] font-bold text-[#6B7280]">Plots Listed</div>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col items-center justify-center text-center p-8">
                  <div className="w-[52px] h-[52px] rounded-full bg-[#FFF1F3] flex items-center justify-center mb-5">
                    <UsersIcon className="w-6 h-6" />
                  </div>
                  <div className="text-[32px] font-extrabold text-[#111827] leading-none mb-1.5 tracking-tight">3,000+</div>
                  <div className="text-[13px] font-bold text-[#6B7280]">Active Buyers</div>
                </div>

                {/* Stat 3 */}
                <div className="flex flex-col items-center justify-center text-center p-8">
                  <div className="w-[52px] h-[52px] rounded-full bg-[#FFF1F3] flex items-center justify-center mb-5">
                    <PinIcon className="w-6 h-6" />
                  </div>
                  <div className="text-[32px] font-extrabold text-[#111827] leading-none mb-1.5 tracking-tight">9</div>
                  <div className="text-[13px] font-bold text-[#6B7280]">Focus Localities</div>
                </div>

                {/* Stat 4 */}
                <div className="flex flex-col items-center justify-center text-center p-8">
                  <div className="w-[52px] h-[52px] rounded-full bg-[#FFF1F3] flex items-center justify-center mb-5">
                    <ChartIcon className="w-6 h-6" />
                  </div>
                  <div className="text-[24px] font-extrabold text-[#111827] leading-none mb-1.5 tracking-tight mt-1">Real-time</div>
                  <div className="text-[13px] font-bold text-[#6B7280]">Market Intelligence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
