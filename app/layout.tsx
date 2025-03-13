import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import ChatbotWrapper from './components/chatbot/ChatbotWrapper'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata = {
  title: 'Maxime Junca - Portfolio',
  description: 'Portfolio of Maxime Junca - Business & Technology Professional',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <main className="min-h-screen bg-dark-900 text-white">
          {children}
          <ChatbotWrapper />
        </main>
      </body>
    </html>
  )
} 