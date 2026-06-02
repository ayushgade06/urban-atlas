'use client'

import React from 'react'

export function Logo({ className = '', showTagline = true }: { className?: string; showTagline?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* UA Monogram - Red brand mark matching visual spec */}
      <div className="flex-shrink-0 flex items-center justify-center">
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Circular bounding/ring with brand color */}
          <circle cx="17" cy="17" r="15" stroke="#FF2D3F" strokeWidth="2.4" fill="none" />
          {/* Monogram U + A merging elegantly */}
          <path
            d="M9 11V20C9 23 11 25 14 25C17 25 19 23 19 20V11"
            stroke="#FF2D3F"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 11L25 25"
            stroke="#FF2D3F"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5 19.5H23"
            stroke="#FF2D3F"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Text Stack */}
      <div className="flex flex-col justify-center leading-none">
        <span className="font-extrabold text-[19px] text-[#111827] tracking-tight">
          Urban Atlas
        </span>
        {showTagline && (
          <span className="text-[9px] font-medium text-[#6B7280] tracking-wider mt-0.5 uppercase">
            Lucknow Real Estate Intelligence
          </span>
        )}
      </div>
    </div>
  )
}
