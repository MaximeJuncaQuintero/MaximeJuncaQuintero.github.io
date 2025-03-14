'use client'

import React from 'react';

class MessageParser {
  actionProvider: any;
  state: any;

  constructor(actionProvider: any, state: any) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message: string) {
    const lowerCaseMessage = message.toLowerCase();
    
    // First, try to handle multiple questions
    if (this.actionProvider.handleMultipleQuestions && this.actionProvider.handleMultipleQuestions(message)) {
      return; // Multiple questions were handled
    }
    
    // Handle greetings
    if (this.isGreeting(lowerCaseMessage)) {
      this.actionProvider.handleDefault();
      return;
    }
    
    // Handle Amazon role questions
    if (this.isAmazonRoleQuestion(lowerCaseMessage)) {
      this.actionProvider.handleAmazonRoleQuestion();
      return;
    }
    
    // Handle programming languages questions
    if (this.isProgrammingLanguagesQuestion(lowerCaseMessage)) {
      this.actionProvider.handleProgrammingLanguagesQuestion();
      return;
    }
    
    // Handle unique qualities questions
    if (this.isUniqueQualitiesQuestion(lowerCaseMessage)) {
      this.actionProvider.handleUniqueQualitiesQuestion();
      return;
    }
    
    // Handle role suitability questions
    if (this.isRoleSuitabilityQuestion(lowerCaseMessage)) {
      const role = this.extractRole(lowerCaseMessage);
      this.actionProvider.handleRoleSuitability(role);
      return;
    }
    
    // Handle experience questions
    if (this.isExperienceQuestion(lowerCaseMessage)) {
      this.actionProvider.handleExperienceRequest();
      return;
    }
    
    // Handle education questions
    if (this.isEducationQuestion(lowerCaseMessage)) {
      this.actionProvider.handleEducationRequest();
      return;
    }
    
    // Handle skills questions
    if (this.isSkillsQuestion(lowerCaseMessage)) {
      this.actionProvider.handleSkillsRequest();
      return;
    }
    
    // Handle project questions
    if (this.isProjectsQuestion(lowerCaseMessage)) {
      this.actionProvider.handleProjectsRequest();
      return;
    }
    
    // Handle contact questions
    if (this.isContactQuestion(lowerCaseMessage)) {
      this.actionProvider.handleContactRequest();
      return;
    }
    
    // Handle achievement questions
    if (this.isAchievementsQuestion(lowerCaseMessage)) {
      this.actionProvider.handleAchievementsRequest();
      return;
    }
    
    // Handle strengths questions
    if (this.isStrengthsQuestion(lowerCaseMessage)) {
      this.actionProvider.handleStrengthsRequest();
      return;
    }
    
    // Handle why hire questions
    if (this.isWhyHireQuestion(lowerCaseMessage)) {
      this.actionProvider.handleWhyHireRequest();
      return;
    }
    
    // Default response if no patterns match
    this.actionProvider.handleDefault();
  }
  
  // Helper methods to check message intent
  
  isGreeting(message: string): boolean {
    const greetings = ['hello', 'hi', 'hey', 'greetings', 'howdy', 'hola'];
    return greetings.some(greeting => message.includes(greeting)) && message.length < 20;
  }
  
  isAmazonRoleQuestion(message: string): boolean {
    return (
      message.includes('amazon') && 
      (message.includes('role') || 
       message.includes('work') || 
       message.includes('do') || 
       message.includes('position') || 
       message.includes('job') ||
       message.includes('experience') ||
       message.includes('tell'))
    );
  }
  
  isProgrammingLanguagesQuestion(message: string): boolean {
    return (
      (message.includes('programming') || 
       message.includes('language') || 
       message.includes('code') || 
       message.includes('coding')) ||
      (message.includes('python') || 
       message.includes('javascript') || 
       message.includes('typescript') || 
       message.includes('sql'))
    );
  }
  
  isUniqueQualitiesQuestion(message: string): boolean {
    return (
      (message.includes('unique') || 
       message.includes('special') || 
       message.includes('different') || 
       message.includes('stand out') || 
       message.includes('stands out') ||
       message.includes('makes him') ||
       message.includes('makes maxime'))
    );
  }
  
  isRoleSuitabilityQuestion(message: string): boolean {
    const suitabilityTerms = [
      'suitable', 'good fit', 'qualified', 'right for', 'fit for', 
      'good for', 'good candidate', 'would be good', 'match for'
    ];
    
    const roleTerms = [
      'role', 'position', 'job', 'program', 'data', 'product', 
      'operations', 'software', 'developer', 'engineer', 'analyst',
      'consultant', 'consulting', 'manager', 'management'
    ];
    
    return (
      suitabilityTerms.some(term => message.includes(term)) &&
      roleTerms.some(term => message.includes(term))
    );
  }
  
  extractRole(message: string): string {
    if (message.includes('program') && (message.includes('manage') || message.includes('management'))) {
      return 'program management';
    } else if ((message.includes('data') && message.includes('analy')) || message.includes('business intelligence')) {
      return 'data analyst';
    } else if (message.includes('product') && (message.includes('manage') || message.includes('management'))) {
      return 'product management';
    } else if (message.includes('operation') || message.includes('ops')) {
      return 'operations';
    } else if (message.includes('software') || message.includes('developer') || message.includes('engineer')) {
      return 'software development';
    } else if (message.includes('consult')) {
      return 'consultant';
    }
    
    // Extract the role from the message if possible
    const rolePattern = /fit for (a|an) ([a-z\s]+) (role|position)/i;
    const match = message.match(rolePattern);
    if (match && match[2]) {
      return match[2].trim();
    }
    
    return '';
  }
  
  isExperienceQuestion(message: string): boolean {
    const experienceTerms = [
      'experience', 'work', 'job', 'career', 'professional', 
      'employment', 'worked', 'working', 'background'
    ];
    
    return experienceTerms.some(term => message.includes(term)) &&
      !message.includes('education') && 
      !message.includes('school');
  }
  
  isEducationQuestion(message: string): boolean {
    const educationTerms = [
      'education', 'school', 'university', 'college', 'degree', 
      'academic', 'study', 'studied', 'background', 'qualification'
    ];
    
    return educationTerms.some(term => message.includes(term));
  }
  
  isSkillsQuestion(message: string): boolean {
    const skillsTerms = [
      'skill', 'ability', 'capable', 'competent', 'proficient', 
      'know how', 'expertise', 'good at', 'competency'
    ];
    
    return skillsTerms.some(term => message.includes(term));
  }
  
  isProjectsQuestion(message: string): boolean {
    const projectTerms = [
      'project', 'portfolio', 'work on', 'worked on', 'develop', 
      'created', 'built', 'made', 'implemented'
    ];
    
    return projectTerms.some(term => message.includes(term));
  }
  
  isContactQuestion(message: string): boolean {
    const contactTerms = [
      'contact', 'email', 'phone', 'reach', 'connect', 'get in touch', 
      'linkedin', 'social media', 'website'
    ];
    
    return contactTerms.some(term => message.includes(term));
  }
  
  isAchievementsQuestion(message: string): boolean {
    const achievementTerms = [
      'achievement', 'accomplish', 'success', 'award', 'recognition', 
      'milestone', 'proud', 'significant', 'important'
    ];
    
    return achievementTerms.some(term => message.includes(term));
  }
  
  isStrengthsQuestion(message: string): boolean {
    const strengthTerms = [
      'strength', 'strong', 'good at', 'excel', 'best', 'advantage', 
      'talent', 'gifted', 'skilled'
    ];
    
    return strengthTerms.some(term => message.includes(term));
  }
  
  isWhyHireQuestion(message: string): boolean {
    const hireTerms = [
      'why hire', 'why should', 'reason to hire', 'benefit', 'value', 
      'bring to', 'contribute', 'add value', 'asset'
    ];
    
    return hireTerms.some(term => message.includes(term));
  }
}

export default MessageParser; 