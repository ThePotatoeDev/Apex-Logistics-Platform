import { Boxes, LayoutDashboard, Truck, Route, CreditCard, ShieldAlert } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function Sidebar() {
    return (
        <aside className="hidden md:flex flex-col justify-between w-64 h-screen sticky top-0 bg-slate-900/90 border-r border-slate-800 p-4 shrink-0">
            <div className="flex items-center gap-2.5 px-2 py-3 mb-4">
                <Boxes className="w-6 h-6 text-cyan-400" />
                <span className="font-bold text-white text-base tracking-tight">APEX DISPATCH</span>
                <Badge className="text-[10px] bg-cyan-500/10 text-cyan-300 border-cyan-500/20 font-mono">v2.4</Badge>
            </div>

            <nav className="space-y-1" aria-label="Sidebar Navigation">
                <a href="" className="bg-slate-800 text-cyan-400 font-semibold border-1-2 border-cyan-400 text-sm rounded-xl px-3 py-2.5 flex items-center gap-3">
                    <LayoutDashboard />
                    Operations Console
                </a>
                <a href="" className="hover:bg-slate-800/60 hover:text-slate-100 text-slate-400 text-sm rounded-xl px-3 py-2.5 flex items-center gap-3 transition">
                    <Truck />
                    Active Fleets
                </a>
                <a href="" className="hover:bg-slate-800/60 hover:text-slate-100 text-slate-400 text-sm rounded-xl px-3 py-2.5 flex items-center gap-3 transition">
                    <Route />
                    Corridor Telemetry
                </a>
                <a href="" className="hover:bg-slate-800/60 hover:text-slate-100 text-slate-400 text-sm rounded-xl px-3 py-2.5 flex items-center gap-3 transition">
                    <CreditCard />
                    Settlement Escrow
                </a>
                <a href="" className="hover:bg-slate-800/60 hover:text-slate-100 text-slate-400 text-sm rounded-xl px-3 py-2.5 flex items-center gap-3 transition">
                    <ShieldAlert />
                    Security & Audit
                </a>
            </nav>

            <div>
                <div className="bg-slate-950/60 border border-slate-800/80 p-3 rounded-xl mb-3">
                    <span className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        GPS Grid Nominal
                    </span>

                    <span className="text-[11px] text-slate-500">Latency: 22ms • 36 Hubs Synced</span>
                </div>
                <div>
                    <span className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
                        <span className="flex items-center justify-center px-2.5 py-2 rounded-full border-2">TB</span>
                        <span className="flex flex-col">
                            <span>Tunde Bakare</span>
                            <span className="text-[10px] text-slate-400">Fleet Supervisor</span>
                        </span> 
                    </span>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;