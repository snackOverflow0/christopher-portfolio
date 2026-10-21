import type { IconType } from "react-icons";

export type Theme = "dark" | "light";

export interface Tech { label: string; icon: IconType; color: string }
export interface Social { label: string; href: string; icon: IconType }

export interface Profile {
  name: string; initials: string; avatar: string;
  role: string; specialty: string;
  intro: string; introChips: Tech[]; outro: string;
  resumeUrl: string; location: string; email: string; calendarUrl: string; quote: string;
  socials: Social[]; githubUser: string;
}

/** Used for both Experience and Education rows. */
export interface Job { date: string; title: string; org: string; place: string }

export interface Membership { name: string; meta: string; description: string; verifyUrl: string; image: string }
export interface CommunityInfo { title: string; description: string; href: string }
export interface FeaturedItem { tag: string; title: string; subtitle: string; href: string; image: string; gradient: string }
export interface Project { title: string; role: string; description: string; image: string; href: string; stack: IconType[] }

export interface Credential { date: string; title: string; issuer: string; href: string; image: string }
export interface Training { date: string; title: string; issuer: string }
export interface Certifications { main: Credential; training: Training[] }

export interface Hobbies { text: string; tags: string[]; photos: string[] }
