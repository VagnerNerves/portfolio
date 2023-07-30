import { ButtonLink } from "./ButtonLink";
import { Carousel } from "./Carousel";

interface ProjectProps {
  title: string;
  date: string;
  description: string[];
  technologies: string[];
  url: string;
  images: {
    alt: string;
    src: string;
  }[];
}
export function Project({
  title,
  date,
  description,
  technologies,
  url,
  images,
}: ProjectProps) {
  return (
    <div className="group/project py-12 flex flex-1 gap-2">
      <div className="flex flex-1 flex-col relative">
        <div
          className="w-6 h-6 rounded-full bg-zinc-950 border-2 border-blue-800 absolute top-1 -left-[52px] 
    group-hover/project:bg-dashed group-hover/project:bg-cover "
        />
        <h3 className="font-bold text-xl text-zinc-50 leading-8">{title}</h3>
        <p className="font-normal text-xs text-zinc-400 leading-8">{date}</p>
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
      <div className="min-w-[400px] flex items-center justify-center ">
        <Carousel data={images} />
      </div>
    </div>
  );
}
