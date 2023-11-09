import Navbar from '@/public/components/navbar'
import Footer from '@/public/components/navbar/footer'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GlobalThemeProvider } from './context/store'
import { useGlobalContext } from './context/store'
import { useEffect } from 'react'
import './globals.css';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
<body>
<GlobalThemeProvider>
    {children}
    </GlobalThemeProvider>
</body>
   
      
      
    </html>
  )
}
