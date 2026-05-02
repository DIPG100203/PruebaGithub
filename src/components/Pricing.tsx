function PricingCard({featured = false, row = 3}: {featured?: boolean, row?: number}) {
    return ( 
        <div className={`p-6 rounded-xl flex flex-col gap-4 ${featured ? "border-2 border-white/30 bg-white/5 relative"
            : "border border-white/10 bg-white/5"
        }`}>
            {featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-white text-black text-[10px] font-medium px-3 py-1 rounded-full">
                        Popular
                    </span>
                </div>
            )}

            {/* Plan name */}
            <div className="w-1/2 h-3.5 bg-white/10 rounded animate-pulse" />

            {/* Price */}
            <div>
                <div className="w-3/5 h-9 bg-white/10 rounded-lg mb-1 animate-pulse"/>
                <div className="w-2/5 h-3 bg-white/10 rounded animate-pulse"/>
            </div>

            {/* Features list */}
            <div className="flex flex-col gap-2">
                {Array.from({length: row}).map((_, i) => (
                    <div key={i} className="w-[85%] h-3 bg-white/10 rounded animate-pulse" />
                ))}
            </div>

            <button className={`w-full py-2 text-sm rounded-lg transition-colors ${featured ?
                "bg-white text-black font-medium hover:bg-white/90"
                : "border border-white/10 text-white/50 hover:bg-white/5"
            }`}>
                {featured ? "Empezar" : "Empezar"}
            </button>
        </div>
    )
}

export default function Pricing() {
    return (
        <section className="px-8 py-12 border-b border-white/5">
            {/* Header */}
            <div className="flex flex-col items-center text-center mb-8">
                <div className="w-2/5 h-7 bg-white/10 rounded-lg mb-4 animate-pulse" />
                <div className="flex gap-2">
                    <button className="px-4 py-1.5 text-xs border border-white/10 text-white/50 rounded-lg
                    hover:bg-white/5 transition-colors">
                        Mensual
                    </button>
                    <button className="px-4 py-1.5 text-xs bg-white text-black rounded-lg font-medium">
                        Anual &nbsp;-20%
                    </button>
                </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-3 gap-4">
                <PricingCard row={3} />
                <PricingCard featured row={4} />
                <PricingCard row={5} />
            </div>
        </section>
    )
}