'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen py-10 sm:py-14" style={{ background: 'var(--bg)' }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:-translate-x-0.5 transition-transform"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)'}
            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'}
          >
            <FaArrowLeft className="text-xs" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Content card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border overflow-hidden shadow-sm"
          style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
        >
          {/* Gradient top line */}
          <div
            className="h-1"
            style={{ background: 'linear-gradient(90deg, var(--accent) 0%, var(--secondary) 100%)' }}
          />
          {children}
        </motion.div>
      </div>
    </div>
  )
}
