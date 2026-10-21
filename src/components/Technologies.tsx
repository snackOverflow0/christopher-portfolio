import Section from "./Section";
import { technologies } from "../data/portfolio";
import type { Tech } from "../types";

function Chip({ label, icon: Icon, color }: Tech) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-dashed border-line bg-card px-4 py-2 text-sm text-fg">
      <Icon className={color} /> {label}
    </span>
  );
}

// Each row is repeated so the loop looks seamless; alternate rows scroll in opposite directions.
export default function Technologies() {
  const fade = "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]";
  return (
    <Section title="Technologies" action={{ label: "View All", href: "#" }}>
      <div className="space-y-3">
        {technologies.map((row, i) => (
          <div key={i} className={`overflow-hidden ${fade}`}>
            <div className={`flex w-max gap-3 ${i % 2 ? "marquee-reverse" : "marquee"}`}>
              {[...row, ...row, ...row, ...row].map((t, j) => <Chip key={j} {...t} />)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
