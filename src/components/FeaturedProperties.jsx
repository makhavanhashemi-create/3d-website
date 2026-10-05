import { ArrowRight } from 'lucide-react'
import PropertyCard from './PropertyCard'
import { properties } from '../data/properties'

export default function FeaturedProperties() {
  const featured = properties.filter((p) => p.featured)

  return (
    <section id="featured" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-royal">Featured Properties</span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Homes You'll Love
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-bold text-royal hover:gap-3 transition-all"
          >
            View All Properties
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}
