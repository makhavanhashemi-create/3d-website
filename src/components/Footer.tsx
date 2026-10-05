import { Home, Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react'

const columns = [
  {
    title: 'Quick Links',
    links: ['Home', 'Buy', 'Rent', 'Sell', 'Listings'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Our Agents', 'Careers', 'Blog', 'Contact Us'],
  },
  {
    title: 'Resources',
    links: ['Home Valuation', "Buyer's Guide", "Seller's Guide", 'FAQ', 'Mortgage Calculator'],
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-navy text-slate-300 overflow-hidden">
      {/* Geometric pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='1'%3E%3Cpath d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-spine px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-royal flex items-center justify-center">
                <Home className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display font-extrabold text-lg text-white tracking-tight leading-none">
                HOMELUXE
                <span className="block text-[0.625rem] font-medium text-slate-500 tracking-widest mt-0.5">
                  REAL ESTATE
                </span>
              </span>
            </a>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Your trusted partner in luxury real estate. We help you find, buy, sell,
              and rent exceptional properties with confidence.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-royal flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4.5 h-4.5 text-slate-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-400 hover:text-royal transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div className="mt-12 pt-8 border-t border-white/10 grid sm:grid-cols-3 gap-6">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-royal shrink-0" />
            <div>
              <p className="text-xs text-slate-500">Call Us</p>
              <a href="tel:8001234567" className="text-sm text-white hover:text-royal transition-colors">(800) 123-4567</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-royal shrink-0" />
            <div>
              <p className="text-xs text-slate-500">Email Us</p>
              <a href="mailto:info@homeluxe.com" className="text-sm text-white hover:text-royal transition-colors">info@homeluxe.com</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-royal shrink-0" />
            <div>
              <p className="text-xs text-slate-500">Visit Us</p>
              <p className="text-sm text-white">123 Luxury Ave, Beverly Hills, CA</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">© 2024 Homeluxe Real Estate. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-slate-500 hover:text-royal transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-500 hover:text-royal transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
