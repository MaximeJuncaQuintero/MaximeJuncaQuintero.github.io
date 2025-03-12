import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import References from './components/References'
import Media from './components/Media'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certifications />
      <References />
      <Media />
      <Contact />
    </main>
  )
} 