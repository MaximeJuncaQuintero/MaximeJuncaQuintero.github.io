'use client'

import React from 'react'
import ProjectDetail from '@/app/components/ProjectDetail'
import CRMThumbnail from '@/app/components/CRMThumbnail'
import { useLanguage } from '@/app/context/LanguageContext'

export default function ConsultingReportsMonitorPage() {
  const { lang } = useLanguage()
  const isFr = lang === 'fr'

  return (
    <ProjectDetail
      title="Consulting Reports Monitor"
      image="/assets/projects/consulting-reports-monitor.svg"
      customThumbnail={<CRMThumbnail />}
      projectLength={isFr ? 'Projet personnel · En cours' : 'Personal project · Ongoing'}
      context={isFr
        ? "Suivre les publications McKinsey et BCG est un défi récurrent en stratégie/consulting : contenus dispersés, absence d'alerte unifiée, et temps de lecture élevé. Une synthèse IA structurée permet de rendre l'information immédiatement exploitable."
        : 'Staying current on McKinsey and BCG publications is a recurring challenge for strategy and consulting professionals. Reports are scattered across multiple sectoral pages and sitemaps, and there is no unified, automated way to be notified when new insights are published. Reading each report in full is time-consuming; a structured AI summary would make the intelligence immediately actionable.'}
      objective={isFr
        ? "Construire un pipeline 100% automatisé découvrant les nouvelles publications McKinsey (8 secteurs) et BCG (13 thèmes), enrichissant le contenu (article + PDF), générant une synthèse française structurée (~1 200 mots) et envoyant un email HTML par rapport."
        : 'Build a fully automated, zero-intervention pipeline that discovers new McKinsey (8 sectors) and BCG (13 themes) publications, enriches them with full article text and PDFs, generates a structured ~1,200-word French summary via generative AI, and delivers one HTML email per new report. Once configured, no human action is required.'}
      implementation={isFr
        ? "Conception d'un monorepo TypeScript modulaire : découverte McKinsey via RSS + scraping HTML, découverte BCG via sitemap XML annuel filtré, exécution bi-hebdomadaire sur GitHub Actions à coût infra nul avec IA free-tier et SMTP Gmail."
        : 'Designed and built a TypeScript monorepo with a modular adapter architecture: McKinsey discovery via RSS feeds and HTML scraping of sectoral insight pages; BCG discovery via the public sitemap XML filtered to the current year. The pipeline runs bi-weekly on GitHub Actions at zero infrastructure cost using free-tier AI (Gemini 2.0 Flash or Groq Llama 3.3 70B) and Gmail SMTP.'}
      method={isFr ? `Le pipeline s'exécute en 4 étapes :

1. Discovery — Les adapters collectent les nouvelles publications (McKinsey RSS/HTML, BCG sitemap XML), puis canonicalisation et déduplication URL.

2. Enrichment — Récupération HTML/PDF, nettoyage contenu et hash SHA-256 pour une seconde couche de déduplication.

3. Summarization — Génération d'une synthèse française en 9 sections (TL;DR, insights, contexte, résultats, signaux, implications, pertinence sectorielle, conclusion, source).

4. Delivery — Envoi d'un email HTML par publication via Nodemailer, avec persistance d'état SQLite et reprise automatique en cas d'échec.` : `The pipeline executes four sequential stages:

1. Discovery — Source adapters fetch new publications from McKinsey (RSS/HTML) and BCG (sitemap XML). URLs are canonicalized and deduplicated against the SQLite database.

2. Enrichment — Each new item is fetched (HTML article + PDF if detected) and cleaned. A SHA-256 content hash provides a second deduplication layer resistant to URL changes.

3. Summarization — The enriched text is passed to the configured AI provider (Gemini, Groq, or OpenAI). A structured prompt produces a 9-section French summary: TL;DR, key insights, context, results, data/signals, strategic implications, sector relevance, conclusion, and source link.

4. Delivery — One HTML email per publication is sent via Nodemailer. State is persisted in SQLite (discovered → summarized → emailed) enabling automatic retry of failed items on the next run.`}
      result={isFr
        ? "Pipeline d'intelligence pleinement opérationnel à 0 €/mois. Le cron GitHub Actions bi-hebdomadaire couvre 21 secteurs/thèmes McKinsey + BCG. La double déduplication (URL canonique + hash contenu) évite les doublons, et la reprise automatique relance au dernier état valide."
        : 'A fully operational intelligence pipeline running at 0 €/month. Bi-weekly GitHub Actions cron (Monday + Thursday, 7h UTC) covers McKinsey and BCG publications across 21 sectors and themes. The two-level deduplication (canonical URL + content hash) prevents duplicate emails even when publishers update URLs. A failed run mid-pipeline automatically resumes from the last successful state on the next execution.'}
      tools={[
        'Node.js / TypeScript',
        'GitHub Actions',
        'Prisma / SQLite',
        'Gemini 2.0 Flash',
        'Groq Llama 3.3 70B',
        'Nodemailer / SMTP',
        'HTML Scraping',
        'Sitemap XML',
        'Zod',
        'pino',
      ]}
      screenshots={[
        {
          title:       isFr ? 'En-tête email & TL;DR' : 'Email Header & TL;DR',
          image:       '/assets/projects/screenshots/crm-header.png',
          description: isFr
            ? "Chaque email démarre avec source, titre, secteur, date, temps de lecture estimé et TL;DR généré par l'IA."
            : 'Each email opens with source attribution (McKinsey · Intelligence Report), the report title, sector tag, publication date, reading time estimate, and a one-paragraph TL;DR generated by the AI.',
        },
        {
          title:       isFr ? 'Key insights — puces structurées' : 'Key Insights — structured bullets',
          image:       '/assets/projects/screenshots/crm-key-insights.png',
          description: isFr
            ? 'La section 02 extrait 4 à 6 enseignements actionnables en puces courtes pour qualifier la pertinence en moins de 30 secondes.'
            : 'Section 02 extracts the 4–6 most actionable findings as concise bullet points, allowing the reader to assess relevance in under 30 seconds.',
        },
        {
          title:       isFr ? 'Contexte & arguments centraux' : 'Context & Central Arguments',
          image:       '/assets/projects/screenshots/crm-context.png',
          description: isFr
            ? "Les sections 03 et 04 synthétisent le contexte et la thèse centrale à partir de l'article complet et du PDF quand disponible."
            : 'Sections 03 and 04 provide the structural context of the report and its central thesis, synthesised from the full article and PDF when available.',
        },
        {
          title:       isFr ? 'Données, signaux & implications stratégiques' : 'Data, Signals & Strategic Implications',
          image:       '/assets/projects/screenshots/crm-data.png',
          description: isFr
            ? 'La section 05 met en avant chiffres et signaux faibles. La section 06 traduit les résultats en implications stratégiques.'
            : 'Section 05 surfaces hard numbers and weak signals. Section 06 translates findings into strategic implications for senior decision-makers.',
        },
        {
          title:       isFr ? 'Conclusion & lien source' : 'Conclusion & Source Link',
          image:       '/assets/projects/screenshots/crm-conclusion.png',
          description: isFr
            ? "La section 08 synthétise la recommandation. La section 09 fournit l'URL source canonique avec accès direct au rapport original."
            : 'Section 08 synthesises the McKinsey/BCG recommendation framework. Section 09 provides the canonical source URL, and the CTA button links directly to the original report.',
        },
      ]}
    />
  )
}
