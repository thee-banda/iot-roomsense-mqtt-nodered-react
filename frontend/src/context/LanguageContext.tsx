import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'

type Language = 'TH' | 'EN'

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('TH')

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

const useLanguage = () => {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return context
}

type LocalizedText = Record<Language, string>

export type { Language, LocalizedText }
export { LanguageProvider, useLanguage }
