import { useState } from 'react'
import { Mail } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-royal/5 px-6 py-10 sm:px-12 sm:py-12">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-royal">
                <Mail className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-navy sm:text-2xl">Stay Updated</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Subscribe to get the latest property listings and market insights.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition-colors focus:border-royal focus:ring-2 focus:ring-royal/20"
              />
              <button
                type="submit"
                className="rounded-xl bg-navy px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-navy-600 hover:shadow-lg whitespace-nowrap"
              >
                {submitted ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
