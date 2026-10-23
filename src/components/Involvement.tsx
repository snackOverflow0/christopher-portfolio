import { useEffect, useState } from "react";
import { involvement } from "../data/portfolio";

// "Community & Involvement": filterable list of entries, plus an Events photo gallery.
// All content comes from `involvement` in src/data/portfolio.ts.

export default function Involvement() {
  const categories = ["All", ...Array.from(new Set(involvement.map((e) => e.category)))];
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const shown = active === "All" ? involvement : involvement.filter((e) => e.category === active);
  const photos = involvement.flatMap((e) => e.photos);

  // Close the lightbox with Escape.
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (ev: KeyboardEvent) => ev.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  if (involvement.length === 0) return null;

  return (
    <section id="involvement" className="py-10">
      <h2 className="text-xl font-semibold text-fg">Community &amp; Involvement</h2>
      <p className="mt-1 text-sm text-fg/60">
        Hackathons, pitching competitions, and events that connect my work with the wider tech community.
      </p>

      {categories.length > 2 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={`rounded-full border px-3 py-1 text-xs transition ${
                active === c
                  ? "border-fg bg-fg text-bg"
                  : "border-fg/20 text-fg/70 hover:border-fg/50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <div className="mt-6 divide-y divide-fg/10 border-t border-dashed border-fg/20">
        {shown.map((e) => (
          <article key={e.title} className="flex flex-col gap-4 py-6 sm:flex-row">
            {e.certificateImage && (
              <button
                type="button"
                onClick={() => setLightbox({ src: e.certificateImage!, alt: `${e.certificateLabel ?? "Certificate"} — ${e.title}` })}
                className="w-full shrink-0 overflow-hidden rounded-xl border border-fg/10 sm:w-48"
                aria-label="View certificate"
              >
                <img
                  src={e.certificateImage}
                  alt={`${e.certificateLabel ?? "Certificate"} — ${e.title}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </button>
            )}

            <div className="min-w-0">
              <p className="text-[11px] font-medium uppercase tracking-widest text-fg/50">
                {e.category} · {e.date}
              </p>
              <h3 className="mt-1 text-base font-medium text-fg">{e.title}</h3>
              <p className="text-sm font-semibold text-fg/80">{e.organizer}</p>
              <p className="mt-2 text-sm text-fg/70">
                <span className="font-semibold">Role:</span> {e.role}
              </p>
              <p className="text-sm text-fg/70">
                <span className="font-semibold">Location:</span> {e.location}
              </p>
              {e.description && <p className="mt-2 text-sm text-fg/60">{e.description}</p>}
              {e.certificateLabel && <p className="mt-2 text-sm text-fg/70">{e.certificateLabel}</p>}
              {e.certificateImage && (
                <button
                  type="button"
                  onClick={() => setLightbox({ src: e.certificateImage!, alt: `${e.certificateLabel ?? "Certificate"} — ${e.title}` })}
                  className="mt-2 text-[11px] font-medium uppercase tracking-widest text-fg/60 hover:text-fg"
                >
                  View certificate ↗
                </button>
              )}
            </div>
          </article>
        ))}
      </div>

      {photos.length > 0 && (
        <div className="mt-6" id="events">
          <h3 className="text-lg font-semibold text-fg">Events</h3>
          <p className="mt-1 text-sm text-fg/60">Photos from events, pitches, and moments outside the IDE.</p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {photos.map((p) => (
              <button
                key={p.src}
                type="button"
                onClick={() => setLightbox(p)}
                className="aspect-[4/3] overflow-hidden rounded-xl border border-fg/10"
              >
                <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover transition hover:scale-105" />
              </button>
            ))}
          </div>
        </div>
      )}

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-4 top-4 text-2xl text-white"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-[90vh] max-w-full rounded-lg object-contain"
            onClick={(ev) => ev.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
