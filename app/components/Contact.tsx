import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center section-heading"
        >
          Get in Touch
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <p className="text-gray-300 text-lg mb-8">
            I'm open to new opportunities and collaborations in strategy, business analytics, and digital transformation. Feel free to reach out!
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
            <a 
              href="mailto:maximequintero@gmail.com" 
              className="contact-button"
            >
              <FaEnvelope className="text-xl" />
              <span>Email Me</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/maxime-junca-quintero/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-button"
            >
              <FaLinkedin className="text-xl" />
              <span>LinkedIn</span>
            </a>
            
            <a 
              href="https://github.com/MaximeJuncaQuintero" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-button"
            >
              <FaGithub className="text-xl" />
              <span>GitHub</span>
            </a>
          </div>
          
          <div className="flex items-center justify-center text-gray-300">
            <FaMapMarkerAlt className="mr-2" />
            <p>Based in Paris, France • Available for opportunities in Strategy & Digital Transformation</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <a 
            href="/assets/docs/CV Maxime Junca ANG24 v2.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-purple-700 hover:bg-purple-600 text-white rounded-full transition-colors duration-300"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  )
} 