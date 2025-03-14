'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-dark-900 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-purple-900 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 -right-20 w-72 h-72 bg-purple-900 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 z-10">
        <div className="text-center">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 sm:mb-8 flex justify-center"
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-purple-500">
              <Image
                src="/assets/docs/processed_ID_pic.jpeg"
                alt="Maxime Junca-Quintero"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600"
          >
            Maxime Junca-Quintero
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl text-purple-400 mb-6 sm:mb-8">
              Project Management & Operations
            </h2>
            
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-12 text-base sm:text-lg px-4 sm:px-0">
              Business professional with expertise in project management and operations.
              Passionate about leveraging data analytics to drive business innovation.
            </p>
            
            <a 
              href="#about" 
              className="button mb-16 sm:mb-20 inline-block"
            >
              Learn More About Me
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-purple-400 transition-colors">
          <span className="mb-2 text-sm sm:text-base">Scroll to Explore</span>
          <FaArrowDown className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
} 