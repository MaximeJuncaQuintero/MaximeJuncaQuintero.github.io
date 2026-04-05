'use client'

import React from 'react'
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'

interface EducationWidgetProps {
  actionProvider?: unknown
  setState?: unknown
  [key: string]: unknown
}

const education = [
  {
    degree: 'MSc – Strategy, Consulting and Organization',
    institution: 'ESCP Business School',
    location: 'Paris, France',
    period: 'Sep 2025 – Dec 2026',
    description: "Master's program focused on strategy, consulting, and organisational transformation.",
    color: 'var(--accent)',
  },
  {
    degree: 'BBA – Specialization in Business Analytics',
    institution: 'Dublin City University',
    location: 'Dublin, Ireland',
    period: 'Sep 2022 – May 2024',
    description: 'Specialised in Business Analytics — data analysis, visualization, and business intelligence.',
    color: 'var(--secondary)',
  },
  {
    degree: 'BBA – CESEM',
    institution: 'NEOMA Business School',
    location: 'Reims, France',
    period: 'Sep 2019 – Jul 2021',
    description: 'International business and management fundamentals.',
    color: 'var(--accent)',
  },
]

export const EducationWidget: React.FC<EducationWidgetProps> = () => {
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
        <FaGraduationCap style={{ color: 'var(--accent)' }} />
        <span className="font-semibold text-sm" style={{ color: 'var(--accent)' }}>
          Education
        </span>
      </div>

      {/* Items */}
      <div className="divide-y" style={{ borderColor: 'var(--border)' }}>
        {education.map((edu, i) => (
          <div key={i} className="px-4 py-3" style={{ borderColor: 'var(--border)' }}>
            <div className="flex gap-3">
              {/* Accent dot */}
              <div
                className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                style={{ background: edu.color }}
              />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm leading-snug" style={{ color: 'var(--text)' }}>
                  {edu.degree}
                </p>
                <p className="text-xs font-medium mt-0.5" style={{ color: edu.color }}>
                  {edu.institution}
                </p>
                <div className="flex flex-wrap gap-x-3 mt-1">
                  <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-muted, #64748b)' }}>
                    <FaMapMarkerAlt size={10} /> {edu.location}
                  </span>
                  <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-muted, #64748b)' }}>
                    <FaCalendarAlt size={10} /> {edu.period}
                  </span>
                </div>
                <p className="text-xs mt-1.5 leading-relaxed" style={{ color: 'var(--text-muted, #64748b)' }}>
                  {edu.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
