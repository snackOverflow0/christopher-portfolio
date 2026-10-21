import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import TimelineRow from "./TimelineRow";
import { certifications } from "../data/portfolio";

const label = "font-mono text-[11px] uppercase tracking-[0.2em] text-muted";

export default function Certifications() {
  const { main, training } = certifications;
  return (
    <Section title="Certifications" action={{ label: "View All", href: "#" }}>
      <p className={label}>Professional credential</p>
      <div className="mt-4 grid items-center gap-1 sm:grid-cols-[11.5rem_1fr]">
        <p className="text-xs text-muted">{main.date}</p>
        <div className="flex items-center gap-4">
          {main.image ? (
            <img src={main.image} alt="" className="h-14 w-24 rounded object-cover" />
          ) : (
            <div className="h-14 w-24 rounded bg-card" />
          )}
          <div>
            <h3 className="text-lg font-semibold">{main.title}</h3>
            <p className="text-sm text-muted">{main.issuer}</p>
            <a href={main.href} className={`${label} mt-1 inline-flex items-center gap-1 hover:text-fg`}>
              View credential <ArrowUpRight className="size-3" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-dashed border-line pt-6">
        <p className={label}>Recent training</p>
        <div className="mt-4 space-y-4">
          {training.map((t) => (
            <TimelineRow key={t.title} date={t.date} title={t.title} place={t.issuer} />
          ))}
        </div>
      </div>
    </Section>
  );
}
