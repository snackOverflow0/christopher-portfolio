import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-dashed border-line py-8 text-sm">
      <p className="italic text-muted">{profile.quote}</p>
      <p className="mt-1 text-muted">
        <span className="text-fg">{profile.name}</span> / Still sharpening / {profile.location}
      </p>
    </footer>
  );
}
