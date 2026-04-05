'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaDownload, FaExternalLinkAlt, FaUser, FaCalendarAlt, FaClock } from 'react-icons/fa'

interface ProjectDetailProps {
  title:             string
  image:             string
  logoStyle?:        string
  poc?:              string
  meetingFrequency?: string
  projectLength?:    string
  context:           string
  objective:         string
  implementation:    string
  method:            string
  result?:           string
  tools:             string[]
  documentation?: {
    title: string
    link:  string
  }[]
  screenshots?: {
    title:        string
    image:        string
    description?: string
  }[]
}

function SectionBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border overflow-hidden" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
      <div
        className="px-5 py-3 border-b flex items-center gap-2"
        style={{ background: 'var(--surface-2)', borderColor: 'var(--border)' }}
      >
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
        <h2 className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
          {label}
        </h2>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  )
}

export default function ProjectDetail({
  title,
  image,
  logoStyle,
  poc,
  meetingFrequency,
  projectLength,
  context,
  objective,
  implementation,
  method,
  result,
  tools,
  documentation,
  screenshots,
}: ProjectDetailProps) {
  const meta = [
    poc              && { icon: FaUser,        label: 'Point of Contact',   value: poc              },
    meetingFrequency && { icon: FaCalendarAlt, label: 'Meeting Frequency',  value: meetingFrequency },
    projectLength    && { icon: FaClock,       label: 'Project Length',     value: projectLength    },
  ].filter(Boolean) as { icon: React.ElementType; label: string; value: string }[]

  return (
    <div className="space-y-6 p-4 sm:p-6 md:p-8">

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative h-56 sm:h-72 md:h-80 w-full rounded-2xl overflow-hidden border" style={{ borderColor: 'var(--border)' }}>
          <Image
            src={image}
            alt={title}
            fill
            className={logoStyle ?? 'object-cover'}
            priority
          />
          {/* Gradient overlay for text legibility */}
          {!logoStyle && (
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)' }} />
          )}
        </div>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold"
        style={{ color: 'var(--text)' }}
      >
        {title}
      </motion.h1>

      {/* Meta chips */}
      {meta.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3"
        >
          {meta.map(({ icon: Icon, label, value }, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 rounded-xl border"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: 'rgba(29,78,216,0.1)' }}
              >
                <Icon className="text-xs" style={{ color: 'var(--accent)' }} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-0.5" style={{ color: 'var(--text-muted)' }}>
                  {label}
                </p>
                <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Content sections */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-4"
      >
        <SectionBlock label="Context">
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>{context}</p>
        </SectionBlock>

        <SectionBlock label="Objective">
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>{objective}</p>
        </SectionBlock>

        <SectionBlock label="Implementation">
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>{implementation}</p>
        </SectionBlock>

        <SectionBlock label="Method">
          <p className="text-sm sm:text-base leading-relaxed whitespace-pre-line" style={{ color: 'var(--text-muted)' }}>{method}</p>
        </SectionBlock>

        {result && (
          <SectionBlock label="Result">
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>{result}</p>
          </SectionBlock>
        )}

        {/* Tools */}
        <SectionBlock label="Tools &amp; Technologies">
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-xs font-medium rounded-lg border"
                style={{
                  background:  'var(--surface-2)',
                  borderColor: 'var(--border)',
                  color:       'var(--text-muted)',
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </SectionBlock>

        {/* Documentation */}
        {documentation && documentation.length > 0 && (
          <SectionBlock label="Documentation">
            <div className="space-y-2">
              {documentation.map((doc, i) => (
                <a
                  key={i}
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  style={{ background: 'var(--bg-alt)', borderColor: 'var(--border)' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--accent)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)'
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(29,78,216,0.1)' }}
                  >
                    <FaDownload className="text-xs" style={{ color: 'var(--accent)' }} />
                  </div>
                  <span className="text-sm font-medium flex-1" style={{ color: 'var(--text)' }}>{doc.title}</span>
                  <FaExternalLinkAlt className="text-[10px] opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--accent)' }} />
                </a>
              ))}
            </div>
          </SectionBlock>
        )}

        {/* Screenshots */}
        {screenshots && screenshots.length > 0 && (
          <SectionBlock label="Project Screenshots">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {screenshots.map((s, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden border"
                  style={{ borderColor: 'var(--border)', background: 'var(--surface-2)' }}
                >
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4 border-t" style={{ borderColor: 'var(--border)' }}>
                    <h3 className="text-sm font-semibold mb-1" style={{ color: 'var(--text)' }}>{s.title}</h3>
                    {s.description && (
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{s.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </SectionBlock>
        )}
      </motion.div>
    </div>
  )
}
