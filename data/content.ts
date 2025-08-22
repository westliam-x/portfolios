export const PERSONAL = {
  name: "Emelifonwu William",
  alias: "West",
  title: "Software Engineer",
  location: "Lagos, NG",
  email: "emelifonwuw@gmail.com",
  shortBio:
    "I craft fast, friendly interfaces that feel great to use. React/Next + TypeScript by day; pixel whisperer by night. Clean components, smooth motion, and zero drama at deploy.",
};

// Add an optional "icon" key to help the UI pick an icon
export const SOCIALS = [
  { name: "GitHub", icon: "github", href: "https://github.com/westliam-x" },
  { name: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/william-emelifonwu/" },
  // { name: "Portfolio", icon: "globe", href: "https://westliam-portfolio.vercel.app/" },
  { name: "Email", icon: "mail", href: "mailto:emelifonwuw@gmail.com" },
];

export const SKILLS = [
  "React", "Next.js", "TypeScript", "Tailwind CSS",
  "Component Architecture", "Accessibility (a11y)",
  "Framer Motion", "REST/GraphQL", "Testing",
  "Performance Optimization", "Responsive UI",
];

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  bullets: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Blaaiz",
    role: "Frontend Engineer",
    period: "02/2024 — Present",
    location: "Lagos, Nigeria",
    summary:
      "Gave the product a speed boost and polish pass — fewer clicks, faster loads, happier users.",
    bullets: [
      "Built dependable, reusable UI pieces with designers and backend folks on speed-dial.",
      "Shipped perf and a11y wins across devices (less jank, more joy).",
    ],
  },
  {
    company: "Skyboard Games",
    role: "Frontend Developer",
    period: "05/2025 — Present",
    location: "Remote",
    summary:
      "Real-time dashboards and reusable components for a social, stake-to-play gaming platform.",
    bullets: [
      "Improved dashboard accessibility by ~18% with semantic patterns and focus states.",
      "Hooked up key webhooks/integrations for a smoother live experience.",
    ],
  },
  {
    company: "Sterling Bank PLC",
    role: "Frontend Engineer",
    period: "08/2023 — 07/2024",
    location: "Remote",
    summary:
      "Turned requirements into reliable flows — responsive, secure, and easy for everyone to use.",
    bullets: [
      "Untangled UI paths for faster tasks and fewer support pings.",
      "Implemented integrations within regulatory guardrails.",
    ],
  },
];

export type Project = {
  name: string;
  tagline: string;
  stack: string[];
  highlights: string[];
  link?: string;   // Live / demo
  repo?: string;   // Code
  image?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Skyboard Games",
    tagline: "Play & stake with friends — real-time, skill-based board gaming.",
    stack: ["React Native", "TypeScript", "Node.js", "WebSockets", "Tailwind", "Paystack", "Webhooks"],
    highlights: [
      "Secure auth (register/login) and session handling",
      "Wallet & tokens: deposit → convert → stake → settle",
      "1v1 friend matches, private invites, quick auto-match",
      "Lag-tolerant game state with WebSockets",
      "Player dashboards: balance, history, leaderboards",
    ],
    link: "https://skyboardgames.com//",
    repo: "https://github.com/westliam-x",
    image: "/skyboard.png",
  },
  {
    name: "Blaaiz",
    tagline: "Send & receive international payments — smooth flows, fair rates.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    highlights: [
      "Cross-border transfers with transparent FX",
      "Onboarding + KYC that doesn’t fight you",
      "Secure dashboards to track every transfer",
      "Third-party payment integrations",
      "Fully responsive — pocket to desktop",
    ],
    link: "https://blaaiz.com",
    repo: "",
    image: "/blaaiz-portfolio.png",
  },
  {
    name: "Ayinke Consulting Inc",
    tagline: "Web presence for purpose-driven teams — clear, calm, credible.",
    stack: ["Next.js", "Tailwind", "TypeScript", "Contentful", "Vercel"],
    highlights: [
      "Impact-first storytelling with crisp, responsive design",
      "Accessible navigation patterns for broad audiences",
      "CMS integration for fast, safe content updates",
      "SEO-friendly structure for better discovery",
      "Deployed with preview hooks for content teams",
    ],
    link: "https://ayinkeconsulting.com",
    repo: "",
    image: "/ayinke.png",
  },
  {
    name: "Vortex",
    tagline: "One hub for gigs: budget, scope, chat, deliver. No tab chaos.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Node.js", "WebSockets", "Prisma"],
    highlights: [
      "Budgeting & allocation that actually sticks to reality",
      "‘The Vortex’: a shared workspace to talk & track",
      "Milestones, status, and approvals in one timeline",
      "Inline chat for requirements, revisions, decisions",
      "Designed to merge project, finance, and comms",
    ],
    repo: "https://github.com/westliam-x",
    image: "/vortex.png",
  },
];

export type ShowcaseItem = {
  title: string;
  kind: "Client" | "Personal";
  image: string;
  href?: string;
};

export const SHOWCASE: ShowcaseItem[] = [
  { title: "Vortex Gig Manager", kind: "Personal", image: "/vortex.png" },
  { title: "Pet Adoption Platform", kind: "Personal", image: "/adopt.png" },
  { title: "Cake Ordering System", kind: "Client", image: "/cake.png" },
  { title: "Estate Code Generator", kind: "Personal", image: "/codeGenerator.png" },
  { title: "Classroom Management", kind: "Personal", image: "/crms.png" },
  { title: "Crypto Dashboard", kind: "Client", image: "/crypto.png" },
  { title: "Queens Plastic Storefront", kind: "Client", image: "/ecomm.png" },
  { title: "Hotel Booking System", kind: "Client", image: "/housing.png" },
  { title: "Sierra Website", kind: "Client", image: "/sierra-portfolio.png" },
  { title: "Student Resource Hub", kind: "Client", image: "/studenthub360.png" },
  { title: "Babcock SIWES Platform", kind: "Client", image: "/siwes-portfolio.png" },
  { title: "TEDx Website", kind: "Client", image: "/tedx-portfolio.png" },
];
