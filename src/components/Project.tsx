'use client'

import { useTranslation } from '@/hooks/useTranslation'
import { ButtonLink } from './ButtonLink'
import { Carousel } from './Carousel'

interface ProjectProps {
  title: string
  date: string
  description: string[]
  technologies: string[]
  url: string
  images: {
    alt: string
    src: string
  }[]
}
export function Project({
  title,
  date,
  description,
  technologies,
  url,
  images
}: ProjectProps) {
  const { t } = useTranslation()
  const translation = t()

  return (
    <div className="group/project py-12 flex flex-col lg:flex-row flex-1 gap-9 lg:gap-2">
      <div className="flex flex-1 flex-col relative">
        <div
          className="w-6 h-6 rounded-full bg-zinc-950 border-2 border-blue-800 absolute top-1 -left-[52px]
    group-hover/project:bg-dashed group-hover/project:bg-cover "
        />
        <h3 className="font-bold text-xl text-zinc-50 leading-8">{title}</h3>
        <p className="font-normal text-xs text-zinc-400 leading-8">{date}</p>
        <div className="font-normal text-base text-zinc-400 group-hover/project:text-zinc-300 leading-8 space-y-5">
          {description.map((value, index) => (
            <p key={index}>{value}</p>
          ))}

          <p>
            <span className="font-bold">
              {translation.sectionProjects.titleTechnologies}
            </span>{' '}
            {technologies.join(' · ')}
          </p>

          <ButtonLink
            typeIcon="github"
            title={translation.sectionProjects.titleButtonProject}
            url={url}
          />
        </div>
      </div>
      <div className="sm:min-w-[400px] flex items-center justify-center overflow-hidden">
        <Carousel data={images} />
      </div>
    </div>
  )
}
