'use client'

import { motion } from 'framer-motion'

// Custom SVG Icons for Why People Trust items
function ActiveBuyerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function AuthorityFocusIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

function LocalIntelIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  )
}

function ValuationSupportIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="21" y1="12" x2="3" y2="12" />
    </svg>
  )
}

function SelectedOpportunitiesIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function IndependentResearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

const trustItems = [
  { icon: ActiveBuyerIcon, label: 'Active Buyer Network' },
  { icon: AuthorityFocusIcon, label: 'Authority Plot Focus' },
  { icon: LocalIntelIcon, label: 'Local Market Intelligence' },
  { icon: ValuationSupportIcon, label: 'Free Valuation Support' },
  { icon: SelectedOpportunitiesIcon, label: 'Selected Opportunities' },
  { icon: IndependentResearchIcon, label: 'Independent Research' },
]

export default function TrustSection() {
  return (
    <section className="py-[74px] bg-white w-full" id="market-report">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT — Market Report card */}
          <div className="lg:col-span-5">
            <motion.div
              className="bg-white border border-[#FFF1F3] rounded-[20px] p-8 shadow-[0px_10px_40px_rgba(0,0,0,0.03)] h-full flex flex-col justify-between"
              whileHover={{ y: -4, boxShadow: '0px 10px 40px rgba(255,45,63,0.06)' }}
              transition={{ duration: 0.22 }}
            >
              <div className="flex flex-col items-start w-full">
                <span className="text-[#FF2D3F] text-[12px] font-extrabold uppercase tracking-wider mb-2 bg-[#FFF1F3] px-3 py-1.5 rounded-full">
                  Market Report
                </span>
                <h3 className="text-[28px] font-extrabold text-[#111827] mb-3 leading-tight">
                  Lucknow Plot Market Report
                </h3>
                <p className="text-[14px] font-semibold text-[#4B5563] leading-[1.6] mb-6">
                  Monthly insights on rates, demand, resale activity & authority developments.
                </p>

                {/* Brochure Mockup visual inside card */}
                <div className="bg-gradient-to-br from-[#FFF5F6] to-white border border-[#FFF1F3] rounded-[14px] p-5 w-full flex items-center justify-between shadow-sm relative overflow-hidden mb-6">
                  {/* Text details */}
                  <div className="flex flex-col select-none relative z-10">
                    <span className="text-[9px] font-bold text-[#FF2D3F] uppercase tracking-wider">
                      Lucknow Plot
                    </span>
                    <span className="text-[14px] font-black text-[#111827] mt-0.5">
                      Market Report
                    </span>
                    <span className="text-[10px] font-bold text-[#6B7280] mt-2">
                      May 2025
                    </span>
                  </div>

                  {/* Red Line Chart + Bars Illustration */}
                  <div className="w-[120px] h-[70px] relative z-10 flex flex-col justify-end gap-1.5">
                    {/* Line path */}
                    <svg className="absolute inset-0 w-full h-[35px]" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 25C15 22 25 10 40 15C55 20 65 3 85 8C92 10 100 1 100 1" stroke="#FF2D3F" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    {/* Vertical bars */}
                    <div className="flex items-end justify-between h-[30px] w-full px-1">
                      {[30, 45, 38, 65, 85, 55, 90].map((h, i) => (
                        <div
                          key={i}
                          className="w-1.5 bg-[#FF2D3F] rounded-t-[1px]"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Download outlined button */}
              <motion.a
                href="#market-report-download"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#FF2D3F] text-[#FF2D3F] hover:bg-[#FF2D3F] hover:text-white rounded-[14px] px-6 py-3 text-[14px] font-extrabold transition-all duration-200 self-start"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                Download Latest Report
                <DownloadIcon />
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT — Why People Trust Urban Atlas */}
          <div className="lg:col-span-7">
            <div className="bg-gradient-to-br from-white to-[#FFFDFD] border border-[#FFF1F3] rounded-[20px] p-8 shadow-[0px_10px_40px_rgba(0,0,0,0.03)] h-full flex flex-col justify-between">
              <div className="flex flex-col items-start mb-6">
                {/* Shield Icon in Circle */}
                <div className="w-[58px] h-[58px] rounded-full bg-[#FFF1F3] flex items-center justify-center mb-5 border-2 border-[#FF2D3F]">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 11 11 13 15 9" />
                  </svg>
                </div>
                <h3 className="text-[28px] font-extrabold text-[#111827] mb-2 leading-tight">
                  Why People Trust Urban Atlas
                </h3>
                <p className="text-[14px] font-black text-[#FF2D3F] uppercase tracking-wider mb-2">
                  Quality over quantity.
                </p>
                <p className="text-[14px] font-bold text-[#6B7280] leading-[1.6] max-w-2xl">
                  We focus on real opportunities, local intelligence and meaningful connections that create value.
                </p>
              </div>

              {/* Grid of features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {trustItems.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3.5 bg-white border border-[#F3F4F6] rounded-[20px] p-4.5 px-5 shadow-[0px_4px_20px_rgba(0,0,0,0.01)] hover:border-[#FFF1F3] transition-all duration-200"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#FFF1F3] flex items-center justify-center flex-shrink-0">
                      <Icon />
                    </div>
                    <span className="text-[13px] font-extrabold text-[#111827] leading-[1.3]">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
