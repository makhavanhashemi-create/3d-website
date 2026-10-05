import { useState } from 'react'
import { BedDouble, Bath, Maximize, Heart } from 'lucide-react'

export default function PropertyCard({ property }) {
  const [favorited, setFavorited] = useState(false)

  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-slate-900/5 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Tag badge */}
        <span
          className={`absolute left-3 top-3 rounded-lg px-3 py-1 text-xs font-bold text-white ${
            property.tagColor === 'emerald2' ? 'bg-emerald2' : 'bg-royal'
          }`}
        >
          {property.tag}
        </span>
        {/* Heart toggle */}
        <button
          onClick={() => setFavorited(!favorited)}
          aria-label="Add to favorites"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur transition-all hover:bg-white"
        >
          <Heart
            className={`h-5 w-5 transition-colors ${
              favorited ? 'fill-red-500 text-red-500' : 'text-slate-400'
            }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-extrabold text-navy">{property.price}</span>
          {property.priceLabel && (
            <span className="text-sm font-medium text-slate-400">{property.priceLabel}</span>
          )}
        </div>
        <h3 className="mt-2 text-base font-bold text-navy">{property.title}</h3>
        <p className="mt-1 text-sm text-slate-500">{property.address}</p>

        {/* Specs */}
        <div className="mt-4 flex items-center gap-5 border-t border-slate-100 pt-4 text-sm text-slate-600">
          <span className="flex items-center gap-1.5">
            <BedDouble className="h-4 w-4 text-royal" />
            {property.beds} Beds
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="h-4 w-4 text-royal" />
            {property.baths} Baths
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize className="h-4 w-4 text-royal" />
            {property.sqft} sqft
          </span>
        </div>
      </div>
    </article>
  )
}
