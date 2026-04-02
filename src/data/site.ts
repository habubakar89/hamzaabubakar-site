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
  bullets?: string[];
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

export type ApproachBlock = {
  id: string;
  title: string;
  paragraph: string;
};

export type StackGroup = {
  id: string;
  label: string;
  tags: Tag[];
};

export type SiteData = {
  meta: {
    siteName: string;
    title: string;
    description: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    url?: string;
  };

  hero: {
    name: string;
    role: string;
    tagline: string;
    subTagline?: string;
  };

  about: {
    paragraphs: string[];
  };

  nav: {
    items: {
      label: string;
      href: string;
    }[];
  };

  social: Social[];

  approach: {
    blocks: ApproachBlock[];
  };

  experience: {
    resumeHref: string;
    items: ExperienceItem[];
  };

  projects: {
    items: ProjectItem[];
  };

  stack: {
    groups: StackGroup[];
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
    title: "Hamza Abubakar Kheruwala — AI Systems Engineer",
    description:
      "AI Systems Engineer specializing in production LLM agent systems, evaluation infrastructure, and backend systems at scale. Building at Morgan Stanley with LangGraph, LangChain, Python, and AWS.",
    ogTitle: "Hamza Abubakar Kheruwala — AI Systems Engineer",
    ogDescription:
      "Production AI engineer. LangGraph agent systems, LLM evaluation infrastructure, and backend systems that hold up under real production conditions.",
    ogImage: "/og.png",
    url: "https://www.hamzaabubakar.com",
  },

  hero: {
    name: "Hamza Abubakar Kheruwala",
    role: "AI Systems Engineer",
    tagline:
      "I architect production AI systems that hold up under the conditions real users create — not just in the test harness.",
    subTagline:
      "What I learn in production becomes the pattern the next team builds on.",
  },

  nav: {
    items: [
      { label: "About", href: "#about" },
      { label: "Approach", href: "#approach" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Stack", href: "#stack" },
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
      "I'm an AI systems engineer at Morgan Stanley, owning the architecture of production LLM agent systems in a regulated environment. The core constraint: a confident wrong answer is worse than no answer. Every technical decision flows from that.",
      "Most of what I know came from things that failed instructively. I shipped a model that beat every benchmark and degraded for real users. Diagnosing that — and rebuilding the evaluation framework around it — changed how I think about what it means for a system to actually be good. That framework became the org-wide standard.",
      "I care most about systems that outlast the original deployment — documented clearly enough that teams I've never worked with can build on them. Three of the AI systems I've built are being used that way now.",
    ],
  },

  approach: {
    blocks: [
      {
        id: "approach-1",
        title: "Evaluation is an architecture problem, not a QA step.",
        paragraph:
          "I decide what to measure before writing a line of code. A benchmark that doesn't correlate with real user outcomes isn't a safety net — it's a false one.",
      },
      {
        id: "approach-2",
        title: "Confident wrong answers are worse than no answer.",
        paragraph:
          "In regulated environments, routing to a human beats returning a low-confidence response. I've built confidence-gated routing as a deliberate first-class decision, calibrated against production data — not bolted on as a fallback.",
      },
      {
        id: "approach-3",
        title: "Backend reliability is what makes AI systems trustworthy.",
        paragraph:
          "The LLM is usually the easiest part to swap. What determines whether users can actually rely on the system is everything around it — pipelines, observability, retrieval, output enforcement.",
      },
      {
        id: "approach-4",
        title: "Every system should outlast the original deployment.",
        paragraph:
          "I document failure modes after every production build — not just the architecture, but the specific places where the design breaks. That's what makes a system reusable rather than a one-off.",
      },
    ],
  },

  experience: {
    resumeHref: "/resume.pdf",
    items: [
      {
        id: "exp-1",
        dateRange: "Nov 2023 — Present",
        title: "Senior Software Engineer II — AI Systems & Infrastructure",
        company: "Morgan Stanley",
        companyHref: "https://www.morganstanley.com",
        summary:
          "Technical owner of production LLM agent systems in a regulated financial environment — orchestration architecture, evaluation infrastructure, and the patterns other teams build on.",
        bullets: [
          "Designed a multi-step agent with confidence-gated routing: uncertain outputs route to a human analyst rather than returning a low-confidence answer. Zero compliance incidents.",
          "Rebuilt the org's LLM evaluation framework after shipping a model that beat every benchmark and degraded for real users. Rebuilt scoring around production outcome signals — now the standard for every model release.",
          "The RAG architecture I built has been adopted as the baseline by three downstream teams, packaged with failure modes so they didn't have to start from scratch.",
          "Co-architect with enterprise engineering teams when delivery is broken. The structural fix from one recovery was institutionalized across all enterprise accounts.",
        ],
        tags: [
          "LangGraph",
          "Python",
          "AWS Bedrock",
          "Kafka",
          "Terraform",
        ],
      },
      {
        id: "exp-2",
        dateRange: "Feb 2023 — Nov 2023",
        title: "Software Engineer I — AI Systems & Automation",
        company: "Morgan Stanley",
        companyHref: "https://www.morganstanley.com",
        summary:
          "Shipped the org's earliest production LLM deployments. Built the foundational infrastructure — pipelines, evaluation tooling, human feedback systems — that became the reference for teams that followed.",
        bullets: [
          "Led one of the org's first production LLM deployments: a RAG-enhanced pipeline for legacy code modernization with validation infrastructure built from scratch.",
          "Built a human feedback pipeline from zero prior background in six weeks — preference schema, reward modeling, PPO integration. Adopted by multiple downstream teams; wrote the onboarding doc that became the standard reference.",
          "Cut a three-week model selection process to three days by identifying the one decision variable that mattered and designing a targeted experiment around it.",
        ],
        tags: [
          "LangChain",
          "Python",
          "AWS Lambda",
          "RLHF",
          "RAG",
        ],
      },
      {
        id: "exp-3",
        dateRange: "Jul 2021 — Sep 2022",
        title: "Regional Associate · Accelerator Intern",
        company: "Hult Prize Foundation",
        companyHref: "https://www.hultprize.org",
        summary:
          "Backend infrastructure for a global competition platform — distributed systems under real surge conditions.",
        bullets: [
          "Engineered a fault-tolerant distributed event system for real-time load surges. The gap between load testing and what users actually create at peak is a lesson I've carried into every production system since.",
        ],
        tags: ["Node.js", "PostgreSQL", "Distributed Systems"],
      },
      {
        id: "exp-4",
        dateRange: "Jan 2021 — May 2021",
        title: "AI Engineering Intern",
        company: "IoTIoT.in",
        companyHref: "https://iotiot.in",
        summary:
          "Built a real-time, device-agnostic gesture recognition framework using ML-driven motion tracking.",
        bullets: [
          "Developed motion tracking algorithms to improve input reliability across diverse hardware.",
          "Built parallelized training pipelines to reduce latency without sacrificing classification accuracy.",
        ],
        tags: ["Python", "TensorFlow", "Signal Processing"],
      },
      {
        id: "exp-5",
        dateRange: "Jun 2020 — Dec 2020",
        title: "Backend & ML Intern",
        company: "MediaPro Innovations",
        companyHref: "https://mediapro.in",
        summary:
          "Applied ML-driven content filtering and behavior analysis to improve engagement on an ed-tech platform.",
        bullets: [
          "Built content filtering on user behavior patterns to surface more relevant learning materials.",
          "Improved backend efficiency through caching and indexing, supporting a growing user base.",
        ],
        tags: ["Python", "Machine Learning", "Backend"],
      },
    ],
  },

  projects: {
    items: [
      {
        id: "proj-1",
        name: "Citation-Grounded Knowledge Agent",
        href: "https://github.com/habubakar89",
        description:
          "A multi-step AI agent built around one constraint: every answer must trace back to source — enforced at the generation layer, not bolted on after.",
        bullets: [
          "Confidence-gated abstention: if retrieval isn't confident enough to support a grounded answer, the system returns nothing rather than extrapolating.",
          "Multi-model tiering routes each query to the cheapest model that clears the quality bar — inference cost as a first-class concern from day one.",
        ],
        tags: [
          "LangGraph",
          "AWS Bedrock",
          "pgvector",
          "LangSmith",
          "Python",
        ],
      },
      {
        id: "proj-new",
        name: "LLM Evaluation Framework — Production Rebuild",
        href: "#",
        description:
          "A model can improve on every tracked metric, ship to users, and be worse. This is what I built after that happened — a rebuild of how evaluation actually works.",
        bullets: [
          "Pulled production outcome signals and ran correlation analysis against every benchmark task. Rebuilt scoring around what actually predicted user outcomes, with a mandatory human judgment gate at each release.",
          "Adopted org-wide — not because it was mandated, but because every team building LLM features eventually hits the same benchmark-vs-production divergence. The framework solved it once.",
        ],
        tags: [
          "Python",
          "LLM Evaluation",
          "Statistical Analysis",
        ],
      },
      {
        id: "proj-2",
        name: "Aarogya — Privacy-Preserving Mental Health Risk Detection",
        href: "https://github.com/habubakar89",
        description:
          "An NLP pipeline for early detection of depression and suicide-risk signals — privacy as an architectural constraint, not a compliance checkbox. The hardest problem was defining what a detection system that respects user dignity looks like at the architecture level.",
        tags: ["Python", "NLP", "Privacy-Preserving ML", "AWS"],
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

  stack: {
    groups: [
      {
        id: "stack-ai",
        label: "AI & Agent Systems",
        tags: [
          "LangGraph",
          "LangChain",
          "AWS Bedrock",
          "RAG Pipeline Design",
          "LLM Evaluation & Outcome-Aligned Scoring",
          "RLHF & Preference Data",
          "Confidence Routing & Abstention",
          "Structured Output Enforcement",
          "Embedding Model Evaluation",
          "LangSmith",
          "Multi-Step Agent Orchestration",
        ],
      },
      {
        id: "stack-backend",
        label: "Backend & Infrastructure",
        tags: [
          "Python",
          "TypeScript",
          "Node.js",
          "Java",
          "SQL",
          "REST APIs",
          "GraphQL",
          "AWS Lambda",
          "Step Functions",
          "API Gateway",
          "Kinesis",
          "DynamoDB",
          "S3",
          "Aurora",
          "Apache Kafka",
          "Apache Flink",
          "Terraform",
          "Docker",
          "GitHub Actions CI/CD",
          "PostgreSQL",
          "pgvector",
          "Pinecone",
          "Redis",
          "MongoDB",
        ],
      },
      {
        id: "stack-certs",
        label: "Certifications",
        tags: ["AWS Certified Machine Learning Specialty"],
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
