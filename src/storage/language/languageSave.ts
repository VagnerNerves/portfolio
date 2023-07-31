import { LANGUAGE } from '../storageConfig'

import { languageTypes } from '@/translations/types'

export function languageSave(translation: languageTypes) {
  localStorage.setItem(LANGUAGE, translation)
}
