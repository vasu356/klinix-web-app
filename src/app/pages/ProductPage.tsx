import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Brain, Plug, Lock, Globe, BarChart3, MessageSquare, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  {
    icon: Brain,
    tag: "AI Engine",
    title: "Clinical intelligence that reads between the lines",
    description: "Klinix AI scans every form submission for allergy conflicts, drug interactions, behavioral flags, and missing critical data — before your team ever sees the patient. Clinicians get a prioritized summary, not a stack of papers.",
    bullets: ["Drug-allergy conflict detection", "Behavioral and anxiety markers", "Incomplete form alerting", "Risk-tiered patient queue"],
  },
  {
    icon: Plug,
    tag: "Integrations",
    title: "Native sync with every major PMS",
    description: "Structured patient data flows directly into Dentrix, Eaglesoft, Open Dental, Curve Hero, and more. No copy-paste, no manual re-entry. New patients are created. Returning profiles are updated automatically.",
    bullets: ["Dentrix, Eaglesoft, Open Dental", "Curve Hero and Carestream", "Custom API and webhook support", "Two-way data sync"],
  },
  {
    icon: Lock,
    tag: "Compliance",
    title: "Built for HIPAA from day one",
    description: "End-to-end encryption, signed BAAs, role-based access controls, and full audit trails come standard. Klinix is SOC 2 Type II certified and undergoes regular third-party security assessments.",
    bullets: ["AES-256 encryption at rest", "TLS 1.3 in transit", "BAA included on all plans", "SOC 2 Type II certified"],
  },
  {
    icon: Globe,
    tag: "Patient Experience",
    title: "Forms patients actually complete",
    description: "Mobile-first, accessible, and available in multiple languages. Adaptive logic skips irrelevant sections. Pre-fill from previous visits. Completion rates above 92% across our network.",
    bullets: ["10+ supported languages", "Adaptive branching logic", "Mobile and tablet optimized", "Returning-patient pre-fill"],
  },
];

const metrics = [
  { value: "92%", label: "Average form completion rate" },
  { value: "< 5 days", label: "Median onboarding time" },
  { value: "200+", label: "Clinics live on Klinix" },
  { value: "0 PHI", label: "Used in AI training" },
];

export function ProductPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-6">Platform overview</span>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.05] mb-6">
              The intake platform dental clinics actually rely on.
            </h1>
            <p className="text-xl text-foreground/65 leading-8 max-w-2xl mb-10">
              Klinix connects AI-powered patient screening, seamless PMS integration, and HIPAA-grade security in one system designed around how dental offices actually work.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/book-demo" className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors shadow-sm">Book a demo</Link>
              <Link to="/how-it-works" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors">
                See the workflow <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics bar */}
      <section className="border-y border-border bg-white py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="text-3xl font-semibold text-foreground mb-1">{m.value}</div>
              <div className="text-sm text-muted-foreground">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Platform pillars */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            const flip = i % 2 !== 0;
            return (
              <div key={p.tag} className={`grid lg:grid-cols-2 gap-16 items-center ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-5">
                    <Icon className="w-3.5 h-3.5" /> {p.tag}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-5 leading-snug">{p.title}</h2>
                  <p className="text-lg text-foreground/65 leading-8 mb-8">{p.description}</p>
                  <ul className="space-y-3">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />{b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
                  <div className="h-64 rounded-2xl bg-gradient-to-br from-primary/8 via-white to-slate-100 flex items-center justify-center">
                    <Icon className="w-20 h-20 text-primary/20" strokeWidth={1} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Additional features grid */}
      <section className="py-20 px-6 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-4">Everything else you need</h2>
            <p className="text-lg text-foreground/65 max-w-xl mx-auto">Built for real dental offices — not just the intake moment.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BarChart3, title: "Analytics dashboard", desc: "Track completion rates, form drop-off, and intake velocity by provider or location." },
              { icon: MessageSquare, title: "Patient messaging", desc: "Automated SMS and email sends the intake link 48 hours before the appointment." },
              { icon: Clock, title: "Real-time updates", desc: "Live dashboard shows front desk which patients have submitted and which still need nudges." },
              { icon: CheckCircle2, title: "Custom form builder", desc: "Drag-and-drop editor to tailor questions, consent forms, and legal text by appointment type." },
              { icon: Lock, title: "Role-based access", desc: "Control what front desk, hygienists, and dentists can see and edit in the intake record." },
              { icon: Globe, title: "Multilingual support", desc: "Forms render in the patient's preferred language with no manual translation effort." },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-sm transition-all">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-slate-950 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Ready to see it in your clinic?</h2>
          <p className="text-slate-300 mb-8 text-lg">A 15-minute demo is all it takes to see Klinix fit your exact workflow.</p>
          <Link to="/book-demo" className="inline-flex rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors">Book your demo</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
