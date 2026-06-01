'use client'
import { useRef, useEffect } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

interface Props {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export default function AnimatedCounter({ end, duration = 2, suffix = '', prefix = '', className }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const triggered = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        if (triggered.current) return
        triggered.current = true
        const obj = { val: 0 }
        gsap.to(obj, {
          val: end, duration,
          ease: 'power1.inOut',
          onUpdate() {
            if (el) el.textContent = prefix + Math.round(obj.val).toLocaleString('en-IN') + suffix
          }
        })
      }
    })
  }, [end, duration, suffix, prefix])

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>
}
