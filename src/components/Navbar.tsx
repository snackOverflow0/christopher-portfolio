import { Moon, Sun } from "lucide-react";
import type { Theme } from "../types";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Highlights", href: "#highlights" },
  { label: "Community", href: "#community" },
];

interface Props { theme: Theme; onToggleTheme: () => void; logo: string }

export default function Navbar({ theme, onToggleTheme, logo }: Props) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-[720px] items-center justify-between px-5">
        <a href="#top" className="text-sm font-bold">{logo}</a>
        <div className="flex items-center gap-5 text-sm text-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hidden hover:text-fg sm:block">{l.label}</a>
          ))}
          <span className="hidden h-5 w-px bg-line sm:block" />
          <button onClick={onToggleTheme} aria-label="Toggle theme" className="hover:text-fg">
            {theme === "dark" ? <Moon className="size-4" /> : <Sun className="size-4" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
