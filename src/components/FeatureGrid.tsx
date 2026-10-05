import { Home, Users, ShieldCheck, Tag } from 'lucide-react'

const features = [
  { icon: Home, title: 'Find The Perfect Home', desc: 'Thousands of verified listings updated daily' },
  { icon: Users, title: 'Expert Agents', desc: 'Experienced agents to guide you every step' },
  { icon: ShieldCheck, title: 'Trusted & Secure', desc: 'Transparent process & secure transactions' },
  { icon: Tag, title: 'Best Deals', desc: 'Exclusive property deals you won\'t find elsewhere' },
]

export default function FeatureGrid() {
  return (
    <section className="bg-white pt-32 pb-16">
      <div className="mx-auto max-w-spine px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-slate-100 hover:border-royal/20 hover:shadow-card transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-royal/10 flex items-center justify-center mb-4 group-hover:bg-royal transition-colors">
                <f.icon className="w-7 h-7 text-royal group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display font-bold text-navy text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
