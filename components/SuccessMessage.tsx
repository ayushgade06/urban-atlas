'use client'

import React from 'react'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

interface SuccessMessageProps {
  title?: string
  message?: string
  whatsappText?: string // Pre-filled message for WhatsApp CTA
  whatsappBtnLabel?: string
  homeBtnLabel?: string
}

export default function SuccessMessage({
  title = 'Submission Successful!',
  message = 'Thank you. Your details have been received and we are reviewing them.',
  whatsappText = 'Hi Urban Atlas, I just submitted a form and wanted to connect.',
  whatsappBtnLabel = 'Connect on WhatsApp →',
  homeBtnLabel = 'Back to Homepage',
}: SuccessMessageProps) {
  // Read WhatsApp number from env var
  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || '918375884211'
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(whatsappText)}`

  return (
    <div className="flex flex-col items-center text-center py-10 px-4 max-w-md mx-auto">
      {/* Icon */}
      <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mb-6 select-none animate-bounce">
        <CheckCircle className="w-9 h-9" />
      </div>

      {/* Headline */}
      <h3 className="text-[24px] font-extrabold text-[#111827] mb-3.5 tracking-tight">
        {title}
      </h3>

      {/* Sub-headline */}
      <p className="text-[15px] font-bold text-[#4B5563] leading-relaxed mb-8">
        {message}
      </p>

      {/* Buttons */}
      <div className="flex flex-col gap-3.5 w-full">
        {/* WhatsApp CTA */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center bg-[#25D366] hover:bg-[#1DA851] text-white rounded-[14px] py-4 text-[15px] font-extrabold transition-all duration-200 shadow-[0px_6px_20px_rgba(37,211,102,0.15)] hover:shadow-[0px_8px_24px_rgba(37,211,102,0.22)] cursor-pointer"
        >
          {whatsappBtnLabel}
        </a>

        {/* Home Link */}
        <Link
          href="/"
          className="w-full inline-flex items-center justify-center border-2 border-gray-200 text-[#111827] hover:border-gray-300 rounded-[14px] py-3.5 text-[15px] font-bold transition-all duration-200"
        >
          {homeBtnLabel}
        </Link>
      </div>
    </div>
  )
}
