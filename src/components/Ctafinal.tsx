export default function CtaFinal() {
  return (
    <section className="flex flex-col items-center text-center px-8 py-16 border-b border-white/5">
      <div className="w-3/5 h-9 bg-white/10 rounded-xl mb-3 animate-pulse" />
      <div className="w-2/5 h-4 bg-white/10 rounded mb-8 animate-pulse" />

      <div className="flex gap-3">
        <button className="px-6 py-2.5 text-sm bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-colors">
          Empezar gratis
        </button>
        <button className="px-6 py-2.5 text-sm text-white/50 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
          Ver demo →
        </button>
      </div>
    </section>
  );
}