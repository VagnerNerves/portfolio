"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import LogoV from "../assets/logoV.svg";

const sections = ["home", "about", "project", "contact"] as const;
type SECTIONS_TYPE = (typeof sections)[number];

export function Header() {
  const [activeSection, setActiveSection] = useState<SECTIONS_TYPE>("home");

  function handleScroll() {
    const scrollPosition = window.scrollY;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);

      if (!section?.offsetTop) {
        setActiveSection("home");
      } else if (section.offsetTop <= scrollPosition + 100) {
        setActiveSection(sections[i]);
        break;
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 w-full bg-zinc-950 px-10 py-5 h-24 z-50">
      <nav className="h-full flex gap-16 justify-center items-center">
        <Link
          href="#home"
          data-active={activeSection === "home"}
          className="font-semibold text-sm text-zinc-400 data-[active=true]:text-zinc-100 hover:text-zinc-100"
        >
          Home
        </Link>

        <Link
          href="#about"
          data-active={activeSection === "about"}
          className="font-semibold text-sm text-zinc-400 data-[active=true]:text-zinc-100 hover:text-zinc-100"
        >
          Sobre
        </Link>

        <Link href="/">
          <Image alt="Logo Vagner Nerves" src={LogoV} />
        </Link>

        <Link
          href="#project"
          data-active={activeSection === "project"}
          className="font-semibold text-sm text-zinc-400 data-[active=true]:text-zinc-100 hover:text-zinc-100"
        >
          Projetos
        </Link>

        <Link
          href="#contact"
          data-active={activeSection === "contact"}
          className="font-semibold text-sm text-zinc-400 data-[active=true]:text-zinc-100 hover:text-zinc-100"
        >
          Contato
        </Link>
      </nav>
    </header>
  );
}
