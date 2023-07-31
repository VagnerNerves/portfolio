import { useContext } from 'react'

import { TranslationContext } from '@/contexts/TranslationContext'

export function useTranslation() {
  const context = useContext(TranslationContext)

  return context
}
