import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className="">
      <Header />
      <div id="home" className="pt-24 min-h-screen">
        <p className="text-zinc-300">Portfolio Vagner Nerves</p>
      </div>
      <div id="about" className="pt-24 min-h-screen">
        <p className="text-zinc-300">About</p>
      </div>
      <div id="project" className="pt-24 min-h-screen">
        <p className="text-zinc-300">Project</p>
      </div>
      <div id="contact" className="pt-24 min-h-screen">
        <p className="text-zinc-300">Contact</p>
      </div>
    </main>
  );
}
