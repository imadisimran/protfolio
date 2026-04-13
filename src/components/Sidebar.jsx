import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-12 z-40">
      <div className="flex flex-col gap-4 items-center">
        <span className="vertical-text text-[10px] text-white/40 font-bold tracking-[0.3em] uppercase mb-4">FIND WITH ME</span>
        <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container hover:bg-primary transition-all text-on-surface-variant hover:text-on-primary">
          <span className="material-symbols-outlined text-xl">social_leaderboard</span>
        </Link>
        <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container hover:bg-primary transition-all text-on-surface-variant hover:text-on-primary">
          <span className="material-symbols-outlined text-xl">camera_alt</span>
        </Link>
        <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container hover:bg-primary transition-all text-on-surface-variant hover:text-on-primary">
          <span className="material-symbols-outlined text-xl">link</span>
        </Link>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <span className="vertical-text text-[10px] text-white/40 font-bold tracking-[0.3em] uppercase mb-4">BEST SKILL ON</span>
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-high border border-primary/20 text-primary">
          <span className="material-symbols-outlined text-xl">brush</span>
        </div>
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-high border border-primary/20 text-primary">
          <span className="material-symbols-outlined text-xl">draw</span>
        </div>
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-high border border-primary/20 text-primary">
          <span className="material-symbols-outlined text-xl">palette</span>
        </div>
      </div>
    </aside>
  );
}
