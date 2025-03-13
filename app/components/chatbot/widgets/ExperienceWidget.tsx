'use client'

import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

interface ExperienceWidgetProps {
  actionProvider?: any;
  setState?: any;
  [key: string]: any;
}

export const ExperienceWidget: React.FC<ExperienceWidgetProps> = (props) => {
  const experiences = [
    {
      title: "Operations Manager",
      company: "Amazon Hub",
      location: "Paris, France",
      period: "June – Oct 2024",
      description: "Oversaw Lockers fleet maintenance, optimized supplier coordination, gained in-depth operational knowledge."
    },
    {
      title: "Project Manager - Intern",
      company: "Amazon Transportation Services (ATS)",
      location: "London, UK",
      period: "Jan – Jun 2023",
      description: "Enhanced metric visibility with a consolidated reporting solution, managed change for internal reporting tools, developed SQL skills."
    },
    {
      title: "Founder",
      company: "Tenoris Analytics",
      location: "Toulouse, France",
      period: "Nov 2021 – Jan 2023",
      description: "Led strategy and team management for alternative financial data project, monitored technical progress, developed solutions to challenges."
    }
  ];

  return (
    <div className="experience-widget p-4 bg-dark-800 rounded-lg mt-2 mb-4">
      <h3 className="text-lg font-semibold mb-3 text-purple-400 flex items-center">
        <FaBriefcase className="mr-2" />
        Work Experience
      </h3>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="p-3 bg-dark-700 rounded-lg">
            <div className="flex justify-between items-start mb-1">
              <div>
                <h4 className="font-medium">{exp.title}</h4>
                <p className="text-sm text-purple-300">{exp.company} • {exp.location}</p>
              </div>
              <span className="text-xs text-gray-400">{exp.period}</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}; 