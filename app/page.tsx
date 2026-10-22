"use client";

import { useState } from "react";

/* ---------- Aman Kumar's Portfolio & Resume Content ---------- */
const NAME = "Aman Kumar";
const TITLE = "Software Engineer | Backend Development";
const AFFILIATION = "IK Gujral Punjab Technical University, Jalandhar";
const DEGREE = "B.Tech in Computer Science & Engineering (2023 – 2027)";
const CGPA = "8.52 / 10";
const LOCATION = "Punjab, India";
const PHONE = "+91 8084075974";
const EMAIL = "amankumar.cs27@gmail.com";
const GITHUB = "https://github.com/amankr32";
const LINKEDIN = "https://linkedin.com/in/amankr32";
const LEETCODE = "https://leetcode.com/amankr32";
const PORTFOLIO_URL = "https://amankrportfolio.vercel.app";
const RESUME_PDF = "/resume.pdf";

const coursework = [
  "Data Structures & Algorithms",
  "Database Management Systems",
  "Operating Systems",
  "Computer Networks",
];

const technicalSkills = [
  {
    category: "Programming Languages",
    items: "Java, JavaScript, SQL",
  },
  {
    category: "Backend Development",
    items: "Node.js, Express.js, REST APIs, WebSockets",
  },
  {
    category: "Databases & Tools",
    items: "PostgreSQL, MongoDB, MySQL, Git, GitHub, Postman",
  },
  {
    category: "Core Concepts",
    items: "Authentication & Authorization, API Design, Database Design, Caching, Concurrency",
  },
];

interface ExperiencePoint {
  text: string;
  badge?: string;
  badgeHref?: string;
  links?: { label: string; href: string }[];
}

interface ProfessionalExperienceItem {
  role: string;
  organization: string;
  location: string;
  date: string;
  focus: string;
  points: ExperiencePoint[];
}

interface OpenSourcePoint {
  text: string;
  badge?: string;
  badgeHref?: string;
}

interface OpenSourceItem {
  project: string;
  github: string;
  points: OpenSourcePoint[];
}

const professionalExperience: ProfessionalExperienceItem[] = [
  {
    role: "Summer Intern",
    organization: "Indian Institute of Technology (IIT Ropar), VLED Lab",
    location: "Rupnagar, Punjab, India",
    date: "May 2026 – Jul 2026",
    focus: "Full-Stack Development (MERN), Machine Learning",
    points: [
      {
        text: "Developed PippaQ, a semantic Q&A platform serving role-based access control, question-paper reputation scoring, and RAG-powered duplicate detection, working across Express.js, MongoDB, and React in a 5-member team.",
        badge: "Docs",
        badgeHref: "https://drive.google.com/file/d/1RU8wq0uf07ByLVOdb_mGwBCbujkNM8WS/view?usp=drivesdk",
      },
      {
        text: "Diagnosed and resolved a production middleware failure that caused all APIs to return HTTP 500 responses, restoring platform-wide functionality through a merged fix.",
        badge: "PR #2",
        badgeHref: "https://github.com/abhi03241/FAQ/pull/2",
      },
      {
        text: "Co-developed Spandan v0.8.0, a real-time classroom polling system using Socket.IO event synchronization, role-based authentication, and Whisper-powered transcription for automated question generation.",
      },
    ],
  },
  {
    role: "Backend Trainee",
    organization: "Excellence Technology",
    location: "Chandigarh, India",
    date: "Jun 2025 – Jul 2025",
    focus: "Full-Stack Development",
    points: [
      {
        text: "Built CodeBlog, a MERN-stack blogging platform implementing authentication, content publishing, and CRUD-based content management workflows.",
        links: [
          { label: "Live", href: "https://thecodeblog.vercel.app/" },
          { label: "GitHub", href: "https://github.com/amankr32/TheCodeBlog" },
        ],
      },
    ],
  },
];

const openSourceContributions: OpenSourceItem[] = [
  {
    project: "ArchScope",
    github: "https://github.com/Arch-Scope/ArchScope-public/",
    points: [
      {
        text: "Implemented a dynamic Contributors section by integrating the GitHub API, building a cached backend route, and enabling automatic contributor discovery with a responsive horizontal-scroll UI.",
        badge: "PR #56",
        badgeHref: "https://github.com/Arch-Scope/ArchScope-public/pull/56",
      },
      {
        text: "Developed a time-complexity based latency modeling feature supporting O(1), O(log n), O(n), and O(n²) growth patterns, enabling more realistic API performance benchmarking and simulation.",
        badge: "PR #59",
        badgeHref: "https://github.com/Arch-Scope/ArchScope-public/pull/59",
      },
    ],
  },
];

const projects = [
  {
    title: "LatencyLens",
    subtitle: "API Latency Benchmarking Tool",
    live: "https://latencylens-app.vercel.app/",
    github: "https://github.com/amankr32/LatencyLens",
    points: [
      "Built LatencyLens, an API benchmarking platform that generates and analyzes 10,000 concurrent HTTP requests while computing p50, p90, p95, and p99 latency metrics with under 5ms instrumentation overhead.",
      "Architected the system using Clean Architecture principles, implementing 12+ REST APIs, Server-Sent Events (SSE) for live benchmark tracking, and MongoDB-backed historical result storage to improve maintainability and observability.",
      "Developed a time-complexity driven latency simulation engine supporting O(1), O(log n), O(n), and O(n²) growth models, enabling realistic workload simulation for performance analysis.",
    ],
  },
  {
    title: "Resume Roaster",
    subtitle: "AI Resume ATS Checker",
    live: "https://resumeoptimizer-app.vercel.app/",
    github: "https://github.com/amankr32/Resume_Optimizer",
    points: [
      "Built Resume Roaster, an AI-powered resume analysis platform that processes uploaded resumes, extracts structured candidate data, and evaluates alignment against job descriptions.",
      "Developed a multi-stage evaluation pipeline for resume parsing, skill extraction, keyword matching, ATS analysis, and personalized feedback generation, enabling comprehensive resume reviews.",
      "Integrated LLM-based scoring and recommendation workflows to generate actionable improvement suggestions across content, formatting, experience presentation, and role-specific optimization.",
    ],
  },
  {
    title: "CampusCart",
    subtitle: "PTU Marketplace (Ongoing)",
    live: "",
    github: "https://github.com/amankr32/CampusCart",
    points: [
      "Built CampusCart to simplify peer-to-peer trading within college communities, implementing secure authentication, product management workflows, image uploads, and PostgreSQL-backed persistence.",
      "Designed and developed a buyer-seller messaging system with product-linked conversations and image sharing, enabling direct communication without relying on external platforms.",
      "Implemented role-based access control and protected backend APIs, ensuring secure marketplace operations and controlled access to platform resources.",
    ],
  },
];

const achievements = [
  "Selected for a Summer Internship at Indian Institute of Technology (IIT Ropar), VLED Lab.",
  "Awarded the Merit-cum-Means Scholarship for maintaining strong academic performance during B.Tech studies.",
  "Recipient of the prestigious F.C. Sondhi Scholarship for ranking among the top 1% of students in school-level academics.",
];

/* Minimal Mistakes Navigation Items */
const navLinks = [
  { label: "Home", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Miscellaneous", href: "#miscellaneous" },
  { label: "CV", href: RESUME_PDF },
];

/* FontAwesome / Academic Icons */
const Icons = {
  mapPin: (
    <svg className="w-4 h-4 shrink-0 text-[#393e46] dark:text-[#94a3b8]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  ),
  phone: (
    <svg className="w-4 h-4 shrink-0 text-[#10b981]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  ),
  linkedin: (
    <svg className="w-4 h-4 shrink-0 text-[#0077b5]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 0 0 1.66-1.66 1.66 1.66 0 0 0-1.66-1.66 1.66 1.66 0 0 0-1.66 1.66 1.65 1.65 0 0 0 1.66 1.66m1.39 9.74v-8.37H5.07v8.37h2.78z" />
    </svg>
  ),
  github: (
    <svg className="w-4 h-4 shrink-0 text-[#24292e] dark:text-[#f0f6fc]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
    </svg>
  ),
  code: (
    <svg className="w-4 h-4 shrink-0 text-[#f59e0b]" viewBox="0 0 24 24" fill="currentColor">
      <path d="m8.59 16.59 1.41 1.41 6-6-6-6-1.41 1.41L13.17 12l-4.58 4.59zm-4.18-4.59L9 7.41 7.59 6l-6 6 6 6 1.41-1.41z" />
    </svg>
  ),
  mail: (
    <svg className="w-4 h-4 shrink-0 text-[#d93025]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  ),
  fileText: (
    <svg className="w-4 h-4 shrink-0 text-[#0083b6] dark:text-[#38bdf8]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
    </svg>
  ),
  globe: (
    <svg className="w-4 h-4 shrink-0 text-[#0083b6] dark:text-[#38bdf8]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm7.93 9h-3.18a15.7 15.7 0 0 0-1.37-5.06A8.02 8.02 0 0 1 19.93 11zM12 4.07c.87 1.48 1.54 3.65 1.76 5.93h-3.52c.22-2.28.89-4.45 1.76-5.93zm-3.38 1.87A15.7 15.7 0 0 0 7.25 11H4.07a8.02 8.02 0 0 1 4.55-5.06zM4.07 13h3.18a15.7 15.7 0 0 0 1.37 5.06A8.02 8.02 0 0 1 4.07 13zm7.93 6.93c-.87-1.48-1.54-3.65-1.76-5.93h3.52c-.22 2.28-.89 4.45-1.76 5.93zm3.38-1.87a15.7 15.7 0 0 0 1.37-5.06h3.18a8.02 8.02 0 0 1-4.55 5.06z" />
    </svg>
  ),
  download: (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  ),
  menu: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  close: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#1e2227] text-[#222831] dark:text-[#e2e8f0]">
      {/* ======================================================== */}
      {/* 1. TOP MASTHEAD NAVIGATION (Minimal Mistakes / greedy-nav) */}
      {/* ======================================================== */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#1e2227]/95 backdrop-blur-sm border-b border-[#cecfd1] dark:border-[#333842]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Site Title */}
            <a
              href="#about"
              className="text-[17px] font-bold text-[#222831] dark:text-white tracking-tight hover:text-[#0083b6] dark:hover:text-[#38bdf8] transition-colors"
            >
              {NAME}
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[15px] font-semibold text-[#222831] dark:text-[#e2e8f0] hover:text-[#0083b6] dark:hover:text-[#38bdf8] hover:underline decoration-2 underline-offset-4 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-1.5 rounded text-[#222831] dark:text-white hover:bg-gray-100 dark:hover:bg-[#282c34]"
              >
                {mobileMenuOpen ? Icons.close : Icons.menu}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-3 border-t border-[#cecfd1] dark:border-[#333842] flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-2 py-1.5 text-sm font-semibold text-[#222831] dark:text-[#e2e8f0] hover:bg-gray-100 dark:hover:bg-[#282c34] rounded"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* ======================================================== */}
      {/* 2. MAIN LAYOUT (Sticky Sidebar + Content Column)         */}
      {/* ======================================================== */}
      <div id="top" className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-[230px_1fr] lg:grid-cols-[260px_1fr] gap-8 lg:gap-12 items-start">
          
          {/* ==================================================== */}
          {/* LEFT COLUMN: STICKY SIDEBAR                          */}
          {/* ==================================================== */}
          <aside className="md:sticky md:top-20">
            <div className="bg-white dark:bg-[#1e2227]">
              {/* Profile Avatar */}
              <div className="author__avatar">
                <div className="w-32 h-32 lg:w-36 lg:h-36 rounded-full border border-[#cecfd1] dark:border-[#333842] shadow-sm overflow-hidden relative mx-auto md:mx-0 bg-white dark:bg-[#282c34] flex items-center justify-center isolate [clip-path:circle(50%_at_50%_50%)]">
                  {!imgError ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src="/profile.jpg"
                      alt={NAME}
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover rounded-full scale-[1.04]"
                    />
                  ) : null}
                  {imgError && (
                    <span className="text-3xl lg:text-4xl font-bold text-[#495057] dark:text-[#cbd5e1] select-none">
                      AK
                    </span>
                  )}
                </div>
              </div>

              {/* Author Info */}
              <div className="author__content mt-3 text-center md:text-left">
                <h3 className="text-xl lg:text-2xl font-bold text-[#222831] dark:text-white leading-tight">
                  {NAME}
                </h3>
                <p className="text-xs font-semibold text-[#0083b6] dark:text-[#38bdf8] uppercase tracking-wider mt-1">
                  Backend Engineer
                </p>
                <p className="text-xs text-[#555b62] dark:text-[#94a3b8] mt-1">
                  B.Tech (CSE), IKGPTU Jalandhar
                </p>
                <p className="text-xs font-mono text-[#717a83] dark:text-[#8892b0] mt-0.5">
                  CGPA: {CGPA}
                </p>
              </div>

              {/* Action Buttons: Resume & Contact */}
              <div className="mt-4 space-y-2">
                <a
                  href={RESUME_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-1.5 px-3 rounded border border-[#0083b6] bg-[#0083b6] hover:bg-[#006e99] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-colors"
                >
                  {Icons.download}
                  <span>Download CV (PDF)</span>
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="block w-full py-1.5 px-3 rounded border border-[#cecfd1] dark:border-[#333842] bg-white dark:bg-[#282c34] text-xs font-bold uppercase tracking-wider text-[#393e46] dark:text-[#e2e8f0] text-center hover:bg-[#f6f8fa] dark:hover:bg-[#323842] shadow-sm transition-colors"
                >
                  Contact Me
                </a>
              </div>

              {/* Social / Contact Links */}
              <ul className="mt-4 space-y-2 text-sm text-[#393e46] dark:text-[#cbd5e1]">
                <li className="flex items-center gap-2.5">
                  {Icons.mapPin}
                  <span>{LOCATION}</span>
                </li>

                <li>
                  <a
                    href={`tel:${PHONE.replace(/\s+/g, "")}`}
                    className="flex items-center gap-2.5 text-[#393e46] dark:text-[#cbd5e1] hover:text-[#0083b6] dark:hover:text-[#38bdf8] hover:underline"
                  >
                    {Icons.phone}
                    <span>{PHONE}</span>
                  </a>
                </li>

                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-2.5 text-[#393e46] dark:text-[#cbd5e1] hover:text-[#0083b6] dark:hover:text-[#38bdf8] hover:underline"
                  >
                    {Icons.mail}
                    <span>{EMAIL}</span>
                  </a>
                </li>

                <li>
                  <a
                    href={LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-[#393e46] dark:text-[#cbd5e1] hover:text-[#0083b6] dark:hover:text-[#38bdf8] hover:underline"
                  >
                    {Icons.linkedin}
                    <span>LinkedIn</span>
                  </a>
                </li>

                <li>
                  <a
                    href={GITHUB}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-[#393e46] dark:text-[#cbd5e1] hover:text-[#0083b6] dark:hover:text-[#38bdf8] hover:underline"
                  >
                    {Icons.github}
                    <span>GitHub</span>
                  </a>
                </li>

                <li>
                  <a
                    href={LEETCODE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-[#393e46] dark:text-[#cbd5e1] hover:text-[#0083b6] dark:hover:text-[#38bdf8] hover:underline"
                  >
                    {Icons.code}
                    <span>LeetCode</span>
                  </a>
                </li>

                <li>
                  <a
                    href={PORTFOLIO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-[#393e46] dark:text-[#cbd5e1] hover:text-[#0083b6] dark:hover:text-[#38bdf8] hover:underline"
                  >
                    {Icons.globe}
                    <span>Portfolio</span>
                  </a>
                </li>

                <li>
                  <a
                    href={RESUME_PDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-[#0083b6] dark:text-[#38bdf8] font-semibold hover:underline"
                  >
                    {Icons.fileText}
                    <span>View Resume (PDF)</span>
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          {/* ==================================================== */}
          {/* RIGHT COLUMN: MAIN CONTENT (Academic Layout)         */}
          {/* ==================================================== */}
          <main className="min-w-0">
            {/* 1. ABOUT ME */}
            <section id="about" className="scroll-mt-20">
              <h2 className="text-xl md:text-2xl font-bold text-[#222831] dark:text-white pb-1.5 border-b border-[#cecfd1] dark:border-[#333842]">
                <a href="#about" className="header-link">
                  About Me
                </a>
              </h2>

              <div className="mt-4 space-y-3.5 text-[15.5px] leading-relaxed text-[#222831] dark:text-[#e2e8f0] text-academic-justify">
                <p>
                  I am a final-year undergraduate pursuing a <strong>B.Tech in Computer Science and Engineering</strong> at{" "}
                  <a
                    href="https://ptu.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#0083b6] dark:text-[#38bdf8] hover:underline"
                  >
                    IK Gujral Punjab Technical University
                  </a>
                  , Jalandhar (<strong>CGPA: 8.52/10</strong>, Aug 2023 – May 2027). I specialize in software engineering with a primary emphasis on backend architecture, high-throughput REST APIs, distributed caching, and database normalization.
                </p>

                <p>
                  During the summer of 2026, I served as a Summer Intern at the{" "}
                  <a
                    href="https://www.iitrpr.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#0083b6] dark:text-[#38bdf8] hover:underline"
                  >
                    Indian Institute of Technology (IIT Ropar), VLED Lab
                  </a>
                  , where I resolved a platform-wide HTTP 500 middleware failure and built full-stack services including <em>PippaQ</em> (semantic Q&A with RAG duplicate detection) and <em>Spandan v0.8.0</em> (real-time WebSocket polling with Whisper transcription).
                </p>

                <p>
                  I actively contribute to open-source systems such as{" "}
                  <a
                    href="https://github.com/Arch-Scope/ArchScope-public/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#0083b6] dark:text-[#38bdf8] hover:underline"
                  >
                    ArchScope
                  </a>
                  , implementing realistic time-complexity latency modeling and API response caching.
                </p>

                {/* Resume Download Callout Banner */}
                <div className="mt-4 p-3.5 rounded bg-[#f6f8fa] dark:bg-[#282c34] border border-[#cecfd1] dark:border-[#333842] flex flex-wrap items-center justify-between gap-3 text-sm">
                  <div>
                    <span className="font-bold text-[#222831] dark:text-white">Looking for my full resume?</span>
                    <span className="text-[#555b62] dark:text-[#94a3b8] block text-xs mt-0.5">
                      Download the one-page PDF version with verified credentials and links.
                    </span>
                  </div>
                  <a
                    href={RESUME_PDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#0083b6] hover:bg-[#006e99] text-white font-semibold text-xs transition-colors"
                  >
                    {Icons.download}
                    <span>Download Resume (PDF)</span>
                  </a>
                </div>
              </div>
            </section>

            {/* 2. PROFESSIONAL EXPERIENCE */}
            <section id="experience" className="mt-10 scroll-mt-20">
              <h2 className="text-xl md:text-2xl font-bold text-[#222831] dark:text-white pb-1.5 border-b border-[#cecfd1] dark:border-[#333842]">
                <a href="#experience" className="header-link">
                  Professional Experience
                </a>
              </h2>

              <div className="mt-5 space-y-7">
                {professionalExperience.map((exp) => (
                  <div key={exp.organization} className="text-[15.5px]">
                    <div className="flex flex-wrap items-baseline justify-between gap-1">
                      <h3 className="font-bold text-[#222831] dark:text-white text-[16.5px]">
                        {exp.organization} <span className="font-normal text-[#555b62] dark:text-[#94a3b8]">| {exp.role}</span>
                      </h3>
                      <span className="text-xs font-mono text-[#717a83] dark:text-[#8892b0] bg-gray-100 dark:bg-[#282c34] px-2 py-0.5 rounded">
                        {exp.date}
                      </span>
                    </div>

                    <div className="text-xs text-[#555b62] dark:text-[#94a3b8] italic mt-0.5">
                      {exp.focus} · {exp.location}
                    </div>

                    <ul className="mt-2.5 list-disc pl-5 space-y-2 text-academic-justify text-[#222831] dark:text-[#cbd5e1] leading-relaxed">
                      {exp.points.map((pt, i) => (
                        <li key={i}>
                          {pt.text}{" "}
                          {pt.badge && (
                            <span className="font-medium whitespace-nowrap">
                              [<a href={pt.badgeHref} target="_blank" rel="noopener noreferrer" className="text-[#0083b6] dark:text-[#38bdf8] hover:underline">{pt.badge}</a>]
                            </span>
                          )}
                          {pt.links && (
                            <span className="font-medium whitespace-nowrap">
                              [{pt.links.map((link, lIdx) => (
                                <span key={link.label}>
                                  {lIdx > 0 && " | "}
                                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-[#0083b6] dark:text-[#38bdf8] hover:underline">
                                    {link.label}
                                  </a>
                                </span>
                              ))}]
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. OPEN SOURCE CONTRIBUTION */}
            <section id="opensource" className="mt-10 scroll-mt-20">
              <h2 className="text-xl md:text-2xl font-bold text-[#222831] dark:text-white pb-1.5 border-b border-[#cecfd1] dark:border-[#333842]">
                <a href="#opensource" className="header-link">
                  Open Source Contribution
                </a>
              </h2>

              <div className="mt-4 space-y-4">
                {openSourceContributions.map((contrib) => (
                  <div key={contrib.project} className="text-[15.5px]">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-[#222831] dark:text-white text-[16px]">
                        {contrib.project}
                      </h3>
                      <span className="font-medium text-sm">
                        [<a href={contrib.github} target="_blank" rel="noopener noreferrer" className="text-[#0083b6] dark:text-[#38bdf8] hover:underline">GitHub</a>]
                      </span>
                    </div>

                    <ul className="mt-2 list-disc pl-5 space-y-2 text-academic-justify text-[#222831] dark:text-[#cbd5e1] leading-relaxed">
                      {contrib.points.map((pt, i) => (
                        <li key={i}>
                          {pt.text}{" "}
                          {pt.badge && (
                            <span className="font-medium whitespace-nowrap">
                              [<a href={pt.badgeHref} target="_blank" rel="noopener noreferrer" className="text-[#0083b6] dark:text-[#38bdf8] hover:underline">{pt.badge}</a>]
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. PROJECTS */}
            <section id="projects" className="mt-10 scroll-mt-20">
              <h2 className="text-xl md:text-2xl font-bold text-[#222831] dark:text-white pb-1.5 border-b border-[#cecfd1] dark:border-[#333842]">
                <a href="#projects" className="header-link">
                  Projects
                </a>
              </h2>

              <div className="mt-5 space-y-6">
                {projects.map((proj) => (
                  <article key={proj.title} className="text-[15.5px]">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3 className="font-bold text-[#222831] dark:text-white text-[16px]">
                        {proj.title} <span className="font-normal text-[#555b62] dark:text-[#94a3b8]">| {proj.subtitle}</span>
                      </h3>
                      {(proj.live || proj.github) && (
                        <span className="text-sm font-medium">
                          [
                          {proj.live && (
                            <a href={proj.live} target="_blank" rel="noopener noreferrer" className="text-[#0083b6] dark:text-[#38bdf8] hover:underline">
                              Live
                            </a>
                          )}
                          {proj.live && proj.github && " | "}
                          {proj.github && (
                            <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-[#0083b6] dark:text-[#38bdf8] hover:underline">
                              GitHub
                            </a>
                          )}
                          ]
                        </span>
                      )}
                    </div>

                    <ul className="mt-2 list-disc pl-5 space-y-1.5 text-academic-justify text-[#222831] dark:text-[#cbd5e1] leading-relaxed">
                      {proj.points.map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            {/* 5. TECHNICAL SKILLS */}
            <section id="skills" className="mt-10 scroll-mt-20">
              <h2 className="text-xl md:text-2xl font-bold text-[#222831] dark:text-white pb-1.5 border-b border-[#cecfd1] dark:border-[#333842]">
                <a href="#skills" className="header-link">
                  Technical Skills
                </a>
              </h2>

              <ul className="mt-4 list-disc pl-5 space-y-2.5 text-[15.5px] text-[#222831] dark:text-[#cbd5e1]">
                {technicalSkills.map((s) => (
                  <li key={s.category}>
                    <strong className="text-[#222831] dark:text-white">{s.category}:</strong> {s.items}
                  </li>
                ))}
              </ul>
            </section>

            {/* 6. MISCELLANEOUS (Requested Target Section) */}
            <section id="miscellaneous" className="mt-10 scroll-mt-20">
              <h2 className="text-xl md:text-2xl font-bold text-[#222831] dark:text-white pb-1.5 border-b border-[#cecfd1] dark:border-[#333842]">
                <a href="#miscellaneous" className="header-link">
                  Miscellaneous
                </a>
              </h2>

              {/* Subsection: Education & Relevant Coursework */}
              <div className="mt-4">
                <h3 id="education" className="text-[17px] font-bold text-[#222831] dark:text-white mb-2">
                  Education & Academic Coursework
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-[15.5px] text-academic-justify text-[#222831] dark:text-[#cbd5e1]">
                  <li>
                    <strong>IK Gujral Punjab Technical University</strong> | B.Tech in Computer Science &amp; Engineering | <strong>CGPA: 8.52/10</strong> (Aug 2023 – May 2027)
                  </li>
                  <li>
                    <strong>Relevant Coursework:</strong> {coursework.join(", ")}.
                  </li>
                </ul>
              </div>

              {/* Subsection: Achievements & Honors */}
              <div className="mt-6">
                <h3 id="achievements" className="text-[17px] font-bold text-[#222831] dark:text-white mb-2">
                  Honors & Achievements
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-[15.5px] text-academic-justify text-[#222831] dark:text-[#cbd5e1]">
                  {achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>

              {/* Subsection: Contact & Opportunities */}
              <div className="mt-6">
                <h3 id="contact" className="text-[17px] font-bold text-[#222831] dark:text-white mb-2">
                  Contact & Opportunities
                </h3>
                <p className="text-[15.5px] text-academic-justify text-[#222831] dark:text-[#cbd5e1]">
                  Looking for backend software engineering and full-stack opportunities. Feel free to contact me at{" "}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="font-medium text-[#0083b6] dark:text-[#38bdf8] hover:underline"
                  >
                    {EMAIL}
                  </a>{" "}
                  or phone at{" "}
                  <a
                    href={`tel:${PHONE.replace(/\s+/g, "")}`}
                    className="font-medium text-[#0083b6] dark:text-[#38bdf8] hover:underline"
                  >
                    {PHONE}
                  </a>
                  .
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. FOOTER (Minimal Mistakes blue footer band)            */}
      {/* ======================================================== */}
      <footer className="mt-20 bg-[#0092ca] dark:bg-[#0f172a] text-white py-8 border-t border-transparent dark:border-[#333842]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          {/* Social Icons Row */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-4">
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80 flex items-center gap-1.5 transition-opacity"
            >
              <span className="w-4 h-4 inline-block">{Icons.github}</span>
              <span className="font-medium">GitHub</span>
            </a>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80 flex items-center gap-1.5 transition-opacity"
            >
              <span className="w-4 h-4 inline-block">{Icons.linkedin}</span>
              <span className="font-medium">LinkedIn</span>
            </a>

            <a
              href={LEETCODE}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80 flex items-center gap-1.5 transition-opacity"
            >
              <span className="w-4 h-4 inline-block">{Icons.code}</span>
              <span className="font-medium">LeetCode</span>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="text-white hover:opacity-80 flex items-center gap-1.5 transition-opacity"
            >
              <span className="w-4 h-4 inline-block">{Icons.mail}</span>
              <span className="font-medium">Email</span>
            </a>

            <a
              href={RESUME_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80 flex items-center gap-1.5 transition-opacity"
            >
              <span className="w-4 h-4 inline-block">{Icons.fileText}</span>
              <span className="font-medium">Resume (PDF)</span>
            </a>
          </div>

          {/* Copyright line */}
          <div className="text-xs text-white/90">
            &copy; {new Date().getFullYear()} {NAME}. Powered by{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline hover:opacity-80"
            >
              Next.js
            </a>{" "}
            &amp;{" "}
            <a
              href="https://mademistakes.com/work/minimal-mistakes-jekyll-theme/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline hover:opacity-80"
            >
              Minimal Mistakes
            </a>{" "}
            academic style.
          </div>
        </div>
      </footer>
    </div>
  );
}
