import { Button } from '@/components/ui/button'
import { Menu, Search, Bell } from 'lucide-react';

function Navbar() {
    return (
        <header className="sticky top-0 z-30 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
            <div className='flex items-center'>
                <Button variant="ghost" size="icon" className="md:hidden text-slate-400 hover:text-white" aria-label="Open mobile menu"><Menu className="w-5 h-5" /></Button>
                <span className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
                    <span>Apex Console</span> ➔ <span className="text-cyan-400 font-semibold">National Command Grid</span>
                </span>
            </div>

            <Button className='cursor-pointer'>
                <Search className='w-4 h-4 text-slate-400' />
                Quick command or Route...
                <kbd className="bg-slate-950 border border-slate-700 text-[10px] font-mono px-1.5 py-0.5 rounded text-slate-300">⌘K</kbd>
            </Button>

            <div className='flex items-center gap-2'>
                <Button variant="ghost" size="icon" className="relative text-slate-400 hover:text-white" aria-label="View notifications">
                    <Bell className="w-4 h-4" />
                    <span className='w-2 h-2 rounded-full bg-cyan-400 absolute top-2 right-2'></span> 
                </Button>    
                <span className="hidden lg:inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono bg-slate-950 border border-slate-800 text-slate-300">Zone 1: West Africa</span>  
            </div>
        </header>
    );
}

export default Navbar;