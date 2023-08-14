'use client'

import { ReactNode, createContext, useEffect, useState } from 'react'

import { languageTypes, translationsProps } from '@/translations/types'

import { enTranslation } from '@/translations/en'
import { ptBRTranslation } from '@/translations/pt-BR'
import { languageGet } from '@/storage/language/languageGet'
import { languageSave } from '@/storage/language/languageSave'

export type TranslationContextDataProps = {
  language: languageTypes | undefined
  saveLanguage: (language: languageTypes) => void
  t: () => translationsProps
}

type TranslationContextProviderProps = {
  children: ReactNode
}

export const TranslationContext = createContext<TranslationContextDataProps>(
  {} as TranslationContextDataProps
)

export function TranslationContextProvider({
  children
}: TranslationContextProviderProps) {
  const [language, setLanguage] = useState<languageTypes>('' as languageTypes)

  function saveLanguage(language: languageTypes) {
    languageSave(language)
    setLanguage(language)
  }

  function t(): translationsProps {
    switch (language) {
      case 'en':
        return enTranslation
      case 'pt-BR':
        return ptBRTranslation
      default:
        return enTranslation
    }
  }

  function searchNavigationLanguage() {
    navigator.language === 'pt-BR' || navigator.language.startsWith('pt')
      ? setLanguage('pt-BR')
      : setLanguage('en')
  }

  useEffect(() => {
    const languageStorage = languageGet() as languageTypes

    !!languageStorage
      ? setLanguage(languageStorage)
      : searchNavigationLanguage()
  }, [])

  return (
    <TranslationContext.Provider value={{ language, saveLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  )
}
