import { SectionContact } from "@/components/SectionContact";
import { Header } from "@/components/Header";
import { SectionAbout } from "@/components/SectionAbout";
import { SectionHome } from "@/components/SectionHome";

export default function Home() {
  return (
    <main className="">
      <Header />
      <SectionHome />
      <SectionAbout />
      <div id="project" className="pt-24 min-h-screen">
        <p className="text-zinc-300">Project</p>
      </div>
      <SectionContact />
    </main>
  );
}
