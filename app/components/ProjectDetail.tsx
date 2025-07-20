'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa'

interface ProjectDetailProps {
  title: string
  image: string
  logoStyle?: string // Optional style for logo images
  poc?: string
  meetingFrequency?: string
  projectLength?: string
  context: string
  objective: string
  implementation: string
  method: string
  result: string
  tools: string[]
  documentation?: {
    title: string
    link: string
  }[]
  screenshots?: {
    title: string
    image: string
    description?: string
  }[]
}

export default function ProjectDetail({
  title,
  image,
  logoStyle,
  poc,
  meetingFrequency,
  projectLength,
  context,
  objective,
  implementation,
  method,
  result,
  tools,
  documentation,
  screenshots
}: ProjectDetailProps) {
  return (
    <div className="p-6 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        <div className="relative h-64 md:h-80 w-full mb-6 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className={`${logoStyle || 'object-cover'}`}
          />
        </div>
        
        {(poc || meetingFrequency || projectLength) && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {poc && (
              <div className="bg-dark-700 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Person of Contact</h3>
                <p className="text-gray-300">{poc}</p>
              </div>
            )}
            
            {meetingFrequency && (
              <div className="bg-dark-700 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Meeting Frequency</h3>
                <p className="text-gray-300">{meetingFrequency}</p>
              </div>
            )}
            
            {projectLength && (
              <div className="bg-dark-700 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Project Length</h3>
                <p className="text-gray-300">{projectLength}</p>
              </div>
            )}
          </div>
        )}
      </div>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Context</h2>
          <p className="text-gray-300">{context}</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Objective</h2>
          <p className="text-gray-300">{objective}</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Implementation</h2>
          <p className="text-gray-300">{implementation}</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Method</h2>
          <p className="text-gray-300">{method}</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Result</h2>
          <p className="text-gray-300">{result}</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Tools and Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-dark-700 rounded-full text-gray-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>
        
        {documentation && documentation.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-4 text-purple-400">Documentation</h2>
            <div className="space-y-4">
              {documentation.map((doc, index) => (
                <a
                  key={index}
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <FaDownload />
                  <span>{doc.title}</span>
                </a>
              ))}
            </div>
          </section>
        )}
        
        {screenshots && screenshots.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6 text-purple-400">Project Screenshots</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {screenshots.map((screenshot, index) => (
                <div key={index} className="bg-dark-700 rounded-lg overflow-hidden">
                  <div className="relative h-80 w-full">
                    <Image
                      src={screenshot.image}
                      alt={screenshot.title}
                      fill
                      className="object-contain bg-white"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{screenshot.title}</h3>
                    {screenshot.description && (
                      <p className="text-gray-300 text-base leading-relaxed">{screenshot.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
} 