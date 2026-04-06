'use client'

import React from 'react'
import ProjectDetail from '@/app/components/ProjectDetail'
import { useLanguage } from '@/app/context/LanguageContext'

export default function TenorisAnalyticsPage() {
  const { lang } = useLanguage()
  const isFr = lang === 'fr'

  return (
    <ProjectDetail
      title="Tenoris Analytics"
      image="/assets/projects/TA_Logo.png"
      logoStyle="object-contain bg-white p-4 scale-150"
      poc="Kayané Robach (Data Scientist POC), Jérémy Dallard (SDE POC), Frédéric Ghenassia (PM POC)"
      meetingFrequency={isFr ? 'Hebdomadaire' : 'Weekly'}
      context={isFr
        ? "J'ai identifié un manque important : les investisseurs particuliers avaient un accès limité à la data financière alternative, principalement exploitée par les institutionnels. Cet écart créait une asymétrie de décision."
        : 'I identified a significant gap in the market where individual investors lacked access to alternative financial data, which was predominantly utilized by institutional investors. This gap led to a disparity in investment decision-making capabilities.'}
      objective={isFr
        ? "L'objectif était de démocratiser l'accès à la data financière alternative en Europe via Tenoris Analytics : collecter, analyser et restituer des données dans un format accessible pour améliorer la qualité des décisions d'investissement."
        : 'My objective was to democratize alternative financial data for individual investors across Europe by developing Tenoris Analytics. This platform aimed to collect, analyze, and present alternative financial data in an accessible and understandable format, enabling individual investors to make better-informed decisions.'}
      implementation={isFr
        ? "J'ai piloté l'initiative de l'idée au lancement : architecture technique, constitution de l'équipe, et cadrage produit. Un axe majeur a été la mise en place de systèmes robustes de web scraping multi-sources."
        : 'I led the initiative from concept to launch, overseeing the development. My responsibilities encompassed strategizing the technical architecture, assembling a skilled team, and ensuring our platform met its mission to empower individual investors. A key focus was developing robust web scraping systems to collect financial data from various sources.'}
      method={isFr
        ? "Déploiement d'une infrastructure de web scraping multi-sources, architecture Kubernetes pour le passage à l'échelle, API GraphQL pour un accès flexible aux données, et back-office de supervision et gestion."
        : 'Developed a comprehensive web scraping infrastructure for collecting financial data from multiple sources, created a Kubernetes-based architecture for scalable processing, implemented a GraphQL-based API for flexible data access, and built a back-office tool for data management and monitoring.'}
      result={isFr
        ? "Le Proof of Concept valide la capacité de la plateforme à améliorer l'accès des investisseurs particuliers à des jeux de données différenciants. Le projet pose les bases d'une montée en puissance et de scénarios de monétisation des datasets."
        : "The Tenoris Analytics Proof of Concept has successfully showcased the potential to impact individual investors' access to alternative financial data, marking the initial steps towards democratizing financial information with plans for future expansion and exploration of dataset monetization. Despite being in the early stages, this initiative promises significant productivity improvements by streamlining data analysis processes and offering unique datasets that hold substantial standalone value or for integration into future platform developments."}
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
          title: isFr ? 'MVP Tenoris Analytics' : 'MVP Tenoris Analytics',
          link: "/assets/docs/MVP Tenoris Analytics.pdf"
        }
      ]}
    />
  )
} 