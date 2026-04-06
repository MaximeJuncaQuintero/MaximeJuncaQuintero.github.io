'use client'

import React from 'react'
import {
  FaBriefcase, FaCode, FaGraduationCap, FaTrophy,
  FaChartLine, FaEnvelope, FaLightbulb, FaQuestion,
  FaMapMarkerAlt, FaGlobe,
} from 'react-icons/fa'

interface SuggestedQuestion {
  text: string
  handler: () => void
  icon: React.ReactNode
}

class ActionProvider {
  createChatBotMessage: any
  setState: any
  createClientMessage: any

  constructor(createChatBotMessage: any, setStateFunc: any, createClientMessage: any) {
    this.createChatBotMessage = createChatBotMessage
    this.setState = setStateFunc
    this.createClientMessage = createClientMessage
  }

  /* ── Core state updater ──────────────────────────────────────────────────── */
  updateChatbotState = (message: any) => {
    this.setState((prev: any) => ({ ...prev, messages: [...prev.messages, message] }))
  }

  /* ── Reply helper ────────────────────────────────────────────────────────── */
  reply = (text: string, widget?: string, suggestions?: SuggestedQuestion[]) => {
    const msg = this.createChatBotMessage(text, widget ? { widget } : {})
    this.updateChatbotState(msg)
    if (suggestions?.length) {
      const follow = this.createChatBotMessage('Explore more:', {
        widget: 'suggestedQuestions',
        payload: { questions: suggestions },
      })
      this.updateChatbotState(follow)
    }
  }

  /* ── Shared suggestion sets ──────────────────────────────────────────────── */
  get expSuggestions(): SuggestedQuestion[] {
    return [
      { text: 'What skills does he have?',      handler: this.handleSkillsRequest,      icon: <FaChartLine /> },
      { text: 'What projects has he done?',      handler: this.handleProjectsRequest,    icon: <FaCode /> },
      { text: "What are his achievements?",      handler: this.handleAchievementsRequest,icon: <FaTrophy /> },
    ]
  }

  get eduSuggestions(): SuggestedQuestion[] {
    return [
      { text: 'What is his work experience?',   handler: this.handleExperienceRequest,  icon: <FaBriefcase /> },
      { text: 'What skills does he have?',      handler: this.handleSkillsRequest,      icon: <FaChartLine /> },
      { text: 'How can I contact Maxime?',      handler: this.handleContactRequest,     icon: <FaEnvelope /> },
    ]
  }

  /* ════════════════════════════════════════════════════════════════════════
     SPECIFIC FACT HANDLERS
  ════════════════════════════════════════════════════════════════════════ */

  handleYearsExperience = () => {
    this.reply(
      "Maxime has ~3 years of professional experience across two Amazon roles and his time as a co-founder:\n\n• Operations Manager — Amazon Hub (5 months, 2024)\n• PM Intern — Amazon Transportation Services (6 months, 2023)\n• Founder — Tenoris Analytics (~14 months, 2021–2023)\n\nHe is currently completing his MSc at ESCP Business School (2025–2026).",
      undefined,
      this.expSuggestions
    )
  }

  handleCountries = () => {
    this.reply(
      "Maxime has studied or worked in 3 countries:\n\n• 🇫🇷 France — NEOMA Business School, ESCP, Amazon Hub (Paris)\n• 🇮🇪 Ireland — Dublin City University (Business Analytics)\n• 🇬🇧 UK — Amazon Transportation Services (London)",
      undefined,
      this.expSuggestions
    )
  }

  handleNationality = () => {
    this.reply(
      "Maxime is French. He grew up in France, studied in France and Ireland, and worked in the UK. He is a native French speaker and fluent in English.",
      undefined,
      [
        { text: 'Where is he based now?',        handler: this.handleLocation,           icon: <FaMapMarkerAlt /> },
        { text: 'What languages does he speak?', handler: this.handleLanguages,          icon: <FaGlobe /> },
        { text: 'What is his work experience?',  handler: this.handleExperienceRequest,  icon: <FaBriefcase /> },
      ]
    )
  }

  handleLocation = () => {
    this.reply(
      "Maxime is currently based in Paris, France, where he is completing his MSc in Strategy, Consulting & Organisation at ESCP Business School (graduating Dec 2026).",
      undefined,
      [
        { text: 'How can I contact him?',         handler: this.handleContactRequest,     icon: <FaEnvelope /> },
        { text: 'Professional outreach?',       handler: this.handleProfessionalOutreach, icon: <FaQuestion /> },
        { text: 'What is his background?',        handler: this.handleExperienceRequest,  icon: <FaBriefcase /> },
      ]
    )
  }

  /** Neutral: not a job-search channel; still welcomes substantive professional contact */
  handleProfessionalOutreach = () => {
    this.reply(
      "This portfolio is not where Maxime advertises an active job search. If you have a professional reason to connect—speaking, collaboration, a substantive question about his work, or similar—LinkedIn and email are the right channels.",
      undefined,
      [
        { text: 'How can I contact him?',  handler: this.handleContactRequest,    icon: <FaEnvelope /> },
        { text: 'What is his experience?', handler: this.handleExperienceRequest, icon: <FaBriefcase /> },
      ]
    )
  }

  handleLanguages = () => {
    this.reply(
      "Maxime speaks 2 languages:\n\n• French — Native\n• English — Fluent (studied and worked in Ireland & the UK)",
      undefined,
      [
        { text: 'Where has he lived/worked?', handler: this.handleCountries,       icon: <FaGlobe /> },
        { text: 'What is his education?',     handler: this.handleEducationRequest, icon: <FaGraduationCap /> },
      ]
    )
  }

  handleAge = () => {
    this.reply(
      "Maxime was born in 1998. He began his BBA at NEOMA in 2019 and is currently pursuing his MSc at ESCP (2025–2026).",
      undefined,
      this.eduSuggestions
    )
  }

  handleSalary = () => {
    this.reply(
      "That is not covered here. If it is relevant to a direct professional conversation with Maxime, use LinkedIn or email.",
      undefined,
      [{ text: 'How can I contact him?', handler: this.handleContactRequest, icon: <FaEnvelope /> }]
    )
  }

  handleCV = () => {
    this.reply(
      "You can download Maxime's CV directly from the About section of this portfolio (click the CV card), or reach out via LinkedIn / email to request it.",
      undefined,
      [{ text: 'How can I contact him?', handler: this.handleContactRequest, icon: <FaEnvelope /> }]
    )
  }

  /* ════════════════════════════════════════════════════════════════════════
     SPECIFIC PROJECT HANDLERS
  ════════════════════════════════════════════════════════════════════════ */

  handleProjectCRM = () => {
    this.reply(
      "Consulting Reports Monitor is Maxime's latest personal project:\n\n• Fully automated pipeline monitoring McKinsey (8 sectors) & BCG (13 themes) publications\n• Generates structured ~1,200-word French AI summaries per new report (Gemini / Groq)\n• Delivers one HTML email per report via GitHub Actions cron — 0 €/month cost\n• Stack: TypeScript · Prisma/SQLite · Nodemailer · GitHub Actions\n\nView it on the Projects page of this portfolio.",
      undefined,
      [
        { text: 'See all projects',          handler: this.handleProjectsRequest,   icon: <FaCode /> },
        { text: 'What else can he build?',   handler: this.handleSkillsRequest,     icon: <FaChartLine /> },
      ]
    )
  }

  handleProjectTenoris = () => {
    this.reply(
      "Tenoris Analytics (Nov 2021 – Jan 2023):\n\nMaxime co-founded Tenoris to democratise alternative financial data for individual investors. As co-founder & PM he led strategy, managed the team, monitored technical progress, and built investor relations. Stack: web scraping, Kubernetes, GraphQL, data architecture.",
      undefined,
      [{ text: 'See all projects', handler: this.handleProjectsRequest, icon: <FaCode /> }]
    )
  }

  handleProjectTalentGrid = () => {
    this.reply(
      "TalentGrid:\n\nA three-sided platform connecting universities, students, and employers through rich ePortfolios and AI-powered engagement. Maxime led this as PM — replacing traditional CV-based hiring with verified skills profiles. Built on a no-code stack with an integrated AI chatbot.",
      undefined,
      [{ text: 'See all projects', handler: this.handleProjectsRequest, icon: <FaCode /> }]
    )
  }

  handleProjectFlowmap = () => {
    this.reply(
      "Flowmap (3 months, ongoing):\n\nAn AI-powered SaaS that automates project progress tracking by analysing GitHub repositories in real time. Provides feature-level insights without requiring manual updates from dev teams. Stack: AI/ML, GitHub integration, SaaS architecture.",
      undefined,
      [{ text: 'See all projects', handler: this.handleProjectsRequest, icon: <FaCode /> }]
    )
  }

  handleProjectKITS = () => {
    this.reply(
      "KITS (Keep in the Sync):\n\nA knowledge-management platform that keeps distributed teams aligned by centralising decisions, action items, and institutional knowledge. Maxime contributed as PM and strategist to the product definition and roadmap.",
      undefined,
      [{ text: 'See all projects', handler: this.handleProjectsRequest, icon: <FaCode /> }]
    )
  }

  handleProjectInnovation = () => {
    this.reply(
      "Innovation Report:\n\nAcademic research project analysing how patents contribute to market valuation in R&D-intensive sectors. Used Python (Pandas, Scikit-learn) for data analysis and visualisation across large patent and market-cap datasets.",
      undefined,
      [{ text: 'See all projects', handler: this.handleProjectsRequest, icon: <FaCode /> }]
    )
  }

  handleProjectHouseDec = () => {
    this.reply(
      "HouseDec:\n\nA minimalist furniture e-commerce platform built with a clean UI, Stripe payment integration, and an admin dashboard for catalogue and order management.",
      undefined,
      [{ text: 'See all projects', handler: this.handleProjectsRequest, icon: <FaCode /> }]
    )
  }

  /* ════════════════════════════════════════════════════════════════════════
     SPECIFIC EDUCATION HANDLERS
  ════════════════════════════════════════════════════════════════════════ */

  handleMSC = () => {
    this.reply(
      "MSc — Strategy, Consulting & Organisation @ ESCP Business School (Paris):\n\nSep 2025 – Dec 2026. Focused on strategy, management consulting frameworks, organisational transformation, and decision-making. ESCP is a leading European business school consistently ranked in the FT Global Masters rankings.",
      undefined, this.eduSuggestions
    )
  }

  handleDCU = () => {
    this.reply(
      "BBA — Business Analytics @ Dublin City University (Ireland):\n\nSep 2022 – May 2024. Specialisation in data analysis, business intelligence, visualisation, and statistical modelling. Completed alongside his internship at Amazon Transportation Services in London.",
      undefined, this.eduSuggestions
    )
  }

  handleNEOMA = () => {
    this.reply(
      "BBA — CESEM @ NEOMA Business School (Reims, France):\n\nSep 2019 – Jul 2021. Focused on international business and management fundamentals. CESEM is a double-degree programme designed for internationally-minded students.",
      undefined, this.eduSuggestions
    )
  }

  /* ════════════════════════════════════════════════════════════════════════
     EXISTING HANDLERS (kept & cleaned up)
  ════════════════════════════════════════════════════════════════════════ */

  handleExperienceRequest = () => {
    this.reply(
      "Maxime has ~3 years of professional experience across project management, operations, and entrepreneurship:",
      'experience',
      this.expSuggestions
    )
  }

  handleEducationRequest = () => {
    this.reply("Here's Maxime's educational background:", 'education', this.eduSuggestions)
  }

  handleSkillsRequest = () => {
    this.reply(
      "Here are Maxime's key skills across strategy, data, and technology:",
      'skills',
      [
        { text: 'What is his work experience?', handler: this.handleExperienceRequest, icon: <FaBriefcase /> },
        { text: 'What projects has he done?',   handler: this.handleProjectsRequest,   icon: <FaCode /> },
      ]
    )
  }

  handleProjectsRequest = () => {
    this.reply(
      "Here are Maxime's notable projects across consulting, PM, and research:",
      'projects',
      [
        { text: 'What skills does he have?',    handler: this.handleSkillsRequest,     icon: <FaChartLine /> },
        { text: 'What is his work experience?', handler: this.handleExperienceRequest, icon: <FaBriefcase /> },
      ]
    )
  }

  handleContactRequest = () => {
    this.reply(
      "You can reach Maxime at:\n\n• Email: maximequintero@gmail.com\n• LinkedIn: linkedin.com/in/maxime-junca-quintero\n• GitHub: github.com/MaximeJuncaQuintero\n\nProfessional or project-related messages are welcome; this site is not used for open job applications.",
      undefined,
      [{ text: 'More on his background', handler: this.handleExperienceRequest, icon: <FaBriefcase /> }]
    )
  }

  handleAchievementsRequest = () => {
    this.reply(
      "Key achievements:\n\n• Built a KPI reporting solution at Amazon ATS adopted across the EU transport team\n• Led Tenoris Analytics from idea to MVP as co-founder & PM (alt-data platform)\n• Automated consulting intelligence pipeline (McKinsey + BCG) at 0 €/month cost\n• Accepted into ESCP MSc Strategy & Consulting (top European business school)",
      undefined,
      [
        { text: 'What makes him unique?',    handler: this.handleUniqueQualitiesQuestion, icon: <FaLightbulb /> },
        { text: 'How can I contact him?',    handler: this.handleContactRequest,          icon: <FaEnvelope /> },
      ]
    )
  }

  handleStrengthsRequest = () => {
    this.reply(
      "Maxime's key strengths:\n\n• Bridges technical teams and business stakeholders\n• Data-driven decision making (SQL, Python, Excel)\n• Structured thinking — consulting & PM frameworks\n• International adaptability (studied/worked across 3 countries)\n• Entrepreneurial mindset (founded Tenoris Analytics)",
      undefined,
      [
        { text: 'What is his experience?', handler: this.handleExperienceRequest,       icon: <FaBriefcase /> },
        { text: 'What projects has he done?', handler: this.handleProjectsRequest,      icon: <FaCode /> },
      ]
    )
  }

  /** Profile highlights without hiring framing */
  handleProfileHighlights = () => {
    this.reply(
      "Profile highlights:\n\n• Two Amazon roles — high-bar execution in fast-paced environments\n• PM + operations + data — bridges delivery and analytics\n• Co-founder experience — strategic and product-oriented\n• ESCP MSc — consulting and strategy depth\n• International path across France, Ireland, and the UK",
      undefined,
      [
        { text: 'How can I contact him?', handler: this.handleContactRequest, icon: <FaEnvelope /> },
        { text: 'What skills does he have?', handler: this.handleSkillsRequest, icon: <FaChartLine /> },
      ]
    )
  }

  handleAmazonRoleQuestion = () => {
    this.reply(
      "Maxime has held 2 roles at Amazon:\n\n• Operations Manager — Amazon Hub, Paris (Jun–Oct 2024)\n  Fleet maintenance oversight, supplier coordination, Locker network operations.\n\n• PM Intern — Amazon Transportation Services, London (Jan–Jun 2023)\n  Built a consolidated KPI reporting solution, managed tool-change adoption, developed SQL skills.",
      undefined,
      this.expSuggestions
    )
  }

  handleProgrammingLanguagesQuestion = () => {
    this.reply(
      "Maxime's technical stack:\n\n• Python — data analysis & automation (Advanced)\n• SQL — database queries & reporting, used at Amazon (Advanced)\n• TypeScript / JavaScript — personal projects & web dev (Intermediate)\n• VBA / Excel — macros & dashboards (Intermediate)\n• Tools: Prisma, GitHub Actions, Nodemailer, Kubernetes, GraphQL",
      undefined,
      [
        { text: 'What projects has he built?', handler: this.handleProjectsRequest,   icon: <FaCode /> },
        { text: 'What is his work experience?', handler: this.handleExperienceRequest, icon: <FaBriefcase /> },
      ]
    )
  }

  handleUniqueQualitiesQuestion = () => {
    this.reply(
      "What makes Maxime unique:\n\n• Cross-functional profile — PM, operations, data, and strategy\n• Early-career Amazon experience — strong execution and ownership\n• Co-founder — entrepreneurial drive and full-cycle product thinking\n• International path across 3 countries — culturally adaptable\n• Side projects — builds tools independently (Consulting Reports Monitor, Flowmap)",
      undefined,
      [
        { text: 'What is his work experience?', handler: this.handleExperienceRequest, icon: <FaBriefcase /> },
        { text: 'How can I contact him?',       handler: this.handleContactRequest,   icon: <FaEnvelope /> },
      ]
    )
  }

  handleRoleSuitability = (role?: string) => {
    const data: Record<string, { rating: string; text: string }> = {
      'program management':  { rating: '★★★★☆ Strong fit',    text: 'Direct PM experience at Amazon ATS (reporting solution, stakeholder management, tool adoption) plus ESCP strategy grounding.' },
      'operations':          { rating: '★★★★★ Excellent fit', text: 'Operations Manager at Amazon Hub — fleet maintenance, supplier coordination, KPI ownership.' },
      'consultant':          { rating: '★★★★☆ Strong fit',    text: 'ESCP MSc Strategy & Consulting, data-driven problem-solving, multi-stakeholder communication, Consulting Reports Monitor project.' },
      'data analyst':        { rating: '★★★☆☆ Good fit',      text: 'SQL & Python applied at Amazon and in academic projects. Business Analytics BBA from DCU.' },
      'product management':  { rating: '★★★☆☆ Good fit',      text: 'PM internship + co-founder experience. Strong product thinking, lighter on pure roadmap / discovery track record.' },
      'software development':{ rating: '★★☆☆☆ Partial fit',   text: 'TypeScript & Python skills for personal projects, but primary focus is PM / strategy rather than engineering.' },
    }

    if (!role || !data[role]) {
      this.reply(
        "I can summarise how Maxime's background maps to areas such as program management, operations, consulting, data analysis, product management, or software engineering. Pick a theme below.",
        undefined,
        [
          { text: 'Consulting angle',           handler: () => this.handleRoleSuitability('consultant'),         icon: <FaBriefcase /> },
          { text: 'Operations angle',           handler: () => this.handleRoleSuitability('operations'),         icon: <FaBriefcase /> },
          { text: 'Program management angle',   handler: () => this.handleRoleSuitability('program management'), icon: <FaBriefcase /> },
        ]
      )
      return
    }

    const d = data[role]
    this.reply(
      `${role.charAt(0).toUpperCase() + role.slice(1)} — ${d.rating}\n\n${d.text}`,
      undefined,
      [
        { text: 'What is his experience?', handler: this.handleExperienceRequest, icon: <FaBriefcase /> },
        { text: 'How can I contact him?',  handler: this.handleContactRequest,    icon: <FaEnvelope /> },
      ]
    )
  }

  handleDefault = () => {
    this.reply(
      "Hi — I'm Maxime's assistant. Ask me anything about his background, projects, or experience.",
      'options'
    )
  }
}

export default ActionProvider
