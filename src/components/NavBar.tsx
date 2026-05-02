export default function NavBar() {
    return (
        <nav className="flex items-center justify-between px-8 py-4 border-b border-white/5">
            {/* Logo */}
            <div className="w-20 h-3.5 bg-white/10 rounded animate-pulse">

            {/* Links */}
            <div className="flex items-center gap-6">
                <div className="w-12 h-3 bg-white/10 rounded animate-pulse"></div>
                <div className="w-12 h-3 bg-white/10 rounded animate-pulse"></div>
                <div className="w-12 h-3 bg-white/10 rounded animate-pulse"></div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
                <button className="px-4 py-1.5 text-xs text-white/50 border border-white/10 rounded-lg 
                hover:bg-white/5 transition-colors">Login</button>
                <button className="px-4 py-1.5 text-xs bg-white text-black rounded-lg font-medium hover:bg-white/90
                 transition-colors">
                    Get Started
                </button>
            </div>
            </div>
        </nav>
    )
}