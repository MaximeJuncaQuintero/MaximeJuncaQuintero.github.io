'use client'

import React, { useState, useEffect, useRef } from 'react';
import { Chatbot as ReactChatbot } from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import './chatbot.css';
import { FaComments, FaTimes, FaTrash, FaRobot } from 'react-icons/fa';

import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

export default function Chatbot() {
  const [showChat, setShowChat] = useState(false);
  const [key, setKey] = useState(Date.now()); // Key for forcing re-render on clear
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  // Check if the screen is mobile or desktop
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleChat = () => {
    if (showChat) {
      // Add closing animation
      setIsClosing(true);
      setTimeout(() => {
        setShowChat(false);
        setIsClosing(false);
      }, 300); // Match this with the CSS animation duration
    } else {
      setShowChat(true);
    }
  };

  const clearChat = () => {
    // Generate a new key to force a complete re-render of the chatbot
    setKey(Date.now());
  };

  // This effect will ensure the chat is scrolled to show the latest messages
  useEffect(() => {
    if (showChat && chatContainerRef.current) {
      const messageContainer = chatContainerRef.current.querySelector('.react-chatbot-kit-chat-message-container');
      if (messageContainer) {
        // Set initial scroll position to show the beginning of the conversation
        messageContainer.scrollTop = 0;
      }
    }
  }, [showChat]);

  // Add a mutation observer to detect new messages and scroll appropriately
  useEffect(() => {
    if (showChat && chatContainerRef.current) {
      const messageContainer = chatContainerRef.current.querySelector('.react-chatbot-kit-chat-message-container');
      
      if (messageContainer) {
        const observer = new MutationObserver((mutations) => {
          // When new content is added, scroll to show the latest message
          // But not all the way to the bottom to ensure text is visible
          const scrollHeight = messageContainer.scrollHeight;
          const clientHeight = messageContainer.clientHeight;
          
          // Scroll to position that shows the latest message but not all the way to the bottom
          // This ensures the text answer is visible without scrolling
          messageContainer.scrollTop = Math.max(0, scrollHeight - clientHeight - 100);
          
          // Show typing indicator briefly when new messages are added
          setIsTyping(true);
          setTimeout(() => setIsTyping(false), 1000);
        });
        
        observer.observe(messageContainer, { 
          childList: true, 
          subtree: true 
        });
        
        return () => observer.disconnect();
      }
    }
  }, [showChat]);

  // Add an effect to fix HTML rendering in messages
  useEffect(() => {
    if (showChat && chatContainerRef.current) {
      // Function to process messages and ensure HTML is rendered correctly
      const processMessages = () => {
        const botMessages = chatContainerRef.current?.querySelectorAll('.react-chatbot-kit-chat-bot-message');
        
        if (botMessages) {
          botMessages.forEach(message => {
            // Check if the message contains HTML tags but hasn't been processed
            const messageText = message.textContent || '';
            if (messageText.includes('<div') || messageText.includes('<p>') || messageText.includes('<ul>')) {
              // If the message contains HTML tags but is displayed as text, refresh the chatbot
              console.log('Found unprocessed HTML in message, refreshing chatbot');
              setKey(Date.now()); // Force a re-render
            }
          });
        }
      };
      
      // Process messages after a short delay to ensure they're loaded
      const timer = setTimeout(processMessages, 500);
      
      return () => clearTimeout(timer);
    }
  }, [showChat]);

  return (
    <div className="fixed bottom-3 sm:bottom-5 right-3 sm:right-5 z-50">
      {showChat && (
        <div 
          ref={chatContainerRef}
          className={`mb-4 rounded-lg shadow-xl overflow-hidden w-[calc(100vw-24px)] sm:w-96 md:w-[450px] max-h-[85vh] bg-dark-800 border border-gray-700 ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
          style={{ 
            bottom: '60px', 
            position: 'absolute', 
            right: '0',
            animation: isClosing ? 'fadeOut 0.3s ease-in forwards' : 'fadeIn 0.3s ease-out forwards',
          }}
        >
          <div className="chatbot-header">
            <h3 className="text-white font-medium text-base sm:text-lg">
              <FaRobot /> Maxime's Assistant
            </h3>
            <div className="flex items-center">
              <button 
                onClick={clearChat}
                className="clear-chat-button mr-2"
                aria-label="Clear chat"
                title="Clear chat"
              >
                <FaTrash size={14} /> <span className="hidden sm:inline">Clear</span>
              </button>
              <button 
                onClick={toggleChat}
                className="text-white hover:text-gray-200 transition-colors p-1"
                aria-label="Close chat"
              >
                <FaTimes />
              </button>
            </div>
          </div>
          <div 
            className="chatbot-container" 
            style={{ 
              maxHeight: 'calc(85vh - 50px)', 
              overflowY: 'auto',
              height: isMobile ? '400px' : '500px'
            }}
          >
            <ReactChatbot
              key={key} // This forces a re-render when clearing the chat
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
            
            {isTyping && (
              <div className="typing-indicator ml-12 mb-4">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </div>
        </div>
      )}
      
      <button
        onClick={toggleChat}
        className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white rounded-full p-3 sm:p-4 shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-105 hover:shadow-xl"
        aria-label={showChat ? "Close chat" : "Open chat"}
        style={{
          boxShadow: '0 4px 14px rgba(139, 92, 246, 0.3)'
        }}
      >
        <FaComments size={20} className="sm:text-2xl" />
      </button>
    </div>
  );
}

// Add these animations to globals.css
// @keyframes fadeIn {
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// }

// @keyframes fadeOut {
//   from { opacity: 1; transform: translateY(0); }
//   to { opacity: 0; transform: translateY(20px); }
// } 