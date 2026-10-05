import { ArrowRight, Play } from 'lucide-react'
import SearchFilter from './SearchFilter'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="mx-auto max-w-spine px-6 pt-12 lg:pt-20 pb-0">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-royal/10 text-royal text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-royal animate-pulse" />
              #1 Luxury Real Estate Platform
            </span>
            <h1 className="font-display font-extrabold text-navy text-4xl md:text-5xl lg:text-hero leading-[1.05] tracking-tight text-balance">
              Find Your Perfect Home
            </h1>
            <p className="mt-6 text-lg text-slate-500 max-w-xl leading-relaxed">
              Discover exceptional properties curated by our expert agents. From
              modern villas to luxury penthouses, your dream home is just a search away.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#featured"
                className="inline-flex items-center gap-2 px-7 py-4 bg-royal hover:bg-royal-600 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                Explore Properties
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-7 py-4 border-2 border-slate-200 hover:border-navy text-navy font-semibold rounded-xl transition-all hover:bg-navy hover:text-white"
              >
                <Play className="w-4 h-4 fill-current" />
                How It Works
              </a>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative animate-fade-up [animation-delay:0.2s] opacity-0">
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ff7c8c7b98d1?auto=format&fit=crop&w=900&q=80"
                alt="Modern luxury villa with infinity pool at dusk"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-card p-5 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald/10 flex items-center justify-center">
                  <span className="text-emerald text-xl font-bold">★</span>
                </div>
                <div>
                  <p className="text-2xl font-display font-extrabold text-navy leading-none">4.9/5</p>
                  <p className="text-xs text-slate-400 mt-1">2,800+ Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Search Filter — overlaps into next section */}
      <div className="mx-auto max-w-spine px-6 -mb-16 mt-10 lg:mt-14 relative z-20">
        <SearchFilter />
      </div>
    </section>
  )
}
