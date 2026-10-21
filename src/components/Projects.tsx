import { ArrowUpRight, ChevronRight } from "lucide-react";
import Section from "./Section";
import { projects, allProjectsHref } from "../data/portfolio";
import type { Project } from "../types";

function ProjectCard({ project }: { project: Project }) {
  const { title, role, description, image, href, stack } = project;
  return (
    <article className="flex flex-col rounded-xl border border-dashed border-line p-2">
      {/* Screenshot (falls back to a plain block until you add an image) */}
      {image ? (
        <img src={image} alt={title} className="aspect-[4/3] w-full rounded-lg object-cover object-top" />
      ) : (
        <div className="grid aspect-[4/3] place-items-center rounded-lg bg-card text-sm text-muted">Add screenshot</div>
      )}

      <div className="flex-1 px-2 pb-3 pt-4">
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="mt-1 text-sm font-semibold">{role}</p>
        <p className="mt-2 text-sm/6 text-muted">{description}</p>
        <div className="mt-4 flex gap-2 text-lg text-muted">
          {stack.map((Icon, i) => <Icon key={i} />)}
        </div>
      </div>

      <a href={href} className="mx-2 flex items-center justify-end gap-1 border-t border-dashed border-line py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted hover:text-fg">
        Visit site <ArrowUpRight className="size-3" />
      </a>
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-4 sm:grid-cols-3">
        {projects.map((p) => <ProjectCard key={p.title} project={p} />)}
      </div>
      <div className="mt-8 text-center">
        <a href={allProjectsHref} className="inline-flex items-center gap-3 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90">
          Explore All Projects <ChevronRight className="size-4" />
        </a>
      </div>
    </Section>
  );
}
