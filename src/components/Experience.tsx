import Section from "./Section";
import TimelineRow from "./TimelineRow";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" title="Experience" action={{ label: "View Details", href: "#" }}>
      <div className="space-y-7">
        {experience.map((job) => <TimelineRow key={job.title + job.date} {...job} />)}
      </div>
    </Section>
  );
}
