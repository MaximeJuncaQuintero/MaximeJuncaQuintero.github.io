'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaCheckCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

interface Certification {
  title:    string
  issuer:   string
  date:     string
  link:     string
  skills:   string[]
}

const certifications: Certification[] = [
  {
    title:  'Understanding SQL Databases',
    issuer: 'Kubicle',
    date:   '2023',
    link:   '/assets/docs/Maxime_Junca_Quintero_Understanding_SQL_Databases_Certificate.pdf',
    skills: ['SQL', 'Databases', 'Queries'],
  },
  {
    title:  'Python Fundamentals',
    issuer: 'Kubicle',
    date:   '2023',
    link:   '/assets/docs/Maxime Junca Quintero Python Fundamentals Certificate.pdf',
    skills: ['Python', 'Programming', 'Scripting'],
  },
  {
    title:  'Functions, Conditionality and Loops',
    issuer: 'Kubicle',
    date:   '2023',
    link:   '/assets/docs/Maxime Junca Quintero Functions, Conditionality and Loops Certificate.pdf',
    skills: ['Python', 'Logic', 'Algorithms'],
  },
  {
    title:  'Storing, Transforming and Visualizing Data',
    issuer: 'Kubicle',
    date:   '2023',
    link:   '/assets/docs/Maxime Junca Quintero Storing, Transforming and Visualizing Data Certificate.pdf',
    skills: ['Data Pipeline', 'Visualization', 'ETL'],
  },
]

export default function Certifications() {
  const [activeTags, setActiveTags] = useState<string[]>([])
  const tagsCarouselRef = useRef<HTMLDivElement>(null)
  const { lang } = useLanguage()
  const t        = translations[lang].certifications
  if (certifications.length === 0) return null

  const allTags = useMemo(() => {
    const set = new Set<string>()
    for (const c of certifications) for (const s of c.skills) set.add(s)
    return Array.from(set).sort((a, b) => a.localeCompare(b))
  }, [])
  const loopedTags = useMemo(() => [...allTags, ...allTags, ...allTags], [allTags])

  useEffect(() => {
    const node = tagsCarouselRef.current
    if (!node || allTags.length === 0) return
    const segmentWidth = node.scrollWidth / 3
    node.scrollLeft = segmentWidth
  }, [allTags.length])

  const handleCarouselScroll = () => {
    const node = tagsCarouselRef.current
    if (!node) return
    const segmentWidth = node.scrollWidth / 3
    if (segmentWidth <= 0) return
    if (node.scrollLeft < segmentWidth * 0.5) {
      node.scrollLeft += segmentWidth
    } else if (node.scrollLeft > segmentWidth * 1.5) {
      node.scrollLeft -= segmentWidth
    }
  }

  const visible = certifications.filter(c => {
    if (activeTags.length === 0) return true
    return activeTags.some(tg => c.skills.includes(tg))
  })

  return (
    <section id="certifications" className="py-16 sm:py-24" style={{ background: 'var(--bg)' }}>
      <div className="container mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="section-label">{t.label}</span>
          <h2 className="section-heading">{t.heading}</h2>
        </motion.div>

        {/* Tag filter chips */}
        <div className="mb-8 flex flex-col items-center gap-3">
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
            <span>{t.tagFilterLabel}</span>
            {activeTags.length > 0 && (
              <button
                onClick={() => setActiveTags([])}
                className="px-2 py-1 rounded-md border transition-colors duration-200"
                style={{
                  background: 'var(--surface-2)',
                  borderColor: 'var(--border)',
                  color: 'var(--text-muted)',
                }}
              >
                {t.clearTags}
              </button>
            )}
          </div>

          <div className="relative w-full max-w-4xl">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-10 z-10" style={{ background: 'linear-gradient(90deg, var(--bg), rgba(0,0,0,0))' }} />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-10 z-10" style={{ background: 'linear-gradient(270deg, var(--bg), rgba(0,0,0,0))' }} />

            <button
              onClick={() => tagsCarouselRef.current?.scrollBy({ left: -220, behavior: 'smooth' })}
              className="hidden sm:flex absolute left-1 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full border items-center justify-center transition-all duration-200 opacity-70 hover:opacity-100"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--text-muted)' }}
              aria-label="Previous tags"
            >
              <FaChevronLeft className="text-[9px]" />
            </button>
            <button
              onClick={() => tagsCarouselRef.current?.scrollBy({ left: 220, behavior: 'smooth' })}
              className="hidden sm:flex absolute right-1 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full border items-center justify-center transition-all duration-200 opacity-70 hover:opacity-100"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--text-muted)' }}
              aria-label="Next tags"
            >
              <FaChevronRight className="text-[9px]" />
            </button>

            <div
              ref={tagsCarouselRef}
              onScroll={handleCarouselScroll}
              className="no-scrollbar flex gap-2 overflow-x-auto px-3 sm:px-10 py-1 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none' }}
            >
              {loopedTags.map((tag, i) => {
                const selected = activeTags.includes(tag)
                return (
                  <button
                    key={`${tag}-${i}`}
                    onClick={() => {
                      setActiveTags(prev => (prev.includes(tag) ? prev.filter(tg => tg !== tag) : [...prev, tag]))
                    }}
                    className={`shrink-0 snap-start px-2.5 py-1 rounded-xl border text-[11px] font-medium transition-all duration-200 focus:outline-none ${selected ? 'chip-selected' : ''}`}
                    style={{
                      background: selected ? 'rgba(29,78,216,0.10)' : 'var(--surface-2)',
                      borderColor: selected ? 'rgba(29,78,216,0.22)' : 'var(--border)',
                      color: selected ? 'var(--accent)' : 'var(--text-muted)',
                      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                    }}
                  >
                    {tag}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {visible.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none relative"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--accent)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)'
              }}
            >
              {/* Issuer header */}
              <div className="px-5 pt-5 pb-2 flex items-center justify-between">
                <div
                  className="w-8 h-8 rounded-md flex items-center justify-center text-[10px] font-black text-white shrink-0"
                  style={{ background: 'linear-gradient(135deg, var(--accent), var(--secondary))', boxShadow: '0 0 0 1px rgba(255,255,255,0.08) inset' }}
                >
                  {cert.issuer.slice(0, 2).toUpperCase()}
                </div>
                <span
                  className="flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0"
                  style={{
                    background:  'rgba(29,78,216,0.08)',
                    color:       'var(--accent)',
                    border:      '1px solid rgba(29,78,216,0.15)',
                  }}
                >
                  <FaCheckCircle className="text-[9px]" />
                  {cert.date} · {t.verified}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>
                  {cert.issuer}
                </p>
                <h3
                  className="text-sm font-semibold leading-snug mb-3 flex-1"
                  style={{ color: 'var(--text)' }}
                >
                  {cert.title}
                </h3>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.slice(0, 2).map((s, i) => (
                    <span key={i} className="text-[10px] font-medium px-2 py-0.5 rounded-md border"
                      style={{ background: 'var(--surface-2)', borderColor: 'var(--border)', color: 'var(--text-muted)' }}>
                      {s}
                    </span>
                  ))}
                  {cert.skills.length > 2 && (
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-md border" style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}>
                      +{cert.skills.length - 2}
                    </span>
                  )}
                </div>

                <div
                  className="flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200"
                  style={{ color: 'var(--accent)' }}
                >
                  {t.view}
                  <FaExternalLinkAlt className="text-[9px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
