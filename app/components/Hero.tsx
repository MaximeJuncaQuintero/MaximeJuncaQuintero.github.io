'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaArrowDown, FaChevronRight } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

/* ─── Animated counter ───────────────────────────────────── */
function AnimatedStat({
  end,
  suffix,
  label,
}: {
  end: number
  suffix: string
  label: string
}) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  useEffect(() => {
    if (!inView) return
    let startTime: number | null = null
    const duration = 1400

    const animate = (ts: number) => {
      if (!startTime) startTime = ts
      const p = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3) // cubic ease-out
      setCount(Math.floor(eased * end))
      if (p < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [inView, end])

  return (
    <div ref={ref} className="flex flex-col items-start">
      <span
        className="text-2xl sm:text-3xl font-bold tabular-nums"
        style={{ color: 'var(--accent)' }}
      >
        {count}
        {suffix}
      </span>
      <span className="text-[11px] sm:text-xs mt-0.5 leading-tight" style={{ color: 'var(--text-muted)' }}>
        {label}
      </span>
    </div>
  )
}

/* ─── Typing animation for subtitle ──────────────────────── */
function TypeWriter({ text, delay = 600 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)
  const indexRef = useRef(0)

  useEffect(() => {
    const start = setTimeout(() => {
      const interval = setInterval(() => {
        indexRef.current += 1
        setDisplayed(text.slice(0, indexRef.current))
        if (indexRef.current >= text.length) {
          clearInterval(interval)
          setTimeout(() => setCursorVisible(false), 1800)
        }
      }, 38)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(start)
  }, [text, delay])

  return (
    <span>
      {displayed}
      {cursorVisible && (
        <span
          className="inline-block w-0.5 h-[1em] align-middle ml-0.5 animate-pulse"
          style={{ background: 'var(--accent)' }}
        />
      )}
    </span>
  )
}

const statValues = [
  { end: 3, suffix: '+' },
  { end: 3, suffix: ''  },
]

/* ─── Main component ─────────────────────────────────────── */
export default function Hero() {
  const { lang }  = useLanguage()
  const t         = translations[lang].hero
  const stats     = statValues.map((s, i) => ({ ...s, label: t.statLabels[i] }))

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none bg-grid" />

      {/* Radial glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 55% at 8%  60%, rgba(59,130,246,0.07) 0%, transparent 70%),
            radial-gradient(ellipse 40% 35% at 92% 18%, rgba(99,102,241,0.05) 0%, transparent 70%)
          `,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 z-10 py-28">

        {/* ── MOBILE: centred stack ───────────────────────── */}
        <div className="lg:hidden text-center">
          {/* Circular photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div
                className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 shadow-xl"
                style={{ borderColor: 'var(--accent)' }}
              >
                <Image
                  src="/assets/docs/processed_ID_pic.jpeg"
                  alt="Maxime Junca-Quintero"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              {/* Online dot */}
              <span
                className="absolute bottom-2 right-2 w-4 h-4 rounded-full border-2 border-white"
                style={{ background: '#22C55E' }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center mb-4"
          >
            <div
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase"
              style={{
                color: 'var(--accent)',
                borderColor: 'rgba(59,130,246,0.35)',
                background:
                  'linear-gradient(135deg, rgba(37,99,235,0.16) 0%, rgba(99,102,241,0.12) 100%)',
                boxShadow: '0 0 0 1px rgba(59,130,246,0.08), 0 8px 24px rgba(29,78,216,0.18)',
              }}
            >
              <span>Strategy</span>
              <span className="opacity-60">•</span>
              <span>Consulting</span>
              <span className="opacity-60">•</span>
              <span>Project Management</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold leading-tight mb-3"
            style={{ color: 'var(--text)' }}
          >
            Maxime Junca-Quintero
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg font-medium mb-5"
            style={{ color: 'var(--accent)' }}
          >
            <TypeWriter text={t.typewriter} delay={800} />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base max-w-lg mx-auto mb-8 leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
          >
            {t.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            <a href="#about"    className="button">{t.cta1}</a>
            <a href="#projects" className="button-outline">{t.cta2}</a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center gap-8 sm:gap-12 border-t pt-8"
            style={{ borderColor: 'var(--border)' }}
          >
            {stats.map((s, i) => (
              <AnimatedStat key={i} end={s.end} suffix={s.suffix} label={s.label.replace('\n', ' ')} />
            ))}
          </motion.div>
        </div>

        {/* ── DESKTOP: two-column split ────────────────────── */}
        <div className="hidden lg:grid grid-cols-2 gap-16 xl:gap-24 items-center min-h-[80vh]">

          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs font-semibold tracking-[0.16em] uppercase"
                style={{
                  color: 'var(--accent)',
                  borderColor: 'rgba(59,130,246,0.35)',
                  background:
                    'linear-gradient(135deg, rgba(37,99,235,0.16) 0%, rgba(99,102,241,0.12) 100%)',
                  boxShadow: '0 0 0 1px rgba(59,130,246,0.08), 0 10px 28px rgba(29,78,216,0.18)',
                }}
              >
                <span>Strategy</span>
                <span className="opacity-60">•</span>
                <span>Consulting</span>
                <span className="opacity-60">•</span>
                <span>Project Management</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl xl:text-[3.75rem] font-bold leading-[1.1] mb-5"
              style={{ color: 'var(--text)' }}
            >
              Maxime<br />
              <span style={{ color: 'var(--accent)' }}>Junca-Quintero</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl font-medium mb-6"
              style={{ color: 'var(--text-muted)' }}
            >
              <TypeWriter text={t.typewriter} delay={900} />
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-base xl:text-lg max-w-lg mb-10 leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              {t.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex gap-4 mb-14"
            >
              <a href="#about" className="button">
                {t.cta1}
                <FaChevronRight className="text-[10px]" />
              </a>
              <a href="#projects" className="button-outline">{t.cta2}</a>
            </motion.div>

            {/* Animated stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex gap-10 xl:gap-14 border-t pt-8"
              style={{ borderColor: 'var(--border)' }}
            >
              {stats.map((s, i) => (
                <AnimatedStat key={i} end={s.end} suffix={s.suffix} label={s.label.replace('\n', ' ')} />
              ))}
            </motion.div>
          </div>

          {/* Right: Circular photo with decorations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              {/* Outer ring decoration */}
              <div
                className="absolute -inset-4 rounded-full border-2 z-0"
                style={{ borderColor: 'var(--accent)', opacity: 0.18 }}
              />
              {/* Second ring (secondary accent) */}
              <div
                className="absolute -inset-8 rounded-full border z-0"
                style={{ borderColor: 'var(--secondary)', opacity: 0.12 }}
              />
              {/* Dot-grid decoration bottom-left */}
              <div
                className="absolute -bottom-10 -left-10 w-32 h-32 z-0 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle, var(--secondary) 1.5px, transparent 1.5px)`,
                  backgroundSize: '12px 12px',
                }}
              />

              {/* Photo — full circle, large */}
              <div
                className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden z-10 shadow-2xl border-4"
                style={{ borderColor: 'var(--surface-2)' }}
              >
                <Image
                  src="/assets/docs/processed_ID_pic.jpeg"
                  alt="Maxime Junca-Quintero"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>

              {/* Online indicator */}
              <span
                className="absolute bottom-4 right-4 w-5 h-5 rounded-full border-2 z-20"
                style={{ background: '#22C55E', borderColor: 'var(--bg)' }}
              />

              {/* Floating badge — ESCP */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-10 rounded-xl p-3.5 shadow-xl z-20 border"
                style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
              >
                <p className="text-[10px] mb-0.5" style={{ color: 'var(--text-muted)' }}>{t.badge1.prefix}</p>
                <p className="text-sm font-bold"   style={{ color: 'var(--text)' }}>ESCP Business School</p>
                <p className="text-xs font-medium" style={{ color: 'var(--accent)' }}>{t.badge1.sub}</p>
              </motion.div>

              {/* Floating badge — Amazon */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-4 -left-12 rounded-xl p-3 shadow-xl z-20 border"
                style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
              >
                <p className="text-[10px] mb-0.5" style={{ color: 'var(--text-muted)' }}>{t.badge2.prefix}</p>
                <p className="text-sm font-bold"   style={{ color: 'var(--text)' }}>Amazon</p>
                <p className="text-xs font-medium" style={{ color: 'var(--secondary)' }}>{t.badge2.sub}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-1.5">
          <span
            className="text-[10px] font-semibold uppercase tracking-widest"
            style={{ color: 'var(--text-muted)' }}
          >
            {t.scroll}
          </span>
          <FaArrowDown className="animate-bounce text-xs" style={{ color: 'var(--accent)' }} />
        </a>
      </motion.div>
    </section>
  )
}
