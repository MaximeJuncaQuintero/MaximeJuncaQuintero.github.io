import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import ChatbotWrapper from './components/chatbot/ChatbotWrapper'
import SectionNav from './components/SectionNav'
import GoogleAnalytics from './components/GoogleAnalytics'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata = {
  title: 'Maxime Junca - Portfolio',
  description: 'Portfolio of Maxime Junca - Business & Technology Professional',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <GoogleAnalytics />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-TX52GJ3Z"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
            title="GTM"
          />
        </noscript>
        <main className="min-h-screen bg-dark-900 text-white">
          <SectionNav />
          {children}
          <ChatbotWrapper />
        </main>
      </body>
    </html>
  )
} 