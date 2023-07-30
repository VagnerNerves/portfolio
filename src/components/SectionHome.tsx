import { CodeBlock } from "@/assets/icons/PhosphorIcons";

import VagnerNervesPhotoPng from "@/assets/vagnerNervesPhoto.png";

import { LinkIcon } from "./LinkIcon";
import { TypewriterText } from "./TypewriterText";
import Image from "next/image";

export function SectionHome() {
  return (
    <section
      id="home"
      className="w-full pt-6 pb-32 sm:py-48 min-h-screen flex justify-center"
    >
      <div className="max-w-7xl flex flex-1 flex-col md:flex-row gap-9 md:gap-0 px-6">
        <div className="flex flex-col flex-1 justify-center items-center ">
          <div className="font-normal text-lg sm:text-xl lg:text-4xl leading-10 lg:leading-15 text-zinc-50">
            <p>Oi!</p>
            <p className="mr-12">
              Eu sou o <span className="font-medium">Vagner Nerves</span>,
            </p>

            <div className="inline-block p-2 bg-blue-950 rounded">
              <div className="flex items-center gap-2 text-blue-500">
                <CodeBlock weight="bold" size={28} className="fill-blue-500" />
                <p>desenvolvedor</p>
                <TypewriterText text={["mobile", "fullstack"]} />
              </div>
            </div>

            <div className="flex mt-7 gap-4 justify-center items-center">
              <LinkIcon
                href="https://www.linkedin.com/in/vagnernervessantos/"
                typeIcons="linkedin"
              />
              <LinkIcon
                href="https://github.com/VagnerNerves"
                typeIcons="github"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <div>
            <Image
              width="406"
              src={VagnerNervesPhotoPng}
              alt="Foto de Vagner Nerves"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
