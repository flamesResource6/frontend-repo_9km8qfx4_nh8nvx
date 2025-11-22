import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/g5OaHmrKTDxRI7Ig/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-950/60 to-slate-950 pointer-events-none" />

      <div className="relative h-full max-w-6xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-300 ring-1 ring-blue-400/20 mb-4">
          Futuristic • Minimal • Urban
        </span>
        <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight drop-shadow-[0_8px_24px_rgba(59,130,246,0.35)]">
          Real‑time Traffic Tracking
        </h1>
        <p className="mt-4 max-w-2xl text-blue-200/90 text-sm md:text-base">
          Understand how users move across your product with elegant, privacy‑friendly analytics. No clutter. Just signal.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#get-started" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-semibold shadow-lg shadow-blue-500/20 transition-colors">
            Get Started
          </a>
          <a href="#live" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold ring-1 ring-white/20 transition-colors">
            View Live Data
          </a>
        </div>
      </div>
    </section>
  )
}
