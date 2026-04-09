'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaArrowDown, FaChevronRight, FaGithub, FaLinkedin, FaEnvelope, FaBriefcase, FaGlobeEurope } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

export default function Hero() {
  const { lang } = useLanguage()
  const t = translations[lang].hero
  const { scrollYProgress } = useScroll()
  const metricY = useTransform(scrollYProgress, [0, 0.3], [0, -18])
  const metricOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.82])

  return (
    <section className="hero-shell">
      <div className="hero-grid">
        <div className="hero-text">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="hero-kicker"
          >
            {t.label}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="hero-title"
          >
            Maxime Junca-Quintero
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="hero-subtitle"
          >
            {t.typewriter}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-bio"
          >
            {t.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="hero-actions"
          >
            <a href="#about" className="button">
              {t.cta1}
              <FaChevronRight className="text-[10px]" />
            </a>
            <a href="#projects" className="button-outline">{t.cta2}</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hero-links"
          >
            <a href="mailto:maximequintero@gmail.com" aria-label="Email"><FaEnvelope /></a>
            <a href="https://www.linkedin.com/in/maxime-junca-quintero/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://github.com/MaximeJuncaQuintero" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="hero-metrics hero-metrics-panel"
          style={{ y: metricY, opacity: metricOpacity }}
        >
          <p className="hero-metrics-title">Metrics</p>
          <div className="hero-metric">
            <p className="hero-metric-kicker"><FaBriefcase />Experience</p>
            <p className="hero-metric-value">3+</p>
            <p className="hero-metric-label">{t.statLabels[0]}</p>
          </div>
          <div className="hero-metric">
            <p className="hero-metric-kicker"><FaGlobeEurope />International</p>
            <p className="hero-metric-value">3</p>
            <p className="hero-metric-label">{t.statLabels[1]}</p>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="hero-scroll">
        <span>{t.scroll}</span>
        <FaArrowDown />
      </a>
    </section>
  )
}
