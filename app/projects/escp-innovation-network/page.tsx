'use client'

import React from 'react'
import ProjectDetail from '@/app/components/ProjectDetail'
import { useLanguage } from '@/app/context/LanguageContext'
import Image from 'next/image'

export default function EscpInnovationNetworkPage() {
  const { lang } = useLanguage()
  const isFr = lang === 'fr'

  return (
    <ProjectDetail
      title={isFr ? 'Transformation du réseau innovation ESCP (cas anonymisé)' : 'ESCP Innovation Network Transformation (Anonymized Case)'}
      image="/assets/projects/escp-logo-clean.png"
      customThumbnail={
        <div className="w-full h-full flex items-center justify-center bg-white">
          <div className="relative w-full h-full max-w-[900px]">
            <Image
              src="/assets/projects/escp-logo-clean.png"
              alt="ESCP Business School"
              fill
              className="object-contain p-6 sm:p-8"
              priority
            />
          </div>
        </div>
      }
      projectLength={isFr ? 'Mission de conseil académique (2026)' : 'Academic consulting mission (2026)'}
      context={isFr
        ? "Cette mission a été réalisée dans le cadre ESCP avec une organisation partenaire animée par un réseau innovation distribué. Le problème central n'était pas l'engagement des acteurs, mais les conditions structurelles d'exécution du rôle dans la durée."
        : 'This mission was delivered in the ESCP context with a partner organization operating a distributed innovation network. The observed challenge was not a lack of engagement, but a structural difficulty to make the role sustainably executable at scale.'}
      objective={isFr
        ? "Concevoir un plan de transformation pragmatique, adapté à la capacité de déploiement, pour renforcer la clarté des rôles, la visibilité des résultats, la qualité de l'intégration et la fluidité d'exécution au quotidien."
        : 'Design a pragmatic, capacity-aware transformation plan that improves role clarity, visibility of outcomes, onboarding consistency, and day-to-day execution conditions, while preserving adaptability for different local contexts.'}
      implementation={isFr
        ? "J'ai co-piloté le chantier de bout en bout : cadrage du problème, consolidation d'insights qualitatifs et quantitatifs, structuration des options de recommandation, puis transformation en portefeuille d'actions activable."
        : 'I co-led the end-to-end workstream: framing the problem, consolidating mixed-method insights, structuring recommendation options, and translating findings into an executive-ready action portfolio and decision support package.'}
      method={isFr
        ? `Approche utilisée:
- Diagnostic croisé (entretiens, ateliers collaboratifs et signaux quantitatifs)
- Priorisation multicritère pour arbitrer valeur attendue et charge de mise en œuvre
- Séquençage par capacité pour définir des vagues réalistes de déploiement
- Cadre de gouvernance et de risques au niveau programme, sans exposer de détails opératoires propres au client`
        : `Approach used:
- Triangulated diagnostics (qualitative interviews, collaborative workshops, and quantitative signals)
- Multi-criteria prioritization to rank initiatives by expected value and implementation load
- Capacity-based sequencing to define realistic deployment waves under resource constraints
- Governance and risk framing at program level, without exposing organization-specific operating details`}
      result={isFr
        ? "Le livrable final était une colonne vertébrale de transformation priorisée : diagnostic clarifié, actions à plus fort levier, et feuille de route phasée orientée exécution réaliste. Ce cas illustre ma capacité à transformer une problématique organisationnelle complexe en recommandations actionnables."
        : 'The output was a prioritized transformation backbone: a clear diagnostic, a short list of high-leverage actions, and a phased roadmap designed for operational realism. The case reinforced my ability to turn ambiguous organizational issues into decision-ready recommendations with measurable execution logic.'}
      tools={isFr
        ? [
            'Structuration de problème',
            'Entretiens parties prenantes',
            "Facilitation d'ateliers",
            'Priorisation multicritère',
            'Construction de feuille de route',
            'Conception de KPI',
            'Cartographie des risques',
          ]
        : [
            'Problem Structuring',
            'Stakeholder Interviewing',
            'Workshop Facilitation',
            'Multi-Criteria Prioritization',
            'Roadmapping',
            'KPI Design',
            'Risk Mapping',
          ]}
    />
  )
}
