'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

/* ─── Scroll progress bar ───────────────────────────────── */
function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
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
          width:      `${progress}%`,
          background: 'linear-gradient(90deg, var(--accent), var(--secondary))',
          transition: 'width 0.05s linear',
        }}
      />
    </div>
  )
}

/* ─── Language toggle pill ──────────────────────────────── */
function LangToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <div
      className="flex items-center rounded-lg border overflow-hidden shrink-0"
      style={{ borderColor: 'var(--border)', background: 'var(--surface-2)' }}
    >
      {(['en', 'fr'] as const).map((l, i) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider transition-all duration-200 relative"
          style={{
            color:      lang === l ? '#fff'             : 'var(--text-muted)',
            background: lang === l ? 'var(--accent)'   : 'transparent',
            borderRight: i === 0 ? '1px solid var(--border)' : 'none',
          }}
        >
          {l === 'en' ? 'EN' : 'FR'}
        </button>
      ))}
    </div>
  )
}

/* ─── Main nav ──────────────────────────────────────────── */
export default function SectionNav() {
  const [activeSection, setActiveSection] = useState<string>('')
  const [scrolled, setScrolled]           = useState<boolean>(false)
  const pathname                          = usePathname()
  const { theme, toggleTheme }            = useTheme()
  const { lang }                          = useLanguage()

  const t = translations[lang].nav

  const navItems = [
    { id: 'about',          label: t.about          },
    { id: 'experience',     label: t.experience     },
    { id: 'projects',       label: t.projects       },
    { id: 'certifications', label: t.certifications },
    { id: 'references',     label: t.references     },
    { id: 'media',          label: t.media          },
    { id: 'contact',        label: t.contact        },
  ]

  const isProjectPage = pathname?.includes('/projects')

  useEffect(() => {
    if (isProjectPage) return

    const handleScroll = () => {
      setScrolled(window.scrollY > 8)

      let currentSection = ''
      let maxVisibility  = 0

      navItems.forEach(item => {
        const section = document.getElementById(item.id)
        if (!section) return
        const rect    = section.getBoundingClientRect()
        const visible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
        const ratio   = visible / section.offsetHeight
        if (ratio > maxVisibility) { maxVisibility = ratio; currentSection = item.id }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isProjectPage, lang])

  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const navBg = theme === 'dark'
    ? 'rgba(7, 17, 31, 0.92)'
    : 'rgba(248, 250, 252, 0.92)'

  return (
    <>
      <ScrollProgressBar />

      <AnimatePresence>
        {!isProjectPage && scrolled && (
          <motion.nav
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            className="fixed top-[3px] left-0 right-0 z-50 border-b"
            style={{
              background:           navBg,
              backdropFilter:       'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderColor:          'var(--border)',
            }}
          >
            <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between py-2 gap-3">

              {/* Language toggle (replaces MJQ logo) */}
              <LangToggle />

              {/* Desktop links */}
              <ul className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
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

              {/* Mobile links + theme toggle */}
              <div className="flex items-center gap-2">
                <ul className="flex md:hidden items-center gap-0.5 overflow-x-auto no-scrollbar max-w-[180px] sm:max-w-xs">
                  {navItems.map(item => (
                    <li key={item.id} className="shrink-0">
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="px-2 py-1 text-xs rounded-md transition-colors whitespace-nowrap"
                        style={{
                          color:      activeSection === item.id ? 'var(--accent)'    : 'var(--text-muted)',
                          background: activeSection === item.id ? 'var(--surface-2)' : 'transparent',
                          fontWeight: activeSection === item.id ? '600'              : '400',
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
                  className="p-2 rounded-lg transition-all duration-200 shrink-0"
                  style={{
                    background: 'var(--surface-2)',
                    border:     '1px solid var(--border)',
                  }}
                  aria-label="Toggle colour theme"
                >
                  {theme === 'dark'
                    ? <FaSun  className="text-xs" style={{ color: 'var(--secondary)' }} />
                    : <FaMoon className="text-xs" style={{ color: 'var(--accent)'    }} />
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
