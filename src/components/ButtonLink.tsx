import Link from 'next/link'

import { GithubLogo, Globe } from '@/assets/icons/PhosphorIcons'

interface ButtonProps {
  typeIcon: 'github' | 'globe'
  title: string
  url: string
}
export function ButtonLink({ typeIcon, title, url }: ButtonProps) {
  return (
    <div className="inline-block">
      <Link
        href={url}
        target="_blank"
        className="group/link px-4 py-2 flex justify-center items-center gap-2 bg-zinc-950 rounded-sm border border-zinc-800 hover:border-zinc-700 "
      >
        {typeIcon === 'github' && (
          <GithubLogo
            weight="bold"
            size={16}
            className="fill-zinc-400 group-hover/link:fill-zinc-300"
          />
        )}

        {typeIcon === 'globe' && (
          <Globe
            weight="bold"
            size={16}
            className="fill-zinc-400 group-hover/link:fill-zinc-300"
          />
        )}

        <p className="font-medium text-sm text-zinc-400 group-hover/link:text-zinc-300">
          {title}
        </p>
      </Link>
    </div>
  )
}
