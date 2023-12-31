import 'bootstrap/dist/css/bootstrap.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import BootstrapClient from './components/UI/BootstrapClient'
import React from 'react';



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arena Strength & Performance',
  description: 'Lexington Kentucky\'s premier weight training gym.',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className || ''}>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
