import { Calendar, ChevronRight, Mail, type LucideIcon } from "lucide-react";
import Section from "./Section";
import { profile } from "../data/portfolio";

interface CardProps { icon: LucideIcon; label: string; value: string; href: string }

function ContactCard({ icon: Icon, label, value, href }: CardProps) {
  return (
    <a href={href} className="flex items-center gap-4 rounded-2xl border border-line bg-card p-4 transition hover:border-accent">
      <span className="grid size-11 place-items-center rounded-xl bg-white/5"><Icon className="size-5" /></span>
      <span className="flex-1">
        <span className="block text-[11px] font-semibold uppercase tracking-wider text-sky-400">{label}</span>
        <span className="block">{value}</span>
      </span>
      <ChevronRight className="size-4 text-muted" />
    </a>
  );
}

export default function Contact() {
  return (
    <Section title="Let's work together.">
      <div className="grid gap-6 sm:grid-cols-2">
        <p className="text-lg/8 text-muted">
          Available for freelance web development and full-stack projects, from new builds to existing websites.
        </p>
        <div className="space-y-3">
          <ContactCard icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
          <ContactCard icon={Calendar} label="Let's talk" value="Schedule a Call" href={profile.calendarUrl} />
        </div>
      </div>
    </Section>
  );
}
