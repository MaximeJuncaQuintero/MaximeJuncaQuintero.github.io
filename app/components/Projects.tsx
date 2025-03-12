import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface Project {
  title: string
  description: string
  image: string
  link: string
  tech: string[]
}

const projects: Project[] = [
  {
    title: "Amazon EU ATS KPI Library",
    description: "Developed an automated solution for Amazon Transportation Services that synchronizes local database metrics with PerfectMile Excel KPI files, providing real-time visibility of EU ATS metrics, their categories, and refresh statuses.",
    image: "/assets/projects/amazon-kpi.jpg",
    link: "https://maximejuncaquintero.github.io/projects/amazon-kpi/index.html",
    tech: ["Excel Macros", "SQL", "PerfectMile"],
  },
  {
    title: "Tenoris Analytics",
    description: "Led the development of a platform to democratize alternative financial data for individual investors across Europe. Built a Kubernetes-based architecture with GraphQL API and back-office tools for data management, enabling flexible and efficient data access.",
    image: "/assets/projects/tenoris-analytics.jpg",
    link: "https://maximejuncaquintero.github.io/projects/tenoris-analytics/index.html",
    tech: ["Kubernetes", "GraphQL", "Data Architecture", "Security Management"],
  },
  {
    title: "Innovation Report",
    description: "Conducted research analyzing how patents contribute to market valuation of innovative companies. Leveraged comprehensive datasets to examine the relationship between patent activity and market capitalization across R&D-intensive sectors.",
    image: "/assets/projects/innovation-report.jpg",
    link: "https://maximejuncaquintero.github.io/projects/innovation-report/index.html",
    tech: ["Python", "Pandas", "Data Analysis", "Scikit-Learn", "Visualization"],
  },
  {
    title: "KITS - Appliance Kit Service",
    description: "Developed a web platform offering customized appliance kits for rental properties with a trade-in and refurbishment system. Features a configurator that adapts to space constraints and calculates cost savings versus separate purchases.",
    image: "/assets/projects/kits.jpg",
    link: "https://kits-electromenager.onrender.com",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "HouseDec - Furniture E-commerce",
    description: "Built a minimalist e-commerce platform for furniture sales featuring Stripe payments, order management, and an admin dashboard. Includes image upload and storage, email notifications, and WhatsApp integration.",
    image: "/assets/projects/housedec.jpg",
    link: "#",
    tech: ["Flask", "Python", "Stripe", "AWS S3"],
  },
]

export default function Projects() {
  if (projects.length === 0) return null;

  return (
    <section id="projects" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center section-heading"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="relative h-48 mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-dark-800 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 