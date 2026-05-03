export default function KnowLedgerThumbnail({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 630"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      style={{ width: '100%', height: '100%', display: 'block' }}
      aria-label="KnowLedger"
    >
      <defs>
        <linearGradient id="kl-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#030303" />
          <stop offset="52%" stopColor="#0b0b0b" />
          <stop offset="100%" stopColor="#141414" />
        </linearGradient>
        <radialGradient id="kl-glow-main" cx="74%" cy="26%" r="70%">
          <stop offset="0%" stopColor="#f8fafc" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#f8fafc" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="kl-glow-bottom" cx="82%" cy="84%" r="45%">
          <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="kl-accent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
        <pattern id="kl-grid" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
          <path d="M36 0H0V36" fill="none" stroke="#27272a" strokeWidth="1" opacity="0.45" />
        </pattern>
        <filter id="kl-node-glow" x="-200%" y="-200%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="2.6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="1200" height="630" fill="url(#kl-bg)" />
      <rect width="1200" height="630" fill="url(#kl-grid)" />
      <rect width="1200" height="630" fill="url(#kl-glow-main)" />
      <rect width="1200" height="630" fill="url(#kl-glow-bottom)" />

      <rect x="70" y="86" width="1060" height="458" rx="18" fill="#0b0b0c" stroke="#2a2a2c" strokeWidth="1.5" />
      <rect x="70" y="86" width="1060" height="54" rx="18" fill="#111113" />
      <circle cx="102" cy="112.5" r="5" fill="#3f3f46" />
      <circle cx="120" cy="112.5" r="5" fill="#3f3f46" />
      <circle cx="138" cy="112.5" r="5" fill="#3f3f46" />
      <text x="1098" y="117" textAnchor="end" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#a1a1aa">
        KNOWLEDGE WORKSPACE
      </text>

      {/* Deep graph constellation */}
      <g opacity="0.58" stroke="#a1a1aa" strokeWidth="1.35">
        <line x1="734" y1="190" x2="782" y2="226" />
        <line x1="782" y1="226" x2="844" y2="206" />
        <line x1="844" y1="206" x2="903" y2="244" />
        <line x1="903" y1="244" x2="970" y2="222" />
        <line x1="970" y1="222" x2="1032" y2="254" />
        <line x1="782" y1="226" x2="806" y2="282" />
        <line x1="806" y1="282" x2="870" y2="274" />
        <line x1="870" y1="274" x2="940" y2="296" />
        <line x1="940" y1="296" x2="1010" y2="284" />
        <line x1="806" y1="282" x2="770" y2="340" />
        <line x1="770" y1="340" x2="840" y2="352" />
        <line x1="840" y1="352" x2="906" y2="336" />
        <line x1="906" y1="336" x2="980" y2="356" />
        <line x1="980" y1="356" x2="1042" y2="334" />
        <line x1="734" y1="190" x2="806" y2="282" />
        <line x1="844" y1="206" x2="870" y2="274" />
        <line x1="970" y1="222" x2="940" y2="296" />
        <line x1="1032" y1="254" x2="1010" y2="284" />
        <line x1="870" y1="274" x2="840" y2="352" />
        <line x1="940" y1="296" x2="906" y2="336" />
        <line x1="1010" y1="284" x2="980" y2="356" />
        <line x1="770" y1="340" x2="906" y2="336" />
        <line x1="840" y1="352" x2="980" y2="356" />
        <line x1="782" y1="226" x2="940" y2="296" />
        <line x1="844" y1="206" x2="1010" y2="284" />
        <line x1="903" y1="244" x2="840" y2="352" />
        <line x1="970" y1="222" x2="906" y2="336" />
      </g>

      <g fill="#f4f4f5" filter="url(#kl-node-glow)">
        <circle cx="734" cy="190" r="4.6" />
        <circle cx="782" cy="226" r="4.2" />
        <circle cx="844" cy="206" r="4.4" />
        <circle cx="903" cy="244" r="4.2" />
        <circle cx="970" cy="222" r="4.3" />
        <circle cx="1032" cy="254" r="4.1" />
        <circle cx="806" cy="282" r="4.4" />
        <circle cx="870" cy="274" r="4.7" />
        <circle cx="940" cy="296" r="4.6" />
        <circle cx="1010" cy="284" r="4.2" />
        <circle cx="770" cy="340" r="4.1" />
        <circle cx="840" cy="352" r="4.4" />
        <circle cx="906" cy="336" r="4.4" />
        <circle cx="980" cy="356" r="4.2" />
        <circle cx="1042" cy="334" r="4.1" />
      </g>

      <rect x="116" y="183" width="4" height="276" rx="2" fill="url(#kl-accent)" />
      <text x="136" y="214" fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif" fontSize="14" fontWeight="700" fill="#e5e7eb" letterSpacing="2">
        STRATEGY KNOWLEDGE SYSTEM
      </text>
      <text x="136" y="282" fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif" fontSize="66" fontWeight="800" fill="#fafafa">
        KnowLedger
      </text>
      <text x="136" y="334" fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif" fontSize="20" fontWeight="500" fill="#a1a1aa">
        Strategy, projects, and decision-ready insights
      </text>

      <rect x="136" y="370" width="128" height="32" rx="16" fill="#121214" stroke="#3f3f46" />
      <text x="200" y="390.5" textAnchor="middle" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="11.5" fontWeight="700" fill="#e4e4e7">Daily Journaling</text>
      <rect x="274" y="370" width="130" height="32" rx="16" fill="#121214" stroke="#3f3f46" />
      <text x="339" y="390.5" textAnchor="middle" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="11.5" fontWeight="700" fill="#e4e4e7">Knowledge Graph</text>
      <rect x="414" y="370" width="86" height="32" rx="16" fill="#121214" stroke="#3f3f46" />
      <text x="457" y="390.5" textAnchor="middle" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="11.5" fontWeight="700" fill="#e4e4e7">Archiving</text>
      <rect x="510" y="370" width="100" height="32" rx="16" fill="#121214" stroke="#3f3f46" />
      <text x="560" y="390.5" textAnchor="middle" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="11.5" fontWeight="700" fill="#e4e4e7">Idea Linking</text>

      <rect x="136" y="420" width="406" height="86" rx="10" fill="#111113" stroke="#2a2a2c" />
      <text x="156" y="449" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="12" fontWeight="700" fill="#e5e7eb" letterSpacing="1.2">
        DECISION-READY FLOW
      </text>
      <text x="156" y="474" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="12.5" fill="#d4d4d8">
        Capture → Structure → Enrich → Retrieve & Use
      </text>
      <text x="156" y="493" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="11" fill="#a1a1aa">
        Multi-source ingestion · linked insights · reusable strategic outputs
      </text>
    </svg>
  )
}
