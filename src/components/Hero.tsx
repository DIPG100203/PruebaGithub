export default function Hero() {
    return (
        <section className="flex flex-col items-center text-center px-8 py-16 border-b border-white/5">

            {/* Badge */}
            <div className="flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span className="text-xs text-white/50">Anuncio — Nueva versión disponible</span>
            </div>

            {/* Headline placeholder */}
            <div className="w-4/5 h-12 bg-white/10 rounded-xl mb-3 animate-pulse"/>
            <div className="w-3/5 h-12 bg-white/10 rounded-xl mb-5 animate-pulse"/>

            {/* Subheadline */}
            <div className="w-1/2 h-4 bg-white/10 rounded mb-8 animate-pulse"/>

            {/* CTAs */}
            <div className="flex gap-3 mb-12">
                <button className="px-6 py-2.5 text-sm bg-white text-black rounded-lg font-medium
                hover:bg-white/90 transition-colors">
                    Empezar Gratis
                </button>
                <button className="px-6 py-2.5 text-sm text-white/50 border border-white/10 rounded-lg
                hover:bg-white/5 transition-colors">
                    Ver Demo {'>'}
                </button>
            </div>

            {/* Product screenshot placeholder */}
            <div className="relative w-full h-72 rounded-xl border border-white/10 bg-white/5 flex items-center
            justify-center overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-b from-emerald-900/10 to-transparent"></div>
                <span className="text-xs text-white/20 z-10">[ Captura de pantalla / Demo del producto ]</span>
            </div>
        </section>
    )
}