'use client'

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import the Chatbot component to avoid SSR issues
const Chatbot = dynamic(() => import('./Chatbot'), {
  ssr: false,
  loading: () => null
})

export default function ChatbotWrapper() {
  const [mounted, setMounted] = useState(false)

  // Only render the chatbot on the client side
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return <Chatbot />
} 