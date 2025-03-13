'use client'

import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

interface EducationWidgetProps {
  actionProvider?: any;
  setState?: any;
  [key: string]: any;
}

export const EducationWidget: React.FC<EducationWidgetProps> = (props) => {
  const education = [
    {
      degree: "BBA - Specialization in Business Analytics",
      institution: "Dublin City University",
      location: "Dublin, Ireland",
      period: "Sep 2022 - May 2024",
      description: "Specialized in Business Analytics, developed skills in data analysis, visualization, and business intelligence. Achieved First Class Honours (3.8/4.0 GPA)."
    },
    {
      degree: "BBA - CESEM",
      institution: "NEOMA Business School",
      location: "Reims, France",
      period: "Sep 2019 - Jul 2021",
      description: "Focused on international business and management fundamentals. Achieved top 10% of class ranking."
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
          <div key={index} className="p-3 bg-dark-700 rounded-lg">
            <div className="flex justify-between items-start mb-1">
              <div>
                <h4 className="font-medium">{edu.degree}</h4>
                <p className="text-sm text-purple-300">{edu.institution} • {edu.location}</p>
              </div>
              <span className="text-xs text-gray-400">{edu.period}</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}; 