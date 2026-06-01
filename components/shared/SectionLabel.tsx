import React from 'react'

export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[#FF385C] text-xs font-semibold uppercase tracking-widest mb-3">
      {children}
    </span>
  )
}
