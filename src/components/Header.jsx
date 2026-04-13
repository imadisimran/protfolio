import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 glass-nav">
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto font-headline tracking-tight">
        <div className="text-xl font-bold tracking-tighter text-white">Omorpro</div>
        <div className="hidden md:flex gap-8 items-center">
          <Link href="#" className="text-[#ffb2b6] font-semibold border-b-2 border-[#ffb2b6] pb-1">Home</Link>
          <Link href="#" className="text-white/70 hover:text-white transition-colors">About</Link>
          <Link href="#" className="text-white/70 hover:text-white transition-colors">Service</Link>
          <Link href="#" className="text-white/70 hover:text-white transition-colors">Portfolio</Link>
          <Link href="#" className="text-white/70 hover:text-white transition-colors">Blog</Link>
          <Link href="#" className="text-white/70 hover:text-white transition-colors">Contact</Link>
        </div>
        <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary-container px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide uppercase glow-button">
            Hire Me
        </button>
      </nav>
    </header>
  );
}
