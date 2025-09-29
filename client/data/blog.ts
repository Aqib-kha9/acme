export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Industry Insights" | "Safety Tips" | "Case Studies";
  author: string;
  date: string;
  cover: string;
  ogImage?: string;
  ogDescription?: string;
  content: { type: "p" | "h2" | "ul"; value: string | string[] }[];
};

export const posts: BlogPost[] = [
  {
    slug: "choose-right-security-provider",
    title: "How to Choose the Right Security Provider for Your Office",
    excerpt:
      "Choosing the right security partner is about trust, reliability, and compliance. Ask these questions and verify training standards.",
    category: "Industry Insights",
    author: "ACME Editorial Team",
    date: "2025-01-10",
    cover:
      "https://images.pexels.com/photos/433502/pexels-photo-433502.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ogImage:
      "https://images.pexels.com/photos/433502/pexels-photo-433502.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ogDescription:
      "Trusted checklist to evaluate security vendors: certifications, vetting, and escalation protocols.",
    content: [
      { type: "p", value: "Selecting a security vendor impacts safety, compliance, and employee confidence." },
      { type: "h2", value: "Key questions" },
      {
        type: "ul",
        value: [
          "What certifications and compliance standards do you meet?",
          "How are guards vetted and trained?",
          "What is your incident escalation protocol?",
          "Can you share references and case studies?",
        ],
      },
      { type: "p", value: "Evaluate SLAs, reporting cadence, and technology integrations." },
    ],
  },
  {
    slug: "night-patrol-best-practices",
    title: "Night Patrol Best Practices",
    excerpt:
      "From route planning to escalation, get a framework for effective patrols and after-hours coverage.",
    category: "Safety Tips",
    author: "Rahul Mehta",
    date: "2025-01-05",
    cover:
      "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: [
      { type: "p", value: "Night patrols deter incidents and ensure premises integrity." },
      { type: "h2", value: "Checklist" },
      { type: "ul", value: ["Define patrol routes", "Randomize timing", "Log incidents with media", "Escalate per SOP"] },
    ],
  },
  {
    slug: "office-complex-security-upgrade",
    title: "Case Study: Office Complex Security Upgrade",
    excerpt:
      "How an integrated plan reduced incidents by 70% using patrols and access control.",
    category: "Case Studies",
    author: "ACME Case Team",
    date: "2024-12-20",
    cover:
      "https://images.pexels.com/photos/1249578/pexels-photo-1249578.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: [
      { type: "p", value: "A 1,200-employee site faced repeated after-hours incidents." },
      { type: "h2", value: "Approach" },
      { type: "ul", value: ["Survey & risk mapping", "Night patrols", "Access control upgrades", "Monthly audits"] },
      { type: "p", value: "Result: measurable reduction in incidents and higher satisfaction." },
    ],
  },
];

export const categories = [
  "Industry Insights",
  "Safety Tips",
  "Case Studies",
] as const;
