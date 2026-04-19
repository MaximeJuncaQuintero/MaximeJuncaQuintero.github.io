'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

/** Set to true to show Map of content in the nav and the onboarding toast. */
const SHOW_MAP_OF_CONTENT = false

function LangToggle() {
  const { lang, setLang } = useLanguage()
  return (
    <div className="nav-pill">
      {(['en', 'fr'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`nav-pill-btn ${lang === l ? 'is-active' : ''}`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default function SectionNav() {
  const pathname = usePathname()
  const isProjectPage = pathname?.includes('/projects')
  const isHomePage = pathname === '/'
  const { theme, toggleTheme } = useTheme()
  const { lang } = useLanguage()
  const t = translations[lang].nav
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(min-width: 901px)')
    const sync = () => {
      if (mq.matches) setMobileMenuOpen(false)
    }
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  if (isProjectPage) return null

  const navItems = [
    { id: 'about', label: t.about },
    { id: 'experience', label: t.experience },
    { id: 'projects', label: t.projects },
    { id: 'certifications', label: t.certifications },
    { id: 'references', label: t.references },
    { id: 'media', label: t.media },
    { id: 'contact', label: t.contact },
  ]
  const primaryNav = navItems.slice(0, 3)
  const secondaryNav = navItems.slice(3)

  return (
    <nav className="site-nav">
      <div className="site-nav-inner">
        <a href="#" className="site-logo">
          <span className="site-logo-mark">MJQ</span>
        </a>
        <div className={`site-links-stack ${mobileMenuOpen ? 'is-open' : ''}`}>
          <ul className="site-links">
            {primaryNav.map((item) => (
              <li key={item.id}>
                <a
                  href={isHomePage ? `#${item.id}` : `/#${item.id}`}
                  className="site-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="site-divider" />
          <ul className="site-links">
            {secondaryNav.map((item) => (
              <li key={item.id}>
                <a
                  href={isHomePage ? `#${item.id}` : `/#${item.id}`}
                  className="site-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            {SHOW_MAP_OF_CONTENT && (
              <li className="site-nav-map-item">
                <a
                  href="/map-of-content"
                  id="map-content-nav-btn"
                  className={`site-link ${pathname === '/map-of-content' ? 'site-link-active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.mapOfContent}
                </a>
              </li>
            )}
          </ul>
        </div>
        <div className="site-controls">
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="site-menu-btn"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <LangToggle />
          <button onClick={toggleTheme} className="theme-btn" aria-label="Toggle colour theme">
            {theme === 'dark' ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </div>
    </nav>
  )
}
