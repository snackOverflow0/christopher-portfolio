import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import { featured } from "../data/portfolio";

// Accordion-style cards: the hovered card grows wide, the others shrink to slim strips.
export default function FeaturedWork() {
  const [active, setActive] = useState(0);

  return (
    <Section id="highlights" title="Featured Work">
      <div className="flex h-72 gap-2">
        {featured.map((item, i) => {
          const isOpen = i === active;
          return (
            <a
              key={item.title}
              href={item.href}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              style={item.image ? { backgroundImage: `url(${item.image})` } : undefined}
              className={`relative flex flex-col justify-end overflow-hidden rounded-2xl border border-line bg-cover bg-center bg-gradient-to-br p-5 transition-[flex] duration-500 ${item.gradient} ${isOpen ? "flex-1" : "w-24 flex-none"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="relative text-white">
                {isOpen ? (
                  <>
                    <p className="font-mono text-[10px] uppercase tracking-widest">{item.tag}</p>
                    <h3 className="mt-2 text-3xl/9 font-light">{item.title}</h3>
                    <p className="mt-2 text-sm">{item.subtitle}</p>
                    <p className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest">
                      View <ArrowUpRight className="size-3" />
                    </p>
                  </>
                ) : (
                  <p className="font-mono text-[11px] uppercase">{item.tag}</p>
                )}
              </div>
            </a>
          );
        })}
      </div>
    </Section>
  );
}
