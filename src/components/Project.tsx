'use client'

import ReactPlayer from 'react-player'

import { useTranslation } from '@/hooks/useTranslation'
import { ButtonLink } from './ButtonLink'

interface ProjectProps {
  title: string
  date: string
  description: string[]
  technologies: string[]
  url?: string
  urlWebsite?: string
  urlVideo?: string
  titleButtonProject?: string
}
export function Project({
  title,
  // date,
  description,
  technologies,
  url,
  urlWebsite,
  urlVideo,
  titleButtonProject
}: ProjectProps) {
  const { t } = useTranslation()
  const translation = t()

  const titleButtonProjectHere = titleButtonProject
    ? titleButtonProject
    : translation.sectionProjects.titleButtonProject

  return (
    <div className="group/project py-12 flex flex-col lg:flex-row flex-1 gap-9">
      <div className="flex flex-1 flex-col relative">
        <div
          className="w-6 h-6 rounded-full bg-zinc-950 border-2 border-blue-800 absolute top-1 -left-[52px]
    group-hover/project:bg-dashed group-hover/project:bg-cover "
        />
        <h3 className="font-bold text-xl text-zinc-50 leading-8">{title}</h3>
        {/* <p className="font-normal text-xs text-zinc-400 leading-8">{date}</p> */}
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

          {url && (
            <ButtonLink
              typeIcon="github"
              title={titleButtonProjectHere}
              url={url}
            />
          )}

          {urlWebsite && (
            <ButtonLink
              typeIcon="globe"
              title={titleButtonProjectHere}
              url={urlWebsite}
            />
          )}
        </div>
      </div>
      {urlVideo && (
        <div className="sm:min-w-[300px] flex items-center justify-center overflow-hidden">
          <div className="sm:w-[320px] sm:h-[570px] w-[269px] h-[519px] rounded-2xl overflow-hidden">
            <ReactPlayer src={urlVideo} width="100%" height="100%" controls />
          </div>
        </div>
      )}
    </div>
  )
}
