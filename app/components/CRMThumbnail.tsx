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
          <stop offset="0%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#F1F5F9" />
        </linearGradient>
        <linearGradient id="crm-bar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
        <pattern id="crm-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="#CBD5E1" opacity="0.5" />
        </pattern>
        <filter id="crm-shadow" x="-5%" y="-5%" width="115%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="#0F172A" floodOpacity="0.08" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="1200" height="630" fill="url(#crm-bg)" />
      <rect width="1200" height="630" fill="url(#crm-dots)" />

      {/* Left accent bar */}
      <rect x="96" y="200" width="4" height="230" fill="url(#crm-bar)" rx="2" />

      {/* Source label */}
      <text x="120" y="240" fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif" fontSize="13" fontWeight="700" letterSpacing="3" fill="#1D4ED8">
        McKINSEY &amp; BCG INTELLIGENCE
      </text>

      {/* Main title */}
      <text x="120" y="310" fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif" fontSize="64" fontWeight="800" fill="#0F172A">Reports</text>
      <text x="120" y="385" fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif" fontSize="64" fontWeight="800" fill="#1D4ED8">Monitoring</text>

      {/* Subtitle */}
      <text x="120" y="430" fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif" fontSize="18" fontWeight="400" fill="#64748B">
        Automated · AI-powered · Zero-cost
      </text>

      {/* Tech pills */}
      <rect x="120" y="455" width="130" height="32" rx="16" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1.5" />
      <text x="185" y="476" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="12" fontWeight="600" fill="#1D4ED8" textAnchor="middle">TypeScript</text>

      <rect x="264" y="455" width="160" height="32" rx="16" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1.5" />
      <text x="344" y="476" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="12" fontWeight="600" fill="#1D4ED8" textAnchor="middle">GitHub Actions</text>

      <rect x="438" y="455" width="110" height="32" rx="16" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1.5" />
      <text x="493" y="476" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="12" fontWeight="600" fill="#6366F1" textAnchor="middle">Gemini AI</text>

      <rect x="562" y="455" width="90" height="32" rx="16" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1.5" />
      <text x="607" y="476" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="12" fontWeight="600" fill="#6366F1" textAnchor="middle">Groq</text>

      {/* Right email preview card */}
      <rect x="700" y="140" width="400" height="350" rx="16" fill="white" stroke="#E2E8F0" strokeWidth="1.5" filter="url(#crm-shadow)" />
      <rect x="700" y="140" width="400" height="4" rx="2" fill="url(#crm-bar)" />

      <text x="726" y="183" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="9" fontWeight="700" fill="#1D4ED8" letterSpacing="2">McKINSEY INTELLIGENCE REPORT</text>
      <text x="1074" y="183" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="9" fontWeight="500" fill="#94A3B8" textAnchor="end">ANALYSE IA</text>

      <text x="726" y="218" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="18" fontWeight="800" fill="#0F172A">Merchants Unleashed:</text>
      <text x="726" y="242" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="18" fontWeight="800" fill="#0F172A">AI Transforms Retail</text>

      <rect x="726" y="258" width="52" height="22" rx="11" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1" />
      <text x="752" y="274" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="9" fontWeight="700" fill="#475569" textAnchor="middle">RETAIL</text>

      <rect x="788" y="258" width="82" height="22" rx="11" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1" />
      <text x="829" y="274" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="9" fill="#64748B" textAnchor="middle">18 mars 2026</text>

      <line x1="726" y1="294" x2="1074" y2="294" stroke="#E2E8F0" strokeWidth="1" />

      <rect x="726" y="312" width="3" height="52" rx="1.5" fill="#1D4ED8" />
      <text x="738" y="327" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="9" fontWeight="600" fill="#1D4ED8">01</text>
      <text x="738" y="343" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="12" fontWeight="700" fill="#0F172A">TL;DR</text>
      <text x="738" y="358" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="9" fill="#64748B">McKinsey identifie une fenêtre d'opportunité de trois ans...</text>

      <rect x="726" y="378" width="3" height="52" rx="1.5" fill="#6366F1" />
      <text x="738" y="393" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="9" fontWeight="600" fill="#6366F1">02</text>
      <text x="738" y="409" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="12" fontWeight="700" fill="#0F172A">Ce qu'il faut retenir</text>
      <text x="738" y="424" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="9" fill="#64748B">L'IA générative réduit les coûts de création de contenu...</text>

      <rect x="726" y="455" width="180" height="26" rx="13" fill="#1D4ED8" />
      <text x="816" y="472" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="10" fontWeight="600" fill="white" textAnchor="middle">Lire le rapport</text>
    </svg>
  )
}
