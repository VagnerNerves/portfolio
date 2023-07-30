import { SectionContact } from "@/components/SectionContact";
import { Header } from "@/components/Header";
import { SectionAbout } from "@/components/SectionAbout";
import { SectionHome } from "@/components/SectionHome";
import { SectionProjects } from "@/components/SectionProjects";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="">
      <Header />
      <SectionHome />
      <SectionAbout />
      <SectionProjects />
      <SectionContact />
      <Footer />
    </main>
  );
}
