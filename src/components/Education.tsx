import Section from "./Section";
import TimelineRow from "./TimelineRow";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <Section title="Education">
      {education.map((e) => (
        <TimelineRow key={e.title} date={e.date} title={e.title} org={e.org} place={e.place} />
      ))}
    </Section>
  );
}
