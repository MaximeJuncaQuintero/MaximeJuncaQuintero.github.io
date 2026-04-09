'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaUsers } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

interface MediaItem {
  title:       string
  description: string
  descriptionFr?: string
  file:        string
  date:        string
  authors:     string
  type:        string
  typeFr?:     string
  tags:        string[]
}

const mediaItems: MediaItem[] = [
  {
    title:       'NXU Think Tank Report',
    description: 'This think tank report, co-written by myself, explores the societal, economic, and employment impacts of AI tools like Chat GPT. It delves into the nuances between AI and human intelligence, the expert use of Chat GPT, and its transformative potential across various sectors. The report also discusses the broader implications of AI on education, the labor market, and the concept of work in the context of a potential new era of economic growth and social transformation similar to the Industrial Revolution.',
    descriptionFr: "Ce rapport de think tank, co-rédigé, analyse les impacts sociétaux, économiques et sur l'emploi des outils d'IA comme ChatGPT. Il détaille les nuances entre intelligence humaine et IA, les usages experts de ChatGPT, et son potentiel de transformation dans différents secteurs. Le rapport traite aussi des implications sur l'éducation, le marché du travail et l'évolution du travail dans un contexte de transformation comparable à une nouvelle révolution industrielle.",
    file:        '/assets/docs/NXUTHINKTANK.pdf',
    date:        '2024',
    authors:     'Co-authored · NXU Think Tank',
    type:        'Think Tank Report',
    typeFr:      'Rapport de think tank',
    tags:        ['AI', 'Future of Work', 'Labor Market', 'Education', 'ChatGPT'],
  },
]

export default function Media() {
  const { lang } = useLanguage()
  const t        = translations[lang].media
  if (mediaItems.length === 0) return null

  return (
    <section id="media" className="py-16 sm:py-24" style={{ background: 'var(--bg)' }}>
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

        <div className="max-w-4xl mx-auto space-y-5">
          {mediaItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--accent)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'
              }}
            >
              {/* Gradient top */}
              <div
                className="h-[3px]"
                style={{ background: 'linear-gradient(90deg, var(--accent), var(--secondary))' }}
              />

              <div className="p-6 sm:p-8">
                {/* Type + date row */}
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border"
                    style={{
                      background:  'rgba(29,78,216,0.08)',
                      color:       'var(--accent)',
                      borderColor: 'rgba(29,78,216,0.18)',
                    }}
                  >
                    {lang === 'fr' ? (item.typeFr ?? item.type) : item.type}
                  </span>
                  <span
                    className="text-[11px] font-medium px-2.5 py-1 rounded-full border"
                    style={{
                      background:  'var(--surface-2)',
                      borderColor: 'var(--border)',
                      color:       'var(--text-muted)',
                    }}
                  >
                    {item.date}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="mobile-content-fix text-lg sm:text-2xl font-bold leading-snug mb-2"
                  style={{ color: 'var(--text)' }}
                >
                  {item.title}
                </h3>

                {/* Authors */}
                <p
                  className="flex items-center gap-1.5 text-xs font-medium mb-4"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <FaUsers className="text-[10px]" style={{ color: 'var(--secondary)' }} />
                  {t.coAuthored} · NXU Think Tank
                </p>

                {/* Abstract */}
                <p
                  className="mobile-content-fix text-sm sm:text-base leading-relaxed mb-5"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {lang === 'fr' ? (item.descriptionFr ?? item.description) : item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-lg border"
                      style={{
                        background:  'var(--surface-2)',
                        borderColor: 'var(--border)',
                        color:       'var(--text-muted)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Divider + CTA */}
                <div className="h-px mb-5" style={{ background: 'var(--border)' }} />

                <a
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200"
                  style={{ color: 'var(--accent)' }}
                >
                  {t.read}
                  <FaExternalLinkAlt className="text-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
