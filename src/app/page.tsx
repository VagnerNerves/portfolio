import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { SectionHome } from "@/components/SectionHome";

export default function Home() {
  return (
    <main className="">
      <Header />
      <SectionHome />
      <About />
      <div id="project" className="pt-24 min-h-screen">
        <p className="text-zinc-300">Project</p>
      </div>
      <div id="contact" className="pt-24 min-h-screen">
        <p className="text-zinc-300">Contact</p>
      </div>
    </main>
  );
}
