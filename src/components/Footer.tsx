'use client'
import { useTranslation } from '@/hooks/useTranslation'
import { LinkIcon } from './LinkIcon'

export function Footer() {
  const { t } = useTranslation()
  const translation = t()

  const initialYear = '2023'
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full pt-16 pb-40 sm:py-16 flex justify-center items-center">
      <div className="max-w-7xl flex flex-1 flex-col gap-6 px-6 ">
        <div className="flex flex-row justify-between items-center gap-2">
          <p className="font-semibold text-base text-zinc-400">
            {translation.name}
          </p>
          <div className="flex flex-row gap-4">
            <LinkIcon
              typeIcons="linkedin"
              href={translation.urlLinks.linkedin}
            />
            <LinkIcon typeIcons="github" href={translation.urlLinks.github} />
          </div>
        </div>
        <p className="font-normal text-sm text-zinc-400">
          {translation.footer.copyright} © {initialYear} - {currentYear}.{' '}
          {translation.footer.descriptionCopyright}
        </p>
      </div>
    </footer>
  )
}
