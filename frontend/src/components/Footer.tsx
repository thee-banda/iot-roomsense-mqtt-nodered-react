const footerLinks = [
  { label: 'Support', href: '#' },
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
]

const Footer = () => {
  return (
    <footer className="w-[390px] h-[55px] rounded-[14px] border border-slate-200 bg-white/95 text-slate-600 flex items-center justify-between px-[18px] shadow-[0_12px_32px_rgba(15,23,42,0.1)]">
      <span className="text-xs uppercase tracking-[0.28em] text-slate-400">RoomSense</span>
      <nav className="flex items-center gap-[18px] text-[13px]">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-slate-500 transition-colors hover:text-slate-900"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  )
}

export default Footer
