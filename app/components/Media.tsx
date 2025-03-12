import React from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf } from 'react-icons/fa';

interface MediaItem {
  title: string;
  description: string;
  file: string;
  date: string;
}

const mediaItems: MediaItem[] = [
  {
    title: "NXU Think Tank Report",
    description: "This think tank report, co-written by myself, explores the societal, economic, and employment impacts of AI tools like Chat GPT. It delves into the nuances between AI and human intelligence, the expert use of Chat GPT, and its transformative potential across various sectors. The report also discusses the broader implications of AI on education, the labor market, and the concept of work in the context of a potential new era of economic growth and social transformation similar to the Industrial Revolution.",
    file: "/assets/docs/NXUTHINKTANK.pdf",
    date: "2024"
  }
];

export default function Media() {
  if (mediaItems.length === 0) return null;
  
  return (
    <section id="media" className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center section-heading"
        >
          Media & Publications
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          {mediaItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="media-card mb-8"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <span className="text-purple-300 text-sm">{item.date}</span>
                </div>
                
                <p className="text-gray-300 mb-6">{item.description}</p>
                
                <a 
                  href={item.file} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-purple-900 bg-opacity-30 text-purple-300 rounded-full text-sm hover:bg-opacity-50 transition-all"
                >
                  <FaFilePdf className="mr-2" />
                  View Publication
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 