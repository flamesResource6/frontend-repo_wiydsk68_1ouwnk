import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SummaryCards from './components/SummaryCards'
import DataTable from './components/DataTable'
import Charts from './components/Charts'
import ActivitySidebar from './components/ActivitySidebar'
import Footer from './components/Footer'
import { currentUser } from './data/demo'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Header theme={theme} onToggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} />

      <Hero />

      <main id="dashboard" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-6">
          <div className="text-sm text-slate-500">Welcome,</div>
          <div className="text-2xl font-semibold">{currentUser.name}</div>
          <div className="text-slate-500 text-sm">{currentUser.role}</div>
        </div>

        <SummaryCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <Charts />
            <DataTable />
          </div>
          <ActivitySidebar />
        </div>

        <Footer />
      </main>
    </div>
  )
}

export default App
