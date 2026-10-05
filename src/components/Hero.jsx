import { ArrowRight, Play } from 'lucide-react'
import SearchFilter from './SearchFilter'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 py-16 lg:grid-cols-2 lg:gap-12 lg:py-24">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center rounded-full bg-royal/10 px-4 py-1.5 text-sm font-semibold text-royal">
              #1 Real Estate Agency in California
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl text-balance">
              Find Your Perfect Home
            </h1>
            <p className="mt-5 max-w-lg text-lg text-slate-600 leading-relaxed">
              Discover thousands of verified luxury properties, connect with expert agents, and find the home that matches your lifestyle — all in one place.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#featured"
                className="inline-flex items-center gap-2 rounded-xl bg-royal px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg"
              >
                Explore Properties
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-navy px-6 py-3.5 text-sm font-bold text-navy transition-all hover:bg-navy hover:text-white"
              >
                <Play className="h-4 w-4" />
                How It Works
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1613490493576-4f851b1ac6f0?w=900&q=80"
                alt="Modern luxury two-story house with warm interior lighting and pool"
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[480px]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Search Bar */}
      <SearchFilter />
    </section>
  )
}
