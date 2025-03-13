'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaFilePdf } from 'react-icons/fa'

interface Reference {
  name: string
  title: string
  date: string
  file: string
}

export default function References() {
  const references: Reference[] = [
    {
      name: "Dupré DCU",
      title: "Letter of Reference",
      date: "2024",
      file: "/assets/docs/LoR-Dupre-DCU.pdf"
    },
    {
      name: "Richa Amazon",
      title: "Letter of Reference",
      date: "2024",
      file: "/assets/docs/LoR-Richa-Amazon.pdf"
    }
  ]

  if (references.length === 0) return null;
  
  return (
    <section id="references" className="py-12 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-6"
      >
        <h2 className="section-title mb-8 sm:mb-12">References</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {references.map((reference, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="reference-card p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{reference.name}</h3>
              <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">{reference.title} • {reference.date}</p>
              <a
                href={reference.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300 text-sm sm:text-base"
              >
                <FaFilePdf className="text-base sm:text-lg" />
                <span>View Reference Letter</span>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 