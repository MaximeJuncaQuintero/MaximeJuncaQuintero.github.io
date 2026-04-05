'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa'
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
  const { lang } = useLanguage()
  const t        = translations[lang].certifications
  if (certifications.length === 0) return null

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--accent)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)'
              }}
            >
              {/* Gradient top strip */}
              <div
                className="h-[3px]"
                style={{ background: 'linear-gradient(90deg, var(--accent), var(--secondary))' }}
              />

              {/* Issuer header */}
              <div
                className="px-5 pt-5 pb-4 flex items-center justify-between border-b"
                style={{ borderColor: 'var(--border)' }}
              >
                {/* Issuer avatar */}
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-black text-white shrink-0"
                  style={{ background: 'linear-gradient(135deg, var(--accent), var(--secondary))' }}
                >
                  {cert.issuer.slice(0, 2).toUpperCase()}
                </div>

                {/* Verified chip */}
                <span
                  className="flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{
                    background:  'rgba(29,78,216,0.08)',
                    color:       'var(--accent)',
                    border:      '1px solid rgba(29,78,216,0.15)',
                  }}
                >
                  <FaCheckCircle className="text-[9px]" />
                  {t.verified}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>
                  {cert.issuer} · {cert.date}
                </p>
                <h3
                  className="text-sm font-semibold leading-snug mb-4 flex-1"
                  style={{ color: 'var(--text)' }}
                >
                  {cert.title}
                </h3>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cert.skills.map((s, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md border"
                      style={{
                        background:  'var(--surface-2)',
                        borderColor: 'var(--border)',
                        color:       'var(--text-muted)',
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* CTA */}
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
