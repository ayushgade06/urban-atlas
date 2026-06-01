'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { FadeUp } from '@/components/fade-up'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.102-2.884-6.964-1.86-1.862-4.331-2.886-6.968-2.887-5.44 0-9.866 4.42-9.869 9.866-.001 1.77.461 3.5 1.338 5.031L1.993 21.848l6.196-1.625-1.542-.924zm11.536-7.14c-.302-.15-1.78-.88-2.057-.98-.277-.1-.48-.15-.68.15-.2.3-.77.98-.95 1.18-.18.2-.36.23-.66.08-.3-.15-1.27-.47-2.42-1.5-1-.89-1.67-1.99-1.87-2.33-.2-.3-.02-.47.13-.62.14-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.63-.93-2.24-.24-.59-.48-.51-.68-.52-.17-.01-.38-.01-.58-.01-.2 0-.53.07-.8.37-.28.3-1.07 1.05-1.07 2.56s1.09 2.97 1.24 3.17c.15.2 2.15 3.28 5.21 4.6 1.13.48 2.02.77 2.71.99.76.24 1.46.21 2.01.12.61-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35z" />
    </svg>
  )
}

export default function CtaBanner() {
  return (
    <section className="px-6 py-12 bg-white">
      <FadeUp>
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-brand to-[#e8001e] rounded-[2rem] px-8 py-14 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Ready to Sell Your Plot?</h2>
            <p className="text-white/80 text-sm mb-8">
              Submit your property today and get connected with genuine buyers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#submit-plot"
                id="cta-banner-submit"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand rounded-full px-7 py-3 font-semibold text-sm hover:bg-brand-lighter transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Submit Your Plot
                <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="https://wa.me/910000000000"
                target="_blank"
                rel="noopener noreferrer"
                id="cta-banner-buyer-circle"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white rounded-full px-7 py-3 font-semibold text-sm hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <WhatsAppIcon className="h-4 w-4 text-white" />
                Join Buyer Circle
              </motion.a>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  )
}
