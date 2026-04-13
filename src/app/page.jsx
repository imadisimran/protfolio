import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Education from "@/components/Education";
import Works from "@/components/Works";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <Sidebar />
        <Hero />
        <About />
        <TechStack />
        <Education />
        <Works />
      </main>
    </>
  );
}
