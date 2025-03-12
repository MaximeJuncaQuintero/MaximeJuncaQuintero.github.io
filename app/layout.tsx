import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Maxime Junca - Portfolio',
  description: 'Portfolio of Maxime Junca - Business & Technology Professional',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
          {children}
        </main>
      </body>
    </html>
  )
} 