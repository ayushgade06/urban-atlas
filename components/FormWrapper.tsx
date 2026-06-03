'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface FormWrapperProps {
  children: React.ReactNode
  label?: string
  headline: string
  subheadline: string
}

export default function FormWrapper({
  children,
  label,
  headline,
  subheadline,
}: FormWrapperProps) {
  return (
    <div className="min-h-screen bg-white font-sans antialiased flex flex-col">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow pt-10 pb-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col items-center">
          
          {/* Header Block */}
          <div className="text-center max-w-3xl mt-6 mb-10 flex flex-col items-center">
            {label && (
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF1F3] text-[#FF2D3F] text-[12px] font-extrabold px-[15px] py-[7px] mb-4 select-none uppercase tracking-wider">
                {label}
              </div>
            )}
            <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-extrabold leading-[1.1] text-[#111827] tracking-tight mb-4">
              {headline}
            </h1>
            <p className="text-[15px] sm:text-[16px] text-[#4B5563] leading-relaxed max-w-xl font-medium">
              {subheadline}
            </p>
          </div>

          {/* Form Card Container */}
          <div className="w-full max-w-[640px]">
            <div className="bg-white border border-[#F3F4F6] rounded-[20px] shadow-[0px_10px_40px_rgba(0,0,0,0.03)] p-6 sm:p-10">
              {children}
            </div>
          </div>
          
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
