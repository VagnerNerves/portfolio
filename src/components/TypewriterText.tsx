'use client'

import { HtmlHTMLAttributes } from 'react'
import { Typewriter } from 'react-simple-typewriter'

interface TypewriterTextProps {
  text: string[]
}
export function TypewriterText({ text }: TypewriterTextProps) {
  return <Typewriter words={text} cursor loop={false} delaySpeed={10000} />
}
