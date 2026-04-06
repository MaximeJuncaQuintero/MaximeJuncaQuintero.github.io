'use client'

import React from 'react'
import ProjectDetail from '@/app/components/ProjectDetail'
import { useLanguage } from '@/app/context/LanguageContext'

export default function FlowmapPage() {
  const { lang } = useLanguage()
  const isFr = lang === 'fr'

  return (
    <ProjectDetail
      title="Flowmap"
      image="/assets/projects/TA_Logo.png"
      logoStyle="object-contain bg-white p-4 scale-150"
      poc="Tenoris Analytics Team"
      meetingFrequency={isFr ? 'Hebdomadaire' : 'Weekly'}
      projectLength={isFr ? '3 mois' : '3 months'}
      context={isFr
        ? "Le marché des outils de pilotage projet est en forte croissance, mais les startups et équipes MVP font face à un même problème : suivre l'avancement réel sans mobilisation manuelle continue. Les solutions existantes restent dépendantes de mises à jour humaines."
        : 'The global project management and roadmap tracking tools market is experiencing rapid growth, driven by enterprise digitalization, SaaS growth, and the need to accelerate time-to-market. However, startups, tech SMEs, and MVP-stage teams face a recurring problem: the lack of automated solutions to track real project progress without mobilizing significant internal resources. Existing tools remain dependent on manual or semi-automated input, generating time losses, errors, and lack of visibility for stakeholders.'}
      objective={isFr
        ? "Lancer un SaaS capable d'automatiser le suivi d'avancement des features via une chaîne d'agents IA analysant le code à chaque push. Une fois configuré, le système produit des reportings automatiques, détecte les régressions et mappe dynamiquement roadmap et code."
        : 'To launch an innovative SaaS service that fully automates feature progress tracking against the roadmap through an AI agent chain analyzing code at each push. After initial configuration (mapping features to roadmap), the solution operates without regular manual input from developers, providing automated reporting of progress status, regression detection, dynamic mapping between product roadmap and source code, and seamless integration with GitHub and major project management tools.'}
      implementation={isFr
        ? "Pilotage du développement d'une plateforme SaaS complète pour le suivi automatisé de l'avancement via analyse de code IA, avec intégration GitHub et outils de gestion de projet."
        : 'Led the development of a comprehensive SaaS platform that automates project progress tracking through AI-powered code analysis. The system integrates with GitHub repositories and project management tools to provide real-time insights into feature development progress without requiring manual updates from development teams.'}
      method={isFr
        ? "Conception d'une chaîne d'agents IA analysant les changements de code à chaque push, mise en place de dashboards de reporting automatisé, mapping dynamique roadmap-code, intégrations outillées, et modèle d'abonnement adaptable aux cycles de production."
        : 'Developed an AI agent chain that analyzes code changes at each push, implemented automated progress reporting with visual dashboards, created dynamic mapping between product roadmap and source code, built seamless integrations with GitHub and project management tools, and designed a flexible subscription model adapted to production cycles.'}
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
          title: isFr ? 'Synthèse exécutive Flowmap' : 'Flowmap Executive Summary',
          link: "/assets/docs/Flowmap_Executive_Summary.pdf"
        }
      ]}
      screenshots={[
        {
          title: isFr ? 'Page de connexion' : 'Login Page',
          image: "/assets/projects/screenshots/Login_page.png",
          description: isFr ? 'Interface d’authentification sécurisée des utilisateurs Flowmap' : "Secure authentication interface for Flowmap users"
        },
        {
          title: isFr ? "Page d'onboarding" : 'Onboarding Page',
          image: "/assets/projects/screenshots/Onboarding_page.png",
          description: isFr ? 'Parcours de démarrage et configuration initiale' : "User onboarding and initial setup process"
        },
        {
          title: "Dashboard",
          image: "/assets/projects/screenshots/Dashboard_page.png",
          description: isFr ? "Dashboard principal avec vue d'ensemble et métriques clés" : "Main dashboard showing project overview and key metrics"
        },
        {
          title: isFr ? 'Page projets' : 'Projects Page',
          image: "/assets/projects/screenshots/Projects_page.png",
          description: isFr ? 'Interface de gestion et organisation des projets' : "Project management and organization interface"
        },
        {
          title: isFr ? 'Page roadmap' : 'Roadmap Page',
          image: "/assets/projects/screenshots/Roadmap_page.png",
          description: isFr ? 'Planification et suivi visuel de la roadmap' : "Visual roadmap planning and tracking"
        },
        {
          title: isFr ? 'Statut des fonctionnalités' : 'Features Status Page',
          image: "/assets/projects/screenshots/Features_Status_page.png",
          description: isFr ? "Suivi détaillé de l'avancement des fonctionnalités" : "Detailed feature progress tracking and status monitoring"
        }
      ]}
    />
  )
} 