'use client'

import React from 'react'
import ProjectDetail from '@/app/components/ProjectDetail'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { useLanguage } from '@/app/context/LanguageContext'

export default function KITSPage() {
  const { lang } = useLanguage()
  const isFr = lang === 'fr'

  return (
    <>
      <ProjectDetail
        title="KITS - Appliance Kit Service"
        image="/assets/projects/kits-full.jpg"
        logoStyle="object-contain"
        context={isFr
          ? "Le marché de l'électroménager présente plusieurs difficultés, surtout pour le locatif : coût initial élevé, contraintes de dimensions, multiplicité des fournisseurs, décote rapide et complexité logistique lors des changements de locataire. KITS adresse ces points via des packs adaptés, une maintenance simplifiée et un système de reprise."
          : 'The appliance market presents several challenges for consumers, particularly those in rental properties. These include high initial investment costs, difficulty finding appliances with specific dimensions, dealing with multiple suppliers, rapid depreciation, and logistical complications during tenant changes. Our service addresses these issues by offering tailored appliance kits, simplified maintenance, and a buyback system.'}
        objective={isFr
          ? "Construire un service complet de kits électroménagers personnalisés pour logements locatifs, avec options d'achat flexibles et système de reprise, afin de simplifier l'équipement des biens tout en réduisant coûts et impact environnemental."
          : 'To create a comprehensive service that provides customized appliance kits for rental properties, with flexible purchase options and a buyback system, simplifying the process of equipping and maintaining rental units while reducing costs and environmental impact.'}
        implementation={isFr
          ? "J'ai développé un MVP qui aide les utilisateurs à trouver des appareils selon des contraintes de dimensions, accéder à des options de financement et bénéficier d'un système de reprise. La plateforme permet de configurer des kits, estimer les coûts et centraliser la livraison."
          : 'I developed an MVP for a home appliance service that helps buyers find appliances with complex dimensions, access financing, and benefit from a buyback system. The platform enables custom kit configuration, cost estimation, and consolidated delivery to save money.'}
        method={isFr
          ? "Le service combine des kits selon le type de bien, des modes d'acquisition flexibles (achat, leasing, abonnement), un dispositif de reprise/reconditionnement, une plateforme digitale de gestion et une logistique intégrée (livraison, installation, collecte)."
          : 'The service offers tailored appliance kits for different property types, flexible purchasing options (direct purchase, leasing, subscription), a buyback and reconditioning system for used appliances, a digital platform for equipment management, and integrated logistics for delivery, installation, and collection.'}
        result={isFr
          ? "Le MVP KITS démontre la capacité à configurer des kits selon des contraintes d'espace exactes, recommander des produits compatibles, calculer coûts totaux/mensuels, estimer les économies vs achats séparés, et adapter les suggestions selon le type de logement."
          : "The KITS MVP successfully demonstrates the ability to configure kits based on exact space constraints, suggest products that fit specific dimensions, calculate total and monthly costs, estimate savings compared to separate purchases, and adapt suggestions based on property type (with features like 'Ideal for Studio' badges)."}
        tools={['Flask', 'Python', 'SQLAlchemy', 'Jinja2']}
        documentation={[
          { title: isFr ? 'Synthèse exécutive' : 'Executive Summary', link: '/assets/docs/KITS - Executive Summary.pdf' },
        ]}
        screenshots={[
          {
            title:       isFr ? "Page d'accueil" : 'Homepage',
            image:       '/assets/projects/screenshots/kits-homepage.jpg',
            description: isFr
              ? 'La page d’accueil présente la proposition de valeur et les fonctionnalités clés.'
              : 'The main landing page showcases the service value proposition and key features.',
          },
          {
            title:       isFr ? 'Configurateur électroménager' : 'Appliance Configurator',
            image:       '/assets/projects/screenshots/kits-config.jpg',
            description: isFr
              ? 'Le configurateur permet de sélectionner les appareils selon des contraintes de dimensions.'
              : 'The configurator lets users select appliances based on specific space constraints.',
          },
          {
            title:       isFr ? 'Dashboard administrateur' : 'Admin Dashboard',
            image:       '/assets/projects/screenshots/kits-dashboard.jpg',
            description: isFr
              ? 'Le dashboard donne aux administrateurs les outils de gestion produits, commandes et clients.'
              : 'The dashboard provides administrators with tools to manage products, orders, and customers.',
          },
        ]}
      />

      {/* Live demo link — new design system */}
      <div className="px-4 sm:px-6 md:px-8 pb-10">
        <div
          className="rounded-2xl border p-6"
          style={{ background: 'var(--surface-2)', borderColor: 'var(--border)' }}
        >
          <h3 className="text-sm font-bold mb-1" style={{ color: 'var(--text)' }}>{isFr ? 'Démo live' : 'Live Demo'}</h3>
          <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
            {isFr
              ? "Explore le MVP en ligne. Le premier chargement peut prendre jusqu'à 50 secondes si le service n'a pas été utilisé récemment (cold start free-tier)."
              : "Explore the live MVP. The initial load may take up to 50 seconds if the service hasn't been accessed recently (free-tier cold start)."}
          </p>
          <Link
            href="https://kits-electromenager.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            style={{ background: 'var(--accent)' }}
          >
            {isFr ? 'Visiter la démo KITS' : 'Visit KITS Demo'}
            <FaExternalLinkAlt className="text-xs" />
          </Link>
        </div>
      </div>
    </>
  )
}
