export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--color-background)', color: 'var(--color-text)' }}>
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
          Hello World
        </h1>
        <p className="text-xl opacity-70">Built by Jarvis.</p>
      </div>
    </main>
  )
}