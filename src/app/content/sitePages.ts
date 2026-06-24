export type SitePage = {
  path: string;
  title: string;
  description: string;
  highlights: string[];
};

export const sitePages: SitePage[] = [
  {
    path: "/book-demo",
    title: "Book A Demo",
    description: "Schedule a 15-minute walkthrough of Klinix tailored to your clinic workflow and PMS stack.",
    highlights: ["Live intake flow preview", "PMS integration review", "Implementation timeline and onboarding plan"],
  },
  {
    path: "/talk-to-sales",
    title: "Talk To Sales",
    description: "Discuss pricing, rollout plans, and multi-location requirements with a Klinix specialist.",
    highlights: ["Volume pricing guidance", "Security and compliance documentation", "Custom integration scoping"],
  },
  {
    path: "/integrations",
    title: "Integrations",
    description: "Connect Klinix to Dentrix, Eaglesoft, Open Dental, Curve, and custom API systems.",
    highlights: ["Native PMS connectors", "Bi-directional patient data sync", "Go-live support for migration"],
  },
  {
    path: "/security",
    title: "Security",
    description: "Understand Klinix security controls and infrastructure protections for patient data.",
    highlights: ["Encryption in transit and at rest", "Access control and audit logs", "Incident response process"],
  },
  {
    path: "/changelog",
    title: "Changelog",
    description: "Track recent product updates and enhancements across intake workflows and integrations.",
    highlights: ["New product releases", "Bug fixes and quality updates", "Integration compatibility changes"],
  },
  {
    path: "/about",
    title: "About Klinix",
    description: "Learn about the team behind Klinix and our mission to modernize dental intake workflows.",
    highlights: ["Company mission and values", "Clinical operations focus", "Roadmap direction"],
  },
  {
    path: "/blog",
    title: "Blog",
    description: "Read operational insights for dental teams improving intake speed and patient experience.",
    highlights: ["Best-practice articles", "Workflow optimization tips", "Compliance guidance for offices"],
  },
  {
    path: "/careers",
    title: "Careers",
    description: "See open roles at Klinix and help build the future of AI-assisted patient intake.",
    highlights: ["Remote-friendly opportunities", "Product and engineering roles", "Customer success positions"],
  },
  {
    path: "/press",
    title: "Press",
    description: "Find press resources, company announcements, and official Klinix media contacts.",
    highlights: ["Brand assets", "Media contact details", "Recent announcements"],
  },
  {
    path: "/contact",
    title: "Contact",
    description: "Reach the Klinix team for support, partnerships, or implementation questions.",
    highlights: ["General inquiries", "Partnership requests", "Support escalation channels"],
  },
  {
    path: "/documentation",
    title: "Documentation",
    description: "Get setup instructions, integration details, and admin usage guides for Klinix.",
    highlights: ["Setup checklist", "Admin guide", "Integration reference"],
  },
  {
    path: "/help-center",
    title: "Help Center",
    description: "Find quick answers to common workflow, account, and onboarding questions.",
    highlights: ["Troubleshooting articles", "Account management help", "Implementation FAQs"],
  },
  {
    path: "/case-studies",
    title: "Case Studies",
    description: "See real-world outcomes from clinics using Klinix to reduce intake friction.",
    highlights: ["Time savings metrics", "Front-desk productivity gains", "Patient experience improvements"],
  },
  {
    path: "/webinars",
    title: "Webinars",
    description: "Register for live and on-demand sessions covering implementation and best practices.",
    highlights: ["Platform walkthroughs", "Compliance sessions", "Operational playbook webinars"],
  },
  {
    path: "/api",
    title: "API",
    description: "Review API capabilities for custom sync workflows and system automation.",
    highlights: ["Authentication and scopes", "Webhook events", "Data model references"],
  },
  {
    path: "/privacy",
    title: "Privacy Policy",
    description: "Read how Klinix collects, uses, and protects account and clinic information.",
    highlights: ["Data handling practices", "User rights and controls", "Policy update notices"],
  },
  {
    path: "/terms",
    title: "Terms Of Service",
    description: "Review the legal terms governing use of the Klinix platform.",
    highlights: ["Service responsibilities", "Account obligations", "Billing and cancellation terms"],
  },
  {
    path: "/hipaa",
    title: "HIPAA Information",
    description: "Understand Klinix HIPAA responsibilities, BAAs, and security practices.",
    highlights: ["BAA availability", "PHI handling safeguards", "Administrative and technical controls"],
  },
  {
    path: "/dpa",
    title: "Data Processing Addendum",
    description: "Review data processing commitments for clinics using Klinix.",
    highlights: ["Processor obligations", "Security measures", "Subprocessor disclosure model"],
  },
  {
    path: "/cookies",
    title: "Cookie Policy",
    description: "Learn what cookies and tracking technologies Klinix uses and why.",
    highlights: ["Essential cookies", "Analytics cookies", "Preference management options"],
  },
  {
    path: "/resources/integration-guides",
    title: "Integration Guides",
    description: "Follow step-by-step guides to connect Klinix with major dental PMS platforms.",
    highlights: ["Dentrix onboarding", "Open Dental mapping", "Validation and go-live checks"],
  },
  {
    path: "/resources/compliance-security",
    title: "Compliance And Security",
    description: "Use practical security and compliance playbooks during implementation.",
    highlights: ["HIPAA readiness checklist", "SOC 2 controls overview", "Security configuration guidance"],
  },
  {
    path: "/resources/success-stories",
    title: "Success Stories",
    description: "Explore clinic stories showing measurable impact after switching to Klinix.",
    highlights: ["Reduced intake time", "Lower admin burden", "Higher patient satisfaction"],
  },
  {
    path: "/pricing/solo",
    title: "Solo Plan",
    description: "Plan details for single-chair practices starting with AI-powered intake.",
    highlights: ["Single PMS integration", "AI intake review", "Core compliance controls"],
  },
  {
    path: "/pricing/practice",
    title: "Practice Plan",
    description: "Most popular plan for growing clinics with multiple operatories and staff.",
    highlights: ["Multiple PMS integrations", "Priority support", "Advanced workflow analytics"],
  },
  {
    path: "/pricing/multi-location",
    title: "Multi-location Plan",
    description: "Enterprise-grade setup for clinic groups managing multiple locations.",
    highlights: ["Dedicated account manager", "Custom integrations", "SLA-backed rollout support"],
  },
];

export const sitePageByPath = new Map(sitePages.map((page) => [page.path, page]));
