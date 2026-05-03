'use client'

import React from 'react'
import ProjectDetail from '@/app/components/ProjectDetail'
import KnowLedgerThumbnail from '@/app/components/KnowLedgerThumbnail'
import { useLanguage } from '@/app/context/LanguageContext'

export default function KnowLedgerPage() {
  const { lang } = useLanguage()
  const isFr = lang === 'fr'

  return (
    <ProjectDetail
      title="KnowLedger"
      image="/assets/projects/screenshots/knowledger-dashboard.svg"
      customThumbnail={<KnowLedgerThumbnail />}
      projectLength={isFr ? 'Projet personnel · En cours' : 'Personal project · Ongoing'}
      context={isFr
        ? "Professionnels et étudiants accumulent des notes, rapports, liens et livrables de projets dans plusieurs outils. Avec le temps, l'information se fragmente, devient difficile à retrouver et encore plus difficile à mobiliser pour agir. Le vrai enjeu n'est pas de collecter davantage, mais de structurer la connaissance pour la rendre réutilisable dans la décision."
        : 'Professionals and students accumulate notes, reports, links, and project artifacts across multiple tools. Over time, information becomes fragmented, hard to retrieve, and difficult to convert into action. The core challenge is not collecting more content, but structuring knowledge so it can be reused for better decisions.'}
      objective={isFr
        ? 'Concevoir une plateforme de gestion des connaissances, pratique et fluide, capable de capter, organiser et valoriser les informations à forte valeur. KnowLedger vise à convertir des contenus dispersés en une base de connaissance structurée, interrogeable et orientée décision.'
        : 'Build a practical, low-friction knowledge platform that captures, organizes, and surfaces high-value information in a reusable format. KnowLedger is designed to transform scattered inputs into a structured, searchable, and decision-oriented knowledge base.'}
      implementation={isFr
        ? "KnowLedger a été conçu comme un projet modulaire combinant stockage structuré, automatisation de workflows et enrichissement assisté par IA. Le système couvre l'ensemble du cycle de la connaissance : capture, normalisation, catégorisation, récupération et synthèse. Les choix d'architecture privilégient la maintenabilité, l'extensibilité et la rapidité d'itération pour des usages personnels et professionnels."
        : 'Designed and built KnowLedger as a modular project that combines structured storage, workflow automation, and AI-assisted enrichment. The system supports end-to-end knowledge operations: capture, normalization, categorization, retrieval, and synthesis. Architecture choices prioritize maintainability, extensibility, and fast iteration for personal and professional use cases.'}
      method={isFr ? `La méthode s'appuie sur 4 étapes :

1. Capture — Ingestion des notes, liens et intrants projets issus des flux de travail quotidiens.

2. Structuration — Normalisation des contenus en entités cohérentes (thèmes, sources, projets, insights) avec métadonnées et tags.

3. Enrichissement — Génération de synthèses concises, points clés et liens contextuels entre éléments de connaissance.

4. Exploitation — Interrogation de la base pour produire rapidement des sorties orientées décision (briefs, recaps, notes projet, insights stratégiques).` : `The method follows four sequential steps:

1. Capture — Ingest notes, links, and project inputs from daily workstreams.

2. Structure — Normalize content into consistent entities (topics, sources, projects, insights) with metadata and tags.

3. Enrich — Generate concise summaries, key takeaways, and cross-links to related knowledge items.

4. Retrieve & Use — Query the knowledge base to quickly produce decision-ready outputs (briefs, recaps, project notes, strategic insights).`}
      result={isFr
        ? "KnowLedger établit une source unique de vérité pour l'apprentissage continu et l'exécution de projets. Au lieu de relire des contenus bruts, l'utilisateur accède à des insights structurés, tracés par source, et réutilisables immédiatement. Le projet démontre comment une architecture légère de knowledge management peut accélérer la qualité, la clarté et la vitesse du travail stratégique."
        : 'KnowLedger creates a single source of truth for ongoing learning and project execution. Instead of re-reading raw material, the user accesses structured insights with clear context, source traceability, and reusable outputs. The project demonstrates how a lightweight knowledge architecture can improve speed, clarity, and quality of strategic work.'}
      tools={[
        'Daily Journaling',
        'Knowledge Graph',
        'Archiving',
        'Idea Linking',
      ]}
      screenshots={[
        {
          title:       isFr ? 'Dashboard de connaissance' : 'Knowledge Dashboard',
          image:       '/assets/projects/screenshots/knowledger-dashboard.svg',
          description: isFr
            ? "Vue d'ensemble opérationnelle du système avec accès rapide aux entrées récentes, imports et travaux en cours."
            : 'Operational overview of the system with quick access to recent entries, imports, and ongoing work.',
        },
        {
          title:       isFr ? 'Vue de note structuree' : 'Structured Note View',
          image:       '/assets/projects/screenshots/knowledger-structured-note-view.png',
          description: isFr
            ? 'Présentation normalisée des notes avec hiérarchie, contexte, tags et liens reliés pour faciliter la réutilisation.'
            : 'Normalized note presentation with hierarchy, context, tags, and related links to support fast reuse.',
        },
        {
          title:       isFr ? 'Recherche et récupération' : 'Search & Retrieval',
          image:       '/assets/projects/screenshots/knowledger-search-retrieval.png',
          description: isFr
            ? "Recherche ciblée multi-contenus pour retrouver rapidement l'information pertinente et l'activer en situation."
            : 'Targeted cross-content search to retrieve relevant information quickly and activate it in context.',
        },
        {
          title:       isFr ? 'Graphe de liens / éléments reliés' : 'Cross-link Graph / Related Items',
          image:       '/assets/projects/screenshots/knowledger-cross-link-graph.png',
          description: isFr
            ? 'Visualisation des relations entre notes et ressources pour soutenir la navigation contextuelle.'
            : 'Relationship graph across notes and resources to support contextual navigation.',
        },
      ]}
      screenshotsLayout="large"
    />
  )
}
