'use client'

import Image from 'next/image'
import { useTranslation } from '@/hooks/useTranslation'

import { CodeBlock } from '@/assets/icons/PhosphorIcons'

import VagnerNervesPhotoPng from '@/assets/vagnerNervesPhoto.png'

import { LinkIcon } from './LinkIcon'
import { TypewriterText } from './TypewriterText'

export function SectionHome() {
  const { t, language } = useTranslation()
  const translation = t()

  return (
    <section
      id="home"
      className="w-full pt-6 pb-32 sm:py-48 min-h-screen flex justify-center"
    >
      <div className="max-w-7xl flex flex-1 flex-col md:flex-row gap-9 md:gap-0 px-6">
        <div className="flex flex-col flex-1 justify-center items-center ">
          <div className="font-medium lg:font-normal text-xl sm:text-xl lg:text-4xl leading-10 sm:leading-10 lg:leading-15 text-zinc-50">
            <p>{translation.sectionHome.text1}</p>
            <h1 className="mr-14">
              {translation.sectionHome.text2}{' '}
              <span className="font-bold lg:font-medium">
                {translation.name}
              </span>
              ,
            </h1>

            <div className="inline-block p-2 bg-blue-950 rounded-sm">
              <div className="flex items-center gap-2 text-blue-500">
                <CodeBlock weight="bold" size={28} className="fill-blue-500" />
                {language === 'pt-br' ? (
                  <p>
                    {translation.sectionHome.text3}{' '}
                    <TypewriterText text={translation.sectionHome.skills} />
                  </p>
                ) : (
                  <p>
                    <TypewriterText text={translation.sectionHome.skills} />{' '}
                    {translation.sectionHome.text3}
                  </p>
                )}
              </div>
            </div>

            <div className="flex mt-7 gap-4 justify-center items-center">
              <LinkIcon
                href={translation.urlLinks.linkedin}
                typeIcons="linkedin"
              />
              <LinkIcon href={translation.urlLinks.github} typeIcons="github" />
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <div>
            <Image
              width="406"
              priority={true}
              src={VagnerNervesPhotoPng}
              alt={translation.sectionHome.altPhoto}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
