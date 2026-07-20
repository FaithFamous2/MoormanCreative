import { createContext, useContext, useState, type ReactNode } from 'react'
import { t, type Lang } from '../translations'

type Translations = Record<string, any>

interface LanguageContextValue {
  lang: Lang
  toggle: () => void
  tx: Translations
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  toggle: () => {},
  tx: t.en,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const toggle = () => setLang((l) => (l === 'en' ? 'nl' : 'en'))
  return (
    <LanguageContext.Provider value={{ lang, toggle, tx: t[lang] as unknown as Translations }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
