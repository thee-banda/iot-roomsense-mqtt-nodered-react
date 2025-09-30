const navLinks = [
  { label: 'Dashboard', href: '#' },
  { label: 'Devices', href: '#' },
  { label: 'Settings', href: '#' },
]

const Navbar = () => {
  return (
    <nav className="w-[390px] h-[55px] rounded-[14px] bg-gray-800 text-gray-100 shadow-[0_12px_30px_rgba(31,41,55,0.28)] flex items-center justify-between px-[18px]">
      <span className="text-lg font-semibold">RoomSense</span>
      <div className="flex items-center gap-[18px] text-sm font-medium">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="opacity-80 transition-opacity hover:opacity-100"
          > 
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
