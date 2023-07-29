import { CodeBlock } from "@/assets/icons/PhosphorIcons";
import { LinkIcon } from "./LinkIcon";
import { TypewriterText } from "./TypewriterText";

export function SectionHome() {
  return (
    <section
      id="home"
      className="w-full pt-24 pb-48 min-h-screen flex justify-center"
    >
      <div className="max-w-5xl flex flex-1 px-6">
        <div className="flex flex-col flex-1 justify-center items-center ">
          <div>
            <p className="font-normal text-4xl leading-15 text-zinc-50">Oi!</p>
            <p className="font-normal text-4xl leading-15 text-zinc-50 mr-12">
              Eu sou o <span className="font-medium">Vagner Nerves</span>,
            </p>

            <div className="inline-block p-2 bg-blue-950 rounded">
              <div className="flex items-center gap-2">
                <CodeBlock weight="bold" size={28} className="fill-blue-500" />
                <p className="font-normal text-4xl leading-15 text-blue-500">
                  desenvolvedor
                </p>
                <TypewriterText
                  text={["mobile", "fullstack"]}
                  divProps={{
                    className: "font-normal text-4xl leading-15 text-blue-500",
                  }}
                />
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
        <div className="flex flex-1 justify-center items-center bg-zinc-300">
          <p>Div2</p>
        </div>
      </div>
    </section>
  );
}
