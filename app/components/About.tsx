'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaFilePdf, FaGraduationCap, FaArrowDown, FaDatabase, FaChartLine } from 'react-icons/fa'

const skillGroups = [
  {
    icon: FaChartLine,
    label: 'Strategy & Management',
    color: 'var(--accent)',
    skills: ['Project Management', 'Strategic Planning', 'Operations', 'Problem Solving', 'Consulting'],
  },
  {
    icon: FaDatabase,
    label: 'Data & Technology',
    color: 'var(--secondary)',
    skills: ['SQL', 'Python', 'Data Analysis', 'Power BI', 'Machine Learning'],
  },
]

const highlights = [
  { value: '3+', label: 'Years Experience'         },
  { value: '3',  label: 'Countries (Study & Work)' },
]

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24" style={{ background: 'var(--bg-alt)' }}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Section header */}
          <div className="mb-12">
            <span className="section-label">Background</span>
            <h2 className="section-title">About Me</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

            {/* ── Bio card — 2 cols ─────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-2 rounded-2xl overflow-hidden shadow-sm border"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            >
              {/* Gradient header bar */}
              <div
                className="h-1"
                style={{ background: 'linear-gradient(90deg, var(--accent) 0%, var(--secondary) 100%)' }}
              />

              <div className="p-6 sm:p-8">
                <h3
                  className="text-xl sm:text-2xl font-bold mb-5"
                  style={{ color: 'var(--text)' }}
                >
                  Maxime Junca-Quintero
                </h3>

                {/* Highlight chips */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium"
                      style={{
                        background:   'var(--surface-2)',
                        borderColor:  'var(--border)',
                        color:        'var(--text-muted)',
                      }}
                    >
                      <span className="font-bold text-sm" style={{ color: 'var(--accent)' }}>{h.value}</span>
                      {h.label}
                    </div>
                  ))}
                </div>

                <div
                  className="space-y-3.5 text-sm sm:text-base leading-relaxed"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <p>
                    Hello! I&apos;m Maxime Junca-Quintero, a project manager based in France, focused on innovation,
                    strategy consulting, and strategic data analysis.
                  </p>
                  <p>
                    I am currently pursuing an MSc in Strategy, Consulting and Organization at ESCP Business School
                    (2025–2026), building on a business analytics background from Dublin City University, where I honed
                    my skills in Python, SQL, and Machine Learning. This academic foundation complements my hands-on
                    experience managing key projects and leading strategic initiatives.
                  </p>
                  <p>
                    My professional journey is driven by a consulting mindset—problem structuring, hypothesis-driven
                    analysis, and stakeholder-ready recommendations—combined with advanced analytics to drive business
                    decisions and innovation. With skills in project management, data analytics, operations management,
                    and strategic problem-solving, I am dedicated to transforming complex data into actionable,
                    business-ready insights.
                  </p>
                </div>

                {/* CV download — file card style */}
                <div className="mt-7 pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
                  <a
                    href="/assets/docs/CV Maxime Junca ANG24 v4.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 px-4 py-3.5 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                    style={{
                      background:   'var(--bg-alt)',
                      borderColor:  'var(--border)',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLAnchorElement
                      el.style.borderColor = 'var(--accent)'
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLAnchorElement
                      el.style.borderColor = 'var(--border)'
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(29,78,216,0.1)' }}
                    >
                      <FaFilePdf style={{ color: 'var(--accent)' }} className="text-base" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>Download CV</p>
                      <p className="text-xs truncate" style={{ color: 'var(--text-muted)' }}>
                        CV_Maxime_Junca_Quintero.pdf
                      </p>
                    </div>
                    <FaArrowDown
                      className="text-xs shrink-0 group-hover:translate-y-0.5 transition-transform duration-200"
                      style={{ color: 'var(--accent)' }}
                    />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* ── Right column ─────────────────────────────────── */}
            <div className="flex flex-col gap-5">

              {/* Education card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-sm border"
                style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
              >
                <div className="h-1" style={{ background: 'var(--accent)', opacity: 0.6 }} />
                <div className="p-5 sm:p-6">
                  <h4
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-5"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <FaGraduationCap style={{ color: 'var(--accent)' }} />
                    Education
                  </h4>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-start gap-2.5">
                        <div
                          className="mt-1 w-2 h-2 rounded-full shrink-0"
                          style={{ background: 'var(--accent)' }}
                        />
                        <div>
                          <p className="text-sm font-semibold leading-snug" style={{ color: 'var(--text)' }}>
                            MSc in Strategy, Consulting &amp; Organization
                          </p>
                          <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>ESCP Business School</p>
                          <p
                            className="text-[11px] mt-1 font-medium px-2 py-0.5 rounded-full inline-block"
                            style={{ background: 'rgba(29,78,216,0.08)', color: 'var(--accent)' }}
                          >
                            2025 – 2026
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="h-px" style={{ background: 'var(--border)' }} />

                    <div>
                      <div className="flex items-start gap-2.5">
                        <div
                          className="mt-1 w-2 h-2 rounded-full shrink-0"
                          style={{ background: 'var(--border-2)' }}
                        />
                        <div>
                          <p className="text-sm font-semibold leading-snug" style={{ color: 'var(--text)' }}>BBA</p>
                          <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                            Neoma BS – Dublin City University
                          </p>
                          <p className="text-[11px] mt-1" style={{ color: 'var(--text-muted)' }}>2020 – 2024</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Skills card — grouped */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-sm border flex-1"
                style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
              >
                <div
                  className="h-1"
                  style={{ background: 'linear-gradient(90deg, var(--secondary) 0%, var(--accent) 100%)' }}
                />
                <div className="p-5 sm:p-6 space-y-5">
                  {skillGroups.map((group, gi) => (
                    <div key={gi}>
                      <div className="flex items-center gap-1.5 mb-2.5">
                        <group.icon className="text-[10px]" style={{ color: group.color }} />
                        <span
                          className="text-[10px] font-bold uppercase tracking-widest"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          {group.label}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {group.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-medium border transition-colors duration-150"
                            style={{
                              background:  'var(--surface-2)',
                              borderColor: 'var(--border)',
                              color:       'var(--text-muted)',
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      {gi < skillGroups.length - 1 && (
                        <div className="h-px mt-4" style={{ background: 'var(--border)' }} />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
