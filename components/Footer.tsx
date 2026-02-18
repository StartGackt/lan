export function Footer() {
  return (
    <footer className="relative z-10 py-12 px-6 border-t border-slate-200 bg-slate-50">
       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold text-lg tracking-tight opacity-50">
            <div className="grid grid-cols-2 gap-1">
               <div className="w-1 h-1 rounded-full bg-slate-900"/>
               <div className="w-1 h-1 rounded-full bg-slate-900"/>
               <div className="w-1 h-1 rounded-full bg-slate-900"/>
               <div className="w-1 h-1 rounded-full bg-slate-500"/>
            </div>
            <span>ChronoTask</span>
          </div>
          
          <div className="text-sm text-slate-500">
             &copy; {new Date().getFullYear()} ChronoTask Inc. All rights reserved.
          </div>

          <div className="flex gap-6 text-sm font-medium text-slate-500">
             <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
             <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
             <a href="#" className="hover:text-slate-900 transition-colors">Twitter</a>
          </div>
       </div>
    </footer>
  );
}
