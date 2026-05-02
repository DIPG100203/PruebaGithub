function FeatureCard() {
    return (
        <div className="p-5 rounded-xl border border-white/10 bg-white/5">
            <div className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 mb-3" />
            <div className="w-3/4 h-3.5 bg-white/10 rounded mb-2 animate-pulse" />
            <div className="w-full h-3 bg-white/10 rounded mb-1.5 animate-pulse" />
            <div className="w-4/5 h-3 bg-white/10 rounded animate-pulse" />
        </div>
    )
}

export default function Features() {
    return (
        <section className="px-8 py-12 border-b border-white/5">
            {/* Header */}
            <div className="flex flex-col items-center text-center mb-8">
                <div className="w-3/5 h-8 bg-white/10 rounded-lg mb-3 animate-pulse"/>
                <div className="w-2/5 h-4 bg-white/10 rounded animate-pulse" />
            </div>

            {/* Grid */}
            <div className="grid grid-cols-3 gap-4">
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
            </div>
        </section>
    )
}