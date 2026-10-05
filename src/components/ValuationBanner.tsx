import { ArrowUpRight, TrendingUp } from 'lucide-react'

export default function ValuationBanner() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-spine px-6">
        <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-card">
          {/* Left — dark */}
          <div className="bg-navy p-10 lg:p-14 flex flex-col justify-center">
            <span className="text-sm font-semibold text-royal uppercase tracking-wider">Thinking of Selling?</span>
            <h2 className="font-display font-extrabold text-white text-3xl lg:text-4xl mt-3 leading-tight">
              Get Maximum Value for Your Property
            </h2>
            <p className="mt-5 text-slate-300 leading-relaxed max-w-md">
              Our advanced market analysis compares your home against recent sales,
              current listings, and market trends to give you the most accurate valuation.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 px-7 py-4 bg-royal hover:bg-royal-600 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 w-fit"
            >
              Get Free Home Valuation
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>

          {/* Right — image with floating card */}
          <div className="relative min-h-[340px] lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a17?auto=format&fit=crop&w=800&q=80"
              alt="Luxury living room interior"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-navy/20" />

            {/* Floating estimate card */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-card-hover p-6">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Home Value Estimate</p>
              <p className="font-display font-extrabold text-navy text-4xl mt-2">$875,000</p>
              <div className="mt-3 flex items-center gap-2">
                <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald/10 text-emerald text-sm font-bold">
                  <TrendingUp className="w-3.5 h-3.5" />
                  +12.5%
                </span>
                <span className="text-xs text-slate-400">Based on market trends</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
