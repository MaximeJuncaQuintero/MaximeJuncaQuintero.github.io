'use client'

import React from 'react';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

interface EducationWidgetProps {
  actionProvider?: any;
  setState?: any;
  [key: string]: any;
}

export const EducationWidget: React.FC<EducationWidgetProps> = (props) => {
  const education = [
    {
      degree: "MSc – Strategy, Consulting and Organization",
      institution: "ESCP Business School",
      location: "Paris, France",
      period: "Sep 2025 – Dec 2026",
      description: "Master's program focused on strategy, consulting, and organizational transformation."
    },
    {
      degree: "BBA - Specialization in Business Analytics",
      institution: "Dublin City University",
      location: "Dublin, Ireland",
      period: "Sep 2022 - May 2024",
      description: "Specialized in Business Analytics, developed skills in data analysis, visualization, and business intelligence."
    },
    {
      degree: "BBA - CESEM",
      institution: "NEOMA Business School",
      location: "Reims, France",
      period: "Sep 2019 - Jul 2021",
      description: "Focused on international business and management fundamentals."
    }
  ];

  return (
    <div className="education-widget p-4 bg-dark-800 rounded-lg mt-2 mb-4">
      <h3 className="text-lg font-semibold mb-3 text-purple-400 flex items-center">
        <FaGraduationCap className="mr-2" />
        Education
      </h3>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="p-3 bg-dark-700 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors duration-300">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-medium text-white">{edu.degree}</h4>
                <p className="text-sm text-purple-300 flex items-center mt-1">
                  {edu.institution}
                </p>
                <p className="text-xs text-gray-400 flex items-center mt-1">
                  <FaMapMarkerAlt className="mr-1 text-purple-400" size={12} />
                  {edu.location}
                </p>
              </div>
              <span className="text-xs text-gray-400 flex items-center whitespace-nowrap">
                <FaCalendarAlt className="mr-1 text-purple-400" size={12} />
                {edu.period}
              </span>
            </div>
            <p className="text-sm text-gray-300 mt-2 border-t border-gray-700 pt-2">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}; 