// /data/site.ts
// Single source of truth for all portfolio content.
// Edit this file to update the site without touching components.

export type Social = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "x" | "instagram" | "email" | "resume";
};

export type Tag = string;

export type ExperienceItem = {
  id: string;
  dateRange: string;
  title: string;
  company: string;
  companyHref: string;
  location?: string;
  summary: string;
  bullets?: string[];
  tags: Tag[];
  links?: { label: string; href: string }[];
};

export type ProjectItem = {
  id: string;
  name: string;
  href: string;
  description: string;
  tags: Tag[];
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  links?: { label: string; href: string }[];
};

export type WritingItem = {
  id: string;
  year: number;
  title: string;
  href: string;
  outlet?: string;
  dateLabel?: string;
  blurb?: string;
};

export type SiteData = {
  meta: {
    siteName: string;
    title: string;
    description: string;
    ogImage?: string;
    url?: string;
  };

  hero: {
    name: string;
    role: string;
    tagline: string;
  };

  about: {
    paragraphs: string[];
  };

  nav: {
    items: {
      label: "About" | "Experience" | "Projects" | "Writing";
      href: "#about" | "#experience" | "#projects" | "#writing";
    }[];
  };

  social: Social[];

  experience: {
    resumeHref: string;
    items: ExperienceItem[];
  };

  projects: {
    archiveHref: string;
    items: ProjectItem[];
  };

  writing: {
    items: WritingItem[];
  };

  footer: {
    lines: string[];
  };
};

// ------------------------
// SAMPLE DATA (placeholders)
// ------------------------

export const siteData: SiteData = {
  meta: {
    siteName: "Hamza Abubakar",
    title: "Hamza Abubakar - Software Engineer",
    description:
      "Portfolio of Hamza Abubakar - building reliable, elegant products with a focus on UX, performance, and accessibility.",
    ogImage: "/og.png",
    url: "https://www.hamzaabubakar.com",
  },

  hero: {
    name: "Hamza Abubakar",
    role: "Software Engineer",
    tagline:
      "I build accessible, performance-minded products and the systems behind them.",
  },

  nav: {
    items: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Writing", href: "#writing" },
    ],
  },

  social: [
    { label: "GitHub", href: "https://github.com/yourhandle", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourhandle",
      icon: "linkedin",
    },
    { label: "X", href: "https://x.com/yourhandle", icon: "x" },
    { label: "Email", href: "mailto:you@domain.com", icon: "email" },
  ],

  about: {
    paragraphs: [
      "I'm a software engineer focused on building high-quality web experiences — clean interfaces, crisp interactions, and systems that remain stable under real-world constraints.",
      "I care about details that compound: typography, motion restraint, accessibility, and performance. I like designs that feel calm and intentional, with just enough delight.",
      "Recently I've worked across frontend architecture, platform reliability, and developer experience, partnering with cross-functional teams to ship and iterate quickly.",
    ],
  },

  experience: {
    resumeHref: "/resume.pdf",
    items: [
      {
        id: "exp-1",
        dateRange: "2023 — Present",
        title: "Senior Software Engineer",
        company: "Company One",
        companyHref: "https://example.com",
        location: "Atlanta, GA",
        summary:
          "Own core product surfaces end-to-end, improving performance, accessibility, and reliability while partnering closely with design and product.",
        bullets: [
          "Led a redesign that improved task completion and reduced UI regressions through tighter component boundaries.",
          "Built a metrics and alerting baseline to reduce incident detection time and improve rollout confidence.",
        ],
        tags: [
          "TypeScript",
          "React",
          "Next.js",
          "Tailwind",
          "Node.js",
          "PostgreSQL",
        ],
        links: [{ label: "Team", href: "https://example.com/team" }],
      },
      {
        id: "exp-2",
        dateRange: "2021 — 2023",
        title: "Software Engineer",
        company: "Company Two",
        companyHref: "https://example.com",
        summary:
          "Built user-facing features and internal tools; contributed to design systems and performance initiatives across multiple apps.",
        tags: ["React", "GraphQL", "Jest", "Cypress", "Design Systems"],
      },
      {
        id: "exp-3",
        dateRange: "2019 — 2021",
        title: "Frontend Engineer",
        company: "Company Three",
        companyHref: "https://example.com",
        summary:
          "Shipped responsive UI with strong accessibility fundamentals and a focus on component reuse and maintainable styling.",
        tags: ["JavaScript", "Sass", "Accessibility", "Webpack"],
      },
      {
        id: "exp-4",
        dateRange: "2018 — 2019",
        title: "Engineering Intern",
        company: "Company Four",
        companyHref: "https://example.com",
        summary:
          "Contributed to production features, improved build tooling, and collaborated with mentors on code quality standards.",
        tags: ["JavaScript", "CI/CD", "Testing"],
      },
      {
        id: "exp-5",
        dateRange: "2016 — 2018",
        title: "Freelance Developer",
        company: "Independent",
        companyHref: "https://example.com",
        summary:
          "Designed and built small business sites and web apps with an emphasis on clarity, responsiveness, and maintainability.",
        tags: ["HTML", "CSS", "JavaScript"],
      },
    ],
  },

  projects: {
    archiveHref: "/projects",
    items: [
      {
        id: "proj-1",
        name: "Project Alpha",
        href: "https://example.com",
        description:
          "A polished web app that demonstrates careful typography, smooth interactions, and a data-first architecture.",
        tags: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
        image: {
          src: "/images/projects/project-alpha.png",
          alt: "Screenshot of Project Alpha",
          width: 1200,
          height: 630,
        },
        links: [
          { label: "Live", href: "https://example.com" },
          { label: "GitHub", href: "https://github.com/yourhandle/project-alpha" },
        ],
      },
      {
        id: "proj-2",
        name: "Project Beta",
        href: "https://example.com",
        description:
          "A small tool focused on developer productivity with a clean interface and robust error handling.",
        tags: ["React", "Vite", "Zod", "Testing"],
        links: [
          { label: "GitHub", href: "https://github.com/yourhandle/project-beta" },
        ],
      },
      {
        id: "proj-3",
        name: "Project Gamma",
        href: "https://example.com",
        description:
          "An experimental UI concept exploring subtle motion and accessibility-first interaction patterns.",
        tags: ["Framer Motion", "Accessibility", "UI Engineering"],
      },
      {
        id: "proj-4",
        name: "Project Delta",
        href: "https://example.com",
        description:
          "A case-study style build that emphasizes information hierarchy and crisp content presentation.",
        tags: ["Design Systems", "CSS", "Content"],
      },
    ],
  },

  writing: {
    items: [
      {
        id: "w-2025-1",
        year: 2025,
        title: "Designing Interfaces That Feel Effortless",
        href: "https://example.com/writing/effortless-interfaces",
        outlet: "Blog",
        dateLabel: "May 2025",
        blurb: "Practical notes on hierarchy, spacing, and restrained motion.",
      },
      {
        id: "w-2024-1",
        year: 2024,
        title: "A Field Guide to UI Polish",
        href: "https://example.com/writing/ui-polish",
        outlet: "Blog",
        dateLabel: "Oct 2024",
        blurb: "Small changes that materially improve perceived quality.",
      },
      {
        id: "w-2024-2",
        year: 2024,
        title: "Performance as a Product Feature",
        href: "https://example.com/writing/performance-feature",
        outlet: "Blog",
        dateLabel: "Feb 2024",
        blurb: "A lightweight approach to measuring and protecting speed.",
      },
      {
        id: "w-2023-1",
        year: 2023,
        title: "Accessible by Default",
        href: "https://example.com/writing/accessible-by-default",
        outlet: "Blog",
        dateLabel: "Jul 2023",
        blurb: "How to bake accessibility into components and workflows.",
      },
    ],
  },

  footer: {
    lines: [
      "Built with Next.js, Tailwind CSS, and deployed on Vercel.",
      "Inspired by clean, content-first layouts and thoughtful interaction design.",
    ],
  },
};
