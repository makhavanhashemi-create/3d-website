import { useState } from 'react'
import { Home, Menu, X, ChevronDown } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#', active: true },
  { label: 'Buy', href: '#', dropdown: ['Houses for Sale', 'Apartments', 'New Construction', 'Luxury Homes'] },
  { label: 'Sell', href: '#' },
  { label: 'Rent', href: '#' },
  { label: 'Listings', href: '#', dropdown: ['Featured Listings', 'Open Houses', 'Price Reduced', 'New Today'] },
  { label: 'About Us', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '#' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-royal">
              <Home className="h-6 w-6 text-white" />
            </div>
            <div className="leading-none">
              <span className="block text-lg font-extrabold tracking-tight text-navy">HOMELUXE</span>
              <span className="block text-[10px] font-semibold tracking-[0.2em] text-slate-400">REAL ESTATE</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                    item.active
                      ? 'text-royal underline underline-offset-4 decoration-2'
                      : 'text-slate-600 hover:text-navy'
                  }`}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="h-3.5 w-3.5" />}
                </a>
                {item.dropdown && openDropdown === item.label && (
                  <ul className="absolute left-0 top-full w-56 rounded-xl border border-slate-100 bg-white py-2 shadow-xl">
                    {item.dropdown.map((sub) => (
                      <li key={sub}>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-royal transition-colors"
                        >
                          {sub}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="#"
              className="inline-flex items-center rounded-xl bg-navy px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-navy-600 hover:shadow-md"
            >
              List Your Property
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-100 py-4">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`block rounded-lg px-4 py-2.5 text-sm font-semibold ${
                      item.active ? 'bg-royal/10 text-royal' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="mt-2 block rounded-xl bg-navy px-4 py-2.5 text-center text-sm font-semibold text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  List Your Property
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
