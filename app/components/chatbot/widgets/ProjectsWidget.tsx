'use client'

import React from 'react';
import { FaCode } from 'react-icons/fa';
import Link from 'next/link';

interface ProjectsWidgetProps {
  actionProvider?: any;
  setState?: any;
  [key: string]: any;
}

export const ProjectsWidget: React.FC<ProjectsWidgetProps> = (props) => {
  const projects = [
    {
      title: "Amazon KPI Dashboard",
      description: "Enhanced internal reporting tools and consolidated metrics visibility for Amazon Transportation Services.",
      link: "/projects/amazon-kpi"
    },
    {
      title: "Tenoris Analytics",
      description: "Led development of a platform to democratize alternative financial data for individual investors across Europe.",
      link: "/projects/tenoris-analytics"
    },
    {
      title: "Innovation Report",
      description: "Analyzed how patents contribute to market valuation of innovative companies across R&D-intensive sectors.",
      link: "/projects/innovation-report"
    },
    {
      title: "KITS - Appliance Kit Service",
      description: "Developed an MVP for a home appliance service with custom kit configuration and buyback system.",
      link: "/projects/kits"
    },
    {
      title: "HouseDec - Furniture E-commerce",
      description: "Built a minimalist e-commerce platform for furniture sales with Stripe payments and admin dashboard.",
      link: "/projects/housedec"
    }
  ];

  return (
    <div className="projects-widget p-4 bg-dark-800 rounded-lg mt-2 mb-4">
      <h3 className="text-lg font-semibold mb-3 text-purple-400 flex items-center">
        <FaCode className="mr-2" />
        Projects
      </h3>
      <div className="space-y-2">
        {projects.map((project, index) => (
          <div key={index} className="p-3 bg-dark-700 rounded-lg">
            <Link href={project.link} className="font-medium hover:text-purple-300 transition-colors">
              {project.title}
            </Link>
            <p className="text-sm text-gray-300 mt-1">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}; 