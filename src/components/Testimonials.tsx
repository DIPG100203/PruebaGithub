function TestimonialCard() {
  return (
    <div className="p-5 rounded-xl border border-white/10 bg-white/5 flex flex-col gap-4">
      {/* Quote lines */}
      <div className="flex flex-col gap-1.5">
        <div className="w-full h-3 bg-white/10 rounded animate-pulse" />
        <div className="w-4/5 h-3 bg-white/10 rounded animate-pulse" />
      </div>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5 shrink-0" />
        <div className="flex flex-col gap-1">
          <div className="w-20 h-3 bg-white/10 rounded animate-pulse" />
          <div className="w-14 h-2.5 bg-white/10 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="px-8 py-12 border-b border-white/5">
      <div className="grid grid-cols-2 gap-4">
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  );
}