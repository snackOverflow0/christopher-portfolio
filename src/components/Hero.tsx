import { ChevronRight, BadgeCheck } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Hero() {
  const p = profile;
  return (
    <section id="top" className="pb-10 pt-14">
      {/* Avatar + name + social icons */}
      <div className="flex items-center gap-6">
        {p.avatar ? (
          <img src={p.avatar} alt={p.name} className="size-40 rounded-full border-2 border-line object-cover" />
        ) : (
          <div className="grid size-40 shrink-0 place-items-center rounded-full border-2 border-line bg-card text-4xl">
            {p.initials}
          </div>
        )}
        <div>
          <h1 className="flex items-center gap-2 text-3xl font-semibold">
            {p.name} <BadgeCheck className="size-7 fill-sky-500 text-bg" />
          </h1>
          <div className="mt-3 flex gap-3 text-xl text-muted">
            {p.socials.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} aria-label={label} className="hover:text-fg"><Icon /></a>
            ))}
          </div>
        </div>
      </div>

      {/* Headline */}
      <h2 className="mt-8 text-4xl font-light">
        {p.role} <span className="text-accent">— {p.specialty}</span>
      </h2>

      {/* Intro sentence with inline tech chips */}
      <p className="mt-6 text-lg/9 text-muted">
        {p.intro}{" "}
        {p.introChips.map(({ label, icon: Icon, color }) => (
          <span key={label} className="mx-0.5 inline-flex items-center gap-2 rounded-md border border-dashed border-line px-2.5 py-0.5 align-middle text-sm text-fg">
            <Icon className={color} /> {label}
          </span>
        ))}{" "}
        {p.outro}
      </p>

      <a href={p.resumeUrl} className="mt-8 inline-flex items-center gap-3 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90">
        View Resume <ChevronRight className="size-4" />
      </a>
    </section>
  );
}
