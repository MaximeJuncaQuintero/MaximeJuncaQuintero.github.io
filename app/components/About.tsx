'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaFilePdf } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-6"
      >
        <h2 className="section-title mb-8 sm:mb-12">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-dark-800 p-4 sm:p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Maxime Junca-Quintero</h3>
            <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              Hello! I'm Maxime Junca-Quintero, a project manager based in France, with a keen focus on innovation and strategic data analysis.
            </p>
            <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              My background in business analytics from Dublin City University, where I honed my skills in Python, SQL, and Machine Learning, complements my hands-on experience in managing key projects and leading strategic initiatives.
            </p>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              My professional journey is underscored by a deep commitment to using advanced analytics and strategic insights to drive business decisions and innovation. With skills in project management, data analytics, operations management and strategic problem-solving, I am dedicated to transforming complex data into actionable insights.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Education</h4>
                <div className="mb-3 sm:mb-4">
                  <p className="font-medium text-sm sm:text-base">MSc in Strategy, Consulting, and Organization</p>
                  <p className="text-gray-400 text-xs sm:text-sm">ESCP Business School, 2025-2026</p>
                </div>
                <div>
                  <p className="font-medium text-sm sm:text-base">BBA</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Neoma BS - Dublin City University, 2020-2024</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {['Project Management', 'Operations', 'Data Analysis', 'SQL', 'Python', 'Strategic Planning', 'Problem Solving'].map((skill, index) => (
                    <span key={index} className="px-2 sm:px-3 py-1 bg-purple-700 bg-opacity-20 text-purple-400 rounded-full text-xs sm:text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <a
                href="/assets/docs/CV Maxime Junca ANG24 v4.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="button inline-flex items-center gap-2 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
              >
                <FaFilePdf className="text-base sm:text-lg" />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
} 