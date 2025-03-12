import React from 'react'
import { motion } from 'framer-motion'
import { FaFilePdf } from 'react-icons/fa'

interface Certification {
  title: string
  issuer: string
  date: string
  image: string
  link: string
}

export default function Certifications() {
  const certifications: Certification[] = [
    {
      title: "Understanding SQL Databases",
      issuer: "DataCamp",
      date: "2023",
      image: "/assets/certifications/sql-certificate.jpg",
      link: "/assets/docs/Maxime_Junca_Quintero_Understanding_SQL_Databases_Certificate.pdf"
    }
  ];

  if (certifications.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="section-title mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="certification-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 h-40 overflow-hidden rounded-md bg-gray-800 flex items-center justify-center">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/assets/placeholder-cert.jpg";
                  }}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
              <p className="text-gray-400 mb-4">{cert.issuer} • {cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300"
              >
                <FaFilePdf className="text-lg" />
                <span>View Certificate</span>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 