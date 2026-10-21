import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

interface Props {
  id?: string;
  title: string;
  subtitle?: string;
  action?: { label: string; href: string };
  children: ReactNode;
}

// Wrapper used by every section: big light heading, optional subtitle, optional "View All >" link.
export default function Section({ id, title, subtitle, action, children }: Props) {
  return (
    <section id={id} className="scroll-mt-20 py-10">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-4xl font-light">{title}</h2>
          {subtitle && <p className="mt-1 text-muted">{subtitle}</p>}
        </div>
        {action && (
          <a href={action.href} className="flex shrink-0 items-center gap-1 text-sm text-accent hover:text-fg">
            {action.label} <ChevronRight className="size-4" />
          </a>
        )}
      </div>
      {children}
    </section>
  );
}
