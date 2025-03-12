import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-dark-900 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-purple-900 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 -right-20 w-72 h-72 bg-purple-900 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Maxime Junca-Quintero
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl text-purple-300 mb-8">
              Strategy & Digital Transformation
            </h2>
            
            <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-lg">
              Business professional with expertise in data analytics and strategic planning.
              Passionate about leveraging technology to drive business innovation and transformation.
            </p>
            
            <a 
              href="#about" 
              className="inline-block px-8 py-3 bg-purple-700 hover:bg-purple-600 text-white rounded-full transition-colors duration-300"
            >
              Explore My Work
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-purple-300 transition-colors">
          <span className="mb-2">Scroll Down</span>
          <FaArrowDown className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
} 