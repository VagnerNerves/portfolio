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
      case 'pt-br':
        return ptBRTranslation
      default:
        return enTranslation
    }
  }

  function searchNavigationLanguage() {
    const isLanguagePt =
      navigator.language.toLowerCase() === 'pt-br' ||
      navigator.language.startsWith('pt')

    setLanguage(isLanguagePt ? 'pt-br' : 'en')
  }

  useEffect(() => {
    if (!!language) {
      const translation = t()

      document.title = translation.titlePage

      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', translation.descriptionPage)
      }

      document.documentElement.setAttribute('lang', language)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language])

  useEffect(() => {
    const languageStorage = languageGet() as languageTypes

    if (languageStorage) {
      setLanguage(languageStorage)
    } else {
      searchNavigationLanguage()
    }
  }, [])

  return (
    <TranslationContext.Provider value={{ language, saveLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  )
}
