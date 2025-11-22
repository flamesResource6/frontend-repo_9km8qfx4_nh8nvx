import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import TrackerWidget from './components/TrackerWidget'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      {/* Hero with Spline cover */}
      <Hero />

      {/* Content */}
      <main className="-mt-12 md:-mt-16 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-xl bg-slate-900/60 ring-1 ring-white/10 p-6">
              <h2 className="text-white text-xl font-semibold">Drop-in Tracking</h2>
              <p className="text-blue-300/80 mt-2 text-sm">
                This page automatically records a view event when it loads, then shows the most recent activity below.
              </p>
              <div className="mt-4 rounded-lg bg-slate-800/60 p-4 text-xs text-blue-300/80 font-mono overflow-auto">
                fetch(`${import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'}/api/track`, { method: 'POST', body: JSON.stringify({ path: window.location.pathname, event: 'view' }) })
              </div>
            </div>
            <TrackerWidget />
          </section>

          <HowItWorks />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
