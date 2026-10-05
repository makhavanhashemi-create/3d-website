import { useState } from 'react'
import { Search, MapPin, Home as HomeIcon, DollarSign, BedDouble, Bath } from 'lucide-react'

const tabs = ['Buy', 'Rent', 'Sell'] as const

const selectClass =
  'w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-3 text-sm text-slate-700 focus:border-royal focus:bg-white transition-colors cursor-pointer'

export default function SearchFilter() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>('Buy')

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-card border border-white/60 p-6 lg:p-7">
      {/* Tabs */}
      <div className="flex gap-1 mb-5">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 text-sm font-semibold rounded-xl transition-all ${
              activeTab === tab
                ? 'bg-navy text-white shadow-md'
                : 'text-slate-500 hover:text-navy hover:bg-slate-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
        <Field icon={<MapPin className="w-4 h-4" />} label="Location">
          <select className={selectClass} aria-label="Location">
            <option>City / Neighborhood / ZIP</option>
            <option>Beverly Hills, CA</option>
            <option>Malibu, CA</option>
            <option>Miami, FL</option>
            <option>Austin, TX</option>
          </select>
        </Field>

        <Field icon={<HomeIcon className="w-4 h-4" />} label="Property Type">
          <select className={selectClass} aria-label="Property Type">
            <option>Any Type</option>
            <option>Villa</option>
            <option>Estate</option>
            <option>Penthouse</option>
            <option>Single Family</option>
          </select>
        </Field>

        <Field icon={<DollarSign className="w-4 h-4" />} label="Price Range">
          <select className={selectClass} aria-label="Price Range">
            <option>Any Price</option>
            <option>$500K – $1M</option>
            <option>$1M – $2M</option>
            <option>$2M – $5M</option>
            <option>$5M+</option>
          </select>
        </Field>

        <Field icon={<BedDouble className="w-4 h-4" />} label="Beds">
          <select className={selectClass} aria-label="Beds">
            <option>Any</option>
            <option>1+</option>
            <option>2+</option>
            <option>3+</option>
            <option>4+</option>
            <option>5+</option>
          </select>
        </Field>

        <Field icon={<Bath className="w-4 h-4" />} label="Baths">
          <select className={selectClass} aria-label="Baths">
            <option>Any</option>
            <option>1+</option>
            <option>2+</option>
            <option>3+</option>
            <option>4+</option>
          </select>
        </Field>

        <button className="flex items-center justify-center gap-2 bg-royal hover:bg-royal-600 text-white font-semibold rounded-xl py-3 px-4 text-sm transition-all shadow-sm hover:shadow-md">
          <Search className="w-4 h-4" />
          Search Properties
        </button>
      </div>
    </div>
  )
}

function Field({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="relative">
      <label className="absolute -top-2.5 left-3 bg-white px-1 text-[0.625rem] font-semibold uppercase tracking-wider text-slate-400 z-10">
        {label}
      </label>
      <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
        {icon}
      </div>
      {children}
    </div>
  )
}
