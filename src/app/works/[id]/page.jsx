import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import worksData from "@/data/worksData.json";
import Footer from "@/components/Footer";

// Generate static routes dynamically at build time
export async function generateStaticParams() {
  return worksData.map((work) => ({
    id: work.id.toString(),
  }));
}

export default async function WorkDetails({ params }) {
  // Await the params per Next.js 14/15 standards
  const resolvedParams = await params;
  const work = worksData.find((w) => w.id.toString() === resolvedParams.id);

  if (!work) {
    notFound();
  }

  return (
    <div className="flex h-dvh w-full overflow-hidden bg-background">
      {/* Sidebar Navigation */}
      <aside className="w-80 h-full border-r border-white/5 flex flex-col glass-sidebar shrink-0 relative z-20 overflow-y-auto">
        <div className="p-8 border-b border-white/5">
          <Link href="/" className="flex items-center gap-2 mb-12 hover:opacity-80 transition-opacity">
            <Image src="/logo.png" alt="Company Logo" width={32} height={32} className="rounded-full shadow-[0_0_15px_rgba(255,1,79,0.3)]" />
            <div className="text-xl font-bold tracking-tighter text-white font-headline">Imad Imran</div>
          </Link>
          
          <div className="space-y-1 mb-8">
            <span className="text-primary font-bold tracking-widest uppercase text-[10px] block">Case Study // {new Date().getFullYear()}</span>
            <h1 className="text-3xl font-extrabold font-headline tracking-tighter leading-tight text-white mb-2">
              {work.title}
            </h1>
          </div>
          
          <div className="grid grid-cols-1 gap-4 py-4 border-y border-white/5 mb-8">
            <div>
              <span className="text-on-surface-variant text-[10px] font-label uppercase tracking-widest block mb-2">Capabilities Included</span>
              <div className="flex flex-wrap gap-2">
                {work.tags.map(tag => (
                   <span key={tag} className="text-on-surface-variant font-semibold text-[11px] bg-surface-container border border-white/5 px-2.5 py-1 rounded-md">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            {work.live && (
              <Link 
                className="group flex items-center justify-between p-4 rounded-xl bg-linear-to-r from-[#ffb2b6] to-primary-container text-on-primary-fixed font-bold text-sm transition-all hover:shadow-[0_0_20px_rgba(255,81,106,0.3)]" 
                href={work.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Project
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_outward</span>
              </Link>
            )}
            {work.github && (
              <Link 
                className="group flex items-center justify-between p-4 rounded-xl bg-surface-container-highest border border-white/5 text-white font-bold text-sm transition-all hover:bg-surface-bright" 
                href={work.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
                <span className="material-symbols-outlined text-sm group-hover:rotate-12 transition-transform">code</span>
              </Link>
            )}
          </div>
        </div>
        
        <nav className="p-8 mt-auto">
          <div className="flex flex-col gap-4">
            <Link className="text-on-surface-variant font-semibold font-headline text-sm flex items-center gap-2 group transition-all" href="/#portfolio">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(255,81,106,0.5)]"></span>
              <span className="group-hover:translate-x-1 transition-transform">Work</span>
            </Link>
            <Link className="text-on-surface-variant hover:text-white transition-colors font-headline text-sm hover:translate-x-1 block w-max" href="/#service">Services</Link>
            <Link className="text-on-surface-variant hover:text-white transition-colors font-headline text-sm hover:translate-x-1 block w-max" href="/#about">About</Link>
            <Link className="text-on-surface-variant hover:text-white transition-colors font-headline text-sm hover:translate-x-1 block w-max" href="/#contact">Contact</Link>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5">
            <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/60">© {new Date().getFullYear()} Imad Imran</p>
          </div>
        </nav>
      </aside>
      
      {/* Main Content Area */}
      <main className="flex-1 h-full overflow-y-auto bg-surface-container-lowest relative">
        <div className="w-full h-80 md:h-96 relative overflow-hidden bg-surface-container-low border-b border-white/5">
          <Image alt={work.title} className="object-cover opacity-60 mix-blend-screen" src={work.image} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw" priority />
          <div className="absolute inset-0 bg-linear-to-t from-surface-container-lowest via-surface-container-lowest/20 to-transparent"></div>
        </div>
        
        <div className="p-8 lg:p-12 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-8">
              <h2 className="text-xl font-bold font-headline mb-6 flex items-center gap-3 text-white">
                <span className="w-8 h-0.5 bg-primary rounded-full"></span>
                Project Overview
              </h2>
              <div className="space-y-4 text-on-surface-variant text-base leading-relaxed max-w-3xl">
                <p>{work.desc}</p>
                <p>
                  This application was specifically architected leveraging the optimal technologies to guarantee immediate responsive feedback cycles, deep performance thresholds, and a fluid scaling user-experience optimized natively across arbitrary viewport boundaries.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-4 bg-surface-container-high/30 rounded-2xl p-6 border border-white/5 h-max">
              <h2 className="text-sm font-bold font-headline mb-6 uppercase tracking-wider text-primary">Core Architecture</h2>
              <ul className="space-y-4">
                {work.tags.map(tag => (
                  <li key={tag} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <span className="material-symbols-outlined text-base" data-weight="fill">deployed_code</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-white">{tag}</h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-surface-container rounded-2xl border border-white/5 overflow-hidden flex flex-col mb-12 shadow-2xl">
            <div className="flex border-b border-white/5 bg-surface-container-high/50">
              <div className="px-6 py-4 border-r border-white/5 bg-surface-container text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <span className="material-symbols-outlined text-base">analytics</span>
                Project Insights
              </div>
            </div>
            <div className="p-6 md:p-10 space-y-12">
              {/* Technical Challenges Section */}
              {work.challenges && work.challenges.length > 0 && (
                <section>
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-lg font-bold font-headline text-white">Technical Challenges</h2>
                    <div className="h-px flex-1 bg-white/5"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {work.challenges.map((challenge, index) => (
                      <div key={challenge.title} className="p-5 rounded-xl bg-surface-container-high border border-white/5 hover:border-primary/30 transition-colors">
                        <div className="flex items-start gap-4">
                          <span className="text-primary font-bold text-xs opacity-50">0{index + 1}</span>
                          <div>
                            <h4 className="font-bold text-sm mb-2 text-white">{challenge.title}</h4>
                            <p className="text-xs text-on-surface-variant leading-relaxed">
                              {challenge.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Future Roadmap Section */}
              {work.futurePlans && work.futurePlans.length > 0 && (
                <section>
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-lg font-bold font-headline text-white">Future Roadmap</h2>
                    <div className="h-px flex-1 bg-white/5"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {work.futurePlans.map((plan, index) => (
                      <div key={plan.title} className="p-5 rounded-xl bg-surface-container-high/50 border border-white/5">
                        <span className="material-symbols-outlined text-primary text-xl mb-3">{plan.icon || 'star'}</span>
                        <h3 className="text-sm font-bold text-white mb-2">{plan.title}</h3>
                        <p className="text-xs text-on-surface-variant leading-relaxed">
                          {plan.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
        
        {/* Render the Global Footer at the bottom of the dynamic route main container */}
        <Footer />
        
      </main>
    </div>
  );
}
