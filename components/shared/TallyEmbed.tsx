'use client'
import { useEffect } from 'react'
import { TALLY_FORM_URL } from '@/lib/config'

interface Props {
  formId?: string       // default: '68MPZA'
  layout?: 'default' | 'modal'
  width?: string
  className?: string
  locality?: string
}

export default function TallyEmbed({ formId = '68MPZA', width = '100%', className = '', locality }: Props) {
  useEffect(() => {
    // Load Tally embed script
    const existing = document.querySelector('script[src="https://tally.so/widgets/embed.js"]')
    if (!existing) {
      const script = document.createElement('script')
      script.src = 'https://tally.so/widgets/embed.js'
      script.async = true
      document.body.appendChild(script)
    } else {
      // If Tally already loaded, trigger re-scan
      if (typeof (window as any).Tally !== 'undefined') {
        (window as any).Tally.loadEmbeds()
      }
    }
  }, [])

  const queryParams = `?alignLeft=1&hideTitle=1&transparentBackground=1${
    locality ? `&locality=${encodeURIComponent(locality)}` : ''
  }`

  return (
    <div className={className}>
      <iframe
        data-tally-src={`https://tally.so/embed/${formId}${queryParams}`}
        width={width}
        height="400"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Urban Atlas Lead Form"
        style={{ border: 'none', background: 'transparent' }}
      />
    </div>
  )
}
