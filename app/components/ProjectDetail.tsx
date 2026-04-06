'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaDownload, FaExternalLinkAlt, FaUser, FaCalendarAlt, FaClock } from 'react-icons/fa'
import { useLanguage } from '@/app/context/LanguageContext'
import { translations } from '@/app/translations'

interface ProjectDetailProps {
  title:              string
  image:              string
  logoStyle?:         string
  customThumbnail?:   React.ReactNode
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
        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
        <h2 className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
          {label}
        </h2>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  )
}

function SideCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border overflow-hidden" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
      <div
        className="px-4 py-2.5 border-b"
        style={{ background: 'var(--surface-2)', borderColor: 'var(--border)' }}
      >
        <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{label}</p>
      </div>
      <div className="p-4">{children}</div>
    </div>
  )
}

export default function ProjectDetail({
  title,
  image,
  logoStyle,
  customThumbnail,
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
  const { lang } = useLanguage()
  const t = translations[lang].projectDetail

  const meta = [
    poc              && { icon: FaUser,        label: t.pointOfContact,  value: poc              },
    meetingFrequency && { icon: FaCalendarAlt, label: t.meetingFrequency, value: meetingFrequency },
    projectLength    && { icon: FaClock,       label: t.projectLength,    value: projectLength    },
  ].filter(Boolean) as { icon: React.ElementType; label: string; value: string }[]

  return (
    <div className="space-y-0">

      {/* Hero image — full bleed when a custom thumbnail is provided */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={
          customThumbnail
            ? 'relative w-full overflow-hidden'
            : 'relative h-52 sm:h-64 md:h-72 w-full rounded-2xl overflow-hidden border'
        }
        style={
          customThumbnail
            ? { aspectRatio: '1200/500' }
            : { borderColor: 'var(--border)', background: 'var(--surface-2)' }
        }
      >
        {customThumbnail ? (
          <div className="absolute inset-0">{customThumbnail}</div>
        ) : image.endsWith('.svg') ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
            style={{ background: 'white' }}
          />
        ) : (
          <>
            <Image
              src={image}
              alt={title}
              fill
              className={logoStyle ?? 'object-cover'}
              priority
            />
            {!logoStyle && (
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 55%)' }}
              />
            )}
          </>
        )}
      </motion.div>

      {/* Content — padded below the hero */}
      <div className="p-4 sm:p-6 md:p-8 space-y-6">

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

      {/* ── Two-column layout (lg+) ─────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        {/* Left: main narrative content */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-2 space-y-4"
        >
          <SectionBlock label={t.context}>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>{context}</p>
          </SectionBlock>

          <SectionBlock label={t.objective}>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>{objective}</p>
          </SectionBlock>

          <SectionBlock label={t.implementation}>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>{implementation}</p>
          </SectionBlock>

          <SectionBlock label={t.method}>
            <p className="text-sm sm:text-base leading-relaxed whitespace-pre-line" style={{ color: 'var(--text-muted)' }}>{method}</p>
          </SectionBlock>

          {result && (
            <SectionBlock label={t.result}>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>{result}</p>
            </SectionBlock>
          )}
        </motion.div>

        {/* Right: sticky sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4 lg:sticky lg:top-20 lg:self-start"
        >
          {/* Meta */}
          {meta.length > 0 && (
            <SideCard label={t.projectInfo}>
              <div className="space-y-3">
                {meta.map(({ icon: Icon, label, value }, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: 'rgba(29,78,216,0.1)' }}
                    >
                      <Icon className="text-[10px]" style={{ color: 'var(--accent)' }} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{label}</p>
                      <p className="text-sm font-semibold mt-0.5" style={{ color: 'var(--text)' }}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SideCard>
          )}

          {/* Tools */}
          <SideCard label={t.tools}>
            <div className="flex flex-wrap gap-1.5">
              {tools.map((tool, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs font-medium rounded-lg border"
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
          </SideCard>

          {/* Documentation */}
          {documentation && documentation.length > 0 && (
            <SideCard label={t.documentation}>
              <div className="space-y-2">
                {documentation.map((doc, i) => (
                  <a
                    key={i}
                    href={doc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                    style={{ background: 'var(--bg-alt)', borderColor: 'var(--border)' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--accent)'
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)'
                    }}
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(29,78,216,0.1)' }}
                    >
                      <FaDownload className="text-[10px]" style={{ color: 'var(--accent)' }} />
                    </div>
                    <span className="text-xs font-medium flex-1" style={{ color: 'var(--text)' }}>{doc.title}</span>
                    <FaExternalLinkAlt
                      className="text-[9px] opacity-40 group-hover:opacity-100 transition-opacity"
                      style={{ color: 'var(--accent)' }}
                    />
                  </a>
                ))}
              </div>
            </SideCard>
          )}
        </motion.div>
      </div>

      {/* Screenshots — full width below both columns */}
      {screenshots && screenshots.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div
            className="rounded-2xl border overflow-hidden"
            style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
          >
            <div
              className="px-5 py-3 border-b flex items-center gap-2"
              style={{ background: 'var(--surface-2)', borderColor: 'var(--border)' }}
            >
              <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
              <h2 className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                {t.screenshots}
              </h2>
            </div>
            <div className="p-5 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
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
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-3 border-t" style={{ borderColor: 'var(--border)' }}>
                      <h3 className="text-xs font-semibold mb-0.5" style={{ color: 'var(--text)' }}>{s.title}</h3>
                      {s.description && (
                        <p className="text-[11px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>{s.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      </div>{/* end padded content wrapper */}
    </div>
  )
}
