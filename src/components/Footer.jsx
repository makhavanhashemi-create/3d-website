import { Home, Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react'

const quickLinks = ['Home', 'Buy', 'Rent', 'Sell', 'Listings']
const companyLinks = ['About Us', 'Our Agents', 'Careers', 'Blog', 'Contact Us']
const resourceLinks = ['Home Valuation', "Buyer's Guide", "Seller's Guide", 'FAQ', 'Mortgage Calculator']

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-royal">
                <Home className="h-6 w-6 text-white" />
              </div>
              <div className="leading-none">
                <span className="block text-lg font-extrabold tracking-tight">HOMELUXE</span>
                <span className="block text-[10px] font-semibold tracking-[0.2em] text-slate-400">REAL ESTATE</span>
              </div>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              Your trusted partner in finding the perfect home. We connect buyers, sellers, and renters with the finest properties across California.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition-colors hover:bg-royal">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition-colors hover:bg-royal">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition-colors hover:bg-royal">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-slate-400 transition-colors hover:text-royal">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-slate-400 transition-colors hover:text-royal">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources + Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Resources</h4>
            <ul className="mt-4 space-y-3">
              {resourceLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-slate-400 transition-colors hover:text-royal">{link}</a>
                </li>
              ))}
            </ul>
            <h4 className="mt-8 text-sm font-bold uppercase tracking-wider text-white">Contact Us</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-royal" />
                123 Luxury Ave, Beverly Hills, CA 90210
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Phone className="h-4 w-4 shrink-0 text-royal" />
                (800) 123-4567
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Mail className="h-4 w-4 shrink-0 text-royal" />
                info@homeluxe.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-400">© 2026 HOMELUXE Real Estate. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-slate-400 transition-colors hover:text-royal">Privacy Policy</a>
            <a href="#" className="text-sm text-slate-400 transition-colors hover:text-royal">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
