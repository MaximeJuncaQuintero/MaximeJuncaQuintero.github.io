'use client'

import React from 'react'
import ProjectDetail from '@/app/components/ProjectDetail'

export default function InnovationReportPage() {
  return (
    <ProjectDetail
      title="Innovation Report"
      image="/assets/projects/innovation-report.jpg"
      logoStyle="object-contain bg-white p-4"
      projectLength="University semester"
      context="My report explores the intriguing intersection of innovation and market capitalization within companies. This study was prompted by the observation that while innovation is widely regarded as a key driver of company growth, quantifying its impact on market valuation presents a complex challenge. The core question underpinning this research is the extent to which patents, as tangible assets and indicators of innovation, influence the market valuation of companies. Despite the intuitive link between innovation and company success, empirical evidence mapping this relationship, particularly in R&D-intensive industries, remains sparse."
      objective='The aim of my study, titled "Evaluating Market Valuation Drivers for Innovative Companies: An examination of Intellectual Property and Innovative Processes" is to rigorously analyze how patents contribute to the market valuation of innovative companies. By leveraging comprehensive datasets, this research seeks to shed light on the nuanced dynamics between patent activity and market capitalization.'
      implementation="My tasks spanned the spectrum from conceptualization to data analysis, involving the meticulous collection of patents data from patentsview, market cap information from Yahoo Finance libraries, and manual registration of R&D expenditures."
      method="Data Collection and Preparation: Compiled a dataset encompassing 29 companies across R&D-intensive sectors, ensuring the inclusion of comprehensive patent portfolios and market cap data spanning from 2013 to 2023.
Analytical Techniques: Employed a multi-pronged analysis strategy, incorporating graphical analyses to elucidate the relationship between patent activity and market capitalization. Techniques included clustering companies based on innovation and market cap, regression analysis to assess the linear relationship between patent counts and market valuation, and sector-wise examination of patent trends over time.
Sector-Specific Insights: Delved into the distinct innovation patterns within the technology, pharmaceutical, and biotechnology sectors, highlighting the variable impact of patents across different market segments."
      result="The study on the impact of patents on market valuation revealed a generally positive but complex relationship, influenced by sector-specific dynamics and the qualitative aspects of patents, suggesting areas for further research including R&D spending and patent diversity. These findings provide empirical evidence on the nuanced interplay between innovation and market capitalization, opening paths for future exploration to deepen our understanding of how innovation impacts company valuation."
      tools={[
        "Patentsview",
        "SEC EDGAR DATABASE",
        "Python",
        "Pandas",
        "YFinance",
        "Scikit-Learn",
        "Statsmodels",
        "Matplotlib",
        "Seaborn",
        "Numpy",
        "Scipy"
      ]}
      documentation={[
        {
          title: "Download Full Thesis",
          link: "/assets/docs/Thesis_BusinessProject_Maxime JuncaQuintero.pdf"
        }
      ]}
    />
  )
} 