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
    
    // Handle role suitability questions
    if (
      (lowerCaseMessage.includes('suitable') ||
       lowerCaseMessage.includes('good fit') ||
       lowerCaseMessage.includes('qualified') ||
       lowerCaseMessage.includes('right for') ||
       lowerCaseMessage.includes('fit for') ||
       lowerCaseMessage.includes('good for') ||
       lowerCaseMessage.includes('good candidate') ||
       lowerCaseMessage.includes('would be good')) &&
      (lowerCaseMessage.includes('role') ||
       lowerCaseMessage.includes('position') ||
       lowerCaseMessage.includes('job') ||
       lowerCaseMessage.includes('program') ||
       lowerCaseMessage.includes('data') ||
       lowerCaseMessage.includes('product') ||
       lowerCaseMessage.includes('operations') ||
       lowerCaseMessage.includes('software') ||
       lowerCaseMessage.includes('developer') ||
       lowerCaseMessage.includes('engineer') ||
       lowerCaseMessage.includes('analyst'))
    ) {
      // Extract potential role
      let role = '';
      if (lowerCaseMessage.includes('program') && (lowerCaseMessage.includes('manage') || lowerCaseMessage.includes('management'))) {
        role = 'program management';
      } else if ((lowerCaseMessage.includes('data') && lowerCaseMessage.includes('analy')) || lowerCaseMessage.includes('business intelligence')) {
        role = 'data analyst';
      } else if (lowerCaseMessage.includes('product') && (lowerCaseMessage.includes('manage') || lowerCaseMessage.includes('management'))) {
        role = 'product management';
      } else if (lowerCaseMessage.includes('operation') || lowerCaseMessage.includes('ops')) {
        role = 'operations';
      } else if (lowerCaseMessage.includes('software') || lowerCaseMessage.includes('developer') || lowerCaseMessage.includes('engineer')) {
        role = 'software development';
      }
      
      return this.actionProvider.handleRoleSuitability(role);
    }
    
    // Handle recruiter-specific questions about achievements
    if (
      (lowerCaseMessage.includes('achievement') ||
       lowerCaseMessage.includes('accomplish') ||
       lowerCaseMessage.includes('success') ||
       lowerCaseMessage.includes('proud of')) &&
      (lowerCaseMessage.includes('what') ||
       lowerCaseMessage.includes('tell me') ||
       lowerCaseMessage.includes('your'))
    ) {
      return this.actionProvider.handleAchievementsRequest();
    }
    
    // Handle recruiter-specific questions about strengths
    if (
      (lowerCaseMessage.includes('strength') ||
       lowerCaseMessage.includes('good at') ||
       lowerCaseMessage.includes('excel at') ||
       lowerCaseMessage.includes('best at')) &&
      (lowerCaseMessage.includes('what') ||
       lowerCaseMessage.includes('tell me') ||
       lowerCaseMessage.includes('your'))
    ) {
      return this.actionProvider.handleStrengthsRequest();
    }
    
    // Handle recruiter-specific questions about why hire
    if (
      (lowerCaseMessage.includes('why hire') ||
       lowerCaseMessage.includes('why should') ||
       lowerCaseMessage.includes('why would') ||
       lowerCaseMessage.includes('reason to hire') ||
       lowerCaseMessage.includes('value')) &&
      (lowerCaseMessage.includes('you') ||
       lowerCaseMessage.includes('maxime') ||
       lowerCaseMessage.includes('candidate'))
    ) {
      return this.actionProvider.handleWhyHireRequest();
    }
    
    // Handle education-related questions
    if (
      lowerCaseMessage.includes('education') ||
      lowerCaseMessage.includes('study') ||
      lowerCaseMessage.includes('studies') ||
      lowerCaseMessage.includes('school') ||
      lowerCaseMessage.includes('university') ||
      lowerCaseMessage.includes('college') ||
      lowerCaseMessage.includes('degree') ||
      lowerCaseMessage.includes('academic') ||
      lowerCaseMessage.includes('graduate') ||
      lowerCaseMessage.includes('graduated')
    ) {
      // Check if asking about specific schools
      if (
        lowerCaseMessage.includes('dublin') || 
        lowerCaseMessage.includes('dcu') ||
        lowerCaseMessage.includes('neoma') ||
        lowerCaseMessage.includes('reims') ||
        lowerCaseMessage.includes('where')
      ) {
        // Extract school name
        let school = '';
        if (lowerCaseMessage.includes('dublin') || lowerCaseMessage.includes('dcu')) {
          school = 'dublin';
        } else if (lowerCaseMessage.includes('neoma') || lowerCaseMessage.includes('reims')) {
          school = 'neoma';
        }
        
        return this.actionProvider.handleSchoolRequest(school);
      } else {
        // General education question
        return this.actionProvider.handleEducationRequest();
      }
    }
    
    // Handle programming language questions
    if (
      (lowerCaseMessage.includes('programming') ||
       lowerCaseMessage.includes('code') ||
       lowerCaseMessage.includes('coding') ||
       lowerCaseMessage.includes('developer') ||
       lowerCaseMessage.includes('development')) ||
      (lowerCaseMessage.includes('python') ||
       lowerCaseMessage.includes('javascript') ||
       lowerCaseMessage.includes('typescript') ||
       lowerCaseMessage.includes('sql'))
    ) {
      // Check if asking about specific language
      const languages = ['python', 'javascript', 'typescript', 'sql'];
      for (const lang of languages) {
        if (lowerCaseMessage.includes(lang)) {
          return this.actionProvider.handleSpecificSkill(lang);
        }
      }
      
      // General programming languages question
      return this.actionProvider.handleProgrammingLanguagesRequest();
    }
    
    // Handle duration/time-related questions
    if (
      (lowerCaseMessage.includes('how long') || 
       lowerCaseMessage.includes('how many years') || 
       lowerCaseMessage.includes('how many months') ||
       lowerCaseMessage.includes('duration') ||
       lowerCaseMessage.includes('time')) &&
      (lowerCaseMessage.includes('work') || 
       lowerCaseMessage.includes('experience'))
    ) {
      // Check if asking about specific role
      if (lowerCaseMessage.includes('project manager')) {
        return this.actionProvider.handleExperienceDuration('project manager');
      } else if (lowerCaseMessage.includes('operations manager')) {
        return this.actionProvider.handleExperienceDuration('operations manager');
      } else if (lowerCaseMessage.includes('founder')) {
        return this.actionProvider.handleExperienceDuration('founder');
      } else {
        // General experience duration
        return this.actionProvider.handleExperienceDuration();
      }
    }
    
    // Handle company-specific questions
    if (
      lowerCaseMessage.includes('amazon') ||
      lowerCaseMessage.includes('tenoris') ||
      lowerCaseMessage.includes('hub') ||
      lowerCaseMessage.includes('ats')
    ) {
      // Extract company name
      let company = '';
      if (lowerCaseMessage.includes('amazon')) {
        company = 'amazon';
      } else if (lowerCaseMessage.includes('tenoris')) {
        company = 'tenoris';
      }
      
      return this.actionProvider.handleCompanyExperience(company);
    }
    
    // Handle specific skill questions
    if (
      (lowerCaseMessage.includes('know') || 
       lowerCaseMessage.includes('skill') || 
       lowerCaseMessage.includes('proficient') ||
       lowerCaseMessage.includes('experience with') ||
       lowerCaseMessage.includes('familiar with'))
    ) {
      // Extract potential skill
      const skills = [
        'python', 'sql', 'data analysis', 'excel', 'mongodb', 'react', 'node.js',
        'project management', 'operations', 'strategic planning', 'problem solving',
        'kubernetes', 'graphql', 'aws'
      ];
      
      for (const skill of skills) {
        if (lowerCaseMessage.includes(skill)) {
          return this.actionProvider.handleSpecificSkill(skill);
        }
      }
    }
    
    // Handle general experience questions
    if (
      lowerCaseMessage.includes('experience') ||
      lowerCaseMessage.includes('work') ||
      lowerCaseMessage.includes('job') ||
      lowerCaseMessage.includes('career') 
    ) {
      return this.actionProvider.handleExperienceRequest();
    }
    
    // Handle project questions
    if (
      lowerCaseMessage.includes('project') ||
      lowerCaseMessage.includes('portfolio') ||
      lowerCaseMessage.includes('built') ||
      lowerCaseMessage.includes('created') ||
      lowerCaseMessage.includes('developed')
    ) {
      return this.actionProvider.handleProjectsRequest();
    }
    
    // Handle general skill questions
    if (
      lowerCaseMessage.includes('skill') ||
      lowerCaseMessage.includes('ability') ||
      lowerCaseMessage.includes('capable') ||
      lowerCaseMessage.includes('proficient')
    ) {
      return this.actionProvider.handleSkillsRequest();
    }
    
    // Handle contact questions
    if (
      lowerCaseMessage.includes('contact') ||
      lowerCaseMessage.includes('email') ||
      lowerCaseMessage.includes('reach') ||
      lowerCaseMessage.includes('connect') ||
      lowerCaseMessage.includes('linkedin') ||
      lowerCaseMessage.includes('phone') ||
      lowerCaseMessage.includes('call')
    ) {
      return this.actionProvider.handleContactRequest();
    }
    
    return this.actionProvider.handleDefault();
  }
}

export default MessageParser; 