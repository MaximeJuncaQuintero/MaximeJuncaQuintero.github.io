'use client'

import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { usePathname } from 'next/navigation'
import { FaSun, FaMoon, FaTimes, FaProjectDiagram } from 'react-icons/fa'
import Link from 'next/link'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

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
  const [showMapHint, setShowMapHint] = useState(false)
  const [isWideNav, setIsWideNav] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1320px)')
    const sync = () => setIsWideNav(mq.matches)
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

  useEffect(() => {
    if (!isHomePage || typeof window === 'undefined') return
    if (sessionStorage.getItem('map-hint-seen') === '1') return

    const showTimer = window.setTimeout(() => {
      setShowMapHint(true)
      sessionStorage.setItem('map-hint-seen', '1')
      window.setTimeout(() => setShowMapHint(false), 12000)
    }, 500)

    return () => window.clearTimeout(showTimer)
  }, [isHomePage])

  const mapHintPopover =
    showMapHint && (
      <aside className="map-hint-popover portfolio-popover" role="dialog" aria-labelledby="map-hint-title" aria-describedby="map-hint-desc">
        <button
          type="button"
          className="map-hint-dismiss portfolio-popover-dismiss"
          aria-label={t.mapHint.dismiss}
          onClick={() => setShowMapHint(false)}
        >
          <FaTimes />
        </button>
        <span className="map-hint-kicker">{t.mapHint.kicker}</span>
        <p id="map-hint-title" className="map-hint-title">
          <FaProjectDiagram className="map-hint-title-icon" aria-hidden />
          {t.mapHint.title}
        </p>
        <p id="map-hint-desc" className="map-hint-body">
          {t.mapHint.body}
        </p>
        <Link href="/map-of-content" className="map-hint-cta portfolio-popover-cta" onClick={() => setShowMapHint(false)}>
          {t.mapHint.cta}
        </Link>
      </aside>
    )

  return (
    <nav className="site-nav">
      <div className="site-nav-inner">
        <a href="#" className="site-logo">
          <span className="site-logo-mark">MJQ</span>
        </a>
        <div className="site-links-stack">
          <ul className="site-links">
            {primaryNav.map((item) => (
              <li key={item.id}>
                <a href={isHomePage ? `#${item.id}` : `/#${item.id}`} className="site-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="site-divider" />
          <ul className="site-links">
            {secondaryNav.map((item) => (
              <li key={item.id}>
                <a href={isHomePage ? `#${item.id}` : `/#${item.id}`} className="site-link">
                  {item.label}
                </a>
              </li>
            ))}
            <li className="site-nav-map-item">
              <Link href="/map-of-content" id="map-content-nav-btn" className={`site-link ${pathname === '/map-of-content' ? 'site-link-active' : ''}`}>
                {t.mapOfContent}
              </Link>
              {isWideNav && mapHintPopover}
            </li>
          </ul>
        </div>
        <div className="site-controls">
          <LangToggle />
          <button onClick={toggleTheme} className="theme-btn" aria-label="Toggle colour theme">
            {theme === 'dark' ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </div>
      {!isWideNav && typeof document !== 'undefined' && mapHintPopover ? createPortal(mapHintPopover, document.body) : null}
    </nav>
  )
}
