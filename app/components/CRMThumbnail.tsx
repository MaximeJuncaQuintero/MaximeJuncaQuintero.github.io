export default function CRMThumbnail({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 630"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      style={{ width: '100%', height: '100%', display: 'block' }}
      aria-label="Consulting Reports Monitor"
    >
      <defs>
        <linearGradient id="crm-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#070809" />
          <stop offset="52%" stopColor="#0c0e12" />
          <stop offset="100%" stopColor="#12151a" />
        </linearGradient>
        <linearGradient id="crm-bar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a7b9d8" />
          <stop offset="100%" stopColor="#8ea0be" />
        </linearGradient>
        <pattern id="crm-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="#52525b" opacity="0.35" />
        </pattern>
        <filter id="crm-shadow" x="-5%" y="-5%" width="115%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="#000000" floodOpacity="0.35" />
        </filter>
      </defs>

      <rect width="1200" height="630" fill="url(#crm-bg)" />
      <rect width="1200" height="630" fill="url(#crm-dots)" />

      <rect x="96" y="200" width="4" height="230" fill="url(#crm-bar)" rx="2" />

      <text
        x="120"
        y="240"
        fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
        fontSize="13"
        fontWeight="700"
        letterSpacing="3"
        fill="#a7b9d8"
      >
        McKINSEY &amp; BCG INTELLIGENCE
      </text>

      <text x="120" y="310" fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif" fontSize="64" fontWeight="800" fill="#d7dde9">
        Reports
      </text>
      <text x="120" y="385" fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif" fontSize="64" fontWeight="800" fill="#a7b9d8">
        Monitoring
      </text>

      <text x="120" y="430" fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif" fontSize="18" fontWeight="400" fill="#99a3b6">
        Automated · AI-powered · Zero-cost
      </text>

      <rect x="120" y="455" width="130" height="32" rx="16" fill="#191c23" stroke="#3f4149" strokeWidth="1.5" />
      <text x="185" y="476" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="12" fontWeight="600" fill="#e4e7eb" textAnchor="middle">
        TypeScript
      </text>

      <rect x="264" y="455" width="160" height="32" rx="16" fill="#191c23" stroke="#3f4149" strokeWidth="1.5" />
      <text x="344" y="476" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="12" fontWeight="600" fill="#e4e7eb" textAnchor="middle">
        GitHub Actions
      </text>

      <rect x="438" y="455" width="110" height="32" rx="16" fill="#1c2030" stroke="#4a5568" strokeWidth="1.5" />
      <text x="493" y="476" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="12" fontWeight="600" fill="#c2cde0" textAnchor="middle">
        Gemini AI
      </text>

      <rect x="562" y="455" width="90" height="32" rx="16" fill="#1c2030" stroke="#4a5568" strokeWidth="1.5" />
      <text x="607" y="476" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="12" fontWeight="600" fill="#c2cde0" textAnchor="middle">
        Groq
      </text>

      <rect x="700" y="140" width="400" height="350" rx="16" fill="#121418" stroke="#2a2d35" strokeWidth="1.5" filter="url(#crm-shadow)" />
      <rect x="700" y="140" width="400" height="4" rx="2" fill="url(#crm-bar)" />

      <text x="726" y="183" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="9" fontWeight="700" fill="#a7b9d8" letterSpacing="2">
        McKINSEY INTELLIGENCE REPORT
      </text>
      <text x="1074" y="183" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="9" fontWeight="500" fill="#71717a" textAnchor="end">
        ANALYSE IA
      </text>

      <text x="726" y="218" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="18" fontWeight="800" fill="#d7dde9">
        Merchants Unleashed:
      </text>
      <text x="726" y="242" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="18" fontWeight="800" fill="#d7dde9">
        AI Transforms Retail
      </text>

      <rect x="726" y="258" width="52" height="22" rx="11" fill="#1f232c" stroke="#3f4149" strokeWidth="1" />
      <text x="752" y="274" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="9" fontWeight="700" fill="#a1a1aa" textAnchor="middle">
        RETAIL
      </text>

      <rect x="788" y="258" width="82" height="22" rx="11" fill="#1f232c" stroke="#3f4149" strokeWidth="1" />
      <text x="829" y="274" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="9" fill="#99a3b6" textAnchor="middle">
        18 mars 2026
      </text>

      <line x1="726" y1="294" x2="1074" y2="294" stroke="#2f3540" strokeWidth="1" />

      <rect x="726" y="312" width="3" height="52" rx="1.5" fill="#a7b9d8" />
      <text x="738" y="327" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="9" fontWeight="600" fill="#a7b9d8">
        01
      </text>
      <text x="738" y="343" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="12" fontWeight="700" fill="#d7dde9">
        TL;DR
      </text>
      <text x="738" y="358" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="9" fill="#99a3b6">
        McKinsey identifie une fenêtre d&apos;opportunité de trois ans...
      </text>

      <rect x="726" y="378" width="3" height="52" rx="1.5" fill="#8ea0be" />
      <text x="738" y="393" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="9" fontWeight="600" fill="#8ea0be">
        02
      </text>
      <text x="738" y="409" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="12" fontWeight="700" fill="#d7dde9">
        Ce qu&apos;il faut retenir
      </text>
      <text x="738" y="424" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="9" fill="#99a3b6">
        L&apos;IA générative réduit les coûts de création de contenu...
      </text>

      <rect x="726" y="455" width="180" height="26" rx="13" fill="#a7b9d8" />
      <text x="816" y="472" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="10" fontWeight="600" fill="#070809" textAnchor="middle">
        Lire le rapport
      </text>
    </svg>
  )
}
