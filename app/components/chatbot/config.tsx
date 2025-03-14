import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import { BotAvatar } from './BotAvatar';
import { UserAvatar } from './UserAvatar';
import { ExperienceWidget } from './widgets/ExperienceWidget';
import { ProjectsWidget } from './widgets/ProjectsWidget';
import { SkillsWidget } from './widgets/SkillsWidget';
import { EducationWidget } from './widgets/EducationWidget';
import { FaBriefcase, FaCode, FaGraduationCap, FaTrophy, FaChartLine, FaEnvelope, FaLightbulb, FaQuestion } from 'react-icons/fa';

// Define the widget props interface
interface WidgetProps {
  actionProvider: any;
  setState: any;
  [key: string]: any;
}

// Import the actual IWidget interface from the library
import IWidget from 'react-chatbot-kit/build/src/interfaces/IWidget';

// Custom message component that can render HTML
const CustomMessage = ({ message }: { message: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: message }} />;
};

// SuggestedQuestions widget component
const SuggestedQuestions: React.FC<WidgetProps> = (props) => {
  const { questions } = props.payload || { questions: [] };
  
  return (
    <div className="options-container">
      {questions.map((question: any, index: number) => (
        <button 
          key={index}
          className="option-button"
          onClick={question.handler}
        >
          {question.icon} {question.text}
        </button>
      ))}
    </div>
  );
};

const config = {
  initialMessages: [
    createChatBotMessage("Hello! I'm Maxime's virtual assistant. I can help you learn about his professional background and qualifications. What would you like to know?", {
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
    botChatMessage: (props: any) => {
      return (
        <div className="react-chatbot-kit-chat-bot-message">
          <CustomMessage message={props.message} />
        </div>
      );
    },
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
            <FaBriefcase /> Work Experience
          </button>
          <button 
            className="option-button"
            onClick={() => props.actionProvider.handleProjectsRequest()}
          >
            <FaCode /> Projects
          </button>
          <button 
            className="option-button"
            onClick={() => props.actionProvider.handleSkillsRequest()}
          >
            <FaChartLine /> Skills
          </button>
          <button 
            className="option-button"
            onClick={() => props.actionProvider.handleEducationRequest()}
          >
            <FaGraduationCap /> Education
          </button>
          <button 
            className="option-button"
            onClick={() => props.actionProvider.handleAchievementsRequest()}
          >
            <FaTrophy /> Key Achievements
          </button>
          <button 
            className="option-button"
            onClick={() => props.actionProvider.handleStrengthsRequest()}
          >
            <FaLightbulb /> Strengths
          </button>
          <button 
            className="option-button"
            onClick={() => props.actionProvider.handleContactRequest()}
          >
            <FaEnvelope /> Contact Information
          </button>
        </div>
      ),
      props: {},
      mapStateToProps: [],
    },
    {
      widgetName: "suggestedQuestions",
      widgetFunc: (props: WidgetProps) => <SuggestedQuestions {...props} />,
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