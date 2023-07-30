import { CardLink } from "./CardLink";

export function SectionContact() {
  return (
    <section
      id="contact"
      className="w-full py-28 md:py-48 min-h-screen flex justify-center items-center bg-zinc-900"
    >
      <div className="flex flex-col gap-4">
        <p className="font-bold text-xl text-zinc-50">Entre em contato por:</p>
        <div className="flex flex-col md:flex-row gap-5">
          <CardLink
            typeIcon="email"
            title="Email"
            description="vagnernervessantos@gmail.com"
            url="mailto:vagnernervessantos@gmail.com"
          />
          <CardLink
            typeIcon="linkedin"
            title="Linkedin"
            description="/VagnerNervesSantos"
            url="https://www.linkedin.com/in/vagnernervessantos/"
          />
        </div>
      </div>
    </section>
  );
}
