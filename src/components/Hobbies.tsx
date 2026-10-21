import Section from "./Section";
import { hobbies } from "../data/portfolio";

export default function Hobbies() {
  const { text, tags, photos } = hobbies;
  return (
    <Section title="Outside the IDE">
      <div className="flex items-center justify-between gap-8">
        <div className="max-w-sm">
          <p className="text-lg/8 text-muted">{text}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="rounded-full border border-line px-3 py-1 text-xs font-semibold">{t}</span>
            ))}
          </div>
        </div>

        {/* Stack of tilted photos; the first one sits on top */}
        {photos.length > 0 && (
          <div className="relative hidden h-56 w-52 shrink-0 sm:block">
            {photos.slice(0, 3).map((src, i) => (
              <img
                key={src}
                src={src}
                alt=""
                style={{ transform: `rotate(${i * 6 - 3}deg) translateX(${i * 10}px)`, zIndex: 3 - i }}
                className="absolute inset-0 h-full w-full rounded-2xl object-cover shadow-2xl"
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
