import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-surface-container-low py-32 px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-16 text-center italic">Who I Am?</h2>
        <div className="relative text-on-surface-variant text-xl leading-loose">
          <div className="relative md:w-64 md:h-64 w-48 h-48 rounded-full overflow-hidden border-8 border-surface-container-low shadow-2xl float-left md:mr-12 mr-6 mb-6 mt-2 shape-outside-circle">
            <Image 
              alt="About portrait" 
              className="object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-500" 
              src="/about.png"
              fill
              sizes="(max-width: 768px) 192px, 256px"
            />
          </div>
          <p className="mb-8">
              Hi, I&apos;m Imad Imran! My journey into web development started with a curiosity for how things work under the hood, and it has evolved into a career dedicated to building the future of the web. I thrive in the fast-paced world of evolving frameworks, constantly pushing myself to learn the next big thing.
          </p>
          <p className="mb-12">
              I specialize in the MERN stack (MongoDB, Express, React, Node.js) and love the challenge of bridging the gap between design and technical implementation. When I&apos;m not debugging, you&apos;ll likely find me working on a project where I need to learn something new or exploring new ways to optimize web performance. I like to use AI but I hate that AI will be the master of my projects.
          </p>
          <a href="/Resume-Imad Imran.pdf" target="_blank" className="w-full bg-linear-to-r from-primary to-primary-container text-on-primary-container py-6 rounded-2xl font-black text-lg tracking-[0.2em] uppercase flex items-center justify-center gap-4 glow-button clear-both">
            <span>DOWNLOAD RESUME</span>
            <span className="material-symbols-outlined text-2xl">download</span>
          </a>
        </div>
      </div>
    </section>
  );
}
