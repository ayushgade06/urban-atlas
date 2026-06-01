export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className ?? ''}`}>
      {/* UA monogram — U and A sharing the center vertical stroke */}
      <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* U shape */}
        <path
          d="M2 3 L2 15 C2 19 6 21 11 21 C16 21 20 19 20 15 L20 3"
          stroke="#FF2D55" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none"
        />
        {/* A shape — shares the right leg of U */}
        <path
          d="M20 3 L27 21" stroke="#FF2D55" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path
          d="M14 14 L24 14" stroke="#FF2D55" strokeWidth="2.8" strokeLinecap="round" fill="none"/>
        {/* dot on A */}
        <circle cx="17" cy="19.5" r="1.4" fill="#FF2D55"/>
      </svg>
      <span className="font-bold text-[17px] text-ink tracking-tight">Urban Atlas</span>
    </div>
  )
}
