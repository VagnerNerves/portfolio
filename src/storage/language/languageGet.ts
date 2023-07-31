import { LANGUAGE } from "../storageConfig";

export function languageGet() {
  return localStorage.getItem(LANGUAGE);
}
