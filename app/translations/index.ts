export const translations = {
  en: {
    nav: {
      about:          'About',
      experience:     'Experience',
      projects:       'Projects',
      certifications: 'Certifications',
      references:     'References',
      media:          'Media',
      contact:        'Contact',
      mapOfContent:   'Map of Content',
      mapHint: {
        kicker:  'New',
        title:   'Knowledge map',
        body:    'See how sections, projects, and documents connect—interactive graph, pan & zoom.',
        cta:     'Open map',
        dismiss: 'Dismiss',
      },
    },

    hero: {
      label:      'Strategy · Consulting · Project Management',
      typewriter: 'Consulting & Project Management',
      bio:        'Business professional with expertise in strategy consulting, project management and operations. Passionate about leveraging data analytics to drive business innovation.',
      cta1:       'Learn More About Me',
      cta2:       'View Projects',
      scroll:     'Scroll to Explore',
      statLabels: ['Years Experience', 'Countries Study & Work'],
      badge1:     { prefix: 'Currently at', sub: 'MSc Strategy & Consulting' },
      badge2:     { prefix: 'Previously at', sub: 'PM Roles' },
    },

    about: {
      label:   'Background',
      heading: 'About Me',
      highlights: ['Years Experience', 'Countries (Study & Work)'],
      bio: [
        "Hello! I'm Maxime Junca-Quintero, a project manager based in France, focused on innovation, strategy consulting, and strategic data analysis.",
        "I am currently pursuing an MSc in Strategy, Consulting and Organization at ESCP Business School (2025–2026), building on a business analytics background from Dublin City University, where I honed my skills in Python, SQL, and Machine Learning. This academic foundation complements my hands-on experience managing key projects and leading strategic initiatives.",
        "My professional journey is driven by a consulting mindset (problem structuring, hypothesis-driven analysis, and stakeholder-ready recommendations) combined with advanced analytics to drive business decisions and innovation. With skills in project management, data analytics, operations management, and strategic problem-solving, I am dedicated to transforming complex data into actionable, business-ready insights.",
      ],
      skillGroups: [
        { label: 'Strategy & Management', skills: ['Project Management', 'Strategic Planning', 'Operations', 'Problem Solving', 'Consulting'] },
        { label: 'Data & Technology',     skills: ['SQL', 'Python', 'Data Analysis', 'Power BI', 'Machine Learning'] },
      ],
      education: { heading: 'Education' },
      cv: { label: 'Download CV', filename: 'CV_Maxime_Junca_Quintero.pdf' },
    },

    experience: {
      label:   'Career Path',
      heading: 'Experience & Education',
      filters: ['All', 'Work', 'Education'],
    },

    projects: {
      label:       'Portfolio',
      heading:     'Projects',
      filters:     ['All', 'Consulting', 'Project Management', 'Research'],
      tagFilterLabel: 'Filter by tags',
      clearTags:      'Clear',
      viewProject: 'View Project',
    },
    projectDetail: {
      context:          'Context',
      objective:        'Objective',
      implementation:   'Implementation',
      method:           'Method',
      result:           'Result',
      projectInfo:      'Project Info',
      pointOfContact:   'Point of Contact',
      meetingFrequency: 'Meeting Frequency',
      projectLength:    'Project Length',
      tools:            'Tools & Technologies',
      documentation:    'Documentation',
      screenshots:      'Project Screenshots',
    },
    projectLayout: {
      backToProjects: 'Back to Projects',
    },

    certifications: {
      label:    'Credentials',
      heading:  'Certifications',
      verified: 'Verified',
      tagFilterLabel: 'Filter by tags',
      clearTags:      'Clear',
      view:     'View Certificate',
    },

    references: {
      label:   'Endorsements',
      heading: 'References',
      issued:  'Issued',
      view:    'View Reference Letter',
    },

    media: {
      label:       'Thought Leadership',
      heading:     'Media & Publications',
      coAuthored:  'Co-authored',
      read:        'Read Full Report',
    },

    contact: {
      label:     "Let's Connect",
      heading:   'Get in Touch',
      bio:       "Glad to connect for professional topics—strategy, analytics, project delivery, or any questions.",
      location:  'Based in Paris, France · Past experience in Ireland & the UK',
      statusNote: 'Open to professional conversations via email & LinkedIn',
      cv:        { label: 'Download CV', filename: 'CV_Maxime_Junca_Quintero.pdf' },
      channels:  'Contact Channels',
      response:  'Typically responds within 24 hours.',
    },

    mapOfContentPage: {
      back: 'Back to portfolio',
      label: 'Knowledge Graph',
      title: 'Map of Content',
      filters: { all: 'All', maps: 'Maps', contains: 'Contains', related: 'Themes' },
      tip: 'Drag to pan · Ctrl/Cmd + wheel to zoom · Hover a line to see the relation name',
      footnoteMaps: 'maps',
      footnoteMapsDesc: '— profile → each homepage section.',
      footnoteContains: 'contains',
      footnoteContainsDesc: '— section → concrete page or file (PDF, project, or section hub).',
      footnoteRelated: 'themes',
      footnoteRelatedDesc: '— dotted links on the right only: shared tags / sectors between artefacts (data, PM, consulting, AI, product).',
      readerTitle: 'How to read this map',
      readerIntro:
        'Same idea as Obsidian’s Graph view: each box is a place you can open; each line is an explicit link, not decoration. See Obsidian’s graph plugin docs for the reference pattern.',
      readerObserveTitle: 'What you are looking at',
      readerObserve: [
        'Centre: entry point (profile) — where navigation starts.',
        'Left column: the seven main sections of the site (same anchors as on the homepage).',
        'Right column: artefacts — PDFs, individual project pages, or “hub” nodes that jump to a list (certs, references, media, contact).',
      ],
      readerSectionsTitle: 'Which sections are linked',
      readerSections: [
        'About · Experience · Projects · Certifications · References · Media · Contact — each node opens the matching section (`#about`, `#experience`, …).',
      ],
      readerDocsTitle: 'Which documents & pages are linked',
      readerDocs: [
        'PDFs: CV and NXU report (external file, new tab).',
        'Projects: Amazon KPI Library, Tenoris, Flowmap, ESCP Innovation Network, Innovation Report — each opens its project page.',
        'Hubs: “Certifications set”, “Letters of reference”, etc. — scroll targets inside the portfolio, not separate files.',
      ],
      readerGoalsTitle: 'What you probably want here',
      readerGoals: [
        'Orientation: see the skeleton of the site in one glance.',
        'Traceability: know which file or page sits under which section.',
        'Exploration: hover a node to light up its connections (like a shallow “local graph” around that note).',
      ],
    },
  },

  fr: {
    nav: {
      about:          'À propos',
      experience:     'Expérience',
      projects:       'Projets',
      certifications: 'Certifications',
      references:     'Références',
      media:          'Médias',
      contact:        'Contact',
      mapOfContent:   'Carte du contenu',
      mapHint: {
        kicker:  'Nouveau',
        title:   'Carte des liens',
        body:    'Visualisez sections, projets et documents—graphe interactif, panoramique & zoom.',
        cta:     'Ouvrir la carte',
        dismiss: 'Fermer',
      },
    },

    hero: {
      label:      'Stratégie · Conseil · Gestion de Projet',
      typewriter: 'Conseil & Gestion de Projet',
      bio:        "Professionnel du business spécialisé en conseil en stratégie, gestion de projet et opérations. Passionné par l'analyse de données pour stimuler l'innovation business.",
      cta1:       'En savoir plus',
      cta2:       'Voir les projets',
      scroll:     'Défiler pour explorer',
      statLabels: ["Ans d'expérience", 'Pays (études & travail)'],
      badge1:     { prefix: 'Actuellement à', sub: 'MSc Stratégie & Conseil' },
      badge2:     { prefix: 'Précédemment à', sub: 'Rôles PM' },
    },

    about: {
      label:   'Parcours',
      heading: 'À propos',
      highlights: ["Ans d'expérience", 'Pays (études & travail)'],
      bio: [
        "Bonjour ! Je suis Maxime Junca-Quintero, chef de projet basé en France, spécialisé dans l'innovation, le conseil en stratégie et l'analyse de données stratégiques.",
        "Je poursuis actuellement un MSc en Stratégie, Conseil et Organisation à l'ESCP Business School (2025–2026), en m'appuyant sur une formation en business analytics à la Dublin City University, où j'ai développé mes compétences en Python, SQL et Machine Learning. Cette base académique complète mon expérience pratique dans la gestion de projets clés et la conduite d'initiatives stratégiques.",
        "Mon parcours professionnel est animé par une approche conseil — structuration des problèmes, analyse par hypothèses, recommandations prêtes pour les parties prenantes — combinée à des analyses avancées pour orienter les décisions business et stimuler l'innovation. Fort de compétences en gestion de projet, analyse de données, gestion des opérations et résolution de problèmes stratégiques, je m'engage à transformer des données complexes en insights actionnables.",
      ],
      skillGroups: [
        { label: 'Stratégie & Management', skills: ['Gestion de projet', 'Planification stratégique', 'Opérations', 'Résolution de problèmes', 'Conseil'] },
        { label: 'Data & Technologie',     skills: ['SQL', 'Python', 'Analyse de données', 'Power BI', 'Machine Learning'] },
      ],
      education: { heading: 'Formation' },
      cv: { label: 'Télécharger le CV', filename: 'CV_Maxime_Junca_Quintero.pdf' },
    },

    experience: {
      label:   'Parcours',
      heading: 'Expérience & Formation',
      filters: ['Tout', 'Travail', 'Formation'],
    },

    projects: {
      label:       'Portfolio',
      heading:     'Projets',
      filters:     ['Tous', 'Conseil', 'Gestion de Projet', 'Recherche'],
      tagFilterLabel: 'Filtrer par tags',
      clearTags:      'Réinitialiser',
      viewProject: 'Voir le projet',
    },
    projectDetail: {
      context:          'Contexte',
      objective:        'Objectif',
      implementation:   'Mise en œuvre',
      method:           'Méthode',
      result:           'Résultat',
      projectInfo:      'Infos projet',
      pointOfContact:   'Contact principal',
      meetingFrequency: 'Fréquence des réunions',
      projectLength:    'Durée du projet',
      tools:            'Outils & technologies',
      documentation:    'Documentation',
      screenshots:      'Captures du projet',
    },
    projectLayout: {
      backToProjects: 'Retour aux projets',
    },

    certifications: {
      label:    'Certifications',
      heading:  'Certifications',
      verified: 'Vérifié',
      tagFilterLabel: 'Filtrer par tags',
      clearTags:      'Réinitialiser',
      view:     'Voir le certificat',
    },

    references: {
      label:   'Recommandations',
      heading: 'Références',
      issued:  'Émis en',
      view:    'Voir la lettre de recommandation',
    },

    media: {
      label:       'Contributions',
      heading:     'Médias & Publications',
      coAuthored:  'Co-rédigé',
      read:        'Lire le rapport',
    },

    contact: {
      label:     'Restons en contact',
      heading:   'Me contacter',
      bio:       "Ravi d’échanger sur des sujets professionnels — stratégie, analytics, gestion de projet, ou toute question.",
      location:  'Basé à Paris, France · Expérience passée en Irlande et au Royaume-Uni',
      statusNote: 'Ouvert aux échanges professionnels par email et LinkedIn',
      cv:        { label: 'Télécharger le CV', filename: 'CV_Maxime_Junca_Quintero.pdf' },
      channels:  'Canaux de contact',
      response:  'Répond généralement en 24 heures.',
    },

    mapOfContentPage: {
      back: 'Retour au portfolio',
      label: 'Graphe de contenu',
      title: 'Carte du contenu',
      filters: { all: 'Tout', maps: 'Relie', contains: 'Contient', related: 'Thèmes' },
      tip: 'Glisser pour déplacer · Ctrl/Cmd + molette pour zoomer · Survoler une ligne pour voir le type de lien',
      footnoteMaps: 'Relie',
      footnoteMapsDesc: '— profil → chaque section d’accueil.',
      footnoteContains: 'Contient',
      footnoteContainsDesc: '— section → page ou fichier concret (PDF, projet, ou hub de section).',
      footnoteRelated: 'thèmes',
      footnoteRelatedDesc: '— liens pointillés à droite : tags / secteurs partagés entre artefacts (data, PM, conseil, IA, produit).',
      readerTitle: 'Comment lire cette carte',
      readerIntro:
        'Même logique que le Graph d’Obsidian : chaque bloc est un lieu cliquable ; chaque trait est un lien explicite, pas un ornement. Référence : documentation du plugin Graph d’Obsidian.',
      readerObserveTitle: 'Quel aspect j’observe ?',
      readerObserve: [
        'Au centre : le point d’entrée (profil) — le départ de la navigation.',
        'Colonne de gauche : les sept grandes rubriques du site (mêmes ancres que la page d’accueil).',
        'Colonne de droite : les artefacts — PDF, pages projet, ou nœuds « hub » qui mènent à une liste (certifs, références, médias, contact).',
      ],
      readerSectionsTitle: 'Quelles sections sont liées ?',
      readerSections: [
        'À propos · Expérience · Projets · Certifications · Références · Médias · Contact — chaque nœud ouvre la section correspondante (`#about`, `#experience`, …).',
      ],
      readerDocsTitle: 'Quels documents & pages sont liés ?',
      readerDocs: [
        'PDF : CV et rapport NXU (fichier externe, nouvel onglet).',
        'Projets : Amazon KPI Library, Tenoris, Flowmap, ESCP Innovation Network, Innovation Report — chacun ouvre sa page projet.',
        'Hubs : « Certifications », « Lettres de référence », etc. — ancres dans le portfolio, pas des fichiers isolés.',
      ],
      readerGoalsTitle: 'Que veux-je voir ici ?',
      readerGoals: [
        'Orientation : la structure du site en un coup d’œil.',
        'Traçabilité : quel fichier ou page est rangé sous quelle rubrique.',
        'Exploration : survoler un nœud pour voir ses connexions (comme un « graphe local » peu profond).',
      ],
    },
  },
}

export type Translations = typeof translations['en']
export type Lang = 'en' | 'fr'
