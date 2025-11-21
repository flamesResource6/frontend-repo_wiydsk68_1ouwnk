import { activities, tasks } from '../data/demo'
import { Bell, CheckCircle2 } from 'lucide-react'

export default function ActivitySidebar() {
  return (
    <aside className="w-full lg:w-80 shrink-0 space-y-4">
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
        <div className="flex items-center gap-2 mb-3"><Bell className="w-4 h-4"/><div className="font-semibold">Notifications</div></div>
        <ul className="space-y-3 text-sm">
          {tasks.map(t => (
            <li key={t.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle2 className={`w-4 h-4 ${t.priority === 'High' ? 'text-rose-500' : t.priority === 'Medium' ? 'text-amber-500' : 'text-emerald-500'}`}/>
                <div>
                  <div className="font-medium">{t.title}</div>
                  <div className="text-xs text-slate-500">Due: {t.due}</div>
                </div>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800">{t.priority}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
        <div className="font-semibold mb-3">Recent Activity</div>
        <ul className="space-y-3 text-sm">
          {activities.map(a => (
            <li key={a.id} className="flex items-center justify-between">
              <div>
                <span className="font-medium">{a.user}</span> {a.action}
              </div>
              <div className="text-xs text-slate-500">{a.time}</div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
