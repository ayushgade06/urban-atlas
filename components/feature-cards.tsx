'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

// Custom SVGs for checklist indicators
function CheckmarkIcon({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
      <polyline points="20 6 9 17 4 12" />
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

// 1. Isometric Wireframe House SVG
function IsometricHouseSVG() {
  return (
    <svg width="104" height="104" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-4 right-4 opacity-80 pointer-events-none select-none z-0">
      {/* Front Face Wireframe */}
      <path d="M20 75L60 95V55L20 35V75Z" stroke="#FF2D3F" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Right Side Wireframe */}
      <path d="M60 95L100 75V35L60 55V95Z" stroke="#FF2D3F" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Roof Wireframes */}
      <path d="M20 35L60 15L100 35L60 55L20 35Z" stroke="#FF2D3F" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Extra interior/door lines for detailed architectural grid */}
      <line x1="35" y1="82.5" x2="35" y2="52.5" stroke="#FF2D3F" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="45" y1="87.5" x2="45" y2="57.5" stroke="#FF2D3F" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="75" y1="82.5" x2="75" y2="52.5" stroke="#FF2D3F" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="85" y1="77.5" x2="85" y2="47.5" stroke="#FF2D3F" strokeWidth="1" strokeDasharray="2 2" />
      {/* Dynamic connecting nodes */}
      <circle cx="20" cy="75" r="3" fill="#FF2D3F" />
      <circle cx="60" cy="95" r="3" fill="#FF2D3F" />
      <circle cx="100" cy="75" r="3" fill="#FF2D3F" />
      <circle cx="60" cy="15" r="3" fill="#FF2D3F" />
    </svg>
  )
}

// 2. Translucent Isometric Valuation Sheets
function IsometricSheetsSVG() {
  return (
    <svg width="105" height="105" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-4 right-4 opacity-85 pointer-events-none select-none z-0">
      {/* Sheet 1 (Bottom Layer) */}
      <path d="M20 75 L60 95 L100 75 L60 55 Z" fill="rgba(124, 58, 237, 0.08)" stroke="rgba(124, 58, 237, 0.4)" strokeWidth="1.5" />
      {/* Sheet 2 (Middle Layer) */}
      <path d="M20 58 L60 78 L100 58 L60 38 Z" fill="rgba(124, 58, 237, 0.15)" stroke="rgba(124, 58, 237, 0.6)" strokeWidth="1.5" />
      {/* Sheet 3 (Top Layer) */}
      <path d="M20 41 L60 61 L100 41 L60 21 Z" fill="rgba(124, 58, 237, 0.28)" stroke="#7C3AED" strokeWidth="2" />
      {/* Detailed metrics nodes */}
      <line x1="60" y1="21" x2="60" y2="95" stroke="#7C3AED" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="60" cy="61" r="2.5" fill="#7C3AED" />
      <circle cx="60" cy="41" r="2.5" fill="#7C3AED" />
    </svg>
  )
}

export default function FeatureCards() {
  return (
    <section className="py-[74px] bg-[#FFFDFD] w-full" id="features">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr_1fr] gap-6 items-stretch">
          {/* Card 1 — Sell Your Plot */}
          <motion.div
            className="relative bg-gradient-to-b from-[#FFFDFD] to-[#FFF5F6] border border-[#FFF1F3] rounded-[20px] p-8 shadow-[0px_10px_40px_rgba(0,0,0,0.03)] flex flex-col justify-start overflow-hidden min-h-[460px] h-full"
            whileHover={{ y: -4, boxShadow: '0px 10px 40px rgba(255,45,63,0.06)' }}
            transition={{ duration: 0.22 }}
          >
            <div className="relative z-10 flex flex-col items-start w-full">
              <span className="text-[#FF2D3F] text-[12px] font-extrabold uppercase tracking-wider mb-2 bg-[#FFF1F3] px-3 py-1.5 rounded-full">
                Sell Your Plot
              </span>
              <h3 className="text-[28px] font-extrabold text-[#111827] mb-6 leading-tight">
                Own a plot?
              </h3>
              <ul className="space-y-3.5 w-full">
                {[
                  'Connect with serious buyers',
                  'No brokerage commitment',
                  'Free & easy submission',
                  'Market guidance included',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14px] font-bold text-[#4B5563]">
                    <CheckmarkIcon color="#FF2D3F" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 mt-[115px] ml-[-20px] flex flex-col items-start w-full pr-[60px]">
              <motion.a
                href="#submit-plot"
                className="inline-flex items-center gap-2 bg-[#FF2D3F] hover:bg-[#E81F34] text-white rounded-[12px] px-5 py-2.5 text-[13px] font-extrabold transition-all duration-200 premium-shadow whitespace-nowrap"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Plot Details
                <ArrowRight className="h-4 w-4 stroke-[3]" />
              </motion.a>
            </div>

            {/* Decorative isometric wireframe house */}
            <IsometricHouseSVG />
          </motion.div>

          {/* Card 2 — Buyer Circle */}
          <motion.div
            className="relative bg-gradient-to-b from-[#FDFFFD] to-[#F1FAF4] border border-[#E6F4EA] rounded-[20px] p-8 shadow-[0px_10px_40px_rgba(0,0,0,0.03)] flex flex-col justify-start overflow-hidden min-h-[460px] h-full"
            whileHover={{ y: -4, boxShadow: '0px 10px 40px rgba(37,211,102,0.06)' }}
            transition={{ duration: 0.22 }}
          >
            <div className="relative z-10 flex flex-col items-start w-full">
              <span className="text-[#137333] text-[12px] font-extrabold uppercase tracking-wider mb-2 bg-[#E6F4EA] px-3 py-1.5 rounded-full">
                Buyer Circle
              </span>
              <h3 className="text-[28px] font-extrabold text-[#111827] mb-6 leading-tight">
                Join our Buyer Network
              </h3>

              {/* Side by side layout for text + checklist and phone mockup inside card */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-start">
                <div className="flex flex-col items-start w-full">
                  <ul className="space-y-3.5">
                    {[
                      'Get early access to selected plots',
                      'WhatsApp updates',
                      'Focused & verified buyers',
                      'No spam, only relevant opportunities',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[14px] font-bold text-[#4B5563]">
                        <CheckmarkIcon color="#137333" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="relative z-10 mt-[48px] flex flex-col items-start w-full">
                    <motion.a
                      href="#buyer-circle"
                      className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-[12px] px-5 py-2.5 text-[13px] font-extrabold transition-all duration-200 premium-shadow"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <WhatsAppIcon className="h-4 w-4 text-white" />
                      Join WhatsApp Group
                    </motion.a>
                  </div>
                </div>

                {/* WhatsApp Phone Mockup exactly matching screenshot message requirements */}
                <div className="rounded-[18px] bg-white border border-[#E0E0E0] shadow-sm flex flex-col overflow-hidden max-w-[180px] w-full mx-auto md:ml-auto">
                  {/* Phone Header */}
                  <div className="bg-[#075E54] text-white p-2 flex items-center gap-1.5 leading-none">
                    <div className="w-5 h-5 rounded-full bg-[#128C7E] flex items-center justify-center flex-shrink-0">
                      <WhatsAppIcon className="h-3 w-3 text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold">Urban Atlas - Buyer Circle</div>
                      <div className="text-[7px] text-[#A6D9D4] mt-0.5">88 members, online</div>
                    </div>
                  </div>
                  {/* Messages container */}
                  <div className="bg-[#ECE5DD] p-2 space-y-1.5 min-h-[140px] flex flex-col justify-end text-[9px] font-medium leading-normal">
                    {/* Message 1 */}
                    <div className="bg-[#DCF8C6] rounded-md p-1.5 self-start max-w-[90%] shadow-sm">
                      <p className="text-[#333333]">New plot available in Gomti Nagar Extension. 1800 sq.ft., Park Facing</p>
                      <p className="text-[6px] text-gray-500 text-right mt-0.5">10:24 AM</p>
                    </div>
                    {/* Message 2 */}
                    <div className="bg-white rounded-md p-1.5 self-start max-w-[90%] shadow-sm">
                      <p className="text-[#333333]">Corner plot in Sushant Golf City. 1500 sq.ft.</p>
                      <p className="text-[6px] text-gray-500 text-right mt-0.5">11:30 AM</p>
                    </div>
                    {/* Message 3 */}
                    <div className="bg-[#DCF8C6] rounded-md p-1.5 self-start max-w-[90%] shadow-sm">
                      <p className="text-[#333333]">New opportunity in Aashiyana. 1200 sq.ft., West Facing</p>
                      <p className="text-[6px] text-gray-500 text-right mt-0.5">02:44 PM</p>
                    </div>
                  </div>
                  {/* Input bar */}
                  <div className="bg-[#F4F4F4] p-1.5 flex items-center gap-1 border-t border-gray-200">
                    <div className="bg-white rounded-full px-2 py-0.5 text-[8px] text-gray-400 flex-1">Type a message</div>
                    <div className="w-3.5 h-3.5 rounded-full bg-[#075E54] flex items-center justify-center flex-shrink-0">
                      <WhatsAppIcon className="h-2 w-2 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 — Free Valuation */}
          <motion.div
            className="relative bg-gradient-to-b from-[#FCFDFD] to-[#F5F5FC] border border-[#ECECF9] rounded-[20px] p-8 shadow-[0px_10px_40px_rgba(0,0,0,0.03)] flex flex-col justify-start overflow-hidden min-h-[460px] h-full"
            whileHover={{ y: -4, boxShadow: '0px 10px 40px rgba(124,58,237,0.06)' }}
            transition={{ duration: 0.22 }}
          >
            <div className="relative z-10 flex flex-col items-start w-full">
              <span className="text-[#6D28D9] text-[12px] font-extrabold uppercase tracking-wider mb-2 bg-[#EDE9FE] px-3 py-1.5 rounded-full">
                Free Valuation
              </span>
              <h3 className="text-[28px] font-extrabold text-[#111827] mb-6 leading-tight">
                Not sure what your plot is worth?
              </h3>
              <ul className="space-y-3.5 w-full">
                {[
                  'Instant market assessment',
                  'Location & size analysis',
                  'Road width & surroundings',
                  'Current resale activity',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14px] font-bold text-[#4B5563]">
                    <CheckmarkIcon color="#6D28D9" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 mt-[48px] ml-[-10px] flex flex-col items-start w-full pr-[80px]">
              <motion.a
                href="#valuation"
                className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-[12px] px-5 py-2.5 text-[13px] font-extrabold transition-all duration-200 premium-shadow whitespace-nowrap"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Free Valuation
                <ArrowRight className="h-4 w-4 stroke-[3]" />
              </motion.a>
            </div>

            {/* Decorative Translucent Isometric purple layers */}
            <IsometricSheetsSVG />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
