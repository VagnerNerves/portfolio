'use client'

import { useTranslation } from '@/hooks/useTranslation'

import { SectionContact } from '@/components/SectionContact'
import { Header } from '@/components/Header'
import { SectionAbout } from '@/components/SectionAbout'
import { SectionHome } from '@/components/SectionHome'
import { SectionProjects } from '@/components/SectionProjects'
import { Footer } from '@/components/Footer'
import { FloatingButtons } from '@/components/FloatingButtons'

export default function Home() {
  const { language } = useTranslation()

  return (
    <main className="">
      {!!language && (
        <>
          <FloatingButtons />
          <Header />
          <SectionHome />
          <SectionAbout />
          <SectionProjects />
          <SectionContact />
          <Footer />
        </>
      )}
    </main>
  )
}
