'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface Project {
  title: string
  description: string
  image: string
  link: string
  tech: string[]
  logoStyle?: string // Optional style for logo images
}

const projects: Project[] = [
  {
    title: "Amazon EU ATS KPI Library",
    description: "A project focused on enhancing internal reporting tools and consolidating metrics visibility for Amazon Transportation Services. Utilized Excel macros and SQL queries.",
    image: "/assets/projects/amazon-kpi.jpg",
    link: "/projects/amazon-kpi",
    tech: ["Excel Macros", "SQL", "PerfectMile"],
    logoStyle: "object-contain bg-white p-4" // Amazon logo needs white background and contain fit
  },
  {
    title: "Tenoris Analytics",
    description: "Led the development of an MVP platform to democratize alternative financial data for individual investors across Europe. Built a web scraping infrastructure to collect financial data, with a Kubernetes-based architecture and GraphQL API for efficient data access and analysis.",
    image: "/assets/projects/tenoris-analytics.jpg",
    link: "/projects/tenoris-analytics",
    tech: ["Web Scraping", "Kubernetes", "GraphQL", "Data Architecture"],
    logoStyle: "object-contain bg-white p-4 scale-150" // Zoomed in logo
  },
  {
    title: "Innovation Report",
    description: "Conducted research analyzing how patents contribute to market valuation of innovative companies. Leveraged comprehensive datasets to examine the relationship between patent activity and market capitalization across R&D-intensive sectors.",
    image: "/assets/projects/innovation-report.jpg",
    link: "/projects/innovation-report",
    tech: ["Python", "Pandas", "Data Analysis", "Scikit-Learn", "Visualization"],
    logoStyle: "object-contain bg-white p-4" // DCU logo needs white background and contain fit
  },
  {
    title: "Flowmap",
    description: "Developing an innovative SaaS platform that fully automates project progress tracking through AI-powered code analysis. The system integrates with GitHub repositories to provide real-time insights into feature development progress without requiring manual updates from development teams.",
    image: "/assets/projects/flowmap.png",
    link: "/projects/flowmap",
    tech: ["AI/ML", "GitHub Integration", "SaaS Architecture", "Automated Reporting"],
    logoStyle: "object-contain bg-white p-4 scale-150" // Flowmap logo needs white background and contain fit
  },
  {
    title: "KITS - Appliance Kit Service",
    description: "Developed an MVP for a home appliance service that helps buyers find appliances with complex dimensions, access financing, and benefit from a buyback system. The platform enables custom kit configuration, cost estimation, and consolidated delivery to save money.",
    image: "/assets/projects/kits-full.jpg",
    link: "/projects/kits",
    tech: ["Flask", "Python", "SQLAlchemy", "Jinja2"],
    logoStyle: "object-contain" // Use object-contain to prevent cropping
  },
  {
    title: "HouseDec - Furniture E-commerce",
    description: "Built a minimalist e-commerce platform for furniture sales featuring Stripe payments, order management, and an admin dashboard. Includes image upload and storage, email notifications, and WhatsApp integration.",
    image: "/assets/projects/housedec.jpg",
    link: "/projects/housedec",
    tech: ["Flask", "Python", "SQLAlchemy", "Stripe", "AWS S3"],
  },
]

export default function Projects() {
  if (projects.length === 0) return null;

  return (
    <section id="projects" className="py-12 sm:py-20 bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card"
            >
              <Link href={project.link}>
                <div className="relative h-40 sm:h-48 mb-3 sm:mb-4 overflow-hidden rounded-t-lg bg-white">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`rounded-t-lg ${project.logoStyle || 'object-cover'}`}
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-dark-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 