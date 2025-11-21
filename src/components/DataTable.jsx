import { useMemo, useState } from 'react'
import { users as seedUsers } from '../data/demo'
import { Search, Eye, Pencil, Trash2, ChevronLeft, ChevronRight } from 'lucide-react'

export default function DataTable() {
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState({ key: 'name', dir: 'asc' })
  const [page, setPage] = useState(1)
  const pageSize = 6

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return seedUsers.filter(u =>
      u.name.toLowerCase().includes(q) ||
      u.role.toLowerCase().includes(q) ||
      u.status.toLowerCase().includes(q)
    )
  }, [query])

  const sorted = useMemo(() => {
    const arr = [...filtered]
    arr.sort((a, b) => {
      const aVal = a[sort.key]
      const bVal = b[sort.key]
      if (aVal < bVal) return sort.dir === 'asc' ? -1 : 1
      if (aVal > bVal) return sort.dir === 'asc' ? 1 : -1
      return 0
    })
    return arr
  }, [filtered, sort])

  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize))
  const paged = sorted.slice((page - 1) * pageSize, page * pageSize)

  const setSortKey = (key) => {
    setPage(1)
    setSort(prev => ({ key, dir: prev.key === key && prev.dir === 'asc' ? 'desc' : 'asc' }))
  }

  return (
    <section className="py-6">
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="p-4 flex items-center justify-between gap-4">
          <div className="text-base font-semibold">Team Performance</div>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-2 top-2.5 text-slate-400" />
            <input value={query} onChange={e => { setQuery(e.target.value); setPage(1) }} placeholder="Search users, roles, status..." className="pl-8 pr-3 py-2 rounded-md border border-slate-200 dark:border-slate-700 bg-transparent text-sm w-[260px]" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500">
              <tr>
                {['name','role','status','monthlySales','tasksCompleted'].map((col) => (
                  <th key={col} onClick={() => setSortKey(col)} className="text-left px-4 py-3 cursor-pointer select-none">
                    <div className="inline-flex items-center gap-2 capitalize">
                      {col === 'monthlySales' ? 'Monthly Sales' : col === 'tasksCompleted' ? 'Tasks Completed' : col}
                      {sort.key === col && <span className="text-xs">{sort.dir === 'asc' ? '▲' : '▼'}</span>}
                    </div>
                  </th>
                ))}
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paged.map((u) => (
                <tr key={u.id} className="border-t border-slate-100 dark:border-slate-800 hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-slate-100">{u.name}</td>
                  <td className="px-4 py-3">{u.role}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs ${u.status === 'Active' ? 'bg-emerald-500/10 text-emerald-600' : u.status === 'Away' ? 'bg-amber-500/10 text-amber-600' : 'bg-slate-500/10 text-slate-600'}`}>{u.status}</span>
                  </td>
                  <td className="px-4 py-3">${u.monthlySales.toLocaleString()}</td>
                  <td className="px-4 py-3">{u.tasksCompleted}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="inline-flex items-center gap-2">
                      <button className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="View"><Eye className="w-4 h-4"/></button>
                      <button className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Edit"><Pencil className="w-4 h-4"/></button>
                      <button className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Delete"><Trash2 className="w-4 h-4"/></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 flex items-center justify-between text-sm">
          <div>Page {page} of {totalPages}</div>
          <div className="inline-flex items-center gap-2">
            <button disabled={page <= 1} onClick={() => setPage(p => Math.max(1, p-1))} className="px-2 py-1 rounded border disabled:opacity-40"><ChevronLeft className="w-4 h-4"/></button>
            <button disabled={page >= totalPages} onClick={() => setPage(p => Math.min(totalPages, p+1))} className="px-2 py-1 rounded border disabled:opacity-40"><ChevronRight className="w-4 h-4"/></button>
          </div>
        </div>
      </div>
    </section>
  )
}
