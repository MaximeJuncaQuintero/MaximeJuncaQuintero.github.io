'use client'

import React from 'react'
import ProjectDetail from '@/app/components/ProjectDetail'

export default function FlowmapPage() {
  return (
    <ProjectDetail
      title="Flowmap"
      image="/assets/projects/flowmap.png"
      logoStyle="object-contain bg-white p-4 scale-150"
      poc="Tenoris Analytics Team"
      meetingFrequency="Weekly"
      projectLength="Under Production"
      context="The global project management and roadmap tracking tools market is experiencing rapid growth, driven by enterprise digitalization, SaaS growth, and the need to accelerate time-to-market. However, startups, tech SMEs, and MVP-stage teams face a recurring problem: the lack of automated solutions to track real project progress without mobilizing significant internal resources. Existing tools remain dependent on manual or semi-automated input, generating time losses, errors, and lack of visibility for stakeholders."
      objective="To launch an innovative SaaS service that fully automates feature progress tracking against the roadmap through an AI agent chain analyzing code at each push. After initial configuration (mapping features to roadmap), the solution operates without regular manual input from developers, providing automated reporting of progress status, regression detection, dynamic mapping between product roadmap and source code, and seamless integration with GitHub and major project management tools."
      implementation="Led the development of a comprehensive SaaS platform that automates project progress tracking through AI-powered code analysis. The system integrates with GitHub repositories and project management tools to provide real-time insights into feature development progress without requiring manual updates from development teams."
      method="Developed an AI agent chain that analyzes code changes at each push, implemented automated progress reporting with visual dashboards, created dynamic mapping between product roadmap and source code, built seamless integrations with GitHub and project management tools, and designed a flexible subscription model adapted to production cycles."
      result="Flowmap is currently under production as a Tenoris Analytics proprietary solution. The platform successfully demonstrates the potential to revolutionize project tracking for early-stage tech teams by eliminating manual progress updates, providing real-time visibility into development progress, and enabling teams to focus on delivering business value rather than administrative tasks."
      tools={[
        "AI/ML",
        "GitHub Integration",
        "SaaS Architecture",
        "Automated Reporting",
        "Dashboard Development",
        "API Integration"
      ]}
      documentation={[
        {
          title: "Flowmap Executive Summary",
          link: "/assets/docs/Flowmap_Executive_Summary.pdf"
        }
      ]}
      screenshots={[
        {
          title: "Login Page",
          image: "/assets/projects/screenshots/Login_page.png",
          description: "Secure authentication interface for Flowmap users"
        },
        {
          title: "Onboarding Page",
          image: "/assets/projects/screenshots/Onboarding_page.png",
          description: "User onboarding and initial setup process"
        },
        {
          title: "Dashboard",
          image: "/assets/projects/screenshots/Dashboard_page.png",
          description: "Main dashboard showing project overview and key metrics"
        },
        {
          title: "Projects Page",
          image: "/assets/projects/screenshots/Projects_page.png",
          description: "Project management and organization interface"
        },
        {
          title: "Roadmap Page",
          image: "/assets/projects/screenshots/Roadmap_page.png",
          description: "Visual roadmap planning and tracking"
        },
        {
          title: "Features Status Page",
          image: "/assets/projects/screenshots/Features_Status_page.png",
          description: "Detailed feature progress tracking and status monitoring"
        }
      ]}
    />
  )
} 