'use client'

import React from 'react'
import { FaTools } from 'react-icons/fa'

interface SkillsWidgetProps {
  actionProvider?: unknown
  setState?: unknown
  [key: string]: unknown
}

const skillGroups = [
  {
    label: 'Strategy & Management',
    color: 'var(--accent)',
    skills: ['Project Management', 'Strategic Planning', 'Team Leadership', 'Business Analysis'],
  },
  {
    label: 'Data & Technology',
    color: 'var(--secondary)',
    skills: ['Excel / VBA', 'SQL', 'Python', 'Data Visualization'],
  },
  {
    label: 'Languages',
    color: 'var(--accent)',
    skills: ['French (Native)', 'English (Fluent)', 'Spanish (Intermediate)'],
  },
]

export const SkillsWidget: React.FC<SkillsWidgetProps> = () => {
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
        <FaTools style={{ color: 'var(--accent)' }} />
        <span className="font-semibold text-sm" style={{ color: 'var(--accent)' }}>
          Skills
        </span>
      </div>

      {/* Groups */}
      <div className="divide-y" style={{ borderColor: 'var(--border)' }}>
        {skillGroups.map((group, i) => (
          <div key={i} className="px-4 py-3">
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-2"
              style={{ color: group.color }}
            >
              {group.label}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill, j) => (
                <span
                  key={j}
                  className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{
                    background: `color-mix(in srgb, ${group.color} 10%, transparent)`,
                    color: group.color,
                    border: `1px solid color-mix(in srgb, ${group.color} 22%, transparent)`,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
