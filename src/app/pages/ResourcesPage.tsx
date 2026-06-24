import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { BookOpen, Shield, Users, Zap, FileText, Video, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const featured = [
  {
    icon: BookOpen,
    tag: "Integration Guide",
    title: "Getting started with Dentrix and Klinix",
    description: "A step-by-step walkthrough for connecting Klinix to Dentrix G7 and Ascend. Covers field mapping, patient matching, and testing the sync before go-live.",
    time: "12 min read",
    href: "/resources/integration-guides",
  },
  {
    icon: Shield,
    tag: "Compliance",
    title: "HIPAA readiness checklist for dental offices",
    description: "Use this checklist when evaluating any patient intake software. Covers encryption, BAAs, audit logs, access controls, and breach notification obligations.",
    time: "8 min read",
    href: "/resources/compliance-security",
  },
  {
    icon: Users,
    tag: "Case Study",
    title: "How Bright Smiles Dental cut intake time by 80%",
    description: "A three-chair practice in Phoenix reduced average intake from 42 minutes to under 8 minutes in their first month on Klinix. Here's exactly what they changed.",
    time: "6 min read",
    href: "/resources/success-stories",
  },
];

const byType = [
  {
    label: "Documentation",
    icon: FileText,
    href: "/documentation",
    items: ["Setup checklist", "Admin user guide", "PMS field mapping reference", "API reference", "Webhook event catalog"],
  },
  {
    label: "Integration Guides",
    icon: Zap,
    href: "/resources/integration-guides",
    items: ["Dentrix G7 & Ascend", "Open Dental", "Eaglesoft", "Curve Hero", "Custom API setup"],
  },
  {
    label: "Help Center",
    icon: BookOpen,
    href: "/help-center",
    items: ["Troubleshooting common errors", "Managing team accounts", "Resending patient intake links", "Updating form templates", "Billing and plan changes"],
  },
  {
    label: "Webinars",
    icon: Video,
    href: "/webinars",
    items: ["Live: Platform overview (monthly)", "HIPAA compliance deep-dive", "Implementing AI intake: best practices", "Multi-location rollout playbook", "Q&A with the Klinix team"],
  },
];

export function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-16 px-6 border-b border-border bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-6">Resources</span>
            <h1 className="text-5xl font-semibold tracking-tight text-foreground leading-[1.05] mb-5">Guides, docs, and everything you need to run Klinix well.</h1>
            <p className="text-xl text-foreground/65 leading-8">From implementation to compliance — resources written by people who work with dental offices every day.</p>
          </div>
        </div>
      </section>

      {/* Featured resources */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-foreground mb-8">Featured</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {featured.map((r) => {
              const Icon = r.icon;
              return (
                <Link key={r.title} to={r.href} className="group rounded-3xl border border-border bg-white p-7 hover:shadow-md hover:border-primary/30 transition-all block">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{r.tag}</span>
                  <h3 className="mt-2 mb-3 font-semibold text-foreground text-base leading-snug group-hover:text-primary transition-colors">{r.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed mb-5">{r.description}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{r.time}</span>
                    <ArrowRight className="w-3 h-3 ml-auto text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* By type */}
      <section className="py-20 px-6 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-foreground mb-10">Browse by type</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {byType.map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.label} className="rounded-2xl border border-border bg-background p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm">{t.label}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {t.items.map((item) => (
                      <li key={item}>
                        <Link to={t.href} className="text-sm text-foreground/60 hover:text-primary transition-colors flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-current shrink-0 opacity-50" />{item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link to={t.href} className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline">
                    View all <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-slate-950 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Can't find what you need?</h2>
          <p className="text-slate-300 mb-8">Our implementation team answers questions directly — no ticket queue.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors">Contact us</Link>
            <Link to="/help-center" className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors">Help center</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
