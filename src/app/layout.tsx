import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { TranslationContextProvider } from '@/contexts/TranslationContext'

export const metadata: Metadata = {
  title: 'Vagner Nerves - Portfólio',
  description:
    'Portfólio de Vagner Nerves contendo seus projetos na are de desenvolvimento de sistemas.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <TranslationContextProvider>
      <html lang="pt-br">
        <body className={`${inter.className} bg-zinc-950`}>{children}</body>
      </html>
    </TranslationContextProvider>
  )
}
