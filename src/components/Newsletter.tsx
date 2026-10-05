import { useState } from 'react'
import { Mail } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-spine px-6">
        <div className="rounded-3xl bg-royal/5 border border-royal/10 p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
            <div className="flex items-center gap-4 lg:flex-shrink-0">
              <div className="w-14 h-14 rounded-2xl bg-royal flex items-center justify-center shrink-0">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-navy text-xl lg:text-2xl">Stay Updated</h3>
                <p className="text-sm text-slate-500 mt-1">Subscribe to get the latest property listings</p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-700 placeholder:text-slate-400 focus:border-royal transition-colors"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-royal hover:bg-royal-600 text-white font-semibold rounded-xl text-sm transition-colors shadow-sm whitespace-nowrap"
              >
                {submitted ? 'Subscribed ✓' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
