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
    title: "Project Management Intern",
    company: "Amazon Transportation Services",
    location: "Luxembourg",
    period: "February 2023 - May 2023",
    description: [
      "Developed an automated solution for EU ATS metrics synchronization with PerfectMile Excel KPI files",
      "Created Excel macros and SQL queries to provide real-time visibility of metrics and refresh statuses",
      "Enhanced metric visibility and monitoring through PerfectMile's features like PerfectMetrics and Metric Audit"
    ],
    type: 'work'
  },
  {
    title: "MSc in Strategy, Consulting, and Organization",
    company: "ESCP Business School",
    location: "Paris, France",
    period: "2025 - 2026",
    description: [
      "Specialized program focusing on strategic management, organizational design, and business consulting methodologies",
      "Emphasis on digital transformation and innovation management in business contexts"
    ],
    type: 'education'
  },
  {
    title: "Bachelor of Business Studies",
    company: "Dublin City University",
    location: "Dublin, Ireland",
    period: "2020 - 2024",
    description: [
      "International Business with a focus on data analytics and business intelligence",
      "Developed strong analytical skills through coursework in statistics, data visualization, and business strategy"
    ],
    type: 'education'
  },
  {
    title: "Co-Founder",
    company: "Tenoris Analytics",
    location: "Paris, France",
    period: "2022 - 2023",
    description: [
      "Led the development of a platform to democratize alternative financial data for individual investors",
      "Built a Kubernetes-based architecture with GraphQL API and back-office tools for data management",
      "Implemented security measures for data integrity and user privacy"
    ],
    type: 'work'
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center section-heading"
        >
          Experience & Education
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-purple-700 pl-8 ml-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12 relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-12 w-6 h-6 rounded-full bg-purple-700 flex items-center justify-center">
                  {exp.type === 'work' ? (
                    <FaBriefcase className="text-xs text-white" />
                  ) : (
                    <FaGraduationCap className="text-xs text-white" />
                  )}
                </div>
                
                <div className="experience-card">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-purple-300">{exp.company} • {exp.location}</p>
                      </div>
                      <span className="text-gray-400 mt-2 md:mt-0">{exp.period}</span>
                    </div>
                    
                    <ul className="list-disc pl-5 text-gray-300 space-y-1">
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