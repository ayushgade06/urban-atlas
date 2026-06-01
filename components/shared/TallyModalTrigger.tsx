'use client'
import { useEffect } from 'react'
import { TALLY_FORM_URL } from '@/lib/config'

interface Props {
  children: React.ReactNode
  className?: string
}

export default function TallyModalTrigger({ children, className = '' }: Props) {
  useEffect(() => {
    const existing = document.querySelector('script[src="https://tally.so/widgets/embed.js"]')
    if (!existing) {
      const script = document.createElement('script')
      script.src = 'https://tally.so/widgets/embed.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <button
      data-tally-open="68MPZA"
      data-tally-layout="modal"
      data-tally-width="480"
      data-tally-emoji-text="👋"
      data-tally-emoji-animation="wave"
      className={className}
    >
      {children}
    </button>
  )
}
