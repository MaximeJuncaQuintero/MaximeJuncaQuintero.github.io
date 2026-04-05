'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBriefcase, FaGraduationCap, FaLayerGroup } from 'react-icons/fa'

interface ExperienceItem {
  title:       string
  company:     string
  location:    string
  period:      string
  description: string[]
  type:        'work' | 'education'
}

const experiences: ExperienceItem[] = [
  {
    title:       'MSc – Strategy, Consulting and Organization',
    company:     'ESCP Business School',
    location:    'Paris, France',
    period:      'Sep 2025 – Dec 2026',
    description: [
      "Master's program focused on strategy, consulting, and organizational transformation",
      'Strengthening structured problem-solving and client-ready communication',
    ],
    type: 'education',
  },
  {
    title:       'Operations Manager',
    company:     'Amazon Hub',
    location:    'Paris, France',
    period:      'June – Oct 2024',
    description: [
      'Oversaw Lockers fleet maintenance',
      'Optimized supplier coordination',
      'Gained in-depth operational knowledge',
    ],
    type: 'work',
  },
  {
    title:       'Project Manager - Intern',
    company:     'Amazon Transportation Services (ATS)',
    location:    'London, UK',
    period:      'Jan – Jun 2023',
    description: [
      'Enhanced metric visibility with a consolidated reporting solution',
      'In charge of change management regarding our internal reporting tool',
      'Developed SQL skills through "Data at Amazon" training',
    ],
    type: 'work',
  },
  {
    title:       'Founder',
    company:     'Tenoris Analytics',
    location:    'Toulouse, France',
    period:      'Nov 2021 – Present',
    description: [
      'Founded and lead digital project development company',
      'Manage technical teams for innovative SaaS solutions',
      'Oversee strategic direction and project execution',
    ],
    type: 'work',
  },
  {
    title:       'BBA – Specialization in Business Analytics',
    company:     'Dublin City University',
    location:    'Dublin, Ireland',
    period:      'Sep 2022 – May 2024',
    description: [
      'Acquired skills in Python, SQL, Power BI',
      'Conducted thesis on patent contributions to market valuation using regression models',
    ],
    type: 'education',
  },
  {
    title:       'BBA – CESEM',
    company:     'NEOMA Business School',
    location:    'Reims, France',
    period:      'Sep 2019 – Jul 2021',
    description: [
      'Quantitative Methods (15/20)',
      'Financial Analysis (18.3/20)',
      'Management Accounting (18.2/20)',
    ],
    type: 'education',
  },
]

type Filter = 'all' | 'work' | 'education'

const filters: { key: Filter; label: string; Icon: React.ElementType }[] = [
  { key: 'all',       label: 'All',       Icon: FaLayerGroup   },
  { key: 'work',      label: 'Work',      Icon: FaBriefcase    },
  { key: 'education', label: 'Education', Icon: FaGraduationCap },
]

export default function Experience() {
  const [active, setActive] = useState<Filter>('all')

  const visible = experiences.filter(e => active === 'all' || e.type === active)

  const accentFor = (type: 'work' | 'education') =>
    type === 'work' ? 'var(--accent)' : 'var(--secondary)'

  return (
    <section id="experience" className="py-16 sm:py-24" style={{ background: 'var(--bg)' }}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <span className="section-label">Career Path</span>
            <h2 className="section-heading mb-8">Experience &amp; Education</h2>

            {/* Underline tab filter — centered */}
            <div className="flex items-end justify-center border-b" style={{ borderColor: 'var(--border)' }}>
              {filters.map(({ key, label, Icon }) => (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className="relative flex items-center gap-1.5 px-5 sm:px-7 py-2.5 text-sm font-medium transition-colors duration-200 focus:outline-none"
                  style={{
                    color: active === key ? 'var(--accent)' : 'var(--text-muted)',
                  }}
                >
                  <Icon className="text-[11px]" />
                  <span>{label}</span>
                  {active === key && (
                    <motion.div
                      layoutId="exp-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t-sm"
                      style={{ background: 'var(--accent)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative pl-8 sm:pl-12" style={{ borderLeft: '1px solid var(--border)' }}>
            <AnimatePresence mode="popLayout">
              {visible.map((exp, index) => {
                const color = accentFor(exp.type)
                return (
                  <motion.div
                    key={exp.title + exp.company}
                    layout
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{    opacity: 0, x: -12 }}
                    transition={{ duration: 0.28, delay: index * 0.04 }}
                    className="mb-6 relative"
                  >
                    {/* Timeline connector dot */}
                    <div
                      className="absolute -left-[2.6rem] sm:-left-[3.1rem] top-5 w-5 h-5 rounded-full border-[3px] flex items-center justify-center z-10"
                      style={{
                        background:   'var(--bg)',
                        borderColor:  color,
                      }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
                    </div>

                    {/* Card */}
                    <div
                      className="group rounded-2xl border transition-all duration-300 overflow-hidden hover:-translate-y-0.5 hover:shadow-lg"
                      style={{
                        background:  'var(--surface)',
                        borderColor: 'var(--border)',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = color
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'
                      }}
                    >
                      {/* Accent top line */}
                      <div className="h-[3px]" style={{ background: color, opacity: 0.7 }} />

                      <div className="p-4 sm:p-5">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                          <div>
                            <h3
                              className="text-sm sm:text-base font-semibold leading-snug"
                              style={{ color: 'var(--text)' }}
                            >
                              {exp.title}
                            </h3>
                            <p className="text-xs font-medium mt-0.5" style={{ color }}>
                              {exp.company} · {exp.location}
                            </p>
                          </div>
                          <span
                            className="text-[11px] font-medium px-2.5 py-1 rounded-full border shrink-0 self-start"
                            style={{
                              background:  'var(--surface-2)',
                              borderColor: 'var(--border)',
                              color:       'var(--text-muted)',
                            }}
                          >
                            {exp.period}
                          </span>
                        </div>

                        <ul className="space-y-1.5">
                          {exp.description.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed"
                              style={{ color: 'var(--text-muted)' }}
                            >
                              <span
                                className="mt-[7px] w-1 h-1 rounded-full shrink-0"
                                style={{ background: color }}
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>

            {visible.length === 0 && (
              <p className="text-sm text-center py-10" style={{ color: 'var(--text-muted)' }}>
                No entries for this filter.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
