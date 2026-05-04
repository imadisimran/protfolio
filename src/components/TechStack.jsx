import Image from "next/image";

export default function TechStack() {
  const technologies = [
    { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "Express JS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
    { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  ];

  return (
    <section id="service" className="py-32 px-8 bg-surface">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-surface-container-high/50 backdrop-blur text-xs font-bold text-white tracking-widest uppercase">
            <span className="material-symbols-outlined text-sm text-onyx-accent">star</span>
            <span>Our Tech Stack</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tighter">
            Key Technologies &amp; Platforms
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
            We work with leading platforms and technologies that empower digital transformation, accelerate delivery, and drive measurable business results.
          </p>
          <div>
            <button className="bg-onyx-accent hover:opacity-90 text-white px-8 py-4 rounded-lg font-bold text-sm tracking-widest uppercase transition-all">
              Explore Tech Stack
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="bg-surface-container-low p-8 rounded-4xl border border-white/5 shadow-inner">
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {technologies.map((tech) => (
                <div key={tech.name} className="tech-card aspect-square rounded-2xl flex items-center justify-center p-4 relative">
                  <Image 
                    src={tech.src} 
                    alt={tech.name} 
                    fill
                    unoptimized
                    className="object-contain p-4" 
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-onyx-accent/5 rounded-full blur-[100px] -z-10"></div>
        </div>
      </div>
    </section>
  );
}
