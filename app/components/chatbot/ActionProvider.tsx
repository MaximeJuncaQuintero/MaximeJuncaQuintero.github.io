'use client'

import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';

interface ActionProviderProps {
  createChatBotMessage: any;
  setState: any;
  children: any;
}

// Define interface for role suitability data
interface RoleSuitabilityInfo {
  relevantSkills: string[];
  relevantExperience: string[];
  suitabilityRating: string;
  explanation: string;
}

// Define type for role suitability data mapping
type RoleSuitabilityMap = {
  [key: string]: RoleSuitabilityInfo;
}

class ActionProvider {
  createChatBotMessage: any;
  setState: any;
  createClientMessage: any;

  // Experience data for more accurate responses
  experienceData = [
    {
      title: "Operations Manager",
      company: "Amazon Hub",
      location: "Paris, France",
      period: "June – Oct 2024",
      duration: "5 months",
      description: "Oversaw Lockers fleet maintenance, optimized supplier coordination, gained in-depth operational knowledge."
    },
    {
      title: "Project Manager - Intern",
      company: "Amazon Transportation Services (ATS)",
      location: "London, UK",
      period: "Jan – Jun 2023",
      duration: "6 months",
      description: "Enhanced metric visibility with a consolidated reporting solution, managed change for internal reporting tools, developed SQL skills."
    },
    {
      title: "Founder",
      company: "Tenoris Analytics",
      location: "Toulouse, France",
      period: "Nov 2021 – Jan 2023",
      duration: "1 year 3 months",
      description: "Led strategy and team management for alternative financial data project, monitored technical progress, developed solutions to challenges."
    }
  ];

  // Education data for education-related questions
  educationData = [
    {
      degree: "BBA with specialization in Business Analytics",
      school: "Dublin City University",
      location: "Dublin, Ireland",
      period: "Sep 2022 – May 2024",
      description: "Specialized in Business Analytics, focusing on data-driven decision making, statistical analysis, and business intelligence."
    },
    {
      degree: "BBA - CESEM",
      school: "NEOMA Business School",
      location: "Reims, France",
      period: "Sep 2019 – Jul 2021",
      description: "Completed core business curriculum with focus on international business and management. Participated in international exchange program."
    }
  ];

  // Skills data for more accurate responses - ONLY include verified skills
  skillsData = {
    technical: ["Python", "SQL", "Data Analysis", "Excel Macros"],
    management: ["Project Management", "Operations", "Strategic Planning", "Problem Solving"],
    tools: ["Kubernetes", "GraphQL", "AWS", "MongoDB", "React", "Node.js"]
  };

  // Programming languages with proficiency levels - ONLY include verified languages
  programmingLanguages = [
    { name: "Python", level: "Advanced", context: "Used for data analysis and automation in projects" },
    { name: "SQL", level: "Advanced", context: "Employed for database queries and reporting at Amazon" },
    { name: "JavaScript", level: "Intermediate", context: "Used for web development in personal projects" },
    { name: "TypeScript", level: "Intermediate", context: "Used in React projects" }
  ];

  // Role suitability data - mapping roles to relevant skills and experience
  roleSuitabilityData: RoleSuitabilityMap = {
    "program management": {
      relevantSkills: ["Project Management", "Strategic Planning", "Problem Solving", "Team Leadership"],
      relevantExperience: ["Project Manager - Intern at Amazon Transportation Services", "Founder at Tenoris Analytics"],
      suitabilityRating: "High",
      explanation: "Maxime has direct experience in project management at Amazon and as a founder, where he demonstrated skills in strategic planning, team leadership, and problem-solving - all essential for program management roles."
    },
    "data analyst": {
      relevantSkills: ["Data Analysis", "SQL", "Python", "Excel"],
      relevantExperience: ["Project Manager - Intern at Amazon Transportation Services", "Innovation Report project"],
      suitabilityRating: "High",
      explanation: "Maxime has strong technical skills in data analysis, SQL, and Python, which he applied in his role at Amazon and in his Innovation Report project. His Business Analytics specialization provides a solid foundation for data analyst roles."
    },
    "product management": {
      relevantSkills: ["Project Management", "Strategic Planning", "Problem Solving", "Business Analysis"],
      relevantExperience: ["Project Manager - Intern at Amazon Transportation Services", "Founder at Tenoris Analytics"],
      suitabilityRating: "Medium-High",
      explanation: "Maxime's project management experience and entrepreneurial background provide relevant skills for product management, though he may benefit from gaining more direct product-focused experience."
    },
    "operations": {
      relevantSkills: ["Operations", "Project Management", "Problem Solving"],
      relevantExperience: ["Operations Manager at Amazon Hub"],
      suitabilityRating: "High",
      explanation: "Maxime has direct experience as an Operations Manager at Amazon Hub, where he oversaw fleet maintenance and optimized supplier coordination, making him well-suited for operational roles."
    },
    "software development": {
      relevantSkills: ["Python", "JavaScript", "TypeScript"],
      relevantExperience: ["Personal projects in web development"],
      suitabilityRating: "Low-Medium",
      explanation: "While Maxime has some programming skills, his experience is more focused on business and management roles rather than dedicated software development."
    }
  };

  // List of all verified skills for quick checking
  allVerifiedSkills: string[] = [];

  constructor(createChatBotMessage: any, setStateFunc: any, createClientMessage: any) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    
    // Build the list of all verified skills for quick checking
    this.allVerifiedSkills = [
      ...this.skillsData.technical,
      ...this.skillsData.management,
      ...this.skillsData.tools,
      ...this.programmingLanguages.map(lang => lang.name)
    ].map(skill => skill.toLowerCase());
  }

  handleExperienceRequest = () => {
    // Send text answer and widget in the same message
    const message = this.createChatBotMessage(
      "Maxime has experience in project management and operations. He has worked as an Operations Manager at Amazon Hub in Paris and as a Project Manager Intern at Amazon Transportation Services in London. He also founded Tenoris Analytics, a platform for alternative financial data.",
      {
        widget: "experience",
      }
    );
    this.updateChatbotState(message);
  };

  // Handle recruiter-specific questions about achievements
  handleAchievementsRequest = () => {
    const message = this.createChatBotMessage(
      "Maxime's key achievements include developing a consolidated reporting solution at Amazon Transportation Services that enhanced metric visibility, and founding Tenoris Analytics where he led strategy and team management for an alternative financial data platform.",
      {
        widget: "experience",
      }
    );
    this.updateChatbotState(message);
  };

  // Handle recruiter-specific questions about strengths
  handleStrengthsRequest = () => {
    const message = this.createChatBotMessage(
      "Maxime's key strengths include project management, data analysis, strategic planning, and problem-solving. He has demonstrated these skills in his roles at Amazon and as a founder of Tenoris Analytics.",
      {
        widget: "skills",
      }
    );
    this.updateChatbotState(message);
  };

  // Handle recruiter-specific questions about why they should hire
  handleWhyHireRequest = () => {
    const message = this.createChatBotMessage(
      "Maxime brings a unique combination of operational experience from Amazon, entrepreneurial skills from founding Tenoris Analytics, and strong technical abilities in data analysis. His background in both business and technology makes him adaptable to various roles and challenges."
    );
    this.updateChatbotState(message);
  };

  // Handle role suitability questions
  handleRoleSuitability = (role?: string) => {
    if (!role) {
      const message = this.createChatBotMessage(
        "I can help assess Maxime's suitability for various roles based on his skills and experience. Please specify a role you're interested in, such as 'program management', 'data analyst', 'product management', or 'operations'.",
        {
          widget: "skills",
        }
      );
      this.updateChatbotState(message);
      return;
    }
    
    // Normalize the role name for comparison
    const normalizedRole = role.toLowerCase();
    
    // Check for common role variations
    let matchedRole = "";
    if (normalizedRole.includes("program") && normalizedRole.includes("manage")) {
      matchedRole = "program management";
    } else if ((normalizedRole.includes("data") && normalizedRole.includes("analy")) || normalizedRole.includes("business intelligence")) {
      matchedRole = "data analyst";
    } else if (normalizedRole.includes("product") && normalizedRole.includes("manage")) {
      matchedRole = "product management";
    } else if (normalizedRole.includes("operation") || normalizedRole.includes("ops")) {
      matchedRole = "operations";
    } else if (normalizedRole.includes("software") || normalizedRole.includes("developer") || normalizedRole.includes("engineer")) {
      matchedRole = "software development";
    }
    
    if (matchedRole && this.roleSuitabilityData[matchedRole]) {
      const roleData = this.roleSuitabilityData[matchedRole];
      const relevantSkills = roleData.relevantSkills.join(", ");
      
      const message = this.createChatBotMessage(
        `Maxime would be a ${roleData.suitabilityRating.toLowerCase()} suitability candidate for a ${matchedRole} role. ${roleData.explanation} His relevant skills include ${relevantSkills}, which he demonstrated in his roles as ${roleData.relevantExperience.join(" and ")}.`,
        {
          widget: "skills",
        }
      );
      this.updateChatbotState(message);
      return;
    }
    
    // If no specific role match, provide a general assessment
    const message = this.createChatBotMessage(
      `Based on Maxime's background, he would be most suitable for roles in project management, operations, and data analysis. His experience at Amazon and as a founder of Tenoris Analytics has equipped him with skills in strategic planning, problem-solving, and team leadership. For more specific role assessments, please ask about 'program management', 'data analyst', 'product management', or 'operations'.`,
      {
        widget: "skills",
      }
    );
    this.updateChatbotState(message);
  };

  handleProjectsRequest = () => {
    const message = this.createChatBotMessage(
      "Maxime has worked on several projects including the Amazon EU ATS KPI Library, Tenoris Analytics, an Innovation Report on patents and market valuation, KITS - an appliance kit service, and HouseDec - a furniture e-commerce platform.",
      {
        widget: "projects",
      }
    );
    this.updateChatbotState(message);
  };

  handleSkillsRequest = () => {
    const message = this.createChatBotMessage(
      "Maxime's skills include Project Management, Operations, Data Analysis, SQL, Python, Strategic Planning, and Problem Solving.",
      {
        widget: "skills",
      }
    );
    this.updateChatbotState(message);
  };

  handleContactRequest = () => {
    const message = this.createChatBotMessage(
      "You can contact Maxime via email at maximequintero@gmail.com or connect with him on LinkedIn at https://www.linkedin.com/in/maxime-junca-quintero/."
    );
    this.updateChatbotState(message);
  };

  // Education handler
  handleEducationRequest = () => {
    const educationSummary = this.educationData.map(edu => 
      `${edu.degree} at ${edu.school} (${edu.period})`
    ).join(' and ');
    
    const message = this.createChatBotMessage(
      `Maxime's educational background includes ${educationSummary}. He specialized in Business Analytics at Dublin City University.`,
      {
        widget: "education",
      }
    );
    this.updateChatbotState(message);
  };

  // Programming languages handler
  handleProgrammingLanguagesRequest = () => {
    const advancedLanguages = this.programmingLanguages
      .filter(lang => lang.level === "Advanced")
      .map(lang => lang.name)
      .join(", ");
      
    const intermediateLanguages = this.programmingLanguages
      .filter(lang => lang.level === "Intermediate")
      .map(lang => lang.name)
      .join(", ");
    
    const message = this.createChatBotMessage(
      `Maxime is proficient in several programming languages. He has advanced knowledge of ${advancedLanguages} and intermediate knowledge of ${intermediateLanguages}. His strongest technical skills are in Python for data analysis and SQL for database management.`,
      {
        widget: "skills",
      }
    );
    this.updateChatbotState(message);
  };

  // School-specific handler
  handleSchoolRequest = (school?: string) => {
    if (!school) {
      this.handleEducationRequest();
      return;
    }
    
    let foundSchool = null;
    
    // Try to find the school in the education data
    for (const edu of this.educationData) {
      if (edu.school.toLowerCase().includes(school.toLowerCase())) {
        foundSchool = edu;
        break;
      }
    }
    
    if (foundSchool) {
      const message = this.createChatBotMessage(
        `Maxime studied at ${foundSchool.school} in ${foundSchool.location} from ${foundSchool.period}, where he earned a ${foundSchool.degree}. ${foundSchool.description}`,
        {
          widget: "education",
        }
      );
      this.updateChatbotState(message);
    } else {
      const schools = this.educationData.map(edu => edu.school).join(' and ');
      
      const message = this.createChatBotMessage(
        `I don't have information about Maxime studying at ${school}. His educational background includes ${schools}.`,
        {
          widget: "education",
        }
      );
      this.updateChatbotState(message);
    }
  };

  // New handlers for more specific questions
  handleExperienceDuration = (role?: string) => {
    if (role && role.toLowerCase().includes("project manager")) {
      const pmExperience = this.experienceData.find(exp => 
        exp.title.toLowerCase().includes("project manager")
      );
      
      if (pmExperience) {
        const message = this.createChatBotMessage(
          `Maxime worked as a ${pmExperience.title} at ${pmExperience.company} for ${pmExperience.duration}, from ${pmExperience.period}.`,
          {
            widget: "experience",
          }
        );
        this.updateChatbotState(message);
        return;
      }
    }
    
    // Calculate total experience
    const totalMonths = this.experienceData.reduce((total, exp) => {
      // Simple calculation based on the duration string
      const durationParts = exp.duration.split(' ');
      let months = 0;
      
      if (durationParts.includes('year') || durationParts.includes('years')) {
        const yearIndex = durationParts.findIndex(part => part === 'year' || part === 'years');
        months += parseInt(durationParts[yearIndex - 1]) * 12;
      }
      
      if (durationParts.includes('month') || durationParts.includes('months')) {
        const monthIndex = durationParts.findIndex(part => part === 'month' || part === 'months');
        months += parseInt(durationParts[monthIndex - 1]);
      }
      
      return total + months;
    }, 0);
    
    const years = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;
    
    let experienceText = "";
    if (years > 0) {
      experienceText += `${years} year${years > 1 ? 's' : ''}`;
      if (remainingMonths > 0) {
        experienceText += ` and ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
      }
    } else {
      experienceText = `${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
    }
    
    const message = this.createChatBotMessage(
      `Maxime has a total of ${experienceText} of professional experience across his roles at Amazon and as a founder of Tenoris Analytics.`,
      {
        widget: "experience",
      }
    );
    this.updateChatbotState(message);
  };

  handleSpecificSkill = (skill?: string) => {
    if (!skill) {
      this.handleSkillsRequest();
      return;
    }
    
    // Normalize the skill name for comparison
    const normalizedSkill = skill.toLowerCase();
    
    // Check if this is a programming language
    const programmingLanguage = this.programmingLanguages.find(
      lang => lang.name.toLowerCase() === normalizedSkill
    );
    
    if (programmingLanguage) {
      const message = this.createChatBotMessage(
        `Maxime has ${programmingLanguage.level.toLowerCase()} proficiency in ${programmingLanguage.name}. ${programmingLanguage.context}.`,
        {
          widget: "skills",
        }
      );
      this.updateChatbotState(message);
      return;
    }
    
    // Check if it's a verified skill
    if (this.allVerifiedSkills.includes(normalizedSkill)) {
      // Find which category it belongs to
      let category = "";
      if (this.skillsData.technical.map(s => s.toLowerCase()).includes(normalizedSkill)) {
        category = "technical";
      } else if (this.skillsData.management.map(s => s.toLowerCase()).includes(normalizedSkill)) {
        category = "management";
      } else if (this.skillsData.tools.map(s => s.toLowerCase()).includes(normalizedSkill)) {
        category = "tools";
      }
      
      let response = `Yes, Maxime is skilled in ${skill}.`;
      
      // Add context based on the skill
      if (normalizedSkill === "sql") {
        response = `Yes, Maxime has intermediate proficiency in SQL. He used SQL extensively during his time at Amazon Transportation Services for database queries and reporting.`;
      } else if (normalizedSkill === "python") {
        response = `Yes, Maxime has intermediate proficiency in Python. He used Python for data analysis in his Innovation Report project and for various automation tasks.`;
      } else if (normalizedSkill === "excel" || normalizedSkill === "excel macros") {
        response = `Yes, Maxime has advanced proficiency in Excel and Excel Macros. He used these extensively in his Amazon KPI Dashboard project to enhance internal reporting tools.`;
      } else if (normalizedSkill === "data analysis") {
        response = `Yes, Maxime is skilled in Data Analysis. He applied these skills in his Innovation Report project analyzing how patents contribute to market valuation of innovative companies.`;
      } else if (normalizedSkill === "project management") {
        response = `Yes, Maxime has strong Project Management skills from his experience as a Project Manager Intern at Amazon Transportation Services and as the founder of Tenoris Analytics.`;
      } else if (category) {
        response = `Yes, Maxime is skilled in ${skill}. This is one of his ${category} skills.`;
      }
      
      const message = this.createChatBotMessage(
        response,
        {
          widget: "skills",
        }
      );
      this.updateChatbotState(message);
      return;
    }
    
    // If we get here, the skill wasn't found
    const message = this.createChatBotMessage(
      `I don't have specific information about Maxime's proficiency in ${skill}. Here are the skills I can confirm he has:`,
      {
        widget: "skills",
      }
    );
    this.updateChatbotState(message);
  };

  handleCompanyExperience = (company?: string) => {
    if (!company) {
      this.handleExperienceRequest();
      return;
    }
    
    const companyExperiences = this.experienceData.filter(exp => 
      exp.company.toLowerCase().includes(company.toLowerCase())
    );
    
    if (companyExperiences.length > 0) {
      const experienceText = companyExperiences.map(exp => 
        `${exp.title} (${exp.period}, ${exp.duration})`
      ).join(' and ');
      
      const message = this.createChatBotMessage(
        `At ${companyExperiences[0].company}, Maxime worked as ${experienceText}. ${companyExperiences[0].description}`,
        {
          widget: "experience",
        }
      );
      this.updateChatbotState(message);
    } else {
      const message = this.createChatBotMessage(
        `I don't have information about Maxime's experience at ${company}. He has worked at Amazon Hub, Amazon Transportation Services, and founded Tenoris Analytics.`,
        {
          widget: "experience",
        }
      );
      this.updateChatbotState(message);
    }
  };

  handleDefault = () => {
    const message = this.createChatBotMessage(
      "I'm not sure I understand. I can tell you about Maxime's experience, projects, skills, education, or how to contact him. I can also answer specific questions a recruiter might ask.",
      {
        widget: "options",
      }
    );

    this.updateChatbotState(message);
  };

  updateChatbotState = (message: any) => {
    this.setState((prevState: any) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider; 