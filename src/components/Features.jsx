import { Home, Users, ShieldCheck, Tag } from 'lucide-react'
import { features } from '../data/properties'

const iconMap = { Home, Users, ShieldCheck, Tag }

export default function Features() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon]
            return (
              <div key={feature.title} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-royal/10 transition-colors hover:bg-royal group">
                  <Icon className="h-8 w-8 text-royal group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base font-bold text-navy">{feature.title}</h3>
                <p className="mt-1.5 text-sm text-slate-500 leading-relaxed max-w-[200px]">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
