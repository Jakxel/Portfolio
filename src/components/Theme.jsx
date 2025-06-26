import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "light") {
      root.style.setProperty("--background-color", "#ffffff");
      root.style.setProperty("--text-color", "#1a1a1a");
      root.style.setProperty("--title-color", "#1a1a1a");
      root.style.setProperty("--card-background", "#ffffff");
      root.style.setProperty("--border-color", "#D1D5DB");
      root.style.setProperty("color-scheme", "light");
    } else {
      root.style.setProperty("--background-color", "rgb(0, 0, 0)");
      root.style.setProperty("--text-color", "#697477");
      root.style.setProperty("--title-color", "#2A3B47");
      root.style.setProperty("--card-background", "#F9FAFB");
      root.style.setProperty("--border-color", "#D1D5DB");
      root.style.setProperty("color-scheme", "dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "🌙" : "🌞"}
    </button>
  );
}