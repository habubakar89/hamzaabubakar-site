// /data/site.ts
// Single source of truth for all portfolio content.
// Edit this file to update the site without touching components.

export type Social = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "x" | "instagram" | "email" | "resume" | "medium" | "linktree";
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

export type ResearchItem = {
  id: string;
  year: number;
  title: string;
  href: string;
  outlet?: string;
  dateLabel?: string;
  blurb?: string;
};

export type EducationItem = {
  id: string;
  school: string;
  degree: string;
  field: string;
  location: string;
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
      label: "About" | "Experience" | "Projects" | "Research" | "Education";
      href: "#about" | "#experience" | "#projects" | "#research" | "#education";
    }[];
  };

  social: Social[];

  experience: {
    resumeHref: string;
    items: ExperienceItem[];
  };

  projects: {
    items: ProjectItem[];
  };

  research: {
    items: ResearchItem[];
  };

  education: {
    items: EducationItem[];
  };

  footer: {
    lines: string[];
  };
};

// ------------------------
// SITE DATA
// ------------------------

export const siteData: SiteData = {
  meta: {
    siteName: "Hamza Abubakar Kheruwala",
    title: "Hamza Abubakar Kheruwala - Software Engineer",
    description:
      "Software Engineer at Morgan Stanley specializing in GenAI, real-time fraud detection, and scalable data systems. AWS ML Certified researcher.",
    ogImage: "/og.png",
    url: "https://www.hamzaabubakar.com",
  },

  hero: {
    name: "Hamza Abubakar Kheruwala",
    role: "Software Engineer",
    tagline:
      "I build systems that scale—and still behave on a Monday morning.",
  },

  nav: {
    items: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Research", href: "#research" },
      { label: "Education", href: "#education" },
    ],
  },

  social: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/whyser/",
      icon: "linkedin",
    },
    { label: "Medium", href: "https://medium.com/@habubakar89", icon: "medium" },
    { label: "Book a Call", href: "https://linktr.ee/habubakar89", icon: "linktree" },
    { label: "Email", href: "mailto:habubakar89@gmail.com", icon: "email" },
  ],

  about: {
    paragraphs: [
      "I'm Hamza — the kind of person who's happiest with a hard problem, a clean plan, and a strong cup of coffee (or two).",
      "I'm big on consistency: you'll usually find me in the gym, writing something I'll over-edit later, or planning the next trip. I like hikes that make you earn the view and challenges that make you earn the outcome.",
      "I keep things simple: show up, do the work, keep improving. If it ships, scales, and still sleeps at night — that's a good day.",
    ],
  },

  experience: {
    resumeHref: "/resume.pdf",
    items: [
      {
        id: "exp-1",
        dateRange: "Nov 2023 — Present",
        title: "Software Engineer II",
        company: "Morgan Stanley",
        companyHref: "https://www.morganstanley.com",
        summary:
          "Leading development of real-time fraud detection and behavioral analytics systems with patent-pending technology.",
        bullets: [
          "Designed and built a holistic behavior analysis engine that correlates user activity across platforms to identify and contextualize fraudulent patterns in real-time.",
          "Architected streaming pipelines using Kafka and Apache Flink for low-latency risk evaluation and fraud signal processing at scale.",
          "Leveraged RAG systems to surface historical risk signals and behavioral context, enabling faster triage and more accurate fraud classification.",
          "Built a scalable savings platform for high-value client profiling using Terraform-based infrastructure and targeted data orchestration.",
        ],
        tags: [
          "Kafka",
          "Apache Flink",
          "RAG",
          "AWS",
          "Terraform",
          "Python",
          "Fraud Detection",
        ],
      },
      {
        id: "exp-2",
        dateRange: "Feb 2023 — Nov 2023",
        title: "Software Engineer I",
        company: "Morgan Stanley",
        companyHref: "https://www.morganstanley.com",
        summary:
          "Automated legacy code modernization using RAG-enhanced LLMs and built real-time data reporting infrastructure.",
        bullets: [
          "Developed an automated code translation system using RAG-enhanced LLMs to modernize legacy codebases, eliminating manual translation efforts across hundreds of programs.",
          "Engineered validation pipelines with AWS Lambda for orchestration and Aurora for state tracking, dramatically accelerating the modernization workflow.",
          "Delivered real-time data reporting via AWS Kinesis, enabling leadership to make faster, data-driven decisions.",
        ],
        tags: [
          "RAG",
          "LLMs",
          "AWS Lambda",
          "Aurora",
          "Kinesis",
          "Python",
          "TypeScript",
        ],
      },
      {
        id: "exp-3",
        dateRange: "Jul 2021 — Sep 2022",
        title: "Regional Associate & Accelerator Intern",
        company: "Hult Prize Foundation",
        companyHref: "https://www.hultprize.org",
        summary:
          "Built distributed systems powering global social entrepreneurship competitions with tens of thousands of participants.",
        bullets: [
          "Engineered a distributed, fault-tolerant voting system designed to handle real-time user surges during live competition events.",
          "Optimized concurrent request processing and streamlined backend workflows to support smooth operations during peak load periods.",
        ],
        tags: ["Distributed Systems", "Concurrency", "Node.js", "PostgreSQL"],
      },
      {
        id: "exp-4",
        dateRange: "Jan 2021 — May 2021",
        title: "Artificial Intelligence Intern",
        company: "IoTIoT.in",
        companyHref: "https://iotiot.in",
        summary:
          "Built a real-time, device-agnostic gesture recognition framework using ML-driven motion tracking and signal processing.",
        bullets: [
          "Developed advanced motion tracking and signal processing algorithms to improve input reliability across diverse hardware.",
          "Engineered parallelized model training pipelines to reduce latency while maintaining high accuracy for gesture classification.",
        ],
        tags: ["Machine Learning", "Signal Processing", "Python", "TensorFlow"],
      },
      {
        id: "exp-5",
        dateRange: "Jun 2020 — Dec 2020",
        title: "Software Development Intern",
        company: "MediaPro Innovations",
        companyHref: "https://mediapro.in",
        summary:
          "Applied user behavior analysis and ML-driven content filtering to improve engagement on an ed-tech platform.",
        bullets: [
          "Implemented ML-driven content filtering based on user behavior patterns to surface more relevant learning materials.",
          "Improved backend efficiency through strategic caching and database indexing, supporting a growing active user base with fewer defects.",
        ],
        tags: ["Python", "Machine Learning", "Backend", "Caching"],
      },
    ],
  },

  projects: {
    items: [
      {
        id: "proj-1",
        name: "Citation-Grounded Knowledge Platform",
        href: "https://github.com/habubakar89",
        description:
          "Citation-first Q&A with multi-stage retrieval + reranking and strict answer gating—no source, no answer—deployed on AWS with audit-ready traces.",
        tags: ["RAG", "LangGraph", "AWS Bedrock", "Lambda", "Step Functions"],
      },
      {
        id: "proj-2",
        name: "Aarogya — Privacy-Preserving Mental Health Risk Detection",
        href: "https://github.com/habubakar89",
        description:
          "Privacy-preserving NLP pipeline for early depression and suicide-risk signals, combining social indicators and clinical questionnaires with a deployment-ready workflow.",
        tags: ["NLP", "Privacy", "Machine Learning", "AWS", "Python"],
      },
      {
        id: "proj-3",
        name: "Diverting Public Complaints Based on Textual Analysis",
        href: "https://github.com/habubakar89",
        description:
          "Built a text-classification pipeline to route financial/public complaints to the right department using comparative ML experiments and evaluation-driven iteration.",
        tags: ["Python", "Machine Learning", "Text Classification"],
      },
      {
        id: "proj-4",
        name: "Text Summarization Using Sentiment Analysis",
        href: "https://github.com/habubakar89",
        description:
          "Implemented sentiment-driven summarization on customer review data, integrating web-scraped inputs with supervised ML baselines.",
        tags: ["Python", "NLP", "Machine Learning"],
      },
      {
        id: "proj-5",
        name: "Survey Masters Website",
        href: "https://github.com/habubakar89",
        description:
          "Designed and built a full-stack survey platform with authenticated workflows for creating surveys and collecting responses.",
        tags: ["Web", "JavaScript", "CSS", "Backend"],
      },
      {
        id: "proj-6",
        name: "Deep Learning for Satellite Imaging",
        href: "https://github.com/habubakar89",
        description:
          "Produced a deep-learning research report exploring satellite-imaging use cases, modeling approaches, and practical deployment constraints.",
        tags: ["Deep Learning", "Computer Vision", "Research"],
      },
      {
        id: "proj-7",
        name: "Question Paper Generator",
        href: "https://github.com/habubakar89",
        description:
          "Built a web-based application concept for generating structured question papers with configurable templates and sections.",
        tags: ["Web", "Automation", "Product Design"],
      },
    ],
  },

  research: {
    items: [
      {
        id: "pub-1",
        year: 2022,
        title: "Context-Enriched Machine Learning-Based Approach for Sentiment Analysis",
        href: "https://link.springer.com/chapter/10.1007/978-981-16-8892-8_6",
        outlet: "Research Publication",
        dateLabel: "Apr 2022",
      },
      {
        id: "pub-2",
        year: 2020,
        title: "Comprehensive Review of Text-Mining Applications in Finance",
        href: "https://link.springer.com/article/10.1186/s40854-020-00205-1",
        outlet: "Q1 Journal",
        dateLabel: "Nov 2020",
      },
      {
        id: "pub-3",
        year: 2020,
        title: "Interplay of Machine Learning and Software Engineering for Quality Estimations",
        href: "https://ieeexplore.ieee.org/abstract/document/9256507",
        outlet: "Research Publication",
        dateLabel: "Nov 2020",
      },
      {
        id: "pub-4",
        year: 2020,
        title: "BioUAV: Blockchain Framework for Digital Identification in Next-Gen UAVs",
        href: "https://dl.acm.org/doi/abs/10.1145/3414045.3415945",
        outlet: "Research Publication",
        dateLabel: "Sep 2020",
      },
      {
        id: "pub-5",
        year: 2020,
        title: "Comparative Study of Sentiment Analysis and Text Summarization for Commercial Social Networks",
        href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=PK4Q-O4AAAAJ&citation_for_view=PK4Q-O4AAAAJ:u5HHmVD_uO8C",
        outlet: "Research Publication",
        dateLabel: "Jul 2020",
      },
    ],
  },

  education: {
    items: [
      {
        id: "edu-1",
        school: "University at Buffalo, SUNY",
        degree: "M.S.",
        field: "Computer Science",
        location: "Buffalo, NY",
      },
      {
        id: "edu-2",
        school: "Nirma University",
        degree: "B.Tech",
        field: "Computer Engineering",
        location: "Ahmedabad, India",
      },
    ],
  },

  footer: {
    lines: [],
  },
};
