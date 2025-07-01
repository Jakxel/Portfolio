import React, { useEffect, useState } from "react";

const THEME_KEY = "theme";
const DARK_CLASS = "dark-theme";

function getInitialTheme() {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved;
    // Optional: use prefers-color-scheme
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
  }
  return "light";
}

export default function ThemeToggler() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add(DARK_CLASS);
    } else {
      root.classList.remove(DARK_CLASS);
    }
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? "☾" : "᮰"}
    </button>
  );
}