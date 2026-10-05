import { useState } from 'react'
import { MapPin, Home, DollarSign, BedDouble, Bath, Search } from 'lucide-react'

const tabs = ['Buy', 'Rent', 'Sell']

const propertyTypes = ['Any Type', 'Houses', 'Apartments', 'Villas', 'Condos', 'Townhomes']
const priceRanges = ['Any Price', '$100K - $500K', '$500K - $1M', '$1M - $2M', '$2M - $5M', '$5M+']
const bedOptions = ['Any', '1+', '2+', '3+', '4+', '5+']
const bathOptions = ['Any', '1+', '2+', '3+', '4+']

export default function SearchFilter() {
  const [activeTab, setActiveTab] = useState('Buy')

  return (
    <div className="relative z-20 mx-auto -mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-white p-4 sm:p-6 shadow-xl ring-1 ring-slate-900/5">
        {/* Tabs */}
        <div className="mb-5 flex gap-1 rounded-xl bg-slate-100 p-1 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-lg px-5 py-2 text-sm font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-white text-navy shadow-sm'
                  : 'text-slate-500 hover:text-navy'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:items-end">
          {/* Location */}
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-slate-500">Location</label>
            <div className="relative">
              <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="City, Neighborhood, ZIP"
                className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-3 text-sm text-slate-700 outline-none transition-colors focus:border-royal focus:ring-2 focus:ring-royal/20"
              />
            </div>
          </div>

          {/* Property Type */}
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-slate-500">Property Type</label>
            <div className="relative">
              <Home className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <select className="w-full appearance-none rounded-xl border border-slate-200 py-2.5 pl-10 pr-8 text-sm text-slate-700 outline-none transition-colors focus:border-royal focus:ring-2 focus:ring-royal/20">
                {propertyTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              <svg className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.353a.75.75 0 111.12.996l-4.25 5a.75.75 0 01-1.12 0l-4.25-5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
            </div>
          </div>

          {/* Price Range */}
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-slate-500">Price Range</label>
            <div className="relative">
              <DollarSign className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <select className="w-full appearance-none rounded-xl border border-slate-200 py-2.5 pl-10 pr-8 text-sm text-slate-700 outline-none transition-colors focus:border-royal focus:ring-2 focus:ring-royal/20">
                {priceRanges.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
              <svg className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.353a.75.75 0 111.12.996l-4.25 5a.75.75 0 01-1.12 0l-4.25-5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
            </div>
          </div>

          {/* Beds */}
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-slate-500">Beds</label>
            <div className="relative">
              <BedDouble className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <select className="w-full appearance-none rounded-xl border border-slate-200 py-2.5 pl-10 pr-8 text-sm text-slate-700 outline-none transition-colors focus:border-royal focus:ring-2 focus:ring-royal/20">
                {bedOptions.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
              <svg className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.353a.75.75 0 111.12.996l-4.25 5a.75.75 0 01-1.12 0l-4.25-5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-royal px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg">
              <Search className="h-4 w-4" />
              Search Properties
            </button>
          </div>
        </div>

        {/* Baths - shown on larger screens inline */}
        <div className="mt-4 hidden lg:block">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <label className="mb-1.5 block text-xs font-semibold text-slate-500">Baths</label>
              <div className="relative">
                <Bath className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <select className="w-full max-w-[180px] appearance-none rounded-xl border border-slate-200 py-2.5 pl-10 pr-8 text-sm text-slate-700 outline-none transition-colors focus:border-royal focus:ring-2 focus:ring-royal/20">
                  {bathOptions.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
                <svg className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.353a.75.75 0 111.12.996l-4.25 5a.75.75 0 01-1.12 0l-4.25-5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
