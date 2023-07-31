'use client'

import { useTranslation } from '@/hooks/useTranslation'
import { CardLink } from './CardLink'

export function SectionContact() {
  const { t } = useTranslation()
  const translation = t()

  return (
    <section
      id="contact"
      className="w-full py-28 md:py-48 min-h-screen flex justify-center items-center bg-zinc-900"
    >
      <div className="flex flex-col gap-4">
        <p className="font-bold text-xl text-zinc-50">
          {translation.sectionContact.title}
        </p>
        <div className="flex flex-col md:flex-row gap-5">
          <CardLink
            typeIcon="email"
            title="Email"
            description={translation.urlLinks.email}
            url={`mailto:${translation.urlLinks.email}`}
          />
          <CardLink
            typeIcon="linkedin"
            title="Linkedin"
            description="/VagnerNervesSantos"
            url={translation.urlLinks.linkedin}
          />
        </div>
      </div>
    </section>
  )
}
