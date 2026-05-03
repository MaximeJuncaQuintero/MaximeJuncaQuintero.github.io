'use client'

class MessageParser {
  actionProvider: any
  state: any

  constructor(actionProvider: any, state: any) {
    this.actionProvider = actionProvider
    this.state = state
  }

  parse(message: string) {
    const m = message.toLowerCase().trim()
    const ap = this.actionProvider

    // ── 1. Specific factual questions (highest priority) ─────────────────────

    // Years / duration of experience
    if (/how many years|years of experience|combien d.ann|depuis combien|how long.*work|experience.*years|years.*experience/.test(m)) {
      ap.handleYearsExperience(); return
    }

    // Countries
    if (/how many countries|combien de pays|countries.*work|countries.*study|international|global footprint/.test(m)) {
      ap.handleCountries(); return
    }

    // Nationality / origin
    if (/where.*from|d.où|nationality|nationali|français|french.*is he|origin/.test(m)) {
      ap.handleNationality(); return
    }

    // Current location
    if (/where.*live|where.*based|where.*currently|location|lives in|based in|où.*habite|ou.*vit/.test(m)) {
      ap.handleLocation(); return
    }

    // Job-search style questions → neutral professional-outreach answer
    if (/available for (a )?role|looking for (a )?job|seeking (a )?job|open to work|actively hiring|disponible pour (un )?(emploi|poste)|cherche (un )?(emploi|poste|stage)|availability for work/.test(m)) {
      ap.handleProfessionalOutreach(); return
    }

    // Languages spoken
    if (/language.*speak|speak.*language|parle|fluent|spoken|french|english|spanish|langues/.test(m)) {
      ap.handleLanguages(); return
    }

    // Salary / compensation
    if (/salary|compensation|pay|rémunérat|salaire/.test(m)) {
      ap.handleSalary(); return
    }

    // Age
    if (/how old|age|born|birth|quel âge/.test(m)) {
      ap.handleAge(); return
    }

    // ── 2. Amazon-specific ───────────────────────────────────────────────────
    if (/amazon/.test(m)) {
      ap.handleAmazonRoleQuestion(); return
    }

    // ── 3. Specific project pages ────────────────────────────────────────────
    if (/consulting report|crm|reports monitor|mckinsey.*bcg|bcg.*mckinsey|pipeline/.test(m)) {
      ap.handleProjectCRM(); return
    }
    if (/knowledger|know ledger|knowledge ledger/.test(m)) {
      ap.handleProjectKnowLedger(); return
    }
    if (/tenoris/.test(m)) { ap.handleProjectTenoris(); return }
    if (/talentgrid|talent grid/.test(m)) { ap.handleProjectTalentGrid(); return }
    if (/flowmap|flow map/.test(m)) { ap.handleProjectFlowmap(); return }
    if (/kits/.test(m)) { ap.handleProjectKITS(); return }
    if (/innovation report|patent|brevet/.test(m)) { ap.handleProjectInnovation(); return }
    if (/housedec|furniture|e-commerce/.test(m)) { ap.handleProjectHouseDec(); return }

    // ── 4. Education specifics ───────────────────────────────────────────────
    if (/escp|master|msc|strategy.*consult|consult.*strategy/.test(m)) {
      ap.handleMSC(); return
    }
    if (/dcu|dublin|business analytics/.test(m)) {
      ap.handleDCU(); return
    }
    if (/neoma|cesem|reims/.test(m)) {
      ap.handleNEOMA(); return
    }

    // ── 5. Technical skills ──────────────────────────────────────────────────
    if (/python|sql|programming|code|coding|typescript|javascript|vba|excel/.test(m)) {
      ap.handleProgrammingLanguagesQuestion(); return
    }

    // ── 6. Role suitability ──────────────────────────────────────────────────
    if (/(suitable|good fit|qualified|right for|fit for|good for|good candidate|match for)/.test(m) &&
        /(role|position|job|program|data|product|operation|software|analyst|consult|manager)/.test(m)) {
      const role = this.extractRole(m)
      ap.handleRoleSuitability(role); return
    }

    // ── 7. Contact / social ──────────────────────────────────────────────────
    if (/contact|email|linkedin|github|reach|get in touch|connect|social/.test(m)) {
      ap.handleContactRequest(); return
    }

    // ── 8. CV / resume ───────────────────────────────────────────────────────
    if (/cv|resume|curriculum/.test(m)) {
      ap.handleCV(); return
    }

    // ── 9. Unique qualities ──────────────────────────────────────────────────
    if (/unique|special|different|stand out|stands out|makes him|makes maxime/.test(m)) {
      ap.handleUniqueQualitiesQuestion(); return
    }

    // ── 10. Profile / value (no hiring pitch) ─────────────────────────────────
    if (/why hire|why should i hire|reason to hire|what value|what does he bring|highlights|stand out professionally/.test(m)) {
      ap.handleProfileHighlights(); return
    }

    // ── 11. Achievements ─────────────────────────────────────────────────────
    if (/achievement|accomplish|success|award|recognition|milestone|proud|significant/.test(m)) {
      ap.handleAchievementsRequest(); return
    }

    // ── 12. Strengths ────────────────────────────────────────────────────────
    if (/strength|strong point|good at|excel|best|advantage|talent/.test(m)) {
      ap.handleStrengthsRequest(); return
    }

    // ── 13. Generic categories ───────────────────────────────────────────────
    if (/experience|work|job|career|professional|background/.test(m)) {
      ap.handleExperienceRequest(); return
    }
    if (/education|school|university|degree|study|studied|qualification/.test(m)) {
      ap.handleEducationRequest(); return
    }
    if (/skill|ability|capable|competent|expertise/.test(m)) {
      ap.handleSkillsRequest(); return
    }
    if (/project|portfolio|built|developed|created|implemented/.test(m)) {
      ap.handleProjectsRequest(); return
    }

    // ── 14. Greetings → show menu ────────────────────────────────────────────
    if (/^(hi|hello|hey|bonjour|salut|howdy|hola)\b/.test(m)) {
      ap.handleDefault(); return
    }

    // ── 15. Fallback ─────────────────────────────────────────────────────────
    ap.handleDefault()
  }

  extractRole(m: string): string {
    if (/program.*(manag|management)/.test(m)) return 'program management'
    if (/product.*(manag|management)/.test(m)) return 'product management'
    if (/data\s*anal/.test(m) || /business intelligence/.test(m)) return 'data analyst'
    if (/operation|ops/.test(m)) return 'operations'
    if (/software|developer|engineer/.test(m)) return 'software development'
    if (/consult/.test(m)) return 'consultant'
    return ''
  }
}

export default MessageParser
