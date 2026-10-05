import { ShieldCheck, Star, Home, Phone, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function MetaBar() {
  return (
    <div className="hidden lg:block bg-white border-b border-slate-100">
      <div className="mx-auto max-w-spine px-6 flex items-center justify-between py-2.5 text-sm text-slate-500">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-royal" />
            Trusted by 10,000+ Clients
          </span>
          <span className="flex items-center gap-2">
            <Star className="w-4 h-4 text-amber fill-amber" />
            5 Star Rated Agency
          </span>
          <span className="flex items-center gap-2">
            <Home className="w-4 h-4 text-royal" />
            Free Property Valuation
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a href="tel:8001234567" className="flex items-center gap-2 hover:text-navy transition-colors">
            <Phone className="w-4 h-4 text-royal" />
            (800) 123-4567
          </a>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="text-slate-400 hover:text-royal transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-royal transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-royal transition-colors"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
