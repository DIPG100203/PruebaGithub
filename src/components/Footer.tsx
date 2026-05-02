export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-8 py-6">
      {/* Logo */}
      <div className="w-20 h-3.5 bg-white/10 rounded animate-pulse" />

      {/* Links */}
      <div className="flex gap-6">
        <div className="w-12 h-3 bg-white/10 rounded animate-pulse" />
        <div className="w-12 h-3 bg-white/10 rounded animate-pulse" />
        <div className="w-12 h-3 bg-white/10 rounded animate-pulse" />
      </div>

      {/* Copyright */}
      <div className="w-28 h-3 bg-white/10 rounded animate-pulse" />
    </footer>
  );
}