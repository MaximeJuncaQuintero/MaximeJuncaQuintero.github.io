'use client'

import React from 'react'
import ProjectDetail from '@/app/components/ProjectDetail'
import Image from 'next/image'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

export default function KITSPage() {
  return (
    <>
      <ProjectDetail
        title="KITS - Appliance Kit Service"
        image="/assets/projects/kits-full.jpg"
        logoStyle="object-contain"
        context="The appliance market presents several challenges for consumers, particularly those in rental properties. These include high initial investment costs, difficulty finding appliances with specific dimensions, dealing with multiple suppliers, rapid depreciation, and logistical complications during tenant changes. Our service addresses these issues by offering tailored appliance kits, simplified maintenance, and a buyback system."
        objective="To create a comprehensive service that provides customized appliance kits for rental properties, with flexible purchase options and a buyback system, simplifying the process of equipping and maintaining rental units while reducing costs and environmental impact."
        implementation="I developed an MVP for a home appliance service that helps buyers find appliances with complex dimensions, access financing, and benefit from a buyback system. The platform enables custom kit configuration, cost estimation, and consolidated delivery to save money."
        method="The service offers tailored appliance kits for different property types, flexible purchasing options (direct purchase, leasing, subscription), a buyback and reconditioning system for used appliances, a digital platform for equipment management, and integrated logistics for delivery, installation, and collection."
        result="The KITS MVP successfully demonstrates the ability to configure kits based on exact space constraints, suggest products that fit specific dimensions, calculate total and monthly costs, estimate savings compared to separate purchases, and adapt suggestions based on property type (with features like 'Ideal for Studio' badges)."
        tools={[
          "Flask",
          "Python",
          "SQLAlchemy",
          "Jinja2"
        ]}
        documentation={[
          {
            title: "Executive Summary",
            link: "/assets/docs/KITS - Executive Summary.pdf"
          }
        ]}
      />
      
      {/* Additional Screenshots Section */}
      <div className="container mx-auto px-6 md:px-8 pb-16">
        <h2 className="text-2xl font-bold mb-6 text-purple-400">Project Screenshots</h2>
        
        <div className="grid grid-cols-1 gap-12 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Homepage</h3>
            <div className="w-full rounded-lg overflow-hidden border border-gray-700">
              <img
                src="/assets/projects/screenshots/kits-homepage.jpg"
                alt="KITS Homepage"
                className="w-full"
              />
            </div>
            <p className="text-gray-300 mt-3">The main landing page showcases the service's value proposition and key features for potential customers.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Appliance Configurator</h3>
            <div className="w-full rounded-lg overflow-hidden border border-gray-700">
              <img
                src="/assets/projects/screenshots/kits-config.jpg"
                alt="KITS Configurator"
                className="w-full"
              />
            </div>
            <p className="text-gray-300 mt-3">The configurator allows users to select appliances based on their specific space constraints and requirements.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Admin Dashboard</h3>
            <div className="w-full rounded-lg overflow-hidden border border-gray-700">
              <img
                src="/assets/projects/screenshots/kits-dashboard.jpg"
                alt="KITS Dashboard"
                className="w-full"
              />
            </div>
            <p className="text-gray-300 mt-3">The dashboard provides administrators with tools to manage products, orders, and customer information.</p>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-dark-700 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Live Demo</h3>
          <p className="text-gray-300 mb-4">
            You can explore the live demo of KITS. Please note that the initial load may take up to 50 seconds if the service hasn't been accessed recently.
          </p>
          <Link 
            href="https://kits-electromenager.onrender.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            <span>Visit KITS Demo</span>
            <FaExternalLinkAlt />
          </Link>
        </div>
      </div>
    </>
  )
} 