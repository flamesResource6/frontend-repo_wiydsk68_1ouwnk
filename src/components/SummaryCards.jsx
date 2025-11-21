import { Users, Folders, CircleDollarSign, Bell, Star } from 'lucide-react'
import { metrics } from '../data/demo'

const iconMap = { Users, Folders, CircleDollarSign, Bell, Star }

export default function SummaryCards() {
  return (
    <section className="py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {metrics.map((m) => {
          const Icon = iconMap[m.icon]
          return (
            <div key={m.id} className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 transition hover:shadow-md hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-blue-500/10 p-2 text-blue-600 dark:text-blue-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">{m.label}</div>
                    <div className="text-xl font-semibold text-slate-900 dark:text-white">
                      {m.id === 'sales' ? `$${m.value.toLocaleString()}` : m.id === 'satisfaction' ? `${m.value}%` : m.value}
                    </div>
                  </div>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">{m.delta}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
