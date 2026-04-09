'use client'

import { useEffect, useRef } from 'react'

export default function AmbientDots() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    let raf = 0
    let tx = 0
    let ty = 0
    let ix = 0
    let iy = 0
    let hover = 0
    let targetHover = 0
    let scroll = 0
    let targetScroll = 0
    let motion = 0

    const onMove = (e: MouseEvent) => {
      const dx = tx - e.clientX / window.innerWidth
      const dy = ty - e.clientY / window.innerHeight
      tx = e.clientX / window.innerWidth
      ty = e.clientY / window.innerHeight
      targetHover = 1
      motion = Math.min(1, motion + Math.sqrt(dx * dx + dy * dy) * 4)
    }

    const onLeave = () => {
      targetHover = 0
    }

    const onScroll = () => {
      const doc = document.documentElement
      const max = Math.max(1, doc.scrollHeight - window.innerHeight)
      targetScroll = window.scrollY / max
    }

    const loop = () => {
      ix += (tx - ix) * 0.06
      iy += (ty - iy) * 0.06
      hover += (targetHover - hover) * 0.07
      scroll += (targetScroll - scroll) * 0.08
      motion *= 0.94
      el.style.setProperty('--mx', String(ix))
      el.style.setProperty('--my', String(iy))
      el.style.setProperty('--mh', String(hover))
      el.style.setProperty('--ms', String(scroll))
      el.style.setProperty('--mv', String(motion))
      raf = window.requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseleave', onLeave, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    raf = window.requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('scroll', onScroll)
      window.cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div ref={ref} className="ambient-bg" aria-hidden="true">
      <div className="ambient-layer ambient-layer-1" />
      <div className="ambient-layer ambient-layer-2" />
      <div className="ambient-layer ambient-layer-3" />
      <div className="ambient-glow" />
      <div className="ambient-hover-glow" />
    </div>
  )
}
