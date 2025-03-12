import React from 'react'
import { motion } from 'framer-motion'
import { FaFilePdf } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="section-title mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <img
                src="/assets/media/cv-preview.jpg"
                alt="Maxime Junca"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Maxime Junca</h3>
            <p className="text-gray-300 mb-6">
              Data analyst with a strong background in business intelligence and analytics. 
              Experienced in transforming complex data into actionable insights that drive 
              business decisions. Skilled in SQL, Python, and data visualization tools.
            </p>
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-3">Education</h4>
              <div className="mb-4">
                <p className="font-medium">MSc in Business Analytics</p>
                <p className="text-gray-400">Dublin City University, 2023-2024</p>
              </div>
              <div>
                <p className="font-medium">Bachelor's in Business Administration</p>
                <p className="text-gray-400">ESSCA School of Management, 2019-2023</p>
              </div>
            </div>
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-3">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {['SQL', 'Python', 'Data Analysis', 'Power BI', 'Excel', 'Business Intelligence', 'Data Visualization'].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-primary bg-opacity-20 text-primary rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <a
              href="/assets/docs/CV Maxime Junca ANG24 v2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-secondary text-white rounded-lg transition-colors duration-300"
            >
              <FaFilePdf className="text-lg" />
              <span>Download CV</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
} 