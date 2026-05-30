'use client'
import { useRef, useEffect } from 'react'
import { gsap } from '@/lib/gsap'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'fade'
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up'
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      const fromVars: gsap.TweenVars = {
        opacity: 0,
        duration: 0.7,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }

      if (direction === 'up') fromVars.y = 30
      if (direction === 'left') fromVars.x = -30
      if (direction === 'right') fromVars.x = 30

      gsap.from(el, fromVars)
    }, ref)

    return () => ctx.revert()
  }, [delay, direction])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
