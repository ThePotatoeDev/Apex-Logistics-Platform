import Sidebar from "@/components/layout/Sidebar"
import Navbar from "@/components/layout/Navbar";
import KpiDeck from "@/components/admin/KpiDeck";
import ManifestTable from "@/components/admin/ManifestTable";
import ShipmentsCharts from "@/components/admin/ShipmentsCharts";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-4 focus:z-50 focus:bg-cyan-500 focus:text-slate-950 focus:px-4 focus:py-2 focus:rounded-xl focus:font-bold focus:ring-2 focus:ring-cyan-400">Skip to main content</a>
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1 p-6 md:p-8 space-y-6 outline-none flex flex-col">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Apex Logistics Comman Center
                </h1>
                <span className="inline-flex items-center gap-3 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 ">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Live & Verified
                </span>
              </div>

              <p className="text-slate-400 mt-2 text-sm">
                Master dispatch console initialized. Responsive desktop sidebar, command header, and mobile drawer active.
              </p>
            </div>

            <KpiDeck />
            <ShipmentsCharts />
            <ManifestTable />
          </div>
        </main>
        <footer className="mt-auto p-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>© 2026 Apex Logistics Systems. All rights reserved.</p>
          <p className="font-mono">Build: v2.4.0-stable • Status: <span className="text-emerald-400">Nominal</span></p>
        </footer>
      </div>
    </div>
  );
}

export default App;