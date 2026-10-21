import { ArrowUpRight, ChevronRight } from "lucide-react";
import Section from "./Section";
import { memberships, community } from "../data/portfolio";

const label = "font-mono text-[11px] uppercase tracking-[0.15em]";

export default function Community() {
  return (
    <>
      {/* Memberships */}
      <Section
        title="Professional Memberships & Affiliations"
        subtitle="Organizations and professional communities I actively support and participate in."
      >
        {memberships.map((m) => (
          <div key={m.name} className="flex items-center justify-between gap-6 rounded-2xl border border-dashed border-line p-5">
            <div>
              <h3 className="font-semibold">{m.name}</h3>
              <p className={`${label} mt-1 text-muted`}>{m.meta}</p>
              <p className="mt-4 text-muted">{m.description}</p>
              <a href={m.verifyUrl} className={`${label} mt-4 inline-flex items-center gap-1 text-muted hover:text-fg`}>
                Verify membership <ArrowUpRight className="size-3" />
              </a>
            </div>
            {m.image && <img src={m.image} alt="" className="hidden w-52 rounded-xl sm:block" />}
          </div>
        ))}
      </Section>

      {/* Community involvement */}
      <Section id="community" title="Community & Involvement">
        <div className="flex items-center justify-between gap-4 border-y border-dashed border-line py-6">
          <div>
            <h3 className="font-semibold">{community.title}</h3>
            <p className="mt-1 text-sm text-muted">{community.description}</p>
          </div>
          <a href={community.href} className="flex shrink-0 items-center gap-3 text-sm text-muted">
            <span className="hidden sm:inline">Event Photos</span>
            <span className="flex items-center gap-1 text-fg">Explore <ChevronRight className="size-4" /></span>
          </a>
        </div>
      </Section>
    </>
  );
}
