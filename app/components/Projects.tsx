'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

type Category = 'all' | 'consulting' | 'pm' | 'research'

interface Project {
  title:       string
  description: string
  image:       string
  link:        string
  tech:        string[]
  category:    Category
  logoStyle?:  string
}

const projects: Project[] = [
  {
    title:       'Amazon EU ATS KPI Library',
    description: 'A project focused on enhancing internal reporting tools and consolidating metrics visibility for Amazon Transportation Services. Utilized Excel macros and SQL queries.',
    image:       '/assets/projects/amazon-kpi.jpg',
    link:        '/projects/amazon-kpi',
    tech:        ['Excel Macros', 'SQL', 'PerfectMile'],
    category:    'pm',
    logoStyle:   'object-contain bg-white p-4',
  },
  {
    title:       'Tenoris Analytics',
    description: 'Led the development of an MVP platform to democratize alternative financial data for individual investors across Europe. Built a web scraping infrastructure to collect financial data, with a Kubernetes-based architecture and GraphQL API for efficient data access and analysis.',
    image:       '/assets/projects/TA_Logo.png',
    link:        '/projects/tenoris-analytics',
    tech:        ['Web Scraping', 'Kubernetes', 'GraphQL', 'Data Architecture'],
    category:    'pm',
    logoStyle:   'object-contain bg-white p-4 scale-150',
  },
  {
    title:       'Innovation Report',
    description: 'Conducted research analyzing how patents contribute to market valuation of innovative companies. Leveraged comprehensive datasets to examine the relationship between patent activity and market capitalization across R&D-intensive sectors.',
    image:       '/assets/projects/innovation-report.jpg',
    link:        '/projects/innovation-report',
    tech:        ['Python', 'Pandas', 'Data Analysis', 'Scikit-Learn', 'Visualization'],
    category:    'research',
    logoStyle:   'object-contain bg-white p-4',
  },
  {
    title:       'Flowmap',
    description: 'Developing an innovative SaaS platform that fully automates project progress tracking through AI-powered code analysis. The system integrates with GitHub repositories to provide real-time insights into feature development progress without requiring manual updates from development teams.',
    image:       '/assets/projects/TA_Logo.png',
    link:        '/projects/flowmap',
    tech:        ['AI/ML', 'GitHub Integration', 'SaaS Architecture', 'Automated Reporting'],
    category:    'pm',
    logoStyle:   'object-contain bg-white p-4 scale-150',
  },
  {
    title:       'TalentGrid',
    description: 'An exploratory project addressing the disconnect between education and employment. Led as project manager to develop a three-sided platform connecting universities, students, and employers through rich ePortfolios and AI-powered engagement, replacing traditional CV-based hiring.',
    image:       '/assets/projects/Logo_black.png',
    link:        '/projects/talentgrid',
    tech:        ['No-Code Platform', 'AI Chatbot', 'ePortfolio System', 'Three-Sided Marketplace'],
    category:    'pm',
    logoStyle:   'object-contain bg-white p-4',
  },
]

const filters: { key: Category; label: string }[] = [
  { key: 'all',        label: 'All'               },
  { key: 'consulting', label: 'Consulting'         },
  { key: 'pm',         label: 'Project Management' },
  { key: 'research',   label: 'Research'           },
]

const categoryMeta: Record<Category, { color: string; bg: string; border: string }> = {
  all:        { color: 'var(--accent)',     bg: 'rgba(59,130,246,0.08)',  border: 'rgba(59,130,246,0.18)'  },
  consulting: { color: 'var(--accent)',     bg: 'rgba(59,130,246,0.08)',  border: 'rgba(59,130,246,0.18)'  },
  pm:         { color: 'var(--accent)',     bg: 'rgba(59,130,246,0.08)',  border: 'rgba(59,130,246,0.18)'  },
  research:   { color: 'var(--secondary)', bg: 'rgba(99,102,241,0.08)', border: 'rgba(99,102,241,0.18)'  },
}

export default function Projects() {
  const [active, setActive] = useState<Category>('all')

  const visible = projects.filter(p => active === 'all' || p.category === active)

  return (
    <section id="projects" className="py-16 sm:py-24" style={{ background: 'var(--bg-alt)' }}>
      <div className="container mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-heading mb-8">Projects</h2>

          {/* Underline tab filter — centered */}
          <div className="flex items-end justify-center border-b" style={{ borderColor: 'var(--border)' }}>
            {filters.map(f => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className="relative px-4 sm:px-6 py-2.5 text-sm font-medium transition-colors duration-200 focus:outline-none whitespace-nowrap"
                style={{
                  color: active === f.key ? 'var(--accent)' : 'var(--text-muted)',
                }}
              >
                <span>{f.label}</span>
                {active === f.key && (
                  <motion.div
                    layoutId="project-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t-sm"
                    style={{ background: 'var(--accent)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => {
              const meta = categoryMeta[project.category]
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.97, y: 10 }}
                  animate={{ opacity: 1, scale: 1,    y: 0  }}
                  exit={{    opacity: 0, scale: 0.97, y: 10  }}
                  transition={{ duration: 0.28 }}
                >
                  <Link href={project.link} className="block group h-full">
                    <div
                      className="h-full flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                      style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = meta.color
                        ;(e.currentTarget as HTMLDivElement).style.boxShadow =
                          `0 16px 40px rgba(0,0,0,0.1)`
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'
                        ;(e.currentTarget as HTMLDivElement).style.boxShadow = ''
                      }}
                    >
                      {/* Gradient top accent */}
                      <div
                        className="h-[3px] shrink-0"
                        style={{
                          background: project.category === 'research'
                            ? 'linear-gradient(90deg, var(--secondary), var(--secondary-light))'
                            : 'linear-gradient(90deg, var(--accent), var(--accent-light))',
                        }}
                      />

                      {/* Image with overlay */}
                      <div className="relative h-40 sm:h-44 overflow-hidden bg-white shrink-0">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className={`transition-transform duration-500 group-hover:scale-105 ${project.logoStyle ?? 'object-cover'}`}
                        />
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: project.category === 'research'
                              ? 'rgba(99,102,241,0.12)'
                              : 'rgba(29,78,216,0.12)',
                          }}
                        />
                      </div>

                      {/* Category badge */}
                      <div className="px-5 pt-4">
                        <span
                          className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border"
                          style={{
                            background:  meta.bg,
                            color:       meta.color,
                            borderColor: meta.border,
                          }}
                        >
                          {filters.find(f => f.key === project.category)?.label}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col flex-1">
                        <h3
                          className="text-sm sm:text-base font-semibold mb-2 leading-snug"
                          style={{ color: 'var(--text)' }}
                        >
                          {project.title}
                        </h3>
                        <p
                          className="text-xs sm:text-sm leading-relaxed mb-4 flex-1"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.tech.map((tech, ti) => (
                            <span
                              key={ti}
                              className="px-2 py-0.5 text-[11px] rounded-md border font-medium"
                              style={{
                                background:  'var(--surface-2)',
                                borderColor: 'var(--border)',
                                color:       'var(--text-muted)',
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div
                          className="flex items-center gap-1.5 text-xs font-semibold mt-auto"
                          style={{ color: meta.color }}
                        >
                          View Project
                          <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
