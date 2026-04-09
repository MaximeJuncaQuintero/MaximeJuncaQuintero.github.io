'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaFilePdf, FaMapMarkerAlt } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

const socialLinks = [
  {
    Icon:     FaEnvelope,
    label:    'Email',
    value:    'maximequintero@gmail.com',
    href:     'mailto:maximequintero@gmail.com',
    external: false,
    accent:   'var(--accent)',
    bg:       'rgba(29,78,216,0.08)',
    border:   'rgba(29,78,216,0.15)',
  },
  {
    Icon:     FaLinkedin,
    label:    'LinkedIn',
    value:    'maxime-junca-quintero',
    href:     'https://www.linkedin.com/in/maxime-junca-quintero/',
    external: true,
    accent:   'var(--accent)',
    bg:       'rgba(29,78,216,0.08)',
    border:   'rgba(29,78,216,0.15)',
  },
  {
    Icon:     FaGithub,
    label:    'GitHub',
    value:    'MaximeJuncaQuintero',
    href:     'https://github.com/MaximeJuncaQuintero',
    external: true,
    accent:   'var(--secondary)',
    bg:       'rgba(99,102,241,0.08)',
    border:   'rgba(99,102,241,0.15)',
  },
]

function ContactCard({
  Icon, label, value, href, external, accent, bg, border, delay,
}: typeof socialLinks[0] & { delay: number }) {
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, x: 12 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
      className="group flex items-center gap-4 px-4 py-3.5 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
      style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = accent
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)'
      }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
        style={{ background: bg, border: `1px solid ${border}` }}
      >
        <Icon className="text-sm" style={{ color: accent }} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
          {label}
        </p>
        <p className="text-sm font-medium truncate mt-0.5" style={{ color: 'var(--text)' }}>
          {value}
        </p>
      </div>
    </motion.a>
  )
}

export default function Contact() {
  const { lang } = useLanguage()
  const t        = translations[lang].contact

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden" style={{ background: 'var(--bg-alt)' }}>
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(59,130,246,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* ── Left: intro ───────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="section-label">{t.label}</span>
              <h2 className="section-title mb-6">{t.heading}</h2>

              <p
                className="text-base sm:text-lg leading-relaxed mb-8"
                style={{ color: 'var(--text-muted)' }}
              >
                {t.bio}
              </p>

              {/* Location + professional reachability */}
              <div className="flex flex-col gap-3 mb-8">
                <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                  <FaMapMarkerAlt className="text-xs shrink-0" style={{ color: 'var(--accent)' }} />
                  <span>{t.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                  <span
                    className="inline-block w-2 h-2 rounded-full shrink-0"
                    style={{ background: '#22C55E' }}
                  />
                  <span>{t.statusNote}</span>
                </div>
              </div>

              {/* CV icon */}
              <a
                href="/assets/docs/CV Maxime Junca ANG24 v4.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cv-download-btn"
                aria-label={t.cv.label}
                title={t.cv.label}
              >
                <FaFilePdf className="text-base shrink-0" />
                <span>{t.cv.label}</span>
              </a>
            </motion.div>

            {/* ── Right: contact links ──────────────────────── */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-2xl border overflow-hidden"
                style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
              >
                {/* Card header */}
                <div
                  className="h-[3px]"
                  style={{ background: 'linear-gradient(90deg, var(--accent), var(--secondary))' }}
                />
                <div
                  className="px-6 py-4 border-b"
                  style={{ borderColor: 'var(--border)', background: 'var(--surface-2)' }}
                >
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                    {t.channels}
                  </p>
                </div>
                <div className="p-5 space-y-3">
                  {socialLinks.map((link, i) => (
                    <ContactCard key={link.label} {...link} delay={0.1 + i * 0.08} />
                  ))}
                </div>
              </motion.div>

              {/* Quick note */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-4 text-center text-xs"
                style={{ color: 'var(--text-muted)' }}
              >
                {t.response}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
