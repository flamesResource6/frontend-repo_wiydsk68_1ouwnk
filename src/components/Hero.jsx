import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[360px] sm:h-[440px] w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <p className="text-blue-300 text-sm uppercase tracking-widest mb-2">Welcome back</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">Your modern analytics hub</h1>
            <p className="mt-3 text-slate-200/90">Track users, projects, revenue and more. Beautiful charts, powerful tables, and a playful 3D hero to set the tone.</p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent"></div>
    </section>
  )
}
