import { LinkedinLogo, GithubLogo } from '@/assets/icons/PhosphorIcons'
import Link from 'next/link'

interface LinkIconProps {
  href: string
  typeIcons: 'linkedin' | 'github'
}
export function LinkIcon({ href, typeIcons }: LinkIconProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Acesse o ${typeIcons} do Vagner Nerves`}
    >
      {typeIcons === 'linkedin' && (
        <LinkedinLogo
          weight="bold"
          size={26}
          className="fill-zinc-600 hover:fill-zinc-300"
        />
      )}
      {typeIcons === 'github' && (
        <GithubLogo
          weight="bold"
          size={26}
          className="fill-zinc-600 hover:fill-zinc-300"
        />
      )}
    </Link>
  )
}
