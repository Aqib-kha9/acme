import { Shield, Siren, Briefcase, MapPin, Wrench } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  category: string;
  icon: keyof typeof iconMap;
  summary: string;
  benefits: string[];
  useCases: string[];
  faqs: { q: string; a: string }[];
  plans: { name: string; price: string; features: string[] }[];
  video?: string;
};

export const iconMap = { Shield, Siren, Briefcase, MapPin, Wrench } as const;

export const services: Service[] = [
  {
    slug: "guarding",
    title: "Guarding",
    category: "Guarding",
    icon: "Shield",
    summary: "On-site guards ensuring safety, access control, and visitor management.",
    benefits: [
      "Vetted, trained personnel",
      "Access control & reception",
      "Incident logging & reports",
      "24/7 coverage options",
    ],
    useCases: [
      "Office lobbies & reception",
      "Residential societies",
      "Retail & warehouses",
    ],
    faqs: [
      { q: "How fast can you deploy?", a: "Typically within 48–72 hours depending on headcount and location." },
      { q: "Are guards certified?", a: "Yes, guards are vetted and trained with periodic re-certification." },
    ],
    plans: [
      { name: "Basic", price: "₹ —", features: ["Day shift", "Incident reports", "Phone support"] },
      { name: "Standard", price: "₹₹", features: ["Day + Night", "Supervisor checks", "Monthly audits"] },
      { name: "Premium", price: "₹₹₹", features: ["24/7", "Dedicated manager", "SLA & KPIs"] },
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "night-patrol",
    title: "Night Patrol",
    category: "Night Patrol",
    icon: "Siren",
    summary: "Scheduled patrols, lock/unlock checks, and escalation protocols.",
    benefits: ["Patrol routes & timing", "Photo/video evidence", "Emergency response"],
    useCases: ["Business parks", "Warehouses after-hours", "Large campuses"],
    faqs: [
      { q: "Do you provide GPS logs?", a: "Yes, patrols can be tracked and shared in reports." },
      { q: "How are incidents escalated?", a: "Via predefined call trees with documented SLAs." },
    ],
    plans: [
      { name: "Lite", price: "₹", features: ["1 patrol/night", "Weekly report"] },
      { name: "Plus", price: "₹₹", features: ["2–3 patrols/night", "Daily report", "On-call"] },
    ],
  },
  {
    slug: "corporate-security",
    title: "Corporate Security",
    category: "Corporate",
    icon: "Briefcase",
    summary: "Front-desk operations, access badges, escorts, and VIP handling.",
    benefits: ["Professional reception", "Badge/access control", "Visitor logs"],
    useCases: ["IT parks", "MNC HQ", "Financial institutions"],
    faqs: [
      { q: "Do you integrate with access systems?", a: "We work with common controllers and will coordinate with vendors." },
    ],
    plans: [
      { name: "Desk", price: "₹", features: ["Reception", "Visitor log", "Escalation"] },
      { name: "Desk+", price: "₹₹", features: ["Badge printing", "Contractor mgmt", "Analytics"] },
    ],
  },
  {
    slug: "event-security",
    title: "Event Security",
    category: "Events",
    icon: "MapPin",
    summary: "Crowd control, entry screening, and VIP/artist protection.",
    benefits: ["Queue mgmt", "Screening", "Backstage security"],
    useCases: ["Corporate events", "Concerts", "Expos"],
    faqs: [
      { q: "Do you handle permits?", a: "We assist with guidelines; permits remain organizer's responsibility." },
    ],
    plans: [
      { name: "Standard", price: "₹₹", features: ["Entry gates", "Crowd control"] },
      { name: "Pro", price: "₹₹₹", features: ["VIP detail", "Backstage", "Emergency team"] },
    ],
  },
  {
    slug: "custom-solutions",
    title: "Custom Solutions",
    category: "Custom",
    icon: "Wrench",
    summary: "Tailored solutions for unique sites and SLAs.",
    benefits: ["Site survey", "SLA definition", "Training playbooks"],
    useCases: ["Critical infra", "Multi-site enterprises", "Remote assets"],
    faqs: [
      { q: "Can you audit our site?", a: "Yes, we conduct surveys and recommend staffing & protocols." },
    ],
    plans: [
      { name: "Consult", price: "Quote", features: ["Survey", "Plan", "Budgeting"] },
    ],
  },
];
