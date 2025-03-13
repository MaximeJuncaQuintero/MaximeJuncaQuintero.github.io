'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaFilePdf, FaCertificate } from 'react-icons/fa'

interface Certification {
  title: string
  issuer: string
  date: string
  link: string
}

export default function Certifications() {
  const certifications: Certification[] = [
    {
      title: "Understanding SQL Databases",
      issuer: "DataCamp",
      date: "2023",
      link: "/assets/docs/Maxime_Junca_Quintero_Understanding_SQL_Databases_Certificate.pdf"
    },
    {
      title: "Python Fundamentals",
      issuer: "DataCamp",
      date: "2023",
      link: "/assets/docs/Maxime Junca Quintero Python Fundamentals Certificate.pdf"
    },
    {
      title: "Functions, Conditionality and Loops",
      issuer: "DataCamp",
      date: "2023",
      link: "/assets/docs/Maxime Junca Quintero Functions, Conditionality and Loops Certificate.pdf"
    },
    {
      title: "Storing, Transforming and Visualizing Data",
      issuer: "DataCamp",
      date: "2023",
      link: "/assets/docs/Maxime Junca Quintero Storing, Transforming and Visualizing Data Certificate.pdf"
    }
  ];

  if (certifications.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="py-12 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-6"
      >
        <h2 className="section-title mb-8 sm:mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="certification-card p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <FaCertificate className="text-2xl sm:text-3xl text-purple-400 mr-2 sm:mr-3" />
                <h3 className="text-lg sm:text-xl font-bold">{cert.title}</h3>
              </div>
              <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">{cert.issuer} • {cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300 text-sm sm:text-base"
              >
                <FaFilePdf className="text-base sm:text-lg" />
                <span>View Certificate</span>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 