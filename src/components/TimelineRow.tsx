// One row: small date on the left, details on the right.
// Reused by Experience, Education and Certifications.
interface Props { date: string; title: string; org?: string; place?: string }

export default function TimelineRow({ date, title, org, place }: Props) {
  return (
    <div className="grid gap-1 sm:grid-cols-[11.5rem_1fr] sm:gap-0">
      <p className="pt-1 text-xs text-muted">{date}</p>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        {org && <p className="text-sm font-semibold">{org}</p>}
        {place && <p className="text-sm text-muted">{place}</p>}
      </div>
    </div>
  );
}
