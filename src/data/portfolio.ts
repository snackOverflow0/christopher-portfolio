
/**
 * Christopher Castelo — Portfolio Content
 *
 * Only include experience, certifications, and achievements
 * that you can verify and confidently discuss in an interview.
 */

import type {
  Certifications,
  CommunityInfo,
  FeaturedItem,
  Hobbies,
  InvolvementEntry,
  Job,
  Membership,
  Profile,
  Project,
  Tech,
} from "../types";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaLaravel,
  FaPhp,
  FaPython,
  FaWordpress,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiVite,
  SiPostgresql,
  SiSupabase,
  SiVercel,
} from "react-icons/si";

// ============================================================
// PROFILE
// ============================================================

export const profile: Profile = {
  name: "Christopher Castelo",
  initials: "CC",
  avatar: "", // Add your professional photo in public/images/avatar.jpg

  role: "Full-Stack Developer",
  specialty: "React, TypeScript & Backend Engineering",

  intro:
    "I build modern web applications and reliable backend systems using",

  introChips: [
    { label: "React", icon: FaReact, color: "text-sky-400" },
    { label: "TypeScript", icon: FaJs, color: "text-blue-400" },
    { label: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  ],

  outro:
    "Currently building real-world projects, strengthening my backend engineering skills, and preparing to contribute to a professional development team.",

  resumeUrl: "#", // Replace with your actual resume PDF
  location: "La Union, PH",
  email: "castelochristopher00@gmail.com",
  calendarUrl: "#", // Add a booking link if you have one

  quote: "Build with purpose. Learn continuously.",

  socials: [
    {
      label: "GitHub",
      href: "https://github.com/snackOverflow0",
      icon: FaGithub,
    },
    {
      label: "LinkedIn",
      href: "#", // Replace with your actual LinkedIn profile
      icon: FaLinkedin,
    },
    {
      label: "Email",
      href: "mailto:castelochristopher00@gmail.com",
      icon: FaEnvelope,
    },
  ],

  githubUser: "snackOverflow0",
};

// ============================================================
// EXPERIENCE
// ============================================================


export const experience: Job[] = [
  {
    date: "Project-based",
    title: "Web Developer",
    org: "Planning Our Cruise",
    place: "Remote",
  },
  {
    date: "Project-based",
    title: "Frontend Developer",
    org: "Luxury Travel Institute — LTI Review Platform",
    place: "Remote",
  },
];


// ============================================================
// MEMBERSHIPS
// ============================================================

// Add real organizations or developer communities you belong to.
// Do not list memberships you have not actually joined.

export const memberships: Membership[] = [];

// ============================================================
// COMMUNITY
// ============================================================

export const community: CommunityInfo = {
  title: "Building, Learning & Growing",
  description:
    "I continuously improve my development skills by building practical applications, exploring new technologies, and learning software engineering best practices.",
  href: "https://github.com/snackOverflow0",
};

// ============================================================
// COMMUNITY & INVOLVEMENT
// ============================================================

// Newest first. Add a new object here for each hackathon, pitch, talk or meetup.
// Images live in public/images/events/ and are referenced as /images/events/<file>.

export const involvement: InvolvementEntry[] = [
  {
    category: "Pitching",
    date: "October 23, 2026",
    title: "Philippine Startup Challenge XI \u2013 Regional Pitching Competition (Region 1)",
    organizer: "DICT Region 1 (Ilocos Region)",
    role: "Participant \u2014 Team GEIST",
    location: "Online via Google Meet \u00b7 DMMMSU",
    description:
      "Pitched our startup idea, Padaan, to the regional panel alongside teammates Den Carlo D. Aquino and Leann C. Soriano, coached by Mark Kristian C. Ledda.",
    certificateLabel: "Certificate of Participation",
    certificateImage: "/images/psc-certificate.png",
    photos: [
      { src: "/images/psc-team-group.jpg", alt: "Team GEIST with supporters after the regional pitch" },
      { src: "/images/psc-presenting.jpg", alt: "Presenting the Padaan thank-you slide during the pitch" },
      { src: "/images/psc-pitch-desk.jpg", alt: "Team GEIST at the pitching desk reviewing notes" },
      { src: "/images/psc-poster.png", alt: "Philippine Startup Challenge Region 1 event poster" },
    ],
  },
];

// ============================================================
// FEATURED
// ============================================================

// Feature real projects instead of inventing speaking engagements
// or community events.

export const featured: FeaturedItem[] = [
  {
    tag: "Featured Project",
    title: "StreamFlix",
    subtitle: "Streaming Platform",
    href: "https://github.com/snackOverflow0/StreamFlix_Streaming_Platform",
    image: "",
    gradient: "from-slate-800 to-slate-950",
  },
  {
    tag: "Web Development",
    title: "Planning Our Cruise",
    subtitle: "Cruise Planning Website",
    href: "https://planningourcruise.com",
    image: "",
    gradient: "from-blue-950 to-slate-800",
  },
  {
    tag: "Frontend Development",
    title: "LTI Review Platform",
    subtitle: "Client Review Website",
    href: "https://github.com/snackOverflow0/lti-review-platform",
    image: "",
    gradient: "from-zinc-800 to-black",
  },
];

// ============================================================
// PROJECTS
// ============================================================

export const projects: Project[] = [
  {
    title: "StreamFlix",
    role: "Full-Stack Development",

    description:
      "A streaming platform project featuring user authentication, profiles, subscription management, content browsing, and administrative functionality. Built with a focus on application integration, security, and responsive interfaces.",

    image: "images/streamflix.jpg",
    href: "https://github.com/snackOverflow0/StreamFlix_Streaming_Platform",

    stack: [FaReact, FaJs, SiSupabase, SiVercel],
  },

  {
    title: "Planning Our Cruise",
    role: "Frontend Development",

    description:
      "A cruise planning website that organizes cruise types and itinerary catalogs, helping travelers explore cruise options and access consultation features through a responsive interface.",

    image: "images/planningourcruise.png",
    href: "https://planningourcruise.com",

    stack: [FaReact, FaJs, SiTailwindcss, SiVite],
  },

  {
    title: "LTI Review Platform",
    role: "Frontend Development",

    description:
      "A review platform concept for Luxury Travel Institute clients, focused on a clean user experience, responsive layouts, and a straightforward review submission journey.",

    image: "",
    href: "https://github.com/snackOverflow0/lti-review-platform",

    stack: [FaReact, FaJs, SiTailwindcss, SiVercel],
  },
];

export const allProjectsHref =
  "https://github.com/snackOverflow0";

// ============================================================
// TECHNOLOGIES
// ============================================================

export const technologies: Tech[][] = [
  [
    {
      label: "HTML5",
      icon: FaHtml5,
      color: "text-orange-500",
    },
    {
      label: "CSS",
      icon: FaCss3Alt,
      color: "text-blue-500",
    },
    {
      label: "JavaScript",
      icon: FaJs,
      color: "text-yellow-400",
    },
    {
      label: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "text-cyan-400",
    },
    {
      label: "React",
      icon: FaReact,
      color: "text-sky-400",
    },
    {
      label: "Vite",
      icon: SiVite,
      color: "text-purple-400",
    },
  ],

  [
    {
      label: "Node.js",
      icon: FaNodeJs,
      color: "text-green-500",
    },
    {
      label: "Supabase",
      icon: SiSupabase,
      color: "text-emerald-400",
    },
    {
      label: "PostgreSQL",
      icon: SiPostgresql,
      color: "text-sky-500",
    },
    {
      label: "PHP",
      icon: FaPhp,
      color: "text-indigo-400",
    },
    {
      label: "Laravel",
      icon: FaLaravel,
      color: "text-red-500",
    },
    {
      label: "Python",
      icon: FaPython,
      color: "text-blue-400",
    },
  ],

  [
    {
      label: "Vercel",
      icon: SiVercel,
      color: "text-fg",
    },
    {
      label: "WordPress",
      icon: FaWordpress,
      color: "text-blue-400",
    },
  ],
];

// ============================================================
// CERTIFICATIONS
// ============================================================

// Replace these values when you have an actual certificate.
// Do not publish placeholder credentials on the live website.

export const certifications: Certifications = {
  main: {
    date: "",
    title: "",
    issuer: "",
    href: "",
    image: "",
  },

  training: [],
};

// ============================================================
// EDUCATION
// ============================================================

export const education: Job[] = [
  {
    date: "2022 - 2027",
    title: "Bachelor of Science in Information Technology",
    org: "Don Mariano Marcos Memorial State University",
    place: "Mid La Union Campus",
  },
];

// ============================================================
// HOBBIES & PERSONAL INTERESTS
// ============================================================

export const hobbies: Hobbies = {
  text:
    "Outside of coding, I enjoy exploring new ideas, learning new technologies, and finding inspiration for projects that solve practical problems.",

  tags: [
    "Building Projects",
    "Learning",
    "Problem Solving",
    "Playing Online Games"
  ],

  photos: [], // Add your own photos when available
};
