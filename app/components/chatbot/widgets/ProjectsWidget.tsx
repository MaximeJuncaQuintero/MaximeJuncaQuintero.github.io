'use client'

import React from 'react'
import Link from 'next/link'
import { FaLayerGroup, FaArrowRight } from 'react-icons/fa'

interface ProjectsWidgetProps {
  actionProvider?: unknown
  setState?: unknown
  [key: string]: unknown
}

const projects = [
  {
    title: 'Amazon KPI Dashboard',
    description: 'Consolidated metrics visibility for Amazon Transportation Services.',
    link: '/projects/amazon-kpi',
    tag: 'PM',
    color: 'var(--accent)',
  },
  {
    title: 'Consulting Reports Monitor',
    description: 'Automated AI-powered pipeline for McKinsey & BCG intelligence digests.',
    link: '/projects/consulting-reports-monitor',
    tag: 'Consulting',
    color: 'var(--secondary)',
  },
  {
    title: 'Tenoris Analytics',
    description: 'Platform to democratize alternative financial data for individual investors.',
    link: '/projects/tenoris-analytics',
    tag: 'PM',
    color: 'var(--accent)',
  },
  {
    title: 'Innovation Report',
    description: "Patents' contribution to market valuation in R&D-intensive sectors.",
    link: '/projects/innovation-report',
    tag: 'Research',
    color: 'var(--secondary)',
  },
]

export const ProjectsWidget: React.FC<ProjectsWidgetProps> = () => {
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
        <FaLayerGroup style={{ color: 'var(--accent)' }} />
        <span className="font-semibold text-sm" style={{ color: 'var(--accent)' }}>
          Projects
        </span>
      </div>

      {/* Items */}
      <div className="divide-y" style={{ borderColor: 'var(--border)' }}>
        {projects.map((p, i) => (
          <Link
            key={i}
            href={p.link}
            className="flex items-start gap-3 px-4 py-3 group transition-colors"
            style={{ display: 'flex', textDecoration: 'none' }}
          >
            <div
              className="mt-1.5 w-2 h-2 rounded-full shrink-0"
              style={{ background: p.color }}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <p
                  className="font-semibold text-sm leading-snug transition-colors"
                  style={{ color: 'var(--text)' }}
                >
                  {p.title}
                </p>
                <FaArrowRight
                  size={10}
                  className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: p.color }}
                />
              </div>
              <span
                className="inline-block text-xs px-1.5 py-0.5 rounded-full font-medium mt-0.5"
                style={{
                  background: `color-mix(in srgb, ${p.color} 12%, transparent)`,
                  color: p.color,
                  border: `1px solid color-mix(in srgb, ${p.color} 25%, transparent)`,
                }}
              >
                {p.tag}
              </span>
              <p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--text-muted, #64748b)' }}>
                {p.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
