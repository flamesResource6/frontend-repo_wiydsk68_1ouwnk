export default function Footer(){
  return (
    <footer className="mt-10 border-t border-slate-200 dark:border-slate-800 py-6 text-sm text-slate-500 text-center">
      © {new Date().getFullYear()} NovaDash • <a href="#docs" className="underline hover:text-slate-700 dark:hover:text-slate-300">Documentation</a> • <a href="#help" className="underline hover:text-slate-700 dark:hover:text-slate-300">Help</a>
    </footer>
  )
}
