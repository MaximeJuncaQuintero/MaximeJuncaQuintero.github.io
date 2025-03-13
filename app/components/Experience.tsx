'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type: 'work' | 'education';
}

const experiences: ExperienceItem[] = [
  {
    title: "Operations Manager",
    company: "Amazon Hub",
    location: "Paris, France",
    period: "June – Oct 2024",
    description: [
      "Oversaw Lockers fleet maintenance",
      "Optimized supplier coordination",
      "Gained in-depth operational knowledge"
    ],
    type: 'work'
  },
  {
    title: "Project Manager - Intern",
    company: "Amazon Transportation Services (ATS)",
    location: "London, UK",
    period: "Jan – Jun 2023",
    description: [
      "Enhanced metric visibility with a consolidated reporting solution",
      "In charge of change management regarding our internal reporting tool",
      "Developed SQL skills through \"Data at Amazon\" training"
    ],
    type: 'work'
  },
  {
    title: "Founder",
    company: "Tenoris Analytics",
    location: "Toulouse, France",
    period: "Nov 2021 – Jan 2023",
    description: [
      "Led strategy and team management for alternative financial data project",
      "Monitored technical progress",
      "Developed solutions to production and financial challenges"
    ],
    type: 'work'
  },
  {
    title: "BBA – Specialization in Business Analytics",
    company: "Dublin City University",
    location: "Dublin, Ireland",
    period: "Sep 2022 – May 2024",
    description: [
      "Acquired skills in Python, SQL, Power BI",
      "Conducted thesis on patent contributions to market valuation using regression models"
    ],
    type: 'education'
  },
  {
    title: "BBA – CESEM",
    company: "NEOMA Business School",
    location: "Reims, France",
    period: "Sep 2019 – Jul 2021",
    description: [
      "Quantitative Methods (15/20)",
      "Financial Analysis (18.3/20)",
      "Management Accounting (18.2/20)"
    ],
    type: 'education'
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-20 bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          Experience & Education
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-purple-700 pl-4 sm:pl-8 ml-2 sm:ml-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-8 sm:mb-12 relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[11px] sm:-left-12 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-purple-700 flex items-center justify-center">
                  {exp.type === 'work' ? (
                    <FaBriefcase className="text-[10px] sm:text-xs text-white" />
                  ) : (
                    <FaGraduationCap className="text-[10px] sm:text-xs text-white" />
                  )}
                </div>
                
                <div className="experience-card">
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 sm:mb-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold">{exp.title}</h3>
                        <p className="text-purple-400 text-sm sm:text-base">{exp.company} • {exp.location}</p>
                      </div>
                      <span className="text-gray-400 text-sm sm:text-base mt-1 md:mt-0">{exp.period}</span>
                    </div>
                    
                    <ul className="list-disc pl-4 sm:pl-5 text-gray-300 space-y-1 text-sm sm:text-base">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 