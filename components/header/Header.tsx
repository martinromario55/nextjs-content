"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { cx } from "@/utils";
import { useThemeSwitch } from "@/hooks/useThemeSwitch";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "@/lib/Icons";
import { siteMetadata } from "@/utils/setMetadata";

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick((prev) => !prev);
  };
  return (
    <header className="flex w-full items-center justify-between p-4 px-5 sm:px-10">
      <Logo />

      <button
        className="z-50 inline-block sm:hidden"
        onClick={toggle}
        aria-label="Hamburger Menu"
      >
        <div className="ease w-6 cursor-pointer transition-all duration-300">
          <div className="relative">
            <span
              className="ease absolute top-0 inline-block h-0.5 w-full rounded bg-dark transition-all duration-200 dark:bg-light"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="ease absolute top-0 inline-block h-0.5 w-full rounded bg-dark transition-all duration-200 dark:bg-light"
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="ease absolute top-0 inline-block h-0.5 w-full rounded bg-dark transition-all duration-200 dark:bg-light"
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      <nav
        className="ease fixed right-1/2 top-6 z-50 flex w-max translate-x-1/2 items-center rounded-full border border-solid border-dark bg-light/80 px-6 py-3 font-medium capitalize backdrop-blur-sm transition-all duration-300 sm:hidden sm:px-8"
        style={{
          top: click ? "1rem" : "-5rem",
        }}
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mx-2">
          About
        </Link>
        <Link href="/contact" className="mx-2">
          Contact
        </Link>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "ease ml-2 flex h-6 w-6 items-center justify-center rounded-full p-1",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark",
          )}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </nav>

      <nav className="fixed right-1/2 top-6 z-50 hidden w-max translate-x-1/2 items-center rounded-full border border-solid border-dark bg-light/80 px-8 py-3 font-medium capitalize backdrop-blur-sm sm:flex">
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mx-2">
          About
        </Link>
        <Link href="/contact" className="mx-2">
          Contact
        </Link>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "ease ml-2 flex h-6 w-6 items-center justify-center rounded-full p-1",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark",
          )}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
      <div className="hidden items-center sm:flex">
        <a
          href={siteMetadata.linkedin}
          rel="noopener noreferrer"
          className="mr-4 inline-block h-6 w-6"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
        >
          <LinkedinIcon className="ease transition-all duration-200 hover:scale-125" />
        </a>
        <a
          href={siteMetadata.twitter}
          rel="noopener noreferrer"
          className="mr-4 inline-block h-6 w-6"
          aria-label="Reach out to me via Twitter"
          target="_blank"
        >
          <TwitterIcon className="ease transition-all duration-200 hover:scale-125" />
        </a>
        <a
          href={siteMetadata.github}
          rel="noopener noreferrer"
          className="mr-4 inline-block h-6 w-6"
          aria-label="Check my profile on Github"
          target="_blank"
        >
          <GithubIcon className="ease fill-black transition-all duration-200 hover:scale-125 dark:fill-dark" />
        </a>
        <a
          href={siteMetadata.dribbble}
          rel="noopener noreferrer"
          className="mr-4 inline-block h-6 w-6"
          aria-label="Check my profile on Dribbble"
          target="_blank"
        >
          <DribbbleIcon className="ease transition-all duration-200 hover:scale-125" />
        </a>
      </div>
    </header>
  );
};

export default Header;
