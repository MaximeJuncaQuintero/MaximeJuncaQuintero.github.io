'use client'

import React from 'react'
import ProjectDetail from '@/app/components/ProjectDetail'

export default function TalentGridPage() {
  return (
    <ProjectDetail
      title="TalentGrid"
      image="/assets/projects/Logo_black.png"
      logoStyle="object-contain bg-white p-4"
      context="As a candidate navigating the job market, I identified critical pain points in the traditional recruitment ecosystem. The disconnect between education and employment, combined with the severe limitations of CV-based hiring—where candidates are reduced to a single page of text—created significant challenges for students, universities, and employers. This exploratory project emerged from recognizing the need for a comprehensive, data-rich e-portfolio system that serves as a complete CV replacement, showcasing projects, skills, and experiences in a rich, interactive format."
      objective="To revolutionize the connection between education and employment through a three-sided platform that creates value for universities, students, and employers. The core goal was to completely replace traditional CV-based hiring with a unified, data-rich e-portfolio solution that serves as a comprehensive showcase of candidates' work, addressing critical pain points across the recruitment ecosystem."
      implementation="I served as the project manager for TalentGrid, working closely with my associate Om Dighe who supervised production. Together, we developed a platform that transforms how talent is discovered, evaluated, and connected to opportunities. The centerpiece of our solution is a no-code e-portfolio builder that generates rich, interactive portfolios serving as complete CV replacements, combining no-code technology with specialized recruitment methodology."
      method={`The platform operates as a three-sided marketplace:

• For Universities: External administration tool requiring no IT integration, automated student engagement system targeting final-year students, and modern career services offering enhancing graduate outcomes.

• For Students & Graduates: No-code ePortfolio creation with comprehensive project showcasing that completely replaces traditional CVs, AI-powered chatbot to engage recruiters, and affordable subscription pricing.

• For Companies: Access to pre-qualified talent pools from partner universities, rich candidate profiles with 5-10 minute reading depth (replacing one-page CVs with comprehensive e-portfolios), and value-based pricing model paid only upon successful hire with a 360-day attribution window.`}
      result="TalentGrid successfully demonstrates a comprehensive solution that transforms education-to-employment transitions. The platform replaces traditional CVs with rich, verified ePortfolios and generic job boards with tailored shortlists, creating exceptional value for all stakeholders. The phased rollout strategy prioritizes university partnerships to establish the talent pool foundation, followed by employer recruitment to generate revenue through placements, with sustainable recurring revenue from student subscriptions."
      tools={[
        "No-Code Platform",
        "AI Chatbot",
        "ePortfolio System",
        "Three-Sided Marketplace",
        "Project Management"
      ]}
      screenshots={[
        {
          title: "Candidate Dashboard",
          image: "/assets/projects/screenshots/StudentDash.png",
          description: "The student dashboard provides candidates with a no-code e-portfolio builder to create and manage their comprehensive e-portfolios. This system completely replaces traditional CVs by allowing students to showcase their projects, experiences, and skills in a rich, interactive format that provides recruiters with a complete view of their capabilities."
        },
        {
          title: "E-Portfolio Generated",
          image: "/assets/projects/screenshots/Render.png",
          description: "An example of a generated e-portfolio showcasing a candidate's projects and skills in a rich, comprehensive format. This interactive portfolio serves as a complete CV replacement, providing recruiters with detailed insights into a candidate's work, achievements, and capabilities—far beyond what a traditional one-page CV can convey."
        },
        {
          title: "Schools Dashboard",
          image: "/assets/projects/screenshots/SchoolDash.png",
          description: "The university dashboard enables educational institutions to manage student engagement, track graduate outcomes, and provide modern career services without requiring IT integration. Universities can monitor student e-portfolio completion and help students transition from education to employment with comprehensive CV replacements."
        },
        {
          title: "Companies Recruiting Dashboard",
          image: "/assets/projects/screenshots/RecruteurDash.png",
          description: "The recruiter dashboard provides companies with access to pre-qualified talent pools and rich candidate e-portfolios that replace traditional CVs. Recruiters can efficiently discover and evaluate candidates through comprehensive profiles that showcase projects, skills, and experiences in detail, enabling better hiring decisions."
        }
      ]}
    />
  )
}

