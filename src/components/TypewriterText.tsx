"use client";
import { HtmlHTMLAttributes } from "react";
import Typewriter from "typewriter-effect";

interface TypewriterTextProps {
  text: string[];
  divProps: HtmlHTMLAttributes<HTMLDivElement>;
}
export function TypewriterText({ text, divProps }: TypewriterTextProps) {
  return (
    <div {...divProps}>
      <Typewriter
        onInit={(typewriter) => {
          text.map((data) => {
            typewriter.typeString(data).pauseFor(10000).deleteAll();
          });

          typewriter.start();
        }}
        options={{
          // strings: text,
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}
