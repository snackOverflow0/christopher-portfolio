/**
 * ALL CONTENT LIVES HERE.
 * Everything marked TODO is placeholder text — replace it with your real info.
 */
import type { Certifications, CommunityInfo, FeaturedItem, Hobbies, Job, Membership, Profile, Project, Tech } from "../types";
import {
  FaGithub, FaLinkedin, FaEnvelope, FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaLaravel, FaPhp, FaPython, FaWordpress, FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiVite, SiPostgresql, SiSupabase, SiVercel } from "react-icons/si";

export const profile: Profile = {
  name: "Christopher Castelo",
  initials: "CC",
  avatar: "", // TODO: "/images/avatar.jpg" (put the file in public/images)
  role: "Full-Stack Developer",
  specialty: "React & Backend", // TODO
  intro: "I'm a full-stack developer building thoughtful web experiences and reliable backend systems with", // TODO
  introChips: [
    { label: "React", icon: FaReact, color: "text-sky-400" },
    { label: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
    { label: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  ],
  outro: "I'm currently working on ...", // TODO
  resumeUrl: "#", // TODO: link to your resume PDF
  location: "Philippines", // TODO
  email: "you@example.com", // TODO
  calendarUrl: "#", // TODO: Calendly / Cal.com link
  quote: "Build, break, repeat.", // TODO
  socials: [
    { label: "GitHub", href: "https://github.com/snackOverflow0", icon: FaGithub },
    { label: "LinkedIn", href: "#", icon: FaLinkedin }, // TODO
    { label: "Email", href: "mailto:you@example.com", icon: FaEnvelope }, // TODO
  ],
  githubUser: "snackOverflow0",
};

export const experience: Job[] = [
  { date: "Jan 2025 - Present", title: "Job Title", org: "Company Name", place: "City, Country" }, // TODO
  { date: "Jun 2023 - Dec 2024", title: "Previous Job Title", org: "Previous Company", place: "City, Country" }, // TODO
];

export const memberships: Membership[] = [
  {
    name: "Organization Name", // TODO
    meta: "Community member · Philippines",
    description: "Short description of the community and your role in it.",
    verifyUrl: "#",
    image: "", // TODO: membership card image, e.g. "/images/member-card.png"
  },
];

export const community: CommunityInfo = {
  title: "Hackathons, speaking, and community events",
  description: "A focused collection of the communities I join, contribute to, and learn with.",
  href: "#", // TODO: link to an events/photos page
};

// First item is shown wide; the others are slim cards that expand on hover.
export const featured: FeaturedItem[] = [
  { tag: "Community · Speaking", title: "Talk or Event Title", subtitle: "Role · Place", href: "#", image: "", gradient: "from-teal-600 to-lime-500" }, // TODO
  { tag: "Build", title: "Project", subtitle: "", href: "#", image: "", gradient: "from-slate-800 to-slate-950" },
  { tag: "Event", title: "Event", subtitle: "", href: "#", image: "", gradient: "from-zinc-800 to-black" },
];

export const projects: Project[] = [
  {
    title: "Project One", role: "Your role", // TODO
    description: "One or two sentences about what this project does.",
    image: "", // TODO: "/images/project-one.png"
    href: "#",
    stack: [FaHtml5, FaCss3Alt, FaJs],
  },
  {
    title: "Project Two", role: "Your role",
    description: "One or two sentences about what this project does.",
    image: "", href: "#", stack: [FaReact, SiTailwindcss, SiVercel],
  },
  {
    title: "Project Three", role: "Your role",
    description: "One or two sentences about what this project does.",
    image: "", href: "#", stack: [FaLaravel, FaPhp, SiPostgresql],
  },
];
export const allProjectsHref = "#"; // TODO: link to a full projects page / GitHub

// Three rows that scroll sideways in the Technologies section.
export const technologies: Tech[][] = [
  [
    { label: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { label: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
    { label: "JavaScript", icon: FaJs, color: "text-yellow-400" },
    { label: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { label: "Vite", icon: SiVite, color: "text-purple-400" },
    { label: "React", icon: FaReact, color: "text-sky-400" },
  ],
  [
    { label: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { label: "Supabase", icon: SiSupabase, color: "text-emerald-400" },
    { label: "PHP", icon: FaPhp, color: "text-indigo-400" },
    { label: "Laravel", icon: FaLaravel, color: "text-red-500" },
    { label: "Python", icon: FaPython, color: "text-blue-400" },
    { label: "PostgreSQL", icon: SiPostgresql, color: "text-sky-500" },
  ],
  [
    { label: "Vercel", icon: SiVercel, color: "text-fg" },
    { label: "WordPress", icon: FaWordpress, color: "text-blue-400" },
  ],
];

export const certifications: Certifications = {
  main: { date: "Month YYYY", title: "Certification Name", issuer: "Issuer", href: "#", image: "" }, // TODO
  training: [
    { date: "Month YYYY", title: "Course Name", issuer: "Provider" }, // TODO
  ],
};

export const education: Job[] = [
  { date: "2022 - 2027", title: "Your Degree", org: "Your University", place: "Campus" }, // TODO
];

export const hobbies: Hobbies = {
  text: "When I step away from the tech world, I recharge through ... and return to my projects with fresh energy.", // TODO
  tags: ["Travel", "Gym", "Music"], // TODO
  photos: [], // TODO: ["/images/hobby-1.jpg", "/images/hobby-2.jpg"]
};
