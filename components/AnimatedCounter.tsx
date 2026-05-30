'use client'
import { useRef, useEffect } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

export default function AnimatedCounter({
  end,
  duration = 2,
  suffix = '',
  prefix = ''
}: {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to({ val: 0 }, {
          val: end,
          duration,
          ease: 'power1.inOut',
          onUpdate() {
            if (el) {
              el.textContent = prefix + Math.round(this.targets()[0].val) + suffix
            }
          }
        })
      }
    })

    return () => {
      trigger.kill()
    }
  }, [end, duration, suffix, prefix])

  return <span ref={ref}>{prefix}0{suffix}</span>
}
