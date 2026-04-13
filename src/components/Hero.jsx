import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full px-8 grid lg:grid-cols-12 gap-12 items-center py-24">
        <div className="lg:col-span-6 relative z-10 lg:-ml-12">
          <div className="relative group">
            <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="relative aspect-[3/4] w-full bg-surface-container-high rounded-3xl overflow-hidden border-b-[12px] border-primary shadow-2xl">
              <Image 
                alt="Professional portrait" 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100" 
                src="/hero.png"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 lg:pl-12 space-y-10 z-20">
          <div className="space-y-6">
            <span className="text-primary font-headline font-bold tracking-[0.4em] text-sm uppercase inline-block border-l-4 border-primary pl-4">WELCOME TO MY WORLD</span>
            <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white">
                Hi, I&apos;m <br/><span className="text-primary">Imad Imran</span> <br/><span className="text-4xl lg:text-5xl font-medium tracking-normal text-white/60">A Professional Web Developer</span>
            </h1>
            <p className="text-on-surface-variant text-xl leading-relaxed max-w-xl font-light">
                I thrive at the intersection of logic and design. My toolkit includes React, Next.js, Node.js, and MongoDB, allowing me to build seamless end-to-end experiences. I&apos;m passionate about optimizing performance, implementing robust API structures, and ensuring every pixel serves a purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
