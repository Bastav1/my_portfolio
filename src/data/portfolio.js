export const profile = {
  name: "Bastav Podder",
  firstName: "Bastav",
  lastName: "Podder",
  role: "Full-Stack Developer & Systems Programmer",
  tagline: "I build fast, real-time web experiences — and the systems underneath them.",
  location: "Kolkata, India",
  email: "bastavpoddar1234@gmail.com",
  phone: "+91 96410 90531",
  github: "https://github.com/Bastav1",
  linkedin: "https://www.linkedin.com/in/bastav/",
  leetcode: "https://leetcode.com/u/Bastav19/",
  codolio: "https://codolio.com/profile/bastav",
  resumeUrl: "/resume.pdf",
  availability: "Open to internships & full-time SDE roles",
};

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/Bastav1", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bastav/", icon: "linkedin" },
  { label: "LeetCode", href: "https://leetcode.com/u/Bastav19/", icon: "leetcode" },
  { label: "Codolio", href: "https://codolio.com/profile/bastav", icon: "codolio" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: 1758, prefix: "", suffix: "", label: "Peak LeetCode contest rating" },
  { value: 1250, prefix: "", suffix: "+", label: "Algorithmic problems solved" },
  { value: 1187, prefix: "#", suffix: "", label: "Global rank, LeetCode Weekly 505" },
  { value: 200, prefix: "<", suffix: "ms", label: "Streamly real-time call latency" },
];

export const projects = [
  {
    id: "streamly",
    index: "01",
    year: "2025",
    title: "Streamly",
    tagline: "Real-time video conferencing & scheduling platform",
    description:
      "A production-grade video conferencing platform built with Next.js 14 and the Stream Video SDK, powering multi-participant WebRTC calls with sub-200ms connection latency. UUID-based shareable links drive instant and future-dated meetings, and Clerk-secured middleware routes ensure zero unauthorized access.",
    tech: ["Next.js 14", "Stream SDK", "WebRTC", "Clerk", "TypeScript", "Tailwind CSS"],
    links: {
      live: "https://streamly-ashen.vercel.app",
      github: "https://github.com/Bastav1/Streamly",
    },
  },
  {
    id: "redis-clone",
    index: "02",
    year: "2026",
    title: "Redis-Clone",
    tagline: "Multithreaded, Redis-compatible in-memory data store",
    description:
      "A from-scratch Redis-compatible store written in C++17 — a thread-per-connection concurrency model, a hand-rolled RESP protocol parser for fragmented and pipelined streams, and a dual-layer AOF plus snapshot persistence engine that guarantees zero data loss across restarts.",
    tech: ["C++17", "Sockets", "Multithreading", "STL", "RESP Protocol"],
    links: {
      live: null,
      github: "https://github.com/Bastav1/redis-clone",
    },
  },
  {
    id: "taskify",
    index: "03",
    year: "2025",
    title: "Taskify",
    tagline: "Role-based project & task management platform",
    description:
      "An all-in-one production management app spanning three permission tiers — Admin, Manager, Employee — with project and task lifecycles, approval workflows, budget analytics, and CSV exports. A Flutter frontend talks to an Express + TypeScript + MongoDB backend secured with JWT access/refresh tokens.",
    tech: ["Flutter", "Node.js", "Express", "TypeScript", "MongoDB"],
    links: {
      live: null,
      github: "https://github.com/Bastav1/taskify",
    },
  },
  {
    id: "pharmaerp",
    index: "04",
    year: "2026",
    title: "PharmaERP",
    tagline: "Pharmaceutical & medical CRM / ERP suite",
    description:
      "A full-scale life-sciences ERP and CRM covering inventory, GST billing, batch traceability, quality and regulatory compliance, and manufacturing — unifying WMS, QMS, MES, CRM, and BI modules into a single console for pharmaceutical businesses.",
    tech: ["React", "CRM", "ERP", "Compliance", "Analytics"],
    links: {
      live: "https://gobt-crm.netlify.app/",
      github: null,
    },
  },
];

export const skills = {
  Languages: ["C", "C++","Algorithms & Data Structures", "JavaScript", "TypeScript", "Python", "MySQL"],
  "Tools & Platforms": ["Docker", "AWS", "Git", "GitHub","Cisco Packet Tracer", "Postman"],
  "Frameworks & Tech": [
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "REST APIs",
    "WebRTC",
    "Stream SDK",
    "Clerk",
  ],
};

export const timeline = [
  {
    type: "Education",
    title: "ACME Academy",
    subtitle: "ICSE — 85.7%",
    period: "2021 — 2023",
    place: "Kolkata, India",
  },
  {
    type: "Education",
    title: "NIT Durgapur",
    subtitle: "B.Tech, Civil Engineering — CGPA 7.57",
    period: "2023 — 2027",
    place: "Durgapur, India",
  },
  {
    type: "Certification",
    title: "Web Development & DevOps",
    subtitle: "100xDevs",
    period: "Certification",
    place: "",
  },
  {
    type: "Certification",
    title: "C++",
    subtitle: "Udemy",
    period: "Certification",
    place: "",
  },
];

export const quotes = [
  {
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    text: "Simplicity and elegance are unpopular because they require hard work and discipline to achieve.",
    author: "Edsger W. Dijkstra",
  },
  {
    text: "Make it work, make it right, make it fast.",
    author: "Kent Beck",
  },
];
