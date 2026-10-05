import { useState } from 'react'
import { Heart, BedDouble, Bath, Maximize } from 'lucide-react'
import type { Property } from '../data/properties'

export default function PropertyCard({ property }: { property: Property }) {
  const [liked, setLiked] = useState(false)

  return (
    <article className="group rounded-2xl overflow-hidden bg-white shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/2]">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Top gradient for badge contrast */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/30 to-transparent" />

        {/* Status badge */}
        <span
          className={`absolute top-4 left-4 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide ${
            property.status === 'FOR SALE'
              ? 'bg-emerald text-white'
              : 'bg-royal text-white'
          }`}
        >
          {property.status}
        </span>

        {/* Heart toggle */}
        <button
          onClick={() => setLiked(!liked)}
          aria-label={liked ? 'Remove from favorites' : 'Add to favorites'}
          aria-pressed={liked}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Heart
            className={`w-4.5 h-4.5 transition-colors ${
              liked ? 'fill-red-500 text-red-500' : 'text-slate-500'
            }`}
          />
        </button>
      </div>

      {/* Body */}
      <div className="p-5">
        <p className="font-display font-extrabold text-2xl text-navy group-hover:text-royal transition-colors">
          {property.price}
        </p>
        <h3 className="mt-1 font-display font-bold text-navy text-base">{property.title}</h3>
        <p className="text-sm text-slate-400 mt-1">{property.address}</p>

        {/* Specs */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-5 text-sm text-slate-500">
          <span className="flex items-center gap-1.5">
            <BedDouble className="w-4 h-4 text-royal" />
            {property.beds} Beds
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="w-4 h-4 text-royal" />
            {property.baths} Baths
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize className="w-4 h-4 text-royal" />
            {property.sqft.toLocaleString()} Sq Ft
          </span>
        </div>
      </div>
    </article>
  )
}
