'use client'

import { useTranslation } from '@/hooks/useTranslation'

import { Project } from './Project'
import { SubTitle } from './SubTitle'

export function SectionProjects() {
  const { t } = useTranslation()
  const translation = t()

  return (
    <section
      id="projects"
      className="w-full py-28 md:py-48 min-h-screen flex justify-center"
    >
      <div className="max-w-7xl flex flex-col flex-1 justify-center items-center px-6 gap-2 ">
        <SubTitle title={translation.sectionProjects.title} />
        <div className="w-full flex flex-1">
          <div className="border-l border-blue-800 pl-10 flex flex-1 flex-col">
            {translation.sectionProjects.projects.map((value, index) => {
              return (
                <Project
                  key={index}
                  title={value.title}
                  date={value.date}
                  description={value.description}
                  technologies={value.technologies}
                  url={value.url}
                  urlWebsite={value.urlWebsite}
                  urlVideo={value.urlVideo}
                  titleButtonProject={value.titleButtonProject}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
