import LanguageToggle from './LanguageToggle.tsx'
import { useLanguage } from '../context/LanguageContext.tsx'

const navCopy = {
  TH: {
    brand: 'RoomSense',
    links: [
      { label: 'แดชบอร์ด', href: '#' },
      { label: 'อุปกรณ์', href: '#' },
      { label: 'การตั้งค่า', href: '#' },
    ],
  },
  EN: {
    brand: 'RoomSense',
    links: [
      { label: 'Dashboard', href: '#' },
      { label: 'Devices', href: '#' },
      { label: 'Settings', href: '#' },
    ],
  },
} as const

const Navbar = () => {
  const { language } = useLanguage()
  const copy = navCopy[language]

  return (
    <nav className="w-full max-w-5xl rounded-2xl border border-slate-200 bg-white/95 text-slate-800 shadow-[0_16px_40px_rgba(15,23,42,0.1)]">
      <div className="flex flex-col gap-4 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-4">
        <span className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">{copy.brand}</span>
        <div className="flex w-full flex-wrap items-center justify-between gap-3 sm:w-auto sm:justify-end">
          <div className="flex flex-wrap items-center gap-3 text-sm font-medium sm:gap-4">
            {copy.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-500 transition-colors hover:text-slate-900"
              >
                {link.label}
              </a>
            ))}
          </div>
          <LanguageToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar