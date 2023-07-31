'use client'

import { SectionContact } from '@/components/SectionContact'
import { Header } from '@/components/Header'
import { SectionAbout } from '@/components/SectionAbout'
import { SectionHome } from '@/components/SectionHome'
import { SectionProjects } from '@/components/SectionProjects'
import { Footer } from '@/components/Footer'
import { useTranslation } from '@/hooks/useTranslation'

export default function Home() {
  const { language } = useTranslation()

  return (
    <main className="">
      {!!language && (
        <>
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
