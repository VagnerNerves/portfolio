import { useState } from 'react'
import Image from 'next/image'

import { useTranslation } from '@/hooks/useTranslation'

import flagBrazilPng from '../assets/iconflagBrazil.png'
import flagUsPng from '../assets/iconflagUS.png'

export function FloatingButtons() {
  const [isOptionsVisible, setIsOptionsVisible] = useState<boolean>(false)

  const { t, language, setLanguage } = useTranslation()
  const translation = t()

  function handleAlterLanguage() {
    setLanguage(language === 'pt-BR' ? 'en' : 'pt-BR')
    setIsOptionsVisible(false)
  }

  return (
    <>
      <button
        title={translation.floatingButtons.buttonOptions}
        onClick={() => setIsOptionsVisible(isCurrent => !isCurrent)}
        data-active={isOptionsVisible}
        className="z-20 fixed bottom-24 sm:bottom-9 right-3 sm:right-9 w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-500
        font-semibold text-base flex justify-center items-center text-center
        data-[active=true]:text-zinc-200 data-[active=true]:border-blue-900 data-[active=true]:bg-blue-900
         hover:text-zinc-200 hover:border-blue-900 hover:bg-blue-900"
      >
        {isOptionsVisible ? <span>-</span> : <span>+</span>}
      </button>
      {isOptionsVisible && (
        <>
          <button
            title={translation.floatingButtons.buttonTranslate}
            onClick={handleAlterLanguage}
            className="z-20 fixed bottom-32 sm:bottom-20 right-11 sm:right-14 w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-500
        font-semibold text-base flex justify-center items-center text-center hover:text-zinc-400 hover:border-zinc-700"
          >
            <Image
              src={language === 'pt-BR' ? flagUsPng : flagBrazilPng}
              alt={translation.floatingButtons.altImageTranslate}
              width={34}
              className="filter grayscale hover:grayscale-0"
            />
          </button>

          {/* <button
            title="Traduzir para Português Brasil."
            className="z-20 fixed bottom-10 right-20 w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-500
        font-semibold text-base flex justify-center items-center text-center hover:text-zinc-400 hover:border-zinc-700"
          >
            +
          </button> */}
        </>
      )}
    </>
  )
}
