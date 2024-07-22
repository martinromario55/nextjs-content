"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

type ThemeSwitchHook = [string, Dispatch<SetStateAction<string>>];

export function useThemeSwitch(): ThemeSwitchHook {
  const preferDarkQuery = "(prefers-color-schema:dark)";
  const storageKey = "theme";
  const isBrowser = typeof window !== "undefined";

  const toggleTheme = (theme: string) => {
    if (!isBrowser) return;

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem(storageKey, theme);
  };

  const getUserPreference = () => {
    if (!isBrowser) return "light";

    const userPref = window.localStorage.getItem(storageKey);
    if (userPref) {
      return userPref;
    }
    return window.matchMedia(preferDarkQuery).matches ? "dark" : "light";
  };

  const [mode, setMode] = useState<string>(getUserPreference());

  useEffect(() => {
    if (!isBrowser) return;

    const mediaQuery = window.matchMedia(preferDarkQuery);
    const handleChange = () => {
      const newMode = getUserPreference();
      setMode(newMode);
      toggleTheme(newMode);
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    toggleTheme(mode);
  }, [mode]);

  return [mode, setMode];
}
