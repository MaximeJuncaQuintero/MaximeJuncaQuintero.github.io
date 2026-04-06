import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import ChatbotWrapper from './components/chatbot/ChatbotWrapper'
import SectionNav from './components/SectionNav'
import GoogleAnalytics from './components/GoogleAnalytics'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'

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
      <head>
        {/* Anti-flash: apply stored theme before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t==='dark'){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){document.documentElement.classList.remove('dark')}})()`,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
          <GoogleAnalytics />
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-TBT7CJ4Q"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
              title="GTM"
            />
          </noscript>
          <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
            <SectionNav />
            {children}
            <ChatbotWrapper />
          </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
