'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

interface NavItem {
  id: string
  label: string
}

const navItems: NavItem[] = [
  { id: 'about',          label: 'About'          },
  { id: 'experience',     label: 'Experience'     },
  { id: 'projects',       label: 'Projects'       },
  { id: 'certifications', label: 'Certifications' },
  { id: 'references',     label: 'References'     },
  { id: 'media',          label: 'Media'          },
  { id: 'contact',        label: 'Contact'        },
]

/* ─── Scroll progress bar (separate component) ─────────── */
function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop   = window.scrollY
      const docHeight   = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[70] h-[3px]" style={{ background: 'var(--border)' }}>
      <div
        className="h-full"
        style={{
          width: `${progress}%`,
          background: `linear-gradient(90deg, var(--accent), var(--secondary))`,
          transition: 'width 0.05s linear',
        }}
      />
    </div>
  )
}

/* ─── Main nav ──────────────────────────────────────────── */
export default function SectionNav() {
  const [activeSection, setActiveSection] = useState<string>('')
  const [scrolled, setScrolled]           = useState<boolean>(false)
  const pathname                          = usePathname()
  const { theme, toggleTheme }            = useTheme()

  const isProjectPage = pathname?.includes('/projects')

  useEffect(() => {
    if (isProjectPage) return

    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.5)

      const sections = navItems.map(item => document.getElementById(item.id))
      let currentSection = ''
      let maxVisibility  = 0

      sections.forEach(section => {
        if (!section) return
        const rect    = section.getBoundingClientRect()
        const visible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
        const ratio   = visible / section.offsetHeight
        if (ratio > maxVisibility) { maxVisibility = ratio; currentSection = section.id }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isProjectPage])

  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const navBg = theme === 'dark'
    ? 'rgba(7, 17, 31, 0.9)'
    : 'rgba(248, 250, 252, 0.9)'

  return (
    <>
      {/* Always-visible scroll progress bar */}
      <ScrollProgressBar />

      {/* Section nav — appears after hero */}
      <AnimatePresence>
        {!isProjectPage && scrolled && (
          <motion.nav
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            className="fixed top-[3px] left-0 right-0 z-50 border-b"
            style={{
              background: navBg,
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderColor: 'var(--border)',
            }}
          >
            <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between py-2">

              {/* Logo */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-sm font-bold tracking-tight shrink-0 transition-colors duration-200"
                style={{ color: 'var(--text)' }}
              >
                MJQ
              </button>

              {/* Desktop links */}
              <ul className="hidden md:flex items-center gap-0.5">
                {navItems.map(item => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Mobile scrollable links + toggle */}
              <div className="flex items-center gap-2">
                <ul className="flex md:hidden items-center gap-0.5 overflow-x-auto no-scrollbar max-w-[220px] sm:max-w-xs">
                  {navItems.map(item => (
                    <li key={item.id} className="shrink-0">
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="px-2 py-1 text-xs rounded-md transition-colors whitespace-nowrap"
                        style={{
                          color:      activeSection === item.id ? 'var(--accent)'     : 'var(--text-muted)',
                          background: activeSection === item.id ? 'var(--surface-2)'  : 'transparent',
                          fontWeight: activeSection === item.id ? '600'               : '400',
                        }}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Theme toggle */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg transition-all duration-200 shrink-0 ml-1"
                  style={{
                    background:  'var(--surface-2)',
                    border:      '1px solid var(--border)',
                    color:       'var(--text-muted)',
                  }}
                  aria-label="Toggle colour theme"
                >
                  {theme === 'dark'
                    ? <FaSun  className="text-xs" style={{ color: 'var(--secondary)' }} />
                    : <FaMoon className="text-xs" style={{ color: 'var(--accent)' }} />
                  }
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
