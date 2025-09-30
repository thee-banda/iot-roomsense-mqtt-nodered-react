
import { useLanguage } from '../context/LanguageContext.tsx'

const footerCopy = {
  TH: {
    brand: 'RoomSense',
    links: [
      { label: 'ฝ่ายสนับสนุน', href: '#' },
      { label: 'ความเป็นส่วนตัว', href: '#' },
      { label: 'เงื่อนไข', href: '#' },
    ],
  },
  EN: {
    brand: 'RoomSense',
    links: [
      { label: 'Support', href: '#' },
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  },
} as const

const Footer = () => {
  const { language } = useLanguage()
  const copy = footerCopy[language]

  return (
    <footer className="w-full max-w-5xl rounded-2xl border border-slate-200 bg-white/95 text-slate-600 shadow-[0_12px_32px_rgba(15,23,42,0.1)]">
      <div className="flex flex-col gap-4 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-4">
        <span className="text-xs uppercase tracking-[0.28em] text-slate-400">{copy.brand}</span>
        <div className="flex w-full flex-wrap items-center justify-between gap-3 sm:w-auto sm:justify-end">
          <nav className="flex flex-wrap items-center gap-3 text-xs sm:text-sm sm:gap-4">
            {copy.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-500 transition-colors hover:text-slate-900"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer