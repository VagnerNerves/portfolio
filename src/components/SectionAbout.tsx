'use client'

import { useTranslation } from '@/hooks/useTranslation'
import { SubTitle } from './SubTitle'

export function SectionAbout() {
  const { t } = useTranslation()

  const translation = t()

  return (
    <section
      id="about"
      className="w-full py-28 md:py-48 min-h-screen flex justify-center bg-zinc-900 relative overflow-hidden"
    >
      <div className="mx-6 max-w-3xl flex flex-col flex-1 justify-center items-center gap-2 z-10">
        <SubTitle title={translation.sectionAbout.title} />
        <div className="font-medium text-base text-zinc-300 leading-8 space-y-5">
          {translation.sectionAbout.paragraph.map((data, index) => (
            <p key={index}>
              {data.beforeSpan !== '' && data.beforeSpan + ' '}
              {data.span !== '' && (
                <span
                  data-type={data.typeSpan}
                  className="font-bold bg-clip-text text-transparent bg-gradient-to-r data-[type='1']:from-blue-300 data-[type='1']:to-blue-500 data-[type='2']:from-blue-500 data-[type='2']:to-blue-300"
                >
                  {data.span}
                </span>
              )}
              {data.afterSpan !== '' && ' ' + data.afterSpan}
            </p>
          ))}
        </div>
      </div>

      <div className="w-72 h-72 rounded-full bg-blue-900 blur-3xl absolute top-60 -left-[122px]" />
      <div className="w-72 h-72 rounded-full bg-blue-900 blur-3xl absolute bottom-60 -right-[122px]" />
    </section>
  )
}
