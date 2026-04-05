'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Chatbot as ReactChatbot } from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import './chatbot.css'
import { FaComments, FaTimes, FaTrash } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi2'

import config from './config'
import MessageParser from './MessageParser'
import ActionProvider from './ActionProvider'

export default function Chatbot() {
  const [showChat, setShowChat]     = useState(false)
  const [key, setKey]               = useState(Date.now())
  const [isClosing, setIsClosing]   = useState(false)
  const chatContainerRef            = useRef<HTMLDivElement>(null)

  const toggleChat = () => {
    if (showChat) {
      setIsClosing(true)
      setTimeout(() => { setShowChat(false); setIsClosing(false) }, 280)
    } else {
      setShowChat(true)
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'chatbot_open', { event_category: 'chatbot', event_label: 'open', value: 1 })
      }
    }
  }

  const clearChat = () => setKey(Date.now())

  /* ── Auto-scroll to newest message ─────────────────────────────────────── */
  useEffect(() => {
    if (!showChat) return
    const container = chatContainerRef.current
    if (!container) return

    const scrollToBottom = () => {
      const msgBox = container.querySelector('.react-chatbot-kit-chat-message-container')
      if (msgBox) msgBox.scrollTop = msgBox.scrollHeight
    }

    const observer = new MutationObserver(scrollToBottom)
    const msgBox = container.querySelector('.react-chatbot-kit-chat-message-container')
    if (msgBox) {
      observer.observe(msgBox, { childList: true, subtree: true })
      scrollToBottom()
    }
    return () => observer.disconnect()
  }, [showChat, key])

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end">

      {/* ── Chat window ──────────────────────────────────────────────────── */}
      {showChat && (
        <div
          ref={chatContainerRef}
          className={`cb-window mb-4 ${isClosing ? 'cb-exit' : 'cb-enter'}`}
        >
          {/* Header */}
          <div className="cb-header">
            <div className="cb-header-left">
              <div className="cb-header-icon">
                <HiSparkles size={16} />
              </div>
              <div>
                <p className="cb-header-title">Maxime's Assistant</p>
                <p className="cb-header-status">
                  <span className="cb-status-dot" />
                  Online · Responds instantly
                </p>
              </div>
            </div>
            <div className="cb-header-actions">
              <button
                onClick={clearChat}
                className="cb-action-btn"
                aria-label="Clear chat"
                title="Clear conversation"
              >
                <FaTrash size={12} />
                <span>Clear</span>
              </button>
              <button
                onClick={toggleChat}
                className="cb-action-btn cb-close-btn"
                aria-label="Close chat"
              >
                <FaTimes size={14} />
              </button>
            </div>
          </div>

          {/* Message area */}
          <div className="cb-messages">
            <ReactChatbot
              key={key}
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>
        </div>
      )}

      {/* ── FAB button ───────────────────────────────────────────────────── */}
      <button
        onClick={toggleChat}
        className={`cb-fab ${showChat ? 'cb-fab-active' : ''}`}
        aria-label={showChat ? 'Close chat' : 'Open chat'}
      >
        <div className="cb-fab-icon">
          {showChat
            ? <FaTimes size={18} />
            : <FaComments size={20} />}
        </div>
        {!showChat && <span className="cb-fab-pulse" />}
      </button>
    </div>
  )
}
