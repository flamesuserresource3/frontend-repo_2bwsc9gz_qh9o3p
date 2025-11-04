import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-xl">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Flames</span>
          <span className="text-gray-900">.Portfolio</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="h-5 w-px bg-gray-300" />
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/"
              aria-label="GitHub"
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/"
              aria-label="LinkedIn"
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#contact"
              aria-label="Email"
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </nav>

        <button
          aria-label="Toggle Menu"
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-sm text-gray-700 hover:text-gray-900"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
