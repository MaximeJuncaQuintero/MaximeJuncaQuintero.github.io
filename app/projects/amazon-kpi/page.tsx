'use client'

import React from 'react'
import ProjectDetail from '@/app/components/ProjectDetail'

export default function AmazonKPIPage() {
  return (
    <ProjectDetail
      title="Amazon EU ATS KPI Library"
      image="/assets/projects/amazon-kpi.jpg"
      logoStyle="object-contain bg-white p-4"
      poc="Richa Saxena (Manager)"
      meetingFrequency="Once per week"
      projectLength="3 months"
      context="I was assigned this project during my internship. The goal was to address the lack of a consolidated view of all EU ATS metrics and their update status in PerfectMile. Without a unified platform for tracking metrics, operational transparency and decision-making were hindered."
      objective="To develop an automated solution that synchronizes the local database (Redshift) with a PerfectMile Excel KPI file, providing a real-time, comprehensive view of metrics, their categories, affiliations to Business Reviews, and latest refresh statuses."
      implementation="As a Project Management Intern with a background in business analytics, I spearheaded the initiative to enhance internal reporting tools and consolidate metrics visibility for Amazon Transportation Services."
      method="The project's execution involved several key steps:
Analysis and Planning: Identifying the metrics in use, their categories, and their affiliations with specific Business Reviews.
Implementation: Creating an Excel macro to automate the process of fetching and updating the KPI data from the Redshift database to reflect in the PerfectMile Excel file. This included a 'Refresh' button to update the Excel file with the most current view of ATS metrics in PerfectMile.
Alternative Solutions: Due to the challenges in directly extracting specific ATS metrics from PerfectMile, the project explored alternative approaches, such as leveraging PerfectMile features like PerfectMetrics and Metric Audit to achieve the objectives."
      result="The project adapted to technical challenges by enhancing metric visibility and monitoring through PerfectMile's existing features, like PerfectMetrics and Metric Audit, successfully addressing visibility and data consistency issues. This strategic shift is expected to streamline operations and reduce the time and effort required for metrics management, indirectly boosting productivity despite the absence of quantified productivity measures."
      tools={[
        "Excel Macros",
        "SQL Queries",
        "PerfectMile"
      ]}
      documentation={[
        {
          title: "Internship Report",
          link: "/assets/docs/INTRA Report.pdf"
        }
      ]}
    />
  )
} 