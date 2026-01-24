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
      "Software Engineer at Morgan Stanley specializing in GenAI, real-time fraud detection, and scalable data systems. AWS ML Certified with 270+ research citations.",
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
      "I specialize in RAG systems, LLM evaluation, and agent orchestration — with a focus on reliability, guardrails, and production-grade AI. I'm AWS Certified in Machine Learning and have published research with 270+ citations in NLP and text mining.",
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
          "Building real-time fraud detection and behavioral analytics systems processing 300K+ daily events with patent-pending technology.",
        bullets: [
          "Invented a holistic, real-time behavior analysis engine (patent pending) to identify and contextualize fraud across platforms.",
          "Built Kafka + Apache Flink pipeline with ~200ms latency for scalable risk evaluation and fraud signal processing.",
          "Achieved ~70% fraud reduction in ATO & synthetic identities using RAGs to surface behavioral context & historical risk signals.",
          "Architected scalable savings platform for high-value client profiling with 99.99% uptime, unlocking $500M+ AUM potential.",
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
          "Automated modernization of 50M+ lines of legacy code using RAG-enhanced LLMs with ~95% accuracy across 450+ programs.",
          "Engineered validation pipelines with AWS Lambda & Aurora, cutting validation time by 87% and saving 129 person-years.",
          "Delivered real-time reporting via AWS Kinesis, cutting data latency by 95% and unlocking $10M+ in operational value.",
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
          "Built distributed systems for global competitions supporting 100K+ attendees and 10K+ concurrent users.",
        bullets: [
          "Engineered distributed, fault-tolerant voting system with 99.7% success rate under high concurrency.",
          "Optimized concurrent processing for 10,000+ active users, reducing response latency by 40% during peak load.",
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
          "Built real-time gesture recognition framework with ML-driven motion tracking, saving ~$100K annually.",
        bullets: [
          "Improved input reliability by 45% through advanced motion tracking and signal processing.",
          "Engineered parallelized model training, cutting latency by 35% and achieving 90%+ accuracy.",
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
          "Applied ML-driven content filtering and backend optimization for 50,000+ active users.",
        bullets: [
          "Drove 20% increase in user retention through user behavior analysis and ML-driven content filtering.",
          "Improved backend efficiency through caching and indexing, achieving 25% higher learner engagement.",
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
          "Built a citation-first Q&A system using multi-stage retrieval and reranking with strict answer gating. Achieved >95% citation coverage and ~70% reduction in unsupported claims.",
        tags: ["RAG", "LangGraph", "AWS Bedrock", "Lambda", "Step Functions"],
      },
      {
        id: "proj-2",
        name: "Real-Time Fraud Detection Engine",
        href: "https://www.morganstanley.com",
        description:
          "Patent-pending behavioral analysis system processing 300K+ daily events with ~200ms latency using Kafka and Apache Flink for real-time risk evaluation.",
        tags: ["Kafka", "Apache Flink", "RAG", "Fraud Detection", "Python"],
      },
      {
        id: "proj-3",
        name: "Legacy Code Modernization Pipeline",
        href: "https://www.morganstanley.com",
        description:
          "Automated translation of 50M+ lines of legacy code using RAG-enhanced LLMs with ~95% accuracy, saving 129 person-years of manual effort.",
        tags: ["LLMs", "RAG", "AWS Lambda", "Aurora", "Automation"],
      },
      {
        id: "proj-4",
        name: "Distributed Voting System",
        href: "https://www.hultprize.org",
        description:
          "Fault-tolerant voting system handling real-time surges with 99.7% success rate under high concurrency for global competitions.",
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
        blurb: "2 citations",
      },
      {
        id: "pub-2",
        year: 2020,
        title: "Comprehensive Review of Text-Mining Applications in Finance",
        href: "https://scholar.google.com/citations?user=YOUR_ID",
        outlet: "Q1 Journal (Impact Factor: 2.964)",
        dateLabel: "Nov 2020",
        blurb: "229 citations — Most cited work",
      },
      {
        id: "pub-3",
        year: 2020,
        title: "Interplay of Machine Learning and Software Engineering for Quality Estimations",
        href: "https://scholar.google.com/citations?user=YOUR_ID",
        outlet: "Research Publication (Top 10%)",
        dateLabel: "Nov 2020",
        blurb: "16 citations",
      },
      {
        id: "pub-4",
        year: 2020,
        title: "BioUAV: Blockchain Framework for Digital Identification in Next-Gen UAVs",
        href: "https://scholar.google.com/citations?user=YOUR_ID",
        outlet: "Research Publication",
        dateLabel: "Sep 2020",
        blurb: "26 citations",
      },
      {
        id: "pub-5",
        year: 2020,
        title: "Comparative Study of Sentiment Analysis and Text Summarization for Commercial Social Networks",
        href: "https://scholar.google.com/citations?user=YOUR_ID",
        outlet: "Research Publication",
        dateLabel: "Jul 2020",
        blurb: "3 citations",
      },
    ],
  },

  footer: {
    lines: [],
  },
};
