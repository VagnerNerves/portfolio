import Image from 'next/image'

import { useTranslation } from '@/hooks/useTranslation'

import flagBrazilPng from '@/assets/iconFlagBrazil.png'
import flagUsPng from '@/assets/iconFlagUS.png'

export function FloatingButtons() {
  const { t, language, saveLanguage } = useTranslation()
  const translation = t()

  function handleAlterLanguage() {
    saveLanguage(language === 'pt-br' ? 'en' : 'pt-br')
  }

  return (
    <button
      title={translation.floatingButtons.buttonTranslate}
      onClick={handleAlterLanguage}
      className="z-20 fixed bottom-[100px] sm:bottom-9 right-3 sm:right-9 w-8 h-8 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-500 font-semibold text-base flex justify-center items-center text-center hover:text-zinc-400 hover:border-zinc-700"
    >
      <Image
        src={language === 'pt-br' ? flagUsPng : flagBrazilPng}
        alt={translation.floatingButtons.altImageTranslate}
        width={28}
        className="filter grayscale hover:grayscale-0"
        priority={true}
      />
    </button>
  )
}
