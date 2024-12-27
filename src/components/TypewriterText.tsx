'use client'

import { HtmlHTMLAttributes } from 'react'
import { Typewriter } from 'react-simple-typewriter'

interface TypewriterTextProps {
  text: string[]
  divProps?: HtmlHTMLAttributes<HTMLDivElement>
}
export function TypewriterText({ text, divProps }: TypewriterTextProps) {
  return (
    <div {...divProps}>
      <Typewriter words={text} cursor loop={false} delaySpeed={10000} />
    </div>
  )
}
