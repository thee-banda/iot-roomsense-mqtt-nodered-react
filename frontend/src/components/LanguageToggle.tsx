import { type Language, useLanguage } from '../context/LanguageContext.tsx'

type LanguageToggleProps = {
  className?: string
  size?: 'sm' | 'md'
}

const sizeStyles = {
  md: {
    container: 'gap-2 p-1',
    button: 'px-3 py-1 text-xs',
  },
  sm: {
    container: 'gap-1 p-0.5',
    button: 'px-2 py-[2px] text-[11px]',
  },
}

const LanguageToggle = ({ className, size = 'md' }: LanguageToggleProps) => {
  const { language, setLanguage } = useLanguage()
  const containerClasses = ['inline-flex items-center rounded-full bg-slate-100/80 shadow-inner', sizeStyles[size].container, className]
    .filter(Boolean)
    .join(' ')

  const makeButtonClasses = (target: Language) =>
    [
      'font-semibold transition-colors rounded-full border',
      sizeStyles[size].button,
      language === target
        ? 'border-emerald-600 bg-emerald-600 text-white'
        : 'border-transparent bg-white text-slate-600 hover:border-slate-200 hover:text-slate-900',
    ].join(' ')

  return (
    <div className={containerClasses}>
      <button
        type="button"
        className={makeButtonClasses('TH')}
        aria-pressed={language === 'TH'}
        onClick={() => setLanguage('TH')}
      >
        TH
      </button>
      <button
        type="button"
        className={makeButtonClasses('EN')}
        aria-pressed={language === 'EN'}
        onClick={() => setLanguage('EN')}
      >
        EN
      </button>
    </div>
  )
}

export default LanguageToggle
