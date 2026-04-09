'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'
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
            <motion.a
              key={index}
              href={ref.file}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl overflow-hidden border p-5 sm:p-6"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-black text-white shrink-0"
                  style={{ background: 'linear-gradient(135deg, var(--accent), var(--secondary))' }}>
                  {ref.initials}
                </div>
                <span className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full border"
                  style={{ color: 'var(--text-muted)', borderColor: 'var(--border)' }}>{ref.date}</span>
              </div>

              <p className="mobile-content-fix text-sm font-bold leading-snug" style={{ color: 'var(--text)' }}>{ref.name}</p>
              <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{ref.role}</p>
              <p className="text-xs mt-0.5 mb-3" style={{ color: 'var(--accent)' }}>{ref.institution}</p>
              <p className="text-xs font-semibold leading-tight mb-4" style={{ color: 'var(--text)' }}>{ref.title}</p>
              <div className="h-px mb-3" style={{ background: 'var(--border)' }} />
              <div className="flex items-center justify-between text-xs font-semibold" style={{ color: 'var(--accent)' }}>
                <span>{t.view}</span>
                <FaExternalLinkAlt className="text-[9px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
