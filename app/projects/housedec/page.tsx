'use client'

import React from 'react'
import ProjectDetail from '@/app/components/ProjectDetail'

export default function HouseDecPage() {
  return (
    <>
      <ProjectDetail
        title="HouseDec - Furniture E-commerce"
        image="/assets/projects/housedec.jpg"
        context="The furniture e-commerce market is growing rapidly, but many platforms are complex and lack a minimalist approach. HouseDec was created to fill this gap by offering a streamlined, user-friendly platform focused on essential functionality and clean design."
        objective="To build a minimalist e-commerce platform for furniture sales that prioritizes simplicity and efficiency while incorporating essential features like secure payments, order management, and an intuitive admin dashboard."
        implementation="I built a minimalist e-commerce platform for furniture sales featuring Stripe payments, order management, and an admin dashboard. The platform includes image upload and storage, email notifications, and WhatsApp integration for customer support."
        method="The development process involved creating a Flask-based backend with Python, implementing Stripe for payment processing, setting up AWS S3 for image storage, and designing a clean, intuitive user interface. The admin dashboard was built to allow easy product management, order tracking, and customer communication."
        result="HouseDec successfully provides a streamlined furniture shopping experience with secure payment processing, efficient order management, and seamless communication channels. The minimalist design enhances user experience while the robust backend ensures reliable operation."
        tools={[
          "Flask",
          "Python",
          "SQLAlchemy",
          "Stripe",
          "AWS S3",
          "WhatsApp API"
        ]}
        documentation={[
          {
            title: "Executive Summary",
            link: "/assets/docs/HouseDec_Executive_Summary.pdf"
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
                src="/assets/projects/housedec.jpg"
                alt="HouseDec Homepage"
                className="w-full"
              />
            </div>
            <p className="text-gray-300 mt-3">The clean, minimalist homepage showcases featured furniture products with a focus on visual appeal and ease of navigation.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Product Management</h3>
            <div className="w-full rounded-lg overflow-hidden border border-gray-700">
              <img
                src="/assets/projects/screenshots/housedec-product-management.jpg"
                alt="HouseDec Product Management"
                className="w-full"
              />
            </div>
            <p className="text-gray-300 mt-3">The admin dashboard provides a comprehensive interface for managing products, including adding new items, updating inventory, and setting prices.</p>
          </div>
        </div>
      </div>
    </>
  )
} 