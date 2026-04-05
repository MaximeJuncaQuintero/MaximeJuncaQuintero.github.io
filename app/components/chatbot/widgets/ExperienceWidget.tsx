'use client'

import React from 'react'
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'

interface ExperienceWidgetProps {
  actionProvider?: unknown
  setState?: unknown
  [key: string]: unknown
}

const experiences = [
  {
    title: 'Operations Manager',
    company: 'Amazon Hub',
    location: 'Paris, France',
    period: 'Jun – Oct 2024',
    description: 'Oversaw Lockers fleet maintenance, optimised supplier coordination, and gained in-depth operational knowledge.',
    color: 'var(--accent)',
  },
  {
    title: 'Project Manager – Intern',
    company: 'Amazon Transportation Services',
    location: 'London, UK',
    period: 'Jan – Jun 2023',
    description: 'Built a consolidated reporting solution, managed change for internal tools, developed SQL skills.',
    color: 'var(--secondary)',
  },
  {
    title: 'Founder',
    company: 'Tenoris Analytics',
    location: 'Toulouse, France',
    period: 'Nov 2021 – Jan 2023',
    description: 'Led strategy and team management for alternative financial data project; monitored technical progress.',
    color: 'var(--accent)',
  },
]

export const ExperienceWidget: React.FC<ExperienceWidgetProps> = () => {
  return (
    <div
      className="mt-2 mb-4 rounded-2xl overflow-hidden"
      style={{ border: '1px solid var(--border)', background: 'var(--surface)' }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ borderBottom: '1px solid var(--border)', background: 'var(--surface)' }}
      >
        <FaBriefcase style={{ color: 'var(--accent)' }} />
        <span className="font-semibold text-sm" style={{ color: 'var(--accent)' }}>
          Work Experience
        </span>
      </div>

      {/* Items */}
      <div className="divide-y" style={{ borderColor: 'var(--border)' }}>
        {experiences.map((exp, i) => (
          <div key={i} className="px-4 py-3">
            <div className="flex gap-3">
              <div
                className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                style={{ background: exp.color }}
              />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm leading-snug" style={{ color: 'var(--text)' }}>
                  {exp.title}
                </p>
                <p className="text-xs font-medium mt-0.5" style={{ color: exp.color }}>
                  {exp.company}
                </p>
                <div className="flex flex-wrap gap-x-3 mt-1">
                  <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-muted, #64748b)' }}>
                    <FaMapMarkerAlt size={10} /> {exp.location}
                  </span>
                  <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-muted, #64748b)' }}>
                    <FaCalendarAlt size={10} /> {exp.period}
                  </span>
                </div>
                <p className="text-xs mt-1.5 leading-relaxed" style={{ color: 'var(--text-muted, #64748b)' }}>
                  {exp.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
