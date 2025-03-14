'use client'

import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';
import { FaBriefcase, FaCode, FaGraduationCap, FaTrophy, FaChartLine, FaEnvelope, FaLightbulb, FaQuestion } from 'react-icons/fa';

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

// Define interface for suggested questions
interface SuggestedQuestion {
  text: string;
  handler: () => void;
  icon: React.ReactNode;
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

  // Education data with corrected information
  educationData = [
    {
      degree: "BBA - Specialization in Business Analytics",
      institution: "Dublin City University",
      location: "Dublin, Ireland",
      period: "Sep 2022 - May 2024",
      description: "Specialized in Business Analytics, developed skills in data analysis, visualization, and business intelligence."
    },
    {
      degree: "BBA - CESEM",
      institution: "NEOMA Business School",
      location: "Reims, France",
      period: "Sep 2019 - Jul 2021",
      description: "Focused on international business and management fundamentals."
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

  // Updated role suitability data for various roles
  roleSuitabilityData: RoleSuitabilityMap = {
    "program management": {
      relevantSkills: ["Project management", "Stakeholder management", "Process improvement", "Data analysis", "SQL", "Communication"],
      relevantExperience: [
        "Project Manager at Amazon Transportation Services",
        "Operations Manager at Amazon Hub"
      ],
      suitabilityRating: "Strong fit",
      explanation: "Maxime has direct experience in project management at Amazon, where he managed complex projects involving multiple stakeholders. His experience in operations management also demonstrates his ability to coordinate resources and deliver results."
    },
    "operations": {
      relevantSkills: ["Operations management", "Process improvement", "Data analysis", "Problem-solving", "Team leadership"],
      relevantExperience: [
        "Operations Manager at Amazon Hub",
        "Project Manager at Amazon Transportation Services"
      ],
      suitabilityRating: "Excellent fit",
      explanation: "Maxime has direct experience as an Operations Manager at Amazon Hub, where he oversaw fleet maintenance and optimized supplier coordination. His project management experience also involved operational improvements and process optimization."
    },
    "consultant": {
      relevantSkills: ["Data analysis", "Problem-solving", "Communication", "Stakeholder management", "Business acumen"],
      relevantExperience: [
        "Project Manager at Amazon Transportation Services",
        "Operations Manager at Amazon Hub",
        "Founder of Tenoris Analytics"
      ],
      suitabilityRating: "Strong fit",
      explanation: "Maxime's experience in project management, operations, and analytics demonstrates his ability to analyze complex problems, develop solutions, and communicate effectively with stakeholders - all essential skills for consulting roles."
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

    // Bind all methods
    this.handleExperienceRequest = this.handleExperienceRequest.bind(this);
    this.handleEducationRequest = this.handleEducationRequest.bind(this);
    this.handleSkillsRequest = this.handleSkillsRequest.bind(this);
    this.handleProjectsRequest = this.handleProjectsRequest.bind(this);
    this.handleContactRequest = this.handleContactRequest.bind(this);
    this.handleAchievementsRequest = this.handleAchievementsRequest.bind(this);
    this.handleStrengthsRequest = this.handleStrengthsRequest.bind(this);
    this.handleWhyHireRequest = this.handleWhyHireRequest.bind(this);
    this.handleRoleSuitability = this.handleRoleSuitability.bind(this);
    this.handleDefault = this.handleDefault.bind(this);
  }

  // Helper method to add suggested questions after responses
  addSuggestedQuestions(message: any, questions: SuggestedQuestion[]) {
    const suggestedQuestionsMessage = this.createChatBotMessage(
      "You might also want to know:",
      {
        widget: "suggestedQuestions",
        payload: { questions }
      }
    );
    
    this.updateChatbotState(message);
    this.updateChatbotState(suggestedQuestionsMessage);
  }

  handleExperienceRequest = () => {
    const message = this.createChatBotMessage(
      "Maxime has experience in operations management, project management, and analytics. His most recent roles include:",
      {
        widget: "experience",
      }
    );

    const suggestedQuestions: SuggestedQuestion[] = [
      { 
        text: "What skills does Maxime have?", 
        handler: this.handleSkillsRequest,
        icon: <FaChartLine />
      },
      { 
        text: "What projects has he worked on?", 
        handler: this.handleProjectsRequest,
        icon: <FaCode />
      },
      { 
        text: "What are his key achievements?", 
        handler: this.handleAchievementsRequest,
        icon: <FaTrophy />
      }
    ];

    this.addSuggestedQuestions(message, suggestedQuestions);
  };

  handleAchievementsRequest = () => {
    const message = this.createChatBotMessage(
      "Maxime's key achievements include developing a consolidated reporting solution at Amazon that enhanced metric visibility, optimizing supplier coordination for Amazon Hub's locker fleet, and founding Tenoris Analytics where he developed custom data solutions for clients."
    );

    const suggestedQuestions: SuggestedQuestion[] = [
      { 
        text: "What are Maxime's strengths?", 
        handler: this.handleStrengthsRequest,
        icon: <FaLightbulb />
      },
      { 
        text: "What skills does he have?", 
        handler: this.handleSkillsRequest,
        icon: <FaChartLine />
      },
      { 
        text: "What projects has he worked on?", 
        handler: this.handleProjectsRequest,
        icon: <FaCode />
      }
    ];

    this.addSuggestedQuestions(message, suggestedQuestions);
  };

  handleStrengthsRequest = () => {
    const message = this.createChatBotMessage(
      "Maxime's key strengths include data-driven problem solving, effective stakeholder management, adaptability to new environments, strong analytical skills, and the ability to bridge technical and business perspectives."
    );

    const suggestedQuestions: SuggestedQuestion[] = [
      { 
        text: "What is Maxime's work experience?", 
        handler: this.handleExperienceRequest,
        icon: <FaBriefcase />
      },
      { 
        text: "What are his key achievements?", 
        handler: this.handleAchievementsRequest,
        icon: <FaTrophy />
      },
      { 
        text: "Is he a good fit for consulting roles?", 
        handler: () => this.handleRoleSuitability("consultant"),
        icon: <FaQuestion />
      }
    ];

    this.addSuggestedQuestions(message, suggestedQuestions);
  };

  handleWhyHireRequest = () => {
    const message = this.createChatBotMessage(
      "Maxime would be a valuable addition to your team because of his experience in operations and project management, strong analytical skills, and ability to drive results. His background at Amazon demonstrates his capability to work in fast-paced environments and deliver impactful solutions."
    );

    const suggestedQuestions: SuggestedQuestion[] = [
      { 
        text: "What are Maxime's skills?", 
        handler: this.handleSkillsRequest,
        icon: <FaChartLine />
      },
      { 
        text: "What is his educational background?", 
        handler: this.handleEducationRequest,
        icon: <FaGraduationCap />
      },
      { 
        text: "How can I contact Maxime?", 
        handler: this.handleContactRequest,
        icon: <FaEnvelope />
      }
    ];

    this.addSuggestedQuestions(message, suggestedQuestions);
  };

  handleRoleSuitability = (role?: string) => {
    if (!role) {
      const message = this.createChatBotMessage(
        "I can help assess Maxime's fit for various roles. Please specify a role such as 'program management', 'operations', 'data analyst', or 'consultant'."
      );
      
      const suggestedQuestions: SuggestedQuestion[] = [
        { 
          text: "Tell me about Maxime's experience", 
          handler: this.handleExperienceRequest,
          icon: <FaBriefcase />
        },
        { 
          text: "What are his key skills?", 
          handler: this.handleSkillsRequest,
          icon: <FaChartLine />
        },
        { 
          text: "What are his strengths?", 
          handler: this.handleStrengthsRequest,
          icon: <FaLightbulb />
        }
      ];

      this.addSuggestedQuestions(message, suggestedQuestions);
      return;
    }
    
    // Normalize the role name
    const normalizedRole = role.toLowerCase();
    
    // Find the closest matching role
    let matchedRole = "";
    let bestMatch = 0;
    
    for (const key in this.roleSuitabilityData) {
      if (normalizedRole.includes(key) || key.includes(normalizedRole)) {
        if (key.length > bestMatch) {
          matchedRole = key;
          bestMatch = key.length;
        }
      }
    }
    
    if (matchedRole && this.roleSuitabilityData[matchedRole]) {
      const roleData = this.roleSuitabilityData[matchedRole];
      
      // Create a more concise, card-based format that's easier to read
      const message = this.createChatBotMessage(
        `<div class="role-card">
          <div class="role-card-header">
            <h3>${matchedRole.charAt(0).toUpperCase() + matchedRole.slice(1)}</h3>
            <span class="role-fit-badge ${roleData.suitabilityRating.toLowerCase().replace(/\s+/g, '-')}">${roleData.suitabilityRating}</span>
          </div>
          <p>${roleData.explanation}</p>
          <div class="role-card-section">
            <h4>Key Experience</h4>
            <ul class="role-card-list">
              ${roleData.relevantExperience.map(exp => `<li>${exp}</li>`).join('')}
            </ul>
          </div>
          <div class="role-card-section">
            <h4>Key Skills</h4>
            <div class="skill-tags">
              ${roleData.relevantSkills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
          </div>
        </div>`
      );
      
      const suggestedQuestions: SuggestedQuestion[] = [
        { 
          text: "What is Maxime's work experience?", 
          handler: this.handleExperienceRequest,
          icon: <FaBriefcase />
        },
        { 
          text: "What are his key skills?", 
          handler: this.handleSkillsRequest,
          icon: <FaChartLine />
        },
        { 
          text: "What are his strengths?", 
          handler: this.handleStrengthsRequest,
          icon: <FaLightbulb />
        }
      ];

      this.addSuggestedQuestions(message, suggestedQuestions);
    } else {
      const message = this.createChatBotMessage(
        `I don't have specific information about Maxime's fit for "${role}" roles. However, he has experience in operations management, project management, and data analytics. Would you like to know more about his skills or experience?`
      );
      
      const suggestedQuestions: SuggestedQuestion[] = [
        { 
          text: "What is Maxime's work experience?", 
          handler: this.handleExperienceRequest,
          icon: <FaBriefcase />
        },
        { 
          text: "What are his key skills?", 
          handler: this.handleSkillsRequest,
          icon: <FaChartLine />
        },
        { 
          text: "What are his strengths?", 
          handler: this.handleStrengthsRequest,
          icon: <FaLightbulb />
        }
      ];

      this.addSuggestedQuestions(message, suggestedQuestions);
    }
  };

  handleProjectsRequest = () => {
    const message = this.createChatBotMessage(
      "Here are some of Maxime's notable projects:",
      {
        widget: "projects",
      }
    );
    
    const suggestedQuestions: SuggestedQuestion[] = [
      { 
        text: "What skills does Maxime have?", 
        handler: this.handleSkillsRequest,
        icon: <FaChartLine />
      },
      { 
        text: "What is his work experience?", 
        handler: this.handleExperienceRequest,
        icon: <FaBriefcase />
      },
      { 
        text: "What is his educational background?", 
        handler: this.handleEducationRequest,
        icon: <FaGraduationCap />
      }
    ];

    this.addSuggestedQuestions(message, suggestedQuestions);
  };

  handleSkillsRequest = () => {
    const message = this.createChatBotMessage(
      "Here are Maxime's key skills:",
      {
        widget: "skills",
      }
    );
    
    const suggestedQuestions: SuggestedQuestion[] = [
      { 
        text: "What is Maxime's work experience?", 
        handler: this.handleExperienceRequest,
        icon: <FaBriefcase />
      },
      { 
        text: "What projects has he worked on?", 
        handler: this.handleProjectsRequest,
        icon: <FaCode />
      },
      { 
        text: "What are his key achievements?", 
        handler: this.handleAchievementsRequest,
        icon: <FaTrophy />
      }
    ];

    this.addSuggestedQuestions(message, suggestedQuestions);
  };

  handleContactRequest = () => {
    const message = this.createChatBotMessage(
      "You can contact Maxime via email at maximequintero@gmail.com or connect with him on LinkedIn at https://www.linkedin.com/in/maxime-junca-quintero/."
    );
    
    const suggestedQuestions: SuggestedQuestion[] = [
      { 
        text: "What is Maxime's work experience?", 
        handler: this.handleExperienceRequest,
        icon: <FaBriefcase />
      },
      { 
        text: "What are his key skills?", 
        handler: this.handleSkillsRequest,
        icon: <FaChartLine />
      },
      { 
        text: "Why should I hire Maxime?", 
        handler: this.handleWhyHireRequest,
        icon: <FaQuestion />
      }
    ];

    this.addSuggestedQuestions(message, suggestedQuestions);
  };

  handleEducationRequest = () => {
    const message = this.createChatBotMessage(
      "Here's Maxime's educational background:",
      {
        widget: "education",
      }
    );
    
    const suggestedQuestions: SuggestedQuestion[] = [
      { 
        text: "What skills does Maxime have?", 
        handler: this.handleSkillsRequest,
        icon: <FaChartLine />
      },
      { 
        text: "What is his work experience?", 
        handler: this.handleExperienceRequest,
        icon: <FaBriefcase />
      },
      { 
        text: "What projects has he worked on?", 
        handler: this.handleProjectsRequest,
        icon: <FaCode />
      }
    ];

    this.addSuggestedQuestions(message, suggestedQuestions);
  };

  // Handle multiple questions in one message
  handleMultipleQuestions = (message: string) => {
    const lowerCaseMessage = message.toLowerCase();
    
    // Check for common combinations
    if ((lowerCaseMessage.includes('skill') && lowerCaseMessage.includes('education')) ||
        (lowerCaseMessage.includes('skill') && lowerCaseMessage.includes('background'))) {
      
      // First handle skills
      const skillsMessage = this.createChatBotMessage(
        "Here are Maxime's key skills:",
        {
          widget: "skills",
        }
      );
      
      // Then handle education
      const educationMessage = this.createChatBotMessage(
        "And here's his educational background:",
        {
          widget: "education",
        }
      );
      
      const suggestedQuestions: SuggestedQuestion[] = [
        { 
          text: "What is Maxime's work experience?", 
          handler: this.handleExperienceRequest,
          icon: <FaBriefcase />
        },
        { 
          text: "What projects has he worked on?", 
          handler: this.handleProjectsRequest,
          icon: <FaCode />
        },
        { 
          text: "Is he a good fit for operations roles?", 
          handler: () => this.handleRoleSuitability("operations"),
          icon: <FaQuestion />
        }
      ];
      
      this.updateChatbotState(skillsMessage);
      this.updateChatbotState(educationMessage);
      
      const followUpMessage = this.createChatBotMessage(
        "You might also want to know:",
        {
          widget: "suggestedQuestions",
          payload: { questions: suggestedQuestions }
        }
      );
      
      this.updateChatbotState(followUpMessage);
      return true;
    }
    
    // Add more combinations as needed
    
    return false; // No multiple questions detected
  };

  handleDefault = () => {
    const message = this.createChatBotMessage(
      "I can tell you about Maxime's experience, projects, skills, education, or how to contact him. I can also help assess his fit for specific roles like program management, operations, or consulting."
    );
    
    const suggestedQuestions: SuggestedQuestion[] = [
      { 
        text: "What is Maxime's work experience?", 
        handler: this.handleExperienceRequest,
        icon: <FaBriefcase />
      },
      { 
        text: "What skills does he have?", 
        handler: this.handleSkillsRequest,
        icon: <FaChartLine />
      },
      { 
        text: "What is his educational background?", 
        handler: this.handleEducationRequest,
        icon: <FaGraduationCap />
      }
    ];

    this.addSuggestedQuestions(message, suggestedQuestions);
  };

  // Add specific handlers for common questions

  // Handler for Amazon role questions
  handleAmazonRoleQuestion = () => {
    const amazonExperience = this.experienceData.filter(exp => exp.company.includes('Amazon'));
    
    let message;
    if (amazonExperience.length > 0) {
      const amazonRoles = amazonExperience.map(exp => 
        `<div class="amazon-role-card">
          <div class="amazon-role-header">
            <h4>${exp.title}</h4>
            <span class="amazon-role-period">${exp.period}</span>
          </div>
          <div class="amazon-role-company">${exp.company}, ${exp.location}</div>
          <p>${exp.description}</p>
        </div>`
      ).join('');
      
      message = this.createChatBotMessage(
        `<div class="amazon-roles-container">
          ${amazonRoles}
        </div>`
      );
    } else {
      message = this.createChatBotMessage(
        "I don't have specific information about Maxime's roles at Amazon."
      );
    }
    
    const suggestedQuestions: SuggestedQuestion[] = [
      { 
        text: "What skills did he develop there?", 
        handler: this.handleSkillsRequest,
        icon: <FaChartLine />
      },
      { 
        text: "What are his key achievements?", 
        handler: this.handleAchievementsRequest,
        icon: <FaTrophy />
      },
      { 
        text: "What is his educational background?", 
        handler: this.handleEducationRequest,
        icon: <FaGraduationCap />
      }
    ];
    
    this.addSuggestedQuestions(message, suggestedQuestions);
  };

  // Handler for programming languages questions
  handleProgrammingLanguagesQuestion = () => {
    const message = this.createChatBotMessage(
      `<div class="programming-container">
        ${this.programmingLanguages.map(lang => 
          `<div class="programming-card">
            <div class="programming-header">
              <h4>${lang.name}</h4>
              <span class="programming-level ${lang.level.toLowerCase()}">${lang.level}</span>
            </div>
            <p>${lang.context}</p>
          </div>`
        ).join('')}
        <p class="programming-summary">Strongest skills: Python (data analysis) and SQL (database)</p>
      </div>`
    );
    
    const suggestedQuestions: SuggestedQuestion[] = [
      { 
        text: "What projects has he worked on?", 
        handler: this.handleProjectsRequest,
        icon: <FaCode />
      },
      { 
        text: "What are his other technical skills?", 
        handler: this.handleSkillsRequest,
        icon: <FaChartLine />
      },
      { 
        text: "What is his work experience?", 
        handler: this.handleExperienceRequest,
        icon: <FaBriefcase />
      }
    ];
    
    this.addSuggestedQuestions(message, suggestedQuestions);
  };

  // Handler for "what makes Maxime unique" questions
  handleUniqueQualitiesQuestion = () => {
    const uniqueQualities = [
      { title: "Diverse experience", description: "Operations, project management, entrepreneurship" },
      { title: "Technical & business", description: "Bridges technical teams and business stakeholders" },
      { title: "International", description: "Education and work across multiple countries" },
      { title: "Data-driven", description: "Problem-solving based on data analysis" },
      { title: "Adaptable", description: "Quick to adapt to new challenges" }
    ];
    
    const message = this.createChatBotMessage(
      `<div class="unique-container">
        <h3>What makes Maxime unique:</h3>
        <div class="unique-qualities-grid">
          ${uniqueQualities.map(quality => 
            `<div class="unique-quality-card">
              <h4>${quality.title}</h4>
              <p>${quality.description}</p>
            </div>`
          ).join('')}
        </div>
      </div>`
    );
    
    const suggestedQuestions: SuggestedQuestion[] = [
      { 
        text: "What are his key strengths?", 
        handler: this.handleStrengthsRequest,
        icon: <FaLightbulb />
      },
      { 
        text: "What is his work experience?", 
        handler: this.handleExperienceRequest,
        icon: <FaBriefcase />
      },
      { 
        text: "How can I contact Maxime?", 
        handler: this.handleContactRequest,
        icon: <FaEnvelope />
      }
    ];
    
    this.addSuggestedQuestions(message, suggestedQuestions);
  };

  updateChatbotState = (message: any) => {
    this.setState((prevState: any) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider; 