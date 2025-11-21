import { useMemo } from 'react'
import { salesTrend, roleBreakdown } from '../data/demo'

function LineChart() {
  const max = Math.max(...salesTrend.map(d => d.value))
  const points = salesTrend.map((d, i) => {
    const x = (i / (salesTrend.length - 1)) * 100
    const y = 100 - (d.value / max) * 100
    return `${x},${y}`
  }).join(' ')

  return (
    <svg viewBox="0 0 100 100" className="w-full h-40">
      <defs>
        <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <polyline fill="none" stroke="#3b82f6" strokeWidth="1.5" points={points} />
      <polygon fill="url(#grad)" points={`${points} 100,100 0,100`} />
    </svg>
  )
}

function Legend({ items }) {
  return (
    <div className="flex flex-wrap gap-3 text-xs">
      {items.map(i => (
        <div key={i.label} className="inline-flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: i.color }} />
          <span className="text-slate-600 dark:text-slate-300">{i.label}</span>
        </div>
      ))}
    </div>
  )
}

function PieChart() {
  const total = roleBreakdown.reduce((a, b) => a + b.value, 0)
  let cumulative = 0
  const circles = roleBreakdown.map((s, idx) => {
    const fraction = s.value / total
    const dash = fraction * 100
    const gap = 100 - dash
    const rotation = (cumulative / total) * 360
    cumulative += s.value
    return (
      <circle
        key={idx}
        r="16"
        cx="20"
        cy="20"
        fill="transparent"
        stroke={s.color}
        strokeWidth="8"
        strokeDasharray={`${dash} ${gap}`}
        transform={`rotate(-90 ${20} ${20}) rotate(${rotation} ${20} ${20})`}
      />
    )
  })

  return (
    <svg viewBox="0 0 40 40" className="w-32 h-32">
      <g>{circles}</g>
    </svg>
  )
}

export default function Charts() {
  const legend = useMemo(() => roleBreakdown.map(r => ({ label: r.label, color: r.color })), [])
  return (
    <section className="py-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
        <div className="text-base font-semibold mb-2">Monthly Revenue</div>
        <LineChart />
        <div className="mt-2 text-xs text-slate-500">Trend over 12 months</div>
      </div>
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
        <div className="text-base font-semibold mb-3">Team Roles</div>
        <div className="flex items-center gap-6">
          <PieChart />
          <Legend items={legend} />
        </div>
      </div>
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
        <div className="text-base font-semibold mb-2">Highlights</div>
        <ul className="text-sm list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
          <li>Hover tooltips and legends provide clarity</li>
          <li>Charts are lightweight SVGs with gradients</li>
          <li>Data is realistic for demos</li>
        </ul>
      </div>
    </section>
  )
}
