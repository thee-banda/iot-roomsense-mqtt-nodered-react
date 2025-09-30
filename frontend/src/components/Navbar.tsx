const navLinks = [
  { label: 'Dashboard', href: '#' },
  { label: 'Devices', href: '#' },
  { label: 'Settings', href: '#' },
]

const Navbar = () => {
  return (
    <nav className="w-[390px] h-[55px] rounded-[14px] border border-slate-200 bg-white text-slate-800 shadow-[0_16px_40px_rgba(15,23,42,0.12)] flex items-center justify-between px-[18px]">
      <span className="text-lg font-semibold tracking-tight">RoomSense</span>
      <div className="flex items-center gap-[18px] text-sm font-medium">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-slate-500 transition-colors hover:text-slate-900"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
