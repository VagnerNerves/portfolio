import { At, LinkedinLogo } from '@/assets/icons/PhosphorIcons'
import Link from 'next/link'

interface CardLinkProps {
  typeIcon: 'email' | 'linkedin'
  title: string
  description: string
  url: string
}
export function CardLink({ typeIcon, title, description, url }: CardLinkProps) {
  return (
    <div className="px-5 py-6 bg-zinc-950 rounded-lg border border-zinc-800 hover:border-zinc-700">
      <div className="flex items-center gap-1 mb-3">
        {typeIcon === 'email' && (
          <At weight="bold" size={16} className="fill-zinc-200" />
        )}
        {typeIcon === 'linkedin' && (
          <LinkedinLogo weight="bold" size={16} className="fill-zinc-200" />
        )}

        <p className="font-bold text-base text-zinc-300">{title}</p>
      </div>
      <Link href={url} target="_blank">
        <p className="font-normal text-base text-zinc-300">{description}</p>
      </Link>
    </div>
  )
}
