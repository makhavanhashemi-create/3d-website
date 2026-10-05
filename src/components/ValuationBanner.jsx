import { ArrowRight, TrendingUp } from 'lucide-react'

export default function ValuationBanner() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Dark navy content */}
            <div className="bg-navy p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl leading-tight">
                Thinking of Selling?
              </h2>
              <p className="mt-3 text-xl font-semibold text-royal">Get Maximum Value for Your Property</p>
              <p className="mt-5 max-w-md text-slate-300 leading-relaxed">
                Get a free, no-obligation home valuation from our expert agents. We'll analyze market trends and comparable sales to give you an accurate estimate.
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-xl bg-royal px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg"
                >
                  Get Free Home Valuation
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right: Image with overlay card */}
            <div className="relative min-h-[340px] lg:min-h-[440px]">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80"
                alt="Modern luxury living room with large windows"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-navy/60 to-navy/20" />
              {/* Floating estimate card */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:w-72 rounded-2xl bg-white p-5 shadow-2xl">
                <p className="text-sm font-semibold text-slate-500">Home Value Estimate</p>
                <p className="mt-1 text-3xl font-extrabold text-navy">$875,000</p>
                <div className="mt-2 flex items-center gap-1.5">
                  <TrendingUp className="h-4 w-4 text-emerald2" />
                  <span className="text-sm font-bold text-emerald2">+12.5%</span>
                  <span className="text-sm text-slate-400">Based on market trends</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
