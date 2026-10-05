import { useEffect, useState } from 'react'
import { Home, ChevronDown, Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Buy', href: '#', dropdown: ['Featured Listings', 'New Developments', 'Open Houses'] },
  { label: 'Sell', href: '#' },
  { label: 'Rent', href: '#' },
  { label: 'Listings', href: '#', dropdown: ['For Sale', 'For Rent', 'Luxury Homes'] },
  { label: 'About Us', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '#' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-md'
            : 'bg-white'
        }`}
      >
        <div className="mx-auto max-w-spine px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center">
              <Home className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-display font-extrabold text-lg tracking-tight text-navy leading-none">
              HOMELUXE
              <span className="block text-[0.625rem] font-medium text-slate-400 tracking-widest mt-0.5">
                REAL ESTATE
              </span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  className={`flex items-center gap-1 px-4 py-2 text-[0.95rem] font-medium rounded-lg transition-colors ${
                    item.label === 'Home'
                      ? 'text-royal border-b-2 border-royal'
                      : 'text-slate-600 hover:text-navy'
                  }`}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="w-3.5 h-3.5" />}
                </a>
                {item.dropdown && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2 min-w-[200px]">
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub}
                          href="#"
                          className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-royal rounded-lg mx-1 transition-colors"
                        >
                          {sub}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-royal hover:bg-royal-600 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm hover:shadow-md"
            >
              List Your Property
            </a>
            <button
              className="lg:hidden p-2 text-navy"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Scroll progress bar */}
        {scrolled && <ScrollProgress />}
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 shadow-lg">
          <nav className="px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-3 text-base font-medium text-slate-700 hover:text-royal border-b border-slate-50"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#"
              className="mt-3 inline-flex items-center justify-center px-5 py-3 bg-royal text-white text-sm font-semibold rounded-xl"
            >
              List Your Property
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className="h-0.5 bg-slate-100">
      <div className="h-full bg-royal transition-all duration-150" style={{ width: `${progress}%` }} />
    </div>
  )
}
