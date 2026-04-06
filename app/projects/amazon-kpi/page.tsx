'use client'

import React from 'react'
import ProjectDetail from '@/app/components/ProjectDetail'
import { useLanguage } from '@/app/context/LanguageContext'

export default function AmazonKPIPage() {
  const { lang } = useLanguage()
  const isFr = lang === 'fr'

  return (
    <ProjectDetail
      title="Amazon EU ATS KPI Library"
      image="/assets/projects/amazon-kpi.jpg"
      logoStyle="object-contain bg-white p-4"
      poc="Richa Saxena (Manager)"
      meetingFrequency={isFr ? 'Une fois par semaine' : 'Once per week'}
      projectLength={isFr ? '3 mois' : '3 months'}
      context={isFr
        ? "Ce projet m'a été confié pendant mon stage. L'objectif était de résoudre l'absence d'une vue consolidée des métriques EU ATS et de leur statut de mise à jour dans PerfectMile. Sans plateforme unifiée, la transparence opérationnelle et la prise de décision étaient limitées."
        : 'I was assigned this project during my internship. The goal was to address the lack of a consolidated view of all EU ATS metrics and their update status in PerfectMile. Without a unified platform for tracking metrics, operational transparency and decision-making were hindered.'}
      objective={isFr
        ? "Développer une solution automatisée synchronisant la base locale (Redshift) avec un fichier KPI Excel PerfectMile, afin d'offrir une vision temps réel des métriques, de leurs catégories, de leur rattachement aux Business Reviews et des derniers statuts de rafraîchissement."
        : 'To develop an automated solution that synchronizes the local database (Redshift) with a PerfectMile Excel KPI file, providing a real-time, comprehensive view of metrics, their categories, affiliations to Business Reviews, and latest refresh statuses.'}
      implementation={isFr
        ? "En tant que Project Management Intern avec une base en business analytics, j'ai piloté l'initiative visant à améliorer les outils de reporting internes et à consolider la visibilité des métriques pour Amazon Transportation Services."
        : 'As a Project Management Intern with a background in business analytics, I spearheaded the initiative to enhance internal reporting tools and consolidate metrics visibility for Amazon Transportation Services.'}
      method={isFr ? `L'exécution du projet s'est articulée en plusieurs étapes clés :
Analyse et planification : identification des métriques utilisées, de leurs catégories et de leur rattachement aux Business Reviews.
Implémentation : création d'une macro Excel pour automatiser la récupération et la mise à jour des données KPI depuis Redshift vers le fichier Excel PerfectMile, avec un bouton "Refresh" pour obtenir une vue à jour.
Solutions alternatives : face aux limites d'extraction directe de certaines métriques ATS depuis PerfectMile, exploration d'approches complémentaires via PerfectMetrics et Metric Audit.` : "The project's execution involved several key steps:
Analysis and Planning: Identifying the metrics in use, their categories, and their affiliations with specific Business Reviews.
Implementation: Creating an Excel macro to automate the process of fetching and updating the KPI data from the Redshift database to reflect in the PerfectMile Excel file. This included a 'Refresh' button to update the Excel file with the most current view of ATS metrics in PerfectMile.
Alternative Solutions: Due to the challenges in directly extracting specific ATS metrics from PerfectMile, the project explored alternative approaches, such as leveraging PerfectMile features like PerfectMetrics and Metric Audit to achieve the objectives."}
      result={isFr
        ? "Le projet s'est adapté aux contraintes techniques en renforçant la visibilité et le suivi des métriques via les fonctionnalités existantes de PerfectMile (PerfectMetrics, Metric Audit). Cette évolution a permis de traiter les enjeux de cohérence et de traçabilité des données, et de réduire le temps nécessaire à la gestion des indicateurs."
        : "The project adapted to technical challenges by enhancing metric visibility and monitoring through PerfectMile's existing features, like PerfectMetrics and Metric Audit, successfully addressing visibility and data consistency issues. This strategic shift is expected to streamline operations and reduce the time and effort required for metrics management, indirectly boosting productivity despite the absence of quantified productivity measures."}
      tools={[
        "Excel Macros",
        "SQL Queries",
        "PerfectMile"
      ]}
      documentation={[
        {
          title: isFr ? 'Rapport de stage' : 'Internship Report',
          link: "/assets/docs/INTRA Report.pdf"
        }
      ]}
    />
  )
} 