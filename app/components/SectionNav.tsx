'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

interface NavItem {
  id: string
  label: string
}

export default function SectionNav() {
  const [activeSection, setActiveSection] = useState<string>('')
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const pathname = usePathname()
  
  // Check if this is a project page
  const isProjectPage = pathname?.includes('/projects')

  const navItems: NavItem[] = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'references', label: 'References' },
    { id: 'media', label: 'Media' },
    { id: 'contact', label: 'Contact' }
  ]

  useEffect(() => {
    // Don't add event listeners if on a project page
    if (isProjectPage) return;
    
    // Function to check which section is currently in view
    const handleScroll = () => {
      // Show nav after scrolling past hero section (adjust threshold as needed)
      if (window.scrollY > window.innerHeight * 0.7) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Determine which section is currently in view
      const sections = navItems.map(item => document.getElementById(item.id))
      
      // Find the section that's currently most visible in the viewport
      let currentSection = ''
      let maxVisibility = 0

      sections.forEach(section => {
        if (!section) return
        
        const rect = section.getBoundingClientRect()
        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
        const visibilityRatio = visibleHeight / section.offsetHeight
        
        if (visibilityRatio > maxVisibility) {
          maxVisibility = visibilityRatio
          currentSection = section.id
        }
      })

      setActiveSection(currentSection)
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)
    
    // Initial check
    handleScroll()
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems, isProjectPage])

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // If this is a project page, don't render the navigation bar
  if (isProjectPage) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-dark-900 bg-opacity-80 backdrop-blur-sm py-2 px-4 shadow-md"
        >
          <div className="container mx-auto flex justify-center">
            <ul className="flex space-x-1 sm:space-x-3 overflow-x-auto no-scrollbar">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm rounded-full transition-colors whitespace-nowrap
                      ${activeSection === item.id 
                        ? 'text-white bg-purple-600 bg-opacity-50' 
                        : 'text-gray-400 hover:text-white hover:bg-dark-800'}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
} 