import { ArrowRight } from 'lucide-react'
import { properties } from '../data/properties'
import PropertyCard from './PropertyCard'

export default function FeaturedProperties() {
  return (
    <section id="featured" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-spine px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-sm font-semibold text-royal uppercase tracking-wider">Featured Listings</span>
            <h2 className="font-display font-extrabold text-navy text-3xl lg:text-4xl mt-2">
              Homes You'll Love
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-2 text-royal font-semibold hover:gap-3 transition-all"
          >
            View All Properties
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>

        <div className="sm:hidden mt-8 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-royal font-semibold"
          >
            View All Properties
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
