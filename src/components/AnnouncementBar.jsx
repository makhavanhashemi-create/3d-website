import { Phone, Facebook, Instagram, Linkedin, Star, CheckCircle2 } from 'lucide-react'

export default function AnnouncementBar() {
  return (
    <div className="bg-navy text-white text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-10 items-center justify-between">
          {/* Left: Social proof */}
          <div className="hidden items-center gap-6 md:flex">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-royal" />
              <span>Trusted by 10,000+ Clients</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-amber2 text-amber2" />
              <span>5 Star Rated Agency</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-royal" />
              <span>Free Property Valuation</span>
            </span>
          </div>

          {/* Right: Phone + Social */}
          <div className="flex items-center gap-5 ml-auto">
            <a href="tel:8001234567" className="flex items-center gap-1.5 hover:text-royal transition-colors">
              <Phone className="h-4 w-4 text-royal" />
              <span className="hidden sm:inline">(800) 123-4567</span>
            </a>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="text-white/70 hover:text-royal transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="text-white/70 hover:text-royal transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white/70 hover:text-royal transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
