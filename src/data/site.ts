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
      "I build intelligent systems that detect fraud, scale data pipelines, and leverage GenAI to solve real-world problems.",
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
    { label: "GitHub", href: "https://github.com/habubakar89", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/whyser/",
      icon: "linkedin",
    },
    { label: "Email", href: "mailto:habubakar89@gmail.com", icon: "email" },
  ],

  about: {
    paragraphs: [
      "I'm a software engineer at Morgan Stanley building real-time fraud detection systems and scalable data platforms. My work spans GenAI applications, behavioral analytics, and high-throughput streaming architectures.",
      "I specialize in RAG systems, LLM evaluation, and agent orchestration — with a focus on reliability, guardrails, and production-grade AI. I'm AWS Certified in Machine Learning and have published peer-reviewed research in NLP and text mining.",
      "Previously, I've built gesture recognition frameworks, distributed voting systems, and ML-driven content platforms. I hold an M.S. in Computer Science from University at Buffalo and a B.Tech from Nirma University.",
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
    archiveHref: "https://github.com/habubakar89",
    items: [
      {
        id: "proj-1",
        name: "Citation-Grounded Knowledge Platform",
        href: "https://github.com/habubakar89",
        description:
          "A citation-first Q&A system using multi-stage retrieval and reranking with strict answer gating — if there's no source, there's no answer. Deployed on AWS with control/data plane separation for compliance-ready audit trails.",
        tags: ["RAG", "LangGraph", "AWS Bedrock", "Lambda", "Step Functions"],
      },
      {
        id: "proj-2",
        name: "Real-Time Fraud Detection Engine",
        href: "https://www.morganstanley.com",
        description:
          "Patent-pending behavioral analysis system that correlates activity across platforms to identify fraud patterns. Built with Kafka and Apache Flink for low-latency streaming and real-time risk evaluation.",
        tags: ["Kafka", "Apache Flink", "RAG", "Fraud Detection", "Python"],
      },
      {
        id: "proj-3",
        name: "Legacy Code Modernization Pipeline",
        href: "https://www.morganstanley.com",
        description:
          "An automated code translation system using RAG-enhanced LLMs to modernize legacy codebases. Includes validation pipelines with AWS Lambda orchestration and Aurora state tracking.",
        tags: ["LLMs", "RAG", "AWS Lambda", "Aurora", "Automation"],
      },
      {
        id: "proj-4",
        name: "Distributed Voting System",
        href: "https://www.hultprize.org",
        description:
          "A fault-tolerant voting system designed for global competitions, handling real-time user surges during live events with graceful degradation under high concurrency.",
        tags: ["Distributed Systems", "Node.js", "PostgreSQL", "Concurrency"],
      },
    ],
  },

  writing: {
    items: [
      {
        id: "pub-1",
        year: 2022,
        title: "Context-Enriched Machine Learning-Based Approach for Sentiment Analysis",
        href: "https://scholar.google.com/citations?user=YOUR_ID",
        outlet: "Research Publication",
        dateLabel: "Apr 2022",
      },
      {
        id: "pub-2",
        year: 2020,
        title: "Comprehensive Review of Text-Mining Applications in Finance",
        href: "https://scholar.google.com/citations?user=YOUR_ID",
        outlet: "Q1 Journal",
        dateLabel: "Nov 2020",
      },
      {
        id: "pub-3",
        year: 2020,
        title: "Interplay of Machine Learning and Software Engineering for Quality Estimations",
        href: "https://scholar.google.com/citations?user=YOUR_ID",
        outlet: "Research Publication",
        dateLabel: "Nov 2020",
      },
      {
        id: "pub-4",
        year: 2020,
        title: "BioUAV: Blockchain Framework for Digital Identification in Next-Gen UAVs",
        href: "https://scholar.google.com/citations?user=YOUR_ID",
        outlet: "Research Publication",
        dateLabel: "Sep 2020",
      },
      {
        id: "pub-5",
        year: 2020,
        title: "Comparative Study of Sentiment Analysis and Text Summarization for Commercial Social Networks",
        href: "https://scholar.google.com/citations?user=YOUR_ID",
        outlet: "Research Publication",
        dateLabel: "Jul 2020",
      },
    ],
  },

  footer: {
    lines: [],
  },
};
