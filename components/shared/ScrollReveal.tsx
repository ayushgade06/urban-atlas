'use client'
import { useRef, useEffect, type ReactNode } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

type Direction = 'up' | 'down' | 'left' | 'right' | 'fade'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: Direction
  distance?: number
  once?: boolean
}

export default function ScrollReveal({
  children, className = '', delay = 0,
  duration = 0.7, direction = 'up', distance = 32, once = true
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const from: gsap.TweenVars = { opacity: 0, duration, delay, ease: 'power2.out' }
    if (direction === 'up')    from.y = distance
    if (direction === 'down')  from.y = -distance
    if (direction === 'left')  from.x = distance
    if (direction === 'right') from.x = -distance

    const ctx = gsap.context(() => {
      gsap.from(el, {
        ...from,
        scrollTrigger: {
          trigger: el,
          start: 'top 82%',
          toggleActions: once ? 'play none none none' : 'play reverse play reverse',
        }
      })
    })

    return () => ctx.revert()
  }, [delay, duration, direction, distance, once])

  return <div ref={ref} className={className}>{children}</div>
}
