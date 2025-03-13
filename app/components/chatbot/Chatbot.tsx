'use client'

import React, { useState, useEffect, useRef } from 'react';
import { Chatbot as ReactChatbot } from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import './chatbot.css';
import { FaComments, FaTimes } from 'react-icons/fa';

import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

export default function Chatbot() {
  const [showChat, setShowChat] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);

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
    setShowChat(!showChat);
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
        });
        
        observer.observe(messageContainer, { 
          childList: true, 
          subtree: true 
        });
        
        return () => observer.disconnect();
      }
    }
  }, [showChat]);

  return (
    <div className="fixed bottom-3 sm:bottom-5 right-3 sm:right-5 z-50">
      {showChat && (
        <div 
          ref={chatContainerRef}
          className="mb-4 rounded-lg shadow-xl overflow-hidden w-[calc(100vw-24px)] sm:w-96 md:w-[450px] max-h-[85vh] bg-dark-800 border border-gray-700" 
          style={{ 
            bottom: '60px', 
            position: 'absolute', 
            right: '0',
          }}
        >
          <div className="bg-purple-700 p-2 sm:p-3 flex justify-between items-center">
            <h3 className="text-white font-medium text-base sm:text-lg">Maxime's Assistant</h3>
            <button 
              onClick={toggleChat}
              className="text-white hover:text-gray-200 transition-colors p-1"
            >
              <FaTimes />
            </button>
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
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>
        </div>
      )}
      
      <button
        onClick={toggleChat}
        className="bg-purple-700 hover:bg-purple-600 text-white rounded-full p-3 sm:p-4 shadow-lg transition-colors flex items-center justify-center"
      >
        <FaComments size={20} className="sm:text-2xl" />
      </button>
    </div>
  );
} 