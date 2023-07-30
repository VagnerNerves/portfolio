import { LinkIcon } from "./LinkIcon";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pt-16 pb-40 sm:py-16 flex justify-center items-center">
      <div className="max-w-7xl flex flex-1 flex-col gap-6 px-6 ">
        <div className="flex flex-row justify-between items-center gap-2">
          <p className="font-semibold text-base text-zinc-400">Vagner Nerves</p>
          <div className="flex flex-row gap-4">
            <LinkIcon
              typeIcons="linkedin"
              href="https://www.linkedin.com/in/vagnernervessantos/"
            />
            <LinkIcon
              typeIcons="github"
              href="https://github.com/VagnerNerves"
            />
          </div>
        </div>
        <p className="font-normal text-sm text-zinc-400">
          Direitos Autorais © {currentYear}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
