import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function TrackerWidget() {
  const [status, setStatus] = useState('')
  const [events, setEvents] = useState([])

  // Track a view on mount
  useEffect(() => {
    const sendView = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/track`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ path: window.location.pathname, event: 'view' }),
        })
        if (res.ok) {
          setStatus('Tracked view')
          // refresh events after tracking
          loadEvents()
        } else {
          setStatus('Failed to track')
        }
      } catch (e) {
        setStatus('Offline')
      }
    }

    const loadEvents = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/stats?limit=10`)
        const data = await res.json()
        setEvents(data.items || [])
      } catch (e) {
        // ignore
      }
    }

    sendView()
  }, [])

  return (
    <div id="live" className="w-full">
      <div className="rounded-xl bg-slate-900/60 ring-1 ring-white/10 p-4 md:p-6 text-blue-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-blue-200">Live Events</h3>
          <span className="text-xs text-blue-300/70">{status}</span>
        </div>
        <div className="space-y-2 max-h-64 overflow-auto pr-2">
          {events.length === 0 ? (
            <p className="text-blue-300/60 text-sm">No events yet. Interact with the page to generate data.</p>
          ) : (
            events.map((e) => (
              <div key={e._id} className="flex items-center justify-between bg-slate-800/50 rounded-lg px-3 py-2">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  <div>
                    <p className="text-sm font-medium text-white">{e.event}</p>
                    <p className="text-xs text-blue-300/70">{e.path}</p>
                  </div>
                </div>
                <span className="text-[10px] text-blue-300/60">{e.created_at?.slice(0, 19).replace('T', ' ')}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
