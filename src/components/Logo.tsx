export default function Logo() {
    return (
        <section className="flex flex-col items-center px-8 py-10 border-b border-white/5">
            {/* Label */}
            <div className="w-48 h-3 bg-white/10 rounded mb-6 animate-pulse"></div>

            {/* Logo row */}
            <div className="flex items-center justify-center gap-8">
                {Array.from({ length: 5}).map((_, i) => (
                    <div key={i} className="w-20 h-5 bg-white/10 rounded animate-pulse"/>
                ))}
            </div>
        </section>
    )
}