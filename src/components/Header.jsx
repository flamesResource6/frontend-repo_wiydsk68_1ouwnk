import { useState } from 'react'
import { Menu, BarChart3, LayoutDashboard, Users, Settings, ChevronDown, User } from 'lucide-react'

export default function Header({ onToggleTheme, theme }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full bg-white/70 dark:bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="inline-flex lg:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Open menu">
            <Menu className="w-5 h-5" />
          </button>
          <div className="font-semibold text-slate-900 dark:text-white tracking-tight text-lg">
            NovaDash
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
          <a className="hover:text-slate-900 dark:hover:text-white inline-flex items-center gap-2" href="#dashboard"><LayoutDashboard className="w-4 h-4"/>Dashboard</a>
          <a className="hover:text-slate-900 dark:hover:text-white inline-flex items-center gap-2" href="#reports"><BarChart3 className="w-4 h-4"/>Reports</a>
          <a className="hover:text-slate-900 dark:hover:text-white inline-flex items-center gap-2" href="#analytics"><BarChart3 className="w-4 h-4"/>Analytics</a>
          <a className="hover:text-slate-900 dark:hover:text-white inline-flex items-center gap-2" href="#users"><Users className="w-4 h-4"/>User Management</a>
          <a className="hover:text-slate-900 dark:hover:text-white inline-flex items-center gap-2" href="#settings"><Settings className="w-4 h-4"/>Settings</a>
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={onToggleTheme} className="px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-700 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
            {theme === 'dark' ? 'Light' : 'Dark'} mode
          </button>

          <div className="relative">
            <button onClick={() => setOpen(v => !v)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              <User className="w-4 h-4"/>
              <span className="text-sm">Alex</span>
              <ChevronDown className="w-4 h-4"/>
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-40 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg py-1 text-sm">
                <a className="block px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800" href="#profile">Profile</a>
                <a className="block px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800" href="#logout">Logout</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
