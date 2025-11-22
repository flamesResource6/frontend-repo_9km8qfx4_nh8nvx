export default function HowItWorks() {
  const steps = [
    {
      title: 'Drop-In Tracker',
      desc: 'Add a lightweight fetch call to record views, clicks, and custom events.'
    },
    {
      title: 'Privacy First',
      desc: 'We only collect path, event type, and basic metadata. No cookies. No fingerprinting.'
    },
    {
      title: 'Actionable Insights',
      desc: 'See the most recent activity in real time and filter by route or event.'
    },
  ]

  return (
    <section id="get-started" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white">How it works</h2>
        <p className="text-blue-200/80 mt-2">A simple pipeline from event to insight.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((s, i) => (
            <div key={i} className="rounded-xl bg-slate-900/50 ring-1 ring-white/10 p-6">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/20 text-blue-300 text-xs font-bold">{i+1}</span>
              <h3 className="mt-3 text-white font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-blue-300/80">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
