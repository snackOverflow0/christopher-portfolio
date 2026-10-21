import { useEffect, useState } from "react";
import Section from "./Section";
import { profile } from "../data/portfolio";

interface Day { date: string; count: number; level: number }
interface ContributionData { total?: { lastYear?: number }; contributions: Day[] }

// Dot colors for contribution levels 0 (none) to 4 (most).
const LEVELS = ["bg-line", "bg-emerald-900", "bg-emerald-700", "bg-emerald-500", "bg-emerald-300"];

export default function GitHubActivity() {
  const [data, setData] = useState<ContributionData | null>(null);

  // Public API that returns the contribution calendar for any GitHub username.
  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${profile.githubUser}?y=last`)
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData(null));
  }, []);

  const days = data?.contributions ?? [];
  // The grid fills top-to-bottom, so pad the first column so days land on the right weekday.
  const padding = days.length ? new Date(days[0].date).getDay() : 0;

  return (
    <Section title="GitHub Activity">
      <div className="overflow-x-auto rounded-2xl border border-dashed border-line p-6">
        {days.length ? (
          <div className="grid w-max grid-flow-col grid-rows-7 gap-[3.98px]">
            {Array.from({ length: padding }).map((_, i) => <span key={"p" + i} className="size-2" />)}
            {days.map((d) => (
              <span key={d.date} title={`${d.count} on ${d.date}`} className={`size-2 rounded-full ${LEVELS[d.level]}`} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted">Loading contributions…</p>
        )}
        {data && (
          <p className="mt-4 text-sm text-muted">
            {data.total?.lastYear?.toLocaleString()} contributions in the last year
          </p>
        )}
      </div>
    </Section>
  );
}
