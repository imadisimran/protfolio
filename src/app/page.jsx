import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <Sidebar />
        <Hero />
        <About />
        <TechStack />
      </main>
    </>
  );
}
