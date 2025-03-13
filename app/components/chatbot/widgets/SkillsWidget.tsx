'use client'

import React from 'react';
import { FaTools } from 'react-icons/fa';

interface SkillsWidgetProps {
  actionProvider?: any;
  setState?: any;
  [key: string]: any;
}

export const SkillsWidget: React.FC<SkillsWidgetProps> = (props) => {
  const skillCategories = [
    {
      category: "Technical Skills",
      skills: ["Excel", "SQL", "Data Visualization", "VBA", "Python", "Data Analysis"]
    },
    {
      category: "Business Skills",
      skills: ["Project Management", "Strategic Planning", "Team Leadership", "Business Analysis", "Problem Solving"]
    },
    {
      category: "Languages",
      skills: ["English (Fluent)", "French (Native)", "Spanish (Intermediate)"]
    }
  ];

  const programmingLanguages = [
    { name: "Excel", proficiency: "Advanced" },
    { name: "SQL", proficiency: "Intermediate" },
    { name: "Python", proficiency: "Intermediate" },
    { name: "VBA", proficiency: "Intermediate" }
  ];

  return (
    <div className="skills-widget p-4 bg-dark-800 rounded-lg mt-2 mb-4">
      <h3 className="text-lg font-semibold mb-3 text-purple-400 flex items-center">
        <FaTools className="mr-2" />
        Skills
      </h3>
      
      <div className="space-y-4">
        {skillCategories.map((category, index) => (
          <div key={index} className="p-3 bg-dark-700 rounded-lg">
            <h4 className="font-medium mb-2">{category.category}</h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex} 
                  className="px-2 py-1 bg-dark-600 rounded-md text-sm text-purple-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
        
        <div className="p-3 bg-dark-700 rounded-lg">
          <h4 className="font-medium mb-2">Programming Languages</h4>
          <div className="space-y-2">
            {programmingLanguages.map((lang, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm">{lang.name}</span>
                <span className="text-xs text-purple-300">{lang.proficiency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 