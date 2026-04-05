'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

interface Reference {
  name:        string
  title:       string
  role:        string
  institution: string
  date:        string
  file:        string
  initials:    string
}

const references: Reference[] = [
  {
    name:        'Damien Dupré DCU',
    title:       'Letter of Reference',
    role:        'Program Director',
    institution: 'Dublin City University',
    date:        '2024',
    file:        '/assets/docs/LoR-Dupre-DCU.pdf',
    initials:    'DD',
  },
  {
    name:        'Richa Saxena Amazon',
    title:       'Letter of Reference',
    role:        'Manager',
    institution: 'Amazon Transportation Services',
    date:        '2024',
    file:        '/assets/docs/LoR-Richa-Amazon.pdf',
    initials:    'RA',
  },
]

export default function References() {
  const { lang } = useLanguage()
  const t        = translations[lang].references
  if (references.length === 0) return null

  return (
    <section id="references" className="py-16 sm:py-24" style={{ background: 'var(--bg-alt)' }}>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {references.map((ref, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            >
              {/* Gradient top */}
              <div
                className="h-[3px]"
                style={{ background: 'linear-gradient(90deg, var(--accent), var(--secondary))' }}
              />

              <div className="p-6 sm:p-7">
                {/* Referee identity */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-black text-white shrink-0"
                    style={{ background: 'linear-gradient(135deg, var(--accent), var(--secondary))' }}
                  >
                    {ref.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-snug" style={{ color: 'var(--text)' }}>
                      {ref.name}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                      {ref.role}
                    </p>
                    <p className="text-xs font-medium mt-0.5" style={{ color: 'var(--accent)' }}>
                      {ref.institution}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px mb-5" style={{ background: 'var(--border)' }} />

                {/* Document row */}
                <a
                  href={ref.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  style={{ background: 'var(--bg-alt)', borderColor: 'var(--border)' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--accent)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)'
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(29,78,216,0.1)' }}
                  >
                    <FaDownload className="text-xs" style={{ color: 'var(--accent)' }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold leading-tight" style={{ color: 'var(--text)' }}>
                      {ref.title}
                    </p>
                    <p className="text-[10px] mt-0.5" style={{ color: 'var(--text-muted)' }}>
                      {t.issued} {ref.date}
                    </p>
                  </div>
                  <FaExternalLinkAlt
                    className="text-[9px] shrink-0 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                    style={{ color: 'var(--accent)' }}
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
