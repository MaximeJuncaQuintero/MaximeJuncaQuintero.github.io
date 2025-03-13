'use client'

import React from 'react'
import ProjectDetail from '@/app/components/ProjectDetail'

export default function TenorisAnalyticsPage() {
  return (
    <ProjectDetail
      title="Tenoris Analytics"
      image="/assets/projects/tenoris-analytics.jpg"
      logoStyle="object-contain bg-white p-4 scale-150"
      poc="Kayané Robach (Data Scientist POC), Jérémy Dallard (SDE POC), Frédéric Ghenassia (PM POC)"
      meetingFrequency="Weekly"
      context="I identified a significant gap in the market where individual investors lacked access to alternative financial data, which was predominantly utilized by institutional investors. This gap led to a disparity in investment decision-making capabilities."
      objective="My objective was to democratize alternative financial data for individual investors across Europe by developing Tenoris Analytics. This platform aimed to collect, analyze, and present alternative financial data in an accessible and understandable format, enabling individual investors to make better-informed decisions."
      implementation="I led the initiative from concept to launch, overseeing the development. My responsibilities encompassed strategizing the technical architecture, assembling a skilled team, and ensuring our platform met its mission to empower individual investors. A key focus was developing robust web scraping systems to collect financial data from various sources."
      method="Developed a comprehensive web scraping infrastructure for collecting financial data from multiple sources, created a Kubernetes-based architecture for scalable processing, implemented a GraphQL-based API for flexible data access, and built a back-office tool for data management and monitoring."
      result="The Tenoris Analytics Proof of Concept has successfully showcased the potential to impact individual investors' access to alternative financial data, marking the initial steps towards democratizing financial information with plans for future expansion and exploration of dataset monetization. Despite being in the early stages, this initiative promises significant productivity improvements by streamlining data analysis processes and offering unique datasets that hold substantial standalone value or for integration into future platform developments."
      tools={[
        "Web Scraping",
        "Python",
        "Kubernetes",
        "GraphQL API",
        "Back-Office Application",
        "CRON jobs"
      ]}
      documentation={[
        {
          title: "MVP Tenoris Analytics",
          link: "/assets/docs/MVP Tenoris Analytics.pdf"
        }
      ]}
    />
  )
} 