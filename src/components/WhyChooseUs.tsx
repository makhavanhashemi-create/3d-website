import { MapPin, UserCheck, TrendingUp, Headset } from 'lucide-react'

const reasons = [
  { icon: MapPin, title: 'Local Expertise', desc: 'Deep knowledge of neighborhoods, market trends, and pricing strategies in your area.' },
  { icon: UserCheck, title: 'Personalized Service', desc: 'Dedicated agents who tailor every step of the process to your unique needs and goals.' },
  { icon: TrendingUp, title: 'Proven Results', desc: 'A track record of successful transactions with 98% client satisfaction and fast closings.' },
  { icon: Headset, title: 'Full Support', desc: 'End-to-end guidance from search to closing — we are with you at every single step.' },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-spine px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-royal uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-display font-extrabold text-navy text-3xl lg:text-4xl mt-2">
            We Make Real Estate Simple
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-white shadow-card flex items-center justify-center mx-auto mb-5">
                <r.icon className="w-7 h-7 text-royal" />
              </div>
              <h3 className="font-display font-bold text-navy text-lg mb-2">{r.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
