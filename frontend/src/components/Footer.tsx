const footerLinks = [
  { label: 'Support', href: '#' },
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
]

const Footer = () => {
  return (
    <footer className="w-[390px] h-[55px] rounded-[14px] bg-gray-900/80 text-gray-200 flex items-center justify-between px-[18px] backdrop-blur shadow-[0_12px_30px_rgba(15,23,42,0.35)]">
      <span className="text-xs uppercase tracking-[0.28em] text-gray-400">RoomSense</span>
      <nav className="flex items-center gap-[18px] text-[13px]">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  )
}

export default Footer
