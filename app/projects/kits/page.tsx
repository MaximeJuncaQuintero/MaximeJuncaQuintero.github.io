'use client'

import React from 'react'
import ProjectDetail from '@/app/components/ProjectDetail'
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
        tools={['Flask', 'Python', 'SQLAlchemy', 'Jinja2']}
        documentation={[
          { title: 'Executive Summary', link: '/assets/docs/KITS - Executive Summary.pdf' },
        ]}
        screenshots={[
          {
            title:       'Homepage',
            image:       '/assets/projects/screenshots/kits-homepage.jpg',
            description: 'The main landing page showcases the service value proposition and key features.',
          },
          {
            title:       'Appliance Configurator',
            image:       '/assets/projects/screenshots/kits-config.jpg',
            description: 'The configurator lets users select appliances based on specific space constraints.',
          },
          {
            title:       'Admin Dashboard',
            image:       '/assets/projects/screenshots/kits-dashboard.jpg',
            description: 'The dashboard provides administrators with tools to manage products, orders, and customers.',
          },
        ]}
      />

      {/* Live demo link — new design system */}
      <div className="px-4 sm:px-6 md:px-8 pb-10">
        <div
          className="rounded-2xl border p-6"
          style={{ background: 'var(--surface-2)', borderColor: 'var(--border)' }}
        >
          <h3 className="text-sm font-bold mb-1" style={{ color: 'var(--text)' }}>Live Demo</h3>
          <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
            Explore the live MVP. The initial load may take up to 50 seconds if the service hasn&apos;t been
            accessed recently (free-tier cold start).
          </p>
          <Link
            href="https://kits-electromenager.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            style={{ background: 'var(--accent)' }}
          >
            Visit KITS Demo
            <FaExternalLinkAlt className="text-xs" />
          </Link>
        </div>
      </div>
    </>
  )
}
