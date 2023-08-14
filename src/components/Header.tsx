'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { useTranslation } from '@/hooks/useTranslation'

import { House, User, CodeBlock, At } from '@/assets/icons/PhosphorIcons'

import LogoV from '../assets/logoV.svg'

const sections = ['home', 'about', 'projects', 'contact'] as const
type SECTIONS_TYPE = (typeof sections)[number]

export function Header() {
  const [activeSection, setActiveSection] = useState<SECTIONS_TYPE>('home')

  const { t } = useTranslation()
  const translation = t()

  function handleScroll() {
    const scrollPosition = window.scrollY

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i])

      if (!section?.offsetTop) {
        setActiveSection('home')
      } else if (section.offsetTop <= scrollPosition + 100) {
        setActiveSection(sections[i])
        break
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className="fixed bottom-0 sm:top-0 w-full px-2 py-5 h-24 z-50 bg-zinc-950 ">
      <nav className="h-full flex justify-around sm:justify-center items-center sm:gap-16 ">
        <Link
          href="#home"
          data-active={activeSection === 'home'}
          className="font-semibold text-xs sm:text-sm text-zinc-400 data-[active=true]:text-zinc-100 hover:text-zinc-100 flex flex-col justify-center items-center"
        >
          <House weight="bold" size={28} className=" sm:hidden" />
          {translation.header.home}
        </Link>

        <Link
          href="#about"
          data-active={activeSection === 'about'}
          className="font-semibold text-xs sm:text-sm text-zinc-400 data-[active=true]:text-zinc-100 hover:text-zinc-100 flex flex-col justify-center items-center"
        >
          <User weight="bold" size={28} className=" sm:hidden" />
          {translation.header.about}
        </Link>

        <Link href="/">
          <Image alt="Logo Vagner Nerves" src={LogoV} className="w-8 sm:w-6" />
        </Link>

        <Link
          href="#projects"
          data-active={activeSection === 'projects'}
          className="font-semibold text-xs sm:text-sm text-zinc-400 data-[active=true]:text-zinc-100 hover:text-zinc-100 flex flex-col justify-center items-center"
        >
          <CodeBlock weight="bold" size={28} className=" sm:hidden" />
          {translation.header.projects}
        </Link>

        <Link
          href="#contact"
          data-active={activeSection === 'contact'}
          className="font-semibold text-xs sm:text-sm text-zinc-400 data-[active=true]:text-zinc-100 hover:text-zinc-100 flex flex-col justify-center items-center"
        >
          <At weight="bold" size={28} className=" sm:hidden" />
          {translation.header.contact}
        </Link>
      </nav>
    </header>
  )
}
