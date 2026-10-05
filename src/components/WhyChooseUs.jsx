import { MapPin, Heart, TrendingUp, Headphones } from 'lucide-react'
import { whyChooseUs } from '../data/properties'

const iconMap = { MapPin, Heart, TrendingUp, Headphones }

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-royal">Why Choose Us</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            We Make Real Estate Simple
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-royal/10">
                  <Icon className="h-8 w-8 text-royal" />
                </div>
                <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed max-w-[240px] mx-auto">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
