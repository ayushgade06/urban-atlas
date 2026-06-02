'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// Custom matching red SVG Icons for the 5 research trends
function TrendIcon1() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  )
}

function TrendIcon2() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  )
}

function TrendIcon3() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function TrendIcon4() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 22s1.25-2 3.5-2 3.5 2 3.5 2 1.25-2 3.5-2 3.5 2 3.5 2 1.25-2 3.5-2 3.5 2 3.5 2" />
      <path d="M12 2v16" />
      <path d="M12 2l4 4" />
      <path d="M12 2L8 6" />
    </svg>
  )
}

function TrendIcon5() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  )
}

function EnvelopeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

// Circular detailed handshake vector SVG for For Brokers
function HandshakeCircularSVG() {
  return (
    <div className="w-[100px] h-[100px] rounded-full bg-[#FFF1F3] flex items-center justify-center flex-shrink-0 select-none">
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Two hands shaking */}
        <path
          d="M12 36 C12 36 17 28 26 25 L38 21"
          stroke="#FF2D3F"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M48 36 C48 36 43 28 34 25 L22 21"
          stroke="#FF2D3F"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26 25 C26 25 30 29 34 25"
          stroke="#FF2D3F"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Red fingers overlay */}
        <circle cx="30" cy="25" r="2" fill="#FF2D3F" />
      </svg>
    </div>
  )
}

const mediaItems = [
  { icon: TrendIcon1, label: 'Locality Trends' },
  { icon: TrendIcon2, label: 'Plot Price Movement' },
  { icon: TrendIcon3, label: 'Buyer Sentiment' },
  { icon: TrendIcon4, label: 'Resale Market Observations' },
  { icon: TrendIcon5, label: 'Authority Updates' },
]

export default function MediaSection() {
  return (
    <section className="py-[74px] bg-[#FFF8F8] w-full" id="media">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* LEFT COLUMN: Media description and Email bar (5 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <h2 className="text-[32px] font-extrabold text-[#111827] tracking-tight mb-4">
              Media &amp; Research
            </h2>
            <p className="text-[14px] font-bold text-[#4B5563] leading-[1.6] mb-4">
              Urban Atlas regularly publishes observations on Lucknow&apos;s plotted residential market.
            </p>
            <p className="text-[13px] font-medium text-[#6B7280] leading-[1.6] mb-[28px]">
              Journalists, researchers, financial publications, YouTube creators, and real-estate commentators may contact us for these intelligence points.
            </p>

            {/* Structured Grey Border Email Bar */}
            <div className="flex items-center gap-3 border border-gray-200 rounded-[14px] bg-white p-3.5 px-4.5 w-full">
              <EnvelopeIcon />
              <div className="text-[13px] font-bold text-[#4B5563]">
                For media enquiries:{' '}
                <a
                  href="mailto:media@urbanatlas.in"
                  className="text-[#FF2D3F] hover:underline underline-offset-4"
                >
                  media@urbanatlas.in
                </a>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN: Horizontal list of 5 icons (4 cols) */}
          <div className="lg:col-span-4 flex flex-wrap lg:flex-nowrap justify-center gap-4">
            <div className="flex flex-row flex-wrap lg:flex-col gap-4 w-full justify-center">
              {mediaItems.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3.5 bg-white border border-[#F3F4F6] rounded-[20px] p-3.5 px-5 shadow-[0px_4px_20px_rgba(0,0,0,0.01)] flex-1 min-w-[180px]"
                >
                  <div className="w-[42px] h-[42px] rounded-xl bg-[#FFF1F3] flex items-center justify-center flex-shrink-0">
                    <Icon />
                  </div>
                  <span className="text-[12px] font-extrabold text-[#111827] leading-[1.3]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: For Brokers card (4 cols) */}
          <div className="lg:col-span-4">
            <motion.div
              className="bg-white border border-[#FFF1F3] rounded-[20px] p-8 shadow-[0px_10px_40px_rgba(0,0,0,0.03)] flex flex-col justify-between items-start min-h-[330px]"
              whileHover={{ y: -4, boxShadow: '0px 10px 40px rgba(255,45,63,0.06)' }}
              transition={{ duration: 0.22 }}
            >
              <div className="flex flex-col items-start w-full gap-4">
                <span className="text-[#FF2D3F] text-[11px] font-black uppercase tracking-wider bg-[#FFF1F3] px-3 py-1.5 rounded-full">
                  For Brokers
                </span>
                <p className="text-[15px] font-bold text-[#4B5563] leading-[1.6]">
                  Partner with us and get quality buyer leads via WhatsApp &amp; other channels.
                </p>
                <div className="w-full flex justify-center py-2">
                  {/* <HandshakeCircularSVG /> */}

                  <div className="relative w-[140px] h-[140px]">
                    <Image
                      src="/handshake.png"
                      alt="Handshake"
                      fill
                      priority
                      className="object-contain"
                    />
                </div>
                </div>
              </div>

              <motion.a
                href="#broker-submit"
                className="mt-4 inline-flex items-center justify-center gap-2 border-2 border-[#FF2D3F] text-[#FF2D3F] hover:bg-[#FF2D3F] hover:text-white rounded-[14px] px-[22px] py-[11px] text-[13px] font-extrabold transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Details
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
