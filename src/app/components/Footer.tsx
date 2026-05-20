import { Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Features", to: "/features" },
        { label: "Integrations", to: "/integrations" },
        { label: "Pricing", to: "/pricing" },
        { label: "Security", to: "/security" },
        { label: "Changelog", to: "/changelog" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", to: "/about" },
        { label: "Blog", to: "/blog" },
        { label: "Careers", to: "/careers" },
        { label: "Press", to: "/press" },
        { label: "Contact", to: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", to: "/documentation" },
        { label: "Help Center", to: "/help-center" },
        { label: "Case Studies", to: "/case-studies" },
        { label: "Webinars", to: "/webinars" },
        { label: "API", to: "/api" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", to: "/privacy" },
        { label: "Terms", to: "/terms" },
        { label: "HIPAA", to: "/hipaa" },
        { label: "DPA", to: "/dpa" },
        { label: "Cookies", to: "/cookies" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-12 md:grid-cols-5">
          <div className="md:col-span-1">
            <div className="mb-3 tracking-tight" style={{ fontSize: "24px", fontWeight: 600, color: "#0A0A0A" }}>
              Klinix
            </div>
            <p className="text-sm text-muted-foreground">AI-powered patient intake for modern dental practices.</p>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 font-medium">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-border pt-8">
          <div className="text-sm text-muted-foreground">© 2026 Klinix. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Shield className="h-4 w-4" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Award className="h-4 w-4" />
              <span>SOC 2 Type II</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
