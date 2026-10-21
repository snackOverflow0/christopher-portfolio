import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { profile } from "../data/portfolio";

// Bottom-right: "Chat" pill (opens your email for now) + scroll-to-top button once you scroll down.
export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="grid size-10 place-items-center rounded-lg border border-dashed border-line bg-bg text-muted hover:text-fg"
        >
          <ArrowUp className="size-4" />
        </button>
      )}
      <a
        href={`mailto:${profile.email}`}
        className="flex items-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-black shadow-lg"
      >
        <MessageCircle className="size-5" /> Chat with {profile.name.split(" ")[0]}
      </a>
    </div>
  );
}
