import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import { BotAvatar } from './BotAvatar';
import { UserAvatar } from './UserAvatar';
import { ExperienceWidget } from './widgets/ExperienceWidget';
import { ProjectsWidget } from './widgets/ProjectsWidget';
import { SkillsWidget } from './widgets/SkillsWidget';
import { EducationWidget } from './widgets/EducationWidget';

// Define the widget props interface
interface WidgetProps {
  actionProvider: any;
  setState: any;
  [key: string]: any;
}

// Import the actual IWidget interface from the library
import IWidget from 'react-chatbot-kit/build/src/interfaces/IWidget';

const config = {
  initialMessages: [
    createChatBotMessage("Hello! I'm Maxime's virtual assistant. How can I help you learn more about his experience and skills?", {
      widget: "options",
    }),
  ],
  botName: "Maxime's Assistant",
  customStyles: {
    botMessageBox: {
      backgroundColor: 'rgb(139, 92, 246)',
    },
    chatButton: {
      backgroundColor: 'rgb(139, 92, 246)',
    },
  },
  customComponents: {
    botAvatar: (props: any) => <BotAvatar {...props} />,
    userAvatar: (props: any) => <UserAvatar {...props} />,
  },
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props: WidgetProps) => (
        <div className="options-container">
          <button 
            className="option-button"
            onClick={() => props.actionProvider.handleExperienceRequest()}
          >
            Tell me about Maxime's experience
          </button>
          <button 
            className="option-button"
            onClick={() => props.actionProvider.handleProjectsRequest()}
          >
            What projects has Maxime worked on?
          </button>
          <button 
            className="option-button"
            onClick={() => props.actionProvider.handleSkillsRequest()}
          >
            What are Maxime's skills?
          </button>
          <button 
            className="option-button"
            onClick={() => props.actionProvider.handleEducationRequest()}
          >
            What is Maxime's educational background?
          </button>
          <button 
            className="option-button"
            onClick={() => props.actionProvider.handleAchievementsRequest()}
          >
            What are Maxime's key achievements?
          </button>
          <button 
            className="option-button"
            onClick={() => props.actionProvider.handleStrengthsRequest()}
          >
            What are Maxime's strengths?
          </button>
          <button 
            className="option-button"
            onClick={() => props.actionProvider.handleContactRequest()}
          >
            How can I contact Maxime?
          </button>
        </div>
      ),
      props: {},
      mapStateToProps: [],
    },
    {
      widgetName: "experience",
      widgetFunc: (props: WidgetProps) => <ExperienceWidget {...props} />,
      props: {},
      mapStateToProps: [],
    },
    {
      widgetName: "projects",
      widgetFunc: (props: WidgetProps) => <ProjectsWidget {...props} />,
      props: {},
      mapStateToProps: [],
    },
    {
      widgetName: "skills",
      widgetFunc: (props: WidgetProps) => <SkillsWidget {...props} />,
      props: {},
      mapStateToProps: [],
    },
    {
      widgetName: "education",
      widgetFunc: (props: WidgetProps) => <EducationWidget {...props} />,
      props: {},
      mapStateToProps: [],
    },
  ] as IWidget[],
};

export default config; 