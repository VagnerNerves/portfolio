import { ButtonLink } from "./ButtonLink";

interface ProjectProps {
  title: string;
  data: string;
  description: string[];
  technologies: string[];
  url: string;
}
export function Project({
  title,
  data,
  description,
  technologies,
  url,
}: ProjectProps) {
  return (
    <div className="group/project py-9 flex flex-1 gap-2">
      <div className="flex flex-1 flex-col relative">
        <div
          className="w-6 h-6 rounded-full bg-zinc-950 border-2 border-blue-800 absolute top-1 -left-[52px] 
    group-hover/project:bg-dashed group-hover/project:bg-cover "
        />
        <h3 className="font-bold text-xl text-zinc-50 leading-8">{title}</h3>
        <p className="font-normal text-xs text-zinc-400 leading-8">{data}</p>
        <div className="font-normal text-base text-zinc-400 leading-8 space-y-5">
          {description.map((value, index) => (
            <p key={index}>{value}</p>
          ))}

          <p>
            <span className="font-bold">Tecnologias Utilizadas:</span>{" "}
            {technologies.join(" · ")}
          </p>

          <ButtonLink typeIcon="github" title="Acesse o Projeto" url={url} />
        </div>
      </div>
      <div className="min-w-[400px] flex items-center justify-center bg-zinc-500">
        <p className="text-zinc-200">photo</p>
      </div>
    </div>
  );
}
