import { useEffect, useState } from "react";
import type { Theme } from "../types";

// Remembers the visitor's choice in localStorage and applies it to <html data-theme="...">.
export default function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem("theme") as Theme) || "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  return { theme, toggle };
}
