'use client'

import React from 'react'
import ProjectDetail from '@/app/components/ProjectDetail'
import { useLanguage } from '@/app/context/LanguageContext'

export default function InnovationReportPage() {
  const { lang } = useLanguage()
  const isFr = lang === 'fr'

  return (
    <ProjectDetail
      title={isFr ? "Rapport Innovation" : "Innovation Report"}
      image="/assets/projects/innovation-report.jpg"
      logoStyle="object-contain bg-white p-4"
      projectLength={isFr ? 'Semestre universitaire' : 'University semester'}
      context={isFr
        ? "Ce rapport analyse l'intersection entre innovation et capitalisation boursière. L'étude part d'un constat : l'innovation est souvent perçue comme un moteur de croissance, mais son impact sur la valorisation reste difficile à mesurer. La question centrale était d'évaluer dans quelle mesure les brevets, en tant qu'actifs tangibles et signaux d'innovation, influencent la valorisation des entreprises."
        : 'My report explores the intriguing intersection of innovation and market capitalization within companies. This study was prompted by the observation that while innovation is widely regarded as a key driver of company growth, quantifying its impact on market valuation presents a complex challenge. The core question underpinning this research is the extent to which patents, as tangible assets and indicators of innovation, influence the market valuation of companies. Despite the intuitive link between innovation and company success, empirical evidence mapping this relationship, particularly in R&D-intensive industries, remains sparse.'}
      objective={isFr
        ? 'L\'objectif de l\'étude, intitulée "Evaluating Market Valuation Drivers for Innovative Companies", était d\'analyser rigoureusement la contribution des brevets à la valorisation des entreprises innovantes, à partir de jeux de données complets.'
        : 'The aim of my study, titled "Evaluating Market Valuation Drivers for Innovative Companies: An examination of Intellectual Property and Innovative Processes" is to rigorously analyze how patents contribute to the market valuation of innovative companies. By leveraging comprehensive datasets, this research seeks to shed light on the nuanced dynamics between patent activity and market capitalization.'}
      implementation={isFr
        ? "Mes missions ont couvert l'ensemble du cycle, de la conceptualisation à l'analyse : collecte structurée des données brevets (PatentsView), récupération des données de market cap (Yahoo Finance), et intégration manuelle des dépenses R&D."
        : 'My tasks spanned the spectrum from conceptualization to data analysis, involving the meticulous collection of patents data from patentsview, market cap information from Yahoo Finance libraries, and manual registration of R&D expenditures.'}
      method={isFr ? `Collecte et préparation :
- Construction d'un dataset de 29 entreprises issues de secteurs intensifs en R&D, avec données brevets et market cap sur 2013-2023.
Techniques analytiques :
- Analyses graphiques, clustering, régressions linéaires et analyses sectorielles pour étudier le lien entre activité brevets et valorisation.
Lecture sectorielle :
- Analyse spécifique des différences entre technologies, pharmacie et biotech.` : "Data Collection and Preparation: Compiled a dataset encompassing 29 companies across R&D-intensive sectors, ensuring the inclusion of comprehensive patent portfolios and market cap data spanning from 2013 to 2023.
Analytical Techniques: Employed a multi-pronged analysis strategy, incorporating graphical analyses to elucidate the relationship between patent activity and market capitalization. Techniques included clustering companies based on innovation and market cap, regression analysis to assess the linear relationship between patent counts and market valuation, and sector-wise examination of patent trends over time.
Sector-Specific Insights: Delved into the distinct innovation patterns within the technology, pharmaceutical, and biotechnology sectors, highlighting the variable impact of patents across different market segments."}
      result={isFr
        ? "L'étude met en évidence une relation globalement positive mais complexe entre brevets et valorisation, influencée par les dynamiques sectorielles et la qualité des portefeuilles. Les résultats ouvrent des pistes d'approfondissement autour des dépenses R&D et de la diversité des brevets."
        : 'The study on the impact of patents on market valuation revealed a generally positive but complex relationship, influenced by sector-specific dynamics and the qualitative aspects of patents, suggesting areas for further research including R&D spending and patent diversity. These findings provide empirical evidence on the nuanced interplay between innovation and market capitalization, opening paths for future exploration to deepen our understanding of how innovation impacts company valuation.'}
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
          title: isFr ? 'Télécharger le mémoire complet' : 'Download Full Thesis',
          link: "/assets/docs/Thesis_BusinessProject_Maxime JuncaQuintero.pdf"
        }
      ]}
    />
  )
} 