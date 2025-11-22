export default function Footer() {
  return (
    <footer className="py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-blue-300/70">
        <p className="text-sm">Built with a minimalist, urban vibe.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="/test" className="hover:text-white transition-colors">System Check</a>
          <a href="#" className="hover:text-white transition-colors">Docs</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  )
}
